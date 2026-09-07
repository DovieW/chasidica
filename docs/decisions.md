# Decision register and planning history

Started 2026-09-06. The user delegated the remaining design decisions on that date. [DESIGN.md](../DESIGN.md) and its linked specifications now define selected v1 scope. Examples outside those specifications remain ideas, not promised features.

## Agreed direction

| Decision | Basis |
| --- | --- |
| The working title is Chasidica. | Named in the initial concept discussion. |
| The long-term ambition includes comical world domination. | Explicit creative direction in the initial context. |
| A living miniature neighborhood viewed from above is the starting direction for the main view. | Accepted after discussing and viewing the interaction sketch. |
| Early play should make a small community and its first permanent home feel meaningful. | Supported in the follow-up discussion about growing from a rented shtiebel. |
| Lots of cool moments and novel experiences, especially unexpected and joyful ones, are central to the fun. | Explicitly emphasized on 2026-09-06. |
| Graphics and music deserve careful attention as part of the game's enjoyment. | Explicitly emphasized in the follow-up planning discussion on 2026-09-06. |
| The next design priority is finding the fun in actual gameplay mechanics. | The planning discussion was explicitly redirected toward mechanics and game-design principles on 2026-09-06. |
| Keep planning notes in this folder and establish a public GitHub repository with a first commit. | Explicit project instruction on 2026-09-06. |

## Selected v1 decisions

These choices were made under the user's design delegation. They do not claim human playtest validation.

| Area | Decision | Owning specification |
| --- | --- | --- |
| Player | Guide an enduring court; direct its resources and negotiate with autonomous people and institutions. No playable avatar. | [Design](../DESIGN.md) |
| Repeated activity | Assemble projects through compatible spaces, schedules, capabilities, and agreements. Negotiation supports that core. | [Mechanics](mechanics.md) |
| Sources of enjoyment | Discovery/mastery, expression, personal continuity, joyful life, and affectionate comedy. | [Design](../DESIGN.md) |
| Simulation | Weekly pausable settlement; explicit capacities and commitments; household/cohort scale; no spendable influence or religious-worth meter. | [Mechanics](mechanics.md) |
| Buildings | Acquire and adapt bounded functional zones; campuses contain up to four adjacent properties. | [Mechanics](mechanics.md) |
| Start | East Borough, 2028, 100 households, rented hall and side room, a school-capacity problem, positive baseline operation. | [Campaign](campaign.md) |
| Progression | Permanent home, functioning neighborhood, satellite, succession, world charters, Great Gathering. | [Campaign](campaign.md) |
| Scale | At most three directly managed campuses; stewards handle others under actual budgets and constraints. | [Mechanics](mechanics.md) |
| Victory | 12 charter cities across six continents, a stable compact, and a successful distributed Great Gathering; continue afterward. | [Campaign](campaign.md) |
| Failure | Recovery, restructuring, and splits precede terminal institutional collapse; death is not game over. | [Design](../DESIGN.md) |
| View | Warm stylized miniature 3D, orthographic camera, four rotations, functional room cutaways. | [Presentation](presentation.md) |
| Audio | Three original motifs in three arrangements plus three additional cues; culturally appropriate vocal/instrument treatment. | [Presentation](presentation.md) |
| Content | Bounded catalogue: 18 programs, 36 improvements, 30 traits, 120 event seeds, 24 occasion compositions. | [Presentation](presentation.md) |
| Tech | Godot 4.7.2, typed GDScript, Compatibility renderer, Blender-to-GLB assets; offline rule-driven simulation. | [Production](production.md) |
| Release | Windows/Linux keyboard-and-mouse open-source game; free builds first, optional commercial distribution or supporter funding later; no committed price. | [Production](production.md) |
| Rights | Public repository; GPL-3.0-or-later software and CC BY-SA 4.0 original writing/standalone creative assets; explicit third-party provenance and exceptions. | [Licensing](../LICENSING.md) |
| Validation | Arithmetic check now; interactive mechanics prototype and observed play before expanding production. | [Validation](validation.md) |

The rough sketch's costs, dates, household count, capacities, and deterministic outcomes are examples only. It does not decide the final economy or time model.

## Revision and implementation policy

Major design choices are resolved. Tuning numbers and engineering targets are deliberately testable starting points. Change a decision when a specific playtest, technical measurement, cultural review, or scope finding warrants it, and record the evidence and replacement here.

The next build is Stage 0 in the production plan. No extra design-choice questionnaire is required before that bounded prototype. A failed fun gate requires rule revision or replacement, not automatic expansion of the content bank.

Hiring, purchases, account creation, store submission, and publication of offers remain separate execution authorities. No such commitments were made during planning. There is no asserted release date, measured hardware specification, or completed human playtest.

## Planning log

### 2026-09-06 — Establish the concept

Discussed a modern Hasidic community and dynasty simulation with an increasingly absurd endgame. Explored the physical experience of a living neighborhood, selecting buildings and people, expanding institutions, and seeing consequences over time.

Created an illustrative neighborhood interaction sketch. The player can inspect a shul, school, and available annex, choose a school expansion, and advance time to see a visible result. This remains a design reference.

The main view was accepted as a useful starting direction. Follow-up discussion emphasized the satisfaction of gaining a permanent home, a recurring cast, visible communal life, and the continuity between early accomplishments and later expansion.

### 2026-09-06 — Make joy and novelty central

Established unexpected, joyful, novel experiences as a core design priority. Began a moment bank and proposals for connecting those experiences to player agency, independently acting residents, the calendar, discovery, and remembered history.

The current task is planning and recording ideas. The next stage is to make the intended fun concrete enough to evaluate a small prototype. No production game implementation has been approved or started by these notes.

### 2026-09-06 — Plan graphics and music with gameplay

Added graphics and music as explicit creative priorities. Began a discussion guide linking visual style, musical identity, sound, player decisions, and possible features through a shared scene. The style, soundtrack, and feature recommendations are proposals awaiting discussion.

### 2026-09-06 — Find the fun in the mechanics

The discussion was redirected toward actual gaming mechanics and established principles for making play enjoyable. Recorded a source-grounded framework and criteria for testing candidate mechanics. Updated the planning order so that repeated decisions, rules, learning, and alternatives receive explicit attention. Graphics, music, novel experiences, and joy remain important; no core mechanic has yet been validated through play.

### 2026-09-06 — Delegate and resolve the complete design

The user authorized autonomous design decisions and requested a summary. Selected the project-combination core and resolved the campaign, authority, economy, social simulation, succession, world finale, presentation, technology, release scope, and production order. Retained earlier exploratory notes as history with clear supersession notices.

Added a reusable numerical fixture and checker. All four counterfactual scenarios passed; sharing, leasing, and borrowing each become preferred under specified conditions. Recorded that arithmetic consistency does not establish enjoyment. The next deliverable is a small interactive mechanics prototype, followed by explicit observed-play gates.

### 2026-09-06 — Open-source development and progression concepts

The user approved keeping the repository public, choosing open-source licensing, and making monetization optional. Applied GPL-3.0-or-later to software and CC BY-SA 4.0 to original prose and standalone creative assets, with third-party exceptions and clear contribution terms. Withdrew the untested $24.99 target; free playable builds and evidence from players come first. Paid official builds or supporter funding remain possible under the licenses, without a revenue assumption or spending commitment.

The user requested three images showing early, middle, and late play. The [progression gallery](../output/concepts/README.md) records the generated concepts, prompts, and provenance. These are visual targets for discussion, not a claim of an implemented game or validated renderer performance.
