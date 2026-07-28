---
source_document: [#DM-2112] Pricing page V2.pdf
recovered_from: Claude Projects export (acct2)
claude_projects: Unified pricing page
sha256: d7eeef5371ee834729b99be9a7a3c6a1b13a220bbbf814b8b39766028c47f523
chars: 2752
tier: B — held, full extracted text
---

[DM-2112] Pricing page V2 Created: 18/Nov/24 Updated: 17/Dec/24
Status: Design
Project: DeepL Monetization
Components: None
Affects versions: None
Fix versions: None
Type: Epic Priority: High
Reporter: Alexander Joshua Thurman Assignee: Unassigned
Resolution: Unresolved Votes: 0
Labels: None
Remaining Estimate: Not Specified
Time Spent: Not Specified
Original estimate: Not Specified
Sprint:
Description
Background
Our pricing page, even with the rebrand, is looking a bit worse for wear, has some room for UX improvements, and doesn’t reflect the current offering of
our plans.
Within this change, we would update a number of things.
New UX enabling users to navigate pricing pages of various product; Write, Voice, API (A global pricing page)
Update UI components for increased readability and flexibility.
Update the styling to reflect the new brand
Minor copy changes for consistency and visual improvements
Update the pricing grid and comparison table to ensure all the latest features are present
Note: This design still includes the bundle subscription (Translator + Write with discount) within the pricing page – as it works today. In the future, we
will require a more robust multiple-subscription function for self-serve customers, where they can select multiple products or choose differing number
of licenses per each — much of this will likely become part of the checkout flow. However, for now this is not a pressing issue due to lack of other
products available to self-serve customers and very few multi-license subscriptions being sold via self serve.
Question to answer:
What is the timeline on phasing out bundle subscriptions?
Design
Link
Implementation details
Introduce product sub navigation
Add a page for DeepL Voice
Show standalone DeepL Write plans
New plan component
Updated comparison table styling
Add or update any feature missing from the current plans.
New tooltip component (remove info icon)
Replace the country selector with a currency selector
Minor copy updates in pricing grid and comparison table (see table with explicit changes)
Add FAQs for API & Voice
Copy updates
Acceptance criteria
User should be navigated to the relevant pricing page depending on the which page they came from. For example:
Using DeepL Translator → Click ‘Start free trial’ → Translator pricing grid
Using DeepL Write → Click ‘Start free trial’ → Write pricing grid

When unclear, defaults to Translator pricing grid.
Keep existing patterns used for current Pro customers, etc. I.e. include the message above the pricing grid to make subscription changes in their
account.
Experiment settings
Generated at Thu Jan 09 12:31:38 GMT 2025 by Mason Mitchel using Jira 1001.0.0-SNAPSHOT#100277-
rev:a7f5bcfe501cffd52e4cefa8abeed20e3925c77b.