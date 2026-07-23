import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readdir, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);
const publicRoot = new URL("../public/", import.meta.url);

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request(new URL(pathname, "http://localhost"), { headers: { accept: "text/html" } }), {
    ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
  }, { waitUntil() {}, passThroughOnException() {} });
}

function pngDimensions(buffer) {
  assert.equal(buffer.subarray(0, 8).toString("hex"), "89504e470d0a1a0a", "asset must be a PNG");
  return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
}

async function pngFiles(directory) {
  const entries = await readdir(new URL(directory, publicRoot), { withFileTypes: true, recursive: true });
  return entries.filter((entry) => entry.isFile() && entry.name.endsWith(".png"));
}

const caseRoutes = [
  ["/work/pro-driver-experiments", "Designing hard blockers across DeepL Translator and Write", "Hard blockers"],
  ["/work/checkout", "Designing subscription checkout across trial and no-trial states", "Subscription checkout"],
  ["/work/multi-factor-authentication", "Designing MFA account recovery from failed login to restored protection", "MFA account recovery"],
  ["/work/bulk-administration", "Designing a complete bulk user deletion flow", "Bulk user deletion"],
  ["/work/csv-import", "Designing an add-users flow that scales from one person to a CSV", "Adding users at scale"],
  ["/work/custom-domain", "Designing a custom-domain lifecycle an admin can safely manage", "Custom domain management"],
  ["/work/custom-logo", "Designing clear feedback for uploading and removing a team logo", "Custom logo management"],
  ["/work/team-access", "Clarifying roles, status and access in team administration", "Team access controls"],
  ["/work/localization-report", "Turning localization research into a clear business narrative", "Localization research report"],
  ["/work/report-campaign", "Extending one research report across several editorial formats", "Localization report campaign"],
  ["/work/data-security", "Explaining DeepL’s data-security safeguards in plain language", "Data security article"],
];

const comparisonOnlyRoutes = new Set([
  "/work/custom-domain",
  "/work/custom-logo",
  "/work/localization-report",
  "/work/report-campaign",
  "/work/data-security",
]);
const homepageRoutes = caseRoutes.filter(([route]) => !comparisonOnlyRoutes.has(route));

