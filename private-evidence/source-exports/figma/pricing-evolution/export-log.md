# DeepL pricing exhibits — Revision 7 targeted repair export log

Revision 7 was repaired and exported on 2026-07-24 from the Figma file `Pricing Grid`
(`fdxAxs14RUKijGsznWusF3`) through the Figma desktop app and Figwright. The
repository was at `da49383` on `main` before Revision 7 work began. All exhibit
frames remain in section `17:21893`, `Portfolio exhibits 2026-07`.

Revision 7 was a targeted pass on existing Clusters A, D and F. Clusters B, C
and E were approved and were neither edited nor re-exported. The shipped bundle
rollout is represented by `pricing-bundle-tabs.png`, the three-tab “Find your
perfect plan” selector. Clusters D and F are the later internal toggle-page
simplification direction; they are not presented as the original rollout.

## Node and export inventory

| Cluster | Canonical source | Refined exhibit | Export | Final frame size | Final 2x PNG |
|---|---|---|---|---:|---:|
| D — Toggle direction, Write Pro on | `35:25257` (`1512px / Bundles`) | `43:57302` | `pricing-bundle-era-clean.png` | 1512 × 7615.13 | 3024 × 15231 |
| A — Translator cumulative | `13:17289` | `43:60389` | `pricing-translator-cumulative.png` | 1512 × 1196 | 3024 × 2392 |
| B — Write add-on | `13:17485` | `43:62940` | `pricing-write-addon-clean.png` | 1512 × 1104 | 3024 × 2208 |
| C — Voice | `13:17681` | `43:65515` | `pricing-voice-clean.png` | 1512 × 1327 | 3024 × 2654 |
| E — API | `13:17852` | `43:68299` | `pricing-api-clean.png` | 1512 × 1388 | 3024 × 2776 |
| F — Toggle direction, Write Pro off | `35:25098` (`1512px / Translator`) | `66:69219` | `pricing-translator-transition-clean.png` | 1512 × 7079.13 | 3024 × 14159 |

The duplicate `Pro on Voice` labels remain classified by rendered content:

- `13:17681` is Voice: Meetings and Conversations cards.
- `13:17852` is API: Free, Pro, and Business API cards.

Cluster F was cloned fresh from `35:25098`, the full transition-era Translator
page matching `private-evidence/source-exports/figma/monetization-pricing-pages/Translator@2x.png`. Its `Add DeepL Write Pro`
toggle is visibly off and the annual label reads `Save 16% with annual`.

## Revision 6 checkpoints

Figwright does not expose Figma named-version creation. Revision 6 explicitly
authorizes ISO-timestamp fallbacks, so the following autosaved editing
boundaries are the checkpoint record:

| Required checkpoint | ISO fallback |
|---|---|
| `rev6 pre-pass` | `2026-07-24T09:15:07.0207103+02:00` |
| `rev6 cleanup done` | `2026-07-24T09:15:07.2034575+02:00` |
| `rev6 cluster D start` / `done` | `2026-07-24T09:20:11.8312161+02:00` / `2026-07-24T09:21:35.9356119+02:00` |
| `rev6 cluster A start` / `done` | `2026-07-24T09:22:18.3051005+02:00` / `2026-07-24T09:24:40.0342288+02:00` |
| `rev6 cluster B start` / `done` | `2026-07-24T09:24:55.8360493+02:00` / `2026-07-24T09:27:20.7028432+02:00` |
| `rev6 cluster C start` / `done` | `2026-07-24T09:27:31.9314789+02:00` / `2026-07-24T09:28:38.4333076+02:00` |
| `rev6 cluster E start` / `done` | `2026-07-24T09:29:02.1164881+02:00` / `2026-07-24T09:30:15.6223060+02:00` |
| `rev6 cluster F start` / `done` | `2026-07-24T09:30:22.9817965+02:00` / `2026-07-24T09:34:16.2741464+02:00` |
| `rev6 cluster D verification repair start` / `done` | `2026-07-24T09:37:53.5504077+02:00` / `2026-07-24T09:38:32.9634747+02:00` |

## Revision 7 checkpoints

Figwright still exposes no named-version operation. The checkpoint names below
therefore use the brief-authorized ISO timestamp fallback; they are editing
boundaries, not claims that named Figma versions were created.

