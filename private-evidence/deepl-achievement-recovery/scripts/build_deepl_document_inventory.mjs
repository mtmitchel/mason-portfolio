import crypto from "node:crypto";
import { execFile } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

export const INVENTORY_SCHEMA_VERSION = "1.0";

const DOCUMENT_EXTENSIONS = new Set([
  ".csv",
  ".doc",
  ".docx",
  ".json",
  ".md",
  ".ods",
  ".odt",
  ".pdf",
  ".ppt",
  ".pptx",
  ".rtf",
  ".txt",
  ".xls",
  ".xlsx",
]);

const DOCUMENT_MIME_PREFIXES = [
  "application/csv",
  "application/json",
  "application/msword",
  "application/pdf",
  "application/rtf",
  "application/vnd.ms-",
  "application/vnd.oasis.",
  "application/vnd.openxmlformats-officedocument.",
  "text/csv",
  "text/markdown",
  "text/plain",
];

const DEEPL_SIGNALS = [
  /\bdeepl\b/i,
  /\bwrite pro\b/i,
  /\bcontent design system\b/i,
  /\bcontent style guide\b/i,
  /\bbrand voice (?:and|&) tone\b/i,
  /\bmonetization\b/i,
  /\bpricing page\b/i,
  /\bupgrade modals?\b/i,
  /\bmultiple subscriptions?\b/i,
  /\baccount terminology\b/i,
  /\btranslator (?:copy|extension|tool|pricing|plan)\b/i,
  /\bproject brief (?:write|translator|workflow integrations)\b/i,
  /\bpro driver\b/i,
  /\brecovery email flow\b/i,
  /\b(?:CAST|CEX|DEV|DKH|DM)-?\d+\b/i,
  /deepl\.atlassian\.net/i,
  /jira\.linguee\.internal/i,
];

const RELEVANT_CLAUDE_PROJECT_IDS = new Set([
  "394a6ba8-9973-418a-aafc-995eb184be8d", // Pricing page analysis
  "4d72e6f7-0de0-4b64-863b-cda4ad685f3e", // Translator extension
  "5adb8ed6-805f-4d64-b2cf-f510d418b024", // Unified pricing page
  "a43df3e2-309d-47af-891b-0fdc645bb5b4", // Content Design Style Guide
  "e150d8d1-4f3a-433e-966e-23252f510fa4", // D-Content
  "ea9007a5-ec4d-477b-b5b7-a45582378f53", // Upgrade modals
  "fbd1a0f4-4bd1-4002-b06f-00932f34a94a", // Error codes
]);

const ASSISTANT_SYNTHESIS_HASHES = new Set([
  "306245be98940cbdc5f9cf62f24a7eaa5b9986aa7546ff83084740c662a3b1a2",
  "448c7706fb84868f6b72c00fbe5debfb553053ba79f390a1bde5b0454f3679a5",
  "aa77d3cc297f8201121be595e356c4c92579a34d8375e5c3cca0e8a1091480b4",
  "c7d70e10d3d9a3533cdfa8b234c50dc7cee23594b297b29ca08292d87693462d",
]);

const UNKNOWN_ORIGIN_HASHES = new Set([
  "01a469b3a09adf6332ae839491b7bda395ed5b4f5379dfe6a786cfdb5b1c833e",
  "33d728247dfd4b603c85c3a0a45b17deb5891c7b52ba937b01bbaa514c2615c2",
  "e112702d52c9ea8df3aedd5caf883e1841ebdef414f39f1cee5b0009aa41dfc9",
]);

const INTERNAL_ORGANIZATIONAL_HASHES = new Set([
  "049544c63511e9152c446cf6a7f623dfffe99ed45981265cb7a0fa70c91217e7",
  "13d42521171b0c198527e1006ef3a1f586a18aade752319309cf08f1610fc5c3",
  "35e0b713375bdab1333459920a9504e36894e684879b667c56681394564a0f0a",
  "44746adc83993ecc60f233127cc5e80d0d5103044eea51e706525169808cbd03",
  "4b8eaca051561b04bcbac0257cd3bfaf3a3cece43bd6e239d852e530c3222187",
  "599c12e11b19e4214a7d7c5700d22d26ef97cc0c61eb3ca333f2c385edf38149",
  "60063f367c290a420dd05daac84d1cf5d99d27c180b3947c9158eb1604000818",
  "6d53a48958c5c4e3c1d0f7453cc91e4b41486701fbf5cf0a1d8b7541c2d2acd7",
  "721899ac595bff0ac3409c6de5260fd450d66b31c00862461c17fcb98d0c5ea1",
  "726406bdc388ddd494fbd1a924b1bd1649bb2db62b3a278e0ec071c0629afdcf",
  "7424b926d128204c1139acc995ffd9445a3fed3318d01dde8fa605c2c9fa5c64",
  "9b83ef387c15e7886a306ffe5432517cc8b9167d1e0d3993471fc5341fb88e1c",
  "aadf66ab391a74e3bd08507621cfb3b5ad02b9db4cbda0761497ea6b30c049f7",
  "ab80b603ff1f2c63f2eed837251c9b6d5a1166dfd02d012739886b22b59912bd",
  "b5190c367bf679b5a216c35edbf4751a8aea0c32684be64dae31e5503e3d9bd3",
  "c959ebe37f26d94381e063cab7b182058b679e454f1aa9f046faff3372436c34",
  "d50e6fedaad2c446a9900a18e2050233ecf09e6997f934c65a836bce147931f2",
  "d7eeef5371ee834729b99be9a7a3c6a1b13a220bbbf814b8b39766028c47f523",
  "de78ec142d87632f2eae24cb064d80ba3461f58b9f4bd7559bcfdf5a47279fb1",
  "e2c0accda1b29396382e5a6f53a300d29b6d5083e47c02d973ce3c56486092fe",
]);

