# Mechanics and simulation specification

Selected design v1, 2026-09-06. [DESIGN.md](../DESIGN.md) owns product direction. This document owns the mechanical rules and their initial experiments.

## 1. State and authority

The court owns treasury funds, institution shares, leases, equipment, and its commitments. Institutional accounts preserve restricted project funds separately from general funds. Private businesses and households keep their own money, assets, decisions, and affiliations.

The player can inspect public facts, visit people, negotiate, allocate court resources, appoint willing staff, define policies, and run projects. They cannot spend a household's money, command its votes, force affiliation, or assign unwilling characters.

The HUD shows treasury and weekly net cash, affiliated households, service gaps, and upcoming commitments. Detailed views explain housing, school access, livelihoods, and belonging. Trust is specific to relationships. There is no spendable influence currency or numerical measure of religious worth.

## 2. Core entities

| Entity | Required state |
| --- | --- |
| Property | Stable ID, owner, district, entrance, lease/purchase terms, zones, upkeep, improvements. |
| Zone | Hard capacity, tags, equipment, daytime/evening reservations, access edges, transformation costs. |
| Person | Stable ID, household, age, skills, two traits, available work bands, existing role, values, current ambition, relationships, remembered facts. |
| Household | Members or age counts, income band, housing, service needs, preferences, affiliation, considered destinations. |
| Project | Intent, beneficiaries, requirements, allocations, costs, duration, agreements, outcomes, status. |
| Program | A running recurring project with attendance, staff, capacity, supplies, and cash flows. |
| Agreement | Parties, explicitly reserved resources, consideration, term, review date, exit conditions, and breach consequences. |
| Institution | Programs, assets, governance, accounts, staff, traditions, and actual service history. |
| Branch | Campus set, steward, budget, reserve target, priority order, permission limits, and service packages. |
| Memory | Event ID, participants, place, date, causal project/decision IDs, and a small set of persistent effects. |

## 3. Space, access, and scheduling

Each zone has daytime and evening capacity. They are abstract recurring weekly availability bands; a program's actual visual/calendar treatment determines when its scenes appear. Reserving a band reserves that zone for the activity. Two activities cannot independently claim the same seats in the same band.

Common tags are indoor, outdoor, seating, classroom-ready, kitchen, sleeping, storefront, office, storage, and workshop. Furniture and conversions add appropriate tags. A room's hard occupancy limit remains binding under every character ability.

Day/evening reuse requires compatible equipment and a stated reset cost. Resets are included in operation and staff requirements, not repeated manual chores. Moving a continuing activity must identify its replacement before the old slot is released.

On the neighborhood graph, ordinary local access reaches three street edges. A staffed transport route supplies additional access up to its passenger capacity. Institutional catchment follows actual access and available places. Decorative pedestrian paths never determine service delivery.

A shared kitchen or facility serves zones within a connected campus. Crossing between separate properties requires an access agreement and, for food or equipment, allocated delivery capacity. A campus has at most four adjacent properties, preserving a readable local puzzle.

Projects progress through draft, committed, setup, running, completed, suspended, and closed states. Drafting is free. A commit atomically reserves the budget, rooms, staff, and agreement capacities. Setup creates operational capacity only when completed. Suspended programs stop consuming uncommitted variable inputs and stop producing their outputs.

## 4. People as capabilities

Every lead reserves one of their available work bands. A person cannot lead two activities in the same band. Regular staff use contracted capacity pools associated with a branch; exceptional named people supply capabilities and relationship consequences. Availability is specified by contract, so the player cannot silently claim a person's private time.

The first capability set is teaching, organizing, cooking, transport, construction, bookkeeping, and hosting. Each is a discrete capability at levels 1–3. Higher levels increase throughput within hard facility limits or permit a specified project variant.

The starting ability catalogue includes:

- Portable classroom: teaching in an appropriately equipped shared hall.
- Household hospitality: coordinate willing homes into a visitor-hosting package.
- Practical builder: convert one existing compatible zone without an external specialist.
- Bridge builder: negotiate shared use with a neutral institution after an introduction.
- Mentor: train an assistant over 13 weeks, reserving some of the mentor's capacity.
- Reliable dispatcher: support an additional route using the same office, with a separate driver and vehicle still required.

Traits create preferences and behavior rather than universal numerical bonuses. A meticulous organizer wants preparation time; a generous host may volunteer within their availability; an ambitious administrator wants responsibility. Character growth follows actual work and relationships. Assignment outcomes explain changes.

## 5. Program and project families

