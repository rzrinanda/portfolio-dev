# Recruiter and Client Audience Mode Design

## Goal

Let the same portfolio speak clearly to two legitimate audiences without
duplicating the site or diluting Rizal's backend-first recruiter positioning.
Recruiter remains the default. Client mode frames the same verified experience
as full-stack product delivery and practical technical partnership.

## Audience outcomes

- **Recruiter mode** helps a recruiter or hiring manager assess backend depth,
  seniority, and lead-track potential.
- **Client mode** helps a prospective client understand that Rizal can take a
  business workflow from discovery through a dependable working application.

Neither mode invents commercial outcomes, financial metrics, team size, or
management claims. Both retain the full employment history, skills, projects,
resume link, and contact form.

## Experience and navigation

A compact two-option control in the desktop header switches between
`Recruiter` and `Client / Business`. It is a labelled tablist with an active
state visible by color and border, supports keyboard focus, and does not hide
the main section navigation. On narrow screens it wraps beneath the logo
instead of overflowing.

The selected audience is encoded as a query parameter:

- `/` or `?audience=recruiter` selects Recruiter.
- `?audience=client` selects Client / Business.
- Any other value safely falls back to Recruiter.

Each option is an ordinary link rather than JavaScript-only state, making the
mode shareable, crawlable, and usable without client-side hydration. The
document title and description remain backend-recruiter oriented because the
default page serves that audience; client copy is visible only after the
explicit mode selection.

## Content behavior

The audience selection flows from `app/page.js` into only the components whose
message changes: hero, audience focus, skills introduction, and contact CTA.
All content is driven from a new `personalData.clientProfile` object and
client-case-study fields on the already selected projects.

### Recruiter mode

Existing content remains unchanged: Backend Software Engineer headline,
technical-leadership signal, recruiter snapshot, and senior backend CTA.

### Client / Business mode

- **Hero:** `Full-Stack Software Developer` with a clear message about turning
  operational workflows into reliable web applications, APIs, and integrations.
- **Focus section:** three client-facing capabilities: solution delivery,
  integration and platform reliability, and long-term modernization. It uses
  the existing UniFi, SISS, and RPConnect projects, but explains their verified
  delivery scope rather than presenting hiring proof.
- **Skills:** retains the complete marquee and frames backend, frontend, data,
  and deployment tools as delivery capability.
- **Contact CTA:** invites project discussions involving web applications,
  integrations, internal systems, or modernization work.

## Component architecture

- `AudienceSwitcher` is a small presentational header component that reads the
  current query parameter and emits canonical links.
- `app/page.js` normalizes `searchParams.audience` and passes `audience` to
  affected homepage components.
- `HeroSection`, `RecruiterFocus` (renamed to audience-neutral `AudienceFocus`),
  `Skills`, and both contact variants select data by audience. The component
  interface defaults to `recruiter` so other callers stay safe.
- `personalData` owns audience profile copy. Project data owns only project
  evidence; selected case-study ordering is shared to prevent diverging lists.

## Visual direction

Keep the established dark terminal aesthetic and existing color palette. The
signature interaction is the compact audience selector: Recruiter uses the
existing violet/pink emphasis; Client uses the existing green accent. The
focus cards retain the readable card layout so only message and labels change,
not the information hierarchy or mobile behavior.

## Validation

- Data tests cover default normalization, client headline/copy, and retained
  frontend skills.
- Component tests confirm the mode switcher, URL links, and conditional focus
  rendering are wired from the homepage.
- Run the Node test suite and `git diff --check`.
- Check both URLs at desktop and mobile widths, including an invalid audience
  query fallback.

## Rollout

Implement on a new `feature/audience-modes` branch from the verified recruiter
release (`master` at commit `377b748`). Push the branch for review before a
future merge to `master`. Existing `release/v1` and `v1.0` remain rollback
points for the pre-recruiter portfolio.
