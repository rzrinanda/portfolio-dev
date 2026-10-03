# Recruiter and Client Audience Modes Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a shareable Recruiter/Client mode that changes the portfolio's positioning while preserving verified content and the recruiter-first default.

**Architecture:** Normalize `audience` in the homepage server component and pass a default-safe value only to sections whose message changes. The header selector uses ordinary query-string links. Profile and case-study copy live in data objects while existing cards and the skills marquee are reused.

**Tech Stack:** Next.js 14 App Router, React, Tailwind CSS, Node built-in test runner.

**Spec:** `docs/superpowers/specs/2026-10-04-audience-mode-design.md`

## Global Constraints

- Recruiter is the default for `/`, `?audience=recruiter`, and invalid values; `?audience=client` is the only Client selector.
- Keep all employment history, skills, projects, resume/social links, contact behavior, dark terminal identity, and visible frontend skills.
- Do not invent commercial results, metrics, team size, or management claims.
- Keep the switcher keyboard-accessible and responsive without horizontal overflow.
- Use data-driven copy; no remote font or new dependency.

## Review Focus

- An absent or malformed query renders recruiter content; Task 1 tests normalization.
- Client links preserve the audience after navigating home; Task 2 tests canonical links.
- Case-study order remains UniFi, SISS, RPConnect; Task 1 tests selected ordering.
- Client mode retains React, NextJS, and Vue as full-stack evidence; Task 3 tests shared skills markup.
- Both contact variants receive a client project CTA; Task 3 tests both files.

---

### Task 1: Audience data and homepage normalization

**Files:**
- Modify: `utils/data/personal-data.js`
- Modify: `utils/data/projects-data.js`
- Modify: `app/page.js`
- Modify: `tests/portfolio-data.test.mjs`

**Interfaces:**
- Produces: `normalizeAudience(value) -> 'recruiter' | 'client'` from `app/page.js`.
- Produces: `personalData.clientProfile` with headline, summary, careerSignal, about, strengths, and contactInvitation.
- Produces: clientCaseStudy context, contribution, and proof only for UniFi, SISS, and RPConnect.
- Consumes: `searchParams.audience`, passing normalized audience to Hero, AudienceFocus, Skills, and ContactSection.

- [ ] **Step 1: Write failing data and normalization tests**

Assert `client` normalizes to client, absent and unknown values normalize to recruiter, and `clientProfile.headline` is `Full-Stack Software Developer`.

- [ ] **Step 2: Run tests to verify failure**

Run `node --test tests/*.test.mjs`. Expected: FAIL because client profile and normalization do not exist.

- [ ] **Step 3: Add verified client copy and normalize homepage audience**

Use exact `client` query value. Preserve recruiter data, project order, and generic filters.

- [ ] **Step 4: Run tests to verify passing behavior**

Run `node --test tests/*.test.mjs`. Expected: PASS.

- [ ] **Step 5: Commit task**

Commit data, page, and test changes with `feat: add audience-aware portfolio data`.

### Task 2: Accessible header audience switcher

**Files:**
- Create: `app/components/audience-switcher.jsx`
- Modify: `app/components/navbar.jsx`
- Modify: `tests/portfolio-data.test.mjs`

**Interfaces:**
- Consumes: `AudienceSwitcher({ audience: 'recruiter' | 'client' })`.
- Produces: header links for `/?audience=recruiter` and `/?audience=client` with tab semantics and current-state indication.
- Consumes: normalized audience from a request-aware navbar wrapper without client-only state.

- [ ] **Step 1: Write failing source tests for canonical links and accessibility**

Assert source contains `?audience=client`, `role="tablist"`, and `aria-selected`.

- [ ] **Step 2: Run tests to verify failure**

Run `node --test tests/*.test.mjs`. Expected: FAIL because no switcher exists.

- [ ] **Step 3: Implement responsive AudienceSwitcher and connect header**

Use semantic links and Tailwind wrapping. Preserve the existing logo and section navigation. Make active state both textual and visual.

- [ ] **Step 4: Run tests to verify passing behavior**

Run `node --test tests/*.test.mjs`. Expected: PASS.

- [ ] **Step 5: Commit task**

Commit switcher, navbar, and tests with `feat: add portfolio audience switcher`.

### Task 3: Audience-aware narrative, focus cards, skills, and CTA

**Files:**
- Rename: `app/components/homepage/recruiter-focus/index.jsx` to `app/components/homepage/audience-focus/index.jsx`
- Modify: `app/components/homepage/hero-section/index.jsx`
- Modify: `app/components/homepage/audience-focus/index.jsx`
- Modify: `app/components/homepage/skills/index.jsx`
- Modify: `app/components/homepage/contact/index.jsx`
- Modify: `app/components/homepage/contact/contact-with-captcha.jsx`
- Modify: `app/components/homepage/contact/contact-without-captcha.jsx`
- Modify: `tests/portfolio-data.test.mjs`

**Interfaces:**
- Consumes: `audience = 'recruiter'` prop in HeroSection, AudienceFocus, Skills, and ContactSection.
- Consumes: recruiter/client profiles plus corresponding case-study evidence.
- Produces: identical recruiter view by default and client copy for `audience === 'client'`.

- [ ] **Step 1: Write failing component-source tests for Client selection**

Assert hero consumes `clientProfile`, focus consumes `clientCaseStudy`, skills has full-stack copy, and both contact files have project-focused copy.

- [ ] **Step 2: Run tests to verify failure**

Run `node --test tests/*.test.mjs`. Expected: FAIL because components do not consume Client data.

- [ ] **Step 3: Reuse existing components with default-safe audience props**

Preserve layout, marquee, form validation, CAPTCHA, EmailJS behavior, and recruiter strings when the prop is absent.

- [ ] **Step 4: Run tests and whitespace check**

Run `node --test tests/*.test.mjs` and `git diff --check`. Expected: PASS and no whitespace errors.

- [ ] **Step 5: Verify shareable URLs at desktop and mobile widths**

Open `/`, `/?audience=client`, and `?audience=invalid`. Confirm switcher, hero, focus cards, skills intro, contact invitation, and invalid fallback.

- [ ] **Step 6: Commit task**

Commit affected components, page, and tests with `feat: tailor portfolio content for client audience`.
