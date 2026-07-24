# DeepL pricing-page evolution: archive addendum

Date: 23 July 2026

Companion to: *DeepL Product, Pricing, and Pricing-Page Evolution*

## Purpose

This addendum fills several gaps in the report with dated pricing-page evidence. It also corrects one claim whose source did not support the date assigned to it.

The strongest recoveries came from Arquivo.pt and public urlscan page-content records. The Wayback Machine preserved the 25 October 2023 DeepL Pro page shell, including “Find your perfect plan,” but not the dynamically loaded plan grid. Its archived JavaScript and CDX endpoints were unavailable during this pass, so the Wayback capture should not be treated as evidence of the plans or prices displayed that day.

## Findings

### 1. The Translator rename occurred after 4 June and by 21 July 2025

The 4 June 2025 pricing-page record still displays:

- Starter — €7.49 per month, billed annually
- Advanced — €24.99 per user/month, billed annually
- Ultimate — €49.99 per user/month, billed annually

The 21 July 2025 record displays the replacement ladder:

- Individual — €7.49 per month, billed annually
- Team — €24.99 per user/month, billed annually
- Business — €49.99 per user/month, billed annually

This narrows the public pricing-page rename to **after 4 June and no later than 21 July 2025**. The prices did not change in these euro-locale records; the names and presentation did.