const CLAIM_STATUSES = new Set([
  "verified",
  "supported-but-partial",
  "weak",
  "contradicted",
  "unknown",
]);

const CUSTODY_VALUES = new Set([
  "original-binary",
  "retained-full",
  "retained-partial",
  "metadata-only",
]);

const ORIGIN_VALUES = new Set([
  "public-product-source",
  "internal-organizational-record",
  "mason-authored",
  "assistant-synthesis",
  "ai-assisted-working-artifact",
  "mixed",
  "unknown",
]);

const PRIVACY_VALUES = new Set([
  "public",
  "internal-restricted",
  "unknown-private",
]);

const DEEPL_EMPLOYMENT_CONTEXT_CUTOFF = "2025-03-31T23:59:59.999Z";

const EXPERIMENT_UPLOAD_SUMMARIES = new Map([
  [
    "44d90bf7-856c-4c52-a0a3-89aadbf46ed7",
    "043bd9e8-59d4-4ce0-8e17-0c9cbf27495e",
  ],
  [
    "e52df003-985c-4098-932d-87e14de39eff",
    "895ebae1-bf9e-414f-b167-a9b07a1335f4",
  ],
]);

function sha256(value) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

function normalizeWhitespace(value) {
  return String(value ?? "").replace(/\s+/g, " ").trim();
}

export function normalizeDocumentTitle(value) {
  return normalizeWhitespace(value)
    .replace(/\+/g, " ")
    .replace(/\s+\.(?=[A-Za-z0-9]+$)/, ".")
    .replace(/\(\d+\)(?=\.[A-Za-z0-9]+$)/, "")
    .replace(/\.[A-Za-z0-9]+$/, "")
    .toLocaleLowerCase("en");
}

export function documentFamilyId(title) {
  return `title-${sha256(normalizeDocumentTitle(title)).slice(0, 12)}`;
}

export function isDocumentLike(name, mimeType = "") {
  const extension = path.extname(String(name ?? "")).toLocaleLowerCase("en");
  const normalizedMime = String(mimeType ?? "").toLocaleLowerCase("en");
  return DOCUMENT_EXTENSIONS.has(extension)
    || DOCUMENT_MIME_PREFIXES.some((prefix) => normalizedMime.startsWith(prefix));
}

export function hasDeepLSignal(value) {
  const text = String(value ?? "");
  return DEEPL_SIGNALS.some((pattern) => pattern.test(text));
}

function hasDeepLBrandSignal(value) {
  return /\bdeepl\b/i.test(String(value ?? ""));
}

function messageStrings(message) {
  return (message?.content?.parts ?? [])
    .filter((part) => typeof part === "string")
    .map((part) => part.trim())
    .filter(Boolean);
}

function isoDate(epochOrIso) {
  if (typeof epochOrIso === "string" && epochOrIso.trim()) {
    const parsed = new Date(epochOrIso);
    return Number.isNaN(parsed.getTime()) ? null : parsed.toISOString();
  }
  if (!Number.isFinite(epochOrIso)) return null;
  return new Date(epochOrIso * 1000).toISOString();
}

function dateRange(values) {
  const dates = values.filter(Boolean).sort();
  return {
    first_seen: dates[0] ?? null,
    last_seen: dates.at(-1) ?? null,
  };
}

function sortedUnique(values) {
  return [...new Set(values.filter((value) => value !== null && value !== undefined))].sort();
}

function safeAccountAlias(accountUuid) {
  return `claude-${sha256(accountUuid).slice(0, 8)}`;
}

function claimCoverageForClaude(title) {
  const contribution = /^(?:Content Design System\.pdf|Content Design System_Plans\.pdf|\(Content\) Design System\.pdf)$/i.test(title)
    ? "supported-but-partial"
    : "unknown";
  const lifecycle = /DM-2112|CAST-Error Codes|\(Content\) Design System/i.test(title)
    ? "supported-but-partial"
    : "unknown";
  return {
    artifact: "verified",
    contribution,
    lifecycle,
    outcome: "unknown",
  };
}

