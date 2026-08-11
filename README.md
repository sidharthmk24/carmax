# CarMax Website

> Marketing website for CarMax, built by Megamind Studios.

**Status:** In development

**Production:** Not deployed

**Staging:** Not deployed

---

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js 16.3 (App Router) |
| UI | React 19.2 |
| Language | TypeScript 5 (strict) |
| Styling | Tailwind CSS v4 |
| Linting | ESLint 9 + eslint-config-next |
| Package manager | pnpm 10.33 |
| Hosting | Not yet decided |

Stack rationale: [ADR-001](docs/decisions/001-stack-and-blueprint-adoption.md)

---

## Getting Started

### Prerequisites

| Tool | Version |
| --- | --- |
| Node.js | 22.x |
| pnpm | 10.x |
| Git | 2.x with access to the private Blueprint repo |

### Installation

```bash
# Clone WITH submodules — this matters, see the warning below
git clone --recurse-submodules <repo-url>
cd "MEGAMIND X CARMAX"

# Install dependencies
pnpm install

# Start the dev server
pnpm dev
```

The site runs at http://localhost:3000

### ⚠️ If you already cloned without `--recurse-submodules`

```bash
git submodule update --init --recursive
```

Without this, `.blueprint/` is empty and **every AI agent working in this
repository silently loses its rules**. This is the single most common way to
break the setup.

### Verify your setup

```bash
pnpm verify
```

Runs lint, typecheck, and build. All three must pass.

---

## Commands

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Development server |
| `pnpm build` | Production build |
| `pnpm start` | Serve the production build |
| `pnpm lint` | ESLint |
| `pnpm typecheck` | TypeScript, no emit |
| `pnpm verify` | lint + typecheck + build — run before every PR |

---

## Project Structure

```txt
.blueprint/          Megamind Studios Blueprint — pinned submodule, read-only
.github/             PR and issue templates
docs/
├── requirements/    What we are building
├── architecture/    How it fits together
├── decisions/       ADRs
├── deployment/      How it ships
├── testing/         Test strategy
├── onboarding/      Getting a new dev productive
└── handover/        Client handover pack
public/              Static assets
src/
└── app/             App Router pages and layouts
AGENTS.md            Agent rules — read by Antigravity, Cursor, Copilot, Codex
GEMINI.md            Antigravity context layer
CLAUDE.md            Claude Code pointer
```

---

## Standards

This project follows [Megamind Studios Blueprint](https://github.com/megamindDeveloper/blueprint),
vendored at `.blueprint/`.

Before your first pull request, read:

- [`.blueprint/standards/coding-standards.md`](.blueprint/standards/coding-standards.md)
- [`.blueprint/standards/git-workflow.md`](.blueprint/standards/git-workflow.md)
- [`.blueprint/standards/code-review.md`](.blueprint/standards/code-review.md)
- [`.blueprint/standards/accessibility-standards.md`](.blueprint/standards/accessibility-standards.md)

**AI agents:** read [AGENTS.md](AGENTS.md) first, in full.

### Updating Blueprint

The submodule is pinned to a specific commit. Upgrade deliberately:

```bash
git submodule update --remote .blueprint
git add .blueprint && git commit -m "chore: update blueprint submodule"
```

---

## Workflow

1. Branch from `main`: `feature/<name>`
2. Conventional commits: `feat: add hero section`
3. Run `pnpm verify`
4. Open a PR using the template
5. Review, then merge

---

## Open Decisions

These are not yet decided. Do not assume answers.

- [ ] Hosting target (Vercel assumed, not confirmed)
- [ ] CMS, or hard-coded content
- [ ] Analytics
- [ ] Form handling and submission destination
- [ ] Domain
- [ ] Whether the 3D work in `CARMAX X CODEX` carries over

---

## Ownership

| Area | Owner |
| --- | --- |
| Overall | Jamshadj |
| Client contact | TBC |

---

## License

Proprietary — Megamind Studios
