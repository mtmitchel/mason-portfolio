import { createHash } from "node:crypto";
import {
  access,
  readFile,
  readdir,
  stat,
} from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { checkProductionLineLimits } from "../site/scripts/check-production-line-limits.mjs";
import { spawnSyncChecked } from "./spawn-sync.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const failures = [];

const ignoredDirectories = new Set([
  ".agents",
  ".codex",
  ".git",
  ".vinext",
  ".wrangler",
  "dist",
  "node_modules",
  "tmp",
]);

async function exists(target) {
  try {
    await access(target);
    return true;
  } catch {
    return false;
  }
}

async function walk(directory, predicate = () => true) {
  const results = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (entry.isDirectory() && ignoredDirectories.has(entry.name)) continue;
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) results.push(...await walk(absolute, predicate));
    else if (predicate(absolute)) results.push(absolute);
  }
  return results;
}

function repoPath(absolute) {
  return path.relative(root, absolute).split(path.sep).join("/");
}

function record(condition, message) {
  if (!condition) failures.push(message);
}

function pngDimensions(buffer) {
  if (buffer.subarray(0, 8).toString("hex") !== "89504e470d0a1a0a") return null;
  return {
    width: buffer.readUInt32BE(16),
    height: buffer.readUInt32BE(20),
  };
}

export function parseTrimGeometry(output, fileWidth, fileHeight) {
  const match = String(output).trim().match(/^(\d+)x(\d+)\+(\d+)\+(\d+)$/);
  if (!match) {
    throw new Error(`unexpected ImageMagick trim geometry: ${output}`);
  }
  const width = Number(match[1]);
  const height = Number(match[2]);
  const x = Number(match[3]);
  const y = Number(match[4]);
  return {
    left: x,
    top: y,
    right: fileWidth - (x + width),
    bottom: fileHeight - (y + height),
  };
}

function resolveMagickBinary() {
  for (const candidate of ["magick", "/usr/sbin/magick"]) {
    try {
      spawnSyncChecked(candidate, ["-version"], { stdio: "ignore" });
      return candidate;
    } catch {
      // Try the next candidate.
    }
  }
  return null;
}

const allowedRootEntries = new Set([
  ".agents",
  ".codex",
  ".git",
  ".githooks",
  ".gitattributes",
  ".gitignore",
  "AGENTS.md",
  "CLAUDE.md",
  "README.md",
  "archive",
  "docs",
  "private-evidence",
  "scripts",
  "site",
  "tmp",
]);

for (const entry of await readdir(root)) {
  record(allowedRootEntries.has(entry), `unexpected repository-root entry: ${entry}`);
}

const repositoryFiles = await walk(root);
const disposableNamePattern = /(?:~|\.bak|\.orig|\.tmp)$/i;

for (const file of repositoryFiles) {
  const details = await stat(file);
  const name = path.basename(file);
  record(details.size > 0, `empty file remains: ${repoPath(file)}`);
  record(
    name !== ".DS_Store"
      && name !== "Thumbs.db"
      && !disposableNamePattern.test(name),
    `disposable file remains: ${repoPath(file)}`,
  );
}

const requiredFiles = [
  "README.md",
  "AGENTS.md",
  "archive/README.md",
  "docs/figma-workflow.md",
  "docs/external-agent/base/01-AUDIENCE-AND-PORTFOLIO-GOAL.md",
  "docs/external-agent/base/02-STORY-AND-READER-STANDARD.md",
  "docs/external-agent/base/03-EVIDENCE-AND-ACCURACY-STANDARD.md",
  "docs/external-agent/base/04-EXTERNAL-AGENT-PACKET-GUIDE.md",
  "docs/external-agent/base/05-MASON-WRITING-VOICE.md",
  "docs/external-agent/base/PROJECT_INSTRUCTIONS.txt",
  "private-evidence/README.md",
  "private-evidence/claim-review.md",
  "private-evidence/deepl-portfolio-current-direction.md",
  "private-evidence/deepl-document-inventory.json",
  "private-evidence/deepl-project-candidate-queue.md",
  "private-evidence/portfolio-asset-manifest.json",
  "site/README.md",
  "site/AGENTS.md",
  "site/CHANGELOG.md",
  "site/scripts/check-production-line-limits.mjs",
  "site/scripts/configure-git-hooks.mjs",
  "site/public/mason-cv.pdf",
  ".githooks/pre-commit",
  ".githooks/prepare-commit-msg",
  "scripts/spawn-sync.mjs",
];

