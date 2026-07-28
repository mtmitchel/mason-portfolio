import fs from "node:fs/promises";
import crypto from "node:crypto";
import path from "node:path";

import {
  conversationInventoryLinkErrors,
  documentInventoryLinkErrors,
  recoveredContentHash,
} from "./evidence-link-validation.mjs";

const root = path.resolve(process.argv[2] ?? ".");
const outputDir = path.resolve(process.argv[3] ?? path.join(root, "outputs/deepl-achievement-recovery"));
const repoRoot = path.resolve(outputDir, "../../..");
const ledger = JSON.parse(await fs.readFile(path.join(outputDir, "achievement-ledger.json"), "utf8"));
const documentInventory = JSON.parse(await fs.readFile(
  path.join(repoRoot, "private-evidence/deepl-document-inventory.json"),
  "utf8",
));
const inventoryById = new Map(
  documentInventory.documents.map((item) => [item.source_record_id, item]),
);

const fileCache = new Map();
async function loadConversationFile(fileName) {
  if (!fileCache.has(fileName)) {
    fileCache.set(fileName, JSON.parse(await fs.readFile(path.join(root, fileName), "utf8")));
  }
  return fileCache.get(fileName);
}

const failures = [];
let sourceRefs = 0;
let messageRefs = 0;
let artifactRefs = 0;
let inventoryLinkRefs = 0;
const artifactFiles = new Set();
const artifactRefKeys = new Set();
const duplicateArtifactRefs = new Set();
const artifactHashCache = new Map();

// `sources[].message_id` is intentionally a direct-message locator schema.
// Validating that locator as user-authored does not make this index the full
// contribution model; current Mason accounts and collaborative artifacts are
// interpreted by the active evidence owners.

async function artifactHash(repoPath) {
  if (!artifactHashCache.has(repoPath)) {
    const bytes = await fs.readFile(path.join(repoRoot, repoPath));
    artifactHashCache.set(repoPath, crypto.createHash("sha256").update(bytes).digest("hex"));
  }
  return artifactHashCache.get(repoPath);
}

async function validateArtifact(repoPath, expectedHash, label) {
  if (!repoPath || path.isAbsolute(repoPath) || repoPath.split(path.sep).includes("..")) {
    failures.push(`${label}: invalid repo-relative path ${repoPath ?? "<missing>"}`);
    return;
  }
  artifactFiles.add(repoPath);
  try {
    const actualHash = await artifactHash(repoPath);
    if (actualHash !== expectedHash) {
      failures.push(`${label}: SHA-256 mismatch for ${repoPath}`);
    }
  } catch (error) {
    failures.push(`${label}: cannot load ${repoPath}: ${error.message}`);
  }
}

for (const achievement of ledger.achievements) {
  for (const source of achievement.sources ?? []) {
    sourceRefs += 1;
    let conversations;
    try {
      conversations = await loadConversationFile(source.source_file);
    } catch (error) {
      failures.push(`${achievement.id}: cannot load ${source.source_file}: ${error.message}`);
      continue;
    }
    const conversation = conversations.find((item) => item.conversation_id === source.conversation_id);
    if (!conversation) {
      failures.push(`${achievement.id}: conversation ${source.conversation_id} not found in ${source.source_file}`);
      continue;
    }
    if (source.message_id) {
      messageRefs += 1;
      const message = Object.values(conversation.mapping ?? {})
        .map((node) => node?.message)
        .find((item) => item?.id === source.message_id);
      if (!message) {
        failures.push(`${achievement.id}: message ${source.message_id} not found in ${source.conversation_id}`);
      } else if (message.author?.role !== "user") {
        failures.push(`${achievement.id}: message ${source.message_id} is not user-authored`);
      }
    }
    if (source.inventory_source_record_id) {
      inventoryLinkRefs += 1;
      const inventoryRecord = inventoryById.get(source.inventory_source_record_id);
      if (!inventoryRecord) {
        failures.push(`${achievement.id}: inventory record not found: ${source.inventory_source_record_id}`);
      } else {
        for (const error of conversationInventoryLinkErrors(source, inventoryRecord)) {
          failures.push(`${achievement.id}: ${error}`);
        }
      }
    }
  }
  for (const source of achievement.artifact_sources ?? []) {
    artifactRefs += 1;
    const pages = source.pages ?? [];
    const key = `${achievement.id}:${source.repo_path}:${pages.join(",")}`;
    if (artifactRefKeys.has(key)) duplicateArtifactRefs.add(key);
    artifactRefKeys.add(key);
    if (source.source_type !== "local_pdf") {
      failures.push(`${achievement.id}: unsupported artifact source type ${source.source_type ?? "<missing>"}`);
    }
    if (!Array.isArray(pages) || !pages.length || pages.some((page) => !Number.isInteger(page) || page < 1)) {
      failures.push(`${achievement.id}: invalid artifact page list for ${source.repo_path ?? "<missing>"}`);
    }
    if (!/^[a-f0-9]{64}$/.test(source.sha256 ?? "")) {
      failures.push(`${achievement.id}: invalid SHA-256 for ${source.repo_path ?? "<missing>"}`);
      continue;
    }
    await validateArtifact(source.repo_path, source.sha256, achievement.id);
  }
  for (const source of achievement.document_sources ?? []) {
    if (!source.repo_path || path.isAbsolute(source.repo_path) || source.repo_path.split(path.sep).includes("..")) {
      failures.push(`${achievement.id}: invalid document source path ${source.repo_path ?? "<missing>"}`);
      continue;
    }
    let actualHash = null;
    try {
      actualHash = recoveredContentHash(
        await fs.readFile(path.join(repoRoot, source.repo_path), "utf8"),
      );
    } catch (error) {
      failures.push(`${achievement.id}: cannot load document source ${source.repo_path}: ${error.message}`);
    }
    inventoryLinkRefs += 1;
    const inventoryRecord = inventoryById.get(source.inventory_source_record_id);
    if (!inventoryRecord) {
      failures.push(`${achievement.id}: inventory record not found: ${source.inventory_source_record_id ?? "<missing>"}`);
    } else {
      for (const error of documentInventoryLinkErrors(source, inventoryRecord, actualHash)) {
        failures.push(`${achievement.id}: ${error}`);
      }
    }
  }
}

