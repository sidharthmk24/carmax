# GEMINI.md — CarMax Website

Antigravity reads this alongside `AGENTS.md`.

**All behaviour rules live in [AGENTS.md](./AGENTS.md) — read it first, in full.**
It points to `.blueprint/AGENTS.md`, which holds the Non-Negotiables, the
permission tiers, and the rules for working unsupervised.

This file holds context and preferences only. It does not override AGENTS.md.

---

## Context

Marketing website for **CarMax**, built by Megamind Studios.

Next.js 16.3 (App Router, `src/`), React 19.2, TypeScript strict, Tailwind v4,
pnpm. No backend, no database, no API — if a task seems to need one, stop and
ask rather than adding it.

Megamind Studios Blueprint is vendored at `.blueprint/` as a pinned submodule.
Treat it as read-only from this project. Fix Blueprint in its own repo, not here.

---

## Preferences

- Server Components by default; `"use client"` only where required.
- Tailwind utilities over custom CSS. Tailwind v4 is CSS-first — there is no
  `tailwind.config.js`.
- Small, focused components. Split at ~200 lines.
- Semantic HTML. This is a public client site; accessibility is not optional.
- `@/` import alias, never deep relative paths.
- British or American spelling — match whatever the client's copy uses, and
  stay consistent.

---

## Verify before reporting done

```bash
pnpm verify
```

Paste the real output. Do not summarise it.
