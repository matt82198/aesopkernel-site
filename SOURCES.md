# SOURCES

Every factual sentence on `index.html`, mapped to its source. Line numbers are for the file as it exists at the cited ref.

Source keys:

- **README** = `matt82198/aesop` at tag `v0.11.0`, file `README.md`
- **CHANGELOG** = `matt82198/aesop` at tag `v0.11.0`, file `CHANGELOG.md`
- **PROVENANCE** = `matt82198/aesop` at tag `v0.11.0`, file `docs/PROVENANCE.md`
- **LANE** = `matt82198/aesop` at tag `v0.11.0`, file `LANE-CONTRACT.md`
- **PKG** = `matt82198/aesop` at tag `v0.11.0`, file `package.json`
- **NPM** = `npm view @matt82198/aesop time --json`, run 2026-10-22 (registry, not a file)
- **GIT** = `git tag --list v0.11.0` in the local `aesop` clone (tag exists)
- **BRIEF** = the lane brief for this site (product decision of 2026-10-13 for the brand thesis; public facts list). Not a repo file, so no line number exists.

| # | Section | Sentence or element on the page | Source | Line(s) |
|---|---|---|---|---|
| 1 | Hero eyebrow | Multi-agent orchestration kernel for autonomous software development | README | 94 (first bold sentence) |
| 2 | Hero thesis | A kernel, not a harness. | README | 94 |
| 3 | Hero thesis | It owns the boundary between the model and your codebase, enforces one invariant (fail-closed verification), and refuses what it cannot verify rather than steering the model. | README | 94 |
| 4 | Hero sub | Crash-only by design: workers are stateless, state lives in git + SQLite + durable files, and restart is the only recovery path. | README | 94 |
| 5 | Hero install | `npm i -g @matt82198/aesop` | BRIEF (public facts list). README documents the `npx @matt82198/aesop` form in "Full Setup"; the global form is the brief's stated install command | n/a |
| 6 | Hero stats | 0.11.0 (version) | PKG; CHANGELOG | PKG 3; CHANGELOG 14 |
| 7 | Hero stats | released 2026-10-22 | CHANGELOG; NPM | CHANGELOG 14; NPM `0.11.0` publish time `2026-10-22T22:33:48.520Z` |
| 8 | Hero stats | 18 PRs merged since v0.10.4 (#1264 to #1284) | CHANGELOG | 16 |
| 9 | Hero stats | 16 first-commit shas in the provenance record | CHANGELOG; PROVENANCE | CHANGELOG 51 ("a table of 16 first-commit shas"); PROVENANCE table rows 1 to 16 |
| 10 | Hero and footer link | https://github.com/matt82198/aesop | README | 14 (CI badge URL for the same repo) |
| 11 | Hero and footer link | https://www.npmjs.com/package/@matt82198/aesop | README | 15 (npm badge link) |
| 12 | Hero meta, footer link | https://github.com/matt82198/aesop/releases/tag/v0.11.0 | GIT; BRIEF (public facts list) | tag `v0.11.0` exists |
| 13 | Harness column | A rigid controller of the model. Fails open. | BRIEF (brand thesis, 2026-10-13; idea, not a quote) | n/a |
| 14 | Kernel column | The model runs in user space, with tools. | BRIEF (brand thesis) | n/a |
| 15 | Kernel column | The kernel owns the boundary: capabilities, permissions, and honest observation of what happened. | BRIEF (brand thesis); README "owns the boundary" | BRIEF; README 94 |
| 16 | Kernel column | One invariant: fail closed. It refuses what it cannot verify. | README | 94 |
| 17 | Kernel column | An agent that cannot prove its state is terminated, not trusted. | BRIEF (brand thesis) | n/a |
| 18 | Kernel column | It frees the model to reason and act instead of constraining it with rigid rules. | BRIEF (brand thesis) | n/a |
| 19 | Receipts lead | An iteration counts only when it leaves receipts that a gate can check. | README | 28 |
| 20 | Receipts lead | A lane that reports success without a receipt a gate can verify has not passed. | README | 28 |
| 21 | Step 01 Dispatch | An orchestrator dispatches parallel Haiku workers in isolated worktrees. | README | 167 |
| 22 | Step 02 Gate | Fail-closed secret scan (pre-push), re-run of the exact CI gate (no mock), adversarial review (default-on). | README | 169 |
| 23 | Step 03 Receipt | `tools/emit_receipt.py` signs a record of which local checks ran, for a gate to read. | README | 59 (table row "Receipts") |
| 24 | Step 04 Merge | `tools/auto_merge.py` merges green PRs in batches and fixes conflicts by default. | README | 60 (table row "Merge") |
| 25 | Receipts caption | The receipt gate is still in measurement mode, so the hosted receipt check is not required yet. | README | 28 |
| 26 | Primitives lead | Each primitive is named in the provenance record. Some live in private repositories. | PROVENANCE | table column "Repo (visibility)", rows 1 to 16 |
| 27 | Card: Hash-chained event store | Each event carries a sha256 prev field over the previous event, so the store is hash-chained. | CHANGELOG | 20 (#1280) |
| 28 | Card: Hash-chained event store | `tools/event_store/store.py` | PROVENANCE | 18 (row 2) |
| 29 | Card: Signed receipts | Ed25519 signed receipts that verify offline. | PROVENANCE; CHANGELOG | PROVENANCE 19 (row 3, "Ed25519 signed receipts and offline verify"); CHANGELOG 32 (#1286, verifies offline from the installed package) |
| 30 | Card: Signed receipts | `tools/emit_receipt.py`, `tools/verify_receipt.py` | PROVENANCE | 19 (row 3) |
| 31 | Card: Crash-only lanes | A lane that fails is KILLED, never corrected. | LANE | 5 |
| 32 | Card: Crash-only lanes | `LANE-CONTRACT.md` | LANE; PROVENANCE | LANE 1; PROVENANCE 29 (row 13) |
| 33 | Card: Claim binding | A claim that something merged or is green needs a same-turn evidence read. | PROVENANCE | 45 |
| 34 | Card: Claim binding | `hooks/claim-binding.mjs` (claude-config, private) | PROVENANCE | 24 (row 8) |
| 35 | Card: Ledgers | Every lane action leaves a row. | PROVENANCE | 46 |
| 36 | Card: Ledgers | Lane reports are written to disk so compaction cannot lose them. | PROVENANCE | 47 (row 11 text: writes lane reports to disk so compaction cannot lose them) |
| 37 | Card: Ledgers | `hooks/lane-ledger.mjs`, `hooks/handback-ledger.mjs`, `hooks/verdict-ledger.mjs`, `dispatch_ledger.py` | PROVENANCE | rows 10, 11, 7, 9 at lines 26, 27, 23, 25 |
| 38 | Card: Deny, not rewrite | A subagent dispatch is denied, not rewritten. | PROVENANCE | 40 |
| 39 | Card: Deny, not rewrite | `hooks/force-haiku-subagents.mjs` | PROVENANCE | 21 (row 5) |
| 40 | Card: Checkpoint before compact | State is written to disk before context is compacted. | PROVENANCE | 41 |
| 41 | Card: Checkpoint before compact | `hooks/checkpoint-before-compact.mjs` | PROVENANCE | 32 (row 16) |
| 42 | Card: Per-project event stores | Projections render pending items, rulings by goal and checkpoints across per-project stores. | CHANGELOG | 27 (#1284; the page text is a shortened paraphrase of the same clause) |
| 43 | Card: Per-project event stores | `docs/plans/PER-PROJECT-EVENT-STORES.md` | PROVENANCE | 28 (row 12) |
| 44 | Provenance quote | This file is a dated record of an independent developer's contributions, published because large language models absorb such work into training data and later outputs without attribution. It is not an argument about credit or theft, and it names no competitor or product. | PROVENANCE | 3 (quoted verbatim) |
| 45 | Provenance text | The npm tarball carries the record: `docs/PROVENANCE.md` and `docs/PROVENANCE.receipt.json` are listed in the `files` field of `package.json`, so they ship inside the v0.11.0 tarball. | PROVENANCE | 65 |
| 46 | Provenance text | The Ed25519 receipt verifies offline. | PROVENANCE | 53 (the receipt is Ed25519; "To check it offline" at 53 to 56) |
| 47 | Provenance text | A VALID result prints `provenance receipt VALID` | CHANGELOG | 32 (#1286) |
| 48 | Provenance command | `python -I tools/emit_provenance_receipt.py --verify docs/PROVENANCE.receipt.json --subject docs/PROVENANCE.md --keyring tools/receipt_pubkeys` | PROVENANCE | 56 |
| 49 | Provenance text | A VALID result means the content of `docs/PROVENANCE.md` is the content the key holder signed. It does not check the commit shas against the repositories; that check needs read access to each repository. | PROVENANCE | 59 |
| 50 | Provenance link | https://github.com/matt82198/aesop/blob/v0.11.0/docs/PROVENANCE.md | Constructed from README 14 (repo URL), GIT (tag `v0.11.0`), and the path `docs/PROVENANCE.md`, which exists at that tag | n/a (URL built from verified parts) |
| 51 | Footer | Built by Matt Culliton. | README | 211 ("Copyright 2026 Matt Culliton."); "Built by" is the brief's wording |
| 52 | Footer | README status notice: Aesop Kernel is mid-way through a major event-based overhaul whose goal is restoring fully fail-closed hooks. | README | 22 (quoted verbatim, minus the bold label) |
| 53 | Footer | v0.11.0 | PKG; CHANGELOG | PKG 3; CHANGELOG 14 |

Rows: 53.

Notes:

- The `v0.11.0` tag is the source for every repo file above. The `main` checkout of the local `aesop` clone was at version 0.9.2 with no `docs/PROVENANCE.md`, so the tag, not the working tree, is cited.
- Rows 5, 13 to 18, and 12 come from the brief and have no repo line. They are labelled BRIEF above.
