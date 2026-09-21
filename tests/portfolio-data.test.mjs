import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

async function loadDataModule(relativePath) {
  const source = (await readFile(new URL(relativePath, import.meta.url), 'utf8'))
    .replace(/^import\s+(\w+)\s+from\s+['"][^'"]+['"];?\s*$/gm, 'const $1 = {};');
  return import(`data:text/javascript,${encodeURIComponent(source)}`);
}

const { experiences } = await loadDataModule('../utils/data/experience.js');
const { personalData } = await loadDataModule('../utils/data/personal-data.js');
const { projectsData } = await loadDataModule('../utils/data/projects-data.js');
const { skillsData } = await loadDataModule('../utils/data/skills.js');

test('portfolio leads with the current FinanSys backend role', () => {
  assert.equal(experiences[0].title, 'Back End Developer');
  assert.equal(experiences[0].company, 'FinanSys (Full Time Employee)');
  assert.equal(experiences[0].duration, '(Nov 2024 - Present)');
  assert.ok(experiences[0].stack.includes('Docker'));
});

test('portfolio exposes the current resume and backend platform expertise', () => {
  assert.equal(personalData.designation, 'Software Developer');
  assert.equal(
    personalData.resume,
    'https://drive.google.com/file/d/1WgZ_lHcmqb5B08dbTIsTocwxycniqlVq/view?usp=sharing',
  );
  assert.ok(skillsData.includes('Redis'));
  assert.ok(skillsData.includes('RabbitMQ'));
  assert.ok(skillsData.includes('SQL Server'));
});

test('featured projects lead with UniFi backend work', () => {
  assert.equal(projectsData[0].name, 'UniFi');
  assert.equal(projectsData[0].year, '2024 - Present');
  assert.ok(projectsData[0].tools.includes('RabbitMQ'));
});
