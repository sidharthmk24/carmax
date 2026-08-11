# Bug Report

> A bug report is complete when someone who has never seen the problem
> can reproduce it from this document alone.

---

## Title

`<What is broken, where. Specific enough to search for.

Bad:  "Login broken"
Good: "Login fails with 500 when email contains a plus sign, on Safari 18">`

---

## Summary

`<One or two sentences describing the problem.>`

---

## Environment

| Field | Value |
| --- | --- |
| Environment | `<Local / Development / Staging / Production>` |
| Application version | `<v1.4.2 / commit SHA>` |
| Browser / OS | `<Safari 18.1 / macOS 15.2>` |
| Device | `<Desktop / iPhone 15 / Pixel 8>` |
| Screen size | `<1440×900 / 390×844>` |
| User role | `<Admin / Customer / Anonymous>` |
| Account | `<Test account ID — never a real customer's credentials>` |
| Date and time | `<2026-08-11 14:32 UTC>` |

---

## Severity

- [ ] **P0** — System unusable, data at risk, security breach
- [ ] **P1** — Core function broken, no workaround
- [ ] **P2** — Feature degraded, workaround exists
- [ ] **P3** — Cosmetic or minor

**Justification:** `<Why this severity? How many users are affected?>`

---

## Priority

- [ ] Immediate
- [ ] This sprint
- [ ] Next sprint
- [ ] Backlog

---

## Module

`<Authentication / Payments / Dashboard / Reporting / …>`

---

## Steps to Reproduce

`<Numbered. Literal. Include the exact data you entered.
If a step only works with specific data, say so.>`

1.
2.
3.

---

## Expected Result

`<What should happen, and why you believe that. Link the requirement if there is one.>`

---

## Actual Result

`<What actually happens. Include the exact error text.>`

---

## Frequency

- [ ] Always — 100% of attempts
- [ ] Frequently — most attempts
- [ ] Intermittent — `<how often, and any pattern noticed>`
- [ ] Once — not reproduced since

---

## Evidence

**Screenshots / recording:**

`<Attach. Redact any personal data first.>`

**Error message:**

```txt
<Exact text, verbatim.>
```

**Console output:**

```txt
<Paste. Redact tokens.>
```

**Network request:**

```txt
Request:  <method + URL>
Status:   <code>
Response: <body — redact sensitive fields>
```

**Server logs:**

```txt
<Relevant lines. Include the correlation ID.>
```

Correlation ID: `<req_01J9X4M2K7>`

---

## Impact

**Users affected:** `<All / Admins only / Users with X / One reported>`

**Estimated count:** `<>`

**Business impact:** `<Revenue, compliance, reputation, support load>`

**Data integrity affected:** `<Yes / No — if yes, escalate to P0 now>`

---

## Workaround

`<Is there one? Write it out. If none, say "None known".>`

---

## Regression

- [ ] This previously worked
- [ ] This never worked
- [ ] Unknown

**Last known working version:** `<>`

**Suspected cause:** `<Recent deploy, migration, dependency upgrade, config change>`

---

## Investigation Notes

`<For whoever picks this up. What has already been ruled out?
Do not leave this blank if you investigated — you will save someone hours.>`

---

## Related

- Related bugs: `<>`
- Related PRs: `<>`
- Related incident: `<>`

---

## Assignment

**Reported by:** `<>`

**Assigned to:** `<>`

**Owning team:** `<Frontend / Backend / Database / DevOps / Security>`

---

## Resolution

> Filled in when fixed.

**Root cause:** `<What actually caused it — not what the symptom was.>`

**Fix:** `<What changed. Link the PR.>`

**Fixed in version:** `<>`

**Regression test added:** `<Link. Required — a fixed bug without a test will return.>`

**Verified by:** `<>`

**Verified in:** `<Environment and date>`
