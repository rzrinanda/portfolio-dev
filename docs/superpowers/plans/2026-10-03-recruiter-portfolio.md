# Recruiter-First Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Present Rizal as a backend-focused software engineer with credible technical-leadership potential.

**Architecture:** Extend profile and project data with factual recruiter copy, then render it through a dedicated recruiter-focus section after the hero. Existing experience, skills, projects, visual language, and contact functionality remain available and reinforce the backend narrative.

**Tech Stack:** Next.js 14, React, Tailwind CSS, React Icons, Node built-in test runner.

**Spec:** `docs/superpowers/specs/2026-10-03-recruiter-portfolio-design.md`

## Global Constraints

- Preserve every frontend skill, experience item, generic project, resume link, social link, and dark terminal identity.
- Use `Backend Software Engineer`; do not claim team size, quantified outcomes, or an unverified management role.
- Recruiter case studies are only UniFi, Smart Integrated Security System, and RPConnect.
- Client-mode switching and new runtime dependencies are out of scope.

## Review Focus

- Confidential work keeps `Confidential` visible and gains no fabricated business details (Task 1 test).
- Proof cards stack and wrap tags on narrow screens without horizontal scrolling (Task 5 browser check).
- Existing projects, skills, filter behavior, resume, and contact behavior remain intact (Tasks 1 and 5).
- Frontend skills remain discoverable after backend prioritization (Tasks 1 and 5).

---

## File Structure

- `utils/data/personal-data.js`: `recruiterProfile` copy and three strength entries.
- `utils/data/projects-data.js`: `recruiterCaseStudy` metadata for selected projects.
- `app/components/homepage/recruiter-focus/index.jsx`: strength and impact cards.
- `app/components/homepage/hero-section/index.jsx`, `about/index.jsx`: recruiter narrative.
- `app/components/homepage/skills/index.jsx`, `contact/contact-without-captcha.jsx`: recruiter context only.
- `app/page.js`: recruiter-focus placement.
- `tests/portfolio-data.test.mjs`: data and source contracts.

### Task 1: Recruiter Data Contract

**Files:** Modify `utils/data/personal-data.js`, `utils/data/projects-data.js`, and `tests/portfolio-data.test.mjs`.

**Interfaces:** Produce `personalData.recruiterProfile` with `headline`, `summary`, `careerSignal`, `about`, and three `strengths`; add `recruiterCaseStudy` (`context`, `contribution`, `proof`) only to the three selected projects.

- [ ] **Step 1: Write failing data tests.** Assert headline equals `Backend Software Engineer`, strengths length is three, React remains in hero skills, and case-study project names equal UniFi, Smart Integrated Security System, and Republic Polytechnic Connect in that order.
- [ ] **Step 2: Run `node --test tests/portfolio-data.test.mjs`.** Expected: FAIL because the new data fields do not exist.
- [ ] **Step 3: Add factual profile and case-study data.** Keep UniFi confidential; describe SISS as lead backend work for security/operational monitoring; describe RPConnect as .NET 4 to .NET 6 modernization; do not add numerical claims.
- [ ] **Step 4: Run `node --test tests/portfolio-data.test.mjs`.** Expected: PASS.
- [ ] **Step 5: Commit with `feat: add recruiter portfolio data`.**

### Task 2: Recruiter Hero and About Narrative

**Files:** Modify `app/components/homepage/hero-section/index.jsx`, `app/components/homepage/about/index.jsx`, and `tests/portfolio-data.test.mjs`.

**Interfaces:** Consume `personalData.recruiterProfile.headline`, `.summary`, `.careerSignal`, and `.about`; retain profile image, buttons, social links, and coder-card skills.

- [ ] **Step 1: Write a failing source test.** Assert hero source references `recruiterProfile.headline` and About source references `recruiterProfile.about`.
- [ ] **Step 2: Run `node --test tests/portfolio-data.test.mjs`.** Expected: FAIL because the generic data fields remain in use.
- [ ] **Step 3: Render recruiter data in hero and About.** Add the concise summary and career signal; replace only the generic long About paragraph.
- [ ] **Step 4: Run `node --test tests/portfolio-data.test.mjs`.** Expected: PASS.
- [ ] **Step 5: Commit with `feat: sharpen recruiter narrative`.**

### Task 3: Core Strengths and Selected Impact

**Files:** Create `app/components/homepage/recruiter-focus/index.jsx`; modify `app/page.js` and `tests/portfolio-data.test.mjs`.

**Interfaces:** Consume profile strengths and projects where `recruiterCaseStudy` exists; produce `<RecruiterFocus />` with three strength and three impact cards.

- [ ] **Step 1: Write a failing source test.** Assert `app/page.js` imports and renders `RecruiterFocus`.
- [ ] **Step 2: Run `node --test tests/portfolio-data.test.mjs`.** Expected: FAIL because the section is absent.
- [ ] **Step 3: Create and render `<RecruiterFocus />` after the hero.** Use accessible headings, three desktop columns/one mobile column, existing accent colors, and readable cards. Every impact card shows name, role, context, contribution, tech tags, and `What this proves`; it must not reuse the dense terminal-card layout.
- [ ] **Step 4: Run `node --test tests/portfolio-data.test.mjs`.** Expected: PASS.
- [ ] **Step 5: Commit with `feat: add recruiter impact section`.**

### Task 4: Reinforce Backend Hierarchy

**Files:** Modify `app/components/homepage/skills/index.jsx`, `app/components/homepage/contact/contact-without-captcha.jsx`, and `tests/portfolio-data.test.mjs`.

**Interfaces:** Consume current skills, recruiter profile, and existing contact behavior; produce backend-first context without changing marquee, cards, form validation, EmailJS, CAPTCHA, or icons.

- [ ] **Step 1: Write failing source tests.** Assert Skills contains `Backend focus` and `<Marquee`; assert contact copy mentions backend.
- [ ] **Step 2: Run `node --test tests/portfolio-data.test.mjs`.** Expected: FAIL because recruiter labels are absent.
- [ ] **Step 3: Add a backend-first/supporting-full-stack label and a recruiter-oriented contact invitation.**
- [ ] **Step 4: Run `node --test tests/portfolio-data.test.mjs`.** Expected: PASS.
- [ ] **Step 5: Commit with `feat: reinforce backend recruiter focus`.**

### Task 5: Responsive Verification and Regression

**Files:** Modify only if needed `app/components/homepage/recruiter-focus/index.jsx`, `app/css/globals.scss`, and tests.

**Interfaces:** Produce a readable desktop/mobile recruiter flow with no regressions to projects, filters, skills, resume, or contact.

- [ ] **Step 1: Run `node --test tests/*.test.mjs` and `git diff --check`.** Expected: zero test failures and no whitespace errors.
- [ ] **Step 2: Verify desktop local preview.** Check hero, strengths, impact, experience, skills, projects, and contact invitation; resume and contact actions remain visible.
- [ ] **Step 3: Verify narrow mobile preview.** Confirm cards stack and tags wrap without horizontal scrolling.
- [ ] **Step 4: Commit any visual refinement with `fix: refine recruiter portfolio responsiveness`.**
