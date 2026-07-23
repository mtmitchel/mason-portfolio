# Implementation-ready research brief for two Codex skills

## Executive recommendation

Build **two separate skills**: `write-evidence-led-cv` and `build-content-design-portfolio`. Do **not** collapse them into one mode-heavy skill, and do **not** start with a third triggerable “core” skill. Instead, give both skills the same compact evidence model, claim-safety rules, and validation assets, but keep each skill’s trigger scope, workflow, and output contract distinct. That architecture best matches OpenAI’s current skill mechanics: skill invocation depends heavily on a tight `name` and `description`; Codex uses progressive disclosure and only loads a skill’s full `SKILL.md` once it decides to use it; and OpenAI explicitly recommends keeping each skill focused on one job and preferring instructions over scripts unless deterministic behavior is truly needed. citeturn1view3turn2view1turn1view2turn1view4

That recommendation is also the best fit for the hiring domain. CV work and portfolio work share an evidence problem, but they differ materially in audience, artifact handling, confidentiality risk, output shape, and evaluation criteria. Resume guidance emphasizes concise accomplishment statements, legibility, and role targeting; portfolio guidance emphasizes case-study selection, artifact framing, authorship clarity, recruiter usability, and accessibility. Mixing those into one skill would create ambiguous triggers and a larger instruction surface, which makes misfires more likely. citeturn17view2turn17view3turn17view4turn13view0turn13view3turn13view4

The source base here is solid but mixed in age. The most current hiring-facing sources are NN/g’s 2026 recruiter guidance, NN/g’s 2025 portfolio-mistakes video, UX Content Collective’s 2026 content-design job-search session, Button’s 2024 content-design portfolio guidance, and current official OpenAI skill and eval documentation. Some foundational portfolio and resume articles that remain useful are older, especially NN/g 2019–2023 pieces, HubSpot’s 2021 content-design portfolio guidance, and Indeed Design’s 2020 hiring-manager advice. Those older sources are still valuable for enduring hiring-manager concerns such as scannability, role attribution, and process clarity, but they should not outweigh newer guidance on today’s trigger design, skill evaluation, or the current hiring context. citeturn23view2turn14view0turn12search1turn6search2turn2view1turn20view0turn14view2turn22view0turn6search0turn5search1

### Architecture tradeoffs

| Option | Upside | Downside | Verdict |
|---|---|---|---|
| One combined skill with modes | Fewer folders; one place to maintain general rules | Overloaded description hurts implicit triggering; larger `SKILL.md`; more context drag; higher risk of “CV mode” activating for portfolio asks and vice versa | Not recommended |
| Two separate skills with a shared evidence model | Clear triggers; smaller prompts; easier testing; easier delegation boundaries; outputs stay domain-specific | Slight duplication unless you maintain shared templates/schemas | Recommended |
| Two skills plus a third triggerable “career-evidence-core” skill | Strong modularity in large catalogs | Adds routing complexity and another invocation decision; too much ceremony for one maintainer | Not now; only if your catalog grows materially |

The core tradeoff is trigger precision. OpenAI’s docs make the `description` the primary discovery signal and advise front-loading clear scope and trigger words. A combined “career materials” skill would be maintainable on paper but harder for Codex to invoke correctly in practice. citeturn1view3turn2view1

### Responsibility and overlap matrix

| Capability | Owns evidence extraction and claim audit | Owns CV bulleting and summaries | Owns portfolio triage and case narratives | Owns document styling and export | Owns UX microcopy for product surfaces | Owns site implementation and hosting |
|---|---|---:|---:|---:|---:|---:|
| `write-evidence-led-cv` | Primary | Primary | No | Delegate | No | No |
| `build-content-design-portfolio` | Primary for portfolio evidence | No | Primary | Delegate | Delegate for product-copy drafting patterns only when needed | Delegate |
| Document-generation capability | No | Support after content is approved | Support after content is approved | Primary | No | No |
| General UX-copy capability | No | No | Support for artifact-level rewrites or interface copy explanations | No | Primary | No |
| Website-building capability | No | No | Support once portfolio IA, page copy, captions, and asset notes are approved | No | No | Primary |

This split tracks both OpenAI’s skill guidance and hiring-manager guidance. Skills should package reusable domain workflows, while formatting/export and website implementation are separate capabilities. Hiring guidance for design and content portfolios also consistently prioritizes clarity, personal contribution, process, and outcomes over flashy presentation, which argues for keeping these new skills focused on reasoning and evidence handling rather than on visual production. citeturn1view2turn2view1turn13view0turn13view1turn13view3turn13view4

## Shared evidence and claim-safety model

