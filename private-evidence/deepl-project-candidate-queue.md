# DeepL project candidate queue

**Updated and re-scored:** 2026-07-28
**Status:** Current DeepL UX copy and content-design discovery, route
reconciliation, and ranking owner

This queue reconciles the ChatGPT audit, current CV, achievement ledger, current
document inventory, complete Figma extraction, and the retained direct frames
from the reviewed candidate exports.
The discovery universe contains 37 candidate families: the original 36 plus
`R37`, found in the retained document pass. This queue ranks only DeepL UX copy,
product content design, and content-system work. Marketing, editorial,
store-listing, and other-employer work remain outside its scope and are not
rescored or changed here.

Mason chooses what belongs in the portfolio. Missing evidence in one source
cannot disprove a contribution. Artifact, contribution, lifecycle, and outcome
remain separate. A filename, assistant summary, or attractive frame cannot fill
another dimension.

## Viability and score

A full case needs:

- hiring-reader value;
- a defensible account of Mason's contribution;
- one held or independently inspectable central artifact with an exact locator;
- a supported lifecycle or an honest artifact-level ending; and
- a story-shaped decision, constraint, or trade-off.

Metadata-only evidence can identify a lead, but cannot supply contents. An
assistant synthesis is discovery-only.

Score viable candidates from `0` to `2` on four independent axes:

1. **Reader value** — relevance and distinct hiring signal.
2. **Source strength** — custody, origin, and claim coverage of the sources
   needed for this story; not a single source tier.
3. **Evidence fit** — whether a specific held artifact can do a specific job in
   this story. Exact text, a typeset source-faithful comparison, and a product
   frame can each score `2`.
4. **Presentation readiness** — how much bounded preparation the selected
   evidence needs.

Eligibility and status are resolved before ordering: viable `Active` candidates
are ranked ahead of `Reserve` candidates. Within each status, order is
lexicographic: reader value → source strength → evidence fit → presentation
readiness → prior order. Do not add the values. Presentation can break only an
otherwise exact tie and can never move a weaker story above a stronger one.

Candidates are ranked inside a discipline lane, not against candidates doing a
different hiring job. The current active lane is **product content design**.
Content systems keep their own order.

## Implemented-route reconciliation

The site is private and undeployed. These are implemented route states, not
claims of public publication.

```json route-contracts
[
  {"route":"/work/upgrade-prompts","project_id":"DEEPL-UPGRADE-PROMPTS","candidate_ids":["D06","D12"],"state":"advanced-draft","central_exhibit_id":"upgrade-allowance-escalation"},
  {"route":"/work/pricing-evolution","project_id":"DEEPL-PRICING-EVOLUTION","candidate_ids":["D14","D16"],"state":"frozen","central_exhibit_id":"pricing-working-layouts-preserved"},
  {"route":"/work/checkout","project_id":"DEEPL-SUBSCRIPTION-CHECKOUT","candidate_ids":["D08","C28"],"state":"advanced-draft","central_exhibit_id":"checkout-four-purchase-states"},
  {"route":"/work/account-team-security","project_id":"DEEPL-ACCOUNT-TEAM-SECURITY","candidate_ids":["D19","C30"],"state":"advanced-draft","central_exhibit_id":"account-and-team-state-sequences"},
  {"route":"/work/product-naming","project_id":"DEEPL-PRODUCT-NAMING","candidate_ids":["D17"],"state":"advanced-draft","central_exhibit_id":"write-naming-order-decision"},
  {"route":"/work/voice-product","project_id":"DEEPL-VOICE-PRODUCT","candidate_ids":["C24"],"state":"advanced-draft","central_exhibit_id":"voice-two-offers"}
]
```

No implemented route remains in the active candidate list. A route can return
to that list only after an explicit disposition change. Pricing remains frozen
regardless of score.

## Product content design

Work only the highest active row in this lane. The re-score was run once after
the rubric and route reconciliation were fixed.

