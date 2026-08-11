# Pull Request

> Copy this into your PR description. Delete the guidance in angle brackets.
> Also usable as `.github/pull_request_template.md` in a project repository.

---

## Title

`<type: short description — same convention as commits, e.g. "feat: add OTP login">`

---

## Summary

`<One or two sentences. What does this change and why?>`

---

## Problem

`<What was wrong, missing, or requested? Link the ticket.>`

Ticket: `<PROJ-123>`

---

## Solution

`<How did you solve it? Explain the approach, not the line-by-line diff.>`

---

## Alternatives Considered

`<What else did you try or reject, and why? Write "None" if the approach was obvious.>`

---

## Type of Change

- [ ] Feature
- [ ] Bug fix
- [ ] Refactor
- [ ] Performance
- [ ] Documentation
- [ ] Test
- [ ] Chore / dependency
- [ ] Breaking change

---

## Changes

`<Bullet list of what changed, grouped by area.>`

**Frontend**
-

**Backend**
-

**Database**
-

**Infrastructure**
-

---

## Database Changes

- [ ] No database changes
- [ ] Migration included
- [ ] Rollback migration included and tested
- [ ] Backward compatible with the currently deployed code
- [ ] Expected runtime: `<duration>`
- [ ] Locks tables: `<yes / no — which tables>`

---

## Breaking Changes

- [ ] None
- [ ] Yes — described below

`<What breaks, who is affected, and what they must do. Include the deprecation timeline.>`

---

## Testing

**How I verified this:**

`<Be specific. "Ran the tests" is not enough — say which, and what you checked manually.>`

- [ ] Unit tests added or updated
- [ ] Integration tests added or updated
- [ ] E2E tests added or updated
- [ ] Manually tested locally
- [ ] Tested on staging
- [ ] Edge cases covered
- [ ] Error paths covered

**Test output:**

```txt
<Paste the relevant passing/failing output.>
```

---

## Screenshots / Recordings

`<Before and after for any UI change. Delete this section for backend-only work.>`

| Before | After |
| --- | --- |
| | |

---

## Checklist

- [ ] Code follows the coding standards
- [ ] Naming follows the conventions
- [ ] Self-reviewed the full diff
- [ ] Lint passes
- [ ] Type check passes
- [ ] All tests pass
- [ ] Build succeeds
- [ ] Coverage thresholds met
- [ ] No secrets in the diff
- [ ] No debug logs or commented-out code
- [ ] Documentation updated
- [ ] `.env.example` updated if variables were added
- [ ] ADR written if an architectural decision was made

---

## Security

- [ ] No new attack surface
- [ ] All input validated server-side
- [ ] Authorization checked on the specific resource
- [ ] No secret exposed in code, logs, or responses
- [ ] No new dependency, or the dependency is approved

---

## Performance

- [ ] No N+1 queries introduced
- [ ] Lists paginated
- [ ] Indexes exist for new query patterns
- [ ] Bundle size impact acceptable

---

## Deployment Notes

`<Anything the deployer must know: order of operations, feature flag state,
environment variables to set, cache to clear. Write "Standard deploy" if none.>`

---

## Assumptions Made

`<List every assumption. If none, write "None". An unflagged assumption is a defect.>`

---

## Not Done / Follow-ups

`<What is deliberately left out of this PR, and why. Link follow-up tickets.>`

---

## Reviewers

`<@mention. Add the owning team for every boundary this change crosses.>`

Required by [Ownership Rules](../standards/ownership-rules.md):

- [ ] Security review — required for auth, secrets, or permissions changes
- [ ] Database review — required for schema changes
- [ ] Frontend + Backend — required for API contract changes
- [ ] DevOps — required for infrastructure or CI/CD changes

---

## For AI-Generated Changes

- [ ] This change was generated or assisted by an AI agent
- [ ] Every API, method, and import referenced has been verified to exist
- [ ] The change does only what was asked
- [ ] Claimed test results were actually run, not assumed
- [ ] A human understands and takes ownership of this code
