---
doc: prd
status: delegated
---
# Last Reply — Product Requirements
Source: scope.md > The Unique Kernel and The Core Loop.
## The Core Journey
1. Open the page and try the clearly labeled synthetic example, or import saved HTML/JSON.
2. Review the owner's final decision and all parsed replies.
3. Check how many replies were expected and found, and when the snapshot was captured.
4. Download the evidence report; recheck the original source before committing work.
## Screens and Layout
One responsive workspace: introductory masthead, import bar, thread cards, decision panel and ordered evidence timeline.
## Look and Feel
Agent-selected cream paper, dark ink, muted burnt-orange highlights, serif headings and monospaced evidence labels. No external fonts or artwork.
## Features and Behavior
### Import and completeness
Accept V2EX raw saved HTML and normalized JSON with owner, body, replies and expectedReplies. Reject files over 4 MB and incomplete schemas. A missing-replies warning overrides a reassuring status.
### Owner decisions
Recognize explicit Chinese/English closure, allocation and reopening signals. Ignore quoted lines, code blocks and negated closure phrases. Non-owner replies remain visible but cannot authoritatively close a task. Reopening clears a prior closure but does not prove funded availability.
### Evidence and export
Show exact text, author, reply number and source URL. Reports retain source/completeness/capture timestamp and rule-based limits. Imported strings render as text. Unsafe link protocols never become clickable.
## States and Boundaries
Empty: invitation to import. Error: accessible specific explanation. Persistence: session only; never silently retain third-party content. Demo: synthetic data labeled as such. Open-ish threads: require confirmation, never label them guaranteed paid work.
## Product Decisions
The user delegated implementation; all app design decisions are agent choices. No human review or testimonial is claimed.
## What We're Building
A working import-to-decision-to-report journey on desktop and mobile.
## Deferred From the POC
Live fetch, accounts, outreach, payment collection and arbitrary-language interpretation.
## Open Questions
Competition registration, human eligibility and submission/publishing authorization are not established. This project is not a submitted or confirmed eligible entry.