Both skills should use the **same evidence object model**. The model should treat five claim dimensions as independent, because hiring reviewers often can see an artifact but still cannot tell who did what, whether the thing shipped, whether it moved a metric, or whether it can be shown publicly. HubSpot explicitly says portfolios should show how **you personally** contributed; Indeed’s hiring managers want problem, process, team makeup, role, artifacts, validation, and success signals; and Indeed’s take-home commentary notes that team portfolios often obscure individual contribution. NN/g also recommends capturing raw deliverables, before states, feedback, and metrics over time, while keeping legal and ethical obligations in view. citeturn13view0turn13view3turn12search6turn22view0

### Recommended shared evidence record

Use a simple structured record such as YAML or JSON. The skill should **read and update** this record, not hide it behind prose.

| Field | Purpose |
|---|---|
| `id` | Stable canonical identifier, never reused |
| `title` | Short achievement or project label |
| `source_refs` | File paths, notes, review docs, screenshots, portfolio pages, or JD refs |
| `fact_statement` | Smallest plain-English factual statement supported by evidence |
| `evidence_types` | One or more of: `artifact`, `contribution`, `lifecycle`, `outcome`, `metric`, `permission`, `feedback` |
| `role_scope` | `solo`, `co-owner`, `lead`, `contributor`, `reviewer`, `manager`, `unknown` |
| `team_context` | Short description of collaborators and team shape |
| `claim_ceiling` | Strongest phrasing the skill may use without overstating |
| `confidence` | `verified`, `supported-but-partial`, `weak`, `contradicted` |
| `contradictions` | Pointers to conflicting sources or unresolved ambiguity |
| `target_tags` | Role tags such as `content_design`, `ux_writing`, `conversation_design`, `strategy`, `accessibility`, `design_systems` |
| `outcome_detail` | Verbatim metric or qualitative signal, or `none` |
| `publication_permission` | `public`, `redactable`, `private`, `unreleased`, `unknown` |
| `redaction_notes` | What must be removed, generalized, or substituted |
| `approved_quotes_or_phrases` | Optional safe wording patterns |
| `gaps_to_recover` | Missing evidence to look for later |

That structure supports OpenAI’s recommendation to use code-managed prompts, typed inputs or schemas for dynamic values, and evaluation around structured outputs. It also matches the real hiring need: enough structure to keep facts stable while allowing tailored phrasing above that layer. citeturn20view2turn20view0

### The five independent evidence dimensions

The portfolio skill should explicitly distinguish these five things every time it evaluates a project, because they are **not interchangeable**:

| Dimension | Question | Example of what counts | Example of what does not count |
|---|---|---|---|
| Artifact existence | Is there proof the thing existed? | Screenshot, doc, prototype, shipped screen, annotation | A claim in a summary with no artifact or source |
| Personal contribution | What did the person actually do? | Review notes, specs they wrote, comments, performance review, author metadata | “We launched…” with no individual role evidence |
| Lifecycle or shipment | Did it ship, pilot, or stay conceptual? | Release note, shipped screenshot, PM confirmation, post-launch analysis | A polished concept deck alone |
| Outcome or metric | What happened because of it? | KPI excerpt, test result, survey, qualitative stakeholder signal | An inferred improvement with no support |
| Publication permission | Can it be shown publicly? | Public URL, employer approval, redactable internal asset | “I can probably show it” |

This dimension split is a direct response to what hiring managers say they want and what they often cannot infer from a portfolio. Indeed wants clear role and proof of success; HubSpot wants explicit personal contribution; Button warns that many projects lack post-launch data and that candidates should say what they would monitor rather than inventing results; and NN/g warns that employers will judge sloppy handling of sensitive data negatively. citeturn13view0turn13view3turn21view0turn22view0

### Claim ceilings

A “claim ceiling” is the strongest honest wording allowed by the evidence on hand. The skills should generate from the ceiling **down**, never from ambition **up**.

| If the evidence supports only this | Ceiling phrasing allowed | Phrasing to forbid |
|---|---|---|
| Artifact exists, personal role unclear | “Contributed to content exploration for…” | “Owned the redesign…” |
| Contribution is clear, shipment unclear | “Developed content recommendations for a launch-track project…” | “Shipped a new onboarding flow…” |
| Shipment is clear, metric absent | “Helped launch…” or “supported launch…” | “Improved conversion…” |
| Qualitative outcome only | “Informed a decision that was adopted by the team” | “Drove a 15% uplift…” |
| Team leadership not evidenced | “Collaborated with PM, design, and engineering…” | “Led cross-functional alignment…” |
| Permission unclear | “Private/internal project; do not publish artifacts” | Any portfolio-ready artifact output |

This is where both skills need to be stricter than common career-writing advice. UX Content Collective’s 2026 session is particularly useful here: it argues for results in every line when possible, but also says qualitative signal still counts when hard numbers are missing, and warns against inflating titles. citeturn24view1turn24view2