for (const file of requiredFiles) {
  record(await exists(path.join(root, file)), `required file is missing: ${file}`);
}

for (const file of [".githooks/pre-commit", ".githooks/prepare-commit-msg"]) {
  const absolute = path.join(root, file);
  if (!await exists(absolute)) continue;
  const details = await stat(absolute);
  record((details.mode & 0o111) !== 0, `Git hook is not executable: ${file}`);
}

const lineLimitResult = await checkProductionLineLimits({ root });
for (const violation of lineLimitResult.violations) {
  record(
    false,
    `${violation.path} exceeds the ${lineLimitResult.maximumLines}-line production limit: ${violation.lineCount}`,
  );
}

const bannedActivePaths = [
  "Monetization",
  "figma screenshots",
  "output",
  "work",
  "site/docs",
  "private-evidence/checkout",
  "private-evidence/figma-exports-2026-07-22",
  "private-evidence/figma-exports-pricing-2026-07",
  "private-evidence/mfa",
  "private-evidence/more deepl",
  "private-evidence/product-surface-captures",
  "private-evidence/retired-code-2026-07-22",
  "private-evidence/retired-public-assets-2026-07-22",
  "private-evidence/retired-public-assets-2026-07-24",
  "private-evidence/team-administration-full-export-review",
  "site/app/work/checkout/concepts",
];

for (const target of bannedActivePaths) {
  record(!await exists(path.join(root, target)), `obsolete active path remains: ${target}`);
}

const routeRoot = path.join(root, "site/app/work");
const routeDirectories = (await readdir(routeRoot, { withFileTypes: true }))
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();

record(routeDirectories.length > 0, "site/app/work should contain at least one case route");

const routeSources = await walk(routeRoot, (file) => file.endsWith(".tsx"));
for (const file of routeSources) {
  const source = await readFile(file, "utf8");
  record(!source.includes('from "next/navigation"'), `redirect-only route remains: ${repoPath(file)}`);
}

const markdownFiles = await walk(root, (file) => file.endsWith(".md"));
const markdownLinkPattern = /\[[^\]]+\]\(([^)]+)\)/g;

