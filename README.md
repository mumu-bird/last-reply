# Last Reply

A local discussion-audit proof of concept. Import a saved V2EX HTML page or normalized thread JSON to inspect owner closure, reservation, no-cash terms and missing replies before doing speculative freelance work.

## Run

Requires Node.js 20 or later. No dependencies, account or API key.

```sh
npm start
```

Open http://127.0.0.1:4316 . `npm test` runs the behavioral tests.

Select **Try an example**, or import saved HTML / JSON. Importing a file processes it locally in browser memory. **Download evidence report** exports source metadata, reply counts and the exact deciding text. **Clear this session** removes imported records from memory.

## Input

Use a complete saved V2EX topic HTML page, not a search-result summary. The parser supports the V2EX layout verified on October 3, 2026. Changed layouts may fail closed with an import error. It detects incomplete numbered reply sequences and never fetches private conversations.

JSON may be one record or an array; see `fixtures.json` for the schema. `expectedReplies` must be explicit. Examples are synthetic and are not opportunities to contact. Imported report JSON can be re-imported.

## Limits

This is a transparent, rule-based phrase detector, not an AI interpreter or verification service. It recognizes selected Chinese and English phrases. Imported metadata and content can be incorrect. A complete file is not proof that a discussion remains current or that payment is funded. Unknown capture times remain unknown. Always recheck the original source before accepting or doing work.

File limit: 4 MB; batch limit: 100 threads; per-thread limit: 2,000 replies. No automatic messaging, payments, tracking, persistent storage or live fetch. DOMParser content is kept separate from the rendered document. Content is rendered as text; links require HTTP(S), and a restrictive content policy blocks external images and executable embedded content.

## Verification

10 built-in Node behavioral tests cover owner attribution, actual closure wording, reopening, incomplete sequences, negation, quotes/code, points-only rewards, reservations, duplicate numbering and unsafe URLs. A separate browser check exercised imports, reports, clear, errors, injection strings and 390px layout. The raw public V2EX page that prompted this project produced four parsed comments and the decisive owner closure at #4. That third-party page is not redistributed in this project.

## Provenance and competition status

New application code was produced by Codex on October 3, 2026. No existing sample app code was reused. The Devpost Learn pack at https://github.com/challengepost/learn-ai-basics was read and adapted as the planning/build/verification reference. `devpost/` contains the original working planning records; copies at the root make the three requested plans easy to find.

The user explicitly delegated decision-making and declined a skills/time interview. Therefore the interview/repeated-approval/learner-check flow was adapted, and the plans use `status: delegated`, rather than inventing learner approval. No personal learning reflections, hands-on participation or competition eligibility are asserted. Eligibility of this adapted workflow needs organizer confirmation before entering. This is a locally prepared candidate for https://learn-ai-basics.devpost.com/ , not a submitted entry or an earned prize.

Before actual entry: confirm eligible entrant/account and adapted workflow, authorize public repository/video publication, publish the code and video, and complete the genuine entrant's submission fields. Rules require a public YouTube/Vimeo demo URL; the local WebM alone does not satisfy that requirement. No submission or paid service has been made.
