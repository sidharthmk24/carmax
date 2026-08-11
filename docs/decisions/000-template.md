# ADR-`<NNN>`: `<Short decision title>`

> Architecture Decision Record.
> File name: `docs/decisions/NNN-short-title.md` — e.g. `007-adopt-supabase.md`
> Numbers are sequential and never reused.

---

**Status:** `<Proposed | Accepted | Rejected | Superseded by ADR-NNN | Deprecated>`

**Date:** `<YYYY-MM-DD>`

**Owner:** `<Name — the person accountable for this decision>`

**Deciders:** `<Everyone who participated>`

**Affects:** `<Teams, services, or projects impacted>`

---

## Context

`<What is the situation that forces a decision now?

Include the constraints that are real: deadlines, budget, existing systems,
team skills, compliance requirements. State facts, not opinions.

Someone reading this in two years should understand the world you were in.>`

---

## Problem

`<State the problem in one or two sentences. Be specific.

Bad:  "Our database is not good enough."
Good: "Firestore cannot express the multi-table joins our reporting module
       needs, forcing us to fetch and join in application code, which times
       out above ~5,000 records.">`

---

## Decision

`<State what you are doing, in the active voice, in one or two sentences.

"We will migrate the reporting data store from Firestore to PostgreSQL,
hosted on Supabase, starting with the invoices module.">`

---

## Alternatives Considered

### Option 1: `<Name>`

**Description:** `<What it is>`

**Pros:**
-

**Cons:**
-

**Why not chosen:** `<The honest reason>`

---

### Option 2: `<Name>`

**Description:**

**Pros:**
-

**Cons:**
-

**Why not chosen:**

---

### Option 3: Do nothing

**What happens if we change nothing:** `<Always evaluate this one. Sometimes it wins.>`

---

## Decision Criteria

`<What did you actually optimize for? Rank them.>`

| Criterion | Weight | Option 1 | Option 2 | Chosen |
| --- | --- | --- | --- | --- |
| `<e.g. Query flexibility>` | High | | | |
| `<e.g. Migration cost>` | Medium | | | |
| `<e.g. Operational burden>` | Medium | | | |
| `<e.g. Team familiarity>` | Low | | | |

---

## Consequences

### Positive

-

### Negative

`<Be honest. Every real decision has a cost. An ADR with no negatives
is marketing, not a decision record.>`

-

### Neutral

-

---

## Risks

| Risk | Likelihood | Impact | Mitigation |
| --- | --- | --- | --- |
| | | | |

---

## Implementation

**Approach:** `<Big bang, phased, strangler pattern, parallel run>`

**Phases:**

1.
2.
3.

**Estimated effort:** `<>`

**Rollback plan:** `<Can this be undone? At what cost? Up to what point?>`

---

## Success Criteria

`<How will we know in three months whether this was the right call?
Name measurable outcomes, not feelings.>`

- [ ]
- [ ]

**Review date:** `<YYYY-MM-DD — when we check whether this held up>`

---

## References

- `<Links to discussions, benchmarks, documentation, prior ADRs>`
- Supersedes: `<ADR-NNN, if any>`
- Superseded by: `<ADR-NNN, if any — fill in later, never delete this ADR>`