| Rank | ID | Candidate | Score `(reader/source/fit/presentation)` | Form | Status | Next evidence gate |
| ---: | --- | --- | --- | --- | --- | --- |
| 1 | `C29` | DM-1417 anonymous-user account-creation soft block | `2/2/1/1` | Mini case | Active | Map the retained partial canvas excerpt to an exact interface artifact. Preserve the stopped/evaluate ending; do not fold it into paid upgrade prompts. |
| 2 | `C26` | Desktop app and integration discovery | `2/1/2/2` | Mini or full case | Active | Select one coherent product-discovery story and confirm lifecycle for its exact artifact. |
| 3 | `C27` | Website navigation and discovery surfaces | `2/1/2/1` | Mini or full case | Active | Crop the two mapped navigation variants and bound lifecycle by surface. |
| 4 | `D03` | Apps and Integrations post-sign-up experiment | `2/1/1/1` | Mini case | Active | Link the proven-hypothesis account to one exact callout or sidebar state. |
| 5 | `D10` | Plan changes and team-seat adjustment flows | `2/1/1/1` | Mini case | Active | Confirm whether the two flows are one initiative and locate clean full states. |
| 6 | `D11` | Failed-payment and payment-method recovery | `2/1/1/1` | Full or mini case | Active | Find an exact failure-recovery artifact; the checkout FAQ is adjacent evidence only. |
| 7 | `D20` | Custom-domain account administration | `1/1/2/2` | Mini case | Active | Confirm Mason's assignment and lifecycle for the selected neutral dialogs. |
| 8 | `D23` | Full-page translation as a paid feature | `1/1/2/1` | Writing example | Active | Pair the mapped plan row with direct copy or assignment evidence. |
| 9 | `D13` | Glossary plan repackaging | `1/1/2/1` | Writing example or mini case | Active | Build a source-faithful text comparison from selected audit rows. |
| 10 | `D09` | True-up billing UX | `2/1/0/0` | Mini case | Reserve | Find a true-up-specific artifact; current exports duplicate `D10`. |
| 11 | `F32` | Tier-aware cancellation, retention, and feature-loss copy | `2/0/2/1` | Mini case | Reserve | Establish Mason's contribution and initiative identity. |
| 12 | `F34` | Email verification and signup optimization | `2/0/2/1` | Mini case | Reserve | Establish contribution, selected variant, lifecycle, and result. |
| 13 | `F35` | Checkout abandonment and social-proof research | `2/0/2/1` | Mini case | Reserve | Establish Mason's role and connect the research to a decision. |
| 14 | `F33` | US checkout consent | `1/0/2/1` | Writing example | Reserve | Establish contribution and lifecycle. |
| 15 | `F36` | API usage-limit UI | `1/0/2/1` | Writing example | Reserve | Establish contribution and selected wording. |
| 16 | `D15` | Project Rebound | `2/0/0/0` | Reserve | Reserve | Identify Mason's deliverable, decision, and held artifact. |
| — | `D06` | DeepL Write Pro launch and monetization work | `2/2/2/2` | Implemented full case | Represented by `/work/upgrade-prompts` | Source-fidelity re-audit passed; retain the experiment-wave result scope and do not create a duplicate candidate. |
| — | `D12` | Free/Pro status label and file-limit awareness | `1/1/2/2` | Implemented support | Represented by `/work/upgrade-prompts` | Keep outcome identity unresolved. |
| — | `D08` | Country selection and delayed subscription activation | `1/2/2/1` | Implemented support | Represented by `/work/checkout` | Do not merge it with DM-1418 without exact project evidence. |
| — | `C28` | DM-1418 checkout-flow simplification | `2/2/2/2` | Implemented support | Represented by `/work/checkout` | Retained metrics remain conditional on exact flow matching. |
| — | `D19` | MFA recovery and authentication keys | `2/2/2/2` | Implemented full case | Represented by `/work/account-team-security` | Keep recovery and deletion as separate groups unless one workstream is confirmed. |
| — | `C30` | Broader authentication and administration portfolio | `2/2/2/2` | Implemented support | Represented by `/work/account-team-security` | Keep lifecycle specific to each surface. |
| — | `C24` | DeepL Voice product content | `2/1/2/2` | Implemented mini case | Represented by `/work/voice-product` | Central exhibits re-audited; keep the ending at artifact level unless lifecycle or outcome evidence is added. |
| — | `D14` | Pricing-grid readability and cumulative tiers | `2/2/2/2` | Frozen route | Frozen | Mason must explicitly reopen Pricing. |
| — | `D16` | Pricing and Packaging redesign research | `2/2/1/1` | Frozen support | Frozen | Keep with the frozen Pricing subject. |

## Content systems