### Contradictions and missing evidence

The skills should not silently resolve contradictions. If performance review language says “led,” but project notes show a contributor role, the record should stay open as a contradiction until stronger evidence is found. OpenAI’s eval guidance also argues for explicit success criteria, log-driven case collection, and continuous refinement, which maps well to treating contradictions as auditable objects rather than letting them disappear into rewritten prose. citeturn20view0

Recommended statuses:

- `none`: no contradiction found
- `minor`: wording differences but same factual core
- `material`: role, shipment, timing, or outcome differs
- `blocking`: cannot safely claim without resolution

The skill’s behavior should be deterministic here: if contradiction status is `material` or `blocking`, the skill must either downgrade the claim or surface a gap note. It should never “pick the stronger version” on its own.

### Canonical record and private data handling

The **canonical achievement inventory must live outside the skill package**, in the current workspace or a user-controlled career-materials repository. OpenAI’s skills are copied into an execution environment as reusable bundles; that is exactly why you should keep live employment evidence, private reviews, internal screenshots, and employer-specific data out of the skill itself. Keep only blank templates, schemas, and dummy examples in the skill bundle. NN/g’s portfolio-maintenance guidance also explicitly stresses legal, NDA, data-security, and privacy obligations, plus redaction when needed. citeturn1view4turn22view0

## Skill blueprints

OpenAI’s current guidance points toward a short, operational `SKILL.md` and richer supporting material in `references/`. Skills are discovered through concise metadata, then their full `SKILL.md` is loaded on selection; OpenAI also advises keeping each skill focused, writing imperative steps with explicit inputs and outputs, and preferring scripts only for real deterministic needs. That means `SKILL.md` should contain routing, workflow, output contract, and hard guardrails, while detailed rubrics, taxonomies, examples, and schemas should live in `references/`. citeturn2view1turn1view3

### Skill blueprint for write-evidence-led-cv

This skill should own **evidence intake, achievement extraction, deduplication, claim ceilings, role targeting, and CV-language drafting**. It should explicitly **delegate** visual layout, DOCX/PDF styling, and export. It should also refuse to become a generic cover-letter or LinkedIn-profile skill in v1, because that expands scope without helping the core evidence problem. OpenAI’s trigger guidance and the need for one focused job strongly support that limit. citeturn2view1turn1view3

#### Requests that should trigger

| Trigger the skill | Do not trigger the skill |
|---|---|
| “Audit my CV against these project notes and flag unsupported claims.” | “Make my resume look nicer in Word.” |
| “Extract a reusable achievement inventory from these reviews, docs, and my current CV.” | “Design a two-column resume template.” |
| “Tailor my CV bullets for this senior content designer role without changing the facts.” | “Write a cover letter from scratch.” |
| “Rewrite these bullets so they are ATS-legible and claim-safe.” | “Write general product UI copy for a sign-up flow.” |
| “Compare three tailored versions against one canonical evidence file.” | “Build my personal site in Framer/Webflow.” |

#### Recommended `SKILL.md` workflow

1. **Inspect inputs**: CV(s), reviews, project docs, portfolio items, evidence ledgers, and target JD if present.
2. **Build or refresh the canonical achievement inventory** with stable IDs before drafting any tailored bullets.
3. **Extract and deduplicate achievements** by distinguishing contribution, deliverable, lifecycle, outcome, metric, and feedback evidence.
4. **Assign claim ceilings** and confidence levels; flag contradictory or missing evidence.
5. **Select role-relevant evidence** for the target JD using natural keyword alignment, not keyword stuffing.
6. **Draft concise bullets and summary lines** that preserve attribution and do not exceed claim ceilings.
7. **Run a claim-safety self-check** for unsupported ownership, leadership, shipment, causation, or performance claims.
8. **Delegate formatting only if requested**, passing clean content plus structural notes to the document-generation capability.

That workflow reflects strong resume-writing guidance: action-driven accomplishment statements, relevance to the target role, clarity for humans, legibility for ATS parsing, and avoidance of filler skill lists or keyword stuffing. citeturn17view2turn17view3turn17view4turn23view0turn23view3turn23view4turn24view1turn24view2

#### Recommended folder structure

```text
write-evidence-led-cv/
  SKILL.md
  agents/
    openai.yaml
  references/
    evidence-model.md
    cv-bullet-rules.md
    professional-summary-rules.md
    ats-legibility-and-targeting.md
    evidence-gap-recovery.md
    schemas/
      achievement-record.schema.json
      achievement-inventory.schema.json
      tailored-cv-output.schema.json
      contradiction-log.schema.json
  scripts/
    validate_achievement_inventory.py
    check_claim_ceilings.py
    jd_keyword_map.py
    cv_output_lint.py
  assets/
    templates/
      achievement_inventory.template.yaml
      role_target.template.yaml
      cv_working_brief.template.md
```