for (const key of duplicateArtifactRefs) failures.push(`duplicate artifact reference: ${key}`);

const sourceMessages = JSON.parse(await fs.readFile(path.join(outputDir, "source-messages.json"), "utf8"));
const duplicateKeys = new Set();
const seen = new Set();
for (const item of sourceMessages) {
  const key = `${item.conversation_id}:${item.message_id}`;
  if (seen.has(key)) duplicateKeys.add(key);
  seen.add(key);
}

const markdownFiles = ["career-inventory.md", "outcome-evidence.md", "linkedin-bullets.md", "extraction-summary.md", "final-achievements-and-talking-points.md"];
for (const fileName of markdownFiles) {
  const text = await fs.readFile(path.join(outputDir, fileName), "utf8");
  if (!text.trim()) failures.push(`${fileName}: empty file`);
}

const finalList = await fs.readFile(path.join(outputDir, "final-achievements-and-talking-points.md"), "utf8");
const missingFinalListIds = [];
const duplicateFinalListIds = [];
for (const achievement of ledger.achievements) {
  const token = `\`${achievement.id}\``;
  const occurrences = finalList.split(token).length - 1;
  if (occurrences === 0) missingFinalListIds.push(achievement.id);
  if (occurrences > 1) duplicateFinalListIds.push(achievement.id);
}
if (missingFinalListIds.length) failures.push(`final list missing achievement IDs: ${missingFinalListIds.join(", ")}`);
if (duplicateFinalListIds.length) failures.push(`final list repeats achievement IDs: ${duplicateFinalListIds.join(", ")}`);

const masterPath = "private-evidence/performance-review.md";
const masterText = await fs.readFile(path.join(repoRoot, masterPath), "utf8");
if (!masterText.trim()) failures.push(`${masterPath}: empty file`);

const masterSourceManifest = [
  ["private-evidence/source-documents/performance-review/1st half bob.pdf", "b5d7ea29d6c3a340fd0df89b2347548cfc798f6bbcdad5a7120e717132d05c98"],
  ["private-evidence/source-documents/performance-review/Bob.pdf", "862eadb2d095fc7e83c2e36b530c5e2c0bbe92bb15c9fbd60aa4227654c6b799"],
  ["archive/research/performance-review-supplemental/derivative-drafts/2024-reflection-ai-expanded-leadership-draft.md", "7a4c46cc39af8810bd3d9e4a4d8f955e5e8594bd5b624b11eb51dabb62a7d618"],
  ["archive/research/performance-review-supplemental/derivative-drafts/2024-reflection-ai-expanded-goals-variant.md", "ad7473b5e5304ba2f2aacdd001bcc682d9a03c0d24112a097b5294106d1817eb"],
  ["archive/research/performance-review-supplemental/derivative-drafts/2024-reflection-contribution-wording-partial-repair.md", "305e46903b46c898195793cb172b042ccf3aa8944584e8cf3c3718e1a7cd4083"],
  ["archive/research/performance-review-supplemental/derivative-drafts/2024-reflection-contribution-wording-closest-summary.md", "97737600bda8a2fe0eb936cd613f383ba7df001e9fed820c6fa9b06f053d37a3"],
  ["archive/research/performance-review-supplemental/guidance/DKHGoal checkins and individual goals at DeepL240125063929.pdf", "8c31d1f6cb5ecc42c6a55836f5a77e4e729a8b7d6abb9fe2aa82dcc7544ae683"],
  ["archive/research/performance-review-supplemental/guidance/DKHPerformance Reflections for Individuals240125061015.pdf", "009ad4920aadda74de4b4445d9b86301b5762007fc87dc3778df3b2944cfc6ca"],
];
for (const [repoPath, expectedHash] of masterSourceManifest) {
  await validateArtifact(repoPath, expectedHash, "master source manifest");
  const masterRelativePath = path.relative(path.dirname(masterPath), repoPath);
  if (!masterText.includes(`\`${masterRelativePath}\``) || !masterText.includes(`\`${expectedHash}\``)) {
    failures.push(`master source inventory missing ${repoPath} or its SHA-256`);
  }
}

const result = {
  achievement_records: ledger.achievements.length,
  source_references_checked: sourceRefs,
  message_references_checked: messageRefs,
  artifact_references_checked: artifactRefs,
  inventory_links_checked: inventoryLinkRefs,
  unique_artifact_files_checked: artifactFiles.size,
  master_source_files_checked: masterSourceManifest.length,
  extracted_source_messages: sourceMessages.length,
  duplicate_source_message_keys: duplicateKeys.size,
  duplicate_artifact_references: duplicateArtifactRefs.size,
  final_list_missing_achievement_ids: missingFinalListIds.length,
  final_list_duplicate_achievement_ids: duplicateFinalListIds.length,
  validation_failures: failures.length,
  failures,
};

console.log(JSON.stringify(result, null, 2));
if (failures.length) process.exitCode = 1;
