import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);
const publicRoot = new URL("../public/", import.meta.url);

async function siteCss() {
  const entryUrl = new URL("app/globals.css", root);
  const entry = await readFile(entryUrl, "utf8");
  const imports = [...entry.matchAll(/@import\s+"([^"]+)";/g)]
    .map((match) => new URL(match[1], entryUrl));
  const modules = await Promise.all(imports.map((url) => readFile(url, "utf8")));
  return [entry, ...modules].join("\n");
}

async function render(pathname = "/", origin = "http://localhost") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request(new URL(pathname, origin), { headers: { accept: "text/html" } }), {
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

test("homepage renders a public project index without private review language", async () => {
  const html = await htmlFor("/");
  assert.ok((html.match(/class="project-entry"/g) ?? []).length > 0);
  assert.doesNotMatch(html, /Draft needs|What is still missing|Evidence boundary|claim review/i);
});

test("selected work and writing share the header and About section", async () => {
  const [selected, writing] = await Promise.all([htmlFor("/"), htmlFor("/writing")]);
  for (const marker of [
    "Mason Mitchel",
    'href="/writing"',
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

test("canonical routes remain indexable", async () => {
  for (const pathname of selectedRoutes) {
    const html = await htmlFor(pathname);
    assert.equal((html.match(/rel="canonical"/g) ?? []).length, 1);
    assert.match(html, new RegExp(`<link rel="canonical" href="${escapeRegExp(pathname)}"\\/>`));
  }
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
  const caseContent = html.replace(/<nav class="next-project"[\s\S]*?<\/nav>/, "");
  // Product labels such as "Save 20%" are offer content, not performance claims, and are allowed.
  assert.doesNotMatch(caseContent, /12%/);
  assert.doesNotMatch(caseContent, /\bARR\b/);
  assert.doesNotMatch(caseContent, /six-figure/);
  assert.doesNotMatch(caseContent, /seven-figure/);
  assert.doesNotMatch(caseContent, /\bpaid conversion\b/i);
});

test("evidence switchers retain keyboard support", async () => {
  const switcher = await readFile(new URL("app/components/EvidenceSwitcher.tsx", root), "utf8");
  for (const key of ["ArrowRight", "ArrowLeft", "Home", "End"]) assert.match(switcher, new RegExp(key));
  assert.match(switcher, /role="tablist"/);
  assert.match(switcher, /role="tab"/);
  assert.match(switcher, /role="tabpanel"/);
  assert.match(switcher, /aria-controls=/);
  assert.match(switcher, /aria-selected=\{selected\}/);
  assert.match(switcher, /tabIndex=\{selected \? 0 : -1\}/);
  assert.match(switcher, /tabRefs\.current\[index\]\?\.focus\(\)/);
  assert.match(switcher, /hidden=\{!selected\}/);
});

test("checkout keeps its public metric terminology and evidence boundaries", async () => {
  const [html, caseSource, pageSource] = await Promise.all([
    htmlFor("/work/checkout"),
    readFile(new URL("app/work/checkout/CheckoutCase.tsx", root), "utf8"),
    readFile(new URL("app/work/checkout/page.tsx", root), "utf8"),
  ]);
  const publicSource = [html, caseSource, pageSource].join("\n");

  assert.doesNotMatch(publicSource, /3\.07%/);
  assert.doesNotMatch(publicSource, /35[- ]day/i);
  assert.doesNotMatch(publicSource, /\bPro purchases\b/i);
  assert.doesNotMatch(publicSource, /DeepL wanted to shorten checkout/i);
});

test("DeepL cases avoid known unsupported ownership, lifecycle and outcome claims", async () => {
  const html = (await Promise.all(deeplUxRoutes.map((route) => htmlFor(route)))).join("\n");
  assert.doesNotMatch(
    html,
    /Everything DeepL has named since|organization-wide adoption|sole owner|single-handedly|support volume|this exact (?:file|artifact) shipped/i,
  );
});

test("aggregate experiment results remain attributed above the individual prompt or screen", async () => {
  const routes = ["/", ...selectedRoutes];
  const aggregateMetric = /12%|seven-figure(?:\s+ARR|\s+annual recurring revenue)?/i;
  const aggregateScope = new RegExp([
    String.raw`\b(?:across|within|from|for)\s+(?:the\s+)?`,
    String.raw`(?:(?:wider|broader|overall|combined)\s+)?`,
    String.raw`(?:experiments?|tests?)(?:\s+(?:wave|program|programme|portfolio))?\b`,
    String.raw`|\b(?:series|set|portfolio|group)\s+of\s+(?:experiments|tests)\b`,
  ].join(""), "i");

  for (const route of routes) {
    const text = visibleText(await htmlFor(route));
    if (!aggregateMetric.test(text)) continue;
    assert.match(
      text,
      aggregateScope,
      `${route} must attribute aggregate metrics to multiple or wider experiments`,
    );
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

test("retired universal case templates remain absent", async () => {
  for (const file of [
    "app/components/ArtifactCollectionCase.tsx",
    "app/components/EditorialMiniCase.tsx",
    "app/work/DeepLProjectCase.tsx",
    "app/work/deeplProjectData.ts",
    "app/work/ChapteredCase.tsx",
    "app/work/pricing-evolution/EraDiagram.tsx",
    "app/work/pricingEvolutionCase.ts",
  ]) await assert.rejects(access(new URL(file, root)), `${file} should be retired`);

  const types = await readFile(new URL("app/work/portfolioTypes.ts", root), "utf8");
  assert.doesNotMatch(types, /ProductCaseStory|ArtifactCollection|EditorialMiniCase|evidenceNote/);
});

test("shared media and site chrome retain interaction safeguards", async () => {
  const [css, chrome, loopingVideo] = await Promise.all([
    siteCss(),
    readFile(new URL("app/components/PortfolioChrome.tsx", root), "utf8"),
    readFile(new URL("app/components/LoopingCardVideo.tsx", root), "utf8"),
  ]);
  assert.match(css, /@media \(prefers-reduced-motion: reduce\)/);
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

test("quiet text meets WCAG AA contrast against paper", async () => {
  const css = await siteCss();
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
    /triggerElement\?\.focus\(\{\s*preventScroll:\s*true\s*\}\)/,
    /aria-describedby=\{showDialogCaption \? captionId : undefined\}/,
    /aria-label=\{minimalDialog \? "Close image viewer" : undefined\}/,
    /showDialogCaption \? <p id=\{captionId\}>\{dialogCaption \?\? caption\}<\/p> : null/,
  ]) assert.match(lightbox, behavior);
});

test("dialog image sizes pass through interactive evidence components", async () => {
  const lightbox = await readFile(new URL("app/components/ImageLightbox.tsx", root), "utf8");
  const switcher = await readFile(new URL("app/components/EvidenceSwitcher.tsx", root), "utf8");

  assert.match(lightbox, /sizes=\{dialogSizes\}/);
  assert.match(switcher, /dialogSizes=\{dialogSizes\}/);
});

test("résumé remains anonymously downloadable", async () => {
  const pdf = await readFile(new URL("mason-cv.pdf", publicRoot));
  assert.equal(pdf.subarray(0, 5).toString(), "%PDF-");
  assert.ok(pdf.length > 50_000);
});
