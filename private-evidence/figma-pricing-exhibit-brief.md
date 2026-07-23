# Figma work brief: pricing evolution exhibits

**Created:** 2026-07-23
**For:** Codex GPT 5.6 Sol, operating Figma through Figwright in Mason's
logged-in Figma Desktop session
**Authorized by:** Mason, for this task only
**Private document. Never copy its contents into public routes or assets.**

## Objective

Produce the visual exhibits for the reworked portfolio case at `/work/write-pro-launch`
(pricing evolution: bundles → Write as add-on → Voice). The work has two parts:

1. Export unmodified "before" evidence frames.
2. Build three cleaned exhibit frames (duplicates only) that finish the
   work-in-progress content and apply the cumulative "Everything in X, plus"
   feature pattern, then export them.

The cleaned exhibits are **portfolio reconstructions**. They will be labeled as
such on the portfolio site. They must never be created by editing the original
frames.

## Hard safety rules

- Use Figwright, the authorized non-official Figma MCP server, through Mason's
  logged-in Figma Desktop session. Its required local bridge is allowed. Do not
  use Figma's official native MCP server, `use_figma`, a direct Figma API, any
  unrelated plugin, Playwright, or another browser for edits or exports.
- Never modify, move, rename, hide, or restyle any original frame, section,
  sticky note, or annotation. All edits happen inside newly duplicated frames
  in a new section (see Setup).
- Never run page-wide Tidy Up, Auto Layout, auto-distribute, or whole-page
  selection.
- Keep one Figma tab open and work on one cluster at a time.
- Create a named version checkpoint (File > Show version history > Save to
  version history, or the quick action) before the first edit and after each
  cluster. Checkpoint names are specified per cluster below.
- Create a local `design_diff` checkpoint before the first edit and after each
  cluster. This supplements rather than replaces the named Figma checkpoint. If
  Figwright cannot create a named Figma checkpoint, Mason must create it
  manually before work continues.
- After each bounded change: wait for the save state to settle, navigate away
  and back, and inspect at overview and readable zoom for overlap, clipping,
  or hidden content. If save state is uncertain, stop and recover from the
  last checkpoint. Never guess what Figma saved.
- Do not take screenshots or recordings of anything except the specified frame
  exports.

## File and node inventory

File: `https://www.figma.com/design/fdxAxs14RUKijGsznWusF3/Pricing-Grid`

| Node | Name | What it is |
|---|---|---|
| `2:1930` | `pricing-grid` | 1920px three-tab header frame (Translator / Translator + Write / API) |
| `3:2782` | Section `Translate Tab` | Translator-only grids: `1440px` frames `3:2783`, `3:3018`, `3:3253`; `1920px` frame `3:3488`; smaller breakpoints |
| `3:4695` | Section `Bundle Tab` | Bundle-era grids (Starter/Advanced/Ultimate + Write Pro): `1440px` frame `3:4696`, `1920px` frame `3:4905` |
| `3:18928` | Section `Best/Cleanest Layout` | Full pages: `1512px / Translator` `3:18929`, `/ Write` `3:19088`, `/ Voice` `3:19272`, `/ API` `3:19446` |
| `12:13229` | Section `Pages` | Same four full pages: `12:13230`, `12:13389`, `12:13573`, `12:13747` |
| `13:17285` | Section `Pro Subscribers` | Add-on-era pages: `Pro on Translate` `13:17289`, `Pro on Write` `13:17485`, `Pro on Voice` `13:17681` and `13:17852` |

