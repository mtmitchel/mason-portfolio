# DeepL project candidate queue

**Updated:** 2026-07-27
**Status:** Current discovery and ranking owner
**Source audit:** `/home/mason/Downloads/gptexport/deepl-project-candidate-audit.md`
**Current CV:** [`source-documents/mason-cv.pdf`](source-documents/mason-cv.pdf)
**Figma source:** the complete 655-record ledger in
[`projects/pricing-evolution/figwright-raw-extractions.jsonl.gz`](projects/pricing-evolution/figwright-raw-extractions.jsonl.gz)

This is the one current queue for DeepL portfolio candidates. It joins all 23
GPT-audit candidates, eight additional projects or collections claimed in
Mason's current CV, and five genuinely new candidate families found in the
complete Figma extraction. The achievement ledger and claim review preserve
contribution, lifecycle, and outcome boundaries.

Mason chooses what belongs in the portfolio. A missing match in one source is
not evidence that the project, contribution, lifecycle, or outcome did not
exist. Figma identifies artifacts and context; it does not independently prove
authorship, approval, shipment, causation, or results.

## Scoring and order

Score each candidate from `0` to `2` on reader value, story readiness, and
visual readiness. Story readiness `2` means there are enough linked sources for
one bounded story check; it does not mean the story is already verified.

For tied totals, prefer reader value, then story readiness, then visual
readiness, then the prior queue order. New CV candidates follow CV order; new
Figma candidates follow extraction-inventory order. Existing public coverage
and Mason's frozen work override every score.

## Ranked work queue

Work only the highest active row. No other row has a current evidence task,
folder task, proposal task, or writing task.

| Rank | ID | Candidate | Score | Likely form | Status | Next bounded action |
| ---: | --- | --- | ---: | --- | --- | --- |
| 1 | `D03` | Apps and Integrations post-sign-up experiment | `5` (`2/2/1`) | Full case | Active | Check the original Jira ticket, experiment result, and exact callout or sidebar visual. If the bounded story remains supported, prepare the in-chat visual proposal required by the root workflow. |
| 2 | `D01` | Go Enterprise landing-page program | `5` (`2/2/1`) | Full case | Active | — |
| 3 | `D09` | True-up billing UX | `5` (`2/1/2`) | Full or mini case | Active | — |
| 4 | `D11` | Failed-payment and payment-method recovery | `5` (`2/1/2`) | Full or mini case | Active | — |
| 5 | `D06` | DeepL Write Pro launch and monetization work | `5` (`2/1/2`) | Full case | Active | — |
| 6 | `D10` | Plan changes and team-seat adjustment flows | `5` (`2/1/2`) | Mini case | Active | — |
| 7 | `C24` | DeepL Voice product content | `5` (`2/1/2`) | Mini case | Active | — |
| 8 | `C26` | Desktop app and integration discovery | `5` (`2/1/2`) | Mini or full case | Active | — |
| 9 | `C27` | Website navigation and discovery surfaces | `5` (`2/1/2`) | Mini or full case | Active | — |
| 10 | `D02` | Industry landing-page localization and accessibility updates | `5` (`1/2/2`) | Mini case | Active | — |
| 11 | `C25` | Mobile app and store-listing optimization | `4` (`2/2/0`) | Mini case | Active | — |
| 12 | `D17` | DeepL content style guide and naming principles | `4` (`2/1/1`) | Full or mini case | Active | — |
| 13 | `D18` | Figma content-review plugin prototype | `4` (`2/1/1`) | Mini case | Active | — |
| 14 | `F32` | Tier-aware cancellation, retention, and feature-loss copy | `4` (`2/0/2`) | Reserve mini case | Active | — |
| 15 | `F34` | Email verification and signup optimization | `4` (`2/0/2`) | Reserve mini case | Active | — |
| 16 | `F35` | Checkout abandonment and social-proof research | `4` (`2/0/2`) | Reserve mini case | Active | — |
| 17 | `D13` | Glossary plan repackaging | `4` (`1/1/2`) | Writing example or mini case | Active | — |
| 18 | `D20` | Custom-domain account administration | `4` (`1/1/2`) | Mini case | Active | — |
| 19 | `D23` | Full-page translation as a paid feature | `4` (`1/1/2`) | Writing example | Active | — |
| 20 | `D07` | Browser-extension SSO launch communication | `3` (`1/1/1`) | Writing example | Active | — |
| 21 | `D22` | DeepL Pro South Korea launch content | `3` (`1/1/1`) | Writing example | Active | — |
| 22 | `C31` | Cross-channel marketing writing collection | `3` (`2/1/0`) | Writing collection | Active | — |
| 23 | `F33` | US checkout consent | `3` (`1/0/2`) | Reserve writing example | Active | — |
| 24 | `F36` | API usage-limit UI | `3` (`1/0/2`) | Reserve writing example | Active | — |
| 25 | `D15` | Project Rebound | `2` (`2/0/0`) | Reserve | Active | — |
| 26 | `D04` | Browser-extension ratings experiment | `2` (`1/1/0`) | Reserve | Active | — |
| 27 | `D05` | Firefox extension burger-menu experiment | `2` (`1/1/0`) | Reserve | Active | — |
| — | `D19` | MFA recovery and additional authentication keys | `6` (`2/2/2`) | Existing full case | Represented by Account recovery and team administration | — |
| — | `D21` | Localization research report and campaign | `6` (`2/2/2`) | Existing full case | Represented by the localization report campaign | — |
| — | `C28` | DM-1418 checkout-flow simplification | `6` (`2/2/2`) | Existing full case support | Represented by Checkout across four purchase states | — |
| — | `C30` | Broader authentication and administration portfolio | `6` (`2/2/2`) | Existing full case support | Represented by Account recovery and team administration | — |
| — | `D08` | Checkout country selection and delayed subscription activation | `5` (`1/2/2`) | Existing full case support | Represented by Checkout across four purchase states | — |
| — | `C29` | DM-1417 anonymous-user soft block | `5` (`2/1/2`) | Existing full case support | Represented by Upgrade prompts across Translator and Write | — |
| — | `D12` | Free/Pro status label and file-limit awareness experiment | `4` (`1/1/2`) | Existing full case support | Represented by Upgrade prompts across Translator and Write | — |
| — | `D14` | Pricing-grid readability and cumulative-tier exploration | `6` (`2/2/2`) | Frozen | Pricing Evolution remains frozen regardless of score | — |
| — | `D16` | Pricing and Packaging redesign research | `4` (`2/1/1`) | Frozen | Keep with the frozen Pricing subject unless Mason explicitly reopens it | — |