The first release has 18 reusable program templates, grouped into five intentions. Variants change requirements and outputs within these families.

| Intention | Templates |
| --- | --- |
| Teach | Children's classes, cheder/yeshiva program, girls' school program, adult study, mentoring. |
| Welcome | Gathering, visiting families, wedding, recurring hospitality. |
| Provide | Community kitchen, charitable assistance, livelihood workshop, local business partnership. |
| Connect | Local transport, inter-branch visit, regional delivery. |
| Establish | Permanent campus, satellite community. |

An institution can combine several programs. Religious and cultural distinctions are carried by content, staff, and appropriate presentation, while capacity accounting remains shared. An original institution name and purpose do not create a separate economic simulator.

Buildings are adapted using bounded zone improvements: furnish, convert, connect, add one permitted floor, restore, or build a modular shell on an available site. Small conversion effort starts at two crew-weeks, a floor at 12, a new local shell at 26. Major projects use stage milestones and continue to expose their temporary loss of capacity.

## 6. Money and opportunity cost

Currency is stored in integer cents and presented as fictional game dollars. All values use a constant baseline; the campaign does not simulate a century of macroeconomic inflation.

Weekly settlement debits payroll, contracts, upkeep, supplies, and debt service, then credits operating receipts and matured pledges. Assess insolvency after the complete settlement, not at an intermediate ledger entry; payments due before a tick have explicit commitment deadlines. Committed capital is paid or escrowed on commitment. Grants can fund only eligible requirements. Forecasts include setup timing and the full term of signed agreements.

An institution can have tuition, service receipts, pledged support, and distributions from businesses it actually owns. Other businesses pay only explicit rents, service fees, or voluntary pledges. Recurring giving is limited by each contributor's budget and priorities. Repeating a gathering does not mint a fixed reward: its financial outcome depends on actual attendees, commitments, and costs.

The player sets a reserve policy, initially 13 weeks of ordinary operation. A forecasted breach is a warning with restructuring options, not an unexplained action failure. Capital-project budgets are explicit envelopes. Debt is available against owned assets or a credible cash-flow plan; borrowing consumes a future weekly payment and exposes the contract's total cost.

Local property demand can change price and rent at contract review. Existing fixed-term leases retain their terms. Buying has high initial cost and flexibility; leasing has lower initial cost and recurring obligations; shared use trades autonomy and future capacity for access. These are different resource commitments, not permanent percentage bonuses.

## 7. Negotiation

Negotiation is a structured offer builder: inspect needs, propose contributions, offer consideration, and specify duration. Contributions include money, space, staff time, delivery, introductions, and governance participation.

Each actor has hard conditions and weighted interests. An offer passes hard conditions and then a transparent acceptance threshold. Known interests explain satisfied and unsatisfied terms. Visiting or asking an intermediary can reveal an undisclosed interest; a failed offer does not roll a hidden persuasion die.

Promised consideration becomes a real reservation in the shared ledger. A friendly promise cannot allocate the same room, person, or budget twice. Actors can counteroffer. Repeated identical offers produce no new result without a state change.

Agreements can include a project-specific appointment or advisory seat, but generosity and mutual benefit are common motivations. Kept promises build specific trust; breaches damage the affected relationship and public reliability when relevant. Standard agreements offer an explicit notice/exit path.

## 8. Households, demand, and growth

Households value housing, school access, livelihood, and belonging. Each coverage value lies between 0 and 1. The initial destination evaluation weights are 0.30 housing, 0.25 school, 0.20 livelihood, and 0.25 belonging, with household-specific priorities adjusting and renormalizing them.

Two quarters below 0.55 overall satisfaction cause a household to consider alternatives. It moves only when a reachable destination has an available home and scores at least 0.15 higher. Moves are phased so warnings and recovery matter. Growth uses actual housing and service headroom, and arriving households bring their own needs and preferences.

Births, aging, forming adult households, marriages, and deaths are simulated life events. The player influences conditions and offers introductions; individuals decide relationships. Children are never a resource the player assigns to work or a population-production control. There is no required birth or marriage quota.

Named people retain individual dates and histories. Anonymous population uses age counts and household cohorts at larger scales. Single-year aging and seeded demographic draws occur at annual settlements; the starting rate tables are fictional balancing data, not claims about real communities. Promotion from a cohort creates a stable character without inventing participation in past named events.

The interface presents reasons for migration and affiliation. Religious affiliation is voluntary and does not imply command over household resources or political behavior.

## 9. Competition, civic life, and leadership

