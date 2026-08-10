# Mason Portfolio site instructions

The repository-root [`AGENTS.md`](../AGENTS.md) owns story construction,
evidence use, qualitative review, permissions, and external-action boundaries.
The canonical local production sequence, candidate-validity rules, and shared
case-page presentation guardrails live in
[`docs/portfolio-case-production.md`](../docs/portfolio-case-production.md).
This file owns application implementation and technical verification; it does
not duplicate that editorial runbook.

## Application ownership

- `app/components/PortfolioChrome.tsx` owns shared site chrome.
- `app/components/PortfolioProjectGrid.tsx` owns the homepage project index.
- `app/components/ImageLightbox.tsx` owns accessible image dialogs.
- `app/components/EvidenceSwitcher.tsx` and
  `app/components/ImageComparison.tsx` are optional evidence utilities.
- `app/work/<case>/` owns each case's prose, structure, components, and
  case-specific visual treatment.
- `app/work/portfolioData.ts` owns homepage entries.
- `app/globals.css` and `app/styles/` own shared and case-specific styles.

Shared components provide behavior, not a required case-study composition.
Do not introduce a universal case template.

## Design freedom

Treat every substantial case as its own editorial design problem.

Text and design have the same job: communicate the case's core ideas to the
reader. They use different means, but they must make the same argument together.
Every visual must clarify, demonstrate, or prove the idea advanced by the
surrounding narrative. A visual that merely depicts related material—or
obscures the relationship the text is explaining—must be redesigned or removed.
This rule is non-negotiable during implementation and rendered review.

- The repository root points to the global `frontend-design` adaptive
  natural-language workflow. Infer whether the request is a new design,
  redesign, direct iteration, faithful reproduction, or visual bug fix. This
  file governs implementation and technical verification; the selected
  Portfolio visual-language profile becomes binding here only when chosen for
  implementation.
- During implementation, follow the selected profile's sentence-case rule for
  all visible interface text. Never use CSS `text-transform: uppercase` for
  labels or headings.
- When accepted writer copy violates only sentence-case capitalization or
  another mechanical markup constraint, normalize it locally and use the
  accepted copy. Preserve its words and meaning plus product names, acronyms,
  and official labels. Do not reject it, retain weaker existing copy, spend a
  writer repair, or ask Mason to make the correction.
- Let the story determine section order, reading width, media scale, rhythm,
  comparison treatment, and interaction.
- Existing `chapter-shell`, `chapter-page`, `story-comparison`, card, rail,
  annotation, and split-layout constructions are not defaults. A rejected case
  may replace them completely.
- Use a shared component only when it improves this case. Direct, case-specific
  markup and CSS are preferable to forcing the story through an ill-fitting
  primitive.
- Do not place long explanations beside complete screens merely to fill a
  two-column layout. Avoid dense clusters of copy, labels, metrics, and media.
- Complete screens, focused crops, typeset excerpts, tabs, sequential figures,
  diagrams, and text-only passages are all optional. Select the smallest set
  that makes the story clear.
- If a visible defect is embedded in a public image, rebuild or replace the
  public derivative or use a stronger asset. The fact that CSS cannot reach an
  embedded defect is not a reason to preserve it.
- When interface copy is used to demonstrate Mason's work, an obvious grammar,
  logic, or choice-structure flaw must be corrected in a truthful documented
  reconstruction or the asset must be replaced or removed. Do not showcase a
  flawed string as evidence of strong UX writing or publish an explanation in
  place of the correction.
- Captions and labels should help the reader, but their location and wording are
  not fixed.
- A supported result can lead or end a case. Do not force it into a stat strip
  or card.

Use the existing colors and typography as a starting point, not as a reason to
repeat rejected layouts. Mason's current request outranks visual consistency
with another case.

Use the global Qualitative and design work section and the frontend-design
skill for direction choice, visual-bug diagnosis, rejection behavior, and
repair limits. This file adds no separate design workflow. Clearly marked
provisional copy, hierarchy labels, length targets, and alternate text
structures may guide implementation only as exploration; Mason retains final copy and claim
approval, and provisional text cannot be published or presented as fact.