export function assistantDerivativesForChatGpt(occurrences) {
  return sortedUnique(
    occurrences
      .filter((item) => item.kind === "attachment")
      .map((item) => EXPERIMENT_UPLOAD_SUMMARIES.get(item.message_id)),
  ).map((messageId) => ({
    kind: "assistant-generated-summary",
    source_file: "conversations-015.json",
    conversation_id: "67934ac4-b938-8006-acc7-78ae99eacfce",
    message_id: messageId,
    claim_effect: "discovery-only; does not establish source contents",
  }));
}

function originForClaudeHash(contentHash) {
  if (ASSISTANT_SYNTHESIS_HASHES.has(contentHash)) return "assistant-synthesis";
  if (INTERNAL_ORGANIZATIONAL_HASHES.has(contentHash)) return "internal-organizational-record";
  return "unknown";
}

function validateEnum(value, allowed, label) {
  if (!allowed.has(value)) throw new Error(`${label}: unsupported value ${value}`);
}

async function readJson(filePath) {
  return JSON.parse(await fs.readFile(filePath, "utf8"));
}

async function pathExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function listFiles(directory, predicate = () => true) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile() && predicate(entry.name))
    .map((entry) => path.join(directory, entry.name))
    .sort();
}

async function loadRecoveredSources(repoRoot) {
  const recoveredDir = path.join(repoRoot, "private-evidence/source-documents/recovered");
  const byHash = new Map();
  if (!(await pathExists(recoveredDir))) return byHash;

  for (const filePath of await listFiles(recoveredDir, (name) => name.endsWith(".md"))) {
    const text = await fs.readFile(filePath, "utf8");
    const frontmatter = text.match(/^---\n([\s\S]*?)\n---\n/);
    const contentHash = frontmatter?.[1].match(/^sha256:\s*([a-f0-9]{64})$/m)?.[1] ?? null;
    if (!contentHash) continue;
    byHash.set(contentHash, path.relative(repoRoot, filePath).split(path.sep).join("/"));
  }
  return byHash;
}

async function discoverClaudeBatches(claudeRoot) {
  const entries = await fs.readdir(claudeRoot, { withFileTypes: true });
  const batches = new Map();

  for (const entry of entries) {
    if (entry.isDirectory() && /^data-.+-batch-\d+$/.test(entry.name)) {
      batches.set(entry.name, {
        stem: entry.name,
        directory: path.join(claudeRoot, entry.name),
        zip: null,
      });
    } else if (entry.isFile() && /^data-.+-batch-\d+\.zip$/.test(entry.name)) {
      const stem = entry.name.slice(0, -4);
      const batch = batches.get(stem) ?? { stem, directory: null, zip: null };
      batch.zip = path.join(claudeRoot, entry.name);
      batches.set(stem, batch);
    }
  }
  return [...batches.values()].sort((a, b) => a.stem.localeCompare(b.stem));
}

async function loadClaudeEntry(batch, entry) {
  if (batch.zip) {
    const { stdout } = await execFileAsync("unzip", ["-p", batch.zip, entry], {
      maxBuffer: 250 * 1024 * 1024,
    });
    return JSON.parse(stdout);
  }
  if (!batch.directory) return null;
  const filePath = path.join(batch.directory, entry);
  return pathExists(filePath) ? readJson(filePath) : null;
}

async function loadClaudeProjects(batch) {
  let projectEntries = [];
  if (batch.zip) {
    const { stdout: listing } = await execFileAsync("unzip", ["-Z1", batch.zip], {
      maxBuffer: 20 * 1024 * 1024,
    });
    projectEntries = listing
      .split(/\r?\n/)
      .filter((name) => /^projects\/[^/]+\.json$/.test(name))
      .sort();
  } else if (batch.directory) {
    const projectDirectory = path.join(batch.directory, "projects");
    if (!(await pathExists(projectDirectory))) return [];
    projectEntries = (await listFiles(projectDirectory, (name) => name.endsWith(".json")))
      .map((filePath) => `projects/${path.basename(filePath)}`);
  }
  const projects = [];
  for (const entry of projectEntries) {
    projects.push(await loadClaudeEntry(batch, entry));
  }
  return projects;
}