| Rank | ID | Candidate | Score | Form | Status | Next evidence gate |
| ---: | --- | --- | --- | --- | --- | --- |
| 1 | `D18` | Figma content-review plugin prototype | `2/1/1/1` | Mini case | Active | Recover a product artifact or bounded demonstration and confirm deployment/adoption status. |
| 2 | `R37` | Error-code clarity review and governance | `2/1/1/1` | Writing example or mini case | Reserve | Confirm Mason completed the review and recover before/after or final strings. The source proves the assignment, not completed revisions. |
| — | `D17` | Product-and-plan naming framework | `2/2/2/2` | Implemented full case | Represented by `/work/product-naming` | Source-fidelity re-audit passed against the assigned-drafting ceiling; reader review remains before publication. |

`R37` comes from
[`cast-error-codes-270924-155624.md`](source-documents/recovered/cast-error-codes-270924-155624.md)
and ChatGPT conversation `66fa9188-93c0-8006-a51d-78ff6bb8fa79`. It is not
merged into failed-payment recovery.

## Outside this queue

The following records are preserved from the 2026-07-27 queue without
re-scoring. They are marketing, editorial, store-listing,
launch-communication, or otherwise outside this DeepL UX copy and
content-design workflow. Their rank numbers are historical positions, not
positions in the current UX queue.

| Prior rank | ID | Candidate | Prior score | Prior likely form | Prior status | Prior next bounded action |
| ---: | --- | --- | ---: | --- | --- | --- |
| 2 | `D01` | Go Enterprise landing-page program | `5` (`2/2/1`) | Full case | Active | — |
| 10 | `D02` | Industry landing-page localization and accessibility updates | `5` (`1/2/2`) | Mini case | Active | — |
| 11 | `C25` | Mobile app and store-listing optimization | `4` (`2/2/0`) | Mini case | Active | — |
| 20 | `D07` | Browser-extension SSO launch communication | `3` (`1/1/1`) | Writing example | Active | — |
| 21 | `D22` | DeepL Pro South Korea launch content | `3` (`1/1/1`) | Writing example | Active | — |
| 22 | `C31` | Cross-channel marketing writing collection | `3` (`2/1/0`) | Writing collection | Active | — |
| 26 | `D04` | Browser-extension ratings experiment | `2` (`1/1/0`) | Reserve | Active | — |
| 27 | `D05` | Firefox extension burger-menu experiment | `2` (`1/1/0`) | Reserve | Active | — |
| — | `D21` | Localization research report and campaign | `6` (`2/2/2`) | Existing full case | Represented by the localization report campaign | — |

Their prior cross-source records are also preserved verbatim:

| ID | GPT audit row and conversation IDs | Exact Figma reference or explicit gap | Current CV | Achievement record and factual boundary | Relationship |
| --- | --- | --- | --- | --- | --- |
| `D01` | Row 1; `61a44a6f…`, `f83209e0…`, `c01a612b…`, `f03a5c62…`, `6793425e…` | Contextual: `Monetization` / `Pricing page` (`3:94360`) / root `4:146594` / capture `monetization-pricing-root-059`; multi-product and enterprise content, not page authorship or lifecycle | `M1`, `M2`, `P1`, `P5` | `CEX-01`, `SEO-01`; `CEX-03` and `APP-03` add workflow context. Collaborative contribution to 25+ pages is supported; page-level adoption and program metrics are not personally attributable. | Reinforces and expands |
| `D02` | Row 2; `41dac1f3…`, `181affab…` | No meaningful match in the 655-record ledger | `M1`, `P5` | `CEX-01`, program level. CTA and alt-text contribution is supported; not every string, ticket, localization, or launch is established. | Reinforces with a Figma gap |
| `D04` | Row 4; `bf33bf61…` | No meaningful match in the 655-record ledger | Broad `P3`/`P5` only | No exact achievement ID. The reported negative result and Mason's reasoning are leads; his experiment role, data validity, and final decision remain unknown. | Gap |
| `D05` | Row 5; `b364f376…` | No meaningful match in the 655-record ledger | Broad `P3`/`P5` only | No exact achievement ID. The result remains unresolved; no supported causal explanation, rollout decision, or exact contribution. | Gap |
| `D07` | Row 7; `fd7f5ae1…`, `875a063d…` | Contextual only: `Monetization` / `Pricing page` (`3:94360`) / root `4:146594`; no exact SSO launch artifact | `P4`, `M4` | `MKT-02`. Customer-facing Chrome/Edge SSO launch content is supported; exact final wording, sole authorship, and campaign result are not. | Expands with an exact-artifact gap |
| `D21` | Row 21; `0a91c01d…`, `bbe4c3a0…`, `5e2ac030…`, `de3f6f12…` | No meaningful match in the 655-record ledger | `M3`, `M4` | `MKT-03`. Writing, editing, structure, and repurposing are supported. Validated research figures are source context; the six-figure pipeline is campaign-level, not personal causation. | Reinforces with a Figma gap; represented |
| `D22` | Row 22; `ea187627…`, `17fe77d9…` | Contextual feature-awareness artifacts: `Monetization` / `Pricing page` (`3:94360`) / root `5:313906`; and `Experiments` (`0:1`) / root `2:153400` / capture `monetization-experiments-root-140` | `M4` | No exact achievement ID. Launch-connected content work is supportable; exact retained wording, publication authorship, release lineage, and performance are not. | Expands |
| `C25` | Not in audit | No meaningful store-listing or mobile-optimization match in the 655-record ledger | `P1`, `P3` | `APP-02`. Google Play listing experiments and constraint-aware copy are supported; test results are absent. | Adds candidate with a Figma gap |
| `C31` | Not in audit | No coherent cross-channel writing collection in the 655-record ledger | `M4` | `MKT-04` anchors the email and nurture subset. Email, PR, blog, case-study, and sales-deck work is claimed; representative artifacts and results still need selection. | Adds candidate with a Figma gap |

