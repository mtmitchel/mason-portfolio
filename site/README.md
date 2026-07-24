# Mason Mitchel portfolio

A calm, evidence-led portfolio for Mason's UX copywriting and content design
work. The homepage uses media-first, naturally sized project cards; three
homepage covers use silent loops that play only while visible and fall back to
their poster frames when reduced motion is enabled.

For a self-contained project and review overview, see
[`docs/claude-fable-review-brief.md`](docs/claude-fable-review-brief.md).
The ordered PDF captures for that review are indexed in
[`docs/review-assets/claude-fable/`](docs/review-assets/claude-fable/README.md).

## Routes

- `/` — six selected portfolio entries and about
- `/writing` — five selected writing samples across product, methodology, instructional, press-release and consumer formats
- `/work/upgrade-prompts` — upgrade prompts across Translator and Write
- `/work/pricing-evolution` — pricing evolution across Translator, Write, Voice and API
- `/work/checkout` — trial, no-trial, bundle and team-purchase checkout
- `/work/account-team-security` — account access, recovery and team-administration writing collection
- `/work/report-campaign` — merged localization report campaign
- `/work/localyze-executive-ghostwriting` — Localyze executive ghostwriting
- `/mason-cv.pdf` — résumé

Retired candidate-review and unselected case-study URLs redirect once to their
final retained destination. The previous upgrade aliases lead directly to
`/work/upgrade-prompts`; `/work/write-pro-launch` leads to the pricing-evolution
case; account-security and team-administration aliases lead to the combined
collection; Hiring Success leads to its anchored writing entry.

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
- Put each card's media before its title, let cards keep their natural height and
  stack short factual metadata beneath 18px titles. Keep all visible text at
  14px or larger.
- Keep `Selected work` and `Writing` as underlined route-backed text links in
  the section-heading row. Use colour and weight for active state; do not add an
  `All` view, boxed control or client-side tab state.
- Use the shared page shell on `/` and `/writing`; switching routes changes only
  the index content, not the header, About section or footer.
- Treat writing samples as readable text and external links, not as case studies
  or screenshot galleries.

## Evidence assets

Selected case-study images live in `public/work/<case>/`; selected homepage
covers live in `public/work/home-covers/`. Unselected cover experiments remain
outside `public/` as tracked working material. Evidence retained only for
retired routes is not deployable.
`../private-evidence/portfolio-asset-manifest.json` records source, permission,
privacy, crop, caption and text-alternative decisions for the selected visuals.

- Export the product frame itself from the historical Figma file at 2x or 3x.
- Keep source Figma files read-only.
- Do not include canvas headings, sticky notes, comments or private Figma links.
- Preserve complete historical frames privately. Any public detail crop must be
  labelled, documented in the manifest and limited to a truthful part of the
  original interface.
- Record dimensions, descriptive alt text and an evidence-based caption where each image is used.
- Do not redesign historical screens to resemble the current product.

## Publication gate

The site remains unpublished. The GitHub repository is private, and a commit or
push is a source-control checkpoint only; it does not publish or deploy the
site. Public release requires Mason's explicit approval for claims, employer
rights, redactions, public-access change and deployment. The deployed Sites
version must be tied to the exact approved commit and verified anonymously
after deployment.
