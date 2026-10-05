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

test('hero code card preserves frontend skills while showing current backend tools', () => {
  assert.ok(personalData.heroSkills.includes('React'));
  assert.ok(personalData.heroSkills.includes('NextJS'));
  assert.ok(personalData.heroSkills.includes('Vue'));
  assert.ok(personalData.heroSkills.includes('RabbitMQ'));
  assert.ok(personalData.heroSkills.includes('Redis'));
  assert.ok(personalData.heroSkills.includes('Azure'));
});

test('featured projects lead with UniFi backend work', () => {
  assert.equal(projectsData[0].name, 'UniFi');
  assert.equal(projectsData[0].year, '2024 - Present');
  assert.ok(projectsData[0].tools.includes('RabbitMQ'));
});

test('recruiter profile is backend focused without losing frontend capability', () => {
  assert.equal(personalData.recruiterProfile.headline, 'Backend Software Engineer');
  assert.equal(personalData.recruiterProfile.strengths.length, 3);
  assert.ok(personalData.heroSkills.includes('React'));
});

test('recruiter case studies cover current, lead, and modernization evidence', () => {
  const featured = projectsData
    .filter(project => project.recruiterCaseStudy)
    .sort((left, right) => left.recruiterCaseStudy.order - right.recruiterCaseStudy.order);
  assert.deepEqual(featured.map(project => project.name), [
    'UniFi',
    'Smart Integrated Security System',
    'Republic Polytechnic Connect',
  ]);
});

test('homepage recruiter copy is driven by recruiter profile data', async () => {
  const hero = await readFile(new URL('../app/components/homepage/hero-section/index.jsx', import.meta.url), 'utf8');
  const about = await readFile(new URL('../app/components/homepage/about/index.jsx', import.meta.url), 'utf8');
  assert.match(hero, /personalData\.recruiterProfile/);
  assert.match(hero, /personalData\.clientProfile/);
  assert.match(about, /recruiterProfile\.about/);
});

test('recruiter focus is rendered on the homepage', async () => {
  const page = await readFile(new URL('../app/page.js', import.meta.url), 'utf8');
  assert.match(page, /RecruiterFocus/);
});

test('skills retain marquee cards while stating the backend-first focus', async () => {
  const skills = await readFile(new URL('../app/components/homepage/skills/index.jsx', import.meta.url), 'utf8');
  assert.match(skills, /Backend focus/);
  assert.match(skills, /<Marquee/);
});

test('contact invitation addresses recruiter conversations', async () => {
  const contact = await readFile(new URL('../app/components/homepage/contact/contact-without-captcha.jsx', import.meta.url), 'utf8');
  assert.match(contact, /backend/i);
});

test('captcha contact invitation addresses recruiter conversations', async () => {
  const contact = await readFile(new URL('../app/components/homepage/contact/contact-with-captcha.jsx', import.meta.url), 'utf8');
  assert.match(contact, /backend/i);
});

test('layout does not require a remote font during local preview or build', async () => {
  const layout = await readFile(new URL('../app/layout.js', import.meta.url), 'utf8');
  const styles = await readFile(new URL('../app/css/globals.scss', import.meta.url), 'utf8');
  assert.doesNotMatch(layout, /next\/font\/google/);
  assert.match(styles, /font-family:/);
});

test('page metadata supports the recruiter-facing backend narrative', async () => {
  const layout = await readFile(new URL('../app/layout.js', import.meta.url), 'utf8');
  assert.match(layout, /Backend Software Engineer/);
  assert.match(layout, /APIs, integrations, and business-critical systems/);
});

test('portfolio exposes a client-facing full-stack profile', () => {
  assert.equal(personalData.clientProfile.headline, 'Full-Stack Software Developer');
  assert.equal(personalData.clientProfile.strengths.length, 3);
  assert.ok(projectsData.filter(project => project.clientCaseStudy).length === 3);
});

test('client navigation retains its shareable audience query', async () => {
  const navbar = await readFile(new URL('../app/components/navbar.jsx', import.meta.url), 'utf8');
  assert.match(navbar, /audienceSuffix/);
  assert.match(navbar, /getAll\('audience'\)/);
  assert.match(navbar, /\?audience=client/);
});

test('client mode has a delivery-first hero and floating section navigation', async () => {
  const hero = await readFile(new URL('../app/components/homepage/hero-section/index.jsx', import.meta.url), 'utf8');
  const rail = await readFile(new URL('../app/components/floating-section-nav.jsx', import.meta.url), 'utf8');
  assert.match(hero, /Turn operational bottlenecks into/);
  assert.match(hero, /Delivery console/);
  assert.match(rail, /IntersectionObserver/);
  assert.match(rail, /Hide section navigation/);
  assert.match(rail, /id: 'home'/);
  assert.match(rail, /useState\('home'\)/);
  assert.match(rail, /min-width: 1280px/);
});