async function buildClaudeRecords(claudeRoot, repoRoot) {
  const recoveredByHash = await loadRecoveredSources(repoRoot);
  const batches = await discoverClaudeBatches(claudeRoot);
  const records = [];
  let projectsScanned = 0;
  let relevantProjects = 0;
  let documentsScanned = 0;
  let conversationsScanned = 0;
  let conversationAttachmentsScanned = 0;
  let conversationAttachmentsIncluded = 0;
  let conversationContentCandidatesHeldForReview = 0;

  for (const batch of batches) {
    const projects = await loadClaudeProjects(batch);
    const users = await loadClaudeEntry(batch, "users.json");
    const conversations = await loadClaudeEntry(batch, "conversations.json") ?? [];
    projectsScanned += projects.length;
    conversationsScanned += conversations.length;
    const accountUuid = users?.[0]?.uuid;
    if (!accountUuid) throw new Error(`${batch.stem}: missing Claude account UUID`);
    const accountAlias = safeAccountAlias(accountUuid);
    for (const project of projects) {
      const docs = Array.isArray(project.docs) ? project.docs : [];
      documentsScanned += docs.length;
      if (!RELEVANT_CLAUDE_PROJECT_IDS.has(project.uuid)) continue;
      relevantProjects += 1;

      for (const doc of docs) {
        const content = String(doc.content ?? "");
        const contentHash = sha256(content);
        const origin = originForClaudeHash(contentHash);
        const sourceRecordId = `claude-${doc.uuid}`;
        const repoPath = recoveredByHash.get(contentHash) ?? null;
        const claimCoverage = claimCoverageForClaude(doc.filename);

        records.push({
          source_record_id: sourceRecordId,
          source_system: "claude-projects",
          canonical_name: doc.filename,
          title_group_id: documentFamilyId(doc.filename),
          exact_content_group_id: `content-${contentHash.slice(0, 16)}`,
          custody: "retained-full",
          origin,
          privacy: "internal-restricted",
          publication_default: "deny",
          claim_coverage: claimCoverage,
          retained_text: {
            chars: [...content].length,
            sha256: contentHash,
            completeness_basis: "Claude project export document content field",
          },
          binary: null,
          recovered_repo_path: repoPath,
          date_range: dateRange([doc.created_at, project.created_at].map(isoDate)),
          locators: [{
            account_alias: accountAlias,
            project_id: project.uuid,
            document_id: doc.uuid,
          }],
        });
      }
    }

    const conversationRecords = new Map();
    for (const conversation of conversations) {
      for (const message of conversation.chat_messages ?? []) {
        const files = Array.isArray(message.files) ? message.files : [];
        for (const [attachmentIndex, attachment] of (message.attachments ?? []).entries()) {
          conversationAttachmentsScanned += 1;
          const fileName = attachment.file_name ?? "Untitled document";
          const fileType = attachment.file_type ?? "";
          const content = String(attachment.extracted_content ?? "");
          const contentHash = sha256(content);
          if (!isDocumentLike(fileName, fileType)) continue;
          const nameRelevant = hasDeepLSignal(fileName);
          const contentRelevant = hasDeepLSignal(content);
          if (!nameRelevant && !contentRelevant) continue;
          const seenAt = isoDate(message.created_at ?? conversation.created_at);
          const afterCutoff = seenAt && seenAt > DEEPL_EMPLOYMENT_CONTEXT_CUTOFF;
          const explicitlyReviewedContent = recoveredByHash.has(contentHash)
            || ASSISTANT_SYNTHESIS_HASHES.has(contentHash)
            || INTERNAL_ORGANIZATIONAL_HASHES.has(contentHash)
            || UNKNOWN_ORIGIN_HASHES.has(contentHash);
          const safeDirectName = nameRelevant
            && (!afterCutoff || hasDeepLBrandSignal(fileName));
          if (!safeDirectName && !explicitlyReviewedContent) {
            conversationContentCandidatesHeldForReview += 1;
            continue;
          }
          conversationAttachmentsIncluded += 1;

          const matchingFiles = files.filter((file) => file.file_name === fileName);
          const fileUuid = matchingFiles.length === 1 ? matchingFiles[0].file_uuid : null;
          const fallbackId = sha256([
            accountAlias,
            conversation.uuid,
            message.uuid,
            attachmentIndex,
          ].join(":")).slice(0, 24);
          const sourceRecordId = `claude-conversation-${fileUuid ?? fallbackId}`;
          const locator = {
            account_alias: accountAlias,
            conversation_id: conversation.uuid,
            message_id: message.uuid,
            file_uuid: fileUuid,
            attachment_index: attachmentIndex,
          };

          if (conversationRecords.has(sourceRecordId)) {
            const existing = conversationRecords.get(sourceRecordId);
            existing.locators.push(locator);
            if (content.length > existing.retained_text.chars) {
              existing.canonical_name = fileName;
              existing.exact_content_group_id = `content-${contentHash.slice(0, 16)}`;
              existing.retained_text = {
                chars: [...content].length,
                sha256: contentHash,
                completeness_basis: "Claude conversation attachment extracted_content field; original binary not held",
              };
            }
            continue;
          }

          conversationRecords.set(sourceRecordId, {
            source_record_id: sourceRecordId,
            source_system: "claude-conversations",
            canonical_name: fileName,
            title_group_id: documentFamilyId(fileName),
            exact_content_group_id: `content-${contentHash.slice(0, 16)}`,
            custody: "retained-full",
            origin: "unknown",
            privacy: "internal-restricted",
            publication_default: "deny",
            claim_coverage: {
              artifact: "verified",
              contribution: "unknown",
              lifecycle: "unknown",
              outcome: "unknown",
            },
            retained_text: {
              chars: [...content].length,
              sha256: contentHash,
              completeness_basis: "Claude conversation attachment extracted_content field; original binary not held",
            },
            binary: null,
            recovered_repo_path: recoveredByHash.get(contentHash) ?? null,
            attachment_metadata: {
              file_uuid: fileUuid,
              file_type: fileType || null,
              declared_size: Number.isFinite(attachment.file_size) ? attachment.file_size : null,
            },
            date_range: dateRange([message.created_at, conversation.created_at].map(isoDate)),
            locators: [locator],
          });
        }
      }
    }
    records.push(...conversationRecords.values());
  }

  const groupSizes = new Map();
  for (const record of records) {
    groupSizes.set(record.exact_content_group_id, (groupSizes.get(record.exact_content_group_id) ?? 0) + 1);
  }
  for (const record of records) {
    record.exact_content_group_size = groupSizes.get(record.exact_content_group_id);
  }

  return {
    records,
    summary: {
      batches_scanned: batches.length,
      projects_scanned: projectsScanned,
      relevant_projects: relevantProjects,
      project_document_records_scanned: documentsScanned,
      conversations_scanned: conversationsScanned,
      conversation_attachment_records_scanned: conversationAttachmentsScanned,
      conversation_attachment_records_included: conversationAttachmentsIncluded,
      conversation_content_candidates_held_for_review: conversationContentCandidatesHeldForReview,
      included_source_records: records.length,
      exact_content_documents: new Set(records.map((record) => record.exact_content_group_id)).size,
      recovered_content_documents: new Set(records.filter((record) => record.recovered_repo_path).map((record) => record.exact_content_group_id)).size,
    },
  };
}

