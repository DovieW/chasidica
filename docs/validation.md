# Design validation record

Run date: 2026-09-06. This records evidence for [design v1](../DESIGN.md), not a claim of a finished or proven-fun game.

## Allocation experiment

Input: [project-combinations.json](../design/fixtures/project-combinations.json). Reproduce with Node.js and no installed packages:

```sh
node design/check-fixtures.mjs
```

The [checker](../design/check-fixtures.mjs) enumerates compatible room assignments and optional contract acceptance. It filters hard capacities, time-band collisions, pre-existing commitments, unavailable rooms, capital limits, and gross weekly operating limits. It charges access once per used room, accounts for relocation, and ranks feasible plans by capital plus 16 weeks of net operating cost. It does not call a game engine.

Observed output:

| Scenario | Feasible plans | Cheapest approach | Capital | Net weekly cost | Total over 16 weeks |
| --- | ---: | --- | ---: | ---: | ---: |
| Ordinary conditions | 9 | Share the hall; relocate study to side room. | $4,000 | $200 | $7,200 |
| Paid workshop needs the hall by day | 13 | Lease annex; retain study in hall; accept workshop. | $9,000 | −$200 | $5,800 |
| Side room already committed | 5 | Borrow partner room for study; reuse hall. | $5,000 | $300 | $9,800 |
| Side room committed and partner unavailable | 4 | Lease annex; keep study in hall. | $9,000 | $700 | $20,200 |

The fourth case has two equally cheap layouts: the school may use the hall or annex by day while the gathering uses the annex and study stays in the hall in the evening. Both belong to the leasing approach. The checker verifies all optimal plans, not just the displayed representative.

The workshop plan costs $5,000 more initially than sharing and improves weekly net cost by $400, so its cash-cost break-even is 12.5 weeks. It is better over the fixture's 16-week horizon, but not automatically preferable for a shorter horizon or a player valuing different commitments. Net cost of −$200 means the explicit outside contract exceeds the incremental weekly costs, not that a gathering creates money without a payer.

Result: the stated rules admit multiple feasible approaches and a different cost-minimizing approach under each kind of changed circumstance. These numbers are deliberately authored to create those tradeoffs. The check catches arithmetic or rule regressions; it does not discover market-realistic prices or prove an enjoyable game.

## Boundaries of this evidence

- Each scenario begins from the same starting state. The experiment does not yet validate amendment costs, sunk costs, or changing a running plan mid-campaign.
- Staff and equipment availability are fixed assumptions here. The full game's capability, negotiation, household, construction, and calendar systems have not been implemented or validated.
- All costs and revenues in the fixture are known. It does not yet demonstrate productive uncertainty, social attachment, spontaneous stories, or long-term balance.
- No human mechanical playtest has occurred. There is no evidence yet that players enjoy this activity or want to repeat it.
- The existing HTML scene is a presentation/interaction sketch, not a playable simulation or proof that the core works.
- Engine/renderer/library choices were checked against their official documentation. No Godot project, export, hardware benchmark, real audible soundtrack, or production asset pipeline has been run in this pass.

## What would count as the next evidence

Build the Stage 0 challenge in [the production plan](production.md), including amendment previews that preserve actual spent money and existing commitments. Use the three lead capabilities and minimal offer builder to expose alternatives without scripting one correct tutorial solution.

Observe five initial testers across a baseline and changed circumstances. Record feasible alternatives they notice, how their plans change, whether the outcomes match their expectations, what they find pleasurable, and whether they voluntarily want another attempt. Apply the explicit iteration gate before expanding the campaign or event catalogue.

The design is decided. The remaining uncertainty is empirical: how the chosen rules feel, which numbers need adjustment, and whether that experience remains satisfying as scale increases.
