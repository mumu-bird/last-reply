---
doc: spec
status: delegated
---
# Last Reply — Technical Spec
## How This Works, In Plain Language
The app reads a saved discussion in your browser, compares the reply count, searches the owner's own unquoted sentences for explicit changes, and shows its evidence. No imported content is uploaded.
## The Core Journey Through the System
File input -> DOMParser or JSON.parse -> normalized thread -> audit() -> text-only DOM -> downloaded JSON report. Implements prd.md > The Core Journey.
## Stack
Browser HTML/CSS/JavaScript modules, no build or paid dependencies. Optional Node static server. Documentation: https://developer.mozilla.org/en-US/docs/Web/API/DOMParser and https://nodejs.org/api/http.html .
## Where It Runs and How Someone Tries It
Node 20+: npm start, then http://127.0.0.1:4316 . npm test runs built-in node:test behavioral checks. Import a saved V2EX topic HTML or the normalized sample schema from fixtures.json. No keys needed. Demo and public repository remain required for the competition; a local page does not fulfill publishing requirements.
## Look and Feel
System serif/sans/mono stack; responsive CSS grid collapses to one column below 850px; focus-visible styles, accessible input labels and status announcements.
## Components
### Parser
core.js exposes parseV2ex(doc): reads original topic owner, topic_content, reply_content, numbered cells, expected reply count and canonical URL. Reply quote blocks/code removed only from the decision text; evidence retains original text. Implements prd.md > Import and completeness.
### Auditor
core.js exposes audit(thread): validates schema, orders numbered replies, accounts for closure/assignment/reopening and missing replies. Source content remains untrusted. Implements prd.md > Owner decisions.
### Workspace
app.js renders cards and timeline with textContent, safe HTTP(S) links, error/success state and JSON download. Implements prd.md > Evidence and export.
## Data Model
Thread: title, owner, body, replies[{number,author,text,decisionText?,url?}], expectedReplies, capturedAt, sourceUrl, demo. Memory only. Exported report contains original evidence with user-initiated local download.
## File Structure
index.html / style.css: visible workspace; core.js: parser and rules; app.js: browser interactions; fixtures.json: synthetic demos; tests/core.test.js: meaningful behavior checks; server.mjs: local static server; devpost/: planning records and app map.
## External Services and Dependencies
None at runtime. Imported files are never fetched automatically. Package has no dependencies.
## Important Failure Modes
Missing comments -> incomplete audit warning even if a closure is found. Changed HTML layout -> import error rather than inventing owner. Unrecognized phrasing -> needs confirmation. Missing captures -> 'capture time unknown', never pretend current availability.
## Decisions and Open Issues
Deterministic rules are conservative and non-exhaustive, not an AI semantic reader. User learning intentions are not established. Curriculum interviews and repeated approvals were overridden by the user's explicit instruction to decide and execute independently; no learner approvals or completed hands-on learning are fabricated. Competition eligibility under this adapted workflow is unconfirmed.
