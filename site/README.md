# Mason Mitchel portfolio

A calm, evidence-led portfolio for Mason's UX copywriting and content design work.

For a self-contained project and review overview, see
[`docs/claude-fable-review-brief.md`](docs/claude-fable-review-brief.md).

## Routes

- `/` — selected work and about
- `/work/pro-driver-experiments` — hard blockers across Translator and Write
- `/work/checkout` — subscription checkout
- `/work/multi-factor-authentication` — multi-factor authentication
- `/work/bulk-administration` — bulk administration
- `/work/csv-import` — adding users by manual entry or CSV
- `/work/custom-domain` — custom-domain request, approval and removal
- `/work/custom-logo` — custom-logo upload, validation and removal
- `/work/team-access` — team access controls
- `/work/ux-copy` — focused UX-copy collection
- `/work/candidate-review` — private, no-index visual review of ten finished options across three possible DeepL portfolio slots
- `/work/localization-report` — research-report editorial option
- `/work/report-campaign` — multi-format report-campaign option
- `/work/data-security` — data-security editorial option
- `/mason-cv.pdf` — résumé

## Local development

```bash
npm install
npm run dev
```

Use these checks before review:

```bash
./node_modules/.bin/eslint app tests vite.config.ts worker --no-cache
WRANGLER_LOG_PATH=.wrangler/wrangler.log ./node_modules/.bin/vite build --emptyOutDir=false
node --test tests/rendered-html.test.mjs
git diff --check
```

The production build is the primary type-integration check. A standalone
`tsc --noEmit` also requires Cloudflare worker ambient types that this project
does not currently declare.

The application is intentionally static. It does not use a database,
authentication or Tailwind; historical starter scaffolding for those
capabilities has been removed so the repository reflects the portfolio that is
actually being reviewed.

## Writing and layout direction

- Use <https://fredrika.dev/> as the composition reference: one concise
  introduction, one image-led project index, and one focused page per project.
- Use literal project names and direct case-study headlines. Do not use slogans,
  metaphors, faux drama, or promotional hooks.
- Keep the header to one short role line and do not repeat it beside “Selected
  work.”
- Stack short factual metadata beneath 18px card titles. Keep all visible text at
  14px or larger.
- Use the same shared grid for the homepage and private candidate review. Do not
  introduce a separate comparison-dashboard layout.
- Keep the ten-option candidate review linked from the Selected work heading so
  the larger local review slate is discoverable without replacing the curated
  six-project homepage.

## Evidence assets

Case-study images live in `public/work/<case>/`.

The three Team Administration review routes currently show the complete
pre-selection export sets: 84 add-and-manage-user layers, 19 custom-domain
exports and 9 custom-logo exports. This exhaustive local review state is for
selection and trimming; it is not the publication-ready asset set.

- Export the product frame itself from the historical Figma file at 2x or 3x.
- Keep source Figma files read-only.
- Do not include canvas headings, sticky notes, comments or private Figma links.
- Use the complete historical frame for the lightbox and a deliberate CSS crop for the inline preview.
- Record dimensions, descriptive alt text and an evidence-based caption where each image is used.
- Do not redesign historical screens to resemble the current product.

## Publication gate

The site stays private and uncommitted until the private claim review is complete.
Publishing requires Mason's explicit approval for the claims, redactions, commit,
push, public-access change and deployment. The deployed Sites version must be tied
to the exact approved commit and verified anonymously after deployment.