#### Draft `SKILL.md` frontmatter

```yaml
---
name: write-evidence-led-cv
description: Inspect CVs, reviews, project docs, portfolios, and job descriptions to extract verified achievements, maintain a canonical evidence inventory, and write role-targeted CV bullets and summaries without overstating ownership, leadership, shipment, or impact.
---
```

This description is deliberately front-loaded with trigger words and boundaries because OpenAI says `name` and `description` are the primary invocation signals, and descriptions may be shortened when many skills are installed. citeturn1view3turn2view1

#### Recommended `agents/openai.yaml` values

```yaml
interface:
  display_name: "Write evidence-led CV"
  short_description: "Turn source material into verified, role-targeted CV bullets and summaries."
  default_prompt: "Use verified source materials to build or refresh a canonical achievement inventory first, then draft claim-safe CV bullets and a concise professional summary for the target role. Do not invent ownership, shipment, leadership, or impact. If formatted output is requested, hand off the approved content to the document-generation capability."
```

#### What belongs in `references/` rather than `SKILL.md`

For this skill, put the following in `references/`:

- **Bullet-pattern rules**: action/context/result structures, verb choices, collaborative phrasing options.
- **ATS and legibility notes**: standard headings, no graphics/tables, file-format reminders, keyword placement guidance.
- **Evidence-gap recovery guide**: what to ask for when metrics, role clarity, or ship status is missing.
- **Claim-ceiling examples**: safe alternatives when evidence is partial.
- **Schema docs**: field definitions and examples for the canonical inventory.

Those materials are too detailed for mainline routing but essential when the skill is actually in use. OpenAI’s progressive-disclosure model strongly favors this split. citeturn2view1turn1view5

#### Scripts, schemas, checklists, and templates that are worth it

Only a few scripts are genuinely worth making deterministic here:

- `validate_achievement_inventory.py`: schema validation and required-field checks.
- `check_claim_ceilings.py`: lint drafted bullets for banned claim patterns when support is absent.
- `jd_keyword_map.py`: produce a simple coverage report comparing JD language against evidence tags.
- `cv_output_lint.py`: detect repeated bullets, suspiciously duplicated metrics, or formatting markers that imply visual layout rather than content.

Do **not** write brittle scripts that try to semantically parse unstructured reviews or portfolio narratives into achievements on their own. That belongs to the language-model workflow, with deterministic scripts used only for validation, transformation, and repeatable checks. That is consistent with OpenAI’s “prefer instructions over scripts unless you need deterministic behavior” guidance. citeturn2view1

### Skill blueprint for build-content-design-portfolio

This skill should own **portfolio triage, project worthiness decisions, artifact strategy, narrative drafting, confidentiality filtering, attribution handling, and final evidence-safety review**. It should explicitly **delegate** web implementation, hosting, analytics setup, and any non-portfolio product-copy work. Portfolio reviewers want clarity, story, decisions, process, role, and outcomes—not site polish for its own sake. citeturn13view0turn13view1turn13view3turn13view4

#### Requests that should trigger

| Trigger the skill | Do not trigger the skill |
|---|---|
| “Review these projects and decide which belong in my content-design portfolio.” | “Write onboarding copy for a live app.” |
| “Turn these screenshots and notes into a content-design case study.” | “Build the portfolio website in Webflow/Framer.” |
| “Write mini cases, artifact captions, and project summaries for UX writing roles.” | “Create visual mockups for the site homepage.” |
| “Audit my portfolio for confidentiality, attribution, and unsupported impact claims.” | “Format this slide deck for a portfolio review.” |
| “Tell me which screenshots to crop, label, compare, or redact.” | “Do generic personal-brand copy unrelated to portfolio evidence.” |

#### Recommended `SKILL.md` workflow

1. **Inventory inputs**: project notes, artifacts, screenshots, reviews, metrics, release evidence, permissions, and target roles.
2. **Classify each project** as `full case study`, `mini case`, `writing collection item`, `reserve`, or `hold`.
3. **Separate evidence dimensions**: artifact existence, personal contribution, lifecycle/shipment, outcome, and publication permission.
4. **Choose the narrative form** based on available evidence, not on an idealized case-study template.
5. **Write image-led portfolio content**: intro, summary, case narrative, captions, annotations, and CTA copy.
6. **Define visual evidence requirements**: what to show, crop, label, compare, transcribe, redact, or omit.
7. **Run confidentiality, accessibility, and evidence-safety checks** before approving copy.
8. **Delegate implementation only if requested**, handing off page copy, IA notes, asset manifests, and accessibility notes to the website-building capability.

