# Mason Portfolio workspace

This private Git repository contains Mason Mitchel's portfolio application,
the source evidence used to check its claims, and a separate archive of retired
work. The deployable application lives in [`site/`](site/).

## Start here

- [`AGENTS.md`](AGENTS.md) — canonical portfolio-content workflow, evidence
  boundaries, approvals, and repository rules.
- [`site/README.md`](site/README.md) — implemented routes, application structure,
  local commands, and publication state.
- [`private-evidence/deepl-project-candidate-queue.md`](private-evidence/deepl-project-candidate-queue.md)
  — story-material database linking DeepL initiatives, Mason's experience,
  Figma evidence, strategic context, and outcomes. Historical ranks and route
  states help discovery but do not own work order or case selection.
- [`private-evidence/deepl-document-inventory.json`](private-evidence/deepl-document-inventory.json)
  — reproducible source-occurrence inventory across the ChatGPT and Claude
  exports.
- [`private-evidence/deepl-portfolio-current-direction.md`](private-evidence/deepl-portfolio-current-direction.md)
  — nonbinding snapshot of recent decisions and explicit corrections.
- [`private-evidence/claim-review.md`](private-evidence/claim-review.md) —
  factual limits for every case.
- [`private-evidence/portfolio-asset-manifest.json`](private-evidence/portfolio-asset-manifest.json)
  — provenance, transformations, exact locators, captions, alternative text,
  and dimensions for selected visual and text evidence.
- [`private-evidence/README.md`](private-evidence/README.md) — private evidence
  and source-material index.
- [`archive/README.md`](archive/README.md) — index of retired code, old reviews,
  completed research, and historical snapshots.

## Portfolio content workflow

The target is the strongest overall portfolio slate, not preservation of the
current routes. The default path is:

1. Search across DeepL experience, Figma evidence, documented company or team
   goals, and attributable outcomes.
2. Form several causally coherent story clusters, including cross-row
   combinations when they make one stronger case.
3. Compare the complete clusters for hiring value, Mason's contribution,
   visual proof, strategic stakes, attributable results, factual
   defensibility, and distinctness from the rest of the slate.
4. Select roughly five strong cases, then build a causal skeleton and
   case-specific visual form for each one.
5. Implement, verify material claims and behavior, run one independent reader
   review, apply at most one focused repair, and stop.

[`AGENTS.md`](AGENTS.md) owns the detailed workflow and skill timing. The queue,
current-direction notes, manifest, and existing routes are inputs to judgment,
not approval gates or templates.

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
./node_modules/.bin/eslint . --ignore-pattern dist --ignore-pattern .next
WRANGLER_LOG_PATH=.wrangler/wrangler.log ./node_modules/.bin/vinext build
node --test tests/rendered-html.test.mjs
```

Then run the final whitespace check from this directory:

```bash
git diff --check
```

## Source control and deployment

Private evidence is tracked so the complete working context can be recovered on
another machine. The repository must remain private. A commit or push is only a
source-control checkpoint; it does not publish or deploy the site.

Mason controls the final wording, source selection, repository access, and
deployment. Unsupported claims are omitted from the site instead of explained
with a public disclaimer.

Evidence rules protect factual integrity; they do not determine case-study
structure or prose. A story spec or passing test suite remains provisional
until the complete page works for a first-time hiring reader.
