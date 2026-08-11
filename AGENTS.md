<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

---

# AGENTS — CarMax Website

**Client:** CarMax

**Organization:** Megamind Studios

**Last Updated:** August 2026

---

## Read this first

This project follows **Megamind Studios Blueprint**, vendored as a pinned
submodule at `.blueprint/`.

**Before doing anything, read `.blueprint/AGENTS.md` in full.** It defines the
Ten Non-Negotiables, the Green/Yellow/Red permission tiers, the eight-step
workflow, and the rules for working unsupervised. This file only adds what is
specific to CarMax.

| Need | Read |
| --- | --- |
| Root agent rules | `.blueprint/AGENTS.md` |
| Your role | `.blueprint/agents/frontend-agent.md` |
| Code style | `.blueprint/standards/coding-standards.md` |
| Naming | `.blueprint/standards/naming-conventions.md` |
| Folder layout | `.blueprint/standards/file-structure.md` |
| Branches, commits | `.blueprint/standards/git-workflow.md` |
| Accessibility | `.blueprint/standards/accessibility-standards.md` |
| Performance budgets | `.blueprint/standards/performance-standards.md` |

If `.blueprint/` is empty, run `git submodule update --init --recursive`.

---

## Stack

```txt
Next.js      16.3.0   App Router, src/ directory
React        19.2.8
TypeScript   5.x      strict mode
Tailwind     v4       via @tailwindcss/postcss
ESLint       9.x      eslint-config-next
pnpm         10.33.2
```

---

## Project rules

- **pnpm only.** Never `npm install`, never `yarn`. The lockfile is
  `pnpm-lock.yaml` and it is committed.
- **Server Components by default.** Add `"use client"` only where
  interactivity genuinely requires it, and say why in the PR.
- **Tailwind v4** — configuration is CSS-first via `@theme`. There is no
  `tailwind.config.js`. Do not create one.
- **Import alias is `@/`** → `src/`. Use it. No `../../..` chains.
- **No new dependency without approval.** Adding one is Yellow tier.
  This is a marketing site; the bar for a new package is high.
- **Images go through `next/image`.** No raw `<img>` for content images.
- **No secrets in `NEXT_PUBLIC_*`.** Anything with that prefix ships to the
  browser.

---

## Before reporting any task complete

```bash
pnpm verify
```

That runs lint, typecheck, and build. **Paste its actual output in your
report.** Claiming it passed without running it is a Non-Negotiable violation
under `.blueprint/AGENTS.md`.

---

## Project stop conditions

These are on top of the default stop conditions in `.blueprint/AGENTS.md`.

- Any change that adds a runtime dependency → plan only, stop, wait.
- Any change to `next.config.ts` → plan only, stop, wait.
- Anything requiring a backend, database, or API → stop. This project has
  none yet, and adding one is an architecture decision that needs an ADR.
- Design ambiguity → stop and ask. Do not invent brand styling, copy, or
  imagery for a client site.

---

## Not yet decided

Do not assume answers to these. Ask.

- [ ] Hosting target (Vercel assumed but not confirmed)
- [ ] CMS — or is content hard-coded?
- [ ] Analytics
- [ ] Forms and where submissions go
- [ ] Domain
- [ ] Whether the 3D work in `CARMAX X CODEX` is being carried over

---

## Ownership

| Area | Owner |
| --- | --- |
| Overall | Jamshadj |
| Client contact | TBC |
