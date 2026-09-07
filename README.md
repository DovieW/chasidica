# Chasidica

A modern Hasidic community and dynasty simulation, growing from a rented shtiebel to comically outsized ambitions for world domination.

Build a community you care about, and look forward to what happens next.

**Status:** open-source project with design v1 selected; mechanical prototyping is next. There is no playable game yet.

## What should make it fun?

The core is discovering useful combinations of people, places, schedules, and agreements. Share a hall between a school and a gathering, find an unexpected partner, preserve room for a new opportunity, and turn a local invention into a worldwide tradition.

Unexpected, joyful moments give those decisions meaning. A small school, a familiar shopkeeper, and the original rented room should still matter when the court has branches around the world. The view is a warm 3D miniature neighborhood, with pausable time and increasingly capable delegation.

## Selected design

Start with **[the complete game design](DESIGN.md)**. It is the source of truth for product direction and supersedes earlier exploratory options.

- [Mechanics](docs/mechanics.md): allocation, capabilities, negotiation, finance, household growth, leadership, and simulation rules.
- [Campaign](docs/campaign.md): opening session, characters, six chapters, succession, world scope, finale, and replay.
- [Presentation](docs/presentation.md): art, original music, scenes, interface, accessibility, and bounded content quantities.
- [Production plan](docs/production.md): technology, architecture, saves, testing, stages, playtest gates, and launch scope.
- [Validation](docs/validation.md): reproducible allocation experiment and the limits of what it establishes.
- [Decision register](docs/decisions.md): selected choices, revision policy, and planning history.

The next deliverable is a repeatable 15-minute allocation challenge. Different arrangements already pass a small arithmetic check; whether choosing between them is fun still requires real playtesting.

```sh
node design/check-fixtures.mjs
```

No dependencies are required beyond Node.js. This checks a design fixture, not the production game.

## Earlier exploration

[Game-design principles](docs/game-design-principles.md) remain the evaluation framework. [Vision](docs/vision.md), [fun proposals](docs/fun.md), [experience discussion](docs/experience-direction.md), and the [moment bank](docs/moments.md) preserve the concept's development and possible material; they do not expand the selected release scope.

## Visual concept

[Early-, middle-, and late-game image gallery](output/concepts/README.md): three AI-generated concepts showing the intended progression, with the exact prompts and provenance. These are visual targets, not screenshots of a running game or production-ready assets.

[The neighborhood interaction sketch](output/chasidica-concept.html) explores selecting buildings, choosing a school expansion, and advancing time to see the result. It is a self-contained HTML fragment from the planning conversation, with an optional host-provided view selector. Its numbers and outcomes are illustrative; it is not the simulation or a settled art direction. It can be opened locally in a modern browser; GitHub displays its source.

The selected production technology is Godot 4.7.2 with modular GLB assets, for Windows and Linux. Development is open-source and offline-first. Free playable builds and feedback come first; paid official builds or supporter funding remain optional, with no committed price or revenue expectation.

## License and contributions

Software is **GPL-3.0-or-later**. Original writing and standalone creative assets are **CC BY-SA 4.0**, unless separately marked. Third-party material retains its own terms. See [licensing and attribution](LICENSING.md), the [GPL text](LICENSE), the [CC license text](LICENSES/CC-BY-SA-4.0.txt), and [contribution guidance](CONTRIBUTING.md).