| Required checkpoint | ISO fallback |
|---|---|
| `rev7 pre-pass` | `2026-07-24T11:43:08.9536628+02:00` |
| `rev7 cleanup done` | `2026-07-24T11:43:57.7591248+02:00` |
| `rev7 cluster A start` / `done` | `2026-07-24T11:44:41.8163429+02:00` / `2026-07-24T11:45:20.3461528+02:00` |
| `rev7 cluster D start` / `done` | `2026-07-24T11:46:25.8750090+02:00` / `2026-07-24T11:47:39.2668872+02:00` |
| `rev7 cluster F start` / `done` | `2026-07-24T11:48:07.3846545+02:00` / `2026-07-24T11:49:00.5135834+02:00` |

The D verification-repair checkpoint records a real export-PNG failure: the
first 2x PNG showed the Enterprise feature line and VAT footer wrapping even
though the live text metadata reported one line. The layers were repaired and
the final PNG was re-exported and reopened before it was marked passing.

## Cleanup and superseded artifacts

Before re-export, the five Revision 5 / round-2 PNGs were moved to the
repository archive at
`archive/retired/figma-exports/pricing-evolution-superseded-2026-07/`:

- `rev5-round2-pricing-bundle-era-clean.png`
- `rev5-round2-pricing-translator-cumulative.png`
- `rev5-round2-pricing-write-addon-clean.png`
- `rev5-round2-pricing-voice-clean.png`
- `rev5-round2-pricing-api-clean.png`

Before Revision 7 re-export, only the three affected Revision 6 / round-3
files were moved into the same archive folder:

- `rev6-round3-pricing-translator-cumulative.png`
- `rev6-round3-pricing-bundle-era-clean.png`
- `rev6-round3-pricing-translator-transition-clean.png`

The approved B, C and E exports stayed in place. `pricing-bundle-tabs.png`
also stayed in place and received no Figma action.

The repository instructions prohibit irreversible deletion. Removed banners,
FAQ placeholders, and replaced layers were hidden or preserved in the archived
artifacts rather than permanently deleted.

## Revision 6 styling and reconstruction decisions

- All visible card feature bullets use whole-line regular weight. List headers
  remain semibold. Feature bullets and audience rows render on one line.
- Feature bullets use `per month`; the attested price subtext remains
  `per user/month, billed annually *`. Comparison-table wording was left
  unchanged because the brief marks it out of scope.
- Cluster D retains the Revision 5 discount treatment: no discount feature
  rows, with `Save 20%`, `Save 40%`, and `Save 60%` next to the matching price
  blocks. Its repaired cumulative deltas, headers, comparison table, and real
  FAQ remain intact.
- Cluster A restores €7.49 / €24.99 / €49.99 plus the Enterprise sales block.
  Cluster B restores €0 / €10 / `Let's talk`. Cluster E restores API Free €0,
  API Pro €4.99 with `per month + usage-based price`, and Business
  `Custom pricing available`. Their source currency selectors remain; their
  blue account/support banners are hidden.
- Both Voice cards use `Let's talk`, `Our Sales team is ready for your call.`,
  and `Contact Sales` in a shared price/CTA rhythm. The authorized shorter
  feature string `Live translation for one-on-one conversations` prevents a
  wrap.
- Cluster F is a styling-only reconstruction. It preserves the repetitive
  transition-era lists and comparison table, resolves candidate red text to
  standard black, removes bold from bullets, uses `per month`, removes FAQ
  placeholder subsections, and does not introduce cumulative headers.

## Revision 7 decisions

- The Enterprise feature is `AI-powered business writing at scale` on A
  (`66:69147`), D (`66:69118`) and F
  (`I66:69273;5:304195;5:303450;640:49210`). Each exported card shows visible
  space between the line and its right edge.
- D table `43:57423` and F table `66:69311` use the label-once transforms:
  `Characters (per user/month)`, `File translations (per user/month)`,
  `Glossaries`, and `Entries per glossary`. Their corresponding values are
  bare; `Maximum file size` retains MB units.
- Every textual body value in both tables was explicitly set to Roboto Regular:
  44 nodes in D and 35 nodes in F. Section headers, row labels and column-plan
  headers retain their existing weights.
