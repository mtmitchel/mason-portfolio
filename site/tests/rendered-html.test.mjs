import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);
const repositoryRoot = new URL("../../", import.meta.url);
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

function visibleText(html) {
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

const deeplUxRoutes = [
  "/work/upgrade-prompts",
  "/work/pricing-evolution",
  "/work/checkout",
  "/work/account-team-security",
  "/work/product-naming",
  "/work/voice-product",
];

const selectedRoutes = [
  "/work/upgrade-prompts",
  "/work/pricing-evolution",
  "/work/checkout",
  "/work/account-team-security",
  "/work/report-campaign",
  "/work/localyze-executive-ghostwriting",
  "/work/product-naming",
  "/work/voice-product",
];

const pricingRetiredPublicFiles = [
  "bundle-era-translator-grid.png",
  "bundle-era-repeated-write-block.png",
  "bundle-era-limits-in-sentences.png",
  "pro-page-2023.png",
  "bundle-era-tab-selector.png",
  "product-translator.png",
  "product-write.png",
  "product-voice.png",
  "product-api.png",
  "detail-bundle-repetition.png",
  "detail-cumulative-pair.png",
  "detail-table-before.png",
  "detail-table-after.png",
  "pricing-bundle-tabs.png",
  "pricing-bundle-era-grid.png",
  "pricing-translator-transition-grid.png",
  "pricing-translator-cumulative.png",
  "pricing-write-addon-clean.png",
  "pricing-voice-clean.png",
  "pricing-api-clean.png",
  "pricing-write-pro.png",
  "detail-table-before-viewer.png",
  "detail-table-after-viewer.png",
  "detail-bundle-repetition-viewer.png",
  "detail-cumulative-pair-viewer.png",
  "pricing-bundle-era-grid-viewer.png",
  "pricing-translator-transition-grid-viewer.png",
  "pricing-write-addon-clean-viewer.png",
  "pricing-voice-clean-viewer.png",
  "pricing-api-clean-viewer.png",
  "pricing-bundle-tabs-viewer.png",
  "pricing-write-pro-viewer.png",
];

function pricingEvidenceFromData(data) {
  return [...data.matchAll(
    /src:\s*"(\/work\/pricing-evolution\/[^"]+)"[\s\S]*?width:\s*(\d+)[\s\S]*?height:\s*(\d+)[\s\S]*?alt:\s*"([^"]+)"[\s\S]*?caption:\s*"([^"]+)"/g,
  )].map(([, src, width, height, alt, caption]) => ({
    src,
    publicPath: src.replace(/^\//, ""),
    path: src.split("/").at(-1),
    width: Number(width),
    height: Number(height),
    alt,
    caption,
  }));
}

function pricingAssetsFromData(data) {
  return pricingEvidenceFromData(data)
    .map(({ publicPath, width, height }) => [publicPath, width, height]);
}

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

test("homepage renders the eight selected cards in order with source-fit previews", async () => {
  const html = await htmlFor("/");
  assert.equal((html.match(/class="project-entry"/g) ?? []).length, 8);
  assertOrder(html, selectedRoutes.map((route) => `href="${route}"`), "homepage card order");
  for (const asset of ["deepl-upgrade-to-pro.png", "deepl-retail-ecommerce.svg", "voice-offer-comparison.png"]) {
    assert.match(html, new RegExp(asset));
  }
  assert.match(html, /class="project-entry-text-preview"/);
  assert.match(visibleText(html), /DeepL Write Pro[\s\S]*Not DeepL Pro Write/);
  for (const protectedTitle of [
    "Turning localization research into a multi-format campaign",
    "Executive ghostwriting on global mobility",
  ]) {
    assert.match(html, new RegExp(escapeRegExp(protectedTitle)));
  }
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
    "mtmitchel@gmail.com",
    'href="/writing"',
    'class="site-footer"',
  ]) {
    assert.match(selected, new RegExp(escapeRegExp(marker)));
    assert.match(writing, new RegExp(escapeRegExp(marker)));
  }
  assert.match(selected, /href="(?:\/)?#about"/);
  assert.match(writing, /href="(?:\/)?#about"/);
});

