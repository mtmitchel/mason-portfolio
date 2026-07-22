# Portfolio site review brief for Claude Fable

- **Prepared:** 2026-07-22
- **Project:** Mason Mitchel — UX copywriting and content design portfolio
- **Review scope:** Design and layout, case-study copy, portfolio strategy and the
  overall approach
- **Current state:** Local review-stage implementation; unpublished

## Executive summary

This is an evidence-led portfolio for Mason Mitchel, a UX copywriter and content
designer. It is meant to help recruiters, hiring managers and content-design
leaders understand three things quickly:

1. the breadth of Mason's work across product, growth and enterprise software;
2. the content-design judgment he applied to real user and business problems;
3. the organizational or business impact of that work where supported.

The current site is intentionally DeepL-heavy because it is also being used as a
selection surface. It contains more DeepL work than the final portfolio should.
The intended final DeepL footprint is approximately three entries so there is
room to add work from previous employers:

- one major product or monetization case;
- one account-security or administration-flow case; and
- one compact marketing or editorial entry.

The central review question is therefore not only “Does each page look good?” It
is also “Does this system make Mason's responsibilities, judgment and impact easy
to scan, and which three DeepL stories create the strongest foundation for a
broader multi-employer portfolio?”

## Audience and positioning

### Primary audience

- Recruiters screening UX writing and content-design candidates.
- Hiring managers and content-design leaders assessing scope, craft and
  seniority.
- Cross-functional product leaders who need to see how content work affects
  conversion, comprehension, trust and operational safety.

### Intended positioning

Mason should be understood as a **UX copywriter and content designer**, not as a
product designer. The visuals are evidence of the product context in which the
content worked; they are not an attempt to claim ownership of the interface
design.

The current homepage role line is:

> UX writer and content designer across product, growth and enterprise.

The current About copy says:

> I use language, product context and experimentation to clarify what is
> happening, what people can do next and what a decision means.

> At DeepL, I worked across Translator and Write, subscriptions, enterprise
> administration, integrations, desktop and mobile experiences.

The desired hierarchy is breadth of responsibility first, meaningful impact
second and representative product evidence third. The site should not reduce
Mason's role to one experiment or a string-production inventory.

## Current stage and what is not final

This is a local candidate-selection and design-review version, not a finished
public portfolio.

- The homepage currently shows six DeepL product and enterprise stories. That
  is useful for judging the shared layout, but it is too much DeepL material for
  the final portfolio.
- A private, no-index route at `/work/candidate-review` compares ten finished
  options for the three eventual DeepL slots: two product/monetization options,
  five security/administration options and three marketing/editorial options.
- The final selected-work list will later include previous-employer material.
- Some supporting routes and evidence remain available locally even if they are
  not expected to become headline portfolio projects.
- The site has not been committed, pushed or deployed in its current form.
- Publication still requires a separate factual, confidentiality and
  employment-agreement review.

Please review the current site as a strong working system and candidate slate,
not as a recommendation that all visible DeepL projects should ship.

## Binding creative direction

