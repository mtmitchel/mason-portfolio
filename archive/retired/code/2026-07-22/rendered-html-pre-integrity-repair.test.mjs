import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);
const publicRoot = new URL("../public/", import.meta.url);
const privateRoot = new URL("../../private-evidence/", import.meta.url);

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request(new URL(pathname, "http://localhost"), { headers: { accept: "text/html" } }), {
    ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
  }, { waitUntil() {}, passThroughOnException() {} });
}

async function htmlFor(pathname) {
  const response = await render(pathname);
  assert.equal(response.status, 200, `${pathname} should render`);
  return (await response.text()).replaceAll("<!-- -->", "");
}

function pngDimensions(buffer) {
  assert.equal(buffer.subarray(0, 8).toString("hex"), "89504e470d0a1a0a", "asset must be a PNG");
  return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
}

function jpegDimensions(buffer) {
  assert.equal(buffer.subarray(0, 2).toString("hex"), "ffd8", "asset must be a JPEG");
  const startOfFrameMarkers = new Set([0xc0, 0xc1, 0xc2, 0xc3, 0xc5, 0xc6, 0xc7, 0xc9, 0xca, 0xcb, 0xcd, 0xce, 0xcf]);
  let offset = 2;
  while (offset < buffer.length) {
    if (buffer[offset] !== 0xff) { offset += 1; continue; }
    const marker = buffer[offset + 1];
    if (marker === 0xd8 || marker === 0xd9) { offset += 2; continue; }
    const segmentLength = buffer.readUInt16BE(offset + 2);
    if (startOfFrameMarkers.has(marker)) {
      return { height: buffer.readUInt16BE(offset + 5), width: buffer.readUInt16BE(offset + 7) };
    }
    offset += 2 + segmentLength;
  }
  assert.fail("JPEG dimensions were not found");
}

const selectedRoutes = [
  ["/work/pro-driver-experiments", "Hard blockers"],
  ["/work/bulk-administration", "Bulk user deletion"],
  ["/work/report-campaign", "Localization report campaign"],
  ["/work/hiring-success-methodology", "Hiring Success methodology"],
  ["/work/localyze-executive-ghostwriting", "Executive ghostwriting"],
];

const selectedAssets = [
  ["work/hard-blockers/usage-limit.png", 1092, 1500],
  ["work/hard-blockers/formality.png", 1092, 1150],
  ["work/hard-blockers/glossaries.png", 1092, 1388],
  ["work/hard-blockers/document-size.png", 1092, 1204],
  ["work/hard-blockers/remaining-documents.png", 546, 626],
  ["work/hard-blockers/network-usage-limit.png", 1092, 1600],
  ["work/hard-blockers/write-pro-free.png", 2880, 1764],
  ["work/hard-blockers/write-pro-existing-translator-pro.png", 1236, 800],
  ["work/hard-blockers/write-pro-illustrated-free.png", 1648, 1504],
  ["work/hard-blockers/write-pro-illustrated-translator-pro.png", 1648, 1504],
  ["work/bulk-administration/bulk-delete-01-scope.png", 2880, 2828],
  ["work/bulk-administration/bulk-delete-02-filter-scope.png", 2880, 2828],
  ["work/bulk-administration/bulk-delete-03-selected-users.png", 2880, 2828],
  ["work/bulk-administration/bulk-delete-04-action-menu.png", 2880, 2828],
  ["work/bulk-administration/bulk-delete-05-confirmation.png", 2880, 2828],
  ["work/bulk-administration/bulk-delete-06-result.png", 2880, 2828],
  ["work/localization-report/report-cover.png", 1488, 1100],
  ["work/localization-report/key-findings.png", 1488, 2105],
  ["work/localization-report/recommendations.png", 1488, 2105],
  ["work/report-campaign/hubspot-case-study.png", 1488, 2105],
  ["work/report-campaign/phrase-case-study.png", 1488, 2105],
  ["work/editorial/smartrecruiters-hiring-success.jpg", 1000, 562],
  ["work/editorial/localyze-forbes-ghostwriting.jpg", 1024, 682],
];

test("homepage renders exactly five selected projects in the approved order", async () => {
  const html = await htmlFor("/");
  assert.match(html, /<title>Mason Mitchel — UX Copywriter &amp; Content Designer<\/title>/);
  assert.match(html, /<h1 class="site-name">/);
  assert.match(html, /UX copywriter and content designer across product, growth and enterprise\./);
  assert.equal((html.match(/class="project-entry"/g) ?? []).length, 5);

  let previousIndex = -1;
  for (const [route, label] of selectedRoutes) {
    const index = html.indexOf(`href="${route}"`);
    assert.ok(index > previousIndex, `${label} should appear in the approved order`);
    previousIndex = index;
  }

  assert.doesNotMatch(html, /candidate-review|Writing collection|Airy|class="writing-entry"/i);
});

