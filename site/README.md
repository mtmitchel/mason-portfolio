# Mason Mitchel portfolio

A restrained, image-led portfolio for Mason's UX copywriting and content design
work. Shared code handles the site shell, typography, image viewer, comparisons,
and switchers. Each case page controls its own story order.

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
npm run dev
```

## Required checks

```bash
./node_modules/.bin/eslint . --ignore-pattern dist --ignore-pattern .next
WRANGLER_LOG_PATH=.wrangler/wrangler.log ./node_modules/.bin/vinext build
node --test tests/rendered-html.test.mjs
```

The production build is the type-integration check. Standalone `tsc --noEmit`
is not authoritative because the Cloudflare worker ambient types are not
declared.

## Current presentation rules

- Keep the concise header, selected-work grid, writing route, About copy, and
  footer visually quiet.
- Keep every piece of public-facing text at 18px or larger at every breakpoint.
- Keep long-form body copy at 20px or larger with a comfortable reading width.
- Use literal project titles and direct prose.
- Keep each important claim beside the image or excerpt that supports it.
- Let each case use the story shape its evidence needs.
- Treat the current chapter-page measure, spacing, and media sizes as
  implementation choices, not acceptance criteria. Change them when a case's
  approved story or evidence needs a different reading experience.
- Make the reader understand the pressure, Mason's judgment and contribution,
  the meaningful decisions, and the change by the end. Do not treat an
  inventory of screens and copy rules as a complete story.
- Keep homepage cards at their natural media height. The localization-report
  card must show the complete `978 × 1369` cover and must never crop it.
- Let a homepage preview be real selectable text when that is the
  source-faithful evidence. Product Naming uses its naming-order decision
  instead of an unrelated decorative image.
- Keep the three homepage loops silent, visibility-aware, and safe for reduced
  motion.
- Do not add tags, badges, card summaries, extra filters, or public evidence
  disclaimers.
- Use `ImageComparison` only for two real states.
- Preserve the accessible Checkout and pricing switchers.

Automated checks must not freeze case-study chapter order, paragraph count,
sentence length, exact editorial prose, or generic strategic vocabulary.
Passing checks does not establish that the narrative or visual pacing works.

## Evidence

Selected public visual assets live under `public/work/<case>/`. Selected text
exhibits remain real text in the route. Their private source, transformation,
exact locator, central-exhibit role, caption, dimensions where applicable, and
alternative text are recorded in
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
