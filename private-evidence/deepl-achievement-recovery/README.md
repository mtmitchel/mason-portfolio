# DeepL achievement recovery

Private, source-linked reconstruction of Mason Mitchel's work and outcomes at DeepL from a ChatGPT data export plus recovered local performance-review artifacts.

## Privacy boundary

This directory belongs under `private-evidence/`. It contains employment-review material, internal project names, performance metrics, message identifiers, and excerpts from private ChatGPT conversations. Do not copy it into the public portfolio site or publish it without reviewing and redacting the contents.

The raw ChatGPT export remains at:

```text
/home/mason/Downloads/gptexport
```

It was deliberately not moved here because the 278 MB export contains thousands of unrelated private conversations. The raw export remains the source of truth for the chat-derived recovery. The original files under `../more deepl/` are the source of truth for the supplemental performance-review artifacts, and this directory contains the combined DeepL-focused recovery work.

## Start here

- [`../deepl-portfolio-current-direction.md`](../deepl-portfolio-current-direction.md) — current owner for portfolio scope, metric framing, writing hierarchy, and publication boundaries established with Mason on 2026-07-21.
- [`artifacts/final-achievements-and-talking-points.md`](artifacts/final-achievements-and-talking-points.md) — canonical paired CV and portfolio language covering every recovery record exactly once.
- [`artifacts/outcome-evidence.md`](artifacts/outcome-evidence.md) — strongest positive outcomes, growth and revenue candidates, evidence quality, and missing-source warnings.
- [`artifacts/career-inventory.md`](artifacts/career-inventory.md) — chronological reconstruction across Marketing, Apps & Integrations, Content Experience, Monetization, IAM, ATE, and content tooling.
- [`artifacts/linkedin-bullets.md`](artifacts/linkedin-bullets.md) — dated evidence variants; use the current-direction file and final achievements document for current metric scope and career wording.
- [`artifacts/achievement-ledger.json`](artifacts/achievement-ledger.json) — structured record of every curated achievement, contribution, outcome, confidence decision, and source reference.
- [`artifacts/extraction-summary.md`](artifacts/extraction-summary.md) — extraction coverage and highest-ranked candidate conversations.
- [`../more deepl/deepl-performance-review-master.md`](../more%20deepl/deepl-performance-review-master.md) — deduplicated source inventory and synthesis of the recovered HiBob reflections, derivative drafts, and DeepL guidance files.

## Current findings

The curated ledger contains 22 achievement records:

- 14 confirmed from contemporaneous project material
- 2 strongly supported by project and review evidence
- 4 with valuable metrics whose original experiment or analytics attachments are missing
- 2 leads requiring further confirmation
- 6 quarantined claims with attribution, contradiction, or invention risk

Particularly useful outcomes include:

- Contribution to more than 25 product, enterprise, and developer landing pages, including a major Enterprise-page revamp.
- An Apps & Integrations post-signup experiment whose hypothesis was described as proven and then expanded into a broader sidebar experience.
- Monetization experiment candidates involving paid purchases, incremental ARR, and free-account growth.
- SEO and enterprise-growth metrics retained in manager-reviewed reflection material but missing their original analytics sources.
- DIAM-657 authentication copy reaching approval and deployment readiness.
- A dynamic-content inventory covering roughly 9,000 English Phrase keys.

The supplemental performance-review review completed on 2026-07-21 added page-level, hash-checked references to the original first-half and full-year HiBob self-reflection PDFs for seven existing records. The PDFs did not independently create a new achievement record or independently prove a numeric outcome: they are primary self-reports, not analytics exports, experiment readouts, manager evaluations, or proof of submission. Mason subsequently confirmed that the metrics and KPIs he supplied came from DeepL business-intelligence reporting available to employees. The current-direction file governs how those figures may be used in career materials.

## Evidence levels

