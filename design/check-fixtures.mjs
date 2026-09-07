// SPDX-License-Identifier: GPL-3.0-or-later
// Copyright (C) 2026 Chasidica contributors
// Analytical design check only: this is not the production simulator.
// Run from any directory: node /path/to/chasidica/design/check-fixtures.mjs
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const fixture = JSON.parse(readFileSync(new URL('./fixtures/project-combinations.json', import.meta.url), 'utf8'));
const slot = (room, band) => `${room}:${band}`;
const integer = (value, name) => assert(Number.isSafeInteger(value) && value >= 0, `${name} must be a nonnegative integer`);

assert.equal(fixture.schema_version, 1);
for (const name of ['horizon_weeks', 'capital_ceiling', 'gross_weekly_operating_ceiling', 'common_weekly_cost']) {
  integer(fixture[name], name);
}
assert(fixture.horizon_weeks > 0);
for (const collection of ['rooms', 'programs', 'scenarios']) {
  assert(fixture[collection].length > 0);
  assert.equal(new Set(fixture[collection].map(item => item.id)).size, fixture[collection].length, `duplicate ${collection} ID`);
}
const roomById = new Map(fixture.rooms.map(room => [room.id, room]));
for (const room of fixture.rooms) {
  for (const field of ['capacity', 'access_capital', 'weekly_access_cost']) integer(room[field], `${room.id}.${field}`);
  assert(room.bands.length > 0 && room.bands.every(band => ['day', 'evening'].includes(band)));
  assert(['share', 'lease', 'borrow'].includes(room.strategy));
}
for (const program of fixture.programs) {
  for (const field of ['seats', 'setup_cost']) integer(program[field], `${program.id}.${field}`);
  assert(['day', 'evening'].includes(program.band));
  if (program.existing_room) {
    assert(roomById.has(program.existing_room));
    integer(program.relocation_cost, `${program.id}.relocation_cost`);
  }
}

function solve(scenario) {
  const unavailable = new Set(scenario.unavailable_rooms);
  for (const id of unavailable) assert(roomById.has(id), `unknown unavailable room ${id}`);
  for (const blocked of scenario.blocked_slots) {
    assert(roomById.get(blocked.room)?.bands.includes(blocked.band), 'invalid blocked slot');
  }
  const blocked = new Set(scenario.blocked_slots.map(item => slot(item.room, item.band)));
  const contract = scenario.optional_contract;
  if (contract) {
    assert(roomById.get(contract.room)?.bands.includes(contract.band), 'invalid contract slot');
    integer(contract.weekly_revenue, 'contract revenue');
  }
  const feasible = [];

  function visit(index, assignments, occupied) {
    if (index < fixture.programs.length) {
      const program = fixture.programs[index];
      for (const room of fixture.rooms) {
        const key = slot(room.id, program.band);
        if (unavailable.has(room.id) || blocked.has(key) || occupied.has(key)) continue;
        if (room.capacity < program.seats || !room.bands.includes(program.band)) continue;
        visit(index + 1, [...assignments, { program: program.id, room: room.id }], new Set([...occupied, key]));
      }
      return;
    }

    const assignedRooms = new Set(assignments.map(item => item.room));
    const setup = fixture.programs.reduce((cost, program, i) => cost + program.setup_cost +
      (program.existing_room && program.existing_room !== assignments[i].room ? program.relocation_cost : 0), 0);
    const contractAvailable = contract && !unavailable.has(contract.room) &&
      !blocked.has(slot(contract.room, contract.band)) && !occupied.has(slot(contract.room, contract.band));

    // Enumerate both acceptance and refusal; do not assume accepting revenue is required.
    for (const acceptContract of contractAvailable ? [false, true] : [false]) {
      const used = new Set(assignedRooms);
      if (acceptContract) used.add(contract.room);
      const capital = setup + [...used].reduce((cost, id) => cost + roomById.get(id).access_capital, 0);
      const grossWeekly = fixture.common_weekly_cost + [...used].reduce((cost, id) => cost + roomById.get(id).weekly_access_cost, 0);
      if (capital > fixture.capital_ceiling || grossWeekly > fixture.gross_weekly_operating_ceiling) continue;
      const netWeekly = grossWeekly - (acceptContract ? contract.weekly_revenue : 0);
      const additions = [...new Set([...used].map(id => roomById.get(id).strategy))].filter(kind => kind !== 'share').sort();
      feasible.push({
        strategy: additions.join('+') || 'share',
        assignments, acceptContract, capital, grossWeekly, netWeekly,
        totalCost: capital + netWeekly * fixture.horizon_weeks,
      });
    }
  }

  visit(0, [], new Set());
  assert(feasible.length, `${scenario.id}: no feasible plan`);
  feasible.sort((a, b) => a.totalCost - b.totalCost);
  const best = feasible.filter(plan => plan.totalCost === feasible[0].totalCost);
  assert.deepEqual([...new Set(best.map(plan => plan.strategy))].sort(), [...scenario.expected.optimal_strategies].sort(), `${scenario.id}: optimal strategy mismatch`);
  for (const plan of best) {
    for (const [field, expected] of Object.entries({
      capital: scenario.expected.capital,
      grossWeekly: scenario.expected.gross_weekly,
      netWeekly: scenario.expected.net_weekly,
      totalCost: scenario.expected.total_cost,
    })) assert.equal(plan[field], expected, `${scenario.id}: ${field}`);
  }
  return { scenario: scenario.id, feasiblePlans: feasible.length, optimalPlans: best.length, ...best[0] };
}

const results = fixture.scenarios.map(solve);
console.log(JSON.stringify({ status: 'passed', scope: 'allocation arithmetic only, not gameplay validation', results }, null, 2));