export function detectBlobSignature(buffer) {
  if (buffer.subarray(0, 5).toString("ascii") === "%PDF-") return "pdf";
  if (buffer.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) return "png";
  if (buffer.subarray(0, 3).equals(Buffer.from([0xff, 0xd8, 0xff]))) return "jpeg";
  if (buffer.subarray(0, 4).toString("ascii") === "RIFF" && buffer.subarray(8, 12).toString("ascii") === "WAVE") return "wav";
  if (buffer.subarray(0, 4).toString("ascii") === "RIFF" && buffer.subarray(8, 12).toString("ascii") === "WEBP") return "webp";
  if (buffer.subarray(0, 4).toString("hex") === "504b0304") return "zip-container";
  if (buffer.subarray(0, 8).toString("hex") === "d0cf11e0a1b11ae1") return "ole-container";
  if (buffer.subarray(0, 4).toString("ascii") === "GIF8") return "gif";
  const prefix = buffer.toString("utf8").replace(/^\uFEFF/, "").trimStart();
  if (prefix.startsWith("{") || prefix.startsWith("[")) return "json-or-text";
  return "other";
}

async function inspectBlob(filePath) {
  const handle = await fs.open(filePath, "r");
  try {
    const buffer = Buffer.alloc(32);
    const { bytesRead } = await handle.read(buffer, 0, buffer.length, 0);
    const stat = await handle.stat();
    return {
      signature: detectBlobSignature(buffer.subarray(0, bytesRead)),
      size: stat.size,
      sha256: null,
    };
  } finally {
    await handle.close();
  }
}

async function blobHash(filePath) {
  return sha256(await fs.readFile(filePath));
}

async function scanBlobs(chatgptRoot) {
  const files = await listFiles(chatgptRoot, (name) => name.endsWith(".dat"));
  const byName = new Map();
  const signatures = {};
  for (const filePath of files) {
    const metadata = await inspectBlob(filePath);
    signatures[metadata.signature] = (signatures[metadata.signature] ?? 0) + 1;
    byName.set(path.basename(filePath), { filePath, ...metadata });
  }
  return {
    byName,
    summary: {
      dat_blobs: files.length,
      signatures: Object.fromEntries(Object.entries(signatures).sort(([a], [b]) => a.localeCompare(b))),
    },
  };
}

export function resolveBlobCandidates(fileId) {
  return [`${fileId}.dat`];
}

export function shouldIncludeChatGptRecord({
  nameRelevant,
  snippetRelevant,
  brandNameRelevant,
  brandSnippetRelevant,
  earliestSeen,
}) {
  if (!nameRelevant && !snippetRelevant) return false;
  if (!earliestSeen || earliestSeen <= DEEPL_EMPLOYMENT_CONTEXT_CUTOFF) return true;
  return Boolean(brandNameRelevant || brandSnippetRelevant);
}

function sourceOccurrence(sourceFile, conversation, message, kind) {
  return {
    source_file: sourceFile,
    conversation_id: conversation.conversation_id,
    message_id: message.id ?? null,
    message_role: message.author?.role ?? null,
    kind,
    seen_at: isoDate(message.create_time ?? conversation.create_time),
  };
}

