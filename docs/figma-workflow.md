# Figma evidence and export workflow

Load this reference only for Figma inspection, evidence classification, export,
recovery, or an explicitly authorized Figma edit. The repository-root
`AGENTS.md` owns permissions and privacy.

## Access and source safety

- Use Mason's logged-in Chrome profile through the Chrome-control workflow.
- Never use Figma MCP, `use_figma`, an API, plugin, Playwright, another browser,
  or programmatic canvas manipulation.
- Keep one Figma tab open. Work on one file and one bounded cluster at a time.
- Restored source files are immutable provenance archives. Do not rename pages,
  move nodes, change visibility, delete, annotate, or reorganize them.
- Figma remains read-only unless Mason explicitly authorizes an edit in the
  current task. Authorized edits belong only in the named working duplicate or
  new canonical file.

## Evidence classification

- Classify frame-level evidence by actual product and behavior, never by page or
  file name alone.
- A screenshot, flattened image, PDF, or exported frame may be historical or
  current evidence. It is never proof of editable active design work, WIP, or an
  improvement.
- Do not infer Current, Approved, Shipped, Ready for development, or another
  lifecycle state without direct evidence.
- Inventory the selected source cluster before moving or classifying it. Record
  its source file, page and node URL, theme/lifecycle evidence, editability,
  destination, duplicate relationship, portfolio value, evidence links,
  confidentiality risk, and export suitability.
- Give each cluster one disposition: editable canonical work, editable variant,
  link-only duplicate, reference-only evidence, deferred/ambiguous evidence, or
  private-only evidence.
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
- Keep artifact/state, contribution/role, lifecycle, and outcome/metric support
  separate. Neither source automatically proves the other dimensions.
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
  notes, comments, selection borders, neighboring frames, and private data.
- Keep portfolio annotations outside the exportable frame and use matching
  viewport, scale, and aspect ratio for comparisons.
- Verify the export against the exact source before changing the site.
- Do not create screenshots, recordings, PDFs, or visual-diff artifacts unless
  Mason requested that exact deliverable.

## Completion

Do not claim completion while a required provenance, editability, mapping,
navigation, load, save-state, confidentiality, or export check is unverified.
Record the exact source/destination URLs, disposition, evidence relationship,
claim ceiling, checkpoint or export result, and any unresolved evidence in the
existing private owner for the task.
