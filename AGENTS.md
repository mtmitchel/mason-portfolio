# Mason Portfolio repository instructions

This directory is the Git and instruction root. The global Codex instructions
apply first. This file owns repository-wide routing, evidence safety,
permissions, and completion. [`site/AGENTS.md`](site/AGENTS.md) adds rules for
the application.

## Canonical structure

- [`site/`](site/) is the only deployable portfolio application.
- [`private-evidence/deepl-portfolio-current-direction.md`](private-evidence/deepl-portfolio-current-direction.md)
  records the current public direction, including titles, candidate story
  order, writing rules, and homepage choices. Its narrative choices remain
  revisable after explicit user criticism or a failed reader review.
- [`private-evidence/claim-review.md`](private-evidence/claim-review.md) owns
  factual ceilings only. It does not own story structure,
  emphasis, tone, or supported statements of intent and rationale.
- [`private-evidence/portfolio-asset-manifest.json`](private-evidence/portfolio-asset-manifest.json)
  owns selected visual and text-exhibit sources, transformations, exact
  locators, and central-exhibit contracts.
- [`private-evidence/deepl-document-inventory.json`](private-evidence/deepl-document-inventory.json)
  owns the reproducible cross-export source-occurrence record. Its custody,
  origin, privacy, and claim-coverage fields must remain separate.
- [`private-evidence/deepl-document-register.md`](private-evidence/deepl-document-register.md)
  explains how to rebuild and interpret that inventory. It is not a second
  inventory.
- [`private-evidence/deepl-figma-evidence-map.md`](private-evidence/deepl-figma-evidence-map.md)
  owns the achievement-to-Figma crosswalk.
- [`docs/figma-workflow.md`](docs/figma-workflow.md) owns Figma access, edit,
  and export procedure.
- [`archive/`](archive/) contains preserved history only. It is never current
  product, claim, or publication truth, but targeted historical material may
  support chronology, intent, and narrative reconstruction after it is checked
  against current owners.
- `tmp/` is ignored scratch space.

Current disk evidence outranks chat summaries, handovers, transient commit
references, and archived plans.

## Task routing

Read only the owners required by the task:

- Site implementation or review: [`site/AGENTS.md`](site/AGENTS.md), then
  [`site/README.md`](site/README.md).
- Public case framing, structural rewriting, or narrative critique: use
  `build-content-design-portfolio` and `narrative-writer`, then read
  [`private-evidence/deepl-portfolio-current-direction.md`](private-evidence/deepl-portfolio-current-direction.md),
  the relevant section of
  [`private-evidence/claim-review.md`](private-evidence/claim-review.md), and
  only the targeted project or reconstruction evidence needed for the story.
  Do not limit the narrative to the currently selected screenshots or route
  implementation.
- DeepL case selection, story proposals, or factual audits: also use
  `research-deepl-product-intelligence` whenever the work depends on product
  definitions or relationships, terminology, launch history, pricing or
  packaging, audience, adoption, or current product state. Use it again before
  finalizing volatile DeepL claims. It supplies domain context only;
  repository evidence owners govern Mason's role, contribution, lifecycle,
  causation, and outcomes.
- Achievement-to-Figma mapping:
  [`private-evidence/deepl-product-figma-navigation-correction-2026-07-20.md`](private-evidence/deepl-product-figma-navigation-correction-2026-07-20.md),
  the relevant section of
  [`private-evidence/deepl-figma-evidence-map.md`](private-evidence/deepl-figma-evidence-map.md),
  and
  [`private-evidence/deepl-achievement-recovery/README.md`](private-evidence/deepl-achievement-recovery/README.md).
- Figma inspection, export, recovery, or an explicitly approved Figma edit:
  [`docs/figma-workflow.md`](docs/figma-workflow.md) plus the task-specific
  evidence owner.
- Historical material: read one exact archived item only when Mason asks for
  that history, a current owner points to it, or a narrative task needs a
  targeted reconstruction of chronology, intent, or tradeoffs.

