# DeepL pricing exhibits — Revision 5 repair export log

Repaired and exported on 2026-07-23 from the Figma file `Pricing Grid`
(`fdxAxs14RUKijGsznWusF3`) with Figwright 0.3.0. The repository was at
`ecf8db6` on `main` before Figma work began. All exhibit work remains in
section `17:21893`, `Portfolio exhibits 2026-07`.

This was a repair pass on the existing revision-4 `EXHIBIT — …` frames. No
cluster was rebuilt from its canonical source.

## Node and export inventory

| Cluster | Canonical source | Repaired exhibit | Export | Final frame size | Final 2x PNG |
|---|---|---|---|---:|---:|
| D — Bundle era | `35:25257` (`1512px / Bundles`) | `43:57302` | `pricing-bundle-era-clean.png` | 1512 × 7615.13 | 3024 × 15231 |
| A — Translator | `13:17289` | `43:60389` | `pricing-translator-cumulative.png` | 1512 × 1053 | 3024 × 2106 |
| B — Write | `13:17485` | `43:62940` | `pricing-write-addon-clean.png` | 1512 × 1044 | 3024 × 2088 |
| C — Voice | `13:17681` | `43:65515` | `pricing-voice-clean.png` | 1512 × 1224 | 3024 × 2448 |
| E — API | `13:17852` | `43:68299` | `pricing-api-clean.png` | 1512 × 1285 | 3024 × 2570 |

The duplicate `Pro on Voice` labels were classified by rendered content, not
by their layer names:

- `13:17681` is Voice: it contains “Real-time voice translations for global
  collaboration” and the Meetings / Conversations cards.
- `13:17852` is API: it contains “Scale multilingual workflows with the DeepL
  API.”

## Checkpoint limitation

Revision 5 requires:

- `rev5 pre-repair` / `rev5 cleanup done`
- `rev5 cluster D start` / `rev5 cluster D done`
- `rev5 cluster A start` / `rev5 cluster A done`
- `rev5 cluster B start` / `rev5 cluster B done`
- `rev5 cluster C start` / `rev5 cluster C done`
- `rev5 cluster E start` / `rev5 cluster E done`

These named checkpoints were **not created**. Figwright 0.3.0 exposes Figma
node editing and export but no named-version/checkpoint operation. Figma
autosave is not recorded here as a substitute. This is the one incomplete
brief requirement.

## Cleanup

The five defective round-1 PNGs were moved to `superseded/` before the final
exports:

- `rev4-round1-pricing-bundle-era-clean.png`
- `rev4-round1-pricing-translator-cumulative.png`
- `rev4-round1-pricing-write-addon-clean.png`
- `rev4-round1-pricing-voice-clean.png`
- `rev4-round1-pricing-api-clean.png`

The prior round-1 log, whose verification claims the PNGs disproved, is
preserved as `superseded/rev4-round1-export-log.md`. Failed revision-5 crop or
color attempts are also preserved there as `rev5-attempt1-*.png`; none is
listed as complete.

The first revision-5 completion pass was then independently rechecked. It
found that A / B / C / E ended 67 / 67 / 65 / 67 px below their card rows
instead of the specified 64 px. Those over-cropped files are preserved as
`superseded/rev5-pre-doublecheck-*.png`. The four live frames were corrected
to exactly 64 px, re-exported, and reopened before the final results below
were recorded.

The repository's root instructions prohibit irreversible deletion. Older
Figma exhibits and removed feature rows were therefore hidden/renamed rather
than permanently deleted. The deliverable frames render as specified.

## Repair and reconstruction decisions

- **System-wide subscriber cleanup (A/B/C/E):** hid the account `Main
  Navigation` while retaining the product tab bar; excluded the narrow source
  capture strips; normalized the exhibit/main-frame width to 1512 px; and
  cropped only after the card edits settled. Those source-capture/crop bounds
  were the material included at the sides in round 1. Final exact-frame
  exports contain zero dark pixels on every outer edge.
