# DeepL evidence batches — 2026-07-28

Private flattened Figma exports retained as source material. These files are
not selected public portfolio assets.

## Contents

- `case-evidence/` — Checkout simplification, state-aware upgrade prompts, and
  sign-up pressure.
- `iam/` — original IAM flows, Mason's copy-suggestion flows, paired copy
  components, and archive states.
- `ate/` — account and team administration flows covering user management,
  groups, invitations, deletion, SSO, KMS, custom URLs, and custom logos.
- [`manifest.json`](manifest.json) — SHA-256 inventory linking every original
  ZIP member to its stored image.

## Variant preservation and exact-byte repeats

The three source ZIPs contained 529 PNG members. This package preserves every
copy-different and visually distinct frame. It stores 470 image binaries and
maps 59 repeated members that were byte-for-byte identical to the same stored
binary:

| Batch | ZIP members | Unique images | Exact duplicates omitted |
| --- | ---: | ---: | ---: |
| Case evidence | 191 | 171 | 20 |
| IAM | 98 | 90 | 8 |
| ATE | 240 | 209 | 31 |
| **Total** | **529** | **470** | **59** |

No filename, visual similarity, layout similarity, or inferred relationship was
used to merge frames. Two files share a stored binary only when their SHA-256
hashes match, which means their complete bytes—including all visible copy—are
identical. Every original member path remains in `manifest.json` under the
stored image's `source_members` list. There were no exact-byte repeats across
the three batches and no exact matches with the repository's pre-existing
private Figma source exports at import time.

The ZIP archives remain in `~/Downloads/`. They were not copied because the
repository retains direct images and ignores Figma ZIP archives.

## Use boundary

The folder structure preserves the source groupings without treating every
frame as a portfolio candidate. Mason chooses the small set of exhibits used in
each public story. Selected public copies belong under `site/public/` and must
be recorded in the portfolio asset manifest.

Mason confirmed that names, email addresses, and account data visible in these
Figma exports are mock data. Frames may still be cropped or excluded when test
data, placeholders, internal notes, or unfinished states weaken presentation
quality.
