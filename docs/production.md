# Production, architecture, and release plan

Selected plan v1, 2026-09-06. [DESIGN.md](../DESIGN.md) owns the product; [mechanics](mechanics.md), [campaign](campaign.md), and [presentation](presentation.md) own their detailed requirements. This plan turns those decisions into an ordered delivery path.

## Technology and dependencies

Use **Godot 4.7.2**, typed GDScript, and the Compatibility renderer. Pin the editor and export templates to the same version. Compatibility supplies the required stylized 3D feature set and broad hardware coverage; the visual design must not depend on Forward+-only effects. Upgrade the engine only in a separately tested change. The selected release and renderer capabilities were checked against the [official release archive](https://godotengine.org/download/archive/4.7.2-stable/) and [renderer documentation](https://docs.godotengine.org/en/stable/tutorials/rendering/renderers.html).

Use Blender for modular modeling and animation. Export GLB for the game; retain editable source assets separately. Game imports and CI must not require Blender to be installed. Godot recommends glTF 2.0, while direct `.blend` import invokes a locally installed Blender. [Official asset-pipeline documentation](https://docs.godotengine.org/en/stable/tutorials/assets_pipeline/importing_3d_scenes/available_formats.html)

Generate a checked-in civil/Hebrew calendar table for 2028–2178 with build-time `pyluach==2.3.0`. This MIT-licensed library supports the required date conversions and holiday information. Python is not a game runtime dependency. Scene-specific cultural treatment remains authored and reviewed; the calendar library is not a religious authority. [Pyluach documentation](https://pyluach.readthedocs.io/en/latest/)

Use a simplified, baked Natural Earth world outline with our own destination nodes and district layouts. Its map data is public domain. Include provenance and credit anyway. No online tile provider or geocoding service is required. [Natural Earth terms](https://www.naturalearthdata.com/about/terms-of-use/)

There is no multiplayer server, runtime language model, login, analytics SDK, or mandatory network connection. Human-written events, procedural combinations, and stored campaign history create variation. Development tools may assist production, but shipped content must be reviewed, reproducible, and appropriately licensed.

## Simulation architecture

Separate the simulation from presentation. The simulation owns truth; scene nodes display it and submit commands. Do not create a scene node for every household or attach economic consequences to animation completion.

The intended project layout, to be created during implementation, is:

```text
game/
  project.godot
  sim/                 # State, commands, requirements, settlement, AI, history.
  content/             # Versioned JSON definitions, tuning, calendar, strings.
  presentation/        # Map, people, occasion scenes, camera, sound adapters.
  ui/                  # Planner, inspector, ledger, timeline, chronicle.
  assets/              # Imported/export-ready GLB, textures, audio, fonts.
  tests/               # Headless simulation and save tests.
assets-source/         # Editable models, compositions, and approved source art.
design/                # Small rules fixtures, not the production simulator.
```

Implementation contracts:

- Stable IDs identify people, properties, reservations, projects, agreements, and historical facts. References survive saves, aggregation, and scene changes.
- Commands are explicit records: draft, commit, amend, cancel, assign, propose, accept, and delegate. Validation returns structured reasons. A rejected command has no side effects.
- A single requirement evaluator serves preview, commit, AI planning, and weekly settlement. Forecasts use the same rules with stated assumptions; they are not a second economy.
- Resource reservation and capital commitment are atomic. A failed reservation releases everything it acquired. Escrow and restricted funds remain separate accounts.
- Weekly settlement follows the order in the mechanics specification. Stable iteration order and independently seeded random streams for demographics, opportunities, and narrative make runs reproducible. Cosmetic randomness cannot alter outcomes.
- Content definitions are JSON with a versioned schema. The loader validates required fields, units, IDs, references, bounds, and localization keys before starting play.
- Static definitions and tuning are separate from save state. A project refers to a definition version and records the terms actually agreed; a later balance patch cannot silently rewrite a signed contract.
- Local simulation uses household records. Distant populations use household cohorts with age counts and service allocations. A named person, institution, or remembered event is never merged into anonymous history.
- Stewards and rival courts use bounded candidate generation followed by the same feasibility checks as the player. Show their chosen priorities and rejected constraints in an explanation log.

The first scheduling solver checks compatible candidates and compares feasible alternatives; it does not need a universal optimizer. The player remains responsible for deciding what matters, including reserve capacity, particular people, expression, and future commitments.

## Time and calendar presentation

Keep canonical civil dates in simulation state. The calendar table supplies corresponding Hebrew dates, occasions, and Israel/diaspora variants. Weekly delivery represents the appropriate working days; closing for Shabbos does not randomly delete an entire week's capacity.

An occasion within a strategic week has its own date and presentation profile. No fast-speed jump skips a critical commitment deadline. A scheduled pause can stop at a chosen date or project milestone. Ordinary annual events can continue quietly without generating another modal prompt.

Calendar tests cover civil and Hebrew leap years, variable month lengths, year boundaries, consecutive occasions, and regional variants. Date labeling and authored depiction receive separate review. Exact geographic sunset calculation and halachic scheduling advice are outside the simulation.

The campaign has no 2128 cutoff. The supported date range ends in 2178; notify the player well in advance and offer a legacy ending or final-year creative sandbox with aging disabled. Saved history remains inspectable.

## Saves, recovery, and mods

Save locally in versioned JSON compressed by Godot, using a temporary file followed by atomic replacement. Keep three rotating autosaves and manual slots, with explicit export/import. Autosave before a leadership transition or finale commitment. Pause while presenting any recovery error, without discarding the current session.

Every save contains its seed, simulation version, content/mod manifest, date, state, outstanding reservations, and historical records. Validate checksums and references. Failed loads offer the previous autosave; never overwrite the damaged save automatically. Migrations are explicit, one version at a time, with fixtures and a round-trip test.

The first release supports local data-only mod packs: names, tuning, event definitions, and approved image/audio references through a manifest. No arbitrary GDScript mods in v1. Reject path traversal, duplicate IDs, incompatible dependencies, and missing required assets with readable errors. Save slots identify the required mod profile. The built-in campaign always has a clean unmodded profile.

Unrestricted saving is intentional. There is no ironman achievement requirement or hidden punishment for reloading. Cloud sync is outside the launch requirement; offline manual export is sufficient.

## Performance and verification targets

These are engineering targets, not measured performance or advertised minimum specifications:

| Area | Target |
| --- | --- |
| Main view | 1080p at 60 fps on a representative modern integrated-GPU desktop/laptop; low preset at 720p/30 fps. |
| Display load | One detailed neighborhood at a time; at most 250 visible crowd figures, at most 60 using full animation rigs, with cheaper distant representations. |
| Simulation load | 24 destination nodes, up to 600 actively simulated named characters, and at least 100,000 households represented through appropriate cohorts. Archived histories remain available. |
| Weekly settlement | Under 25 ms at the target large-campaign load; split safe background preparation from atomic state settlement where needed. |
| Saves | Under 250 ms main-thread interruption; under five seconds to load a representative late-game save. |
| Memory | Target systems with 8 GB RAM; measure actual game use before publishing specifications. |

Godot's engine requirements are not proof that the finished game meets any particular specification. Measure the complete build on actual Windows and Linux hardware. [Official system-requirements guidance](https://docs.godotengine.org/en/stable/about/system_requirements.html)

Automate headless imports, content-schema checks, rule fixtures, reservation collisions, money conservation, fixed-seed replay hashes, save/load equivalence, migration, missing-mod recovery, and a 150-year accelerated simulation. Include split/merge, retirement, zero-successor, failed-gathering, and insolvency recovery cases. The century-scale run proves stability only, not that playing a century is interesting.

Test campaign generation for a feasible opening, successor preparation, and an outreach path in every world region. Randomness may change the best plan; it must not make a required chapter impossible before the player has acted.

CI builds Windows and Linux exports with pinned templates. Use Godot's documented headless/script and export modes. [Official command-line documentation](https://docs.godotengine.org/en/stable/tutorials/editor/command_line_tutorial.html)

Manual checks cover the native exported games, keyboard-only use, large text, mixed-direction names, actual audible stem changes, scene/calendar correctness, controller-free navigation, frame pacing, and restoring a real save after a simulated interrupted write. Automated success does not substitute for these checks.

## Delivery stages and gates

Stages are ordered by evidence, not calendar promises. A failed gate means revise that stage, not continue adding content. Staffing and revision count are unknown, so a release date or total cost would be invented at this point.

| Stage | Deliverable | Exit gate |
| --- | --- | --- |
| 0. Prove the repeated decision | A plain but interactive 15-minute challenge: four spaces, three activities, three capable leads, sharing/lease/partner alternatives, clear forecasts, four changed circumstances, restartable seeds. | The mechanical playtest below finds understood alternatives, adaptation, and voluntary replay interest. No requirement for finished art. |
| 1. Vertical slice | The first 30–45 minutes in one polished block: six accessible properties, six program templates, eight recurring named characters, 12 event seeds, one gathering scene, one motif in three arrangements, save/reload. | Three viable opening approaches; a second attempt changes decisions; readable cause/effect; a visibly and audibly satisfying payoff. |
| 2. A working neighborhood | Complete chapters 1–2: bounded construction, business and household service rules, mentoring, agreements, calendar, three starting groups, and recurring positive life. | Players can sustain and reshape a neighborhood without repeated busywork; financial and service forecasts remain trustworthy. |
| 3. An enduring dynasty | Regional expansion, at least two linked campuses, stewards, charters, leadership transition, split/reconciliation, population aggregation. | A real transition is playable and legible; delegated institutions obey budgets; scale does not multiply routine commands. |
| 4. Complete campaign | All 24 world nodes, charter progression, six-region service packages, the Great Gathering, optional continuation, and the full bounded content catalogue. | Multiple paths reach a complete ending; failure/retry works; the finale tests familiar mechanics. |
| 5. Release candidate | Balance, accessibility, culture/audio review, hardware tests, credits/licenses, reproducible offline builds and corresponding source, opening-chapter sampler. | Full campaigns and all recovery paths pass; no known save-loss or progression-blocking bug; user-visible checks below completed. |

Stage 0 includes only enough character ability and negotiation to make the allocation alternatives legible. It does not include world travel, lineage simulation, a general event director, or a large building kit. The retained HTML concept is not this prototype.

Stage 1's eight recurring characters are a subset of the opening cast. Its six property options are a subset of the eight relevant first-chapter properties. Its music and events count toward, rather than add to, the release budgets.

## The mechanical fun gate

Run the same short scenario with five initial testers, including management-game familiarity and cultural familiarity across the group. Observe before explaining an intended clever solution. Obtain consent for any recording; private feedback is not automatically published to the public repo.

Each tester tries ordinary conditions, a changed opportunity, and a changed constraint. Ask them to explain what they expect, commit, inspect the result, and decide whether they want another attempt. Record actual plans and choices, including unanticipated ones.

Initial internal gate:

- At least four of five can describe two feasible approaches and a real tradeoff.
- At least four of five change or deliberately retain a plan for a reason when circumstances change.
- At least three of five voluntarily want another attempt after the assigned scenarios end.
- Confusion about feedback or controls is resolved before interpreting lack of enjoyment as a failed mechanic.
- There is no obvious repeated action that produces free money, trust, or capacity.

These are small-sample decision aids, not statistically established proof of appeal. Include what players say was pleasurable, what felt like work, and what they learned. A favorable score cannot override consistently dull observations.

If the gate fails, make two focused rule revisions and retest. Revise the available combinations, information, or opportunity timing before producing additional events. If the repeated activity still lacks appeal, replace the allocation-centered prototype with a negotiation-centered one using the same finite commitments and stated interests. Do not carry a failed core into full production to protect sunk work.

## Ownership, roles, and spending

Use the public repository for open-source design, reviewed implementation, and safe development assets. Original software is GPL-3.0-or-later; original documentation and standalone artwork/music are CC BY-SA 4.0 unless separately marked. Contributors retain their rights under these grants. [LICENSING.md](../LICENSING.md) defines the boundaries, full texts, attribution, and exceptions. Every third-party asset and library has an origin, license, allowed use, attribution, and source record. Do not commit private playtest recordings, credentials, purchased source packages without redistribution rights, or unlicensed music. Prefer an asset pipeline that allows others to build and run the complete game using redistributable inputs.

The product is an open-source offline game for Windows/Linux. Publish free playable builds with corresponding source as milestones become usable, and collect feedback before making a business commitment. A free opening-chapter sampler remains useful for onboarding and playtesting, not as an exclusive route through a payment gate. GitHub releases are the initial distribution route; itch.io and a paid official Steam build are optional later channels. Supporter bundles and donations are also options, not forecast income. The earlier $24.99 target is withdrawn; no replacement price is selected.

The same simulation and saves underpin free and any later commercial builds. Commercial distribution must preserve the applicable license permissions and source access. Store integration is optional to play; achievements, cloud saves, other operating systems, consoles, and controllers are outside the launch requirement. Store accounts, fees, submission, pricing publication, and distribution contracts require actual owner authorization when execution reaches them. Do not add an incompatible proprietary SDK without resolving its license compatibility.

The work requires simulation/UI engineering, environment/character art, animation, composition/performance, writing, cultural review, and QA. One person may cover multiple roles, but each quality gate still applies. Build the prototype with in-repo placeholders. Obtain a composer/performer and cultural-review plan before final content production; prepare briefs and asset lists before commissioning work.

No external spending or hiring is authorized by this design pass. The present authorized external-production budget is $0. Design autonomy resolves the product choices; it does not create a financial commitment. Do not budget against hypothetical future sales, donations, or volunteer labor. Scope stays fixed unless playtests justify a recorded revision.

## Release checklist

- Finish and verify one whole campaign on Windows and another on Linux; verify offline start, save, resume, and ending in exported builds.
- Exercise all three origins, all six regions, peaceful succession, a split, restructuring, and a failed finale followed by recovery.
- Make every project conflict, lost service, refusal, and material transaction traceable to its cause.
- Verify no required action depends on color, sound, a tiny target, or an unmapped mouse gesture.
- Review culturally sensitive content and original music in the actual scenes, not only in prose.
- Confirm asset provenance, dependency notices, font/recording rights, and store-build exclusions.
- Make the opening-chapter sampler end after the first permanent-home celebration; retain its save for continuation in the full game, without requiring a commercial purchase.
- Publish only the minimum specifications actually demonstrated by testing. Supply a short known-issues list and save-backup instructions.

The immediate next implementation task is Stage 0, not a city generator or full campaign framework. [Validation](validation.md) records exactly what this design pass has and has not established.
