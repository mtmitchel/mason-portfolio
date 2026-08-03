# Mason Portfolio workspace

This private Git repository contains Mason Mitchel's portfolio application,
the source evidence used to check its claims, and a separate archive of retired
work. The deployable application lives in [`site/`](site/).

## Start here

- [`AGENTS.md`](AGENTS.md) — repository boundaries, evidence limits,
  approvals, routing, and validation.
- [`docs/external-agent-packets.md`](docs/external-agent-packets.md) — local
  external handoff mechanics and source protection.
- [`site/README.md`](site/README.md) — implemented routes, application
  structure, local commands, and publication state.
- [`private-evidence/deepl-project-candidate-queue.md`](private-evidence/deepl-project-candidate-queue.md)
  — story-material database linking DeepL initiatives, Mason's experience,
  Figma evidence, strategic context, and outcomes. Historical ranks and route
  states help discovery but do not own work order or case selection.
- [`private-evidence/deepl-document-inventory.json`](private-evidence/deepl-document-inventory.json)
  — reproducible source-occurrence inventory across the ChatGPT and Claude
  exports.
- [`private-evidence/deepl-portfolio-current-direction.md`](private-evidence/deepl-portfolio-current-direction.md)
  — nonbinding facts, claim ceilings, and story opportunities.
- [`private-evidence/claim-review.md`](private-evidence/claim-review.md) —
  factual limits for every case.
- [`private-evidence/portfolio-asset-manifest.json`](private-evidence/portfolio-asset-manifest.json)
  — provenance, transformations, exact locators, captions, alternative text,
  and dimensions for selected visual and text evidence.
- [`private-evidence/README.md`](private-evidence/README.md) — private evidence
  and source-material index.
- [`archive/README.md`](archive/README.md) — index of retired code, old
  reviews, completed research, and historical snapshots.

## Portfolio content workflow

This is a mixed portfolio rather than a fixed number of uniform case studies.
Choose the form that best serves the material and the reader:

- a full UX or content-design case when the work has a complete story;
- a compact, marketing-forward writing sample when the writing is the proof; or
- a PDF report or other long-form document when the argument belongs in that
  format.

The queue, current-direction notes, manifest, and existing routes are inputs to
judgment, not approval gates or templates. The shared Portfolio skill owns
editorial method; [`AGENTS.md`](AGENTS.md) owns repository boundaries and
delegation routing.

All authorized reader-facing Portfolio prose is written implicitly through the
exact `gemini-3.6-flash-high` Antigravity route. Native GPT-5.6 agents assemble
the bounded source material, run factual and hiring-reader QA, and integrate
accepted copy mechanically; they never draft, rewrite, polish, or repair the
prose and never substitute themselves if Gemini is unavailable. A rejected
draft is excluded from a clean rebuild, while a Mason-selected target candidate
may serve as the new editorial starting point subject to factual review.

## External web-agent context

The sole persistent-context manifest and ownership map is
[`docs/external-agent/base/README.md`](docs/external-agent/base/README.md).
Optional task-folder lifecycle lives in
[`docs/external-agent-packets.md`](docs/external-agent-packets.md); local
delivery and context separation live in
[`docs/external-agent/base/04-EXTERNAL-AGENT-PACKET-GUIDE.md`](docs/external-agent/base/04-EXTERNAL-AGENT-PACKET-GUIDE.md).
No external chat receives implied repository access or local workflow material.

## Repository layout

| Path | Purpose |
| --- | --- |
| [`site/`](site/) | The only deployable portfolio source. |
| [`private-evidence/`](private-evidence/) | Current private decision owners, claim review, evidence maps, and source exports. |
| [`docs/`](docs/) | Current repository-wide operating guidance. |
| [`archive/`](archive/) | Preserved history that is not current product or claim truth. |
| `tmp/` | Ignored scratch space. Nothing here is a deliverable or source of truth. |

The repository root intentionally contains no loose exports, screenshots,
videos, PDFs, review packets, or working folders.

## Checks

Run the repository check from this directory:

```bash
node scripts/check-repository.mjs
```

Run application checks from `site/`:

```bash
npm run check:production-lines
./node_modules/.bin/eslint . --ignore-pattern dist --ignore-pattern .next
WRANGLER_LOG_PATH=.wrangler/wrangler.log ./node_modules/.bin/vinext build
node --test tests/rendered-html.test.mjs
```

Then run the final whitespace check from this directory:

```bash
git diff --check
```

## Source control and deployment

Private evidence is tracked so the complete working context can be recovered
on another machine. The repository must remain private. A commit or push is
only a source-control checkpoint; it does not publish or deploy the site.

Mason controls the final wording, source selection, repository access, and
deployment. Unsupported claims are omitted from the site instead of explained
with a public disclaimer. Evidence rules protect factual integrity; they do not
determine case-study structure or prose. A passing test suite remains
provisional until the complete route works for a first-time hiring reader.
