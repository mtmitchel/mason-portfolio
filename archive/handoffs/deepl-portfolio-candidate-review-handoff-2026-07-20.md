# Handover: rank DeepL portfolio case-study candidates and writing examples

Paste this entire packet into a new Codex chat opened in:

```text
/home/mason/Projects/Mason Portfolio
```

Attach the bundled Chrome-control plugin because the review requires Mason's
existing logged-in Chrome profile. This is a new read-only evidence-review task,
not a continuation of the completed Figma rebuild and not authorization to edit
the portfolio site.

## First response

Start by saying:

> I will work read-only in Figma and the portfolio site. I will review the
> current local documentation and achievement recovery first, then cross-check
> the strongest candidates against exact Figma pages, frames, nodes, and
> comments through Mason's logged-in Chrome profile. I will write only the
> private shortlist report named in this handover. I will not edit Figma, the
> public site, claims, assets, or access settings.

Do not create or activate a Goal unless Mason explicitly asks. There is no
active Goal.

## Objective

Produce an evidence-led recommendation for the best DeepL work to feature in
Mason's UX copywriting and content-design portfolio.

The final recommendation must contain:

1. A ranked list of the ten strongest potential case studies or mini case
   studies.
2. A separate list of high-quality UI/UX writing examples from Figma that are
   worth showcasing even when they do not support an empirical case study.
3. A clear recommendation for which candidates should become full cases, mini
   cases, entries in a focused writing collection, reserves, or holds.
4. Exact recovery-to-Figma traceability, honest claim ceilings, confidentiality
   risks, missing evidence, and practical next steps for every candidate.

The task ends when the private report is written and summarized to Mason. Do
not implement any recommendation on the public site.

## Current verified state

- The canonical Figma rebuild is complete.
- Account Security is structurally closed at checkpoint `62`.
- Team Administration is structurally closed at checkpoint `66`.
- Write Pro is structurally closed at checkpoint `72`.
- The final performance recheck found the formerly slow Monetization page `90`
  responsive in about 4.5 seconds and page `01` responsive in about 1.9 seconds.
- The private recovery package validates successfully: 22 achievement records,
  49 source references, 25 exact message references, 1,265 extracted source
  messages, zero duplicate source-message keys, and zero failures.
- The bidirectional evidence map covers all 22 achievement IDs. Unmatched items
  are recorded explicitly; absence of a match is not permission to discard
  either recovery or Figma evidence.
- The previous completion Goal is closed. Current disk and live Figma evidence
  outrank old chat summaries and historical handovers.

The public site worktree is dirty and must remain untouched. At handover creation:

```text
branch: main, one commit ahead of origin/main
local HEAD: 4fea4b17e0e12079832222dc5056dcf420dbc09b
origin/main: a881de46b69bebf89410862ee21d4ee63417402f
```

There are many pre-existing modified, deleted, and untracked site files. Refresh
`git status --short --branch --untracked-files=all` before reviewing the current
site, but do not clean, restore, stage, commit, or modify anything.

## Allowed write boundary

The only permitted local write is:

```text
/home/mason/Projects/Mason Portfolio/private-evidence/deepl-portfolio-candidate-shortlist.md
```

Do not edit any other documentation, Figma file, source file, public-site file,
asset, route, claim, or export. Do not commit or push the report. If the target
report already exists when the new chat begins, inspect it and update it only if
it is clearly the same requested deliverable; otherwise stop and tell Mason.

## Read-first sequence

Read these files completely, in this order, before ranking candidates:

1. `/home/mason/.codex/AGENTS.md`
2. `/home/mason/AGENTS.md`
3. `/home/mason/Projects/Mason Portfolio/AGENTS.md`
4. `/home/mason/Projects/Mason Portfolio/site/AGENTS.md`
5. This handover.
6. `/home/mason/Documents/Codex/2026-07-18/chrome/outputs/canonical-figma-rebuild-corrected-handoff-2026-07-19.md`
7. `/home/mason/Projects/Mason Portfolio/private-evidence/deepl-figma-evidence-map.md`
8. `/home/mason/Projects/Mason Portfolio/claim-review.md`
9. `/home/mason/Projects/Mason Portfolio/private-evidence/deepl-achievement-recovery/README.md`
10. Every curated recovery artifact:
    - `artifacts/achievement-ledger.json`
    - `artifacts/outcome-evidence.md`
    - `artifacts/career-inventory.md`
    - `artifacts/linkedin-bullets.md`
    - `artifacts/extraction-summary.md`
    - `artifacts/role-corrections.json`
    - `artifacts/metric-candidates.json`
