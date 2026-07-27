# Add-and-manage users export inventory

Source: Team Administration — Canonical, page `72 — Add-and-manage users
reference flow`, node `6187:306`.

The complete contiguous source range was exported as fresh 2x PNGs on
2026-07-22. The original 84-file batch is preserved at
`../source-batches/add-manage-users-complete-2x.zip`.

## Disposition

| Class | Count | Location | Disposition |
| --- | ---: | --- | --- |
| Product states | 44 | `raw/` | Private review evidence; select only safe, unclipped states for portfolio derivatives. |
| Process-note cards | 35 | `process-notes/` | Source evidence. These are blue scenario notes, not product UI. Mason has not selected them as portfolio visuals. |
| Non-product source layers | 5 | `non-product-source-layers/` | source-only. One label, one arrow, two connectors and one blank rounded rectangle. |

## Product-state families

- `users.png` through `users-17.png`: 18 user-list and add-users states.
- `groups.png` through `groups-23.png`: 24 group-list, create-group,
  manual-entry, validation, CSV-selection, loading and result states.
- `user.png`: one long populated user-list state.
- `settings.png`: one settings state.

## Review findings

- The requested sentence is present as `Add up to 40 email addresses,
  separated by commas or line breaks.` when the local section heading is
  `Enter emails`.
- The create-group page correctly uses `Enter up to 40 email addresses,
  separated by commas or line breaks.` beneath the `Add users` heading.
- `groups-17.png` preserves the corrected, left-aligned `Choose a different CSV
  file` action.
- `groups-10.png` shows the combined multiple-invalid and over-limit recovery
  state. `groups-13.png` shows the over-limit state after invalid entries are
  removed.
- `groups-17.png` through `groups-19.png`, followed by `groups-23.png`, form a
  complete safe CSV-selection, processing, confirmation and result sequence.
- `users-13.png` through `users-16.png` and `groups-20.png` are empty loading
  placeholders. `users-3.png` and `groups-22.png` show visible loading spinners.
- `settings.png` is not portfolio-ready: the revised translation-limit copy
  overlaps and clips, and the SSO/JIT labels still show the older wording.
- Several populated states use fictional `evil-corp.com` addresses or
  staff-like `@deepl.com` examples. They remain private and must not be copied
  into the public asset tree.
- source support for every historical design remains unconfirmed.

## Private sequence retained for possible future use

The strongest identity-free sequence available without altering historical UI
is:

1. `groups-7.png` — open the group-specific add-users dialog.
2. `groups-9.png` — explain and recover from an invalid address.
3. `groups-17.png` — show a selected CSV and the option to replace it.
4. `groups-18.png` — preserve the in-progress state.
5. `groups-19.png` — confirm background processing.
6. `groups-23.png` — show the resulting group count.

This sequence demonstrates entry, validation, alternate input, processing,
feedback and result without exposing the process notes or populated email
lists. It is not part of the current public case.
