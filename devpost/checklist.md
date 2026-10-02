---
doc: checklist
status: delegated
---
# Build Checklist

Build mode: autonomous implementation under the user's explicit delegation. Adapted curriculum; no learner approvals claimed.

## Slices

- [x] **1. Import a discussion, inspect decisive evidence and export a report**
  Becomes usable: Complete browser import-to-audit-to-export journey with an original visual workspace and labeled synthetic examples.
  Why now: Proves the kernel and the original missed-comment problem end to end.
  PRD ref: `prd.md > The Core Journey`, `prd.md > Features and Behavior`
  Spec ref: `spec.md > Components`, `spec.md > File Structure`
  Build: Browser parser, conservative rules, responsive evidence workspace, safe local JSON report export and session clear.
  Verify (mechanical): 10 Node behavioral tests and 12 browser checks passed; actual V2EX raw HTML reports complete sequence of four replies and closure #4. Screenshots reviewed on desktop and phone.
  Learner check: Available to try locally, but not performed by the user. Agent checks are not learner feedback.
  Commit: `Build local discussion evidence audit and verification`

## Hands-on Checkpoints

- [ ] Human hands-on feedback: not performed; user asked autonomous execution.

## Final Review

- [x] Agent mechanical/visual review of the implementation.
- [ ] Genuine entrant review, workflow eligibility and actual competition entry.

## Code Tour and App Map

- [x] Reference map generated from the actual code.
- [ ] Learner learning activity: not performed, not required by the user's task; curriculum deviation recorded.

Activity and evidence: Agent read the actual original HTML, reproduced the lost-comment failure, corrected owner selection to ignore avatar-only links, and verified full reply import. This describes development evidence, not the user's learning.
Route and stops: app.js file input -> core.js parseV2ex/audit -> app.js render/download. Reference route, not a completed human tour.
Reflection: not supplied. No personal reflections authored by the agent.

## Revisions

- V2EX author selection uses the header's small-text member link; the first member link is an avatar with empty text. Discovered by importing actual original HTML.
- Curriculum interviews and repeated approvals adapted to explicit user delegation; personal review and competition eligibility remain unverified.