test("homepage presents the six finished, image-led stories", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);
  const html = (await response.text()).replaceAll("<!-- -->", "");
  assert.match(html, /<title>Mason Mitchel — UX Copywriter &amp; Content Designer<\/title>/);
  assert.match(html, /class="project-list"/);
  assert.match(html, /href="\/work\/candidate-review"/);
  assert.match(html, /View all 10 DeepL projects/);
  for (const [route, , cardTitle] of homepageRoutes) {
    assert.match(html, new RegExp(`href="${route}"`));
    assert.match(html, new RegExp(cardTitle.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
  assert.doesNotMatch(html, /href="\/work\/(?:translator-upgrade|write-pro|trial-eligibility|global-pricing)"/);
  assert.doesNotMatch(html, /Translator upgrade prompts|DeepL Write Pro upgrades|Trial eligibility|Global pricing and checkout/);
  assert.doesNotMatch(html, /subscription-lifecycle|In progress|Dev area|placeholder|Figma/i);
});

test("DeepL index is an index, not a monolithic case-study page", async () => {
  const response = await render("/work/candidate-review");
  assert.equal(response.status, 200);
  const html = (await response.text()).replaceAll("<!-- -->", "");
  assert.match(html, /UX writing, content design and editorial work at DeepL/);
  assert.match(html, /class="project-list"/);
  assert.equal((html.match(/class="project-entry"/g) ?? []).length, 10);
  assert.match(html, /Product option 1 · Hard blockers/);
  assert.match(html, /Product option 2 · Checkout/);
  assert.match(html, /Admin option 1 · Account security/);
  assert.match(html, /Admin option 2 · Bulk deletion/);
  assert.match(html, /Admin option 3 · Add users/);
  assert.match(html, /Admin option 4 · Custom domain/);
  assert.match(html, /Admin option 5 · Custom logo/);
  assert.match(html, /Marketing option 3 · Data security/);
  assert.match(html, /content="(?:noindex, nofollow|nofollow, noindex)"/);
  assert.doesNotMatch(html, /proposal|audit|rank|candidate number|node-id=|figma\.com|subscription-lifecycle/i);
});

for (const [pathname, heading] of caseRoutes) {
  test(`renders ${pathname} as a complete story`, async () => {
    const response = await render(pathname);
    assert.equal(response.status, 200);
    const html = (await response.text()).replaceAll("<!-- -->", "");
    assert.match(html, new RegExp(heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    assert.match(html, /01 · (?:The experience|The publication|The campaign|The article)/);
    assert.match(html, /The decisions doing the work/);
    assert.match(html, /What the work made possible/);
    assert.match(html, /What this shows/);
    assert.match(html, /href="\/work\/candidate-review"/);
    assert.doesNotMatch(html, /placeholder (?:image|visual|section)|Figma canvas|sticky note|node-id=|figma\.com/i);
  });
}

test("hard-blocker case presents ten distinct source visuals", async () => {
  const response = await render("/work/pro-driver-experiments");
  assert.equal(response.status, 200);
  const html = (await response.text()).replaceAll("<!-- -->", "");
  const matches = html.match(/\/work\/hard-blockers\/[^"? ]+\.png/g) ?? [];
  const sources = new Set(matches);
  assert.equal(sources.size, 10);
  assert.ok(sources.has("/work/hard-blockers/remaining-documents.png"));
  assert.ok(sources.has("/work/hard-blockers/write-pro-illustrated-free.png"));
  assert.ok(sources.has("/work/hard-blockers/write-pro-illustrated-translator-pro.png"));
});

test("MFA case presents the safe recovery journey and omits credentials", async () => {
  const response = await render("/work/multi-factor-authentication");
  assert.equal(response.status, 200);
  const html = (await response.text()).replaceAll("<!-- -->", "");
  const matches = html.match(/\/work\/multi-factor-authentication\/mfa-recovery-[^"? ]+\.png/g) ?? [];
  assert.equal(new Set(matches).size, 5);
  assert.match(html, /From failed authentication to an active security state/);
  assert.match(html, /credential-bearing setup screen is intentionally omitted/);
  assert.doesNotMatch(html, /mfa-recovery-05-protection-restored-full|authenticator secret|QR code/i);
});

test("bulk-deletion case presents one complete six-state journey", async () => {
  const response = await render("/work/bulk-administration");
  assert.equal(response.status, 200);
  const html = (await response.text()).replaceAll("<!-- -->", "");
  const matches = html.match(/\/work\/bulk-administration\/bulk-delete-[^"? ]+\.png/g) ?? [];
  assert.equal(new Set(matches).size, 6);
  assert.match(html, /From a scoped user set to a visible result/);
  assert.match(html, /fictional domain\.com demo accounts/);
});

test("add-users case presents all 84 exported source layers", async () => {
  const response = await render("/work/csv-import");
  assert.equal(response.status, 200);
  const html = (await response.text()).replaceAll("<!-- -->", "");
  const matches = html.match(/\/work\/csv-import\/complete-source\/[^"?]+?\.png/g) ?? [];
  assert.equal(new Set(matches).size, 84);
  assert.match(html, /Every exported layer from the add-and-manage users source flow/);
  assert.match(html, /All 84 exported layers from the source cluster are shown here before selection/);
});

test("custom-domain case presents all 19 source exports", async () => {
  const response = await render("/work/custom-domain");
  assert.equal(response.status, 200);
  const html = (await response.text()).replaceAll("<!-- -->", "");
  const matches = html.match(/\/work\/custom-domain\/[^"?]+?\.png/g) ?? [];
  assert.equal(new Set(matches).size, 19);
  assert.match(html, /Every export from the custom-domain source flow/);
  assert.match(html, /All 19 exports from the custom-domain source flow are shown here before selection/);
});

test("custom-logo case presents all nine source exports", async () => {
  const response = await render("/work/custom-logo");
  assert.equal(response.status, 200);
  const html = (await response.text()).replaceAll("<!-- -->", "");
  const matches = html.match(/\/work\/custom-logo\/[^"?]+?\.png/g) ?? [];
  assert.equal(new Set(matches).size, 9);
  assert.match(html, /Every export from the custom-logo source flow/);
  assert.match(html, /All nine exports from the custom-logo source flow are shown here before selection/);
});

for (const [pathname, destination] of [
  ["/work/translator-upgrade", "/work/pro-driver-experiments"],
  ["/work/write-pro", "/work/pro-driver-experiments"],
  ["/work/trial-eligibility", "/work/checkout"],
  ["/work/global-pricing", "/work/checkout"],
]) {
  test(`${pathname} redirects to its consolidated case`, async () => {
    const response = await render(pathname);
    assert.equal(response.status, 307);
    assert.equal(new URL(response.headers.get("location"), "http://localhost").pathname, destination);
  });
}

test("public evidence assets are intentional PNGs with usable dimensions", async () => {
  const assets = [
    "work/hard-blockers/usage-limit.png",
    "work/hard-blockers/formality.png",
    "work/hard-blockers/glossaries.png",
    "work/hard-blockers/document-size.png",
    "work/hard-blockers/remaining-documents.png",
    "work/hard-blockers/network-usage-limit.png",
    "work/hard-blockers/write-pro-free.png",
    "work/hard-blockers/write-pro-existing-translator-pro.png",
    "work/hard-blockers/write-pro-illustrated-free.png",
    "work/hard-blockers/write-pro-illustrated-translator-pro.png",
    "work/subscription-checkout/fresh/bundle-checkout.png",
    "work/subscription-checkout/fresh/start-my-free-trial.png",
    "work/subscription-checkout/fresh/team-license-checkout.png",
    "work/subscription-checkout/fresh/no-trial-ultimate-checkout.png",
    "work/multi-factor-authentication/mfa-recovery-01-entry.png",
    "work/multi-factor-authentication/mfa-recovery-02-authentication-error.png",
    "work/multi-factor-authentication/mfa-recovery-02-code-login.png",
    "work/multi-factor-authentication/mfa-recovery-03-reset-required.png",
    "work/multi-factor-authentication/mfa-recovery-05-protection-restored.png",
    "work/bulk-administration/bulk-delete-01-scope.png",
    "work/bulk-administration/bulk-delete-02-filter-scope.png",
    "work/bulk-administration/bulk-delete-03-selected-users.png",
    "work/bulk-administration/bulk-delete-04-action-menu.png",
    "work/bulk-administration/bulk-delete-05-confirmation.png",
    "work/bulk-administration/bulk-delete-06-result.png",
    "work/csv-import/fresh/01-add-users-to-group.png",
    "work/custom-domain/custom-url-dialog-5.png",
    "work/custom-logo/Frame 427322350.png",
    "work/team-access/users-and-status.png",
    "work/localization-report/report-cover.png",
    "work/report-campaign/ai-content-generation.png",
    "work/data-security/article-hero.png",
  ];
  for (const asset of assets) {
    const buffer = await readFile(new URL(asset, publicRoot));
    const { width, height } = pngDimensions(buffer);
    assert.ok(width >= 450, `${asset} should be at least 450px wide`);
    assert.ok(height >= 400, `${asset} should be at least 400px high`);
    assert.doesNotMatch(asset, /canvas|sticky|comment|board|trial-eligibility\.png/i);
  }
});

test("all 112 Team Administration source exports are present as valid PNGs", async () => {
  const addManage = await pngFiles("work/csv-import/complete-source/");
  const domainDialogs = (await pngFiles("work/custom-domain/"))
    .filter((entry) => entry.name.startsWith("custom-url-dialog"));
  const domainFullPages = await pngFiles("work/custom-domain/complete-source/");
  const customLogo = await pngFiles("work/custom-logo/");

  assert.equal(addManage.length, 84);
  assert.equal(domainDialogs.length + domainFullPages.length, 19);
  assert.equal(customLogo.length, 9);

  for (const entry of [...addManage, ...domainDialogs, ...domainFullPages, ...customLogo]) {
    const buffer = await readFile(`${entry.parentPath}/${entry.name}`);
    const { width, height } = pngDimensions(buffer);
    assert.ok(width > 0 && height > 0, `${entry.name} should have valid dimensions`);
  }
});

test("every referenced visual has truthful dimensions and alternative cases can reuse evidence", async () => {
  const data = await readFile(new URL("app/work/deeplProjectData.ts", root), "utf8");
  const imagePattern = /src: "([^"]+)", width: (\d+), height: (\d+), alt: "([^"]+)"/g;
  const images = [...data.matchAll(imagePattern)];
  assert.equal(images.length, 52);

  const sources = new Set();
  const hashes = new Set();
  for (const [, src, declaredWidth, declaredHeight, alt] of images) {
    assert.ok(alt.trim().length >= 20, `${src} should have descriptive alt text`);
    const isFirstReference = !sources.has(src);
    sources.add(src);

    const buffer = await readFile(new URL(src.replace(/^\//, ""), publicRoot));
    const { width, height } = pngDimensions(buffer);
    assert.equal(width, Number(declaredWidth), `${src} width should match the source asset`);
    assert.equal(height, Number(declaredHeight), `${src} height should match the source asset`);

    if (isFirstReference) {
      const hash = createHash("sha256").update(buffer).digest("hex");
      assert.ok(!hashes.has(hash), `${src} should not duplicate another evidence image`);
      hashes.add(hash);
    }
  }
  assert.equal(sources.size, 52);
});

test("images use natural dimensions and the failed template is gone", async () => {
  const [css, grid, data] = await Promise.all([
    readFile(new URL("app/globals.css", root), "utf8"),
    readFile(new URL("app/components/DeepLProjectGrid.tsx", root), "utf8"),
    readFile(new URL("app/work/deeplProjectData.ts", root), "utf8"),
  ]);
  assert.doesNotMatch(css, /object-fit\s*:\s*cover|aspect-ratio/);
  assert.doesNotMatch(grid, /\bfill\b|index-mockup|ProjectVisual/);
  assert.doesNotMatch(data, /reconstruction|subscriptionLifecycleProject|work\/plans\/trial-eligibility/);
});

test("résumé is present and anonymously downloadable", async () => {
  const pdf = await readFile(new URL("mason-cv.pdf", publicRoot));
  assert.equal(pdf.subarray(0, 5).toString(), "%PDF-");
  assert.ok(pdf.length > 50_000);
});
