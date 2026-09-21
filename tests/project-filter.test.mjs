import test from 'node:test';
import assert from 'node:assert/strict';

import { filterProjectsByYear } from '../utils/project-filter.js';

test('filters active project ranges without coercing the selected year', () => {
  const projects = [
    { name: 'UniFi', year: '2024 - Present' },
    { name: 'Legacy Project', year: 2023 },
  ];

  assert.deepEqual(filterProjectsByYear(projects, '2024 - Present'), [projects[0]]);
});