- A row-by-row sweep found no additional value that repeated its row label’s
  noun or a per-user qualifier. No extra row beyond the rule-16 transforms
  required stripping.
- `pricing-bundle-tabs.png` remains the shipped three-tab bundle-rollout
  artifact. D (toggle on) and F (toggle off) remain the polished later internal
  simplification direction.

### Override vs. detach record

Existing structures were reused wherever instance overrides worked. The
smallest affected nested instances were detached only when required to widen a
feature line or restore price-slot rhythm:

- D feature frames/text: `66:69091` / `66:69094`, `66:69097` / `66:69100`,
  `66:69103` / `66:69106`, `66:69109` / `66:69112`, and `66:69115` /
  `66:69118`.
- A card/list instances: `66:69126`, `66:69132`, `66:69138`, and `66:69144`;
  Enterprise long feature text is `66:69147`.
- B Free feature instance/text: `66:69154` / `66:69157`; Free and Business
  pricing wrappers: `66:69161` and `66:69183`.

The exhibit-root export node IDs in the inventory did not change.
Revision 7 used text overrides and typography changes only; no additional
instance was detached.

## Export verification — actual final PNGs

Every affected Revision 7 PNG was opened from disk after export. Each A, D and
F result below refers to the actual final file in this folder, not to the live
Figma canvas or a superseded attempt. B, C and E carry their approved Revision
6 results and were not re-exported. `PASS` means the check was visually
inspected at readable crop/zoom; affected-file edges were also confirmed by a
pixel-level strip audit.

| Final PNG | Top edge / framing | All four edges | Every card / list | Style checks | Attested price blocks | CTA baselines / banners | Table / long-page checks |
|---|---|---|---|---|---|---|---|
| `pricing-bundle-era-clean.png` | **PASS** — clean full-page top | **PASS** — no dark bands | **PASS** — all four cards; no wrapped feature/audience rows | **PASS** — regular bullets; no feature `per user`; semibold headers | **PASS** — historical prices and three discount badges present | **PASS** — shared CTA baseline; full-page account banner retained as required | **PASS** — table has no red text; plan headers/CTAs align; only real FAQ content remains; footer is one line |
| `pricing-translator-cumulative.png` | **PASS** — product tabs present; account nav absent | **PASS** — no dark bands | **PASS** — four cumulative cards; all lines visible and unwrapped | **PASS** — regular bullets; `per month`; semibold headers | **PASS** — €7.49 / €24.99 / €49.99 / Enterprise sales block | **PASS** — shared baseline; blue banner absent | N/A |
| `pricing-write-addon-clean.png` | **PASS** — product tabs present; account nav absent | **PASS** — no dark bands | **PASS** — Free, Pro, Business; all lines visible and unwrapped | **PASS** — regular bullets; `per month`; semibold headers | **PASS** — €0 / €10 / `Let's talk` | **PASS** — shared baseline; no Free CTA; blue banner absent | N/A |
| `pricing-voice-clean.png` | **PASS** — product tabs present; account nav absent | **PASS** — no dark bands | **PASS** — Meetings and Conversations; all lines visible and unwrapped | **PASS** — regular bullets; authorized shorter line used | **PASS** — both sales blocks present | **PASS** — both `Contact Sales` buttons share a baseline | N/A |
| `pricing-api-clean.png` | **PASS** — product tabs present; account nav absent | **PASS** — no dark bands | **PASS** — Free, Pro, Business; all lines visible and unwrapped | **PASS** — regular bullets; `per month`; semibold headers | **PASS** — €0 / €4.99 + usage text / custom pricing | **PASS** — shared baseline; blue banner absent | N/A |
| `pricing-translator-transition-clean.png` | **PASS** — clean full-page top; account nav retained | **PASS** — no dark bands | **PASS** — four full repetitive card lists; no wrapped feature/audience rows | **PASS** — regular bullets; `per month`; no candidate-red text; no cumulative headers | **PASS** — €7.49 / €24.99 / €49.99 / Enterprise sales block | **PASS** — shared card CTA baseline | **PASS** — toggle off; annual label complete; comparison table recolored; FAQ placeholders absent; footer clean |

