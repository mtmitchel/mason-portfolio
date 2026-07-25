# Mason Portfolio site instructions

The repository-root [`AGENTS.md`](../AGENTS.md) applies first. This file owns
application implementation and validation.

## Product direction

- Position Mason as a UX copywriter and content designer.
- Open each case with the complete story promised by its title.
- Use observable language: what repeated, changed, disappeared, became visible,
  or required a different message.
- Put every important claim beside the image or excerpt that supports it.
- Use before and after only for two real states.
- State Mason's role in normal prose.
- Keep source handling, claim limits, and publication notes out of public copy.
- The current case order and section order live in
  [`../private-evidence/deepl-portfolio-current-direction.md`](../private-evidence/deepl-portfolio-current-direction.md).

## Current implementation

- `app/components/PortfolioChrome.tsx` owns the shared header, About, and footer.
- `app/components/PortfolioProjectGrid.tsx` owns the homepage card grid.
- `app/components/ImageLightbox.tsx` owns accessible evidence dialogs.
- `app/components/ImageComparison.tsx` presents two labelled real states.
- `app/components/EvidenceSwitcher.tsx` presents parallel complete states.
- `app/components/LoopingCardVideo.tsx` owns visibility-aware homepage loops.
- `app/work/<case>/` owns each case's data, prose, and story order.
- `app/work/portfolioData.ts` owns homepage cards and writing entries.
- `app/globals.css` owns the visual system.

Do not reintroduce a universal case template or a single data object that forces
every story into the same sections. Do not add retired-route placeholders.

## Visual and interaction rules

- Use <https://fredrika.dev/> as a reference for restraint, pacing, generous
  space, and confident image handling—not for copied content or identity.
- Never render public-facing text below 18px at any breakpoint. This includes
  navigation, buttons, labels, metadata, captions, card text, and footer links.
  Treat this as a blocking acceptance rule and keep its automated CSS check.
- Render long-form body copy at 20px or larger. Keep it near 60–75 characters
  per line and adjust line height and paragraph spacing with any size change.
- Use neutral backgrounds, dark text, and one restrained accent.
- Do not add tags, pills, decorative numbering, oversized display type, or
  unnecessary controls.
- Keep media at its natural proportions. Never use `object-fit: cover`, fixed
  aspect ratios, or arbitrary positioning that hides evidence.
- The homepage localization-report card must show the complete report cover.
- Every evidence image needs true dimensions, useful alternative text, and a
  caption that tells the reader what to notice.
- Image dialogs must trap and restore focus, lock body scroll, close with
  Escape and the backdrop, and expose a useful label and caption.
- Switchers must work by click, Arrow keys, Home, and End.
- Narrow layouts must not introduce horizontal overflow.
- Reduced-motion behavior must remain intact.

## Change-to-proof table

Run commands from `site/` unless stated otherwise.

| Change | Required proof |
| --- | --- |
| Site documentation only | Root `node scripts/check-repository.mjs`, then root `git diff --check -- site/` |
| Public copy, route data, captions, or evidence assets | Production build, rendered HTML tests, repository check, then root `git diff --check` |
| TypeScript, TSX, CSS, worker, configuration, or shared interaction | Scoped ESLint, production build, rendered HTML tests, repository check, then root `git diff --check` |
| Publication | All implementation proof plus Mason's separate approval, exact approved commit, terminal deployment result, and anonymous route verification |

Canonical application checks:

```bash
./node_modules/.bin/eslint . --ignore-pattern dist --ignore-pattern .next
WRANGLER_LOG_PATH=.wrangler/wrangler.log ./node_modules/.bin/vinext build
node --test tests/rendered-html.test.mjs
```

Use browser inspection for behavior that static checks cannot prove. Do not
create screenshots or recordings unless Mason asks for them.

## Completion

Review the full diff, run the required checks, and report any unverified
behavior plainly. Commit, push, publication, deployment, and access changes
remain separate approval gates.
