import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import {
  access,
  readFile,
  readdir,
  stat,
} from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const failures = [];

const ignoredDirectories = new Set([
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

const allowedRootEntries = new Set([
  ".git",
  ".gitignore",
  "AGENTS.md",
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
  "private-evidence/README.md",
  "private-evidence/claim-review.md",
  "private-evidence/deepl-portfolio-current-direction.md",
  "private-evidence/portfolio-asset-manifest.json",
  "site/README.md",
  "site/AGENTS.md",
  "site/CHANGELOG.md",
  "site/public/mason-cv.pdf",
];

for (const file of requiredFiles) {
  record(await exists(path.join(root, file)), `required file is missing: ${file}`);
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
];

for (const target of bannedActivePaths) {
  record(!await exists(path.join(root, target)), `obsolete active path remains: ${target}`);
}

const expectedRoutes = [
  "account-team-security",
  "checkout",
  "localyze-executive-ghostwriting",
  "pricing-evolution",
  "report-campaign",
  "upgrade-prompts",
];

const routeRoot = path.join(root, "site/app/work");
const routeDirectories = (await readdir(routeRoot, { withFileTypes: true }))
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();

assert.deepEqual(
  routeDirectories,
  expectedRoutes,
  "site/app/work should contain only the six live case routes",
);

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
record(manifest.version === "2.0", "asset manifest version should be 2.0");
record(manifest.updated === "2026-07-24", "asset manifest update date should be current");
record(Array.isArray(manifest.assets) && manifest.assets.length === 6, "asset manifest should contain six project records");

const manifestPublicPaths = new Set();

for (const asset of manifest.assets) {
  record(asset.publication_permission === "unknown", `${asset.id}: publication permission must remain unknown`);
  record(asset.export_ready === false, `${asset.id}: export_ready must remain false`);

  for (const file of asset.files ?? []) {
    const publicPath = file.public_path ?? `site/public/work/${file.path}`;
    const absolutePublicPath = path.join(root, publicPath);
    manifestPublicPaths.add(publicPath);
    record(await exists(absolutePublicPath), `${asset.id}: public file is missing: ${publicPath}`);

    if (file.source_path && !file.source_path.includes(" and ") && !file.source_path.endsWith("/")) {
      record(
        await exists(path.join(root, file.source_path)),
        `${asset.id}: source file is missing: ${file.source_path}`,
      );
    }

    if (await exists(absolutePublicPath) && file.sha256) {
      const buffer = await readFile(absolutePublicPath);
      const hash = createHash("sha256").update(buffer).digest("hex");
      record(hash === file.sha256, `${asset.id}: SHA-256 changed for ${publicPath}`);

      const dimensions = pngDimensions(buffer);
      if (dimensions && file.dimensions) {
        record(
          `${dimensions.width}x${dimensions.height}` === file.dimensions,
          `${asset.id}: dimensions changed for ${publicPath}`,
        );
      }
    }
  }

  const media = asset.homepage_media;
  if (media) {
    for (const field of ["source_path", "public_path", "poster_path"]) {
      if (!media[field]) continue;
      record(await exists(path.join(root, media[field])), `${asset.id}: homepage ${field} is missing: ${media[field]}`);
      if (field !== "source_path") manifestPublicPaths.add(media[field]);
    }
  }

  for (const field of ["source_path", "public_path", "poster_path"]) {
    if (!asset[field]) continue;
    record(await exists(path.join(root, asset[field])), `${asset.id}: ${field} is missing: ${asset[field]}`);
    if (field !== "source_path") manifestPublicPaths.add(asset[field]);
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
const expectedPublicDirectories = [
  "account-team-security",
  "checkout",
  "home-covers",
  "pricing-evolution",
  "report-campaign",
  "upgrade-prompts",
];
const publicDirectories = (await readdir(publicWorkRoot, { withFileTypes: true }))
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();

assert.deepEqual(
  publicDirectories,
  expectedPublicDirectories,
  "site/public/work should contain only current case assets and homepage covers",
);

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

const reportSource = path.join(root, "site/app/work/portfolioData.ts");
const gridSource = path.join(root, "site/app/components/PortfolioProjectGrid.tsx");
const cssSource = path.join(root, "site/app/globals.css");
const [portfolioData, projectGrid, css] = await Promise.all([
  readFile(reportSource, "utf8"),
  readFile(gridSource, "utf8"),
  readFile(cssSource, "utf8"),
]);

record(
  /reportCover,[\s\S]*imageDisplay:\s*"full-document"/.test(portfolioData),
  "localization-report card must opt into full-document display",
);
record(
  projectGrid.includes('project.imageDisplay === "full-document"'),
  "project grid must apply the full-document modifier",
);
record(
  /\.project-entry-image--full-document img\s*\{[^}]*height:\s*auto !important;[^}]*object-fit:\s*contain;/s.test(css),
  "full-document CSS must preserve the entire image",
);
record(!/object-fit\s*:\s*cover/.test(css), "site CSS must not crop evidence with object-fit: cover");

const tracked = execFileSync("git", ["ls-files", "-z"], { cwd: root })
  .toString()
  .split("\0")
  .filter(Boolean);

const generatedPrefixes = [
  "site/.vinext/",
  "site/.wrangler/",
  "site/dist/",
  "site/node_modules/",
  "tmp/",
];

for (const file of tracked) {
  record(
    !generatedPrefixes.some((prefix) => file.startsWith(prefix)),
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

if (failures.length) {
  console.error(`Repository check failed with ${failures.length} issue${failures.length === 1 ? "" : "s"}:`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log(`Repository check passed: ${markdownFiles.length} Markdown files, ${publicWorkFiles.length} live public assets, six case routes.`);
}
