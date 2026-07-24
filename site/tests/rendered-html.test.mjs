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
  const markers = new Set([0xc0, 0xc1, 0xc2, 0xc3, 0xc5, 0xc6, 0xc7, 0xc9, 0xca, 0xcb, 0xcd, 0xce, 0xcf]);
  let offset = 2;
  while (offset < buffer.length) {
    if (buffer[offset] !== 0xff) { offset += 1; continue; }
    const marker = buffer[offset + 1];
    if (marker === 0xd8 || marker === 0xd9) { offset += 2; continue; }
    const length = buffer.readUInt16BE(offset + 2);
    if (markers.has(marker)) return { height: buffer.readUInt16BE(offset + 5), width: buffer.readUInt16BE(offset + 7) };
    offset += 2 + length;
  }
  assert.fail("JPEG dimensions were not found");
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

const selectedRoutes = [
  ["/work/upgrade-prompts", "Upgrade prompts across Translator and Write"],
  ["/work/pricing-evolution", "Simplifying pricing across four products"],
  ["/work/checkout", "Subscription checkout"],
  ["/work/account-team-security", "Account, team and security writing"],
  ["/work/report-campaign", "Localization report campaign"],
  ["/work/localyze-executive-ghostwriting", "Executive ghostwriting"],
];

const retiredRoutes = [
  ["/work/pro-driver-experiments", "/work/upgrade-prompts"],
  ["/work/translator-upgrade", "/work/upgrade-prompts"],
  ["/work/write-pro", "/work/upgrade-prompts"],
  ["/work/write-pro-launch", "/work/pricing-evolution"],
  ["/work/trial-eligibility", "/work/checkout"],
  ["/work/global-pricing", "/work/checkout"],
  ["/work/localization-report", "/work/report-campaign"],
  ["/work/hiring-success-methodology", "/writing#smartrecruiters-hiring-success"],
  ["/work/data-security", "/writing"],
  ["/work/ux-copy", "/writing"],
  ["/work/bulk-administration", "/work/account-team-security#bulk-user-deletion"],
  ["/work/team-access", "/work/account-team-security"],
  ["/work/candidate-review", "/"],
  ["/work/multi-factor-authentication", "/work/account-team-security#account-security"],
  ["/work/csv-import", "/"],
  ["/work/custom-domain", "/"],
  ["/work/custom-logo", "/"],
];