11. The current public portfolio state, read-only:
    - `site/README.md`
    - `site/CHANGELOG.md`
    - `site/app/page.tsx`
    - every current `site/app/work/*/page.tsx`
    - the current evidence assets under `site/public/work/`

Use `artifacts/source-messages.json`, `artifacts/candidate-conversations.json`,
and the raw export under `/home/mason/Downloads/gptexport` only to verify exact
source references for shortlisted claims. User-authored source messages and
Mason's corrections outrank assistant prose.

The following older reports are superseded as current-state sources. Review
them only after the canonical documents above and only when failure history or
an earlier classification decision matters:

- `canonical-figma-reassessment-handoff-2026-07-19.md`
- `canonical-figma-rebuild-handoff-2026-07-19.md`
- `figma-canonical-rebuild-2026-07-19.md`
- `figma-cleanup-2026-07-18.md`

## Validation before analysis

Run the existing read-only validator from the raw export directory:

```bash
cd /home/mason/Downloads/gptexport
node "/home/mason/Projects/Mason Portfolio/private-evidence/deepl-achievement-recovery/scripts/validate_outputs.mjs" \
  . \
  "/home/mason/Projects/Mason Portfolio/private-evidence/deepl-achievement-recovery/artifacts"
```

If validation fails, do not repair the recovery package in this task. Record the
failure, continue only with evidence that can still be verified safely, and do
not elevate affected claims.

## Absolute Figma boundary

- Use Mason's logged-in Chrome profile through the bundled Chrome-control
  workflow.
- Keep exactly one Figma tab open.
- Figma is read-only. Do not move, rename, paste, annotate, resize, hide,
  reorganize, create, delete, or otherwise mutate any node, page, or file.
- Never use Figma MCP, `use_figma`, a Figma API, a Figma plugin, Playwright,
  another browser, or programmatic canvas manipulation.
- Do not ask for edit permission.
- Do not generate screenshots, recordings, visual diffs, PDFs, or exports.
- Use small direct DOM-CUA reads and exact node navigation. Review one bounded
  candidate cluster at a time.
- Read comments only when they clarify constraints, rejected alternatives,
  collaboration, state transitions, engineering limitations, or decision
  rationale. Do not reproduce private comment text, author names, employee
  identities, or internal identifiers in the report.
- Do not publish or paste private Figma links outside the private report.

## Figma files to review

Use the canonical files first:

- Account Security — Canonical:
  `https://www.figma.com/design/RvJJvJNBLl8XlrWD9Q6fWt/DeepL-%E2%80%94-Account-Security-%E2%80%94-Canonical`
- Team Administration — Canonical:
  `https://www.figma.com/design/fFC8RdkCw0eMe1pTlMEmYx/DeepL-%E2%80%94-Team-Administration-%E2%80%94-Canonical`
- Write Pro — Canonical:
  `https://www.figma.com/design/UTZAjQzEq4hZXtwu5DQ2YZ/DeepL-%E2%80%94-Write-Pro-%E2%80%94-Canonical`
- Monetization — Canonical:
  `https://www.figma.com/design/wot8GX99oJJN84c2Bufh0O/DeepL-%E2%80%94-Monetization-%E2%80%94-Canonical`
- Checkout — Experiments Copy:
  `https://www.figma.com/design/Xxwsw1rP90LNnKDCyUMINJ/Checkout-%E2%80%94-Experiments--Copy-`

Use these only for provenance, duplicate comparison, missing context, or a
meaningful rejected/historical alternative:

- Monetization source:
  `https://www.figma.com/design/0JYwhKhRAliGBhyl2kBnEu/Monetization?m=auto`
- Account Security source:
  `https://www.figma.com/design/uw0Sl8Q3LaymJR25X1xFs5/Account-security-%E2%80%94-MFA---recovery?m=auto`
- ATE source:
  `https://www.figma.com/design/STiYWUwvhM1AXilfoAQURX/ATE-%E2%80%94-User-management?m=auto`
- Archive source:
  `https://www.figma.com/design/MsJYD0FxGX0G00BW7eNC81/_Archive-%E2%80%94-Misc--pre-cleanup-?m=auto`
- Checkout — Experiments source:
  `https://www.figma.com/design/3uoVRoIBzSapN6PxdNsW9I/Checkout-%E2%80%94-Experiments`

Canonical page `00` explains each file. Product pages hold representative work;
page `80` holds copy/components/content patterns; page `90` is deferred source
evidence and is not an export or showcase page. Archives are lower priority.

## Evidence model

Apply the bidirectional crosswalk strictly:

