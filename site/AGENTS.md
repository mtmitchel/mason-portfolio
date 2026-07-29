# Mason Portfolio site instructions

The repository-root [`AGENTS.md`](../AGENTS.md) owns story construction,
evidence use, qualitative review, permissions, and external-action boundaries.
This file owns application implementation and technical verification.

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
- Captions and labels should help the reader, but their location and wording are
  not fixed.
- A supported result can lead or end a case. Do not force it into a stat strip
  or card.

Use the existing colors and typography as a starting point, not as a reason to
repeat rejected layouts. Mason's current request outranks visual consistency
with another case.

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