Do not scan every private source file by default. Narrow evidence work to the
selected case, claim, frame, or acceptance result.

## Story approval workflow

Use one simple three-stage workflow:

1. **Use the queue as evidence and story material, not as the public outline.**
   Keep one current work queue, which owns the score and tie rules. Its rows
   identify useful components; they do not require one row per case, force the
   highest row to become the next story, or prevent a larger story from
   combining compatible candidates and existing route material around one
   meaningful stake. When Mason has not already chosen a subject, start with
   the strongest unresolved story opportunity and record what artifact exists,
   what Mason contributed, the supported lifecycle, the supported outcome or
   ending, and any material unknown. Do not split this into separate source,
   connection, and claim-gate phases or create a project folder for every
   candidate. The current DeepL queue lives in
   [`private-evidence/deepl-project-candidate-queue.md`](private-evidence/deepl-project-candidate-queue.md).
2. **Show Mason the story before writing it.** Generate one visual proposal or
   infographic in chat for every new full case, mini case, writing page, or
   substantial rebuild. Include the proposed title, one-sentence synopsis, page
   type, beginning-to-ending storyline, proposed images or excerpts, strongest
   supported claims, material unknowns, and what the story will leave out. Do
   not save a proposal file unless Mason asks for one. This gate does not apply
   to candidate ranking, factual corrections, or minor maintenance. Mason may
   approve, revise, or reject the direction. Do not draft portfolio prose or
   implement the route before it is approved.
3. **Write and review.** After Mason approves the visual direction, write the
   case directly in its rendered site route. Create a durable project evidence
   folder only for the approved story and only when its selected sources need
   one. Run the independent hiring-reader review, apply warranted revisions,
   and give Mason the rendered route as his single final qualitative review
   surface. Do not assign separate prose drafts or reader notes for his review.

The visual proposal is a story-selection aid, not a claim owner or a substitute
for Mason's judgment. Its approval does not authorize commit, push, external
publication, deployment, access changes, Figma writes, or destructive action.

## Working rules

- Treat Mason's request as the objective and finish every safe, authorized
  step through focused verification and final diff review.
- Preserve unrelated dirty work.
- Treat external-model and reader feedback as input to evaluate, not material
  to accept or reject automatically. If a recommendation is declined, explain
  the exact factual conflict, reader problem, or implementation cost and why a
  smaller revision would not solve it. Do not dismiss a direction with a label
  or preference alone.
- In review, distinguish a demonstrated defect from a preference. Do not
  recommend a new gate, schema, owner, status, script, test, document, approval
  step, or other ceremony unless it prevents a specific observed failure and a
  simpler deletion, merge, relaxation, or direct fix cannot do so. Prefer
  simplifying or removing machinery; omit speculative "best practice" advice.
- Keep one current source of truth for each decision. Move superseded work into
  the archive instead of leaving active stubs, duplicate instructions, or
  placeholder links.
- Mason selects the exact evidence and source material included in the site.
  Do not add material he has not selected.
- Aggregated business results may appear only at the documented program,
  experiment-wave, or campaign level.
- Do not create screenshots, recordings, PDFs, or visual-diff files unless
  Mason requests that exact artifact.
- Permanent deletion is prohibited. When cleanup is approved, preserve useful
  material in the archive and use the workstation Trash route for disposable
  empty or generated paths.

## Editorial judgment and evidence safety

- A public case must work for a hiring reader. It needs a complete problem,
  pressure or consequence, Mason's role and judgment, meaningful decisions or
  tradeoffs, evidence that advances the story, and an ending that explains
  what changed or what the work demonstrates. An inventory of screens, strings,
  and rules does not meet this bar.
- Build the story from its consequential product or organizational subject, not
  from a candidate row, ticket, chronology, export folder, or the current route.
  The queue provides components and boundaries only. A larger story may combine
  compatible candidates, but “larger” means a stronger central stake—not more
  unrelated scope, more screenshots, or a longer page.