- `confirmed` — direct contemporaneous user-authored project material identifies Mason's work or deliverable.
- `strong` — the contribution is repeated in review material and supported by project records or manager feedback.
- `supported_missing_attachment` — the claim was extracted from an uploaded source and repeated in review material, but the uploaded source is absent from the export.
- `lead` — the chat establishes likely work or planning, but completion or impact needs another source.
- `excluded` — contradicted by Mason or traceable only to GPT invention; not suitable for portfolio or career claims.

## Artifact inventory

### Curated reports

- `artifacts/final-achievements-and-talking-points.md`
- `artifacts/outcome-evidence.md`
- `artifacts/career-inventory.md`
- `artifacts/linkedin-bullets.md`
- `artifacts/achievement-ledger.json`

### Supplemental local evidence

- `../more deepl/deepl-performance-review-master.md` — canonical synthesis and source disposition for all eight supplemental files.
- `../more deepl/original-self-reflections/1st half bob.pdf` — original first-half 2024 HiBob self-reflection.
- `../more deepl/original-self-reflections/Bob.pdf` — original full-year 2024 HiBob self-reflection.

The four Markdown reflection files in `../more deepl/derivative-drafts/` are derivative drafts, and the two DKH PDFs in `../more deepl/guidance/` are general process guidance. They are inventoried in the master but are not independent achievement evidence.

### Machine-generated evidence indexes

- `artifacts/candidate-conversations.json` — ranked DeepL-related conversation candidates.
- `artifacts/source-messages.json` — retained user-authored source messages; assistant responses are excluded.
- `artifacts/metric-candidates.json` — text fragments containing possible metrics.
- `artifacts/role-corrections.json` — Mason's corrections to overstated, inaccurate, or invented claims.
- `artifacts/extraction-summary.json`
- `artifacts/extraction-summary.md`

### Reproducible scripts

- `scripts/extract_deepl_evidence.mjs` — scans the split conversation JSON files and rebuilds the machine-generated indexes.
- `scripts/validate_outputs.mjs` — verifies curated source references, exact message references, output presence, and duplicate keys.

## Rebuild and validate

Run from the raw export directory:

```bash
cd /home/mason/Downloads/gptexport

node "/home/mason/Projects/Mason Portfolio/private-evidence/deepl-achievement-recovery/scripts/extract_deepl_evidence.mjs" \
  . \
  "/home/mason/Projects/Mason Portfolio/private-evidence/deepl-achievement-recovery/artifacts"

node "/home/mason/Projects/Mason Portfolio/private-evidence/deepl-achievement-recovery/scripts/validate_outputs.mjs" \
  . \
  "/home/mason/Projects/Mason Portfolio/private-evidence/deepl-achievement-recovery/artifacts"
```

The last completed validation checked 22 achievement records, 49 conversation references, 25 exact user-message references, 11 page-level artifact references, 8 unique supplemental source files, all 22 final-list IDs, 1,265 extracted source messages, and zero duplicate keys or failures.

## Useful supporting evidence still missing

These sources would improve case-specific attribution, public substantiation, or
historical completeness. They are not prerequisites for using Mason-confirmed
business outcomes in his CV at their honest team, program, campaign, platform,
or experiment-wave scope:

1. DM-1523, DM-1418, and DM-1417 experiment canvases.
2. Enterprise-page analytics supporting the B2B engagement and sales-inquiry figures.
3. SEO and conversion dashboards supporting the organic-traffic, conversion, and revenue figures.
4. Apps & Integrations experiment results and download-attribution reporting.
5. Evidence that the recovered HiBob self-reflection was submitted, plus the corresponding manager evaluation or calibrated outcome.

## Publication rule

Use `artifacts/final-achievements-and-talking-points.md` as the canonical
career-language source and `../deepl-portfolio-current-direction.md` as the
current portfolio-decision owner. Mason-confirmed business-intelligence outcomes
may be used in CV and private portfolio copy when the wording accurately
separates Mason's contribution from the team, program, campaign, platform, or
experiment-wave result. Do not attribute an aggregate result to one screen,
copy variant, or sole personal causation. Raw dashboards remain private and are
not required for CV use. Any public portfolio release still requires Mason's
factual, confidentiality, wording, access, and deployment approval.