- Recovery to Figma: for every candidate achievement, locate supporting,
  contextual, conflicting, or absent Figma material.
- Figma to recovery: for every candidate page/frame/cluster, search the recovery
  ledger, source messages, role corrections, and curated reports for the related
  initiative, contribution, process, outcome, and contradictions.

Record separately:

1. Artifact/state: what exact editable or historical interface evidence exists.
2. Contribution/role: what the recovery evidence supports about Mason's work.
3. Lifecycle: whether the state was exploratory, proposed, ready for development,
   approved, launched, or unknown.
4. Outcome/metric: what independent evidence supports a result, if anything.

Relationship types are `direct`, `correlated`, `contextual`, `conflicting`,
`recovery-only`, `Figma-only`, and `unresolved`.

Never use one evidence system as circular proof of the other. A Figma match does
not recover a missing experiment readout, prove launch, establish causation, or
prove sole ownership. A recovery mention does not prove the exact visible
implementation or make a flattened artifact editable active design.

Use conservative contribution language. Mason contributed UX copy and content
design and worked with designers, PMs, engineers, localization, monetization,
and other partners. Do not say he led, owned the full project, designed the UI,
or single-handedly caused an outcome unless direct evidence supports that exact
claim.

## Candidate-review method

### 1. Establish the existing portfolio baseline

Review the current site and identify:

- what is already presented as a full case;
- what is already presented as a focused UX-copy example;
- duplicated subject matter;
- weak or unsupported current claims;
- obvious gaps in journey type, writing skill, platform, tone, or business area.

The recommendation must explicitly label each shortlisted candidate as:

- `keep and strengthen`;
- `new candidate`;
- `replace or merge with an existing case`;
- `writing-collection only`;
- `reserve pending evidence`; or
- `hold/private only`.

### 2. Complete a recovery-first pass

Review all 22 achievement IDs, not only the existing public cases. Build a
working inventory of each achievement's evidence level, contribution, possible
outcome, missing attachment, contradictions, confidentiality risk, and known
Figma relationship.

Do not automatically rank a metric-bearing record above a better-supported
artifact. `supported_missing_attachment` metrics remain private candidates
until their original source is recovered.

### 3. Complete a Figma-first pass

Inspect the strongest candidate clusters in the five canonical/copy files. Use
the private map's exact page/frame/node links, but verify the visible content and
editability live rather than trusting the map blindly.

For each cluster, assess:

- journey completeness;
- quality and diversity of the actual writing;
- clarity of the user problem and content constraints;
- visible alternatives, edge cases, states, and content-system thinking;
- whether the artifact can be safely understood without inventing research;
- whether a representative product frame could eventually be exported safely;
- overlap with stronger candidates;
- confidentiality and publication risk.

### 4. Classify the story type honestly

- `Empirical full case`: requires a coherent journey, supported Mason
  contribution, and independently supported lifecycle/outcome evidence.
- `Artifact-led full case`: may have a strong journey and process story but must
  explicitly withhold unsupported launch or result claims.
- `Mini case`: a focused problem/decision/flow with enough evidence to explain
  Mason's contribution but not enough breadth for a full case.
- `Writing collection`: excellent strings, states, patterns, or tonal range that
  demonstrate craft without pretending to be a complete case.
- `Hold`: promising recovery or Figma material that lacks the visual,
  contribution, confidentiality, or outcome evidence needed for responsible use.

Do not call a candidate empirical merely because the recovery package mentions
a metric. Missing experiment canvases, dashboards, analytics, or manager-review
attachments keep the result unverified.

### 5. Score candidates consistently

Score each candidate from 0 to 100 using this weighting:

| Dimension | Weight |
| --- | ---: |
| Strength of Mason-contribution evidence | 20 |
| UX-writing/content-design quality | 20 |
| Journey/problem/decision completeness | 15 |
| Figma artifact quality and exact traceability | 15 |
| Distinctiveness and portfolio coverage | 10 |
| Lifecycle/outcome evidence | 10 |
| Confidentiality and publication feasibility | 10 |

A high score does not override a claim ceiling. Also provide a separate
readiness label: `ready for Mason review`, `conditional`, `evidence gap`, or
`private only`.

## Required private report

Write:

```text
/home/mason/Projects/Mason Portfolio/private-evidence/deepl-portfolio-candidate-shortlist.md
```

Use this structure.

### 1. Executive recommendation

- Recommend the best three full-case candidates.
- Recommend the best three mini-case candidates.
- Identify four additional reserve/conditional candidates to complete the
  ranked top ten.