Known trap: the two frames named `Pro on Voice` (`13:17681`, `13:17852`) are not
both Voice. One shows the DeepL API page (hero "Scale multilingual workflows
with the DeepL API"). The correct Voice frame has the hero "Real-time voice
translations for global collaboration" with the DeepL Voice tab active and two
cards: DeepL Voice for Meetings and DeepL Voice for Conversations. Verify by
content before duplicating or exporting.

To open a node directly, append `?node-id=<id with dash>` to the file URL,
e.g. `...Pricing-Grid?node-id=13-17485`.

## Reference screenshots

Mason's screenshots in `~/Projects/Mason Portfolio/figma screenshots/` show the
expected content of each source frame:

- `1440px.png` (1440x1890) = the Translator grid used as the Cluster A base.
  Identify which of `3:2783`, `3:3018`, `3:3253` matches it exactly: blue
  account banner "Want to change your plan? Visit your account page" at top,
  five columns Free / Starter / Advanced (RECOMMENDED) / Ultimate / Enterprise,
  no red text anywhere in the frame.
- `Pro on Write.png` = source frame `13:17485` for Cluster B.
- `Pro on Voice (2).png` = the true Voice frame for Cluster C.
- `1920px.png` = Bundle Tab `1920px` frame `3:4905` (bundle cards with the
  three-tab "Find your perfect plan" header).

## Setup (before any edit)

1. Open the file. Save a version checkpoint named
   `Portfolio exhibits 2026-07 — pre-edit baseline`.
2. Create a new **section** on Page 1 in empty canvas space, well clear of all
   existing sections. Name it `Portfolio exhibits 2026-07`.
3. Duplicate these frames (copy/paste, never drag the originals) into the new
   section, spaced roughly 200px apart:
   - The identified Translator `1440px` frame → rename duplicate to
     `EXHIBIT — Translator cumulative (portfolio reconstruction)`
   - `Pro on Write` `13:17485` → rename duplicate to
     `EXHIBIT — Write add-on cleaned (portfolio reconstruction)`
   - The true Voice frame → rename duplicate to
     `EXHIBIT — Voice cleaned (portfolio reconstruction)`
4. Confirm the originals are unchanged (position, name, content), then save a
   checkpoint named `Portfolio exhibits 2026-07 — duplicates created`.

All edits below happen **only inside these three renamed duplicates**. If a
change requires overriding a component instance and the override is not
possible, detach the instance inside the duplicate only.

## Styling conventions (all clusters)

- Sentence case everywhere. No periods on short list items.
- Feature lines keep the existing pattern: green check icon, leading key word
  or number in bold, rest regular (e.g. "**Unlimited** text translation*",
  "**20 editable file translations** per user/month in total").
- New list-header lines ("What's included:", "Everything in Free, plus:" etc.):
  create them by duplicating an existing feature-line text layer inside the
  same card, removing the check icon, and setting the whole line semibold in
  the standard dark text color, ending with a colon. Match the card's existing
  font family and size. Place directly above the feature list with the list's
  existing vertical rhythm.
- "Resolve red text" means: set the text layer to the same fill color and
  weight as the equivalent finalized lines in the same card, applying the
  exact replacement wording given below. Do not leave any red (proposal) text
  in an exhibit frame.
- When deleting a feature row, delete the whole row (check icon + text +
  tooltip icon if present), and let the card's auto layout close the gap. If
  the card is not auto layout, move the remaining rows up to preserve the
  original spacing.

## Cluster A — Translator grid, cumulative tiers

Base: duplicate of the Translator `1440px` frame.
Checkpoint after finishing: `Portfolio exhibits 2026-07 — cluster A done`.

Keep unchanged: banner, card titles, prices (€0 / €7.49 / €24.99 / €49.99 —
these are real historical prices), billing lines, buttons, RECOMMENDED badge,
trial notes, the "Find the plan for you" comparison section below the cards,
and all tooltip icons on rows that remain.

Edit only the five cards' feature lists:

**Free** — add header `What's included:` above the list. Keep all four lines
unchanged:
- **Limited** text translation
- **3 non-editable file translations** per month
- Upload files up to **5 MB** in size
- **1 glossary** with up to **10 entries**

**Starter** — add header `Everything in Free, plus:`. Keep all six lines
unchanged (every line is a genuine delta over Free):
- **Maximum** data security
- **Unlimited** text translation*
- **5 editable file translations** per user/month in total
- Upload files up to **10 MB** in size
- **1 glossary** with **5,000 entries**
- Team administration

**Advanced** — add header `Everything in Starter, plus:`. Delete these three
rows (they repeat Starter): "Maximum data security", "Unlimited text
translation*", "Team administration". Keep, in this order:
- **20 editable file translations** per user/month in total
- Upload files up to **20 MB** in size
- **2,000 glossaries** with **5,000 entries** each, shared with your team
- Single sign-on (SSO)
- CAT tool integration

**Ultimate** — add header `Everything in Advanced, plus:`. Delete every row
except these two:
- **100 editable file translations** per user/month in total
- Upload files up to **30 MB** in size

**Enterprise** — add header `Tailor to your enterprise needs:`. Keep all five
lines and the "Connect with your account executive to learn more" footer
unchanged.

After editing, confirm the five cards still align cleanly at the top and that
shortened cards (Advanced, Ultimate) do not leave stray dividers or floating
icons.

## Cluster B — Write add-on page, cleaned

Base: duplicate of `Pro on Write` `13:17485`.
Checkpoint after finishing: `Portfolio exhibits 2026-07 — cluster B done`.

Keep unchanged: hero ("Write faster, better, and with total security"), the
four value-prop chips, the product tab bar, the account banner ("Want to add
DeepL Write Pro to your subscription? Visit your account page"), the currency
selector, card titles, the Recommended badge, and the social-proof strip below
the cards.

Per-card edits:

**All three cards** — delete the placeholder price block: the `€49.99` line
and the `per user/month, billed annually *` line. (Real prices for this stage
are unknown; the portfolio caption will say prices were unset in the working
file.)

**Free card**
- Replace the lorem ipsum description line ("Plan description: Lorem ipsum sed
  edit oppugnamus magister puer romanus.") with:
  `Basic writing improvements for occasional use`
- Keep the `1 user only` audience row unchanged.
- Add header `What's included:` above the feature list.
- Replace the feature line `Limited text translation` (a Translator feature
  left on the Write page by mistake) with:
  `**Limited** text improvements` (bold "Limited", matching the line style).

**Write Pro card**
- Replace the lorem ipsum description with:
  `Unlimited writing improvements with maximum data security`
- Resolve the red audience row `For individuals and teams` to the standard
  styling used by `1 user only` on the Free card (same wording, black).
- Add header `Everything in Free, plus:` above the feature list.
- Keep these five lines unchanged:
  - **Maximum** data security
  - **Unlimited** text improvements
  - **Unlimited** use of alternatives
  - **Unlimited** use of writing styles
  - **Unlimited** use of writing tones
- Delete the red placeholder row `Terms to never edit` entirely.

**Write Pro for Business card**
- Replace the lorem ipsum description with:
  `Write Pro with centralized administration for larger organizations`
- Resolve the red audience row `Available from 50 users` to standard styling
  (same wording, black).
- Add header `Everything in Write Pro, plus:` above the feature list.
- Delete these rows (they repeat Write Pro): "Maximum data security",
  "Unlimited text improvements", "Unlimited use of alternatives", "Unlimited
  use of writing styles", "Unlimited use of writing tones", and the red
  `Terms to never edit` row. Keep only:
  - Team administration
  - Single sign-on (SSO)

## Cluster C — Voice page, cleaned

Base: duplicate of the true Voice frame (see the trap note above).
Checkpoint after finishing: `Portfolio exhibits 2026-07 — cluster C done`.

Keep unchanged: hero ("Real-time voice translations for global collaboration"),
value-prop chips, tab bar, both card illustrations, card titles, both product
descriptions (they are real copy, not lorem), the Contact Sales buttons, and
the Play video links. Do not add cumulative headers here — Meetings and
Conversations are parallel products, not tiers.

**Both cards** — delete the placeholder price block: the `€49.99` line and the
`per user/month, billed annually *` line. Contact Sales carries the commercial
action.

**DeepL Voice for Meetings** — resolve the four red rows to standard styling
with this wording:
- `Unlimited real-time translated captions` (wording unchanged)
- `Unlimited instant voice translation` (wording unchanged)
- `Works with team members and guests` (drop "both")
- `Available in 30+ languages` (replace "Available in over 30 languages and
  counting")

Keep the black rows unchanged: "Maximum data security", "Single sign-on
(SSO)", "Native Microsoft Teams integration".

**DeepL Voice for Conversations** — resolve the red rows to standard styling
with this wording:
- `Unlimited hours of real-time AI voice translation` (wording unchanged)
- `Live on-screen translation for one-on-one conversations` (hyphenate
  "on-screen", singular "translation")
- `Available on iOS and Android` (wording unchanged)

Keep the black rows unchanged: "Maximum data security", "Single sign-on (SSO)".

## Exports

Destination folder (create it):
`/home/mason/Projects/Mason Portfolio/private-evidence/figma-exports-pricing-2026-07/`

Export every item as PNG at **2x**, selecting the exact frame node (never the
canvas or section). No canvas headings, notes, selection borders, or
neighboring frames may appear in the export. Verify each file's pixel size is
exactly twice the frame size before moving on.

Before-evidence exports (from the **unmodified originals**):

| File | Source |
|---|---|
| `pricing-bundle-tabs.png` | Bundle Tab `1920px` frame `3:4905` (verify it matches `1920px.png`) |
| `pricing-write-addon-wip.png` | `Pro on Write` `13:17485`, as is (lorem ipsum and red text included) |
| `pricing-voice-wip.png` | The true Voice frame, as is |
| `pricing-comparison-table-bundle.png` | The comparison-table child frame inside Bundle Tab `1440px` frame `3:4696` (the "Find the plan for you" table). Select the table's own frame in the layer tree and export that node. |

Exhibit exports (from the finished duplicates):

| File | Source |
|---|---|
| `pricing-translator-cumulative.png` | Cluster A exhibit frame |
| `pricing-write-addon-clean.png` | Cluster B exhibit frame |
| `pricing-voice-clean.png` | Cluster C exhibit frame |

## Completion log

Create `export-log.md` in the destination folder recording:

- The node ID identified for the Cluster A base (which `1440px` frame) and for
  the true Voice frame.
- The node IDs of the three new exhibit frames and the section.
- Each version checkpoint name and when it was saved.
- Each local `design_diff` checkpoint and its corresponding cluster.
- Each exported file with its pixel dimensions and source node ID.
- Any override-vs-detach decisions made inside the duplicates.
- Anything that could not be completed exactly as specified, stated plainly.

Do not touch `site/`, do not commit anything, and do not publish, share, or
change access on the Figma file.
