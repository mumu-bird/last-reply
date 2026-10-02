# Last Reply

## Tagline
Read the owner's last reply before spending your next hour on a closed opportunity.

## What it does
Last Reply is a local browser workspace for developers evaluating public freelance discussions. It imports complete saved V2EX HTML or normalized thread JSON, checks whether the numbered replies are present, and highlights explicit closing, reservation and reopening statements made by the original poster. It also flags points-only reward terms. Each decision includes the exact attributed text and a downloadable evidence report.

## Why it was built
This project began after an AI-assisted opportunity search overlooked a closing comment that the page summary had omitted. The original HTML contained all four replies, including the owner's final statement that the task had ended. The proof of concept makes completeness and attribution visible before speculative implementation work begins.

## How it was built
New HTML, CSS and JavaScript code, designed and implemented by Codex on October 3, 2026 at the account owner's direction. It uses browser DOMParser and conservative, inspectable phrase rules; no runtime LLM, paid API or user account is needed. Planning and verification used an adapted Devpost Learn Skill Pack workflow, with scope, PRD, spec and build records included in the repository.

The account owner explicitly delegated planning and implementation. Curriculum interviews, repeated approvals and hands-on learner exercises were not performed. Documents identify choices as delegated, rather than recording approvals or learning experiences that did not occur. The submission discloses this deviation; eligibility has not been independently confirmed.

## What changed during implementation
Importing the actual source HTML revealed that the first member link was an avatar without text. Selecting the byline instead fixed owner attribution. Tests also established that missing comments, stranger-authored closures, quoted closure text and later reopening require different treatment. These are observed implementation findings, not a personal learning testimonial from the account owner.

## Demonstrated behavior
- Local import and complete-reply checks.
- Owner-attributed closure, reservation and reopening evidence.
- Points-only reward detection.
- Local report export and session clearing.
- Desktop and narrow-screen layouts.

Ten behavioral tests and twelve browser checks passed. The actual raw V2EX page yielded four comments and the decisive closure at reply #4. The public examples and video use synthetic discussions, clearly labeled as examples. No third-party page is redistributed.

## Limitations
Selected phrases are detected by rules, not general semantic interpretation. Imported data may be incomplete or inaccurate. A complete snapshot is not proof of current availability or funding; an unclear result always needs confirmation. The app does not send messages, accept work or collect payments.

## Materials
Repository: https://github.com/mumu-bird/last-reply

Local demo file: demo.webm (70.8 seconds, actual app interactions). The competition's required public YouTube/Vimeo link must be populated with a genuinely uploaded video; a GitHub video download is not asserted as a substitute.

## Entry status
Prepared submission text; not a confirmation that Devpost accepted an entry. Actual entrant account, identity and any personal survey responses must be authentic. No prize or earnings claimed.