That matches the strongest portfolio guidance in the source set: keep project count tight, favor clarity over fancy design, show your personal contribution, include the real process and trade-offs, prefer real shipped work when available, acknowledge messy reality, and avoid unsupported outcome claims. citeturn13view0turn13view1turn13view3turn21view0turn14view2turn14view3

#### Recommended folder structure

```text
build-content-design-portfolio/
  SKILL.md
  agents/
    openai.yaml
  references/
    evidence-model.md
    portfolio-triage-rubric.md
    case-study-structures.md
    artifact-captioning-and-annotation.md
    confidentiality-and-redaction.md
    portfolio-accessibility.md
    portfolio-review-checklist.md
    schemas/
      portfolio-project-record.schema.json
      portfolio-asset-manifest.schema.json
      portfolio-page-copy.schema.json
      publication-permission.schema.json
  scripts/
    validate_portfolio_records.py
    portfolio_safety_lint.py
    asset_manifest_check.py
    image_text_alt_check.py
  assets/
    templates/
      portfolio_inventory.template.yaml
      case_study_brief.template.md
      mini_case.template.md
      asset_manifest.template.yaml
```

#### Draft `SKILL.md` frontmatter

```yaml
---
name: build-content-design-portfolio
description: Turn content-design evidence, artifacts, screenshots, and project notes into evidence-safe portfolio case studies, mini cases, and writing samples for UX writing, content design, product content strategy, and conversation design roles, with clear attribution, confidentiality, and accessibility checks.
---
```

#### Recommended `agents/openai.yaml` values

```yaml
interface:
  display_name: "Build content-design portfolio"
  short_description: "Create evidence-safe case studies, mini cases, and artifact-led portfolio pages."
  default_prompt: "Use project evidence and artifacts to classify portfolio-worthiness, separate authorship from shipment and outcomes, and draft concise portfolio narratives, captions, and project-page structures. Do not invent research, ownership, launch status, or impact. If implementation is requested, hand off approved copy and asset notes to the website-building capability."
```

#### What belongs in `references/` rather than `SKILL.md`

For this skill, `references/` should hold the detailed material that would otherwise bloat prompt context:

- **Triage rubric** for `full case` / `mini case` / `collection item` / `reserve` / `hold`
- **Narrative patterns** for artifact-led cases when metrics are weak or absent
- **Contribution phrasing guide** for collaborative work
- **Redaction and publication guide** for internal, private, and unreleased work
- **Accessibility guide** for screenshots, diagrams, images of text, alt text, and comparison captions
- **Final review checklist** for recruiter usability, scannability, credibility, confidentiality, and evidence safety

#### Scripts, schemas, checklists, and templates that are worth it

The scripts worth keeping deterministic are again validation and manifest tools, not semantic summarizers:

- `validate_portfolio_records.py`: schema validation for project inventory
- `portfolio_safety_lint.py`: scan drafts for banned phrases like unsupported metrics, “launched,” or “led” when fields do not support them
- `asset_manifest_check.py`: ensure every visual has source, permission, crop note, label, and alt-text/transcript status
- `image_text_alt_check.py`: detect when screenshots with essential text require transcript or alt guidance

The asset manifest is especially valuable here because case studies are image-led, and both accessibility and confidentiality depend on consistent asset handling. W3C and Harvard accessibility guidance both emphasize that alt text should reflect purpose and context, that images of text should be avoided when possible, and that text alternatives must preserve meaningful text when images contain it. citeturn21view1turn21view2

## Operational rules

### CV-writing rules that should become hard operational rules

- Start bullets with a strong action verb and make the bullet about an accomplishment or contribution, not a vague responsibility label. citeturn17view2turn17view3turn17view4
- Use a compact **action + context/project + result** structure. MIT’s PAR method, UC San Diego’s action-task-purpose/result formula, and Penn’s actions-plus-accomplishments framing all align on this. citeturn17view2turn17view3turn17view4
- Prefer specific verbs over filler phrases such as “helped with,” “worked on,” or “responsible for,” unless the weaker phrasing is necessary to preserve honest attribution. citeturn17view3turn17view0
- When work was collaborative, state the person’s specific role in the team rather than allowing collective language to imply solo ownership. citeturn17view1turn17view4
- Tailor each application by reordering and selecting evidence for the target role, but do not change the underlying facts. UX Content Collective’s 2026 guidance is especially explicit that tailoring means reordering bullets and mirroring relevant language, not inflating titles or inventing experience. citeturn24view1turn24view4
- Keep the CV legible for both humans and parsers: simple formatting, standard headings, limited graphics, standard fonts, and text-based authoring tools instead of Figma-heavy layouts. Greenhouse, Indeed, Workday, and NN/g all point in that direction. citeturn13view6turn13view8turn25view0turn23view0
- Treat ATS as a **legibility** constraint, not as a mystical keyword robot. NN/g’s 2026 recruiter guidance argues that “ATS-friendly” is often oversold; Workday’s own ATS explanation says modern systems use NLP and do not rely only on exact-word matching. citeturn23view0turn25view0
- Do not keyword-stuff with isolated skill lists or self-rated bars if the skill cannot connect those terms to actual work. NN/g explicitly calls these space-inefficient and unhelpful to humans. citeturn23view4
- Use quantitative metrics when supported, but do not require them for every bullet. Qualitative signals, internal adoption, testing findings, stakeholder adoption, or scale can still be valid evidence when labeled honestly. citeturn17view2turn17view3turn24view2
- Maintain one long-form canonical record of everything and derive trimmed role-specific versions from it. Penn explicitly recommends maintaining a longer master resume and editing down for each application. citeturn17view3

