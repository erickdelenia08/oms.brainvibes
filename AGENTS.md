# BrainVibes Tutoring OMS — Agent Project Context

## What this project is
An Operations Management System for a private tutoring business (Admin, Tutor, Parent roles). Full spec lives in `docs/PRD.md`. Stack: Next.js + TypeScript + Prisma + MySQL + Tailwind/shadcn.

## Where things live
- `docs/PRD.md` — product requirements: business rules, session lifecycle, permissions, workflows. **Read the relevant section before implementing any feature.** Don't guess a business rule — it's already specified (e.g. reschedule cutoff, GPS radius, quota rules).
- `docs/design.md` — design tokens (colors, typography, spacing) and component specs (status badges, quota ledger, calendar, GPS check-in card). All UI must use these tokens, never ad-hoc hex/spacing values.
- `prisma/schema.prisma` — the single source of truth for the data model. Don't invent fields or relations that aren't here; propose a migration instead.
- `reference/*.html` — layout/structure reference only, one file per screen. **Never copy their inline styles or colors** — restructure using `docs/design.md` tokens and existing components.
- `.agents/rules/coding-standards.md` — always-on engineering rules (TypeScript strictness, validation, error handling, etc).

## How to work
1. Before starting a feature, identify which PRD section(s) govern it and read them.
2. Build one vertical slice at a time: service/business logic → API route → UI. Don't build all UI first and wire logic later.
3. Business rules (conflict detection, quota rules, session lifecycle transitions) belong in the service layer, not the UI or the route handler.
4. When building UI for a screen that has a `reference/*.html` file, open it for layout only, then re-style with `docs/design.md` tokens.
5. After building a UI-facing feature, verify it in the browser (open the page, check it renders, click through the flow) before marking the task done.
6. If a requirement is ambiguous or missing from the PRD, stop and ask rather than assuming.

## Out of scope for MVP
Do not build: payment gateway integration, AI tutor matching, WhatsApp/email automation, native mobile app, video conferencing, LMS features. See `docs/PRD.md` Section 4 for the full list.