- **Cluster D:** retained the full page. Starter, Advanced, Ultimate, and
  Enterprise card content was repaired inside `43:57302`. The three discount
  feature rows are hidden and matching `Save 20%`, `Save 40%`, and `Save 60%`
  badges sit by the relevant price blocks. Advanced includes `2,000 shared
  glossaries`. Ultimate uses the reconstructed audience `For teams and
  businesses`, the header `Everything in Advanced + Write Pro, plus:`, and
  only its two delta rows (`100` file translations per user/month and files
  up to `30 MB`). Enterprise's header is inside the padded feature-list
  container. The comparison table's remaining red `Maximum text length` layer
  was recolored. `Save 16% with annual` remains supported by
  `Monetization/Translator@2x.png` and `figma screenshots/1920px.png`.
- **Cluster A:** restored `2,000 shared glossaries` to the Advanced card. The
  cumulative headers, descriptions, audience lines, and four-card hierarchy
  from revision 4 were retained.
- **Cluster B:** restored `Everything in Free, plus:` above the Write Pro
  delta. Free retains `Set terms to never edit`; the Business title remains
  `DeepL Write for Business`.
- **Cluster C:** retained the revision-4 copy-island reconstruction: eight
  Meetings facts and six Conversations facts, including the split lines and
  `50+ users` SSO threshold.
- **Cluster E:** retained the revision-4 API Pro reconstruction from
  `Monetization/API.png`, including historical `€20.00` per 1,000,000
  characters, with normalized muted `Does not include` rows.
- Mason's red candidate copy was adopted and restyled. The exported exhibits
  contain no red text, lorem ipsum, or placeholder prices.

### Override vs. detach record

Existing revision-4 structure was reused wherever overrides worked. Figwright
stalled on the nested instance overrides below, so only the smallest affected
instance layers were detached:

- Cluster D card nodes inside the existing grid became Starter `53:33212`,
  Advanced `53:33552`, Ultimate `53:33555`, and Enterprise `53:33558`.
- Cluster A's Advanced card/list became `54:36632` / `54:36824`.
- Cluster B's Write Pro card/list became `54:36635` / `54:36843`; its restored
  header frame is `54:36852`.

The exhibit roots and export node IDs in the inventory remained unchanged.

## Export verification — actual final PNGs

Each final file below was opened from disk at readable zoom after export.
Every result in this table refers to that final PNG, not to the Figma canvas
or a superseded attempt.

| Final PNG | Top edge | Right edge | Bottom edge | Left edge | Every card / content | Cluster D table |
|---|---|---|---|---|---|---|
| `pricing-bundle-era-clean.png` | **PASS** — full-page hero begins cleanly | **PASS** | **PASS** | **PASS** | **PASS** — Starter, Advanced, Ultimate, Enterprise; all three price badges; no discount bullets; no red/placeholder copy | **PASS** — recolored; card/table plan names and CTAs match; FAQ placeholders absent |
| `pricing-translator-cumulative.png` | **PASS** — product tabs present; no account nav | **PASS** | **PASS** | **PASS** | **PASS** — all four cards; cumulative headers; Advanced includes `2,000 shared glossaries`; no red/placeholder copy | N/A |
| `pricing-write-addon-clean.png` | **PASS** — product tabs present; no account nav | **PASS** | **PASS** | **PASS** | **PASS** — Free, Write Pro, Business; Write Pro has `Everything in Free, plus:`; no red/placeholder copy | N/A |
| `pricing-voice-clean.png` | **PASS** — product tabs present; no account nav | **PASS** | **PASS** | **PASS** | **PASS** — Meetings and Conversations cards, complete lists and retained actions; no red/placeholder copy | N/A |
| `pricing-api-clean.png` | **PASS** — product tabs present; no account nav | **PASS** | **PASS** | **PASS** | **PASS** — Free, Pro, Business; API Pro reconstruction present; no red/placeholder copy | N/A |

A pixel audit of the final files found `0` pixels with RGB channels below 32
on the top, right, bottom, and left outer edges of every PNG. This supplements
the visual edge check; it does not replace it.

A separate live-node audit confirmed a 64 px frame-to-card-row difference for
each subscriber exhibit. It also confirmed every locked copy string in the
rendered bounds, no numeric placeholder prices, and no red text. Cluster D's
only red raster pixels are in retained source brand logos; its live text-node
audit found no red text, including in the comparison table.

A fresh 2x export of all five live exhibit nodes was decoded and compared with
the five deliverable PNGs after this correction: dimensions matched and every
pixel channel was identical in all five comparisons.

No `site/` files were touched. No Figma publishing, sharing, or access changes
were made. These exports and this log are intentionally uncommitted pending
Mason's Linux QA.