### Revision 7 re-export checks

| Final PNG | Enterprise string and breathing room | Table values | Label-once rows | Pixel verification |
|---|---|---|---|---|
| `pricing-translator-cumulative.png` | **PASS** — approved string; clear right margin | N/A | N/A | **PASS** — 3024 × 2392; all edges clean |
| `pricing-bundle-era-clean.png` | **PASS** — approved string; clear right margin | **PASS** — every textual body value regular | **PASS** — both character rows, file translations, file size, glossaries and entries | **PASS** — 3024 × 15231; all edges clean |
| `pricing-translator-transition-clean.png` | **PASS** — approved string; clear right margin | **PASS** — every textual body value regular | **PASS** — characters, file translations, file size, glossaries and entries | **PASS** — 3024 × 14159; all edges clean |

The 4-pixel outer strip of every edge in all three Revision 7 PNGs contains
`0%` pixels below RGB luminance 50. This supplements the visual inspection and
confirms that the earlier dark border bands did not return.

## Revision 6 second QA and repository handoff

On 2026-07-24, all six final PNGs were reopened for a second independent local
QA pass. The pass rechecked every card, both full-page tables and FAQ/footer
regions, all four outer edges, Revision 6 typography and wrapping rules,
attested prices, discount badges, CTA alignment, banners, and Cluster F's
toggle and repetitive-list treatment.

One apparent Cluster F label ambiguity caused by a scaled inspection crop was
resolved at native resolution and against the live node: the card and table
label is `Starter`, as specified. No export required another repair.

All six PNGs decoded successfully at the exact 2x dimensions in the inventory.
The 4-pixel edge audit again found `0%` pixels below RGB luminance 50 on every
edge, and `git diff --check` passed. Mason then explicitly authorized committing
and pushing the export-folder deliverables to `main`. The `.figwright/` local
QA scratch folder is not a deliverable and is excluded from the commit.

No `site/` files were touched. No Figma publishing, sharing, or access changes
were made. At that Revision 6 handoff, Mason's Linux QA remained the gate
before any site integration.

## Revision 7 handoff status

The SHA-256 hashes of the approved B, C and E exports and
`pricing-bundle-tabs.png` match their pre-pass hashes; those four files were
not changed. Only A, D and F were re-exported.

### Independent peer QA

On 2026-07-24, an independent read-only peer-QA pass returned **PASS with no
findings at any severity and no unverified items**:

- A decoded at 3024 × 2392. The Enterprise line is exactly
  `AI-powered business writing at scale`, remains on one line with substantial
  right-edge breathing room, and all cards and edges are clean.
- D decoded at 3024 × 15231. All 44 visible textual comparison-table values
  are Roboto Regular; row labels remain Regular and section headers remain
  SemiBold. The cards, complete table, FAQ, footer, framing, and bottom edge
  passed.
- F decoded at 3024 × 14159. All 35 visible textual comparison-table values
  are Roboto Regular; row labels remain Regular and section headers remain
  SemiBold. The cards, complete table, FAQ, footer, framing, and bottom edge
  passed.
- D and F both show `Glossaries` as `1 / 1 / 2,000 / 2,000`, `Entries per
  glossary` as `10 / Unlimited / Unlimited / Unlimited`, `File translations
  (per user/month)` as `3 / 5 / 20 / 100`, bare character values including
  `1 million`, and regular-weight file-size values
  `5 MB / 10 MB / 20 MB / 30 MB`.
- No table value repeats a glossary, entry, file-translation, or character
  noun or a `per user` qualifier. Read-only Figwright inspection confirmed
  table nodes `43:57423` and `66:69311`.
- All twelve 4-pixel edge strips contained zero pixels below luminance 50.
  No candidate-red body copy was found; red raster pixels in D and F occur
  only in the expected customer-logo strip.
- Revision 7-to-Revision 6 pixel differences are confined to the Enterprise
  line and intended table-row bands. FAQ, footer, framing, and unrelated cards
  are pixel-identical.

The peer-QA pass made no file changes. Mason then explicitly authorized
updating the relevant documentation and committing and pushing the Revision 7
export-folder deliverables to `main`. No `site/` file was touched, and no Figma
publishing, sharing, or access change was made.