### Content-design portfolio rules that should become hard operational rules

- Keep the portfolio small and selective; **2–3 strong projects** is usually enough. HubSpot’s hiring guidance is direct on this point. citeturn13view0
- Favor **clarity over fancy design**. Recruiters and some first-pass reviewers are not designers, and NN/g’s 2026 recruiter guidance says applicants often design for the wrong audience. citeturn13view0turn13view4
- Show what **you** did, not just what the team shipped. HubSpot and Indeed both emphasize role clarity and team makeup. citeturn13view0turn13view3
- Tell a full story: problem, constraints, process, decisions, trade-offs, validation, and outcome signal. Do not show only final screens. citeturn13view1turn13view3turn14view2
- Prefer real shipped work to polished concept work when possible. Indeed’s hiring managers explicitly say even a smaller shipped product is often more persuasive than a beautiful concept. citeturn13view3
- When metrics are missing, do not fabricate them. Use qualitative evidence; explain what you learned, what signals you had, what you would have monitored post-launch, and what fast follows you would have pursued. Button and UX Content Collective both support this more evidence-aware approach. citeturn21view0turn24view2
- Keep case studies scannable. NN/g’s broader portfolio guidance says hiring managers rarely read every word, so portfolios should be easy to skim without losing the story. citeturn14view2
- A portfolio site is useful but **not mandatory**. UX Content Collective’s 2026 discussion explicitly says strong work can still get hired without a full portfolio site. citeturn24view0
- Respect confidentiality, redaction, and permission status. NN/g advises obeying NDAs and privacy obligations and notes that careless handling of sensitive material can itself be a negative hiring signal. citeturn22view0
- Keep confidential material from becoming an application barrier. NN/g advises that basic application information should not sit behind passwords, though truly confidential portfolio materials may be protected. citeturn21view3
- Make portfolio assets accessible. Alt text should describe purpose and context; images of text should be avoided where possible; and screenshots or diagrams with essential text need text equivalents. citeturn21view1turn21view2
- Capture evidence over time instead of trying to reconstruct it from memory during a job search. NN/g’s portfolio-maintenance guidance is especially strong here. citeturn22view0

### Weak, outdated, overly generic, or unsupported advice to avoid

| Advice | Why it is weak or outdated | Better rule |
|---|---|---|
| “Make one flashy design-heavy resume so it stands out.” | Newer recruiter guidance points toward legibility, text-based authoring, and simple formats; formatting problems mostly waste application time rather than helping candidacy. citeturn23view0turn13view6turn13view8turn25view0 | Keep the CV plain, legible, and evidence-dense. |
| “Beat ATS by stuffing every keyword you can find.” | NN/g calls the “ATS-friendly” industry partly scammy and criticizes keyword stuffing; Workday says modern ATS parsing is more semantic than simple exact-match counting. citeturn23view0turn23view4turn25view0 | Use natural, evidence-backed role language in the right bullets. |
| “Every good bullet or case study needs a hard metric.” | UXCC and Button both argue that qualitative signals, testing evidence, scale, or post-launch hypotheses can still be credible when accurate. citeturn24view2turn21view0 | Use metrics when verified; otherwise use honest qualitative evidence. |
| “A portfolio should show only polished final screens.” | Hiring-manager and NN/g guidance consistently asks for process, decisions, constraints, and artifacts beyond the shiny end state. citeturn13view1turn13view3turn14view2 | Show the problem-solving path and your judgment. |
| “You need a full portfolio website to be hireable.” | UX Content Collective’s 2026 hiring discussion explicitly says a full site is not required. citeturn24view0 | Prioritize strong evidence and case content first. |
| “Coursework cases are fine on their own.” | Button’s 2024 guidance says coursework often looks too linear, too context-free, and too similar to other candidates’ work. citeturn21view0 | Use coursework only as supplement or heavily differentiate it. |
| “Show personality mainly in the resume.” | UX Content Collective argues personality belongs more on the portfolio site than in the resume. citeturn24view0 | Keep the CV restrained; let the portfolio carry more voice. |