- Recommend the strongest focused UI/UX-writing collection theme.
- Explain how these choices complement or change the current site's Checkout,
  MFA, Global Pricing, and UX Copy routes.
- State which existing cases should be kept, strengthened, merged, replaced, or
  left alone. This is a recommendation only; do not edit the site.

### 2. Ranked top-ten table

For each candidate include:

- rank and score;
- working title and DeepL domain;
- recommended format;
- existing-site relationship;
- recovery IDs and evidence levels;
- exact recovery source references;
- Figma file, page, frame/cluster name, node ID, and private node URL;
- relationship type;
- supported artifact, contribution, lifecycle, and outcome dimensions;
- strongest writing/content-design evidence;
- claim ceiling;
- confidentiality/publication risk;
- missing evidence;
- readiness label;
- one-sentence ranking rationale.

### 3. Candidate dossiers

Give every top-ten candidate a concise dossier covering:

- the user/business problem visible in the evidence;
- the content challenge and constraints;
- Mason's defensible contribution;
- the strongest journey states and exact nodes;
- useful alternatives, edge cases, or rejected states;
- what can be shown and said now;
- what must not be claimed;
- what evidence would most improve the case;
- recommended narrative angle and scope.

If the evidence cannot support problem, contribution, process, and result, say
which pieces are missing. Do not fill gaps with generic UX-process language.

### 4. UI/UX writing showcase

Select approximately 15–25 examples that demonstrate craft or range even if
they do not support an empirical case study. Group them by writing capability,
not merely by Figma file. Useful groups may include:

- security, trust, recovery, and irreversible-action copy;
- onboarding and progressive disclosure;
- upgrade, plan, eligibility, and pricing clarity;
- errors, validation, empty states, and recovery paths;
- admin, permissions, invitation, and bulk-action language;
- hard blocks, limits, and consequence communication;
- conditional, responsive, localized, or reusable content patterns;
- concise CTA, helper, tooltip, dialog, and status writing;
- tone shifts across consumer, team-admin, enterprise, and developer contexts.

For every example include:

- a short safe transcription or paraphrase of the visible UI copy;
- exact Figma file/page/node ID and private node URL;
- artifact format and editability;
- what the copy is doing in the interaction;
- why the writing is strong or distinctive;
- the capability it demonstrates;
- related recovery evidence, if any;
- claim ceiling and confidentiality/redaction needs;
- recommended presentation: standalone crop, paired states, annotated sequence,
  pattern collection, or keep private.

Never transcribe names, emails, invitation URLs, account/subscription IDs,
internal tickets, unreleased features, confidential metrics, experiment
allocation, comments, or employee identities.

### 5. Evidence gaps and next actions

Prioritize the smallest evidence-recovery actions that could materially change
the ranking, such as recovering a specific experiment canvas, analytics report,
manager evaluation, final shipped reference, or publication-rights decision.
Do not produce a generic wish list.

### 6. Exclusion and hold log

List credible candidates that did not make the top ten and explain why. Include
recovery-only records with no visual evidence, Figma-only artifacts with no
supported Mason contribution, duplicate subject matter, weak journeys,
confidentiality risk, and unsupported outcome claims.

## Acceptance criteria

Do not finish until all of the following are true:

- All current repository and site instructions were read.
- The current site and dirty worktree were inspected read-only and left
  untouched.
- Recovery validation was run and its result recorded.
- All 22 achievement records were considered.
- Every top-ten candidate was checked in both directions: recovery to Figma and
  Figma to recovery.
- Every top-ten candidate has exact source and node traceability or an explicit
  statement that no exact match exists.
- Artifact/state, contribution, lifecycle, and outcome are evaluated separately.
- Existing site coverage and duplication are considered.
- The ranking distinguishes empirical, artifact-led, mini-case, collection, and
  hold candidates honestly.
- The writing showcase is based on live visible Figma content, not only page
  names or old reports.
- Metrics with missing original sources remain withheld.
- Screenshots, flattened images, and PDFs are never described as active design.
- Confidential material and private Figma links remain inside the private
  report.
- No Figma, site, asset, documentation, access, Git, export, or publication
  mutation occurred outside the single allowed report.
- The report gives Mason a decisive recommendation rather than an unranked dump.

## Final response and stop point

After writing the report, return a concise summary containing:

- the top three full-case recommendations;
- the top three mini-case recommendations;
- the recommended writing-collection theme;
- the most important evidence limitation;
- the absolute path to the private report;
- confirmation that Figma and the site remained read-only.

Then stop. Do not begin site implementation, export work, claim rewriting,
publication review, commit, push, or deployment without Mason's separate
explicit authorization.
