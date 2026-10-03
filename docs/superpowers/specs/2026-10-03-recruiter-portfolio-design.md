# Recruiter-First Portfolio Design

## Goal

Increase recruiter confidence by presenting Rizal as a backend-focused software
engineer with current enterprise platform experience, full-stack delivery
capability, and credible potential for backend or technical leadership.

## Audience and success criteria

The primary audience is a technical recruiter, hiring manager, or engineering
leader evaluating Senior Backend Software Engineer and Backend Lead-track
roles. Within the first screen, they should understand Rizal's specialization,
experience level, and career direction. Within two minutes, they should see
evidence of system ownership rather than only a list of technologies.

Success means the portfolio communicates:

- 10+ years of software delivery experience.
- Backend depth in modern .NET, integrations, asynchronous workflows, data,
  and deployment tooling.
- Ability to deliver across the stack when the product needs it.
- Technical leadership signals grounded in lead roles and complex systems.

## Scope and boundaries

Phase one is recruiter-first only. A recruiter/client mode switch is deferred
to a later phase so the page keeps one clear message.

Existing frontend skills, full employment history, portfolio projects, dark
terminal visual identity, resume, and social links remain available. No metrics,
team sizes, delivery outcomes, or leadership claims will be invented. Where a
metric is unavailable, the copy will use verifiable scope, ownership, stack,
and system context.

## Positioning and hero

The hero uses this hierarchy:

- Headline: `Backend Software Engineer`.
- Supporting statement: `10+ years building APIs, integrations, internal
  platforms, and business-critical systems—with full-stack delivery
  experience.`
- Career signal: `Focused on owning complex backend platforms and growing into
  technical leadership.`

The primary calls to action remain resume and contact/LinkedIn. A small
availability line will make the intended recruiter audience explicit without
claiming a job-search status that has not been confirmed.

## Content architecture

1. **Hero** — specialization, experience, career direction, resume and
   LinkedIn/contact action.
2. **Core strengths** — three scannable proof pillars:
   - Backend Platforms & Integrations
   - Enterprise Modernization
   - End-to-End Delivery
3. **Selected impact** — three recruiter case studies, each with role,
   context, technical focus, contribution, and a short `What this proves`
   line:
   - UniFi: current confidential backend platform work with .NET Core, C#,
     PostgreSQL, RabbitMQ, Redis, and Docker.
   - Smart Integrated Security System: Lead Back End Developer work on a
     security and operational monitoring system for a government corrections
     context, using MQTT, Express, Prisma, and PostgreSQL.
   - RPConnect: maintenance, bug fixing, and modernization from .NET 4 to
     .NET 6 for a Singapore government context.
4. **Experience timeline** — retain every role; enrich the first three roles
   with the strongest ownership language and let older roles serve as career
   depth rather than compete with selected impact.
5. **Skills** — preserve all skills but visually prioritize core backend,
   platform, and integration expertise. Frontend remains a supporting
   capability, not removed content.
6. **Recruiter CTA** — a final concise invitation to review the resume,
   LinkedIn, or contact Rizal about senior backend and lead-track roles.

## Visual and interaction design

Keep the existing dark terminal aesthetic, pink/violet/green accents, and
code-inspired motifs. New information should use concise cards and readable
prose instead of dense terminal blocks. The case-study section should make the
role and proof readable on desktop and mobile without requiring horizontal
scrolling. The existing experience scrollbar remains hidden as currently
implemented.

## Data and component design

Portfolio copy remains data-driven. Add a recruiter profile object to personal
data and case-study metadata to project data rather than embedding claims in
components. A dedicated recruiter-impact component consumes only the three
approved featured projects. Existing generic projects and project filtering
continue to work unchanged.

## Validation

- Add data tests for the backend headline, three selected case studies, and
  preservation of frontend skills.
- Run the existing Node test suite and `git diff --check`.
- Verify the hero, selected impact cards, experience, skills, and CTA in a
  local browser at desktop and mobile widths.

## Versioning and rollout

The current live portfolio is preserved at Git branch `release/v1` and tag
`v1.0`. Work happens on `feature/recruiter-portfolio`. The feature branch is
reviewed in preview before any merge or push to `master`; client-oriented mode
is a subsequent project.
