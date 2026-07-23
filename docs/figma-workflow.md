# Figma evidence and export workflow

Load this reference only for Figma inspection, evidence classification, export,
recovery, or an explicitly authorized Figma edit. The repository-root
`AGENTS.md` owns permissions and privacy.

## Access and source safety

- Use Mason's logged-in Chrome profile through the Chrome-control workflow when
  accessing Figma directly.
- Non-official Figma MCP servers and their required local desktop or plugin
  bridges are allowed. Never use Figma's official native MCP server,
  `use_figma`, a direct API, an unrelated plugin, Playwright, or another browser.
- MCP access does not authorize a Figma write. The same read-only default and
  explicit edit approval below apply to every permitted access route.
- Keep one Figma tab open. Work on one file and one bounded cluster at a time.
- Figma remains read-only unless Mason explicitly authorizes an edit in the
  current task.

## Evidence classification

- Classify frame-level evidence by actual product and behavior, never by page or
  file name alone.
- Red text in Mason's DeepL working files is his authored candidate copy, not
  disposable WIP. Adopt it by default in refined exhibits, restyled to standard
  colors; never discard content merely because it is red.
- Inventory the selected source cluster before moving or classifying it. Record
  its source file, page and node URL, theme/lifecycle evidence, editability,
  destination, duplicate relationship, portfolio value, evidence links, and
  export suitability.
- Give each cluster one disposition: editable canonical work, editable variant,
  link-only duplicate, reference-only evidence, or deferred/ambiguous evidence.
- Do not delete a suspected duplicate until source, destination, visual
  equivalence, editability, and intended disposition are recorded.

## Achievement crosswalk

- Search in both directions: each relevant achievement for supporting or
  contradicting Figma evidence, and each relevant Figma cluster for related
  recovered achievements.
- Record exact achievement ID, evidence level, source reference, Figma file,
  page, frame or cluster, node ID/URL, and relationship type when available.
- Classify relationships as direct, correlated, contextual, conflicting,
  recovery-only, Figma-only, or unresolved. Record unmatched items on both sides.
- Update the private crosswalk when canonical destinations or node URLs change.

## Layout and performance for authorized edits

- Prefer compact, purpose-specific files and pages. Split before a file becomes
  slow or difficult to scan; do not preserve a monolith because an old plan named
  a fixed number of files.
- Keep useful content near the canvas origin and related screens close enough to
  read as a journey. Avoid detached islands and widely dispersed work.
- Use roughly 100-120px between related screens, 200px section padding, and
  500-600px only between separate sections.
- Never run page-wide Tidy Up, Auto Layout, auto-distribute, or whole-page
  selection.
- Inspect distant, locked, hidden, obscured, and apparently empty top-level
  objects before declaring evidence absent or duplicated.

## Save and recovery loop for authorized edits

For each coherent cluster:

1. Make one bounded change through Chrome.
2. Wait for Figma's save state to settle.
3. Navigate away and back.
4. Check overview and readable zoom levels and inspect the layer tree.
5. Confirm no overlap, clipping, hidden content, detached island, or title/content
   mismatch.
6. Create a named version checkpoint before the next risky cluster.

If save state is uncertain or the page remains unresponsive, stop writing and
recover from the last known checkpoint. Resume only with a smaller file or batch.
Never guess what Figma saved.

## Export

- Obtain a fresh export from the exact requested frame or cluster. Reusing an
  older asset or similar frame does not implement a requested visual change.
- Export the product frame itself at 2x or 3x, not the canvas. Exclude headings,
  notes, comments, selection borders, and neighboring frames.
- Keep portfolio annotations outside the exportable frame and use matching
  viewport, scale, and aspect ratio for comparisons.
- Exhibits presented as a set must share one design generation, viewport, and
  treatment (navigation, crop). Never export clipped or truncated frames as
  evidence.
- Verify the export against the exact source before changing the site.
- Do not create screenshots, recordings, PDFs, or visual-diff artifacts unless
  Mason requested that exact deliverable.

## Completion

Do not claim completion while a required provenance, editability, mapping,
navigation, load, save-state, or export check is unverified.
Record the exact source/destination URLs, disposition, evidence relationship,
checkpoint or export result, and any unresolved evidence in the existing
private owner for the task.
