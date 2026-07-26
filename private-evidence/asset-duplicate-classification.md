# Exact duplicate classification

Last audited: 2026-07-26

This is the current classification owner for byte-identical files in the live
repository. The audit covers repository files while excluding `.git`, runtime
mounts, ignored scratch space, dependencies, and generated build output.
SHA-256 comparison found 15 groups containing 31 files.

No file in this review is approved for deletion. A matching hash proves only
that bytes are identical; it does not make the files interchangeable or make
either location the ultimate source of truth.

## Categories

- **Intentional copy** — one retained private source and one required public
  delivery copy.
- **Source-internal duplicate** — repeated source material whose separate
  location or filename preserves the source batch or design context.
- **Superseded history** — an archive copy preserves a retired public state
  while an identical active private copy supplies current provenance.
- **Archive-cleanup candidate** — safe to consider for later removal only after
  a separate review and explicit approval.

The current audit has no archive-cleanup candidates.

## Intentional copies

### `12b113801ffe48008b05b81e8b0acd1fbe989f13b8d12bb1b083259fcba6cd4c`

- `private-evidence/source-exports/public-product-pages/illustrations/deepl-retail-ecommerce.svg`
- `site/public/work/home-covers/deepl-retail-ecommerce.svg`

Disposition: preserve the private source and public homepage copy.

### `5c792e74abd7eebed4aa61e242fb68ed2194a40e2bc74e4d07c76956dff50b07`

- `private-evidence/source-documents/mason-cv.pdf`
- `site/public/mason-cv.pdf`

Disposition: preserve the private source document and public download copy.

### `d261736f273ecb4875baa90ad716e46e8a13fd142f337cbe6f4374039bf64c61`

- `private-evidence/source-exports/publications/localization-report/report-cover.png`
- `site/public/work/report-campaign/report-cover.png`

Disposition: preserve the private publication source and public case-study
copy.

## Source-internal duplicates

### `0463a43d02636d9aeb7f4291740797ae9d11b281948748470181746e8d0236d7`

- `private-evidence/source-exports/figma/team-administration/add-manage-users/raw/groups-11.png`
- `private-evidence/source-exports/figma/team-administration/add-manage-users/raw/groups-12.png`

Disposition: preserve both raw source-batch filenames.

### `171433373fdcd68be2c0af8e3eaf3a7ca745483363d89c23db8c3903c74d236c`

- `private-evidence/source-exports/figma/team-administration/add-manage-users/raw/users-14.png`
- `private-evidence/source-exports/figma/team-administration/add-manage-users/raw/users-15.png`
- `private-evidence/source-exports/figma/team-administration/add-manage-users/raw/users-16.png`

Disposition: preserve all three raw source-batch filenames.

### `68c17b4a58390487f4ad33e93a771d3fc9ef93aaa1bc84fd9152d6f2094da1e0`

- `private-evidence/source-exports/figma/team-administration/add-manage-users/process-notes/User Cards-23.png`
- `private-evidence/source-exports/figma/team-administration/add-manage-users/process-notes/User Cards-4.png`

Disposition: preserve both process-note positions.

### `e0e0a9b8d171f9196a6397e268f9b4f6f14e627f4372506dfef0b6ab30b1f1e4`

- `private-evidence/source-exports/figma/team-administration/custom-logo/Frame 427322349.png`
- `private-evidence/source-exports/figma/team-administration/custom-logo/Frame 427322351.png`

Disposition: preserve both frame-identified source exports.

## Superseded history

Each group below keeps an archived retired-public copy and an identical active
private source. The archive copy remains historical evidence; the private copy
is the only path eligible to serve as active manifest provenance.

### `20d8b250c78715afaaaab1b5b3f4075b29d720eecb1aa0718217ced6664204c2`

- `archive/retired/public-assets/2026-07-25/work/pricing-evolution/pricing-translator-transition-grid.png`
- `private-evidence/source-exports/figma/pricing-evolution/site-display/pricing-translator-transition-grid.png`

### `27aa96e69d50848228d328382d3cd9de78052e3044f9b30921d7305f4fc861c8`

- `archive/retired/public-assets/2026-07-25/work/pricing-evolution/pricing-write-pro.png`
- `private-evidence/source-exports/figma/write-pro-launch/pricing-write-pro-2x.png`

### `2de075cc95acfd49f0bf47a444a2a2203714d1e5886bff61673fedda494c7aa9`

- `archive/retired/public-assets/2026-07-25/work/pricing-evolution/pricing-translator-cumulative.png`
- `private-evidence/source-exports/figma/pricing-evolution/pricing-translator-cumulative.png`

### `6c3e5efba8f9bfa0eb1a649341b5ed638fc09900c681566e7ce05e6fe22bbbe6`

- `archive/retired/public-assets/2026-07-25/work/pricing-evolution/pricing-bundle-tabs.png`
- `private-evidence/source-exports/figma/pricing-evolution/pricing-bundle-tabs.png`

### `879fae09f6b0a7b94638b02e072afff3079dd8bc148a5e8066f4cf576927578a`

- `archive/retired/public-assets/2026-07-25/work/pricing-evolution/pricing-bundle-era-grid.png`
- `private-evidence/source-exports/figma/pricing-evolution/site-display/pricing-bundle-era-grid.png`

### `d68405c08e79136a5979308cab6f75e516fbff3c190cbf3f7d48b9a2a90d3dc9`

- `archive/retired/public-assets/2026-07-25/work/pricing-evolution/pricing-api-clean.png`
- `private-evidence/source-exports/figma/pricing-evolution/pricing-api-clean.png`

### `dd0e4492250f8738a1ee121e3aa8a137ca4444c1b9b2960b3ce072b3a396fe46`

- `archive/retired/public-assets/2026-07-25/work/pricing-evolution/pricing-write-addon-clean.png`
- `private-evidence/source-exports/figma/pricing-evolution/pricing-write-addon-clean.png`

### `ff9c9bec6ac401c0a6d34837f8351dbe41de107c7db3acfa41ddae246e2038a9`

- `archive/retired/public-assets/2026-07-25/work/pricing-evolution/pricing-voice-clean.png`
- `private-evidence/source-exports/figma/pricing-evolution/pricing-voice-clean.png`

Disposition for all eight groups: preserve both copies. Reconsider archive
cleanup only through a separate, explicitly approved review.