function recordName(record) {
  const counts = new Map();
  for (const name of record.names) counts.set(name, (counts.get(name) ?? 0) + 1);
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))[0]?.[0] ?? "Untitled document";
}

async function buildChatGptRecords(chatgptRoot) {
  const manifest = await readJson(path.join(chatgptRoot, "export_manifest.json"));
  const shardNames = manifest.logical_files?.["conversations.json"]?.files;
  if (!Array.isArray(shardNames) || !shardNames.length) {
    throw new Error("ChatGPT export manifest does not list conversation shards");
  }
  const conversationFiles = shardNames.map((name) => path.join(chatgptRoot, name));
  const recordsById = new Map();
  const allContentReferenceIds = new Set();
  const retainedContentReferenceIds = new Set();
  const allAttachmentIds = new Set();
  const documentAttachmentIds = new Set();
  let conversationsScanned = 0;
  let attachmentOccurrences = 0;
  let contentReferenceOccurrences = 0;
  let retainedContentReferenceOccurrences = 0;

  function getRecord(fileId) {
    if (!recordsById.has(fileId)) {
      recordsById.set(fileId, {
        fileId,
        names: [],
        mimeTypes: [],
        sizes: [],
        conversationRelevant: false,
        nameRelevant: false,
        brandNameRelevant: false,
        snippets: [],
        snippetRelevant: false,
        brandSnippetRelevant: false,
        occurrences: [],
      });
    }
    return recordsById.get(fileId);
  }

  for (const filePath of conversationFiles) {
    const sourceFile = path.basename(filePath);
    const conversations = await readJson(filePath);
    for (const conversation of conversations) {
      conversationsScanned += 1;
      const messages = Object.values(conversation.mapping ?? {})
        .map((node) => node?.message)
        .filter(Boolean);
      const userText = messages
        .filter((message) => message.author?.role === "user")
        .flatMap(messageStrings)
        .join("\n");
      const attachmentNames = [];
      for (const message of messages) {
        for (const attachment of message.metadata?.attachments ?? []) {
          if (attachment?.name) attachmentNames.push(attachment.name);
        }
        for (const reference of message.metadata?.content_references ?? []) {
          if (reference?.name) attachmentNames.push(reference.name);
        }
      }
      const conversationRelevant = hasDeepLSignal([
        conversation.title,
        userText,
        attachmentNames.join("\n"),
      ].join("\n"));

      for (const message of messages) {
        for (const attachment of message.metadata?.attachments ?? []) {
          attachmentOccurrences += 1;
          if (attachment?.id) allAttachmentIds.add(attachment.id);
          if (!attachment?.id || !isDocumentLike(attachment.name, attachment.mime_type)) continue;
          documentAttachmentIds.add(attachment.id);
          const record = getRecord(attachment.id);
          record.names.push(attachment.name ?? "Untitled document");
          record.mimeTypes.push(attachment.mime_type ?? attachment.mimeType ?? null);
          record.sizes.push(Number.isFinite(attachment.size) ? attachment.size : null);
          record.conversationRelevant ||= conversationRelevant;
          record.nameRelevant ||= hasDeepLSignal(attachment.name);
          record.brandNameRelevant ||= hasDeepLBrandSignal(attachment.name);
          record.occurrences.push(sourceOccurrence(sourceFile, conversation, message, "attachment"));
        }

        for (const reference of message.metadata?.content_references ?? []) {
          if (reference?.type !== "file" || !reference?.id) continue;
          contentReferenceOccurrences += 1;
          allContentReferenceIds.add(reference.id);
          const snippet = String(reference.snippet ?? "").trim();
          if (snippet) {
            retainedContentReferenceOccurrences += 1;
            retainedContentReferenceIds.add(reference.id);
          }
          if (!isDocumentLike(reference.name, reference.mime_type)) continue;
          const record = getRecord(reference.id);
          record.names.push(reference.name ?? "Untitled document");
          record.mimeTypes.push(reference.mime_type ?? null);
          record.conversationRelevant ||= conversationRelevant;
          record.nameRelevant ||= hasDeepLSignal(reference.name);
          record.brandNameRelevant ||= hasDeepLBrandSignal(reference.name);
          if (snippet) {
            record.snippets.push(snippet);
            record.snippetRelevant ||= hasDeepLSignal(snippet);
            record.brandSnippetRelevant ||= hasDeepLBrandSignal(snippet);
          }
          record.occurrences.push(sourceOccurrence(sourceFile, conversation, message, "content-reference"));
        }
      }
    }
  }

  const blobIndex = await scanBlobs(chatgptRoot);
  const records = [];
  let documentLikeRecords = 0;
  let excludedDocumentRecords = 0;
  let includedOriginalBinaries = 0;

  for (const rawRecord of recordsById.values()) {
    documentLikeRecords += 1;
    const earliestSeen = dateRange(rawRecord.occurrences.map((item) => item.seen_at)).first_seen;
    const include = shouldIncludeChatGptRecord({
      nameRelevant: rawRecord.nameRelevant,
      snippetRelevant: rawRecord.snippetRelevant,
      brandNameRelevant: rawRecord.brandNameRelevant,
      brandSnippetRelevant: rawRecord.brandSnippetRelevant,
      conversationRelevant: rawRecord.conversationRelevant,
      earliestSeen,
    });
    if (!include) {
      excludedDocumentRecords += 1;
      continue;
    }
    const canonicalName = recordName(rawRecord);
    const retainedSnippet = [...rawRecord.snippets].sort((a, b) => b.length - a.length)[0] ?? null;
    const blobEntries = resolveBlobCandidates(rawRecord.fileId)
      .map((name) => blobIndex.byName.get(name))
      .filter(Boolean);
    let binary = null;
    if (blobEntries.length) {
      const blob = blobEntries[0];
      const binaryHash = await blobHash(blob.filePath);
      binary = {
        signature: blob.signature,
        size: blob.size,
        sha256: binaryHash,
      };
      includedOriginalBinaries += 1;
    }
    const custody = binary
      ? "original-binary"
      : retainedSnippet
        ? "retained-partial"
        : "metadata-only";
    const occurrences = rawRecord.occurrences
      .filter((item, index, list) => list.findIndex((candidate) => JSON.stringify(candidate) === JSON.stringify(item)) === index)
      .sort((a, b) => [
        a.source_file,
        a.conversation_id,
        a.message_id ?? "",
        a.kind,
      ].join(":").localeCompare([
        b.source_file,
        b.conversation_id,
        b.message_id ?? "",
        b.kind,
      ].join(":")));
    const alternateNames = sortedUnique(rawRecord.names).filter((name) => name !== canonicalName);

    records.push({
      source_record_id: `chatgpt-${rawRecord.fileId.replace(/^file[-_]/, "")}`,
      source_system: "chatgpt",
      canonical_name: canonicalName,
      alternate_names: alternateNames,
      title_group_id: documentFamilyId(canonicalName),
      exact_content_group_id: null,
      exact_content_group_size: null,
      custody,
      origin: "unknown",
      privacy: "unknown-private",
      publication_default: "deny",
      claim_coverage: {
        artifact: "verified",
        contribution: "unknown",
        lifecycle: "unknown",
        outcome: "unknown",
      },
      retained_text: retainedSnippet ? {
        chars: retainedSnippet.length,
        sha256: sha256(retainedSnippet),
        completeness_basis: "ChatGPT content_reference snippet; partial by default",
      } : null,
      binary,
      assistant_derivatives: assistantDerivativesForChatGpt(occurrences),
      attachment_metadata: {
        file_id: rawRecord.fileId,
        mime_types: sortedUnique(rawRecord.mimeTypes),
        declared_sizes: sortedUnique(rawRecord.sizes),
      },
      recovered_repo_path: null,
      date_range: dateRange(occurrences.map((item) => item.seen_at)),
      locators: occurrences.map(({ seen_at: _seenAt, ...locator }) => locator),
    });
  }

  const contentGroups = new Map();
  for (const record of records) {
    if (!record.exact_content_group_id) continue;
    contentGroups.set(record.exact_content_group_id, (contentGroups.get(record.exact_content_group_id) ?? 0) + 1);
  }
  for (const record of records) {
    if (record.exact_content_group_id) {
      record.exact_content_group_size = contentGroups.get(record.exact_content_group_id);
    }
  }

  return {
    records,
    summary: {
      conversation_files_scanned: conversationFiles.length,
      conversations_scanned: conversationsScanned,
      attachment_occurrences: attachmentOccurrences,
      unique_attachment_ids: allAttachmentIds.size,
      unique_document_attachment_ids: documentAttachmentIds.size,
      unique_document_attachment_or_reference_ids: recordsById.size,
      content_reference_occurrences: contentReferenceOccurrences,
      unique_content_reference_ids: allContentReferenceIds.size,
      retained_content_reference_occurrences: retainedContentReferenceOccurrences,
      unique_retained_content_reference_ids: retainedContentReferenceIds.size,
      included_source_records: records.length,
      excluded_document_source_records: excludedDocumentRecords,
      included_original_binary_records: includedOriginalBinaries,
      ...blobIndex.summary,
    },
  };
}