- Make the employer value clear without reducing every contribution to direct
  personal revenue causation. When a measured team or experiment result exists,
  use it at that scope and show Mason's judgment as the contribution behind the
  case. When no metric exists, show the supported product, customer, operational,
  or organizational value of the work.
- Distinguish verified fact, documented account or recollection, intent,
  rationale, reasonable interpretation, and measured outcome. Missing metrics
  or user-testing records prevent validation claims; they do not erase
  supported intent, rationale, contribution, or artifact-level change.
- Claim ceilings qualify or remove unsupported factual assertions. They must
  not force a flat chronology, neutralize the candidate's judgment, or dictate
  sentence rhythm and case structure.
- The working standard is an honest, interview-defensible account, not
  courtroom proof or a complete chain of custody. Use evidence to prevent a
  material falsehood, contradiction, unsupported sole-ownership claim, false
  lifecycle claim, or misattributed result. Do not require an exact
  ticket-to-frame, screenshot-to-variant, or working-file-to-production match
  when the public story does not make that exact identity claim.
- A representative working artifact may illustrate the product area, flow, or
  content problem Mason worked on when his account and the surrounding record
  support that relationship and no material conflict makes the illustration
  misleading. Describe it according to what it is. Require exact linkage only
  before calling a visible artifact the tested, winning, approved, shipped, or
  production state.
- Mason is the primary source for his own role, participation, contribution,
  intent, rationale, and recollection. His explicit current account is valid
  contribution evidence and outranks an absence of contributor metadata,
  older reconstruction language, and automated extraction limits.
- For recovered DeepL material that Mason identifies as work he participated
  in, treat his collaborative involvement as established. Use the surrounding
  project record and artifacts to infer a reasonable, interview-defensible
  scope. Lack of independent corroboration alone must never downgrade, omit,
  hold, or exclude an experience, and it must never be used as a portfolio
  selection criterion. Mason decides whether the resulting account overreaches
  what he can defend in an interview.
- State supported collaborative contribution in normal public prose. Do not
  expose a provenance argument or qualify it as merely "Mason says." An
  AI-assisted workshop output is a collaborative working artifact when Mason's
  account and the project context connect him to it. Do not erase his
  conception, direction, selection, editing, or application merely because a
  tool generated some wording.
- Keep the remaining dimensions separate. Mason's account of participation
  does not make every visible string his verbatim prose, turn collaboration
  into sole ownership or leadership, prove approval or shipment, or assign an
  aggregate outcome to one person or artifact. Preserve his explicit
  corrections and genuine source conflicts. Ask only when a proposed claim
  materially contradicts his current account or asserts sole ownership,
  lifecycle, causation, or an outcome beyond it—not because an outside
  certificate of contribution is missing.
- The current implementation, story spec, and tests are candidates—not proof
  of editorial quality. Explicit user rejection or a failed reader review
  reopens the subject, framing, section order, prose, evidence selection, and
  visual pacing.
- Do not declare public copy or a story order final before reader review. Do
  not encode chapter count, paragraph count, sentence length, exact prose, or
  generic strategic vocabulary as automated acceptance criteria.
- Update current-direction and case-specific specs after the revised narrative
  has passed reader review. Do not use those documents to preserve a rejected
  draft.
## Protected phases

Figma is read-only unless Mason explicitly approves an edit in the current
task. Direct Figma access may use Mason's logged-in Figma desktop app or logged-in
Chrome profile. The unofficial Figwright MCP server and its required local
desktop or development-plugin bridge are allowed. The official native Figma MCP
server, direct Figma APIs, unrelated plugins, and Playwright are prohibited.

Commit, push, publication, deployment, access changes, Figma writes, and
destructive actions each require explicit approval. Approval for one phase does
not approve another.

## Verification and closeout

- Documentation or evidence changes: run `node scripts/check-repository.mjs`
  and `git diff --check`.
- Site changes: follow the proof table in [`site/AGENTS.md`](site/AGENTS.md),
  then review the full diff from this repository root.
- A handover is written only when Mason asks for one. Rebuild it from final live
  state, give one concrete next action, and stop after delivering it.
