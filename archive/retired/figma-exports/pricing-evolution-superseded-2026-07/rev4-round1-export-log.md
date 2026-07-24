# DeepL pricing exhibits — Revision 4 export log

Exported on 2026-07-23 from the Figma file `Pricing Grid`
(`fdxAxs14RUKijGsznWusF3`) with Figwright 0.3.0. All exhibit work is in
section `17:21893`, `Portfolio exhibits 2026-07`.

## Node and export inventory

| Cluster | Verified source | Fresh exhibit | Export | Frame size | 2x PNG size |
|---|---|---|---|---:|---:|
| D — Bundle era | `35:25257` (`1512px / Bundles`) | `43:57302` | `pricing-bundle-era-clean.png` | 1512 × 7615.13 | 3024 × 15231 |
| A — Translator | `13:17289` | `43:60389` | `pricing-translator-cumulative.png` | 1512 × 1133 | 3024 × 2266 |
| B — Write | `13:17485` | `43:62940` | `pricing-write-addon-clean.png` | 1512 × 1104 | 3024 × 2208 |
| C — Voice | `13:17681` | `43:65515` | `pricing-voice-clean.png` | 1512 × 1343 | 3024 × 2686 |
| E — API | `13:17852` | `43:68299` | `pricing-api-clean.png` | 1512 × 1345 | 3024 × 2690 |

The duplicate `Pro on Voice` labels were classified by rendered content, not
their layer names. Source `13:17681` is the true Voice page because it contains
“Real-time voice translations for global collaboration” and the Meetings /
Conversations cards. Source `13:17852` is the API page because it contains
“Scale multilingual workflows with the DeepL API.”

## Checkpoints and cleanup

The brief requested these named checkpoints:

- `rev4 pre-cleanup` / `rev4 cleanup done`
- `rev4 cluster D start` / `rev4 cluster D done`
- `rev4 cluster A start` / `rev4 cluster A done`
- `rev4 cluster B start` / `rev4 cluster B done`
- `rev4 cluster C start` / `rev4 cluster C done`
- `rev4 cluster E start` / `rev4 cluster E done`

Figwright 0.3.0 does not expose Figma named-version creation, so those labels
could not be created through the authorized MCP path. This is the only
checkpoint-loop conflict. Work was still isolated to fresh duplicates and
Figma autosaved after each cluster.

The four prior revision exhibits were not permanently deleted because the
repository's root instructions prohibit permanent deletion. They were
reversibly renamed and hidden instead:

- `19:21893` — `SUPERSEDED rev3 — Translator cumulative`
- `31:40133` — `SUPERSEDED rev3 — Write add-on`
- `31:41637` — `SUPERSEDED rev3 — Voice add-on`
- `31:43353` — `SUPERSEDED rev3 — Bundle comparison before export`

Stale PNGs were moved out of the deliverable root into `superseded/`.

## Reconstruction decisions

- Cluster D is the full-page beginning-state exhibit. Card and comparison-table
  plan names, CTAs, and Write features were reconciled. `Save 16% with annual`
  is supported by `private-evidence/source-exports/figma/monetization-pricing-pages/Translator@2x.png` and
  `private-evidence/source-exports/figma/pricing-page-screenshots/1920px.png`. Historical prices were retained.
- Cluster A uses cumulative Translator headers and subscriber-view cards with
  no CTAs. The Ultimate and Enterprise feature-list instances were detached
  only after overrides could not place their new headers without touching the
  audience band.
- Cluster B reconstructs the Free feature list from the bundle-era table,
  including `Set terms to never edit`. The smallest Free and Business
  feature-list instances were detached so their new rows and headers could
  participate in auto layout.
- Cluster C uses the copy-island wording. Only the two Voice feature-list
  instances were detached (`43:68158` and `43:68210`); one row was cloned in
  each list to produce the required eight Meetings facts and six Conversations
  facts. The illustrations, titles, descriptions, Contact Sales buttons, and
  Play video links were retained.
- Cluster E was completed with instance overrides only. The source line
  `Access to all features` was repurposed as the Free/Pro header, removing the
  contradictory claim. The Pro deck was reconstructed from
  `private-evidence/source-exports/figma/monetization-pricing-pages/API.png`, including the historical `€20.00` per 1,000,000
  characters. Both `Does not include` blocks were normalized to muted styling.
- Mason's red candidate copy was adopted and restyled. No rendered exhibit
  contains red text, lorem ipsum, or a placeholder price.

## Export verification

All five exact exhibit nodes were exported as PNG at 2x. The files above were
opened at full resolution and visually checked for copy, emphasis, clipping,
card alignment, and color. Clusters A, B, C, and E retain the product tab bar,
hide `Main Navigation`, and end with a 64 px background-only band below the
card row. Cluster D remains a full page with cards and comparison table using
the same plan names.