function validateRecord(record) {
  if (!record.source_record_id || !record.canonical_name || !record.title_group_id) {
    throw new Error(`Invalid document record ${record.source_record_id ?? "<missing id>"}`);
  }
  validateEnum(record.custody, CUSTODY_VALUES, `${record.source_record_id}.custody`);
  validateEnum(record.origin, ORIGIN_VALUES, `${record.source_record_id}.origin`);
  validateEnum(record.privacy, PRIVACY_VALUES, `${record.source_record_id}.privacy`);
  for (const [dimension, status] of Object.entries(record.claim_coverage ?? {})) {
    validateEnum(status, CLAIM_STATUSES, `${record.source_record_id}.claim_coverage.${dimension}`);
  }
  for (const dimension of ["artifact", "contribution", "lifecycle", "outcome"]) {
    if (!(dimension in (record.claim_coverage ?? {}))) {
      throw new Error(`${record.source_record_id}: missing ${dimension} claim coverage`);
    }
  }
  if (record.publication_default !== "deny" && record.privacy !== "public") {
    throw new Error(`${record.source_record_id}: non-public record must default to deny`);
  }
  if (record.recovered_repo_path && path.isAbsolute(record.recovered_repo_path)) {
    throw new Error(`${record.source_record_id}: recovered path must be repository-relative`);
  }
}