const selectedAssets = [
  ["work/hard-blockers/usage-limit.png", 1092, 1500],
  ["work/hard-blockers/formality.png", 1092, 1150],
  ["work/hard-blockers/glossaries.png", 1092, 1388],
  ["work/hard-blockers/document-size.png", 1092, 1204],
  ["work/hard-blockers/remaining-documents.png", 546, 626],
  ["work/hard-blockers/network-usage-limit.png", 1092, 1600],
  ["work/hard-blockers/write-pro-illustrated-free.png", 1648, 1504],
  ["work/hard-blockers/write-pro-illustrated-translator-pro.png", 1648, 1504],
  ["work/pricing-evolution/pricing-translator.png", 3840, 1459],
  ["work/pricing-evolution/pricing-write-pro.png", 2482, 1233],
  ["work/pricing-evolution/pricing-bundle.png", 2880, 2099],
  ["work/pricing-evolution/pricing-bundle-tabs.png", 3840, 2826],
  ["work/pricing-evolution/pricing-bundle-era-grid.png", 3024, 3300],
  ["work/pricing-evolution/pricing-bundle-era-table.png", 3024, 5300],
  ["work/pricing-evolution/pricing-translator-transition-grid.png", 3024, 2790],
  ["work/pricing-evolution/pricing-translator-transition-table.png", 3024, 4800],
  ["work/pricing-evolution/pricing-translator-cumulative.png", 3024, 2392],
  ["work/pricing-evolution/pricing-write-addon-clean.png", 3024, 2208],
  ["work/pricing-evolution/pricing-voice-clean.png", 3024, 2654],
  ["work/pricing-evolution/pricing-api-clean.png", 3024, 2776],
  ["work/pricing-evolution/detail-cumulative-pair.png", 1480, 1415],
  ["work/pricing-evolution/detail-bundle-repetition.png", 2080, 465],
  ["work/pricing-evolution/detail-toggle-on.png", 830, 150],
  ["work/pricing-evolution/detail-toggle-off.png", 830, 150],
  ["work/pricing-evolution/detail-table-before.png", 2864, 1335],
  ["work/pricing-evolution/detail-table-after.png", 2864, 1335],
  ["work/pricing-evolution/detail-price-block.png", 700, 520],
  ["work/pricing-evolution/detail-wordy-bullets.png", 650, 800],
  ["work/account-team-security/account-security-login.png", 2880, 1950],
  ["work/account-team-security/account-security-authentication-error.png", 2880, 1938],
  ["work/account-team-security/account-security-reset-required.png", 1176, 720],
  ["work/account-team-security/account-security-protection-restored.png", 2360, 734],
  ["work/bulk-administration/bulk-delete-confirmation-card.png", 2000, 1500],
  ["work/bulk-administration/bulk-delete-06-result-detail.png", 2600, 500],
  ["work/subscription-checkout/fresh/start-my-free-trial.png", 3024, 1800],
  ["work/subscription-checkout/fresh/bundle-checkout.png", 3024, 2864],
  ["work/subscription-checkout/fresh/team-license-checkout.png", 3024, 2864],
  ["work/subscription-checkout/fresh/no-trial-ultimate-checkout.png", 3024, 2738],
  ["work/localization-report/report-cover.png", 978, 1369],
  ["work/localization-report/key-findings.png", 1488, 2105],
  ["work/localization-report/recommendations.png", 1488, 2105],
  ["work/report-campaign/ai-content-generation.png", 1488, 1100],
  ["work/report-campaign/hubspot-case-study.png", 1488, 2105],
  ["work/report-campaign/phrase-case-study.png", 1488, 2105],
  ["work/home-covers/pricing-language-cubes-loop-poster.png", 1280, 1280],
  ["work/home-covers/account-security-cards-loop-poster.png", 1280, 1280],
  ["work/home-covers/localyze-passport-loop-poster.png", 1280, 1280],
];

const exactQuotes = [
  "We didn't choose to refashion our platform simply because we thought it needed a new look or wanted to strengthen our position in the marketplace.",
  "The onboarding process is what bridges the gap between the candidate and employee experience.",
  "French cuisine is often reputed for being overly fancy and expensive, when, in fact, so much of it is simple, honest, and affordable—coq au vin exemplifies this.",
  "Without a doubt, hybrid working on a global scale adds several layers of logistical complexity.",
  "The best locations will be those where public policies ensure well-being, support for ongoing training and research and social safety nets.",
  "But before long, hybrid or remote work arrangements will be the rule rather than the exception, and flexibility is only a part of the Great Resignation equation.",
  "96% of respondents report positive ROI from localization efforts, suggesting the significant value of these initiatives.",
  "AI-assisted writing tools are used by 77% of respondents, and machine translation by an astonishing 98%.",
  "HubSpot owns and manages over 75,000 web assets like landing pages, blog posts, and more.",
];