The binding composition reference is [fredrika.dev](https://fredrika.dev/).
The goal is to follow its restraint and information architecture, not copy its
identity or wording:

- a concise introduction;
- an image-led project index;
- confident whitespace;
- large project visuals;
- restrained typography; and
- one focused page per project.

The site should not become a design-agency landing page, a dashboard, a set of
proposal cards or one monolithic case-study document. It should remain calm,
direct and recruiter-scannable.

### Writing constraints

- Use literal project names and direct case-study headlines.
- Avoid slogans, metaphors, manufactured drama and advertising-style hooks.
- Do not write headlines such as “The free translation stopped. The relationship
  did not have to.”
- Keep project-card metadata factual and secondary to the project name.
- Keep all visible text at 14px or larger.
- Explain decisions and trade-offs instead of narrating generic process steps.
- Use supported business figures at their correct program scope rather than
  attaching them to one screenshot or isolated copy change.

## Information architecture

### Homepage

The homepage currently contains:

1. Mason's name, one-line role summary and vertical Work/About/Résumé navigation.
2. A “Selected work” heading.
3. A three-column masonry-style project grid on desktop, two columns on tablet
   and one column on narrow mobile.
4. Six current DeepL entries.
5. A short About section.
6. Email and LinkedIn links.

The six current homepage entries are:

- Hard blockers.
- Subscription checkout.
- MFA account recovery.
- Bulk user deletion.
- Adding users at scale.
- Team access controls.

### Candidate-review index

`/work/candidate-review` uses the same grid and card pattern as the homepage. It
does not introduce a second dashboard-style layout. It contains:

- Product option 1: Hard blockers.
- Product option 2: Subscription checkout.
- Admin option 1: MFA account recovery.
- Admin option 2: Bulk user deletion.
- Admin option 3: Adding users at scale.
- Admin option 4: Custom domain management.
- Admin option 5: Custom logo management.
- Marketing option 1: Localization research report.
- Marketing option 2: Localization report campaign.
- Marketing option 3: Data security article.

This route is `noindex, nofollow` and exists only as a local decision surface.

### Individual project pages

Substantial projects use one shared artifact-led template:

1. project context, direct title and short contribution summary;
2. role, collaborators and why the work mattered;
3. a large representative product or editorial artifact;
4. the problem and constraint;
5. an optional before/after “language turn”;
6. the content decisions and trade-off;
7. an optional state-by-state flow;
8. supporting visual evidence;
9. the supported outcome; and
10. an explicit evidence-limit note.

Every evidence image opens in a centered accessible lightbox. The lightbox traps
focus, restores focus when closed, locks page scrolling, closes with Escape or a
backdrop click and associates the expanded image with its caption.

Legacy URLs for separate Translator upgrades, Write Pro upgrades, trial
eligibility and global pricing redirect to the consolidated hard-blocker or
checkout case rather than preserving duplicate case studies.

## Current visual system

The visual system is deliberately restrained:

- Geist and Geist Mono.
- Warm near-white page and surface backgrounds.
- Dark neutral text, muted gray-green secondary text and light rules.
- One subtle green accent.
- A maximum homepage/index width of approximately 1120px.
- A narrow case-study reading width of approximately 820px.
- Body copy around 17px on case pages with a 620px prose measure.
- Project titles at 18px and card metadata at 14px.
- Minimal borders, five-pixel card radii and no decorative pills or tags.
- Product screenshots shown at natural proportions rather than forced into fixed
  aspect-ratio crops.

The desktop project grid uses CSS columns so images with different natural
heights create an editorial masonry rhythm. At smaller breakpoints it becomes
two columns and then one. Case pages use a much narrower centered column to keep
the copy readable and allow the historical product screens to carry the visual
weight.

## DeepL candidate slate

### Product/monetization option 1: Hard blockers

**Route:** `/work/pro-driver-experiments`

This case combines related upgrade blockers across DeepL Translator and DeepL
Write as one Pro Driver experiment wave. It is not two separate upgrade cases.
The ten current visuals show how the shared blocker pattern changes by product,
limit and account state:

- translation usage limit;
- formality access;
- additional glossaries;
- document-size limit;
- remaining monthly document allowance;
- network usage limit;
- two Write Pro hard-block surfaces; and
- two illustrated Write variants for free and existing Translator Pro users.

The business result belongs to the overall free-to-paid/Pro Driver wave: Mason's
career material records a 12% lift in paid conversion and a seven-figure ARR
uplift. The portfolio must not imply that one modal, one line of copy or one
visible treatment caused those figures.

What this option should communicate: commercial content judgment, systematic
variation across account/product states, breadth of surface area and
experiment-informed product writing.

### Product/monetization option 2: Subscription checkout

**Route:** `/work/checkout`

This case treats sign-up and checkout as one conditional content system. Four
fresh source exports cover:

- the “Start my 30-day free trial” account-creation state;
- a Translator and Write bundle checkout;
- a 20-seat team checkout; and
- a no-trial checkout with immediate payment and consent language.

The story focuses on maintaining consistency across product selection, plan,
seat count, billing cadence, trial eligibility, amount due, consent and final
confirmation. Trial eligibility is supporting logic inside this case, not a
separate project. The old standalone global-pricing case has also been removed.

What this option should communicate: end-to-end conversion-flow writing,
content-model thinking, legal/commercial accuracy and the ability to keep one
purchase journey coherent as its state changes.

### Security/administration option 1: MFA account recovery

**Route:** `/work/multi-factor-authentication`

This is one complete recovery journey rather than a gallery of unrelated
security settings. Five safe visuals show:

1. normal MFA login and the recovery entry point;
2. failed authentication and alternative recovery;
3. recovery-code verification;
4. reset/re-enrollment guidance; and
5. the final active security state.

A credential-bearing authenticator setup frame is deliberately excluded because
it exposes a manual secret. The case demonstrates recovery logic, sequencing and
trust-sensitive language. It does not claim launch, adoption, reduced support
contacts or a measured security result.

What this option should communicate: content judgment in a high-trust flow,
clear state transitions and the ability to create a recoverable experience
without weakening the underlying security model.

### Security/administration option 2: Bulk user deletion

**Route:** `/work/bulk-administration`

This is a six-state destructive admin flow:

1. the existing user-management context;
2. an inactive-user filter and scoped result;
3. ten selected users;
4. the bulk-action menu;
5. a confirmation that names the loss of subscription access; and
6. the resulting empty filtered state with completion feedback.

The source screens use fictional `@domain.com` prototype accounts. The case is
about preserving scope, naming consequences and showing a visible result. It
does not claim measured error reduction, adoption or business impact.

What this option should communicate: enterprise-admin breadth, careful handling
of destructive actions and the ability to think through a complete flow from
selection to consequence to feedback.

### Marketing/editorial option 1: Localization research report

**Route:** `/work/localization-report`

This option presents a 17-page report built from survey findings from 415 senior
marketers across multiple markets and business sizes. The portfolio treatment
focuses on narrative structure, prioritization of findings, customer examples
and turning research into recommendations for marketing leaders.

### Marketing/editorial option 2: Localization report campaign

**Route:** `/work/report-campaign`

This option shows how one evidence base was adapted across a long-form report, a
marketing article and webinar-derived customer stories for HubSpot and Phrase.
It is about editorial range and repurposing rather than an unsupported campaign
performance figure.

### Marketing/editorial option 3: Data security article

**Route:** `/work/data-security`

This is a historical May 2023 B2B article that translated infrastructure,
retention, encryption, failover, subcontractor and account-control details into
plain language for business readers. It is comparatively compact and may leave
more room for previous-employer work, but its product and technical statements
need a final current-accuracy review before publication.

## Supporting DeepL material currently on the homepage

Two additional cases show breadth on the homepage but are not part of the
eventual three-slot DeepL cap:

- **Adding users at scale:** group-specific manual entry, validation, CSV
  replacement, background processing and a visible final result. Its local
  review page currently includes all 84 source-layer exports before trimming.
- **Team access controls:** roles, invitation status, groups and access
  restrictions in enterprise administration.

The custom-domain and custom-logo option pages likewise show their complete
pre-selection source sets: 19 and 9 exports respectively. These exhaustive
galleries deliberately expose the full decision space for review; they are not
the recommended final public edit.

These can support a hiring conversation or later become a focused writing
collection, but they should not crowd out stronger work from previous employers.

## Evidence and confidentiality model

The portfolio separates five questions that are easy to conflate:

1. Does the artifact exist?
2. What did Mason contribute?
3. What was the lifecycle state: exploration, experiment, approved or shipped?
4. What outcome is actually supported?
5. Is the material safe and permitted to publish?

The product visuals are historical Figma evidence exported from exact product
frames. They can prove that a screen, state or content exploration existed. They
do not automatically prove authorship, launch, causation or measured impact.
Performance-review evidence can support Mason's contribution and program-level
outcomes, but it does not turn every related frame into a shipped treatment.

Final public-facing assets must not include gray Figma canvas, sticky notes, working
labels, comments, selection chrome, employee identities, customer data,
invitation links, account identifiers, credentials, internal tickets,
experiment allocation or unsupported metrics. Images currently under
`public/work/` currently include the three exhaustive Team Administration
review sets as a temporary pre-selection state. Those sets require a separate
confidentiality and publication pass after Mason chooses what to keep.

The site intentionally includes evidence-limit notes. Please assess whether
those notes build trust without becoming repetitive, defensive or too prominent.

## Repository and implementation map

The actual Git repository is the `site/` directory. The parent workspace holds
private evidence and archives and is not itself a Git repository.

Key files:

- `app/page.tsx` — homepage structure and About copy.
- `app/work/deeplProjectData.ts` — the case-study content and image metadata.
- `app/work/DeepLProjectCase.tsx` — shared case-study page structure.
- `app/components/DeepLProjectGrid.tsx` — shared image-led project index.
- `app/components/PortfolioChrome.tsx` — site header, footer and supporting case
  components.
- `app/components/ImageLightbox.tsx` — accessible evidence enlargement.
- `app/globals.css` — the complete visual system and responsive behavior.
- `app/work/*/page.tsx` — route metadata and page entry points.
- `public/work/<case>/` — sanitized historical product and editorial evidence.
- `tests/rendered-html.test.mjs` — route, content, redirect, image-dimension,
  duplicate-asset, safety and résumé checks.
- `README.md` — local commands, routes and publication boundary.
- `CHANGELOG.md` — meaningful local changes and publication state.

Technical stack:

- React 19 and Next.js 16 app-router conventions.
- vinext and Vite for the Cloudflare Worker/Sites build.
- One static content-data module rather than a CMS or database.
- Plain CSS rather than a component library or utility-CSS framework.
- No authentication, persistence or client-side application state beyond the
  image lightbox.

The repository is intentionally simple because the portfolio is primarily a
content and presentation system. Please avoid recommending a CMS, design system
dependency or complex application architecture unless it solves a concrete
review finding.

## What feedback would be most useful

Please return a prioritized critique, not a wholesale redesign. Separate your
findings into **design/layout**, **copy/content**, and **portfolio strategy**.
For each material finding, explain the user/recruiter consequence and propose a
specific remedy.

### Design and layout questions

1. In the first ten seconds, is Mason's role and the nature of the work clear?
2. Does the three-column masonry index feel confident and image-led, or busy and
   difficult to scan?
3. Are project name, metadata and image ordered correctly for recruiter
   scanning?
4. Is the amount of whitespace calm and deliberate, or does it weaken grouping
   and momentum?
5. Do the individual pages balance prose and product evidence, or feel too long,
   narrow, repetitive or templated?
6. Are the product images large and legible enough in the page, before opening
   the lightbox?
7. Does the state-sequence treatment clarify complex flows such as MFA recovery
   and bulk deletion?
8. Does the layout continue to work at desktop, tablet and narrow mobile sizes?
9. Does the design resemble the restraint and pacing of Fredrika's portfolio
   without feeling like an imitation?

### Copy and content questions

1. Are the homepage introduction and About copy specific enough to establish
   breadth without becoming a generic personal-brand statement?
2. Do case-study titles describe the work directly and quickly?
3. Can a recruiter identify Mason's role, the problem, the key content decision
   and the result without reading every paragraph?
4. Where does the copy repeat the same idea under different headings?
5. Which passages sound inflated, abstract, defensive or like generic
   content-design language?
6. Do the “language turn” comparisons feel supported and useful, or artificial?
7. Do outcome sections answer “so what?” while keeping team/program outcomes
   separate from sole personal causation?
8. Are evidence-limit notes appropriately concise and confidence-building?
9. If you recommend a rewrite, quote the exact current line and supply a tighter
   replacement that preserves the supported meaning.

### Portfolio-strategy questions

1. Which product case is stronger: the commercially broad hard-blocker wave or
   the more coherent end-to-end checkout case?
2. Which administration case is stronger: trust-sensitive MFA recovery or the
   visually complete bulk-deletion flow?
3. Which marketing treatment contributes the most range without making DeepL
   dominate the eventual portfolio?
4. Which current supporting cases should be folded into a smaller writing
   collection or removed from the final public index?
5. Does the current system leave a clear path for adding previous-employer work
   without requiring a new layout?
6. What is the smallest set of changes that would make the portfolio feel ready
   for hiring review after the final project selection?

## Suggested screenshot set for the review

To review the experience rather than isolated components, use screenshots in
this order:

1. Homepage at desktop width, including the introduction and first project row.
2. Full desktop homepage showing the complete masonry rhythm and About section.
3. Homepage at a narrow mobile width.
4. Candidate-review index showing all ten options.
5. Hard-blocker case: hero, representative visual, decisions and evidence grid.
6. Checkout case: hero, sign-up state and conditional checkout examples.
7. MFA recovery case: hero and complete five-step sequence.
8. Bulk user deletion case: hero and complete six-state flow.
9. Adding users case: hero and representative portions of the complete 84-layer source gallery.
10. Custom domain case: representative portions of all 19 source exports.
11. Custom logo case: representative portions of all 9 source exports.
12. One marketing option, preferably the localization report or report campaign.
13. One expanded image-lightbox state if interaction feedback is desired.

Screenshots should be assessed alongside the live repository because a static
capture cannot demonstrate responsive behavior, image enlargement, keyboard
interaction or redirects.

## Review format requested

Please deliver:

1. A short overall verdict: what the site currently communicates well and its
   biggest weakness.
2. Up to five priority findings, ordered by hiring impact.
3. A recommended three-project DeepL slate, with one-sentence reasoning for
   each choice.
4. Specific copy edits only where the current wording materially weakens
   comprehension, credibility or scanning.
5. A short “keep as-is” section so strong decisions are not accidentally lost.
6. A smallest-useful revision sequence rather than a completely new visual
   direction.

Do not assume that more content, more case studies, more metrics or a new layout
will automatically improve the portfolio. The goal is a selective, credible and
visually confident body of work that can later accommodate previous employers.