## Failure modes, testing, and acceptance

OpenAI’s eval guidance is clear: define success before changing the skill, evaluate with task-specific cases instead of vibes, use representative distributions, keep fixtures free of secrets and personal data, and manually trigger skills early to catch invocation misses. The same guidance also argues for baselines before modifications and for combining automated checks with human judgment. citeturn20view0turn20view1turn20view2

### Failure modes and safeguards

| Failure mode | Safeguard |
|---|---|
| Unsupported ownership claim | Require `contribution` evidence before verbs like `owned`, `led`, `drove`, `defined` |
| Unsupported shipment claim | Require `lifecycle` evidence before `launched`, `shipped`, `rolled out` |
| Unsupported outcome or causation | Require `outcome` or `metric` evidence before `improved`, `increased`, `reduced` |
| Claim drift across tailored versions | Force every output bullet to reference canonical achievement IDs internally |
| JD overfitting | Run a keyword-coverage report and reject outputs with repeated terms unsupported by evidence |
| Portfolio case study built around no real evidence | Triage to `reserve` or `hold`, or downgrade to a mini case or writing collection item |
| Confidential data leakage | Require `publication_permission` and `redaction_notes` before any artifact is approved |
| Screenshot-heavy pages with inaccessible text | Require alt/transcript notes in the asset manifest |
| Skill triggers on pure formatting requests | Add explicit non-trigger language in `description` and `SKILL.md` |
| Skill becomes generic career-coaching encyclopedia | Keep workflow narrow; push long examples and theory into `references/` |

### Forward-testing plan for `write-evidence-led-cv`

Keep expected outputs out of the prompt fixtures. Test prompt text, source materials, and grader assertions should be separate files. Grade mostly on facts preserved, claims avoided, evidence gaps surfaced, and degree of role alignment rather than on exact wording. That follows OpenAI’s recommendation to test concrete user-visible promises and avoid brittle vibe checks. citeturn20view0turn20view1

| Test prompt | Realistic fixture setup | Hidden evaluator checks |
|---|---|---|
| “Build a canonical achievement inventory from my CV, two performance reviews, and three project docs.” | Overlapping bullets, duplicated metrics, inconsistent project names | Stable IDs exist; duplicates merged; contradictions surfaced; no private facts invented |
| “Tailor my CV for this senior content designer role without changing the underlying facts.” | JD heavily emphasizes strategy and collaboration; evidence mostly from delivery work | Relevant bullets rise; unsupported seniority inflation absent; natural keyword use |
| “Audit this existing resume for unsupported claims and rewrite only the risky bullets.” | Resume includes `led`, `launched`, `improved conversion` with weak source support | Unsupported claims flagged correctly; rewritten bullets obey claim ceilings |
| “I have no hard metrics for this role. Write the strongest honest bullets you can.” | Good artifacts and stakeholder feedback, no KPI access | Qualitative evidence used well; no fake metrics; bullets remain concise |
| “Create two targeted versions from one master inventory: one for content design, one for conversation design.” | Same evidence supports two target profiles | Both versions reflect the same facts; targeting differs mainly in evidence selection and phrasing |
| “Hand off approved content for formatted output.” | User asks for DOCX after content approval | Skill stops at content package and delegates formatting cleanly |

### Forward-testing plan for `build-content-design-portfolio`

| Test prompt | Realistic fixture setup | Hidden evaluator checks |
|---|---|---|
| “Review eight projects and classify them as full case, mini case, writing collection item, reserve, or hold.” | Mixed real work, coursework, confidential projects, and unreleased prototypes | Triage is defensible; weak and confidential projects are not over-promoted |
| “Turn these screenshots, review notes, and launch docs into a concise case study.” | Strong artifacts, weak metrics, shared team ownership | Story is artifact-led; contribution and shipment are separated; no invented impact |
| “Create a mini case from this project that never shipped.” | Strong process notes, no release proof | Case is framed honestly as exploratory or pre-launch; no shipment language |
| “Audit my portfolio for confidentiality and evidence-safety issues.” | Contains internal IDs, unreleased feature names, and one unsupported metric | All sensitive items flagged; safe redactions proposed |
| “Recommend what visuals to show, how to crop them, and what captions to add.” | Screenshots contain a mix of UI text, user data, and highlight-worthy deltas | Crops focus on evidence; labels are clear; captions and accessibility notes exist |
| “Evaluate the finished portfolio for recruiter usability and accessibility.” | Multi-page draft with dense prose and unlabeled images | Reviewer output catches scannability, broken hierarchy, alt-text gaps, and unclear hooks |

### Scoring rubric

Use a 0–4 scale for each dimension, then weight to 100.

