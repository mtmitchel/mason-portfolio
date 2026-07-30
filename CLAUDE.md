# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Rules live in AGENTS.md

This file owns no repository policy. Structure, task routing, evidence safety,
approval gates, and verification live in [`AGENTS.md`](AGENTS.md), which is
imported below and applies in full. Where the two ever appear to differ,
`AGENTS.md` wins; fix the drift there rather than here.

@AGENTS.md

- Working anywhere under `site/`: read [`site/AGENTS.md`](site/AGENTS.md) first,
  then [`site/README.md`](site/README.md). Those files own application
  implementation, visual rules, and verification requirements.
- Everything else: follow the task routing section of `AGENTS.md` and read only
  the owners it names.

## Commands

`site/AGENTS.md` owns which checks a given change requires. The commands below
match its current verification sequence.

Repository-wide, from the repository root:

```bash
node scripts/check-repository.mjs
git diff --check
```

Application, from `site/`:

```bash
npm run dev                                                      # vinext dev server
npm run check:production-lines
./node_modules/.bin/eslint . --ignore-pattern dist --ignore-pattern .next
WRANGLER_LOG_PATH=.wrangler/wrangler.log ./node_modules/.bin/vinext build
node --test tests/rendered-html.test.mjs
```

- **Build before testing.** `tests/rendered-html.test.mjs` imports the built
  worker at `dist/server/index.js` and calls its `fetch` directly. Running
  `node --test` without a fresh build silently tests stale output. `npm test`
  chains both.
- **Run one test** with `node --test --test-name-pattern "<name>"
  tests/rendered-html.test.mjs`.
- **The production build is the type check.** Standalone `tsc --noEmit` is not
  authoritative here because the Cloudflare worker ambient types are undeclared.
- `scripts/check-repository.mjs` shells out to ImageMagick (`magick`) to verify
  recorded asset trim margins. Without that binary those specific checks are
  skipped rather than proven.

## Architecture

**Stack.** Next.js 16 App Router with React 19 server components, but built and
served by **vinext on Vite**, not the Next CLI, and deployed as a **Cloudflare
Worker**. `worker/index.ts` is the entry point: it intercepts `/_vinext/image`
for Cloudflare-backed image optimization and delegates everything else to the
vinext app-router handler. `next` CLI commands do not apply; use the `vinext`
binary or the `package.json` scripts. The site is static — no database, auth,
Tailwind, or runtime state.

**No universal case template.** Each `app/work/<case>/` owns its own story order
and prose: `page.tsx` holds route metadata, `<Case>.tsx` holds the narrative, and
an optional `<case>Data.ts` holds its data. Shared code in `app/components/`
supplies the shell, image dialogs, comparisons, and switchers — not a section
sequence. `app/work/portfolioData.ts` owns homepage cards and writing entries.
Do not reintroduce a single data object that forces every case into the same
sections.

**Evidence records provenance; it does not choose the story.**
`private-evidence/portfolio-asset-manifest.json` records where public assets
came from and how they were transformed. `scripts/check-repository.mjs` checks
those file, hash, dimension, privacy, and inventory facts. The candidate queue
is a library of potentially related material and useful artifact combinations,
not a route contract, required outline, or machine-readable acceptance gate.

**Tests protect durable behavior, not editorial taste.**
`tests/rendered-html.test.mjs` may protect route health, privacy, supported claim
ceilings, contrast, responsive behavior, and keyboard interaction. It must not
freeze exact prose, metadata, artifact selection, section order, component
choice, font size, grid columns, or a preferred comparison construction.

## Claude Code specifics

These cover harness behavior that `AGENTS.md` does not describe. They do not
relax anything it requires.

- Use the scratchpad directory for working files. Do not write scratch into the
  repository except under the ignored `tmp/`.
- Subagents inherit these instructions only if you restate them. When
  delegating, give them a bounded responsibility and a clear write boundary.
- The approval gates in `AGENTS.md` — commit, push, deployment, Figma writes,
  destructive actions — are not satisfied by a permission-mode allowlist. Ask
  Mason each time.
- `AGENTS.md` owns the Figma access policy. In this environment that means the
  `mcp__claude_ai_Figma__*` tools are the prohibited official native server, and
  Playwright is prohibited, even though both are available.
