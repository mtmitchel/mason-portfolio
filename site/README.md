# Mason Mitchel portfolio

A restrained, image-led portfolio for Mason's UX copywriting and content design
work. Shared code handles the site shell, typography, image viewer, comparisons,
and switchers. Each case page controls its own story order.

## Live routes

- `/` — six selected projects and About
- `/writing` — five published writing examples
- `/work/upgrade-prompts`
- `/work/pricing-evolution`
- `/work/checkout`
- `/work/account-team-security`
- `/work/report-campaign`
- `/work/localyze-executive-ghostwriting`
- `/mason-cv.pdf`

There are no retired-route placeholders or redirect-only case folders in the
live application.

## Application structure

- `app/components/` — shared presentation and interaction
- `app/work/<case>/` — route-owned case copy, data, and rendering
- `app/work/portfolioData.ts` — homepage cards and writing entries
- `app/work/portfolioTypes.ts` — shared image, video, card, switcher, and
  writing-sample types
- `public/work/` — selected public evidence and homepage media
- `tests/rendered-html.test.mjs` — route, copy, asset, claim, and accessibility
  checks

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
- Use literal project titles and direct prose.
- Keep each important claim beside the image or excerpt that supports it.
- Let each case use the story shape its evidence needs.
- Keep homepage cards at their natural media height. The localization-report
  card must show the complete `978 × 1369` cover and must never crop it.
- Keep the three homepage loops silent, visibility-aware, and safe for reduced
  motion.
- Do not add tags, badges, card summaries, extra filters, or public evidence
  disclaimers.
- Use `ImageComparison` only for two real states.
- Preserve the accessible Checkout and pricing switchers.

## Evidence

Selected public visuals live under `public/work/<case>/`. Their private source,
crop, caption, dimensions, alternative text, and permission state are recorded
in
[`../private-evidence/portfolio-asset-manifest.json`](../private-evidence/portfolio-asset-manifest.json).

Source images stay unchanged. Public crops must be truthful, documented, and
limited to the part of the interface being discussed. Historical screens must
not be redesigned to look current.

## Publication state

The site is not published. The repository is private. Commit and push do not
authorize access changes, a saved hosting version, or deployment.