When rendered design quality is in scope, a transient local browser-page or
viewport capture may support inspection alongside desktop/mobile resizing and
relevant interaction or state checks. Task-relevant page or product captures may
be supplied to the external writer or reviewer already authorized by the
current task without a second artifact-sharing request. Do not retain captures
outside the task, share unrelated data, or capture the surrounding desktop. A
product screenshot is not proof of the rendered Portfolio page.
Make the rendered qualitative decision before build, accessibility, or other
conformance checks close the design task; passing those checks cannot substitute
for visual review.

## Technical quality

- Keep production source under `app/`, `build/`, and `worker/`, plus
  `next.config.ts` and `vite.config.ts`, at 500 physical lines or fewer.
- Run `npm run check:production-lines` after changing production source. The
  tracked commit hooks enforce the same limit against the full staged snapshot.
- Keep semantic landmarks and one useful page-level heading.
- Keep keyboard access and visible focus for interactive elements.
- Dialogs must close with Escape, manage focus, and avoid trapping the page in
  a locked-scroll state.
- Tabs or switchers must use appropriate semantics and keyboard behavior.
- Use useful alternative text for informative images.
- Preserve image meaning. Do not distort evidence or crop it in a misleading
  way; intentional focused crops are allowed.
- Prevent unintended horizontal overflow and overlap at narrow widths.
- Preserve reduced-motion behavior where motion exists.
- Use readable type, spacing, line length, and contrast. Do not enforce one
  global pixel size for every label, caption, metadata line, and paragraph.

## Live development preview

- During application work, keep one hot-reloading Vinext development server
  running at `http://127.0.0.1:4173`.
- Check that endpoint before making changes. If it is unavailable, start the
  server from `site/` with
  `npm run dev -- --hostname 127.0.0.1 --port 4173`.
- Keep the process alive for the full task so Mason can inspect changes as they
  land. A production build is a separate verification step; it must not replace
  or stop the development server.
- Hot reload does not reliably invalidate a browser-cached file under an
  unchanged `public/` URL. When replacing a visible public asset during active
  review, give the approved replacement a new filename and update every preview,
  enlargement, metadata, and manifest reference. Do not rely on overwriting the
  existing file or asking Mason to hard-refresh.
- Before saying that a replacement is visible, fetch its exact URL from the
  development server, verify that the served bytes match the intended local
  file, and confirm that the rendered component references the new URL.
- After builds and tests, confirm the same endpoint still returns HTTP 200.
  Do not start a second server when port 4173 is already owned by the current
  workspace.

## What tests may enforce

Automated tests may protect:

- successful route rendering and canonical metadata;
- privacy boundaries and known false-claim prohibitions;
- source hashes, declared image dimensions, and required asset metadata;
- semantic and keyboard behavior of shared interactions;
- responsive safety and reduced motion; and
- genuine user-requested invariants that are intended to persist.

Automated tests must not require exact portfolio prose, titles, metadata copy,
metrics chosen for display, a fixed asset set, a central exhibit, section
count or order, paragraph count, component name, case-to-case project label, or
one visual construction. When an editorial or layout choice changes, remove
the obsolete assertion instead of rewriting it to canonize the new taste.

## Verification

Run from `site/`:

```bash
./node_modules/.bin/eslint . --ignore-pattern dist --ignore-pattern .next
WRANGLER_LOG_PATH=.wrangler/wrangler.log ./node_modules/.bin/vinext build
node --test tests/rendered-html.test.mjs
```

Then run from the repository root:

```bash
node scripts/check-repository.mjs
git diff --check
```

Use an approved browser connection for visual and interaction checks that code
cannot prove. If it is unavailable, report that limitation; do not replace
editorial judgment with more static assertions.

Commit, push, publication, deployment, and access changes remain separately
approved actions.