for (const file of markdownFiles) {
  const source = await readFile(file, "utf8");
  for (const match of source.matchAll(markdownLinkPattern)) {
    let target = match[1].trim();
    if (
      target.startsWith("#")
      || target.startsWith("/")
      || /^[a-z][a-z\d+.-]*:/i.test(target)
    ) continue;

    if (target.startsWith("<") && target.endsWith(">")) target = target.slice(1, -1);
    target = target.split(/\s+["']/)[0].split("#")[0].split("?")[0];

    try {
      target = decodeURIComponent(target);
    } catch {
      failures.push(`${repoPath(file)} contains an invalid encoded link: ${match[1]}`);
      continue;
    }

    const resolved = path.resolve(path.dirname(file), target);
    record(
      resolved.startsWith(root) && await exists(resolved),
      `${repoPath(file)} has a broken local link: ${match[1]}`,
    );
  }
}

const manifestPath = path.join(root, "private-evidence/portfolio-asset-manifest.json");
const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
const now = new Date();
const currentDate = [
  now.getFullYear(),
  String(now.getMonth() + 1).padStart(2, "0"),
  String(now.getDate()).padStart(2, "0"),
].join("-");
const manifestAssets = Array.isArray(manifest.assets) ? manifest.assets : [];
const sha256Pattern = /^[a-f0-9]{64}$/;
const allowedArtifactGenesis = new Set([
  "recovered_historical_export",
  "crop_of_recovered_historical_export",
  "portfolio_reconstruction_2026",
]);
const parsedManifestDate = typeof manifest.updated === "string"
  ? Date.parse(`${manifest.updated}T00:00:00.000Z`)
  : Number.NaN;
const validManifestDate = typeof manifest.updated === "string"
  && /^\d{4}-\d{2}-\d{2}$/.test(manifest.updated)
  && Number.isFinite(parsedManifestDate)
  && new Date(parsedManifestDate).toISOString().slice(0, 10) === manifest.updated;

record(manifest.version === "2.0", "asset manifest version should be 2.0");
record(validManifestDate, "asset manifest update date should be a valid ISO date");
record(!validManifestDate || manifest.updated <= currentDate, "asset manifest update date should not be in the future");
record(Array.isArray(manifest.assets), "asset manifest assets should be an array");
record(manifestAssets.length > 0, "asset manifest should contain at least one project record");
record(
  manifest.artifact_genesis_categories
    && [...allowedArtifactGenesis].every(
      (category) => typeof manifest.artifact_genesis_categories[category] === "string"
        && manifest.artifact_genesis_categories[category].trim().length > 0,
    ),
  "asset manifest should define every artifact-genesis category",
);

const assetIds = manifestAssets.map((asset) => asset.id);
const projectIds = manifestAssets.map((asset) => asset.project_id);
record(
  assetIds.every((id) => typeof id === "string" && id.length > 0),
  "every asset manifest record should have an id",
);
record(new Set(assetIds).size === assetIds.length, "asset manifest ids should be unique");
record(
  projectIds.every((id) => typeof id === "string" && id.length > 0),
  "every asset manifest record should have a project_id",
);
record(new Set(projectIds).size === projectIds.length, "asset manifest project_ids should be unique");

function isArchivePath(relative) {
  if (typeof relative !== "string") return false;
  const normalized = path.posix.normalize(relative);
  return normalized === "archive" || normalized.startsWith("archive/");
}

function isPublicPath(relative) {
  if (typeof relative !== "string") return false;
  const normalized = path.posix.normalize(relative);
  return normalized === "site/public" || normalized.startsWith("site/public/");
}

function isSafeRepositoryPath(relative) {
  if (typeof relative !== "string" || relative.length === 0 || path.isAbsolute(relative)) {
    return false;
  }
  if (path.posix.normalize(relative) !== relative) return false;
  const resolved = path.resolve(root, relative);
  return resolved.startsWith(`${root}${path.sep}`);
}

async function verifyFileHash(relative, expectedHash, label) {
  const safePath = isSafeRepositoryPath(relative);
  record(safePath, `${label}: path must stay inside the repository: ${relative}`);
  if (!safePath) return null;

  const absolute = path.join(root, relative);
  const present = await exists(absolute);
  record(present, `${label}: file is missing: ${relative}`);

  const validHash = typeof expectedHash === "string" && sha256Pattern.test(expectedHash);
  record(validHash, `${label}: a lowercase SHA-256 is required for ${relative}`);
  if (!present || !validHash) return null;

  const buffer = await readFile(absolute);
  const actualHash = createHash("sha256").update(buffer).digest("hex");
  record(actualHash === expectedHash, `${label}: SHA-256 changed for ${relative}`);
  return buffer;
}

const manifestPublicPaths = new Set();

for (const asset of manifestAssets) {
  for (const file of asset.files ?? []) {
    manifestPublicPaths.add(file.public_path ?? `site/public/work/${file.path}`);
  }
  for (const recordValue of [asset.homepage_media, asset]) {
    if (!recordValue) continue;
    if (recordValue.public_path) manifestPublicPaths.add(recordValue.public_path);
    if (recordValue.poster_path) manifestPublicPaths.add(recordValue.poster_path);
  }
}

async function validateProvenance(recordValue, label, publicPath) {
  const sourceStatus = recordValue.source_status;
  record(
    ["verified", "derived", "missing"].includes(sourceStatus),
    `${label}: source_status must be verified, derived, or missing`,
  );

  if (sourceStatus === "missing") {
    record(!recordValue.source_path, `${label}: missing provenance must not self-source from ${publicPath}`);
    record(!recordValue.source_sha256, `${label}: missing provenance must not claim a source SHA-256`);
    record(
      typeof recordValue.source_notes === "string" && recordValue.source_notes.trim().length > 0,
      `${label}: missing provenance requires source_notes`,
    );
    return;
  }

  if (sourceStatus !== "verified" && sourceStatus !== "derived") return;

  const sourcePath = recordValue.source_path;
  record(
    typeof sourcePath === "string" && sourcePath.length > 0,
    `${label}: ${sourceStatus} provenance requires source_path`,
  );
  if (typeof sourcePath !== "string" || sourcePath.length === 0) return;

  record(!isArchivePath(sourcePath), `${label}: active source must not use an archived path: ${sourcePath}`);
  record(sourcePath !== publicPath, `${label}: public file must not be its own source: ${sourcePath}`);

  if (sourceStatus === "verified") {
    record(!isPublicPath(sourcePath), `${label}: verified source must be independent of site/public: ${sourcePath}`);
  } else {
    record(isPublicPath(sourcePath), `${label}: derived source should be a manifest-listed public parent: ${sourcePath}`);
    record(
      manifestPublicPaths.has(sourcePath),
      `${label}: derived source is not another manifest-listed public asset: ${sourcePath}`,
    );
  }

  await verifyFileHash(sourcePath, recordValue.source_sha256, `${label} source`);
}

async function validatePublicRecord(recordValue, label, publicPath) {
  record(
    typeof publicPath === "string" && isPublicPath(publicPath),
    `${label}: public_path should stay under site/public`,
  );
  if (typeof publicPath !== "string") return;

  const buffer = await verifyFileHash(publicPath, recordValue.sha256, `${label} public`);
  record(
    typeof recordValue.dimensions === "string" && /^\d+x\d+$/.test(recordValue.dimensions),
    `${label}: dimensions are required`,
  );
  if (buffer) {
    const dimensions = pngDimensions(buffer);
    if (dimensions) {
      record(
        `${dimensions.width}x${dimensions.height}` === recordValue.dimensions,
        `${label}: dimensions changed for ${publicPath}`,
      );
    }
  }

  await validateProvenance(recordValue, label, publicPath);
}

const pricingEvolutionAsset = manifestAssets.find(
  (asset) => asset.id === "DEEPL-PRICING-EVOLUTION",
);
record(Boolean(pricingEvolutionAsset), "asset manifest should contain DEEPL-PRICING-EVOLUTION");
for (const file of pricingEvolutionAsset?.files ?? []) {
  record(
    allowedArtifactGenesis.has(file.artifact_genesis),
    `DEEPL-PRICING-EVOLUTION: ${file.path}: a valid artifact_genesis is required`,
  );
  record(
    typeof file.artifact_genesis_notes === "string"
      && file.artifact_genesis_notes.trim().length > 0,
    `DEEPL-PRICING-EVOLUTION: ${file.path}: artifact_genesis_notes are required`,
  );
}

for (const asset of manifestAssets) {
  record(asset.export_ready === false, `${asset.id}: export_ready must remain false`);
  const centralExhibit = asset.central_exhibit;
  if (centralExhibit) {
    record(
      typeof centralExhibit.id === "string" && centralExhibit.id.length > 0,
      `${asset.id}: central exhibit id is required`,
    );
    for (const publicRef of centralExhibit.public_refs ?? []) {
      record(
        manifestPublicPaths.has(publicRef),
        `${asset.id}: central exhibit reference is not manifest-listed: ${publicRef}`,
      );
    }
    if (centralExhibit.source_path) {
      const sourceBuffer = await verifyFileHash(
        centralExhibit.source_path,
        centralExhibit.source_sha256,
        `${asset.id}: central exhibit source`,
      );
      if (sourceBuffer && centralExhibit.source_dimensions) {
        const dimensions = pngDimensions(sourceBuffer);
        record(
          dimensions
            && `${dimensions.width}x${dimensions.height}` === centralExhibit.source_dimensions,
          `${asset.id}: central exhibit source dimensions changed`,
        );
      }
    }
    for (const locator of centralExhibit.claim_locators ?? []) {
      record(
        ["artifact", "contribution", "lifecycle", "outcome"].includes(locator.claim_dimension),
        `${asset.id}: claim locator has an invalid dimension: ${locator.claim_dimension}`,
      );
      record(
        typeof locator.source_locator === "string" && locator.source_locator.trim().length > 0,
        `${asset.id}: claim locator requires a bounded source_locator`,
      );
      record(
        Array.isArray(locator.source_quotes) && locator.source_quotes.length > 0,
        `${asset.id}: claim locator requires at least one source quote`,
      );
      const sourceBuffer = await verifyFileHash(
        locator.source_path,
        locator.source_sha256,
        `${asset.id}: ${locator.claim_dimension} claim locator`,
      );
      if (sourceBuffer) {
        const sourceText = sourceBuffer.toString("utf8");
        for (const quote of locator.source_quotes ?? []) {
          record(
            typeof quote === "string" && quote.length > 0 && sourceText.includes(quote),
            `${asset.id}: claim locator source is missing quoted text: ${quote}`,
          );
        }
      }
    }
  }

  for (const file of asset.files ?? []) {
    const publicPath = file.public_path ?? `site/public/work/${file.path}`;
    await validatePublicRecord(file, `${asset.id}: ${file.path}`, publicPath);
  }

  const media = asset.homepage_media;
  if (media) {
    await validatePublicRecord(media, `${asset.id}: homepage media`, media.public_path);
    if (media.poster_path) {
      await verifyFileHash(
        media.poster_path,
        media.poster_sha256,
        `${asset.id}: homepage poster`,
      );
    }
  }

  if (asset.public_path) {
    await validatePublicRecord(asset, asset.id, asset.public_path);
    if (asset.poster_path) {
      await verifyFileHash(asset.poster_path, asset.poster_sha256, `${asset.id}: poster`);
    }
  } else if (asset.source_path) {
    const safeSourceRoot = isSafeRepositoryPath(asset.source_path);
    record(safeSourceRoot, `${asset.id}: source root must stay inside the repository: ${asset.source_path}`);
    record(!isArchivePath(asset.source_path), `${asset.id}: source root must not be archived: ${asset.source_path}`);
    record(!isPublicPath(asset.source_path), `${asset.id}: source root must not use site/public: ${asset.source_path}`);
    if (safeSourceRoot) {
      record(await exists(path.join(root, asset.source_path)), `${asset.id}: source root is missing: ${asset.source_path}`);
    }
  }

  if (asset.private_originals !== undefined) {
    record(Array.isArray(asset.private_originals), `${asset.id}: private_originals should be an array`);
    for (const sourcePath of Array.isArray(asset.private_originals) ? asset.private_originals : []) {
      const safeSourcePath = isSafeRepositoryPath(sourcePath);
      record(safeSourcePath, `${asset.id}: private original must stay inside the repository: ${sourcePath}`);
      record(!isArchivePath(sourcePath), `${asset.id}: private original must not be archived: ${sourcePath}`);
      record(!isPublicPath(sourcePath), `${asset.id}: private original must not use site/public: ${sourcePath}`);
      if (safeSourcePath) {
        record(await exists(path.join(root, sourcePath)), `${asset.id}: private original is missing: ${sourcePath}`);
      }
    }
  }

  if (asset.historical_archive_material !== undefined) {
    record(
      Array.isArray(asset.historical_archive_material),
      `${asset.id}: historical_archive_material should be an array`,
    );
  }
  for (const historicalPath of Array.isArray(asset.historical_archive_material)
    ? asset.historical_archive_material
    : []) {
    const safeHistoricalPath = isSafeRepositoryPath(historicalPath);
    record(safeHistoricalPath, `${asset.id}: historical material must stay inside the repository: ${historicalPath}`);
    record(isArchivePath(historicalPath), `${asset.id}: historical material should stay under archive: ${historicalPath}`);
    if (safeHistoricalPath) {
      record(await exists(path.join(root, historicalPath)), `${asset.id}: historical archive material is missing: ${historicalPath}`);
    }
  }
}

const inventoryPath = path.join(root, "private-evidence/deepl-document-inventory.json");
const inventory = JSON.parse(await readFile(inventoryPath, "utf8"));
record(inventory.schema_version === "1.0", "document inventory schema_version should be 1.0");
record(Array.isArray(inventory.documents), "document inventory documents should be an array");
const inventoryIds = new Set();
for (const document of inventory.documents ?? []) {
  record(
    typeof document.source_record_id === "string" && document.source_record_id.length > 0,
    "document inventory source_record_id is required",
  );
  record(
    !inventoryIds.has(document.source_record_id),
    `duplicate document inventory source_record_id: ${document.source_record_id}`,
  );
  inventoryIds.add(document.source_record_id);
  record(
    /^title-[a-f0-9]{12}$/.test(document.title_group_id ?? ""),
    `${document.source_record_id}: invalid title_group_id`,
  );
  record(
    ["original-binary", "retained-full", "retained-partial", "metadata-only"].includes(document.custody),
    `${document.source_record_id}: invalid custody`,
  );
  record(
    ["public-product-source", "internal-organizational-record", "mason-authored", "assistant-synthesis", "ai-assisted-working-artifact", "mixed", "unknown"].includes(document.origin),
    `${document.source_record_id}: invalid origin`,
  );
  record(
    document.privacy === "public" || document.publication_default === "deny",
    `${document.source_record_id}: non-public source must default to deny`,
  );
  if (document.recovered_repo_path) {
    record(
      isSafeRepositoryPath(document.recovered_repo_path)
        && await exists(path.join(root, document.recovered_repo_path)),
      `${document.source_record_id}: recovered document path is missing`,
    );
  }
}

const appSources = await walk(path.join(root, "site/app"), (file) => /\.(?:ts|tsx|css)$/.test(file));
const referencedPublicPaths = new Set();
const publicReferencePattern = /["'(](\/work\/[^"'()\s]+\.(?:jpg|jpeg|mp4|png|svg))/g;

for (const file of appSources) {
  const source = await readFile(file, "utf8");
  for (const match of source.matchAll(publicReferencePattern)) {
    referencedPublicPaths.add(`site/public${match[1]}`);
  }
}

const publicWorkRoot = path.join(root, "site/public/work");
const publicWorkFiles = await walk(publicWorkRoot);

for (const file of publicWorkFiles) {
  const relative = repoPath(file);
  record(
    referencedPublicPaths.has(relative),
    `public asset is not referenced by the live application: ${relative}`,
  );
}

for (const relative of referencedPublicPaths) {
  record(await exists(path.join(root, relative)), `live application references a missing public asset: ${relative}`);
}

const tracked = spawnSyncChecked(
  "git",
  ["ls-files", "-z"],
  { cwd: root, encoding: "utf8" },
).stdout
  .split("\0")
  .filter(Boolean);

const projectInstructionsPath = path.join(root, "docs/external-agent/base/PROJECT_INSTRUCTIONS.txt");
const projectInstructions = await readFile(projectInstructionsPath, "utf8");
record(
  [...projectInstructions].length < 8000,
  `PROJECT_INSTRUCTIONS.txt must be fewer than 8,000 Unicode characters: ${[...projectInstructions].length}`,
);

const expectedSharedBaseVersion = "2026-08-02.3";
const sharedBaseVersionPattern = /^\s*Shared-base version:\s*[`'\"]?([^\s`'\"]+)[`'\"]?\s*$/gim;
const sharedBaseGuidePath = "docs/external-agent/base/04-EXTERNAL-AGENT-PACKET-GUIDE.md";
const sharedBaseGuide = await readFile(path.join(root, sharedBaseGuidePath), "utf8");
const guideVersionDeclarations = [...sharedBaseGuide.matchAll(sharedBaseVersionPattern)]
  .map((match) => match[1]);
record(
  guideVersionDeclarations.length === 1,
  `${sharedBaseGuidePath} must contain exactly one Shared-base version declaration`,
);
record(
  guideVersionDeclarations.length === 1 && guideVersionDeclarations[0] === expectedSharedBaseVersion,
  `${sharedBaseGuidePath} must declare Shared-base version ${expectedSharedBaseVersion}`,
);

const trackedExternalBaseDeclarations = [];
for (const file of tracked.filter((entry) => entry.startsWith("docs/external-agent/base/"))) {
  const source = await readFile(path.join(root, file), "utf8");
  for (const match of source.matchAll(sharedBaseVersionPattern)) {
    trackedExternalBaseDeclarations.push({ file, version: match[1] });
  }
}
record(
  trackedExternalBaseDeclarations.length === 1,
  "tracked external-base files must contain one canonical Shared-base version declaration",
);
record(
  trackedExternalBaseDeclarations.length === 1
    && trackedExternalBaseDeclarations[0].file === sharedBaseGuidePath
    && trackedExternalBaseDeclarations[0].version === expectedSharedBaseVersion,
  `tracked external-base version declarations must resolve to ${expectedSharedBaseVersion} in ${sharedBaseGuidePath}`,
);

const externalBaseReadme = await readFile(
  path.join(root, "docs/external-agent/base/README.md"),
  "utf8",
);
const externalPacketWorkflow = await readFile(
  path.join(root, "docs/external-agent-packets.md"),
  "utf8",
);
const writingVoice = await readFile(
  path.join(root, "docs/external-agent/base/05-MASON-WRITING-VOICE.md"),
  "utf8",
);

for (const [file, source] of [
  ["PROJECT_INSTRUCTIONS.txt", projectInstructions],
  [sharedBaseGuidePath, sharedBaseGuide],
  ["docs/external-agent/base/README.md", externalBaseReadme],
  ["docs/external-agent-packets.md", externalPacketWorkflow],
  ["docs/external-agent/base/05-MASON-WRITING-VOICE.md", writingVoice],
]) {
  const normalizedSource = source.replace(/\s+/g, " ");
  record(
    /blind reader|blind-reader/i.test(normalizedSource)
      && /factual validator|factual-validator/i.test(normalizedSource),
    `${file} must exclude the writing-voice file from blind-reader and factual-validator contexts`,
  );
}

record(
  /one external Portfolio project/i.test(externalBaseReadme)
    && /four core persistent files/i.test(externalBaseReadme)
    && /individual chat/i.test(externalBaseReadme),
  "external-agent base README must define one shared project and a chat-only writing-voice attachment",
);
record(
  /Use one external Portfolio project/i.test(externalPacketWorkflow)
    && /persistent project knowledge/i.test(externalPacketWorkflow)
    && /individual writing chat/i.test(externalPacketWorkflow)
    && /05-MASON-WRITING-VOICE\.md/.test(externalPacketWorkflow),
  "external-agent packet workflow must define shared project context and a chat-only writing-voice attachment",
);
record(
  /not persistent project knowledge/i.test(projectInstructions)
    && /authorized writing chat/i.test(projectInstructions),
  "external project instructions must keep the writing-voice file out of persistent project knowledge",
);
record(
  /persistent external-project knowledge or sources/i.test(writingVoice)
    && /authorized writing chat/i.test(writingVoice),
  "writing-voice file must state its external project storage boundary",
);

for (const [file, source] of [
  ["AGENTS.md", await readFile(path.join(root, "AGENTS.md"), "utf8")],
  ["README.md", await readFile(path.join(root, "README.md"), "utf8")],
  [sharedBaseGuidePath, sharedBaseGuide],
  ["docs/external-agent/base/README.md", externalBaseReadme],
  ["docs/external-agent-packets.md", externalPacketWorkflow],
]) {
  record(
    !/separate writer(?:-only)? (?:context|project)/i.test(source)
      && !/every external role receives/i.test(source),
    `${file} must not prescribe separate external writer projects or persistent role contexts`,
  );
}

const generatedPrefixes = [
  ".agents/",
  ".codex/",
  "site/.vinext/",
  "site/.wrangler/",
  "site/dist/",
  "site/node_modules/",
  "tmp/",
];

for (const file of tracked) {
  record(
    file !== ".agents"
      && file !== ".codex"
      && !generatedPrefixes.some((prefix) => file.startsWith(prefix)),
    `generated or scratch file is tracked: ${file}`,
  );
}

const topLevelFiles = await readdir(root, { withFileTypes: true });
for (const entry of topLevelFiles) {
  if (!entry.isFile()) continue;
  record(
    !/\.(?:gif|jpe?g|mp4|pdf|png|svg|zip)$/i.test(entry.name),
    `loose binary remains at repository root: ${entry.name}`,
  );
}

const trimMarginEntries = [];
for (const asset of manifestAssets) {
  for (const file of asset.files ?? []) {
    if (file.trim_margin) trimMarginEntries.push({ assetId: asset.id, file });
  }
}

const magickBinary = resolveMagickBinary();
if (!magickBinary) {
  console.log(
    "Image dead-space check could not be run because ImageMagick was not found; trim_margin entries are unverified.",
  );
} else {
  for (const { assetId, file } of trimMarginEntries) {
    const publicPath = file.public_path ?? `site/public/work/${file.path}`;
    const absolutePublicPath = path.join(root, publicPath);
    if (!await exists(absolutePublicPath)) {
      record(false, `${assetId}: public file missing for dead-space check: ${publicPath}`);
      continue;
    }

    const buffer = await readFile(absolutePublicPath);
    const dimensions = pngDimensions(buffer);
    if (!dimensions) {
      record(false, `${assetId}: PNG dimensions unavailable for dead-space check: ${publicPath}`);
      continue;
    }

    let geometry;
    try {
      geometry = spawnSyncChecked(
        magickBinary,
        ["identify", "-format", "%@", absolutePublicPath],
        { encoding: "utf8" },
      ).stdout;
    } catch {
      record(false, `${assetId}: ImageMagick identify failed for ${publicPath}`);
      continue;
    }

    let measured;
    try {
      measured = parseTrimGeometry(geometry, dimensions.width, dimensions.height);
    } catch (error) {
      record(false, `${assetId}: ${error.message} (${publicPath})`);
      continue;
    }

    const recorded = file.trim_margin;
    record(
      measured.left === recorded.left
        && measured.top === recorded.top
        && measured.right === recorded.right
        && measured.bottom === recorded.bottom,
      `${assetId}: trim_margin mismatch for ${publicPath}: measured ${JSON.stringify(measured)}, recorded ${JSON.stringify(recorded)}`,
    );
    for (const edge of ["left", "top", "right", "bottom"]) {
      record(
        measured[edge] <= 24,
        `${assetId}: measured ${edge} trim margin exceeds 24px for ${publicPath}: ${measured[edge]}`,
      );
    }
  }
}

if (failures.length) {
  console.error(`Repository check failed with ${failures.length} issue${failures.length === 1 ? "" : "s"}:`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log(
    `Repository check passed: ${markdownFiles.length} Markdown files, ${publicWorkFiles.length} live public assets, ${routeDirectories.length} case routes.`,
  );
}