## Recovered-document mapping

This is the evidence-to-candidate pass, not a permanent extra workflow stage.
It lets discovery and scoring happen once against the same source inventory.

| Candidate | Retained document evidence | What it changes |
| --- | --- | --- |
| `D17` | Content Design System final, tracker, and plans; exact inventory IDs in `SYS-04` | Raises contribution from participation-only to assigned drafting and contributed draft content. Does not prove approval or adoption. |
| `D06` | Write monetization key terms; upgrade/upsell modal guide; account terms | Strengthens terminology and offer-context evidence; does not prove selected variant or outcome. |
| `D10` | Changes due to multiple subscriptions | Strengthens artifact and rules context; does not unify separate flows or prove shipment. |
| `D13` | Content Style Guide variants, glossary, account terminology | Supports a source-faithful writing exhibit; versions and authorship still need checking. |
| `C24` | Brand Voice and Tone and Voice-system material | Strengthens category-language context; does not prove Mason's exact assignment or commercial outcome. |
| `D14`, `D16` | Pricing analysis, pricing-page records, DM-2112 | Adds held research and working context; does not reopen the frozen subject. |
| `R37` | CAST Error Codes | Adds a new reserve lead with a documented clarity-review assignment. |

The four recovered assistant syntheses remain discovery-only and cannot raise a
score.

## July 28 Figma reconciliation

- `deepl-write-naming-decision.png` is the source for the Product Naming
  transcription. Its retained source frame, dimensions, and hash are in the
  manifest.
- `usage-limit.png`, `document-size.png`, `remaining-documents.png`, and
  `voice-addon-refined-43-65515-2x.png` are byte-matched to public assets and now
  have exact retained-source provenance.
- Clarify original/revised is not a valid before/after pair: one export is a
  transparent text layer and the other a complete card.
- The terminology paper remains private because it identifies a colleague.
- Voice full-page/FAQ, simplified/refined, and Meetings proposed/shipped pairs
  remain unselected because relationship, chronology, or lifecycle is not
  established by the filenames.

No additional qualified candidate emerged from the July 28 ZIP.

## Source owners

- [`deepl-document-inventory.json`](deepl-document-inventory.json)
- [`deepl-achievement-recovery/artifacts/achievement-ledger.json`](deepl-achievement-recovery/artifacts/achievement-ledger.json)
- [`claim-review.md`](claim-review.md)
- [`deepl-figma-evidence-map.md`](deepl-figma-evidence-map.md)
- [`portfolio-asset-manifest.json`](portfolio-asset-manifest.json)

This queue owns candidate discipline, score, order, coverage, route
reconciliation, freeze, and disposition. The repository-root workflow owns
story proposals and writing.