test("homepage renders exactly six projects in row-major content order", async () => {
  const html = await htmlFor("/");
  assert.match(html, /<title>Mason Mitchel — UX Copywriter &amp; Content Designer<\/title>/);
  assert.equal((html.match(/class="project-entry"/g) ?? []).length, 6);
  let previous = -1;
  for (const [route, title] of selectedRoutes) {
    const index = html.indexOf(`href="${route}"`);
    assert.ok(index > previous, `${title} should follow the approved order`);
    previous = index;
  }
  assert.doesNotMatch(html, /Hiring Success methodology|Writing collection|Airy/);
  assert.doesNotMatch(html, /href="\/work\/bulk-administration"/);
  for (const asset of ["home-covers/deepl-upgrade-to-pro.png", "home-covers/deepl-retail-ecommerce.svg"]) {
    assert.match(html, new RegExp(asset));
  }
  for (const asset of ["pricing-language-cubes-loop", "account-security-cards-loop", "localyze-passport-loop"]) {
    assert.match(html, new RegExp(`home-covers/${asset}\\.mp4`));
    assert.match(html, new RegExp(`home-covers/${asset}-poster\\.png`));
  }
  assert.equal((html.match(/class="project-entry-video"/g) ?? []).length, 3);
  assert.doesNotMatch(html, /deepl-language-stack\.svg|deepl-security\.svg/);
  assert.doesNotMatch(html, /project-entry-montage/);
});

test("selected work and writing retain the identical shared shell", async () => {
  const [selected, writing] = await Promise.all([htmlFor("/"), htmlFor("/writing")]);
  for (const marker of [
    "Mason Mitchel",
    "UX copywriter and content designer across product, growth and enterprise.",
    "I write the words inside products",
    "Localyze and SmartRecruiters",
    "mtmitchel@gmail.com",
  ]) {
    assert.match(selected, new RegExp(escapeRegExp(marker)));
    assert.match(writing, new RegExp(escapeRegExp(marker)));
  }
  assert.match(selected, /href="\/" aria-current="page">Selected work<\/a>/);
  assert.match(selected, /href="\/writing">Writing<\/a>/);
  assert.match(writing, /href="\/">Selected work<\/a>/);
  assert.match(writing, /href="\/writing" aria-current="page">Writing<\/a>/);
});

