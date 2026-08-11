# ADR-001: Next.js 16 static site, with Blueprint as a pinned submodule

**Status:** Accepted

**Date:** 2026-08-11

**Owner:** Jamshadj

**Deciders:** Jamshadj

**Affects:** CarMax website

---

## Context

Megamind Studios is building a marketing website for CarMax. The project was
started fresh on 11 August 2026.

Two constraints shaped this decision:

1. Megamind Studios Blueprint reached v2.0 on the same day and now defines the
   agent rules, standards, and templates every project is expected to follow.
   This is the first project to adopt it.
2. The team works primarily in Antigravity IDE with Gemini agents, and also
   uses Claude Code. Agents read local files — they cannot follow a link to a
   standards repository hosted elsewhere.

An earlier CarMax effort exists at `~/Desktop/Megamind/CARMAX X CODEX` — a
Next.js app with Three.js-style 3D assets including a 65 MB `BMW.glb`, under no
version control. Whether that work carries over is **not yet decided** and is
tracked as an open question below.

---

## Problem

The project needs a stack, and it needs a mechanism by which Blueprint's rules
physically reach the agents working in the repository.

---

## Decision

Build the site on **Next.js 16.3 (App Router, `src/`), React 19.2, TypeScript
strict, Tailwind v4, pnpm**.

Vendor **Blueprint as a pinned git submodule at `.blueprint/`**, sourced from
`github.com/megamindDeveloper/blueprint`.

---

## Alternatives Considered

### Option 1: Copy Blueprint into the repository

**Description:** Copy the Blueprint files into the project as a plain folder.

**Pros:**
- Zero setup. Works immediately.
- No submodule friction for teammates unfamiliar with them.

**Cons:**
- Becomes a frozen snapshot and drifts within days.
- Adds ~19,000 lines to the project's own history.
- No way to tell which Blueprint version the project is following.

**Why not chosen:** This was literally the initial state of the folder, and the
drift problem is exactly what Blueprint's standards exist to prevent.

---

### Option 2: Link to Blueprint by URL from AGENTS.md

**Description:** Reference the GitHub URL rather than vendoring anything.

**Pros:**
- Nothing to maintain. Always current.

**Cons:**
- Agents read local files. An agent without web access silently skips the
  rules and improvises — the worst possible failure mode.
- The repository is private, so even web-capable agents would fail to fetch it.

**Why not chosen:** Defeats the purpose. Rules an agent cannot read are not rules.

---

### Option 3: Publish Blueprint as an npm package

**Description:** `pnpm add -D @megamind/blueprint`.

**Pros:**
- Familiar versioning. Fits the existing toolchain.

**Cons:**
- Requires publishing infrastructure not currently set up.
- Lands the files in `node_modules/`, which most agents are told to ignore.

**Why not chosen:** More setup than a submodule for no additional benefit today.
Worth revisiting if Blueprint adoption grows past a handful of projects.

---

### Option 4: Do nothing — no shared standards

**What happens if we change nothing:** Every project reinvents its conventions,
and agent output quality depends entirely on who wrote the prompt that day.
This is the situation Blueprint was built to end.

---

## Decision Criteria

| Criterion | Weight | Copy | Submodule | Chosen |
| --- | --- | --- | --- | --- |
| Agent can read it locally | High | ✅ | ✅ | Submodule |
| Cannot silently drift | High | ❌ | ✅ | Submodule |
| Version is explicit and pinned | High | ❌ | ✅ | Submodule |
| Keeps project history clean | Medium | ❌ | ✅ | Submodule |
| Low setup friction | Low | ✅ | ⚠️ | Copy |

---

## Consequences

### Positive

- Agents in Antigravity, Claude Code, Cursor, and Copilot all read `AGENTS.md`
  at the repository root, which points into `.blueprint/`. One mechanism covers
  every tool.
- The Blueprint version in use is a specific commit, recorded in the project's
  git history. A Blueprint change cannot alter this project's rules mid-sprint.
- Upgrading is deliberate: `git submodule update --remote .blueprint`.

### Negative

- Anyone cloning must run `git submodule update --init --recursive`, or
  `.blueprint/` is empty and the agent rules silently vanish. This is the main
  risk of the approach and needs to be in the README and onboarding.
- Blueprint is private, so contributors need repository access to fetch it.
- Submodules are unfamiliar to some developers and are easy to leave un-updated.

### Neutral

- Tailwind v4 is CSS-first with no `tailwind.config.js`. Anyone expecting the
  v3 layout will be briefly confused.
- Next.js 16 has breaking changes relative to most models' training data. The
  generated `nextjs-agent-rules` block in `AGENTS.md` warns agents about this
  and must be kept.

---

## Risks

| Risk | Likelihood | Impact | Mitigation |
| --- | --- | --- | --- |
| Clone without submodule init; agents lose the rules | High | Medium | Documented in README; `AGENTS.md` tells agents to run the init command if `.blueprint/` is empty |
| Submodule pin goes stale and misses standards updates | Medium | Low | Review the pin at the start of each project phase |
| `next dev` rewrites the agent-rules block and creates noisy diffs | Medium | Low | Block is committed verbatim as generated |

---

## Implementation

**Approach:** Done at project setup, before any feature code.

**Phases:**

1. Scaffold Next.js 16.3 with TypeScript, Tailwind, ESLint, App Router, `src/`.
2. Add Blueprint as a submodule at `.blueprint/`.
3. Write `AGENTS.md`, `GEMINI.md`, and `CLAUDE.md` pointing into it.
4. Copy PR and issue templates; create the `docs/` tree.

**Rollback plan:** `git submodule deinit .blueprint && git rm .blueprint`, then
inline the ~60 rules that matter into `AGENTS.md`. Cheap, reversible at any point.

---

## Success Criteria

- [ ] A new engineer clones, runs setup, and has the dev server running in
      under 10 minutes.
- [ ] An agent given a task cites a Blueprint standard without being told to.
- [ ] No Blueprint content is duplicated into this repository.

**Review date:** 2026-11-11

---

## References

- Blueprint: https://github.com/megamindDeveloper/blueprint
- `AGENTS.md` cross-tool standard: https://agents.md/
- Prior CarMax work (no version control): `~/Desktop/Megamind/CARMAX X CODEX`

## Open Questions

- Is the 3D work in `CARMAX X CODEX` being carried into this site? If so, a
  follow-up ADR is needed covering the 3D library choice and the performance
  budget for a 65 MB model.
- Hosting target, CMS, analytics, and form handling are all undecided.
