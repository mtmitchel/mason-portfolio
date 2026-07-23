# Mason Portfolio site instructions

The repository-root `AGENTS.md` applies first. This file owns implementation,
validation, Git, and publication rules for `site/`.

## Product and editorial direction

- Position Mason as a **UX copywriter and content designer**. Do not relabel him
  as a product designer or "product content designer."
- The portfolio must show how Mason understood a user problem, made content
  decisions, worked through constraints and designed language across a journey.
  Interface strings alone are not a case study.
- Prefer three substantial cases and one focused collection over a large gallery.
- Use literal, recruiter-scannable project names and direct case-study
  headlines. Do not use slogans, metaphors, faux drama, or advertising-style
  hooks to manufacture interest.
- Keep marketing work secondary to UX copywriting and content design.

## Site and source boundaries

- The application is intentionally static. Do not add a database,
  authentication, Tailwind, or external runtime state without explicit scope.
- `README.md` owns the current route list, commands, and application overview.
  `CHANGELOG.md` owns meaningful user-visible and publication history.
- `../private-evidence/` and `../claim-review.md` are private sources. Never copy
  them, their raw excerpts, or private links into public routes or assets.
- Public evidence belongs under `public/work/<case>/`. Raw, unsafe, exhaustive,
  or private source material stays outside the public tree.

## Evidence images and interaction

- Use a fresh export from the exact referenced product frame when Mason requests
  a Figma-backed visual change. Never substitute an older or merely similar
  asset.
- Export the product frame itself at 2x or 3x. Exclude headings, notes, comments,
  selection borders, adjacent frames, and private data.
- Every image needs truthful dimensions, descriptive alt text, and an
  evidence-based caption. Do not use `object-fit: cover`, arbitrary
  `object-position`, or fixed aspect ratios that hide interface evidence.
- Evidence previews open in an accessible dialog with focus trapping and
  restoration, body scroll locking, Escape and backdrop closing, a useful label,
  and an associated caption.

## Implementation boundaries

- Prefer the existing shared components, route data, and visual system:
  `app/components/PortfolioChrome.tsx`,
  `app/components/ImageLightbox.tsx`, `app/work/deeplProjectData.ts`, and
  `app/globals.css`.
- Keep one canonical implementation path. Remove obsolete starter behavior only
  when the current task requires it, and preserve unrelated dirty work.
- Do not add dependencies, top-level subsystems, generated process artifacts, or
  alternate build paths unless the requested outcome requires them.
- Update `CHANGELOG.md` for meaningful content, visual, evidence,
  accessibility, route, or publication changes. Do not log agent narration,
  routine commands, or generated-file churn.

## Visual and interaction standard

- **Binding visual reference:** use <https://fredrika.dev/> as the primary point
  of reference for portfolio composition and restraint. The homepage should use
  a concise introduction followed by an image-led project grid. Every selected
  project must open its own individual page with a strong title, generous white
  space, large visual evidence and focused prose. Do not copy Fredrika's content
  or identity; use the site's clarity, visual confidence and project pacing as
  the standard.
- Never place multiple case studies in one monolithic scrolling document. A
  collection page is an index only. Do not show proposal language, candidate
  rankings, evidence audits, claim-management notes or generic process diagrams
  in the finished portfolio UI.
- Calm, clean and highly scannable; use a restrained Scandinavian-style visual
  language.
- No tags, pills, decorative numbering, oversized display type, unnecessary
  cards, all-caps styling or tiny labels.
- Keep the header introduction to one concise role line. Do not repeat the same
  positioning beside the project index.
- Stack short factual card metadata beneath literal 18px project titles; do not
  cram a second message beside the title.
- Keep all visible interface text at 14px or larger.
- Body copy should remain approximately 17–18px, with a 700–760px prose measure.
- Keep headings proportionate and spacing compact enough that related ideas stay
  visually connected.
- Use neutral backgrounds, dark text and one restrained accent.
- Internal page navigation should use framework links. Static files and external
  destinations may use normal anchors.
- Evidence images must open in a centered dialog with focus trapping, focus
  restoration, body scroll locking, Escape closing, backdrop closing, a useful
  dialog label and an associated caption.
- Mobile and tablet layouts must not introduce horizontal overflow or force users
  to squint.

## Acceptance-to-proof matrix

Run commands from `site/` unless stated otherwise. Use the smallest row that
fully proves the change; a broader row subsumes the rows above it.

| Change | Required proof |
|---|---|
| Site documentation only | From the repository root: `git diff --check -- site/` |
| Public copy, route data, captions, or evidence assets | Production build, `node --test tests/rendered-html.test.mjs`, then root `git diff --check -- site/` |
| TypeScript, TSX, worker, configuration, or shared interaction | Scoped ESLint, production build, rendered HTML tests, then root `git diff --check -- site/` |
| Publication | All implementation proof plus Mason's claim/privacy approval, exact approved commit, terminal deployment result, and anonymous route verification |

Canonical implementation checks:

```bash
./node_modules/.bin/eslint app tests vite.config.ts worker --no-cache
WRANGLER_LOG_PATH=.wrangler/wrangler.log ./node_modules/.bin/vite build --emptyOutDir=false
node --test tests/rendered-html.test.mjs
```

The production build is the type-integration check. Standalone `tsc --noEmit`
is not authoritative because the required Cloudflare worker ambient types are
not declared. DOM and runtime inspection are preferred over visual artifacts.
Use the in-app browser only when Mason asks to see or behaviorally verify the
running site; do not take screenshots unless explicitly requested.

## Completion and publication

- Inspect, implement, run the mapped proof, and review the final diff before
  reporting `COMPLETE`. Do not stop after creating a page, changing copy, or
  producing an asset while its required proof remains runnable and authorized.
- Preserve unrelated changes. Fix failures caused by the current work and report
  unrelated pre-existing failures precisely.
- Do not commit, push, save a Sites version, publish, change access, deploy, or
  update the public description without explicit authorization for that phase.
- Approval of copy or code is not publication approval. Publication requires
  final factual, ownership, confidentiality, and redaction review.
- Distinguish local build proof, remote commit proof, saved-version proof,
  deployment proof, and anonymous public-access proof.