test("the route switcher is real navigation with no client state", async () => {
  const component = await readFile(new URL("app/components/WorkIndexPage.tsx", root), "utf8");
  assert.doesNotMatch(component, /["']use client["']|useState|onClick/);
  assert.match(component, /<nav className="work-switcher" aria-label="Portfolio view">/);
});

for (const [pathname, title] of selectedRoutes) {
  test(`${pathname} renders the selected ${title} case`, async () => {
    const html = await htmlFor(pathname);
    assert.match(html, /Back to selected work/);
    assert.match(html, /<h1>/);
    assert.doesNotMatch(html, /noindex/);
  });
}

test("the flagship uses one canonical, indexable URL", async () => {
  const html = await htmlFor("/work/upgrade-prompts");
  assert.equal((html.match(/rel="canonical"/g) ?? []).length, 1);
  assert.match(html, /<link rel="canonical" href="\/work\/upgrade-prompts"\/>/);
  assert.doesNotMatch(html, /noindex|nofollow/);
  assert.match(html, /Writing upgrade prompts across DeepL Translator and Write/);
});

test("pricing evolution uses one canonical, indexable URL", async () => {
  const html = await htmlFor("/work/pricing-evolution");
  assert.equal((html.match(/rel="canonical"/g) ?? []).length, 1);
  assert.match(html, /<link rel="canonical" href="\/work\/pricing-evolution"\/>/);
  assert.doesNotMatch(html, /noindex|nofollow/);
  assert.match(html, /Simplifying pricing across four products/);
});

for (const [pathname, destination] of retiredRoutes) {
  test(`${pathname} redirects once to ${destination}`, async () => {
    const response = await render(pathname);
    assert.equal(response.status, 307);
    const location = new URL(response.headers.get("location"), "http://localhost");
    assert.equal(`${location.pathname}${location.hash}`, destination);
    const finalResponse = await render(`${location.pathname}${location.hash}`);
    assert.equal(finalResponse.status, 200, `${destination} must be the final destination`);
  });
}

test("case-to-case navigation follows the homepage order", async () => {
  for (const [route, next] of [
    ["/work/upgrade-prompts", "/work/pricing-evolution"],
    ["/work/pricing-evolution", "/work/checkout"],
    ["/work/checkout", "/work/account-team-security"],
    ["/work/account-team-security", "/work/report-campaign"],
    ["/work/report-campaign", "/work/localyze-executive-ghostwriting"],
    ["/work/localyze-executive-ghostwriting", "/writing"],
  ]) assert.match(await htmlFor(route), new RegExp(`class="next-project"[\\s\\S]*href="${escapeRegExp(next)}"`));
});

test("pricing evolution uses the chaptered case structure and copy boundaries", async () => {
  const [home, html] = await Promise.all([htmlFor("/"), htmlFor("/work/pricing-evolution")]);
  assert.match(home, /href="\/work\/pricing-evolution"/);
  assert.match(home, /Simplifying pricing across four products/);
  assert.match(home, /DeepL · Pricing evolution/);
  assert.match(html, /DeepL pricing started as one Translator grid/);
  assert.match(html, /class="chapter-era"[^>]*>2023</);
  assert.match(html, /class="chapter-era"[^>]*>2024</);
  assert.match(html, /class="chapter-era"[^>]*>2024–2025</);
  assert.match(html, /class="chapter-era"[^>]*>The system</);
  assert.match(html, /class="chapter-comparison"/);
  assert.match(html, /class="chapter-strip"/);
  assert.match(html, /Open the full Write Pro comparison table/);
  assert.match(html, /Open the full Translator comparison table/);
  assert.doesNotMatch(html, /View larger/);
  assert.doesNotMatch(html, /Constraint/);
  assert.doesNotMatch(html, /paid conversion rose 12%|seven figures/);
  assert.doesNotMatch(html, /feature-awareness-security\.png/);

  let previousSection = -1;
  for (const id of ["one-product", "write-pro-arrival", "folding-the-choice", "the-system"]) {
    const index = html.indexOf(`id="${id}"`);
    assert.ok(index > previousSection, `${id} should follow the previous pricing chapter`);
    previousSection = index;
  }

  for (const asset of [
    "pricing-2023-pro-page.png",
    "pricing-translator.png",
    "pricing-write-pro.png",
    "pricing-bundle.png",
    "pricing-bundle-tabs.png",
    "pricing-bundle-era-grid.png",
    "pricing-bundle-era-table.png",
    "pricing-translator-transition-grid.png",
    "pricing-translator-transition-table.png",
    "pricing-translator-cumulative.png",
    "pricing-write-addon-clean.png",
    "pricing-voice-clean.png",
    "pricing-api-clean.png",
    "detail-cumulative-pair.png",
    "detail-bundle-repetition.png",
    "detail-toggle-on.png",
    "detail-toggle-off.png",
    "detail-table-before.png",
    "detail-table-after.png",
    "detail-price-block.png",
    "detail-wordy-bullets.png",
  ]) assert.match(html, new RegExp(escapeRegExp(asset)));

  assert.match(html, /One product, one grid/);
  assert.match(html, /A second product made buying complicated/);
  assert.match(html, /Folding the choice into the page/);
  assert.match(html, /One page per product, cumulative tiers/);
  assert.match(html, /class="story-coda"[\s\S]*href="https:\/\/www\.deepl\.com\/pro"[\s\S]*deepl\.com\/pro/);
  assert.doesNotMatch(
    html,
    /\b(reconstruction|recreated|historical|internal|WIP|work-in-progress|working file|not shipped|proof|mockup)\b/i,
  );
  assert.doesNotMatch(html, /single-click|organisation|personalized glossary|always accurate|resulted in|led to|caused/i);
});

test("upgrade prompts keep the wave result and accurate visible-state copy", async () => {
  const html = await htmlFor("/work/upgrade-prompts");
  assert.match(html, /Every blocker names its reason—usage, file size or feature access—in the first line of body copy/);
  assert.match(html, /Across the whole experiment wave, paid conversion rose 12% and ARR rose by seven figures/);
  assert.match(html, /That result belongs to the wave, not to any single screen here/);
  assert.match(html, /offer-first headline, explanatory body copy/);
  for (const token of ["{5}", "{1}", "{16}"]) assert.match(html, new RegExp(escapeRegExp(token)));
  assert.doesNotMatch(html, /write-pro-free\.png|write-pro-existing-translator-pro\.png|with a countdown/);
});

test("account, team and security writing leads with security and contains bulk deletion as one section", async () => {
  const [home, html] = await Promise.all([htmlFor("/"), htmlFor("/work/account-team-security")]);
  assert.match(home, /work\/home-covers\/account-security-cards-loop\.mp4/);
  assert.doesNotMatch(home, /account-security-protection-restored\.png|account-security-reset-required\.png|bulk-delete-confirmation-card\.png/);
  assert.match(home, /Account, team and security writing/);
  assert.doesNotMatch(home, /Bulk user deletion/);
  assert.doesNotMatch(home, /href="\/work\/bulk-administration"/);
  assert.equal((html.match(/class="story-evidence artifact-collection-section"/g) ?? []).length, 2);
  assert.match(html, /id="account-security"/);
  assert.match(html, /id="bulk-user-deletion"/);
  for (const asset of ["account-security-login.png", "account-security-authentication-error.png", "account-security-reset-required.png", "account-security-protection-restored.png"]) {
    assert.match(html, new RegExp(escapeRegExp(asset)));
  }
  assert.match(html, /Bulk deletion is one representative pattern within the wider account and team collection, not a standalone portfolio story/);
  assert.match(html, /bulk-delete-06-result-detail\.png/);
  assert.match(html, /Users deleted toast above a zero-result table footer reading Displaying 0-0 of 0/);
  assert.doesNotMatch(html, /Congrats! No users, no problems!|bulk-delete-06-result\.png/);
});

test("checkout renders sign-up, bundle, team and no-trial states", async () => {
  const html = await htmlFor("/work/checkout");
  for (const asset of ["start-my-free-trial.png", "bundle-checkout.png", "team-license-checkout.png", "no-trial-ultimate-checkout.png"]) {
    assert.match(html, new RegExp(escapeRegExp(asset)));
  }
  assert.match(html, /Writing checkout for trial, no-trial, bundle and team purchases/);
});

test("writing contains the five approved entries and no data-security placeholder", async () => {
  const html = await htmlFor("/writing");
  assert.equal((html.match(/class="writing-entry"/g) ?? []).length, 5);
  for (const id of [
    "localyze-product-guidance",
    "smartrecruiters-hiring-success",
    "smartrecruiters-onboarding",
    "joblift-renewable-energy",
    "kitchen-stories-french-recipes",
  ]) assert.match(html, new RegExp(`id="${id}"`));
  assert.doesNotMatch(html, /deepl-data-security|data-security safeguards|enterprise-grade security/i);
});

test("quoted samples preserve the validated source strings exactly", async () => {
  const pages = await Promise.all([htmlFor("/writing"), htmlFor("/work/report-campaign"), htmlFor("/work/localyze-executive-ghostwriting")]);
  const combined = pages.join("\n");
  for (const quote of exactQuotes) assert.match(combined, new RegExp(escapeRegExp(quote)), quote);
  for (const altered of [
    "Hybrid working on a global scale adds several layers of logistical complexity.",
    "The best locations will be those where public policies support wellbeing",
    "96% of respondents reported a positive ROI from localization efforts.",
    "machine translation by 98%.",
    "more than 75,000 web assets.",
  ]) assert.doesNotMatch(combined, new RegExp(escapeRegExp(altered)));
});

test("headlines and chapter structures are labelled text, not quotations", async () => {
  const html = await htmlFor("/writing");
  assert.equal((html.match(/<blockquote>/g) ?? []).length, 3);
  assert.match(html, /writing-sample writing-sample--structure/);
  assert.match(html, /Structure:<\/span> Four parts: Evaluate, Strategize, Transform, Optimize\./);
  assert.match(html, /writing-sample writing-sample--headline/);
  assert.match(html, /Headline:<\/span> Renewable Energy: Wind Power Adds Close to 50,000 Jobs to U\.S\. Economy and Spurs Growth in Midwest/);
  assert.doesNotMatch(html, /Editorial decision/);
});

test("Hiring Success uses the real title, contribution and lifecycle note", async () => {
  const html = await htmlFor("/writing");
  assert.match(html, /The Definitive Guide to Hiring Success/);
  assert.match(html, /Mason wrote the 2019 edition/);
  assert.match(html, /current resource is gated behind a short form and now contains newer material/);
});

test("Localyze shows full headlines, exact excerpts and the ghostwriting/byline distinction", async () => {
  const html = await htmlFor("/work/localyze-executive-ghostwriting");
  for (const headline of [
    "Considering An International Hybrid Setup? What Business Leaders Need To Know",
    "Why Public Policy Should Determine The Location Of Your International Entity",
    "Five Tips For Developing A Global Mobility Policy During The Great Resignation",
  ]) assert.match(html, new RegExp(escapeRegExp(headline)));
  assert.match(html, /I wrote the articles for Hanna Marie Asmussen\. Forbes published them under her name/);
  assert.doesNotMatch(html, /editorial-cover|localyze-forbes-ghostwriting\.jpg/);
});

test("report campaign restores the exact writing and article-adaptation asset", async () => {
  const html = await htmlFor("/work/report-campaign");
  assert.match(html, /report-campaign\/ai-content-generation\.png/);
  assert.match(html, /Report<\/span><strong>Full research narrative/);
  assert.match(html, /Article<\/span><strong>Fast entry point/);
  assert.match(html, /Customer stories<\/span><strong>Operating examples/);
  assert.match(html, /Page nine closes the HubSpot story and opens Phrase's\./);
  assert.doesNotMatch(html, /<blockquote><span>Report finding/);
  assert.match(html, /<span>Report finding<\/span><blockquote><p>96% of respondents report positive ROI/);
});

test("selected assets retain truthful dimensions and unique contents", async () => {
  const hashes = new Set();
  for (const [asset, width, height] of selectedAssets) {
    const buffer = await readFile(new URL(asset, publicRoot));
    const dimensions = asset.endsWith(".png") ? pngDimensions(buffer) : jpegDimensions(buffer);
    assert.deepEqual(dimensions, { width, height }, `${asset} dimensions should match`);
    const hash = createHash("sha256").update(buffer).digest("hex");
    assert.ok(!hashes.has(hash), `${asset} should not duplicate another selected asset`);
    hashes.add(hash);
  }
});

test("derivatives and restored assets match their private provenance records", async () => {
  const manifest = JSON.parse(await readFile(new URL("portfolio-asset-manifest.json", privateRoot), "utf8"));
  assert.equal(manifest.version, "1.4");
  assert.equal(manifest.assets.length, 6);
  for (const asset of manifest.assets) {
    for (const field of ["id", "project_id", "source_path", "source_type", "publication_permission", "crop_notes", "caption", "text_alternative"]) {
      assert.equal(typeof asset[field], "string", `${asset.id}.${field} should be recorded`);
      assert.ok(asset[field].length > 0, `${asset.id}.${field} should not be empty`);
    }
    assert.equal(asset.contains_sensitive_data, false);
    assert.equal(asset.export_ready, false);
  }
  const pricing = manifest.assets.find((asset) => asset.id === "DEEPL-PRICING-EVOLUTION");
  assert.ok(pricing);
  assert.equal(pricing.source_path, "site/public/work/pricing-evolution/");
  assert.equal(pricing.publication_permission, "unknown");
  assert.equal(pricing.export_ready, false);
  assert.equal(pricing.files.length, 21);
  for (const file of pricing.files) {
    assert.equal(typeof file.source_path, "string");
    assert.ok(file.source_path.length > 0);
    const buffer = await readFile(new URL(`work/pricing-evolution/${file.path}`, publicRoot));
    assert.deepEqual(pngDimensions(buffer), {
      width: Number(file.dimensions.split("x")[0]),
      height: Number(file.dimensions.split("x")[1]),
    });
    assert.equal(createHash("sha256").update(buffer).digest("hex"), file.sha256);
  }
  assert.ok(pricing.removed_public_files?.some((file) => file.path === "feature-awareness-security.png"));
  const records = JSON.stringify(manifest);
  for (const hash of [
    "d8f0ac76dbe7990f01ac5383776a35e8abf20c2af6a7fd12cf154f4ec5d6f6b0",
    "4ce8ff6e44423d167c5089a843497620f31a9a8e14dcc1c80d32de84d2617ed1",
    "880e9c685c46b0d03ecf0b08096bd1ebacebffb9d67107ba486c15854e976dd0",
    "8567b050cb463973483aa22fd3184f40c9436225e122b5c6cf0eb8bc11e80cda",
    "ecbb01394236b50b0914da2055e3bffb913a2d7c8d59152240a09468fe752c38",
    "fd5ad9735dd5f37b59d88381d309c3b65be2b90953b35e35089089ea4539b667",
  ]) assert.match(records, new RegExp(hash));
  for (const source of [
    "retired-public-assets-2026-07-22/work/bulk-administration/bulk-delete-06-result.png",
    "retired-public-assets-2026-07-22/work/hard-blockers/write-pro-free.png",
    "retired-public-assets-2026-07-22/work/editorial/smartrecruiters-hiring-success.jpg",
  ]) assert.match(records, new RegExp(escapeRegExp(source)));
});

test("retired galleries, weak public assets and dead source modules are absent", async () => {
  for (const directory of [
    "csv-import", "custom-domain", "custom-logo", "data-security", "global-pricing",
    "multi-factor-authentication", "team-access", "translator-free-to-paid", "trial-eligibility", "write-pro-upgrade",
  ]) await assert.rejects(access(new URL(`work/${directory}/`, publicRoot)), `${directory} should be private`);
  for (const file of [
    "work/hard-blockers/write-pro-free.png",
    "work/hard-blockers/write-pro-existing-translator-pro.png",
    "work/bulk-administration/bulk-delete-06-result.png",
    "work/bulk-administration/bulk-delete-01-scope.png",
    "work/bulk-administration/bulk-delete-05-confirmation.png",
    "work/editorial/smartrecruiters-hiring-success.jpg",
  ]) await assert.rejects(access(new URL(file, publicRoot)), `${file} should not be public`);
  for (const file of [
    "work/pricing-evolution/pricing-bundle-era-clean.png",
    "work/pricing-evolution/pricing-translator-transition-clean.png",
    "work/pricing-evolution/feature-awareness-security.png",
  ]) await assert.rejects(access(new URL(file, publicRoot)), `${file} should remain private`);
  await assert.rejects(access(new URL("work/write-pro-launch/", publicRoot)));
  await assert.rejects(access(new URL("app/work/teamAdministrationCompleteSource.ts", root)));
  await assert.rejects(access(new URL("app/components/DeepLProjectGrid.tsx", root)));
});

test("active DeepL case data keeps upgrade prompts and checkout distinct from the chaptered pricing case", async () => {
  const source = await readFile(new URL("app/work/deeplProjectData.ts", root), "utf8");
  const pricingCase = await readFile(new URL("app/work/pricingEvolutionCase.ts", root), "utf8");
  assert.equal((source.match(/export const [a-zA-Z]+Project: ProductCaseStory =/g) ?? []).length, 2);
  for (const route of ["upgrade-prompts", "checkout"]) assert.match(source, new RegExp(`href: "/work/${route}"`));
  assert.match(source, /href: "\/work\/pricing-evolution"/);
  assert.match(pricingCase, /export const pricingEvolutionCase/);
  assert.doesNotMatch(source, /pricingEvolutionProject/);
  assert.doesNotMatch(source, /bulkAdministrationProject/);
  assert.doesNotMatch(source, /csvImport|customDomain|customLogo|teamAdministrationCompleteSource|marketingProjects|homepageProjects/);
});

test("layout is row-major, responsive, naturally sized and keeps mobile About", async () => {
  const [css, grid, chrome, loopingVideo] = await Promise.all([
    readFile(new URL("app/globals.css", root), "utf8"),
    readFile(new URL("app/components/PortfolioProjectGrid.tsx", root), "utf8"),
    readFile(new URL("app/components/PortfolioChrome.tsx", root), "utf8"),
    readFile(new URL("app/components/LoopingCardVideo.tsx", root), "utf8"),
  ]);
  assert.match(css, /\.project-list\s*\{[^}]*display:\s*grid;[^}]*grid-template-columns:\s*repeat\(3,/s);
  assert.match(css, /\.project-list\s*\{[^}]*align-items:\s*start;/s);
  assert.match(css, /@media \(max-width: 820px\)[\s\S]*\.project-list \{ grid-template-columns: repeat\(2,/);
  assert.match(css, /@media \(max-width: 600px\)[\s\S]*\.project-list \{ grid-template-columns: 1fr; \}/);
  assert.doesNotMatch(css, /\.project-card\s*\{[^}]*height:\s*100%;/s);
  assert.doesNotMatch(css, /(?:^|[;{])\s*columns?\s*:/m);
  assert.doesNotMatch(css, /object-fit\s*:\s*cover|aspect-ratio|translateY\s*\(/);
  assert.match(css, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(css, /\.project-entry-heading p\s*\{[^}]*font-size:\s*16px;/s);
  assert.match(css, /\.project-card:hover,\s*\.project-card:focus-visible\s*\{[^}]*background:\s*#e5efeb;[^}]*border-color:\s*#9fb9b0;[^}]*color:\s*var\(--accent\);/s);
  assert.match(grid, /sizes="\(max-width: 600px\) 100vw, \(max-width: 820px\) 50vw, 33vw"/);
  assert.ok(
    grid.indexOf('className="project-entry-image"') < grid.indexOf('className="project-entry-heading"'),
    "project media should precede the title block",
  );
  assert.match(loopingVideo, /prefers-reduced-motion: reduce/);
  assert.match(loopingVideo, /IntersectionObserver/);
  assert.match(loopingVideo, /video\.pause\(\)/);
  assert.match(loopingVideo, /\bmuted\b/);
  assert.match(loopingVideo, /\bloop\b/);
  assert.match(loopingVideo, /\bplaysInline\b/);
  assert.match(loopingVideo, /preload="none"/);
  assert.doesNotMatch(css, /site-header nav a:nth-child\(2\)[^{]*\{[^}]*display:\s*none/s);
  assert.match(chrome, />About<\/Link>/);
});

test("quiet text meets WCAG AA contrast against paper", async () => {
  const css = await readFile(new URL("app/globals.css", root), "utf8");
  const paper = css.match(/--paper:\s*(#[a-f\d]{6})/i)?.[1];
  const quiet = css.match(/--quiet:\s*(#[a-f\d]{6})/i)?.[1];
  assert.ok(paper && quiet);
  assert.equal(quiet.toLowerCase(), "#686d6a");
  assert.ok(contrastRatio(quiet, paper) >= 4.5, `quiet contrast was ${contrastRatio(quiet, paper).toFixed(2)}:1`);
});

test("switcher stays unboxed while both routes remain visibly underlined", async () => {
  const css = await readFile(new URL("app/globals.css", root), "utf8");
  const shell = css.match(/\.work-switcher\s*\{([^}]+)\}/)?.[1] ?? "";
  const links = css.match(/\.work-switcher a\s*\{([^}]+)\}/)?.[1] ?? "";
  assert.doesNotMatch(shell, /background|border|border-radius|box-shadow/);
  assert.match(links, /text-decoration-line:\s*underline/);
  assert.match(css, /\.portfolio-section-heading\s*\{[^}]*flex-direction:\s*column/s);
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
