# Finding the fun: principles and tests

Planning correction: 2026-09-06. The early design described desirable experiences without a defined core. [Design v1](../DESIGN.md) now selects project combinations as the primary activity and negotiation as its supporting mechanic. The next priority is to test whether repeating that activity is satisfying.

These are practical design criteria, not a formula that guarantees enjoyment. The Chasidica examples and proposed tests below are our applications of the cited ideas.

## Useful foundations

- **MDA:** distinguish rules, the behavior they generate during play, and the resulting emotional experience. Its vocabulary includes discovery, expression, challenge, narrative, and sensory pleasure. Different games seek different combinations. [Hunicke, LeBlanc, and Zubek](https://www.cs.northwestern.edu/~hunicke/MDA.pdf)
- **Interesting decisions:** examine player choices, the information and feedback around them, and their pacing. [Sid Meier's GDC session](https://www.gdcvault.com/play/1015756/Interesting)
- **Learning and mastery:** investigate what a player learns, which abilities they exercise, and whether new situations require changed tactics. This is a useful lens for strategy, rather than a complete definition of all enjoyment. [Raph Koster](https://www.raphkoster.com/2012/01/24/an-atomic-theory-of-fun-game-design/)
- **Autonomy, competence, and relatedness:** research connects these need satisfactions with enjoyment and motivation. The PENS overview also highlights clear feedback, approachable controls, strategic freedom, and cooperative interaction. [Self-Determination Theory / PENS](https://selfdeterminationtheory.org/player-experience-of-needs-satisfaction-pens/)

## Evaluation criteria for Chasidica

| Principle | What to look for in play |
| --- | --- |
| A worthwhile aim | The player understands what they are trying to accomplish and can care about or choose that aim. |
| Meaningful agency | Different reasonable choices lead to materially different opportunities, costs, or outcomes. |
| Clear cause and effect | The player can form an expectation, act, observe a response, and understand enough to revise their plan. |
| Room to learn | Experience improves the player's planning, judgment, experimentation, or ability to express an idea. |
| Interacting rules | A manageable set of actions produces combinations and situations worth exploring. |
| Productive uncertainty | Uncertainty prompts preparation and adaptation; the player has useful information and some influence over the result. Randomness is optional. |
| Varied rhythm | Planning, pressure, discovery, accomplishment, and quieter enjoyment have room within a session. |
| Evidence from play | Repeated play reveals interesting decisions and alternatives, and players can describe what they enjoyed. |

These criteria should support the intended joy, surprise, and attachment. Difficulty, competition, punishment, and optimization are design options whose value depends on the experience being sought.

## Apply the criteria to a mechanic

Buying a school is a theme-level action. To evaluate its gameplay, specify what the player controls and what can change the decision: location, room use, staff assignments, shared facilities, schedules, commitments, or timing.

The selected hypothesis is that combining people, places, and schedules creates satisfying discoveries. For example, sharing a kitchen between daytime classes and evening gatherings might make two projects possible within a limited property. [The mechanics specification](mechanics.md) now defines capacity, staff, costs, scheduling, and counterfactual situations. [The numerical experiment](validation.md) checks some of those tradeoffs, but the hypothesis has not been tested with players.

A contrasting candidate makes negotiation central: identify what other people want, propose exchanges, and manage commitments that affect later opportunities. V1 uses this as support for project assembly. The [production plan](production.md) specifies when to test it as a replacement core if allocation does not produce enjoyable repeated play.

## A testable proposal must specify

1. The player's immediate aim and available actions.
2. The state and information visible before acting.
3. The constraints and exact rules for consequences.
4. At least two plausible approaches and what makes each attractive.
5. How a changed situation could change the preferred approach.
6. What the player might learn or discover through repetition.
7. The observations that would make us retain, revise, or reject the idea.

Keep a test small enough to repeat with different choices. Paper exercises or simple interactive prototypes can investigate rules; visual and audio studies can investigate presentation. A good scene, a working interface, or a balanced budget alone does not establish a good strategy game.

Iteration through playable prototypes is also a documented practice in the development of Civilization IV. Our proposed tests are an application of that practice, not results from that project. [Johnson and Newcomb's GDC session](https://gdcvault.com/play/1013460/Play-Early-Play-Often-Prototyping)

## Questions for observing play

- Does the player see more than one attractive possibility?
- Do they form a plan and alter it for a reason?
- Can they explain why an action worked or failed?
- Do they discover a combination or approach we did not have to prescribe?
- Does another attempt produce a different interesting decision?
- What activity was enjoyable while they were doing it?
- What became repetitive, confusing, or routine work?

Replay interest is useful evidence alongside observed behavior and the player's account. Time spent alone is not a measure of enjoyment. No mechanical playtest has yet been performed for Chasidica.