## Cross-source reconciliation

CV references use these page-and-bullet codes: `P1`–`P5` are the five DeepL
Product Experience bullets on page 1; `M1`–`M4` are the four DeepL Marketing
bullets on page 2.

Relationship labels describe what the sources do together:

- **reinforces** — another source supports the same bounded candidate;
- **expands** — another source adds adjacent artifacts or context without
  proving every claim;
- **conflict** — source identity or result wording is not safely reconciled;
- **gap** — one or more source types have no meaningful match;
- **adds candidate** — the CV or Figma extraction introduces a project missing
  from the 23-row audit.

| ID | GPT audit row and conversation IDs | Exact Figma reference or explicit gap | Current CV | Achievement record and factual boundary | Relationship |
| --- | --- | --- | --- | --- | --- |
| `D01` | Row 1; `61a44a6f…`, `f83209e0…`, `c01a612b…`, `f03a5c62…`, `6793425e…` | Contextual: `Monetization` / `Pricing page` (`3:94360`) / root `4:146594` / capture `monetization-pricing-root-059`; multi-product and enterprise content, not page authorship or lifecycle | `M1`, `M2`, `P1`, `P5` | `CEX-01`, `SEO-01`; `CEX-03` and `APP-03` add workflow context. Collaborative contribution to 25+ pages is supported; page-level adoption and program metrics are not personally attributable. | Reinforces and expands |
| `D02` | Row 2; `41dac1f3…`, `181affab…` | No meaningful match in the 655-record ledger | `M1`, `P5` | `CEX-01`, program level. CTA and alt-text contribution is supported; not every string, ticket, localization, or launch is established. | Reinforces with a Figma gap |
| `D03` | Row 3; `2eca15ca…`, `0f56d90a…`, `f7ef4aa7…` | No meaningful match in the 655-record ledger | `P1`, `P2`, `P5` | `APP-01`. Mason wrote or refined copy and a follow-up says the hypothesis was proven; no numeric lift or sidebar lifecycle is established. | Reinforces with a Figma gap |
| `D04` | Row 4; `bf33bf61…` | No meaningful match in the 655-record ledger | Broad `P3`/`P5` only | No exact achievement ID. The reported negative result and Mason's reasoning are leads; his experiment role, data validity, and final decision remain unknown. | Gap |
| `D05` | Row 5; `b364f376…` | No meaningful match in the 655-record ledger | Broad `P3`/`P5` only | No exact achievement ID. The result remains unresolved; no supported causal explanation, rollout decision, or exact contribution. | Gap |
| `D06` | Row 6; `f3072da5…`, `e5b7dc87…`, `c01a612b…`, `6737306d…` | Correlated: `Monetization` / `Write Pro` (`4:181271`) / nodes `4:184736`, `4:186544`; plus `Pricing page` (`3:94360`) / node `5:314534` | `P1`, `P2`, `P5` | `MON-05`, `SYS-04`. Collaborative conception, writing, direction, editing, selection, and application are supported; exact variants, sole launch ownership, and conversion effect are not. | Reinforces |
| `D07` | Row 7; `fd7f5ae1…`, `875a063d…` | Contextual only: `Monetization` / `Pricing page` (`3:94360`) / root `4:146594`; no exact SSO launch artifact | `P4`, `M4` | `MKT-02`. Customer-facing Chrome/Edge SSO launch content is supported; exact final wording, sole authorship, and campaign result are not. | Expands with an exact-artifact gap |
| `D08` | Row 8; `964dbed9…`, `fd1c1482…`, `65cf36bd…` | Correlated: `Checkout — Experiments (Copy)` / `Checkout Vision` (`5497:59879`) / root `5497:43087` / `checkout-page-017`; delayed-activation context at `DM-1032` (`3787:15288`) / root `3820:16573` / `checkout-page-033` | `P2` | No exact achievement ID; do not merge it with `MON-02`. Copy for two checkout problems is supported; implementation, launch, and effect are not. | Expands |
| `D09` | Row 9; `675d1fbd…` | Correlated: `Monetization` / `Experiments` (`0:1`) / root `2:18477` / capture `monetization-experiments-root-009` | `P4`, `P2` | No exact achievement ID. UI-copy contribution to administrator states is supported; final terminology, formal research, shipment, and outcome are not. | Reinforces |
| `D10` | Row 10; `06ed736f…`, `9ddf4a87…` | Direct artifact family: `Monetization` / `Experiments` (`0:1`) / root `2:18477` / capture `monetization-experiments-root-009` | `P2`, `P4` | No exact achievement ID. Copy work on plan and user-count constraints is supported; whether the two flows are one project and their lifecycle remain unknown. | Reinforces |
| `D11` | Row 11; `2514f84c…`, `54f3c4ae…`, `8af715b4…` | Contextual: `Checkout — Experiments (Copy)` / `DM-997` (`3792:15047`) / root `3793:15680` / `checkout-page-034`; saved-wallet and trust families add adjacent evidence, not failure-recovery proof | `P2`, `P4` | No exact achievement ID. Review and refinement of several recovery states is supported; one-release identity, shipment, localization, and recovery effect are not. | Expands |
| `D12` | Row 12; `66dfd533…` | Direct: `Monetization` / `Experiments` (`0:1`) / roots `2:157512`, `2:157783`, `2:157892` / captures `monetization-experiments-root-143`–`145` | `P2` | `MON-01` is a probable family match only. Do not attach either conflicting outcome formulation until the ticket and result identity are reconciled. | Conflict |
| `D13` | Row 13; `66dfd533…` | Correlated copy inventory: `Monetization` / `Pricing page` (`3:94360`) / root `5:313460` / capture `monetization-pricing-root-162` | `P2`, `P5` | No exact achievement ID. Pricing and plan-copy review is supported; exact plan rules, implementation, rollout, and effect remain unknown. | Reinforces |
| `D14` | Row 14; `cd9f26bb…`, `98aeeb7c…` | Contextual Figma: `Monetization` / `Pricing page` (`3:94360`) / roots `5:313532`, `5:313906`, representative `5:314534`; the four direct working images remain stronger `MON-06` evidence | `P1`, `P2`, `P5` | `MON-06`. Mason collaboratively restructured cumulative tiers; the pattern shipped and remains live. Working images are not production proof; no sole causation or measured result. | Reinforces after the later lifecycle correction; frozen |
| `D15` | Row 15; `6707d2f7…` | No meaningful match in the 655-record ledger | Broad `P2`/`P5` only | No exact achievement ID. Initiative material exists; Mason's deliverable, decisions, lifecycle, and outcomes are not established. | Gap |
| `D16` | Row 16; `67813aac…`, `677ffdf8…`, `67ade857…` | Contextual: `Monetization` / `Pricing page` (`3:94360`) / root `5:307644` / capture `monetization-pricing-root-148` | `P2`, `P5` | `MON-04`. Research, messaging analysis, concepts, and test-ready copy are supported; adoption, rollout, and results are not. | Reinforces; frozen |
| `D17` | Row 17; `66f69c1c…`, `672366fc…`, `6737306d…`, plus audit files `conversations-013/014.json` | Contextual: `Monetization` / `Experiments` (`0:1`) / root `2:20485` / capture `monetization-experiments-root-026` | `P5` | `SYS-01`, `SYS-04`. Collaborative conception, drafting, correction, and structured guidance are supported; sole ownership and company-wide adoption are not. | Reinforces |
| `D18` | Row 18; `66fd23fb…`, `67374f87…`, `675c7963…`, `6793425e…` | No meaningful project match in the 655-record product ledger | Nearest is `P5`; not specifically claimed | `SYS-02`, with `SYS-01` context. A developed and documented prototype is supported; deployment, coworker adoption, security approval, and productivity effects are not. | Reinforces with a product-Figma gap |
| `D19` | Row 19; `6724eeae…`, `674492dd…`, `6745d24d…`, `67c6b363…` | Direct family: `_Archive — Misc (pre-cleanup)` / `Page 1` (`0:1`) / root `2:137608` / capture `archive-page1-root-003`; active Account Security crosswalk holds the exact MFA mapping | `P4`, `P5` | `IAM-01`, `IAM-02`, `IAM-03`. DIAM-657 was approved and deployment-ready; another additional-key change launched. Do not claim every reviewed string shipped or produced an outcome. | Reinforces; represented |
| `D20` | Row 20; `679a3e3a…` | Direct: `_Archive — Misc (pre-cleanup)` / `ATE` (`2:1284`) / `Custom URL flow` root `2:8589` / capture `archive-ate-root-003` | `P4` | `IAM-02`, portfolio-level only. Copy review is supported; assignment, final wording, implementation, launch, and outcome remain unknown. | Reinforces |
| `D21` | Row 21; `0a91c01d…`, `bbe4c3a0…`, `5e2ac030…`, `de3f6f12…` | No meaningful match in the 655-record ledger | `M3`, `M4` | `MKT-03`. Writing, editing, structure, and repurposing are supported. Validated research figures are source context; the six-figure pipeline is campaign-level, not personal causation. | Reinforces with a Figma gap; represented |
| `D22` | Row 22; `ea187627…`, `17fe77d9…` | Contextual feature-awareness artifacts: `Monetization` / `Pricing page` (`3:94360`) / root `5:313906`; and `Experiments` (`0:1`) / root `2:153400` / capture `monetization-experiments-root-140` | `M4` | No exact achievement ID. Launch-connected content work is supportable; exact retained wording, publication authorship, release lineage, and performance are not. | Expands |
| `D23` | Row 23; `dfa7b94c…` | Direct target family: `Monetization` / `Pricing page` (`3:94360`) / root `4:146594` / capture `monetization-pricing-root-059` | `P1`, `P2`, `P5` | `SYS-04` terminology overlap only. Paid-feature messaging is supported; entitlement rules, final copy, implementation, and launch are not. | Reinforces |
| `C24` | Not in audit | Direct: `Monetization` / `Pricing page` (`3:94360`) / `Pricing Pages` root `5:307644` / capture `monetization-pricing-root-148`; contains the Voice product and pricing questions | `P1` | No exact achievement ID. Mason's collaborative involvement is supported; exact surfaces, strings, lifecycle, and outcome remain open. | Adds candidate |
| `C25` | Not in audit | No meaningful store-listing or mobile-optimization match in the 655-record ledger | `P1`, `P3` | `APP-02`. Google Play listing experiments and constraint-aware copy are supported; test results are absent. | Adds candidate with a Figma gap |
| `C26` | Not in audit | Direct: `Monetization` / `Write Pro` (`4:181271`) / `Frame 15951` root `4:185686` / capture `monetization-write-pro-root-055` | `P1`, `P3`, `P5` | `APP-03`. Desktop, download, and integration-page work is supported; Google Workspace remains CV-only and platform metrics are not personally attributable. | Adds candidate |
| `C27` | Not in audit | Direct: `Monetization` / `Experiments` (`0:1`) / `Navigation Bar` root `2:16918` / capture `monetization-experiments-root-004` | `P5` | `CEX-02`. Navigation, press, footer, information-architecture, and migration assignments form a distinct program; lifecycle varies by surface. | Adds candidate |
| `C28` | Not in audit | Direct: `Checkout — Experiments (Copy)` / `DM-1418 • 2-Step Checkout` (`5036:4490`) / roots `5175:10486`, `5183:10803`, `5183:11035` / `checkout-page-028` | `P2` | `MON-02`. Mason contributed content iterations, not flow ownership. Reported results depend on the missing experiment canvas. | Adds candidate; represented |
| `C29` | Not in audit | Correlated: `Monetization` / `Write Pro` (`4:181271`) / `For Dev` root `4:184737` / capture `monetization-write-pro-root-034`; no visible `DM-1417` label | `P2` | `MON-03`. Strategic messaging contribution is supported; account and session figures depend on the missing canvas and are not personal causation. | Adds candidate; represented |
| `C30` | Not in audit | Direct family: `_Archive — Misc (pre-cleanup)` / `Page 1` (`0:1`) / root `2:137608`; and `ATE` (`2:1284`) / roots `2:27176`, `2:53482`, `2:54253` | `P4` | `IAM-01`, `IAM-02`. Authentication, permissions, audit-log, billing/admin, invitation, group, CSV, and usage work is supported as a portfolio; not every item is proven shipped. | Adds candidate; represented |
| `C31` | Not in audit | No coherent cross-channel writing collection in the 655-record ledger | `M4` | `MKT-04` anchors the email and nurture subset. Email, PR, blog, case-study, and sales-deck work is claimed; representative artifacts and results still need selection. | Adds candidate with a Figma gap |
| `F32` | Not in audit | Direct: `Monetization` / `Experiments` (`0:1`) / copy-area root `2:99544` / tiered component node `2:99549` | Not claimed in the current CV | No exact achievement ID; contextual to `MON-04`. The artifact exists, but initiative identity, contribution detail, lifecycle, and outcome remain open. | Adds candidate |
| `F33` | Not in audit | Direct: `Checkout — Experiments (Copy)` / `DM-0000 Adding a checkbox for the US customers` (`10606:18924`) / root `10608:22420` / `checkout-page-004` | Not claimed in the current CV | No exact achievement ID. Artifact existence is supported; Mason's contribution, final language, lifecycle, and outcome are not yet linked. | Adds candidate |
| `F34` | Not in audit | Direct: `Checkout — Experiments (Copy)` / `DM-2063 • Email verification` (`8257:22222`) / root `8259:2494` / `checkout-page-026`, with adjacent `checkout-page-027` | Not claimed in the current CV | No exact achievement ID. Artifact and state breadth are supported; contribution, selected variant, lifecycle, and outcome remain open. | Adds candidate |
| `F35` | Not in audit | Direct: `Checkout — Experiments (Copy)` / `DM-1092 • Checkout abandonment survey` (`4385:21723`) / root `4385:21724` / `checkout-page-032`; quote experiment page `4188:23350` / `checkout-page-052` | Not claimed in the current CV | No exact achievement ID. Research and experiment artifacts exist; Mason's role, decisions, lifecycle, and result remain open. | Adds candidate |
| `F36` | Not in audit | Direct: `Checkout — Experiments (Copy)` / `DM-1004 • API usage limits UI update` (`3737:15462`) / root `3754:14887` / `checkout-page-038` | Not claimed in the current CV | No exact achievement ID. A bounded content artifact exists; contribution, selected wording, implementation, and outcome remain open. | Adds candidate |

## Complete Figma-family accounting

The 15 useful families missing from the earlier 23-row queue are all accounted
for once:

- five new rows: `F32` cancellation, `F33` US consent, `F34` email
  verification, `F35` abandonment and social proof, and `F36` API limits;
- four supporting families: Pro feature awareness supports `D06`; checkout
  information architecture supports `C28`; payment rationale, trust, trial
  reassurance, and FAQ support `C28` and `D11`; saved-wallet and payment-method
  selection supports `D11`;
- six already represented or frozen families: daily-character restrictions and
  bulk document limits support the existing upgrade-prompts case; Clarify
  hierarchy, file-format and plan popovers, and pricing tooltip/rationale work
  remain with frozen Pricing; team-administration bulk operations and custom
  branding support the existing account and team case.

The repository-root [`AGENTS.md`](../AGENTS.md) owns the proposal and writing
workflow. This queue owns only candidate reconciliation, score, order, coverage,
freeze, and disposition.
