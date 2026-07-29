import type { PricingCaseStory } from "./PricingCase";

export const pricingEvolutionCase: PricingCaseStory = {
 title: "Making the more expensive plan explain itself",
  synopsis: [
 "DeepL’s Translator pricing page put four plans side by side and asked people to pick one. Advanced cost €24.99 per user per month, Ultimate cost €49.99, and both cards listed the same eight benefits in the same order.",
 "I restructured the cards with the product team so each plan stated only what it added to the one below it. When a later layout came back without the line that named what each plan inherited, I asked for it back. The cumulative structure shipped, and DeepL’s pricing page still uses it.",
  ],
  movements: [
    {
 id: "upgrade-in-two-numbers",
 title: "The upgrade was two numbers, and nothing pointed to them",
      blocks: [
        {
          kind: "prose",
          paragraphs: [
 "The paid cards ran as checklists. Starter carried six lines; Advanced and Ultimate carried eight each. Advanced’s eight and Ultimate’s eight were the same eight, in the same order, and six of them matched word for word—data security, unlimited text translation, shared glossaries, team administration, single sign-on and CAT tool integration.",
 "Two lines carried the entire difference. Advanced said “20 editable file translations per user/month in total” and “Upload files up to 20 MB in size.” Ultimate said “100 editable file translations per user/month in total” and “Upload files up to 30 MB in size.” The price roughly doubled; two numbers moved.",
 "Nothing on the card named that upgrade. To find it, you had to read the two lists against each other, line by line, and notice which figures changed—the reader was doing the card’s job at the moment of deciding whether to spend another €25 per user per month.",
 "Three of the eight lines ran to two or three rows inside a narrow column, including both lines that carried the price difference. “Upload files up to 20 MB in size” also buried its number in the middle of a sentence. Enterprise, at the far right, dropped the vocabulary altogether while its neighbours counted files and megabytes.",
          ],
        },
        {
          kind: "figure",
          image: {
 label: "Working layout — repeated benefit lists, June–July 2024",
 src: "/work/pricing-evolution/translator-repeated-working-layout.png",
 width: 1088,
 height: 863,
 alt: "A four-column DeepL Translator plan grid: Starter at €7.49, Advanced at €24.99, Ultimate at €49.99, and an Enterprise contact-sales card. Advanced and Ultimate list the same eight benefits in the same order, differing only in two figures: 20 versus 100 editable file translations per user each month, and a 20 MB versus 30 MB upload limit.",
 caption: "The price roughly doubles between Advanced and Ultimate, and only two numbers change. Nothing on either card points to them.",
          },
        },
      ],
    },
    {
 id: "one-rule",
 title: "One rule: name a benefit on the plan that adds it",
      blocks: [
        {
          kind: "prose",
          paragraphs: [
 "The rule was easy to state and awkward to apply. Name a benefit once, on the plan that introduces it, and let every plan above it say in a single line what it carries forward. Team administration arrives with Starter, so it belongs on Starter and nowhere above. Single sign-on and CAT tool integration arrive with Advanced, so they appear once, on Advanced. Ultimate raises two limits, so Ultimate lists two limits.",
 "Cumulative wording has one trap, and the numeric limits are where it opens. “All Advanced features, plus: 100 file translations/month” has to read as a raised ceiling, not as a second allowance stacked on Advanced’s 20. Features accumulate; limits replace. The higher number supersedes the lower one, and the wording has to make that obvious without a footnote.",
 "I pushed the benefit wording toward one shape per kind of fact. Every file allowance became “N file translations/month” and every size cap became “N MB maximum file size,” so the same named limit appears one card to the right with a bigger number. “Upload files up to 20 MB in size” became “20 MB maximum file size.” “2,000 glossaries with 5,000 entries each, shared with your team” became “2,000 shared glossaries (5,000 entries each).” The facts stayed. The sentence shapes stopped competing with the comparison the columns existed to make.",
          ],
        },
      ],
    },
    {
 id: "inheritance-cue",
 title: "Six lines came off Ultimate, and one line had to go back",
      blocks: [
        {
          kind: "prose",
          paragraphs: [
 "When the work moved onto a new layout, the repeats were gone but the inheritance heading had not survived the move. Cutting without that heading would have been worse than not cutting at all. Strip six lines off Ultimate and say nothing about what it keeps, and the most expensive self-serve plan shows two benefits while the free plan shows four. The shortest list reads as the smallest offer.",
 "So I asked for the line back. In the revised state, each paid card opens with what it inherits—“All Free features, plus:”, “All Starter features, plus:” and “All Advanced features, plus:”—and then lists only its own additions. Advanced carries five additions under its heading instead of eight repeated lines. Ultimate’s whole card is the heading and two lines: “100 file translations/month” and “30 MB maximum file size.” One line does the work of the six it replaced, and the two that justify the price are the only two left standing.",
 "Enterprise picked up “All Ultimate features, plus:” and four additions, so the most expensive column answered the same question as the rest instead of switching to brochure language. The revised layout also carries a Free tier at the left, which gives “All Free features, plus:” something concrete to point at.",
          ],
        },
        {
          kind: "figure",
          image: {
 label: "Working layout — cumulative structure, July 2024",
 src: "/work/pricing-evolution/translator-cumulative-working-layout.png",
 width: 1088,
 height: 846,
 alt: "A five-column plan grid for Free, Starter, Advanced, Ultimate and Enterprise. Each paid column opens with an inheritance line naming the previous plan, followed only by that plan’s additions. Advanced adds five items, including single sign-on and CAT tool integration. Ultimate adds two: 100 file translations per month and a 30 MB maximum file size.",
 caption: "Every paid card now names what it carries forward. That lets Ultimate focus on the two limits that actually change.",
              },
            },
      ],
    },
  ],
  closing: {
 heading: "Two years on, the page still names what each plan inherits",
    paragraphs: [
 "The cumulative structure shipped. DeepL later renamed the paid Translator plans—Starter, Advanced and Ultimate became Individual, Team and Business—and kept the pattern. On the public pricing page today, Team opens with “Everything in Individual, plus:” and Business opens with “Everything in Team, plus:”, each followed by its own additions. The names changed. The structure held.",
 "Six repeated lines came off Ultimate in that working layout. They could come off only because I called for the line above them—the one naming what Ultimate keeps—to be restored. A plan card can drop what the reader already has, as long as it still says what the reader is getting. Under different plan names, that is still how the page works.",
    ],
  },
  next: { href: "/work/checkout", label: "How shortening DeepL's checkout flow added €2.4M ARR" },
};
