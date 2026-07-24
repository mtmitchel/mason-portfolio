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
  return (await response.text())
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replaceAll("<!-- -->", "")
    .replaceAll("&#x27;", "'")
    .replaceAll("&quot;", "\"")
    .replaceAll("&amp;", "&");
}

function pngDimensions(buffer) {
  assert.equal(buffer.subarray(0, 8).toString("hex"), "89504e470d0a1a0a", "asset must be a PNG");
  return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function relativeLuminance(hex) {
  const channels = hex.match(/[a-f\d]{2}/gi).map((part) => Number.parseInt(part, 16) / 255);
  const linear = channels.map((value) => value <= .04045 ? value / 12.92 : ((value + .055) / 1.055) ** 2.4);
  return .2126 * linear[0] + .7152 * linear[1] + .0722 * linear[2];
}

function contrastRatio(foreground, background) {
  const values = [relativeLuminance(foreground), relativeLuminance(background)].sort((a, b) => b - a);
  return (values[0] + .05) / (values[1] + .05);
}

function assertOrder(html, values, label) {
  let previous = -1;
  for (const value of values) {
    const index = html.indexOf(value);
    assert.ok(index > previous, `${label}: ${value} should follow the previous item`);
    previous = index;
  }
}

const selectedRoutes = [
  ["/work/upgrade-prompts", "Upgrade prompts across Translator and Write"],
  ["/work/pricing-evolution", "Simplifying pricing across four products"],
  ["/work/checkout", "Checkout across four purchase states"],
  ["/work/account-team-security", "Account recovery and team administration"],
  ["/work/report-campaign", "Turning localization research into a multi-format campaign"],
  ["/work/localyze-executive-ghostwriting", "Executive ghostwriting on global mobility"],
];

const selectedAssets = [
  ["work/upgrade-prompts/usage-limit.png", 1092, 1500],
  ["work/upgrade-prompts/document-size.png", 1092, 1204],
  ["work/upgrade-prompts/remaining-documents.png", 546, 626],
  ["work/upgrade-prompts/formality.png", 1092, 1150],
  ["work/upgrade-prompts/glossaries.png", 1092, 1388],
  ["work/upgrade-prompts/write-free-account-detail.png", 1520, 800],
  ["work/upgrade-prompts/write-translator-pro-account-detail.png", 1520, 800],
  ["work/pricing-evolution/pricing-bundle-tabs.png", 3840, 2826],
  ["work/pricing-evolution/pricing-write-pro.png", 2482, 1233],
  ["work/pricing-evolution/pricing-bundle-era-grid.png", 3024, 3300],
  ["work/pricing-evolution/pricing-translator-transition-grid.png", 3024, 2790],
  ["work/pricing-evolution/detail-table-before.png", 2864, 1335],
  ["work/pricing-evolution/detail-table-after.png", 2864, 1335],
  ["work/pricing-evolution/detail-bundle-repetition.png", 2080, 465],
  ["work/pricing-evolution/detail-cumulative-pair.png", 1480, 1415],
  ["work/pricing-evolution/pricing-translator-cumulative.png", 3024, 2392],
  ["work/pricing-evolution/pricing-write-addon-clean.png", 3024, 2208],
  ["work/pricing-evolution/pricing-voice-clean.png", 3024, 2654],
  ["work/pricing-evolution/pricing-api-clean.png", 3024, 2776],
  ["work/checkout/trial-sign-up-detail.png", 1200, 1220],
  ["work/checkout/bundle-checkout-detail.png", 2500, 1500],
  ["work/checkout/team-purchase-detail.png", 2500, 1500],
  ["work/checkout/no-trial-checkout-detail.png", 2500, 1500],
  ["work/checkout/start-my-free-trial.png", 3024, 1800],
  ["work/checkout/bundle-checkout.png", 3024, 2864],
  ["work/checkout/team-license-checkout.png", 3024, 2864],
  ["work/checkout/no-trial-ultimate-checkout.png", 3024, 2738],
  ["work/account-team-security/account-security-login-detail.png", 1080, 1250],
  ["work/account-team-security/account-security-authentication-error-detail.png", 1080, 1250],
  ["work/account-team-security/account-security-reset-required.png", 1176, 720],
  ["work/account-team-security/account-security-protection-restored.png", 2360, 734],
  ["work/account-team-security/bulk-delete-confirmation-detail.png", 2530, 1480],
  ["work/account-team-security/bulk-delete-06-result-detail.png", 2600, 500],
  ["work/report-campaign/report-cover.png", 978, 1369],
  ["work/report-campaign/key-findings.png", 1488, 2105],
  ["work/report-campaign/report-ai-findings-source.png", 608, 340],
  ["work/report-campaign/ai-content-generation.png", 1488, 1100],
  ["work/report-campaign/hubspot-story-focus.png", 1348, 1300],
  ["work/report-campaign/phrase-story-focus.png", 1348, 760],
  ["work/home-covers/deepl-upgrade-to-pro.png", 1728, 1728],
  ["work/home-covers/pricing-language-cubes-loop-poster.png", 1280, 1280],
  ["work/home-covers/account-security-cards-loop-poster.png", 1280, 1280],
  ["work/home-covers/localyze-passport-loop-poster.png", 1280, 1280],
];

const exactQuotes = [
  "We didn't choose to refashion our platform simply because we thought it needed a new look or wanted to strengthen our position in the marketplace.",
  "In this article, we’ll cover the basics of Global Mobility: what it is, why it’s beneficial, and what to keep in mind when building out a Global Mobility strategy.",
  "The onboarding process is what bridges the gap between the candidate and employee experience.",
  "French cuisine is often reputed for being overly fancy and expensive, when, in fact, so much of it is simple, honest, and affordable—coq au vin exemplifies this.",
  "Without a doubt, hybrid working on a global scale adds several layers of logistical complexity.",
  "The best locations will be those where public policies ensure well-being, support for ongoing training and research and social safety nets.",
  "But before long, hybrid or remote work arrangements will be the rule rather than the exception, and flexibility is only a part of the Great Resignation equation.",
  "AI-assisted writing tools are used by 77% of respondents, and machine translation by an astonishing 98%.",
];

test("homepage renders the six approved cards in order with the retained covers", async () => {
  const html = await htmlFor("/");
  assert.equal((html.match(/class="project-entry"/g) ?? []).length, 6);
  assertOrder(html, selectedRoutes.map(([route]) => `href="${route}"`), "homepage card order");
  for (const [, title] of selectedRoutes) assert.match(html, new RegExp(escapeRegExp(title)));
  for (const asset of ["deepl-upgrade-to-pro.png", "deepl-retail-ecommerce.svg"]) assert.match(html, new RegExp(asset));
  for (const asset of ["pricing-language-cubes-loop", "account-security-cards-loop", "localyze-passport-loop"]) {
    assert.match(html, new RegExp(`${asset}\\.mp4`));
    assert.match(html, new RegExp(`${asset}-poster\\.png`));
  }
  assert.equal((html.match(/class="project-entry-video"/g) ?? []).length, 3);
  assert.match(
    html,
    /class="project-entry-image project-entry-image--full-document"[\s\S]*report-cover\.png[\s\S]*width="978" height="1369"/,
  );
});

test("selected work and writing share the header, About and footer", async () => {
  const [selected, writing] = await Promise.all([htmlFor("/"), htmlFor("/writing")]);
  for (const marker of [
    "Mason Mitchel",
    "UX copywriter and content designer across product, growth and enterprise.",
    "I write explanations, limits, prices and confirmations",
    "At DeepL, I worked across Translator, Write, subscriptions, pricing and enterprise accounts.",
    "Earlier, I worked on product and editorial writing for Localyze, SmartRecruiters, Joblift and Kitchen Stories.",
    "mtmitchel@gmail.com",
  ]) {
    assert.match(selected, new RegExp(escapeRegExp(marker)));
    assert.match(writing, new RegExp(escapeRegExp(marker)));
  }
});

test("the homepage route switcher remains real navigation", async () => {
  const source = await readFile(new URL("app/components/WorkIndexPage.tsx", root), "utf8");
  assert.doesNotMatch(source, /["']use client["']|useState|onClick/);
  assert.match(source, /<nav className="work-switcher" aria-label="Portfolio view">/);
});

for (const [pathname, title] of selectedRoutes) {
  test(`${pathname} uses the same title as its homepage card`, async () => {
    const html = await htmlFor(pathname);
    assert.match(html, new RegExp(`<h1>${escapeRegExp(title)}</h1>`));
    assert.match(html, /Back to selected work/);
    assert.doesNotMatch(html, /noindex/);
  });
}

test("canonical routes remain indexable", async () => {
  for (const [pathname] of selectedRoutes) {
    const html = await htmlFor(pathname);
    assert.equal((html.match(/rel="canonical"/g) ?? []).length, 1);
    assert.match(html, new RegExp(`<link rel="canonical" href="${escapeRegExp(pathname)}"\\/>`));
  }
});

test("case-to-case navigation follows the card order", async () => {
  const chain = [
    ["/work/upgrade-prompts", "/work/pricing-evolution"],
    ["/work/pricing-evolution", "/work/checkout"],
    ["/work/checkout", "/work/account-team-security"],
    ["/work/account-team-security", "/work/report-campaign"],
    ["/work/report-campaign", "/work/localyze-executive-ghostwriting"],
    ["/work/localyze-executive-ghostwriting", "/writing"],
  ];
  for (const [route, next] of chain) {
    assert.match(await htmlFor(route), new RegExp(`class="next-project"[\\s\\S]*href="${escapeRegExp(next)}"`));
  }
});

test("upgrade prompts follow the approved evidence-led order and scope the result once", async () => {
  const html = await htmlFor("/work/upgrade-prompts");
  assertOrder(html, [
    "Different interruptions needed different explanations",
    "Name why the task stopped",
    "Match the paid value to the task",
    "Change the offer for the account state",
    "The wider experiment wave",
  ], "upgrade sections");
  for (const asset of [
    "usage-limit.png",
    "document-size.png",
    "remaining-documents.png",
    "formality.png",
    "glossaries.png",
    "write-free-account-detail.png",
    "write-translator-pro-account-detail.png",
  ]) assert.match(html, new RegExp(escapeRegExp(asset)));
  assert.equal((html.match(/12% rise in paid conversion/g) ?? []).length, 1);
  assert.equal((html.match(/seven-figure ARR increase/g) ?? []).length, 1);
  assert.doesNotMatch(html, /network-usage-limit|\{5\}|\{1\}|\{16\}|Upgrade to Pro<\/p>[\s\S]*Before/);
});

test("pricing follows its six-part story and exposes four complete product states", async () => {
  const html = await htmlFor("/work/pricing-evolution");
  assertOrder(html, [
    "A tabbed pricing page plus a separate Write offer",
    "Put the add-on choice on the Translator page",
    "Move qualifiers into labels",
    "Replace repetition with progression",
    "Give each product its own offer pattern",
    "One page per product, one job for each line",
  ], "pricing sections");
  for (const label of ["Write Pro added", "Translator only", "Repeated in every bundle", "Each tier states its addition"]) {
    assert.match(html, new RegExp(escapeRegExp(label)));
  }
  for (const asset of [
    "pricing-bundle-tabs.png",
    "pricing-write-pro.png",
    "pricing-bundle-era-grid.png",
    "pricing-translator-transition-grid.png",
    "detail-table-before.png",
    "detail-table-after.png",
    "detail-bundle-repetition.png",
    "detail-cumulative-pair.png",
  ]) assert.match(html, new RegExp(escapeRegExp(asset)));
  assert.match(html, /role="tablist"/);
  for (const label of ["Translator", "Write", "Voice", "API"]) assert.match(html, new RegExp(`>${label}<`));
  assert.match(html, /discounts sit beside prices/);
  assert.match(html, /actions sit beside the commitment/);
  assert.doesNotMatch(html, /pricing-2023-pro-page|detail-wordy-bullets|detail-price-block|detail-toggle|pricing-bundle-era-table|pricing-translator-transition-table/);
  assert.doesNotMatch(html, /12%|ARR|six-figure|conversion/);
});

test("checkout leads with four focused states and keeps the accessible full-frame switcher", async () => {
  const html = await htmlFor("/work/checkout");
  assertOrder(html, [
    "Carry the trial into account creation",
    "Keep a two-product offer visible at commitment",
    "Scale the order to a team",
    "Change timing and consent when no trial applies",
    "Explore the complete purchase states",
    "Observable ending",
  ], "checkout sections");
  for (const asset of [
    "trial-sign-up-detail.png",
    "bundle-checkout-detail.png",
    "team-purchase-detail.png",
    "no-trial-checkout-detail.png",
  ]) assert.match(html, new RegExp(escapeRegExp(asset)));
  assert.match(html, /role="tablist"/);
  assert.equal((html.match(/role="tab"/g) ?? []).length, 4);
  for (const label of ["Bundle", "Trial sign-up", "Team", "No trial"]) assert.match(html, new RegExp(`>${label}<`));
  assert.match(html, /€0 due today/);
  assert.doesNotMatch(html, /3\.02%|€2\.4M|100 purchases|conversion/);

  const switcher = await readFile(new URL("app/components/EvidenceSwitcher.tsx", root), "utf8");
  for (const key of ["ArrowRight", "ArrowLeft", "Home", "End"]) assert.match(switcher, new RegExp(key));
  assert.match(switcher, /role="tabpanel"/);
  assert.match(switcher, /hidden=\{!selected\}/);
});

test("account recovery and team administration use five observable states", async () => {
  const html = await htmlFor("/work/account-team-security");
  assertOrder(html, [
    "Separate an incorrect code from lost access",
    "Explain what the reset changes",
    "End on a visible account state",
    "Name the consequence before deleting users",
    "Confirm the filtered result",
  ], "account sections");
  for (const asset of [
    "account-security-login-detail.png",
    "account-security-authentication-error-detail.png",
    "account-security-reset-required.png",
    "account-security-protection-restored.png",
    "bulk-delete-confirmation-detail.png",
    "bulk-delete-06-result-detail.png",
  ]) assert.match(html, new RegExp(escapeRegExp(asset)));
  assert.match(html, /MFA active/);
  assert.match(html, /administrator support/);
  assert.doesNotMatch(html, /SSO|adoption|support volume|shipped|conversion/);
});

test("report campaign moves from report to article to customer stories and the campaign result", async () => {
  const html = await htmlFor("/work/report-campaign");
  assertOrder(html, [
    "Build the report around marketers’ questions",
    "Change the entry point, keep the figures",
    "Turn webinar material into operating stories",
    "Published work and campaign result",
  ], "report sections");
  for (const asset of [
    "report-cover.png",
    "key-findings.png",
    "report-ai-findings-source.png",
    "ai-content-generation.png",
    "hubspot-story-focus.png",
    "phrase-story-focus.png",
  ]) assert.match(html, new RegExp(escapeRegExp(asset)));
  assert.match(html, /width="978" height="1369"/);
  assert.equal((html.match(/six-figure lead-generation pipeline/g) ?? []).length, 1);
  assert.doesNotMatch(html, /recommendations\.png|hubspot-case-study\.png|phrase-case-study\.png/);
});

test("ghostwriting presents three exact published arguments without case artwork", async () => {
  const html = await htmlFor("/work/localyze-executive-ghostwriting");
  assert.match(html, /Hanna Marie Asmussen/);
  assert.match(html, /wrote on her behalf/);
  assert.match(html, /published each article under her byline/);
  assert.match(html, /One voice, three arguments/);
  assert.equal((html.match(/class="published-piece-list"/g) ?? []).length, 1);
  assert.equal((html.match(/forbes\.com\/councils\/forbesbusinesscouncil/g) ?? []).length, 3);
  assert.doesNotMatch(html, /<img|editorial-cover|passport-loop|localyze-forbes-ghostwriting/);
  assert.doesNotMatch(html, /conversion|revenue|ARR|pipeline/);
});

test("writing contains five entries, selectable samples and only necessary publication context", async () => {
  const html = await htmlFor("/writing");
  assert.match(html, /Five published examples show how I change structure, tone, and level of detail/);
  assert.equal((html.match(/class="writing-entry"/g) ?? []).length, 5);
  assert.equal((html.match(/class="writing-publication-context"/g) ?? []).length, 3);
  assert.match(html, /I wrote the 2019 edition/);
  assert.match(html, /I wrote the original 2020 article/);
  assert.match(html, /figures belong to the release’s original reporting period/);
  assert.doesNotMatch(html, /writing-evidence-note|Evidence note|Proof note/);
});

test("published samples preserve the approved source wording exactly", async () => {
  const pages = await Promise.all([
    htmlFor("/writing"),
    htmlFor("/work/report-campaign"),
    htmlFor("/work/localyze-executive-ghostwriting"),
  ]);
  const combined = pages.join("\n");
  for (const quote of exactQuotes) assert.match(combined, new RegExp(escapeRegExp(quote)), quote);
});

test("metrics appear only on their supported pages and at their supported level", async () => {
  const pages = Object.fromEntries(await Promise.all(selectedRoutes.map(async ([route]) => [route, await htmlFor(route)])));
  assert.match(pages["/work/upgrade-prompts"], /Across the wider experiment wave/);
  assert.match(pages["/work/report-campaign"], /for the campaign/);
  for (const route of ["/work/pricing-evolution", "/work/checkout", "/work/account-team-security", "/work/localyze-executive-ghostwriting"]) {
    assert.doesNotMatch(pages[route], /12%|seven-figure ARR|six-figure lead-generation pipeline/);
  }
});

test("selected public pages contain no private audit language or fake transformations", async () => {
  const html = (await Promise.all([...selectedRoutes.map(([route]) => htmlFor(route)), htmlFor("/writing")])).join("\n");
  assert.doesNotMatch(
    html,
    /Constraint|Evidence boundary|selected frames document|design-file|public selection|does not claim|not presented as evidence|\bprovenance\b|\breconstruction\b|\breconstructed\b/i,
  );
  assert.doesNotMatch(html, /One generic purchase message|Update product, price, seats, trial timing|You've reached your free usage limit[\s\S]*Before/);
  assert.doesNotMatch(html, /class="story-facts"|class="decision-list"|class="tradeoff"/);
});

test("selected assets retain their declared dimensions and unique contents", async () => {
  const hashes = new Set();
  for (const [asset, width, height] of selectedAssets) {
    const buffer = await readFile(new URL(asset, publicRoot));
    assert.deepEqual(pngDimensions(buffer), { width, height }, `${asset} dimensions should match`);
    const hash = createHash("sha256").update(buffer).digest("hex");
    assert.ok(!hashes.has(hash), `${asset} should not duplicate another selected asset`);
    hashes.add(hash);
  }
});

test("the private manifest records every new crop and the corrected report cover", async () => {
  const manifest = JSON.parse(await readFile(new URL("portfolio-asset-manifest.json", privateRoot), "utf8"));
  assert.equal(manifest.version, "2.0");
  assert.equal(manifest.updated, "2026-07-24");
  const files = manifest.assets.flatMap((asset) => asset.files ?? []);
  const cropPaths = [
    "upgrade-prompts/write-free-account-detail.png",
    "upgrade-prompts/write-translator-pro-account-detail.png",
    "checkout/trial-sign-up-detail.png",
    "checkout/bundle-checkout-detail.png",
    "checkout/team-purchase-detail.png",
    "checkout/no-trial-checkout-detail.png",
    "account-team-security/account-security-login-detail.png",
    "account-team-security/account-security-authentication-error-detail.png",
    "account-team-security/bulk-delete-confirmation-detail.png",
    "report-campaign/report-ai-findings-source.png",
    "report-campaign/hubspot-story-focus.png",
    "report-campaign/phrase-story-focus.png",
  ];
  for (const path of cropPaths) {
    const file = files.find((candidate) => candidate.path === path);
    assert.ok(file, `${path} should be recorded`);
    for (const field of ["public_path", "source_path", "crop", "dimensions", "caption", "text_alternative", "sha256"]) {
      assert.equal(typeof file[field], "string", `${path}.${field} should be recorded`);
      assert.ok(file[field].length > 0, `${path}.${field} should not be empty`);
    }
  }
  const reportCover = files.find((file) => file.path === "report-campaign/report-cover.png");
  assert.equal(reportCover.dimensions, "978x1369");
  for (const asset of manifest.assets) {
    assert.equal(asset.publication_permission, "unknown");
    assert.equal(asset.export_ready, false);
  }
});

test("retired templates, universal case data and cut public assets are absent", async () => {
  for (const file of [
    "app/components/ArtifactCollectionCase.tsx",
    "app/components/EditorialMiniCase.tsx",
    "app/work/DeepLProjectCase.tsx",
    "app/work/deeplProjectData.ts",
    "app/work/ChapteredCase.tsx",
    "app/work/pricing-evolution/EraDiagram.tsx",
    "app/work/pricingEvolutionCase.ts",
  ]) await assert.rejects(access(new URL(file, root)), `${file} should be retired`);

  for (const file of [
    "work/hard-blockers/network-usage-limit.png",
    "work/hard-blockers/write-pro-illustrated-free.png",
    "work/hard-blockers/write-pro-illustrated-translator-pro.png",
    "work/account-team-security/account-security-login.png",
    "work/account-team-security/account-security-authentication-error.png",
    "work/bulk-administration/bulk-delete-confirmation-card.png",
    "work/pricing-evolution/pricing-2023-pro-page.png",
    "work/pricing-evolution/pricing-translator.png",
    "work/pricing-evolution/pricing-bundle.png",
    "work/pricing-evolution/pricing-bundle-era-table.png",
    "work/pricing-evolution/pricing-translator-transition-table.png",
    "work/pricing-evolution/detail-toggle-on.png",
    "work/pricing-evolution/detail-toggle-off.png",
    "work/pricing-evolution/detail-price-block.png",
    "work/pricing-evolution/detail-wordy-bullets.png",
    "work/localization-report/recommendations.png",
    "work/report-campaign/hubspot-case-study.png",
    "work/report-campaign/phrase-case-study.png",
  ]) await assert.rejects(access(new URL(file, publicRoot)), `${file} should be private`);

  const types = await readFile(new URL("app/work/portfolioTypes.ts", root), "utf8");
  assert.doesNotMatch(types, /ProductCaseStory|ArtifactCollection|EditorialMiniCase|evidenceNote|constraints|tradeoff/);
  for (const type of ["StoryImage", "StoryVideo", "PortfolioCard", "StoryEvidenceView", "WritingSample", "WritingEntry"]) {
    assert.match(types, new RegExp(`export type ${type}`));
  }
});

test("layout stays row-major, responsive and naturally sized", async () => {
  const [css, grid, chrome, loopingVideo] = await Promise.all([
    readFile(new URL("app/globals.css", root), "utf8"),
    readFile(new URL("app/components/PortfolioProjectGrid.tsx", root), "utf8"),
    readFile(new URL("app/components/PortfolioChrome.tsx", root), "utf8"),
    readFile(new URL("app/components/LoopingCardVideo.tsx", root), "utf8"),
  ]);
  assert.match(css, /\.project-list\s*\{[^}]*display:\s*grid;[^}]*grid-template-columns:\s*repeat\(3,/s);
  assert.match(css, /@media \(max-width: 820px\)[\s\S]*\.project-list \{ grid-template-columns: repeat\(2,/);
  assert.match(css, /@media \(max-width: 600px\)[\s\S]*\.project-list \{ grid-template-columns: 1fr; \}/);
  assert.doesNotMatch(css, /object-fit\s*:\s*cover|aspect-ratio|translateY\s*\(/);
  assert.match(css, /\.project-entry-image--full-document img\s*\{[^}]*height:\s*auto !important;[^}]*object-fit:\s*contain;/s);
  assert.match(css, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(css, /\.project-entry-heading p\s*\{[^}]*font-size:\s*16px;/s);
  assert.match(css, /\.project-card:hover,\s*\.project-card:focus-visible\s*\{[^}]*background:\s*#e5efeb;[^}]*border-color:\s*#9fb9b0;[^}]*color:\s*var\(--accent\);/s);
  assert.match(grid, /sizes="\(max-width: 600px\) 100vw, \(max-width: 820px\) 50vw, 33vw"/);
  assert.match(grid, /project\.imageDisplay === "full-document"/);
  assert.ok(grid.indexOf('className="project-entry-image"') < grid.indexOf('className="project-entry-heading"'));
  assert.match(loopingVideo, /prefers-reduced-motion: reduce/);
  assert.match(loopingVideo, /IntersectionObserver/);
  assert.match(loopingVideo, /\bmuted\b/);
  assert.match(loopingVideo, /\bloop\b/);
  assert.match(loopingVideo, /\bplaysInline\b/);
  assert.match(chrome, />About<\/Link>/);
});

test("quiet text meets WCAG AA contrast against paper", async () => {
  const css = await readFile(new URL("app/globals.css", root), "utf8");
  const paper = css.match(/--paper:\s*(#[a-f\d]{6})/i)?.[1];
  const quiet = css.match(/--quiet:\s*(#[a-f\d]{6})/i)?.[1];
  assert.ok(paper && quiet);
  assert.ok(contrastRatio(quiet, paper) >= 4.5);
});

test("selected evidence retains accessible lightbox behavior", async () => {
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
