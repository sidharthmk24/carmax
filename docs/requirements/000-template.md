# Requirements: `<Feature name>`

> Location: `docs/requirements/<feature-name>.md`
> Nothing gets built from a document with unfilled sections.

---

**Status:** `<Draft | In review | Approved | In development | Shipped>`

**Version:** `<1.0>`

**Date:** `<YYYY-MM-DD>`

**Author:** `<>`

**Product owner:** `<>`

**Tech lead:** `<>`

**Target release:** `<vX.Y.Z or date>`

---

## Problem Statement

`<What problem are we solving, for whom? Describe the current painful reality.

Do not describe the solution here. If you cannot describe the problem
without naming the feature, the problem is not understood yet.>`

---

## Business Goal

`<Why does the business want this now? What changes if we ship it?>`

**Success metrics:**

| Metric | Current | Target | How measured |
| --- | --- | --- | --- |
| | | | |

---

## Users

**Primary:** `<Who uses this most?>`

**Secondary:** `<Who else is affected?>`

**Not for:** `<Who this explicitly does not serve>`

---

## User Stories

> Format: As a `<role>`, I want `<capability>`, so that `<benefit>`.

### US-1: `<Title>`

**As a** `<role>`
**I want** `<capability>`
**So that** `<benefit>`

**Priority:** `<Must have | Should have | Could have | Won't have this release>`

**Acceptance criteria:**

```gherkin
Given <initial context>
When <action taken>
Then <expected outcome>

Given <edge case context>
When <action taken>
Then <expected outcome>
```

- [ ]
- [ ]

---

### US-2: `<Title>`

`<Repeat the structure.>`

---

## Scope

### In Scope

-

### Out of Scope

`<Be explicit. This section prevents the most arguments.>`

-

### Future Considerations

`<Things we deliberately defer, so nobody thinks we forgot.>`

-

---

## Functional Requirements

| ID | Requirement | Priority |
| --- | --- | --- |
| FR-1 | | Must |
| FR-2 | | Should |

---

## Non-Functional Requirements

| Category | Requirement |
| --- | --- |
| Performance | `<e.g. Search returns in under 300 ms at p95 with 100k records>` |
| Scale | `<e.g. Supports 10,000 concurrent users>` |
| Security | `<e.g. Only the record owner and admins can read>` |
| Accessibility | `<WCAG 2.2 AA>` |
| Availability | `<99.9%>` |
| Browser support | `<Last 2 versions of Chrome, Safari, Firefox, Edge>` |
| Localization | `<Languages, currencies, date formats>` |
| Data retention | `<How long, and what happens after>` |
| Compliance | `<GDPR, PCI-DSS, SOC 2 — whichever apply>` |

---

## User Flow

```txt
<Draw the happy path as a simple flow. Then list the branches.>

Entry point
    ↓
Step
    ↓
Decision ──── alternative path
    ↓
Outcome
```

**Alternative paths:**

-

**Error paths:**

-

---

## Data Requirements

**New data stored:**

| Field | Type | Required | Sensitive | Retention |
| --- | --- | --- | --- | --- |
| | | | | |

**Existing data used:** `<>`

**Data migration needed:** `<Yes / No — describe>`

---

## Dependencies

| Dependency | Type | Owner | Status | Blocking |
| --- | --- | --- | --- | --- |
| | `<Internal / External / Third-party>` | | | `<Yes / No>` |

---

## Constraints

**Technical:** `<Existing architecture, platform limits, legacy systems>`

**Business:** `<Budget, deadline, contractual obligations>`

**Legal / compliance:** `<>`

---

## Assumptions

`<Everything you are taking as true without having verified it.
Each one is a risk. Name an owner to confirm it.>`

| Assumption | Owner to confirm | Confirmed |
| --- | --- | --- |
| | | ☐ |

---

## Risks

| Risk | Likelihood | Impact | Mitigation | Owner |
| --- | --- | --- | --- | --- |
| | | | | |

---

## Open Questions

`<Everything still unresolved. Nothing here should be blocking by approval time.>`

| Question | Owner | Needed by | Answer |
| --- | --- | --- | --- |
| | | | |

---

## Design

**Figma:** `<link>`

**Design status:** `<Not started | In progress | Approved>`

**States required:** loading, empty, error, partial, success

---

## Rollout

**Strategy:** `<Full release / Phased / Feature flag / Beta group>`

**Feature flag:** `<name, default state>`

**Communication:** `<Who needs to be told, when>`

**Training / documentation needed:** `<>`

---

## Approvals

| Role | Name | Date | Approved |
| --- | --- | --- | --- |
| Product owner | | | ☐ |
| Tech lead | | | ☐ |
| Design | | | ☐ |
| Security | | | ☐ |
| QA | | | ☐ |
