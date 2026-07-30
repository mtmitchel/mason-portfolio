# Mason Mitchel portfolio

A portfolio for Mason's UX copywriting and content design work. Shared code
handles the site shell and accessible media behavior. Comparisons, switchers,
and chapter patterns are optional. Each case owns its story and visual form.

## Implemented routes

- `/` — eight selected projects and About
- `/writing` — five published writing examples
- `/work/upgrade-prompts`
- `/work/pricing-evolution`
- `/work/checkout`
- `/work/account-team-security`
- `/work/report-campaign`
- `/work/localyze-executive-ghostwriting`
- `/work/product-naming`
- `/work/voice-product`
- `/mason-cv.pdf`

There are no retired-route placeholders or redirect-only case folders in the
live application.

## Application structure

- `app/components/` — shared presentation and interaction
- `app/components/ChapterCaseElements.tsx` — optional chapter-page presentation
  primitives that do not prescribe story sections
- `app/components/NamingDecision.tsx` — source-faithful selectable Write naming
  fork
- `app/work/<case>/` — route-owned case copy, data, and rendering
- `app/work/portfolioData.ts` — homepage cards and writing entries
- `app/work/portfolioTypes.ts` — shared image, video, card, switcher, and
  writing-sample types
- `public/work/` — selected public evidence and homepage media
- `tests/rendered-html.test.mjs` — route, asset, narrow claim-safety, and
  accessibility checks

The site is intentionally static. It has no database, authentication, Tailwind,
or external runtime state.

## Local development

```bash
npm install
npm run dev -- --hostname 127.0.0.1 --port 4173
```

The local preview is `http://127.0.0.1:4173`. Keep this hot-reloading
development server running throughout site work so changes remain immediately
available for review. Production builds are additional checks, not a
replacement for the live development server.

Hot reload does not reliably replace a browser-cached file when a visible asset
is overwritten at the same `public/` URL. Give each approved replacement a new
filename, update every preview and enlargement reference, and verify that the
development server returns the intended bytes at the new URL. The canonical
implementation rule and verification steps live in
[`AGENTS.md`](AGENTS.md#live-development-preview).

## Required checks

```bash
npm run check:production-lines
./node_modules/.bin/eslint . --ignore-pattern dist --ignore-pattern .next
WRANGLER_LOG_PATH=.wrangler/wrangler.log ./node_modules/.bin/vinext build
node --test tests/rendered-html.test.mjs
```

The production build is the type-integration check. Standalone `tsc --noEmit`
is not authoritative because the Cloudflare worker ambient types are not
declared.

Production source under `app/`, `build/`, `worker/`, `next.config.ts`, and
`vite.config.ts` is limited to 500 lines per file. `npm install` runs the
`prepare` script, which configures the repository to use the tracked hooks in
`../.githooks/`. Run `npm run prepare` to restore that setting manually. The
repository-wide check runs the same line-limit rule, so bypassing a local hook
does not bypass the repository boundary.

## Presentation direction

Use clear prose, readable typography, useful evidence, and accessible
interaction. Let each case choose the story shape, reading width, media scale,
and comparison treatment its material needs. Existing measures, grids,
switchers, chapter classes, and media sizes are implementation choices, not
acceptance criteria.

The reader should understand the pressure, Mason's contribution, the meaningful
decisions, and the change by the end. That goal does not require one public
section per question, one screenshot per claim, or one repeated case layout.
Passing automated checks does not establish that the narrative or visual
pacing works.

## Evidence

Selected public visual assets live under `public/work/<case>/`. Selected text
exhibits remain real text in the route. Their private source, transformation,
exact locator, caption, dimensions where applicable, and alternative text are
recorded in
[`../private-evidence/portfolio-asset-manifest.json`](../private-evidence/portfolio-asset-manifest.json).

Source images stay unchanged. Public crops must be truthful, documented, and
limited to the part of the interface being discussed. Historical screens must
not be redesigned to look current.

A crop is trimmed flush to its own content and the preview frame supplies the
surrounding space. Do not bake padding, borders, or margin into an asset to make
it sit better on the page; change the frame instead. `-trim` is not always
idempotent, so repeat it until the result stops changing, and record the
resulting zero margins in the manifest.

## Deployment state

The site is not published. The repository is private. Commit and push do not
authorize access changes, a saved hosting version, or deployment.