function sortRecords(records) {
  return records.sort((a, b) => [
    a.source_system,
    normalizeDocumentTitle(a.canonical_name),
    a.source_record_id,
  ].join(":").localeCompare([
    b.source_system,
    normalizeDocumentTitle(b.canonical_name),
    b.source_record_id,
  ].join(":")));
}

function parseArgs(argv) {
  const args = {
    chatgpt: "/home/mason/Downloads/assistant-exports/chatgpt",
    claude: "/home/mason/Downloads/assistant-exports/claude",
    repo: process.cwd(),
    write: false,
  };
  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index];
    if (value === "--chatgpt") args.chatgpt = path.resolve(argv[++index]);
    else if (value === "--claude") args.claude = path.resolve(argv[++index]);
    else if (value === "--repo") args.repo = path.resolve(argv[++index]);
    else if (value === "--write") args.write = true;
    else if (value === "--check") args.write = false;
    else throw new Error(`Unknown argument: ${value}`);
  }
  return args;
}

export async function buildInventory({ chatgpt, claude, repo }) {
  const [chatgptResult, claudeResult] = await Promise.all([
    buildChatGptRecords(chatgpt),
    buildClaudeRecords(claude, repo),
  ]);
  const documents = sortRecords([...chatgptResult.records, ...claudeResult.records]);
  const ids = new Set();
  for (const record of documents) {
    validateRecord(record);
    if (ids.has(record.source_record_id)) throw new Error(`Duplicate source record ID: ${record.source_record_id}`);
    ids.add(record.source_record_id);
  }

  return {
    schema_version: INVENTORY_SCHEMA_VERSION,
    scope: {
      subject: "DeepL-relevant document records in Mason's ChatGPT and Claude exports",
      purpose: "Source custody and claim coverage only; this inventory does not rank or classify records by discipline.",
      raw_exports_are_external_and_read_only: true,
      excluded_filenames_are_not_recorded: true,
      selection_rule: "Include reviewed Claude project documents and ChatGPT document IDs with a direct DeepL/internal-work signal in the filename or retained text. Conversation context alone never includes a filename.",
      chatgpt_context_cutoff: DEEPL_EMPLOYMENT_CONTEXT_CUTOFF,
      cutoff_rule: "The cutoff remains recorded for audit history, but direct filename or retained-text evidence is required on both sides of it.",
    },
    scan_summary: {
      chatgpt: chatgptResult.summary,
      claude: claudeResult.summary,
      included_source_records: documents.length,
      included_title_groups: new Set(documents.map((record) => record.title_group_id)).size,
    },
    definitions: {
      custody: [...CUSTODY_VALUES],
      origin: [...ORIGIN_VALUES],
      privacy: [...PRIVACY_VALUES],
      claim_status: [...CLAIM_STATUSES],
    },
    documents,
  };
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const outputPath = path.join(args.repo, "private-evidence/deepl-document-inventory.json");
  const inventory = await buildInventory(args);
  const serialized = `${JSON.stringify(inventory, null, 2)}\n`;

  if (args.write) {
    await fs.writeFile(outputPath, serialized);
    console.log(JSON.stringify({
      mode: "write",
      output: path.relative(args.repo, outputPath),
      records: inventory.documents.length,
      title_groups: inventory.scan_summary.included_title_groups,
    }, null, 2));
    return;
  }

  const current = await fs.readFile(outputPath, "utf8");
  if (current !== serialized) {
    console.error(JSON.stringify({
      mode: "check",
      output: path.relative(args.repo, outputPath),
      matches_raw_exports: false,
    }, null, 2));
    process.exitCode = 1;
    return;
  }
  console.log(JSON.stringify({
    mode: "check",
    output: path.relative(args.repo, outputPath),
    matches_raw_exports: true,
    records: inventory.documents.length,
    title_groups: inventory.scan_summary.included_title_groups,
  }, null, 2));
}

const invokedPath = process.argv[1] ? pathToFileURL(path.resolve(process.argv[1])).href : null;
if (invokedPath === import.meta.url) {
  await main();
}