Rival courts have budgets, priorities, capacity, and relationship limits. They seek buildings, willing staff, partnerships, and useful projects under the same rules. Their plans are partially visible through the city and relationships. They can cooperate, compete, refuse, reconcile, or help spontaneously.

Civic projects use the agreement system: a transport link, school partnership, public-space improvement, or fictional planning approval has terms and tradeoffs. Political support depends on constituent preferences. There is no bribery button, military system, or automatic delivery of every household's vote.

The rebbe's spiritual office and institutional administration are separate. Succession follows the fictional founding court's tradition: adult family members with recognized teaching/leadership experience are eligible for the spiritual office; an interim steward maintains operations if none is ready. Administrative and institutional roles have their own willing candidates, including women in substantial recurring roles.

The player mentors and nominates an eligible successor. Households, educators, and institution stewards express support based on actual relationships, work, and commitments. At 60% aggregate support, succession is united. At 40–59%, the nominee needs a coalition agreement or accepts autonomous branches. Below 40%, an interim council offers a different candidate or a negotiated split. Percentages are game rules, not a claim about real succession practice.

Assets in a split follow ownership and signed institutional charters. The player selects the continuing branch while retaining family history and applicable assets. Rivalry creates altered projects and relationships; it does not reset the simulation.

## 10. Time, settlement, and delegation

The calendar starts 2028-09-01. One strategic tick advances seven civil days. The display also shows the Hebrew date and occasions. Important calendar events crossed during a tick are scheduled within that interval and ordered by their actual dates.

Tick order is: validate scheduled commands; reserve/setup changes; staff and access capacity; program delivery and attendance; financial settlement; household/service state; relationship consequences; eligible narrative events; snapshot and UI notification. Newly completed facilities become available during the following tick. A person or resource changed by a later stage cannot retroactively produce an earlier output.

Planning pauses by default. Major expired-contract decisions, imminent insolvency, succession, and chapter completions auto-pause. Ordinary good news uses scene markers and a digest. Four- and twelve-times speed stop before an unresolved critical decision. Focused occasion viewing pauses strategy while animation and sound continue.

Each directly managed campus can have three simultaneous setup projects, limited further by crew and staff. Running programs do not consume setup-project slots. A skilled administration office can add one slot. The direct-management limit is three campuses; a delegated steward runs others within signed budgets and permitted agreement types.

Delegation preserves the same simulation rules. It prioritizes existing commitments, required reserves, service gaps, then optional projects. Exceeding authority creates a request with alternatives. Changing stewardship transfers reservations and accounts intact.

## 11. First experiment and numerical fixture

The first mechanical prototype isolates allocation and shared use. It has four spaces, three continuing activities, fixed available staff, and a 16-week planning horizon. It is not the full starting campaign economy.

Requirements: 20 daytime school places, 24 evening gathering places, and continuation of a 10-person evening study group. Existing hall capacity is 30 and side-room capacity 12. An annex and partner room can be obtained under stated terms. The fixture includes a $10,000 capital ceiling and up to $800 weekly incremental operating allocation; these are local experiment limits.

The exact input is [project-combinations.json](../design/fixtures/project-combinations.json). The experiment checks room capacity, band collisions, access costs, relocation cost, the capital ceiling, and the operating ceiling. It evaluates cost over 16 weeks without assuming this is the only player objective.

Three useful arrangements are:

- Share: school in the hall by day, gathering there in the evening, study moved to the side room.
- Lease: school and gathering in the annex, study stays in the hall, retaining the original hall's daytime flexibility.
- Borrow: school and gathering use the hall, study moves to a partner room, retaining the side room's evening availability.

The checked counterfactuals are normal conditions, a paid workshop needing the original hall by day, an existing side-room commitment, and that commitment with the partner room unavailable. Each kind of change alters the preferred feasible approach. [Validation records](validation.md) distinguish arithmetic consistency from observed fun.

## 12. Exploit and clarity rules

- Reservations are atomic; no double-booked person, room, vehicle, or pledge.
- Selling or suspending a requirement suspends dependent output before the next settlement.
- Refunds cannot exceed the actual recoverable cost. Preview toggling creates no money or reputation.
- Rewards identify actual beneficiaries and funding sources. The same historical milestone pays once.
- Staff growth and social memories come from resolved activities, not repeatedly assigning and unassigning.
- AI actors receive no free money, hidden capacity, or special acceptance rules.
- Preview and settlement invoke the same requirement and accounting functions.
- A failing plan shows the specific conflicting allocation, amount, date, or missing capability.