| Dimension | Weight | What a 4 looks like |
|---|---:|---|
| Trigger discipline | 10 | Skill activates only for intended requests and delegates the rest cleanly |
| Evidence extraction quality | 15 | Relevant evidence captured, deduped, and classified correctly |
| Attribution honesty | 15 | Role, collaboration, and leadership wording never exceed support |
| Claim safety | 20 | No invented ownership, shipment, metrics, causation, or permission |
| Targeting quality | 10 | Language aligns to role without changing underlying facts |
| Narrative clarity | 10 | Output is concise, scannable, and audience-appropriate |
| Portfolio artifact handling | 10 | Visual recommendations, captions, redaction, and accessibility notes are coherent |
| Deterministic tooling hygiene | 5 | Validators run cleanly; schemas and manifests are respected |
| Delegation discipline | 5 | Formatting/site implementation is handed off, not absorbed into the skill |

### Acceptance criteria

A skill is ready for repeated use only when all of the following are true:

- Average score is at least **3.5/4.0** overall across the seed suite.
- **Zero critical safety failures** occur: no invented metrics, no unsupported ownership/leadership, no false shipment claims, no confidential artifact leakage.
- Trigger precision is at least **90%** on explicit and implicit tests.
- Every tailored output can be traced back to canonical evidence IDs.
- Validators pass on all structured outputs.
- Human review finds the output credible and easier to trust than a generic prompt-only workflow.
- Changes to the skill are tested against the same baseline suite before release, per OpenAI’s eval-first guidance. citeturn20view0turn20view1turn20view2

## Staged implementation plan

Build **`write-evidence-led-cv` first**. It is the narrower problem, it will likely be reused more often, and its canonical evidence inventory becomes the foundation for the portfolio skill. That sequencing also follows OpenAI’s “keep each skill focused” advice and NN/g’s emphasis on capturing and curating evidence before trying to package it into professional artifacts. citeturn2view1turn22view0

### Recommended implementation stages

1. **Stage one**
   Build the shared evidence model first:
   - achievement/project record schema
   - contradiction log schema
   - claim-ceiling rules
   - validator scripts
   - dummy fixtures with no private data  
   This gives both later skills a stable factual substrate. citeturn20view2turn20view1

2. **Stage two**
   Build `write-evidence-led-cv` as the first production skill:
   - trigger rules
   - canonical inventory update workflow
   - bullet/summary drafting
   - CV safety linting
   - JD keyword coverage report  
   This is the highest-leverage first release because it solves the core fact-stability problem early. citeturn24view1turn17view3

3. **Stage three**
   Run the CV eval suite, refine triggers, and harden the schemas. Add only the validators that prove useful repeatedly. citeturn20view0turn19search0

4. **Stage four**
   Build `build-content-design-portfolio` on top of the same evidence objects:
   - project triage
   - portfolio narrative templates
   - asset manifest
   - confidentiality and accessibility checks  
   This skill benefits from the discipline already created by the CV inventory. citeturn13view0turn13view3turn22view0turn21view2

5. **Stage five**
   Add optional integration handoffs:
   - document-generation handoff package for formatted CVs
   - site-building handoff package for approved portfolio pages and assets  
   Keep those as interfaces, not as expanded domain responsibilities. citeturn1view2turn2view1

### Minimum useful version for `write-evidence-led-cv`

The first useful version should do only this:

- Accept a current CV or resume, plus any mix of reviews, notes, project docs, and one target JD.
- Build or refresh a **canonical achievement inventory** with stable IDs.
- Rewrite **role-targeted bullets** and a **short professional summary** from that inventory.
- Flag unsupported claims and missing evidence.
- Produce a clean handoff package for formatting if asked.
- Explicitly **not** handle visual design, DOCX styling, LinkedIn rewrites, or cover letters.

That scope is small enough to evaluate well and broad enough to solve the repeat problem that generic prompt-writing does not solve. It also maps tightly to current resume guidance around targeted accomplishments, clarity, and evidence-backed phrasing. citeturn17view2turn17view3turn17view4turn23view4

### Minimum useful version for `build-content-design-portfolio`

The first useful version should do only this:

- Accept evidence for up to **three** projects.
- Classify each project as `full case`, `mini case`, `writing collection item`, `reserve`, or `hold`.
- Draft **one full case study** and **one mini case**.
- Produce an **asset manifest** for screenshots and artifacts, including crop notes, caption notes, alt/transcript notes, and permission state.
- Run a portfolio safety review covering attribution, confidentiality, unsupported results, and recruiter usability.
- Explicitly **not** build the website, choose a CMS, or implement hosting.

That scope stays focused on the work hiring managers actually care about: project selection, personal contribution, decision-making, evidence quality, and safe presentation. It also avoids turning the skill into a generic website framework, which both your brief and OpenAI’s skill guidance argue against. citeturn13view0turn13view1turn13view3turn13view4turn2view1