test("the homepage route switcher remains real navigation", async () => {
  const source = await readFile(new URL("app/components/WorkIndexPage.tsx", root), "utf8");
  assert.doesNotMatch(source, /["']use client["']|useState|onClick/);
  assert.match(source, /<nav className="work-switcher" aria-label="Portfolio view">/);
});

for (const pathname of selectedRoutes) {
  test(`${pathname} renders one public case heading without private draft notes`, async () => {
    const html = await htmlFor(pathname);
    const headings = html.match(/<h1(?:\s[^>]*)?>[\s\S]*?<\/h1>/g) ?? [];
    assert.equal(headings.length, 1);
    assert.ok(headings[0].replace(/<[^>]+>/g, "").trim().length > 0);
    assert.doesNotMatch(html, /noindex/);
    assert.doesNotMatch(html, /Draft needs|What is still missing|Best fit:/);
  });
}

for (const [pathname, title] of [
  ["/work/report-campaign", "Turning localization research into a multi-format campaign"],
  ["/work/localyze-executive-ghostwriting", "Executive ghostwriting on global mobility"],
]) {
  test(`${pathname} retains its existing public case heading`, async () => {
    assert.match(await htmlFor(pathname), new RegExp(`<h1>${escapeRegExp(title)}</h1>`));
  });
}

test("canonical routes remain indexable", async () => {
  for (const pathname of selectedRoutes) {
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
    ["/work/product-naming", "/work/voice-product"],
    ["/work/voice-product", "/writing"],
  ];
  for (const [route, next] of chain) {
    assert.match(await htmlFor(route), new RegExp(`class="next-project"[\\s\\S]*href="${escapeRegExp(next)}"`));
  }
});

test("DeepL UX case navigation uses the same titles as the homepage", async () => {
  const homepage = await htmlFor("/");
  const chain = [
    ["/work/upgrade-prompts", "/work/pricing-evolution"],
    ["/work/pricing-evolution", "/work/checkout"],
    ["/work/checkout", "/work/account-team-security"],
    ["/work/product-naming", "/work/voice-product"],
  ];

  for (const [route, next] of chain) {
    const card = homepage.match(
      new RegExp(`<a(?=[^>]*href="${escapeRegExp(next)}")[^>]*>([\\s\\S]*?)<\\/a>`),
    );
    assert.ok(card, `${next} should have a homepage card`);
    const cardHeading = card[1].match(/<h3[^>]*>([\s\S]*?)<\/h3>/);
    assert.ok(cardHeading, `${next} homepage card should have a heading`);

    const page = await htmlFor(route);
    const nextNavigation = page.match(/<nav class="next-project"[\s\S]*?<\/nav>/);
    assert.ok(nextNavigation, `${route} should have next-project navigation`);
    const nextLink = nextNavigation[0].match(
      new RegExp(`<a(?=[^>]*href="${escapeRegExp(next)}")[^>]*>([\\s\\S]*?)<\\/a>`),
    );
    assert.ok(nextLink, `${route} should link to ${next}`);

    assert.equal(
      visibleText(nextLink[1].replace(/<b[\s\S]*?<\/b>/g, "")),
      visibleText(cardHeading[1]),
      `${route} next-project title should match the ${next} homepage card`,
    );
  }
});

test("every in-scope DeepL UX route has a manifest-owned central exhibit contract", async () => {
  const manifest = JSON.parse(await readFile(new URL("portfolio-asset-manifest.json", privateRoot), "utf8"));
  const contracts = manifest.assets.map((asset) => asset.central_exhibit).filter(Boolean);
  assert.equal(contracts.length, deeplUxRoutes.length);
  assert.deepEqual(contracts.map((contract) => contract.route).sort(), [...deeplUxRoutes].sort());

  for (const contract of contracts) {
    const html = await htmlFor(contract.route);
    const text = visibleText(html);
    for (const publicRef of contract.public_refs ?? []) {
      await access(new URL(publicRef, repositoryRoot));
      if (contract.render_policy !== "preserved-only") {
        assert.match(html, new RegExp(escapeRegExp(publicRef.split("/").at(-1))));
      }
    }
    for (const token of contract.required_tokens ?? []) {
      assert.match(text, new RegExp(escapeRegExp(token)));
    }
    for (const token of contract.route_required_tokens ?? []) {
      assert.match(text, new RegExp(escapeRegExp(token)));
    }
    if (contract.required_link_count) {
      assert.ok(
        (html.match(/href="https?:\/\//g) ?? []).length >= contract.required_link_count,
        `${contract.route} should render its central exhibit links`,
      );
    }
  }
});

test("upgrade prompts retain selected evidence and scope the result once", async () => {
  const html = await htmlFor("/work/upgrade-prompts");
  const source = await readFile(new URL("app/work/upgrade-prompts/UpgradePromptsCase.tsx", root), "utf8");
  for (const asset of [
    "usage-limit.png",
    "document-size.png",
    "remaining-documents.png",
    "formality.png",
    "glossaries.png",
    "write-free-account-detail.png",
    "write-translator-pro-account-detail.png",
    "feature-awareness-clarify.png",
    "feature-awareness-tone.png",
    "feature-awareness-files.png",
    "feature-awareness-glossary.png",
    "write-pro-allowance-comparison.png",
  ]) assert.match(`${html}\n${source}`, new RegExp(escapeRegExp(asset)));
  assert.equal((html.match(/12%/g) ?? []).length, 1);
  assert.equal((html.match(/seven-figure/g) ?? []).length, 1);
  assert.match(html, /wider experiment wave/i);
  assert.doesNotMatch(html, /network-usage-limit|\{5\}|\{1\}|\{16\}|Upgrade to Pro<\/p>[\s\S]*Before/);
});

test("pricing copy keeps supported lifecycle separate from unsupported ownership and outcome claims", async () => {
  const html = await htmlFor("/work/pricing-evolution");
  const data = await readFile(new URL("app/work/pricing-evolution/pricingEvolutionData.ts", root), "utf8");
  const page = await readFile(new URL("app/work/pricing-evolution/page.tsx", root), "utf8");
  const publicSource = [html, data, page].join("\n");

  for (const banned of [
    /\badopted\b/i,
    /\bcurrent architecture\b/i,
    /\blater adopted\b/i,
    /\bsole owner\b/i,
    /\bsingle-handedly\b/i,
    /\bcost most to maintain\b/i,
    /\btook longest\b/i,
    /\bsource that settled\b/i,
    /\bI (?:designed|created|introduced|placed|put) (?:the )?(?:add-on )?control\b/i,
    /\bmy (?:add-on )?control\b/i,
    /\btests? (?:ran|showed|proved|validated)\b/i,
    /\btest results?\b/i,
    /\bchanged customer behaviou?r\b/i,
    /\b(?:this|the) (?:exact )?(?:file|working layout|artifact) shipped\b/i,
    /\bproduction screenshot\b/i,
  ]) {
    assert.doesNotMatch(publicSource, banned);
  }
});

test("pricing evidence does not overstate working layouts as production lineage", async () => {
  const data = await readFile(new URL("app/work/pricing-evolution/pricingEvolutionData.ts", root), "utf8");
  assert.doesNotMatch(data, /\bBefore\b|\bAfter\b/);
  assert.doesNotMatch(data, /same-offer (?:pair|comparison)|matching crops? (?:show|prove|establish)/i);
  assert.doesNotMatch(data, /\b(?:this|the) (?:exact )?(?:file|working layout|artifact) shipped\b/i);
  assert.doesNotMatch(data, /\bproduction screenshot\b/i);
});

test("pricing page carries no business-outcome metric", async () => {
  const html = await htmlFor("/work/pricing-evolution");
  // Product labels such as "Save 20%" are offer content, not performance claims, and are allowed.
  assert.doesNotMatch(html, /12%/);
  assert.doesNotMatch(html, /\bARR\b/);
  assert.doesNotMatch(html, /six-figure/);
  assert.doesNotMatch(html, /seven-figure/);
  assert.doesNotMatch(html, /\bpaid conversion\b/i);
});

test("pricing page references no retired assets", async () => {
  const html = await htmlFor("/work/pricing-evolution");
  assert.doesNotMatch(html, /-viewer\.png/);
  for (const name of [
    "pro-page-2023",
    "bundle-era-tab-selector",
    "product-translator",
    "product-write.png",
    "product-voice.png",
    "product-api.png",
    "detail-bundle-repetition",
    "detail-cumulative-pair",
    "detail-table-before",
    "detail-table-after",
    "pricing-bundle-tabs",
    "pricing-bundle-era-grid",
    "pricing-translator-transition-grid",
    "pricing-translator-cumulative",
    "pricing-write-addon-clean",
    "pricing-voice-clean",
    "pricing-api-clean",
    "pricing-write-pro",
    "pricing-2023-pro-page",
    "detail-toggle",
    "detail-price-block",
    "detail-wordy-bullets",
    "legacy-two-tab-grid",
    "bundle-era-selector-in-context",
    "bundle-era-write-grid",
    "addon-on-cards",
    "addon-off-cards",
    "cards-bundle-repeated",
    "cards-cumulative-tiers",
    "table-values-repeat-label",
    "table-labels-own-qualifier",
    "product-write-cards",
    "product-voice-cards",
    "product-api-cards",
  ]) {
    assert.doesNotMatch(html, new RegExp(escapeRegExp(name)));
  }
});

test("checkout keeps selected states and the accessible full-frame switcher", async () => {
  const html = await htmlFor("/work/checkout");
  for (const asset of [
    "trial-sign-up-detail.png",
    "bundle-checkout-detail.png",
    "team-purchase-detail.png",
    "no-trial-checkout-detail.png",
    "trial-faq-collapsed.png",
    "trial-faq-expanded.png",
  ]) assert.match(html, new RegExp(escapeRegExp(asset)));
  assert.match(html, /role="tablist"/);
  assert.equal((html.match(/role="tab"/g) ?? []).length, 4);
  assert.match(html, /evidence-switcher--quiet/);
  assert.match(html, /evidence-expand-indicator/);
  assert.doesNotMatch(html, /class="evidence-label"|class="evidence-action"/);
  for (const label of ["Bundle", "Trial sign-up", "Team", "No trial"]) assert.match(html, new RegExp(`>${label}<`));
  assert.match(html, /€0 due today/);
  assert.doesNotMatch(html, /3\.02%|€2\.4M|100 purchases|conversion/);

  const switcher = await readFile(new URL("app/components/EvidenceSwitcher.tsx", root), "utf8");
  for (const key of ["ArrowRight", "ArrowLeft", "Home", "End"]) assert.match(switcher, new RegExp(key));
  assert.match(switcher, /role="tabpanel"/);
  assert.match(switcher, /hidden=\{!selected\}/);
});

test("product naming shows the decision system without overstating adoption", async () => {
  const html = await htmlFor("/work/product-naming");
  for (const marker of [
    "DeepL Write Pro",
    "DeepL Pro Write",
    "DeepL Pro",
  ]) assert.match(html, new RegExp(escapeRegExp(marker)));
  assert.match(html, /API Free and API Pro/);
  assert.match(html, /UX Writing/);
  assert.match(html, /Product Marketing/);
  assert.doesNotMatch(
    html,
    /Everything DeepL has named since|organization-wide adoption|sole owner|single-handedly|conversion|ARR|right now|€49\.99|€36\.00/,
  );
});

test("Voice mini case keeps its two offers and source-backed evidence distinct", async () => {
  const html = await htmlFor("/work/voice-product");
  for (const marker of [
    "Voice for Meetings",
    "Voice for Conversations",
    "voice-positioning-header.png",
    "voice-offer-comparison.png",
  ]) assert.match(html, new RegExp(escapeRegExp(marker)));
  assert.doesNotMatch(html, /conversion|ARR|revenue|adoption|shipped/);
});

test("account recovery and team administration retain selected states", async () => {
  const html = await htmlFor("/work/account-team-security");
  for (const asset of [
    "account-security-login-detail.png",
    "account-security-authentication-error-detail.png",
    "account-security-reset-required.png",
    "account-security-protection-restored.png",
    "bulk-delete-confirmation-detail.png",
    "bulk-delete-06-result-detail.png",
  ]) assert.match(html, new RegExp(escapeRegExp(asset)));
  assert.match(html, /Active status/);
  assert.doesNotMatch(html, /SSO|adoption|support volume|shipped|conversion/);
});

test("report campaign retains selected evidence and the supported campaign result", async () => {
  const html = await htmlFor("/work/report-campaign");
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
  const pages = Object.fromEntries(await Promise.all(deeplUxRoutes.map(async (route) => [route, await htmlFor(route)])));
  for (const [route, metric, sectionId] of [
    ["/work/upgrade-prompts", /12%|seven-figure ARR/, "wave-result"],
  ]) {
    if (metric.test(pages[route])) {
      assert.match(pages[route], new RegExp(`id="${sectionId}"[\\s\\S]*${metric.source}`));
    }
  }
  for (const route of [
    "/work/pricing-evolution",
    "/work/checkout",
    "/work/account-team-security",
    "/work/product-naming",
    "/work/voice-product",
  ]) {
    assert.doesNotMatch(pages[route], /12%|seven-figure ARR/);
  }
});

test("DeepL UX case pages contain no private audit language or fake transformations", async () => {
  const html = (await Promise.all(deeplUxRoutes.map((route) => htmlFor(route)))).join("\n");
  assert.doesNotMatch(
    html,
    /Evidence boundary|selected frames document|design-file|public selection|does not claim|does not establish|not presented as evidence|\bprovenance\b|\breconstruction\b|\breconstructed\b|held documents|source supports|final-string status|launch lineage|needs confirmation|not yet available|clearest supported/i,
  );
  assert.doesNotMatch(html, /One generic purchase message|Update product, price, seats, trial timing|You've reached your free usage limit[\s\S]*Before/);
});

test("selected assets retain their declared dimensions", async () => {
  const manifest = JSON.parse(await readFile(new URL("portfolio-asset-manifest.json", privateRoot), "utf8"));
  const manifestAssets = manifest.assets
    .flatMap((asset) => asset.files ?? [])
    .filter((file) => file.public_path?.startsWith("site/public/") && file.public_path.endsWith(".png"))
    .map((file) => {
      const dimensions = file.dimensions?.match(/^(\d+)x(\d+)$/);
      assert.ok(dimensions, `${file.public_path} should declare width and height`);
      return [
        file.public_path.replace(/^site\/public\//, ""),
        Number(dimensions[1]),
        Number(dimensions[2]),
      ];
    });
  const pricingData = await readFile(new URL("app/work/pricing-evolution/pricingEvolutionData.ts", root), "utf8");
  const pricingAssets = pricingAssetsFromData(pricingData);
  assert.ok(pricingAssets.length > 0, "pricing case should declare its selected images");

  for (const [asset, width, height] of [...manifestAssets, ...pricingAssets]) {
    const buffer = await readFile(new URL(asset, publicRoot));
    assert.deepEqual(pngDimensions(buffer), { width, height }, `${asset} dimensions should match`);
  }
});

test("the private manifest records active evidence and the corrected report cover", async () => {
  const manifest = JSON.parse(await readFile(new URL("portfolio-asset-manifest.json", privateRoot), "utf8"));
  assert.equal(manifest.version, "2.0");
  assert.match(manifest.updated, /^\d{4}-\d{2}-\d{2}$/);
  const files = manifest.assets.flatMap((asset) => asset.files ?? []);
  const cropPaths = [
    "upgrade-prompts/write-free-account-detail.png",
    "upgrade-prompts/write-translator-pro-account-detail.png",
    "checkout/trial-sign-up-detail.png",
    "checkout/bundle-checkout-detail.png",
    "checkout/team-purchase-detail.png",
    "checkout/no-trial-checkout-detail.png",
    "checkout/trial-faq-collapsed.png",
    "checkout/trial-faq-expanded.png",
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
  for (const publicPath of [
    "site/public/work/upgrade-prompts/feature-awareness-clarify.png",
    "site/public/work/upgrade-prompts/feature-awareness-tone.png",
    "site/public/work/upgrade-prompts/feature-awareness-files.png",
    "site/public/work/upgrade-prompts/feature-awareness-glossary.png",
    "site/public/work/upgrade-prompts/write-pro-allowance-comparison.png",
    "site/public/work/checkout/trial-faq-collapsed.png",
    "site/public/work/checkout/trial-faq-expanded.png",
    "site/public/work/voice-product/voice-positioning-header.png",
    "site/public/work/voice-product/voice-offer-comparison.png",
  ]) {
    const file = files.find((candidate) => candidate.public_path === publicPath);
    assert.ok(file, `${publicPath} should be recorded`);
    await access(new URL(file.source_path, repositoryRoot));
    const buffer = await readFile(new URL(publicPath.replace(/^site\/public\//, ""), publicRoot));
    assert.equal(createHash("sha256").update(buffer).digest("hex"), file.sha256);
  }
  const pricingData = await readFile(new URL("app/work/pricing-evolution/pricingEvolutionData.ts", root), "utf8");
  const activePricingEvidence = pricingEvidenceFromData(pricingData);
  const pricingManifest = manifest.assets.find((asset) => asset.id === "DEEPL-PRICING-EVOLUTION");
  assert.ok(pricingManifest, "DEEPL-PRICING-EVOLUTION should be recorded");

  for (const evidence of activePricingEvidence) {
    const file = pricingManifest.files.find((candidate) => candidate.path === evidence.path);
    assert.ok(file, `${evidence.path} should be recorded`);
    for (const field of ["public_path", "source_path", "crop_notes", "crop_scope", "dimensions", "sha256"]) {
      assert.equal(typeof file[field], "string", `${evidence.path}.${field} should be recorded`);
      assert.ok(file[field].length > 0, `${evidence.path}.${field} should not be empty`);
    }
    assert.equal(file.public_path, `site/public/${evidence.publicPath}`);
    assert.equal(file.dimensions, `${evidence.width}x${evidence.height}`);
    assert.equal(file.caption, evidence.caption);
    assert.equal(file.text_alternative, evidence.alt);
    assert.equal(typeof file.trim_margin, "object", `${evidence.path}.trim_margin should be recorded`);
    assert.ok(file.trim_margin, `${evidence.path}.trim_margin should not be empty`);
    for (const edge of ["left", "top", "right", "bottom"]) {
      assert.equal(typeof file.trim_margin[edge], "number", `${evidence.path}.trim_margin.${edge} should be a number`);
    }
    await access(new URL(file.source_path, repositoryRoot));
    const buffer = await readFile(new URL(evidence.publicPath, publicRoot));
    assert.equal(createHash("sha256").update(buffer).digest("hex"), file.sha256);
  }
  const reportCover = files.find((file) => file.path === "report-campaign/report-cover.png");
  assert.equal(reportCover.dimensions, "978x1369");
  for (const asset of manifest.assets) {
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
    "work/product-naming/naming-system-cover.png",
    ...pricingRetiredPublicFiles.map((name) => `work/pricing-evolution/${name}`),
    "work/localization-report/recommendations.png",
    "work/report-campaign/hubspot-case-study.png",
    "work/report-campaign/phrase-case-study.png",
  ]) await assert.rejects(access(new URL(file, publicRoot)), `${file} should be private`);

  const types = await readFile(new URL("app/work/portfolioTypes.ts", root), "utf8");
  assert.doesNotMatch(types, /ProductCaseStory|ArtifactCollection|EditorialMiniCase|evidenceNote/);
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
  assert.match(grid, /sizes="\(max-width: 600px\) 100vw, \(max-width: 820px\) 50vw, 33vw"/);
  assert.match(grid, /project\.imageDisplay === "full-document"/);
  assert.ok(grid.indexOf('className="project-entry-image"') < grid.indexOf('className="project-entry-heading"'));
  assert.match(loopingVideo, /prefers-reduced-motion: reduce/);
  assert.match(loopingVideo, /IntersectionObserver/);
  assert.match(loopingVideo, /\bmuted\b/);
  assert.match(loopingVideo, /\bloop\b/);
  assert.match(loopingVideo, /\bplaysInline\b/);
  assert.match(chrome, />About<\/Link>/);
  assert.match(
    chrome,
    /href="https:\/\/www\.linkedin\.com\/in\/mtmitchel" target="_blank" rel="noreferrer">\s*LinkedIn\s*<\/a>/,
  );
  assert.doesNotMatch(chrome, /Résumé|href="\/mason-cv\.pdf"/);
});

test("public text never drops below 18px", async () => {
  const css = await readFile(new URL("app/globals.css", root), "utf8");
  const declarations = [...css.matchAll(/font-size:\s*([^;]+);/g)].map((match) => match[1].trim());

  assert.ok(declarations.length > 0);
  for (const value of declarations) {
    const pixels = value.match(/^(\d+(?:\.\d+)?)px$/);
    if (pixels) {
      assert.ok(Number(pixels[1]) >= 18, `${value} is below the 18px minimum`);
      continue;
    }

    const rems = value.match(/^(\d+(?:\.\d+)?)rem$/);
    if (rems) {
      assert.ok(Number(rems[1]) >= 1.125, `${value} is below the 18px minimum`);
      continue;
    }

    const clampMinimum = value.match(/^clamp\(\s*(\d+(?:\.\d+)?)(px|rem)\s*,/);
    assert.ok(clampMinimum, `${value} does not expose an enforceable minimum`);
    const minimum = Number(clampMinimum[1]);
    const minimumInPixels = clampMinimum[2] === "rem" ? minimum * 16 : minimum;
    assert.ok(minimumInPixels >= 18, `${value} is below the 18px minimum`);
  }
});

test("long-form body copy stays at 20px or larger", async () => {
  const css = await readFile(new URL("app/globals.css", root), "utf8");
  for (const selector of [
    "\\.site-identity p",
    "\\.about p",
    "\\.story-hook",
    "\\.story-copy > p",
    "\\.evidence-switcher-summary",
    "\\.language-comparison p",
    "\\.writing-entry-body",
    "\\.chapter-synopsis p",
    "\\.chapter-prose > p",
  ]) {
    assert.match(css, new RegExp(`${selector}\\s*\\{[^}]*font-size:\\s*20px;`, "s"), selector);
  }
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
    /aria-describedby=\{showDialogCaption \? captionId : undefined\}/,
    /aria-label=\{minimalDialog \? "Close image viewer" : undefined\}/,
    /showDialogCaption \? <p id=\{captionId\}>\{caption\}<\/p> : null/,
  ]) assert.match(lightbox, behavior);
});

test("dialog image sizes pass through interactive evidence components", async () => {
  const lightbox = await readFile(new URL("app/components/ImageLightbox.tsx", root), "utf8");
  const switcher = await readFile(new URL("app/components/EvidenceSwitcher.tsx", root), "utf8");

  assert.match(lightbox, /sizes=\{dialogSizes\}/);
  assert.match(switcher, /dialogSizes=\{dialogSizes\}/);
});

test("pricing viewer preserves image proportions and confines overflow", async () => {
  const css = await readFile(new URL("app/globals.css", root), "utf8");
  assert.match(
    css,
    /\.pricing-page \.lightbox-panel--minimal\s*\{[^}]*display:\s*flex;[^}]*overflow:\s*hidden;/s,
  );
  assert.match(
    css,
    /\.pricing-page \.lightbox-panel--minimal \.lightbox-image\s*\{[^}]*min-height:\s*0;[^}]*overflow:\s*auto;/s,
  );
  assert.match(
    css,
    /\.pricing-page \.lightbox-panel--minimal \.lightbox-image img\s*\{[^}]*align-self:\s*flex-start;[^}]*flex:\s*0 0 auto;[^}]*height:\s*auto;/s,
  );
});

test("résumé remains anonymously downloadable", async () => {
  const pdf = await readFile(new URL("mason-cv.pdf", publicRoot));
  assert.equal(pdf.subarray(0, 5).toString(), "%PDF-");
  assert.ok(pdf.length > 50_000);
});