test("selected work and writing use route-backed text navigation", async () => {
  const [selected, writing, component] = await Promise.all([
    htmlFor("/"),
    htmlFor("/writing"),
    readFile(new URL("app/components/WorkIndexPage.tsx", root), "utf8"),
  ]);

  assert.match(selected, /class="work-switcher"/);
  assert.match(selected, /href="\/" aria-current="page">Selected work<\/a>/);
  assert.match(selected, /href="\/writing">Writing<\/a>/);
  assert.match(writing, /href="\/">Selected work<\/a>/);
  assert.match(writing, /href="\/writing" aria-current="page">Writing<\/a>/);
  assert.doesNotMatch(component, /["']use client["']|useState|onClick/);
});

test("both index routes retain the same shared shell", async () => {
  const [selected, writing] = await Promise.all([htmlFor("/"), htmlFor("/writing")]);
  for (const marker of [
    "Mason Mitchel",
    "UX copywriter and content designer across product, growth and enterprise.",
    "I write the words inside products",
    "At DeepL, I worked across Translator and Write",
    "mtmitchel@gmail.com",
  ]) {
    assert.match(selected, new RegExp(marker.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    assert.match(writing, new RegExp(marker.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
  assert.equal(selected.indexOf("class=\"work-switcher\"") < selected.indexOf("class=\"project-list\""), true);
  assert.equal(writing.indexOf("class=\"work-switcher\"") < writing.indexOf("class=\"writing-list\""), true);
});

test("writing route presents five readable samples rather than a collection tile", async () => {
  const html = await htmlFor("/writing");
  assert.equal((html.match(/class="writing-entry"/g) ?? []).length, 5);
  for (const id of [
    "deepl-data-security",
    "localyze-product-guidance",
    "smartrecruiters-onboarding",
    "joblift-renewable-energy",
    "kitchen-stories-french-recipes",
  ]) assert.match(html, new RegExp(`id="${id}"`));
  assert.equal((html.match(/<blockquote>/g) ?? []).length, 5);
  assert.match(html, /Editorial decision/);
  assert.match(html, /target="_blank" rel="noreferrer"/);
  assert.doesNotMatch(html, /class="project-entry"|Writing collection/);
});

for (const [pathname, cardTitle] of selectedRoutes) {
  test(`${pathname} renders as a selected case`, async () => {
    const html = await htmlFor(pathname);
    assert.match(html, /Back to selected work/);
    assert.match(html, /<h1>/);
    assert.doesNotMatch(html, /href="\/work\/candidate-review"|\b0[1-9] ·/);
    assert.ok(cardTitle.length > 0);
  });
}

test("product cases use project-specific framing and honest evidence limits", async () => {
  const [hardBlockers, bulkDeletion] = await Promise.all([
    htmlFor("/work/pro-driver-experiments"),
    htmlFor("/work/bulk-administration"),
  ]);
  for (const html of [hardBlockers, bulkDeletion]) {
    assert.doesNotMatch(html, /The decisions doing the work|What the work made possible|What this shows/);
    assert.match(html, /class="integrated-evidence-note"/);
  }
  assert.match(hardBlockers, /You've reached your free usage limit/);
  assert.equal(new Set(hardBlockers.match(/\/work\/hard-blockers\/[^"? ]+\.png/g) ?? []).size, 10);
  assert.match(bulkDeletion, /fictional domain\.com demo accounts/);
  assert.doesNotMatch(bulkDeletion, /<li><span>0[1-9]<\/span>/);
  assert.equal(new Set(bulkDeletion.match(/\/work\/bulk-administration\/bulk-delete-[^"? ]+\.png/g) ?? []).size, 6);
});

test("report campaign joins the report, article and customer-story sequence", async () => {
  const html = await htmlFor("/work/report-campaign");
  assert.match(html, /Turning localization research into a multi-format campaign/);
  assert.match(html, /Report finding/);
  assert.match(html, /Article finding/);
  assert.match(html, /Customer context/);
  assert.match(html, /Rebuild, rather than abridge/);
  assert.match(html, /Report<\/span><strong>Full research narrative/);
  assert.match(html, /Article<\/span><strong>Fast entry point/);
  assert.match(html, /Customer stories<\/span><strong>Operating examples/);
  assert.match(html, /https:\/\/www\.deepl\.com\/en\/blog\/navigating-localization-challanges-report/);
  assert.match(html, /https:\/\/www\.deepl\.com\/en\/blog\/how-hubspot-streamlines-localization-with-machine-translation/);
});

test("previous-employer cases remain artifact-led and attribution-safe", async () => {
  const [smartRecruiters, localyze] = await Promise.all([
    htmlFor("/work/hiring-success-methodology"),
    htmlFor("/work/localyze-executive-ghostwriting"),
  ]);
  assert.match(smartRecruiters, /Writer of the Hiring Success manual/);
  assert.match(smartRecruiters, /Evaluate · Strategize · Transform · Optimize/);
  assert.match(smartRecruiters, /does not claim sole ownership, readership, adoption or a measured business result/);
  assert.match(localyze, /ghostwrote three Forbes Business Council articles/);
  assert.match(localyze, /Hanna Marie Asmussen/);
  const forbesLinks = localyze.match(/https:\/\/www\.forbes\.com\/councils\/forbesbusinesscouncil\/[^"<\\]+/g) ?? [];
  assert.equal(new Set(forbesLinks).size, 3);
  assert.match(localyze, /public byline belongs to Hanna Marie Asmussen/);
});

for (const [pathname, destination] of [
  ["/work/localization-report", "/work/report-campaign"],
  ["/work/data-security", "/writing"],
  ["/work/ux-copy", "/writing"],
  ["/work/team-access", "/work/bulk-administration"],
  ["/work/candidate-review", "/"],
  ["/work/checkout", "/"],
  ["/work/multi-factor-authentication", "/"],
  ["/work/csv-import", "/"],
  ["/work/custom-domain", "/"],
  ["/work/custom-logo", "/"],
  ["/work/trial-eligibility", "/"],
  ["/work/global-pricing", "/"],
  ["/work/translator-upgrade", "/work/pro-driver-experiments"],
  ["/work/write-pro", "/work/pro-driver-experiments"],
]) {
  test(`${pathname} redirects directly to ${destination}`, async () => {
    const response = await render(pathname);
    assert.equal(response.status, 307);
    assert.equal(new URL(response.headers.get("location"), "http://localhost").pathname, destination);
  });
}

test("selected assets have truthful dimensions and unique contents", async () => {
  const hashes = new Set();
  for (const [asset, declaredWidth, declaredHeight] of selectedAssets) {
    const buffer = await readFile(new URL(asset, publicRoot));
    const dimensions = asset.endsWith(".png") ? pngDimensions(buffer) : jpegDimensions(buffer);
    assert.deepEqual(dimensions, { width: declaredWidth, height: declaredHeight }, `${asset} dimensions should match`);
    const hash = createHash("sha256").update(buffer).digest("hex");
    assert.ok(!hashes.has(hash), `${asset} should not duplicate another selected asset`);
    hashes.add(hash);
  }
});

test("retired gallery directories are absent from the public bundle", async () => {
  for (const directory of [
    "csv-import", "custom-domain", "custom-logo", "data-security", "global-pricing",
    "multi-factor-authentication", "subscription-checkout", "team-access",
    "translator-free-to-paid", "trial-eligibility", "write-pro-upgrade",
  ]) await assert.rejects(access(new URL(`work/${directory}/`, publicRoot)), `${directory} should be private`);
  await assert.rejects(access(new URL("work/report-campaign/ai-content-generation.png", publicRoot)));
});

test("private asset manifest records provenance and publication gates", async () => {
  const manifest = JSON.parse(await readFile(new URL("portfolio-asset-manifest.json", privateRoot), "utf8"));
  assert.equal(manifest.version, "1.0");
  assert.equal(manifest.assets.length, 5);
  for (const asset of manifest.assets) {
    for (const field of ["id", "project_id", "source_path", "source_type", "publication_permission", "crop_notes", "caption", "text_alternative"]) {
      assert.equal(typeof asset[field], "string", `${asset.id}.${field} should be recorded`);
      assert.ok(asset[field].length > 0, `${asset.id}.${field} should not be empty`);
    }
    assert.equal(asset.contains_sensitive_data, false, `${asset.id} should not expose private identifiers`);
    assert.equal(asset.export_ready, false, `${asset.id} should retain the publication approval gate`);
  }
});

test("images retain natural sizing and the route switcher stays visually quiet", async () => {
  const [css, grid] = await Promise.all([
    readFile(new URL("app/globals.css", root), "utf8"),
    readFile(new URL("app/components/DeepLProjectGrid.tsx", root), "utf8"),
  ]);
  assert.doesNotMatch(css, /object-fit\s*:\s*cover|aspect-ratio|translateY\s*\(/);
  assert.doesNotMatch(grid, /\bfill\b|index-mockup|ProjectVisual/);
  const switcherRule = css.match(/\.work-switcher \{([^}]+)\}/)?.[1] ?? "";
  assert.doesNotMatch(switcherRule, /background|border|border-radius|box-shadow/);
});

test("selected evidence retains the accessible lightbox behavior", async () => {
  const lightbox = await readFile(new URL("app/components/ImageLightbox.tsx", root), "utf8");
  for (const behavior of [
    /role="dialog"/,
    /aria-modal="true"/,
    /event\.key === "Escape"/,
    /event\.key !== "Tab"/,
    /document\.body\.style\.overflow = "hidden"/,
    /triggerElement\?\.focus\(\)/,
  ]) assert.match(lightbox, behavior);
});

test("résumé remains anonymously downloadable", async () => {
  const pdf = await readFile(new URL("mason-cv.pdf", publicRoot));
  assert.equal(pdf.subarray(0, 5).toString(), "%PDF-");
  assert.ok(pdf.length > 50_000);
});
