# DeepL document inventory guide

**Updated:** 2026-07-28
**Status:** Human-readable guide to the canonical
[`deepl-document-inventory.json`](deepl-document-inventory.json).

The JSON inventory is the source of truth. It is rebuilt from both assistant
exports and records one row per provider source ID, with every observed
occurrence preserved as a locator. This guide explains how to use it; it is not
a second hand-maintained document list.

## Current inventory

| Measure | Current result |
| --- | ---: |
| Included source records | 327 |
| Candidate title groups | 121 |
| ChatGPT records | 211 |
| Claude Projects records | 36 |
| Claude conversation-attachment records | 80 |
| ChatGPT records with retained partial text | 99 |
| ChatGPT metadata-only records | 112 |
| Claude records with retained full text | 116 |
| Exact Claude retained-content groups | 58 |
| Claude documents copied into this repository | 25 |

The 116 Claude rows include repeated copies of the same exact extracted
content. Thirty-six come from seven reviewed Claude Projects and 80 come from
Claude conversation attachments that have a direct, privacy-safe filename
signal or an already reviewed content hash. Two project records remain only in
the read-only raw Claude export: `Code Review for Translator Sidepanel
Extension.md` and one line-wrap variant of `DeepL Write monetization / Key terms
for paid plans launch.pdf`. Their hashes and raw-export locators remain in the
JSON inventory.

The scan also found 306 Claude conversation attachments whose retained content
contains a DeepL signal but whose filename is generic or not safely
DeepL-specific. They are counted but their names are not committed. They require
positive review by opaque source selector before inclusion.

## Four independent questions

Do not collapse these fields into a single evidence tier.

The inventory is deliberately neutral about discipline. It records custody,
origin, privacy, and claim coverage so in-scope UX copy and content-design work
can resolve its sources; it does not classify or rank marketing, editorial, or
other portfolio work.

| Field | Question it answers | Important limit |
| --- | --- | --- |
| `custody` | What bytes or text are held? | Custody says nothing about who created the content. |
| `origin` | What kind of source created the content? | Unknown stays unknown until checked; a polished document is not automatically an organizational record. |
| `privacy` | May it be published? | Every retained internal or unknown-private document defaults to `deny`; assess each proposed quotation separately. This is a public-use field, not provider-processing consent for an authorized task. |
| `claim_coverage` | Which of artifact, contribution, lifecycle, and outcome does this occurrence support? | Strength in one dimension never fills another. |

Custody values are:

- `original-binary` — original file bytes are held.
- `retained-full` — full extracted content is held, but not necessarily the
  original file.
- `retained-partial` — some text survives in an export content reference.
- `metadata-only` — a name or attachment record survives, but no content does.

Origin values distinguish public product sources, internal organizational
records, Mason-authored material, assistant syntheses, AI-assisted working
artifacts, mixed material, and unknown material. Origin defaults to `unknown`;
it is never inferred merely from custody.

## What the exports actually retain

The ChatGPT export contains 5,181 `.dat` blobs. Signature inspection finds
4,178 PNGs, 624 JPEGs, 264 WAVs, 24 WebPs, 21 PDFs, 10 JSON-or-text files, one
GIF, and 59 other blobs.

None of the 21 original PDF blobs maps to a DeepL-included record. Therefore:

- “zero document bytes survive anywhere” is false;
- “the original DeepL documents survive as binaries” is also unsupported; and
- the operational DeepL result is 99 retained-partial ChatGPT records plus 112
  metadata-only ChatGPT records, not a metadata-only corpus.

Across the complete ChatGPT export, 1,468 file-content-reference occurrences
have non-empty text, representing 185 unique file IDs. The DeepL filter includes
only the 99 included source records that meet the positive subject and date
rules. Retained text may be partial, duplicated, revised, or truncated. More
characters do not prove a better or later source.

## Claude recovery and origin

The 25 repository copies under
[`source-documents/recovered/`](source-documents/recovered/) are convenience
copies of retained text, not original binaries and not automatically
organizational records. The inventory currently identifies four clear
assistant syntheses:

- `differences-deepl-plan-tiers-across-products.md`
- `deepl-pro-vs-deepl-free.md`
- `deepl-s-target-user-segments-for-self-serve-and-project-rebound.md`
- `overview-of-the-sources-deepl-s-competitive-landscape-and-user-i.md`

They are discovery inputs only. Their presence cannot raise an artifact,
contribution, lifecycle, or outcome claim.

All other origin assignments remain subject to the exact-content and context
checks recorded in the inventory. Unknown is the safe default.

## Privacy and public use

There is no safe hand-maintained list of sensitive files. Retained internal
documents can contain colleague names, email addresses, customer or commercial
details, internal identifiers, and other non-public material. Every internal
retained document is non-publishable by default. Before using any excerpt:

1. trace it to an exact source record and locator;
2. inspect the exact passage and surrounding context;
3. check names, addresses, identifiers, commercial detail, and confidentiality;
4. record the public-safe paraphrase or quotation separately; and
5. keep it out of public copy and the public site unless Mason explicitly
   selects it for public use.

## Claim and exhibit rule

An exhibit or factual statement must point to the evidence it actually uses:

- text: source record plus a quoted source line or bounded passage;
- Figma: file/node/root or a retained source frame, file hash, and dimensions;
- public page: archived or current URL plus capture date where relevant;
- reconstructed visual: the underlying source locator and the transformation.

Metadata-only records can establish that a named artifact was attached in a
specific conversation. They cannot establish its contents. Assistant summaries
can locate possible evidence, but do not become the missing source.

## Rebuild and check

From the repository root:

```bash
node private-evidence/deepl-achievement-recovery/scripts/build_deepl_document_inventory.mjs --repo "$PWD" --write
node private-evidence/deepl-achievement-recovery/scripts/build_deepl_document_inventory.mjs --repo "$PWD" --check
node --test private-evidence/deepl-achievement-recovery/scripts/build_deepl_document_inventory.test.mjs
```

The builder reads the ChatGPT shard list from its manifest and treats the
Claude ZIPs as authoritative. It writes only the canonical repository JSON when
`--write` is passed. Conversation context alone never includes a filename, and
unreviewed Claude content-only candidates are counted without persisting their
names.