Sources: [4 June 2025 page content](https://urlscan.io/result/01973bda-1c47-718e-bc21-1b048af6933a/content/), [21 July 2025 page content](https://urlscan.io/result/01982c3f-d846-76bf-b548-6d12ff27a17c/content/)

### 2. The cumulative “Everything in …, plus” structure arrived with the renamed ladder

The 4 June record presents Starter, Advanced, and Ultimate with their own feature lists. The 21 July record changes both the names and the information architecture:

- Individual: “Everything in Free, plus:”
- Team: “Everything in Individual, plus:”
- Business: “Everything in Team, plus:”

The first appearance can therefore be bounded to the same window: **after 4 June and by 21 July 2025**. This closes the report’s unresolved question about when the cumulative comparison copy appeared.

Sources: [4 June 2025 page content](https://urlscan.io/result/01973bda-1c47-718e-bc21-1b048af6933a/content/), [21 July 2025 page content](https://urlscan.io/result/01982c3f-d846-76bf-b548-6d12ff27a17c/content/)

### 3. Translator + Write bundles existed at the April 2024 Write Pro launch

A Japanese launch report dated 25 April 2024 gives explicit launch-era prices for:

- standalone Write Pro — ¥2,250 monthly, or ¥1,500 monthly equivalent on annual billing
- Starter + Write Pro — ¥3,180 monthly, or ¥2,350 monthly equivalent on annual billing
- Advanced + Write Pro — ¥5,850 monthly, or ¥4,650 monthly equivalent on annual billing

DeepL’s archived June 2024 pricing-page JavaScript independently defines `STARTER_WRITE`, `ADVANCED_WRITE`, and `ULTIMATE_WRITE` plan types and a bundle view. Together, these establish that named Translator + Write bundles were not merely a later possibility: they were part of the commercial offer at launch and were encoded into the web pricing experience by June 2024.

Sources: [25 April 2024 launch report](https://www.watch.impress.co.jp/docs/news/1587448.html), [archived June 2024 pricing-page component](https://arquivo.pt/noFrame/replay/20240613235705id_/https://static.deepl.com/gatsby/component---src-pages-pro-js-8c1f92a1b7abc59b078f.js), [archived June 2024 shared pricing code](https://arquivo.pt/noFrame/replay/20240609042712js_/https://static.deepl.com/gatsby/e98e457a04ae1e49565c830b4ef7dccd2cd31f9d-6eaafe89f7445fa67138.js)

### 4. The web pricing page changed from a bundle tab to a Write Pro add-on after 9 October and by 29 October 2025

On 9 October 2025 the page still exposes three plan-family tabs:

- DeepL Translator
- DeepL Translator + DeepL Write
- DeepL API

On 29 October 2025 the bundle tab is gone. The page instead exposes DeepL Translator and DeepL API tabs and promotes: “Enhance your writing with the Write Pro add-on.”

The bundle-to-add-on pricing-page transition is therefore bounded to **after 9 October and no later than 29 October 2025**.

Sources: [9 October 2025 page content](https://urlscan.io/result/0199c773-b1c8-721b-bfc0-7b040bf86da1/content/), [29 October 2025 page content](https://urlscan.io/result/019a2fe4-f095-7269-ba07-ab4e9803fa57/content/)

### 5. Voice for Meetings was a first-class pricing tab by 22 April 2026

The 22 April 2026 pricing-page record places “Voice for Meetings” beside “Translator” and “API” in the plan selector. This directly establishes web-pricing-page presence by that date.

The record does not expose the hidden Voice tab’s complete plan grid, so it does **not** prove the web prices or the full set of Voice tier names. Mobile in-app-purchase prices should continue to be treated as channel-specific rather than substituted for web prices.

Source: [22 April 2026 page content](https://urlscan.io/result/019db4ba-f937-766f-a36e-c5a12470341d/content/)

### 6. The report’s November 2025 API transition claim is not supported

The report says that, by the time PricingSaaS began tracking DeepL in November 2025, Developer and Growth were already the public API lineup. PricingSaaS’s current company page is not a dated November 2025 snapshot and cannot prove that historical state.

A directly inspectable Polish DeepL API pricing-page record from 15 October 2025 still sells:

- DeepL API Free
- DeepL API Pro — €4.99 per month plus usage
- an enterprise sales option

The current DeepL help article does establish the later state: Developer API, Growth API, and Enterprise API are current, while API Free and API Pro can no longer be purchased. The evidence currently supports this bounded conclusion:

> Legacy API Free/Pro remained publicly offered in at least one European-language sales channel on 15 October 2025. The exact global or English-page cutover to Developer/Growth/Enterprise remains unresolved.

Sources: [15 October 2025 Polish API page content](https://urlscan.io/result/0199e88c-9a5d-7579-8931-57d905b5ee59/content/), [current DeepL API plans help article](https://support.deepl.com/hc/en-us/articles/360021200939-DeepL-API-plans), [current PricingSaaS company page](https://pricingsaas.com/companies/deepl)

## Corrections to apply to the report

| Report passage | Recommended replacement |
| --- | --- |
| “The exact public date” of the Translator rename could not be pinned down and was “likely during 2025.” | The public pricing-page rename occurred after 4 June and by 21 July 2025. |
| Named Translator + Write bundle appearance and disappearance could not be pinned down. | Bundle offers existed at the April 2024 Write Pro launch; the web bundle tab remained on 9 October 2025 and was replaced by add-on presentation by 29 October 2025. |
| The first cumulative “Everything in …, plus” appearance was not established. | It appeared after 4 June and by 21 July 2025, alongside the Individual/Team/Business rename. |
| Developer/Growth had replaced API Free/Pro as the public default by November 2025. | Remove this date claim. API Free/Pro remained public on the Polish pricing page on 15 October 2025; the exact channel-by-channel transition remains unresolved. |
| Voice pricing-page presence was inferred from current help material. | Voice for Meetings is directly visible as a first-class pricing tab in a 22 April 2026 page record; its complete web pricing grid remains unrecovered. |

## Remaining gaps

- The exact day between 4 June and 21 July 2025 when the Translator rename and cumulative-copy redesign went live.
- The exact day between 9 and 29 October 2025 when the Write bundle tab became an add-on treatment.
- The first date and channel for the API Developer/Growth/Enterprise rollout.
- The historical web prices and complete plan grid behind the Voice for Meetings tab.
- Whether the plan transitions rolled out globally at once or by locale, currency, account state, or experiment cohort.

These should remain bounded negative findings. None is necessary to support the narrower dated claims above.

## Archive-method note

The following sources serve different evidentiary roles:

- [Wayback capture, 25 October 2023](https://web.archive.org/web/20231025100900/https://www.deepl.com/en/pro): confirms the page shell, not the dynamic pricing grid.
- [Arquivo.pt capture, 9 June 2024](https://arquivo.pt/wayback/20240609042712/https://www.deepl.com/en/pro): preserves historical application assets that expose bundle plan types.
- urlscan page-content records: preserve rendered text from dated public page visits and provide the strongest direct evidence for the 2025 and 2026 presentation changes.
- Current DeepL help material: establishes current state only unless paired with a dated archive.
