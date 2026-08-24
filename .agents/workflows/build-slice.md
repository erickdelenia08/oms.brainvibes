---
description: Use this workflow when implementing one feature slice end-to-end. Invoke with `/build-slice` and tell me which feature/PRD section to build.
---

# Build Slice

Use this workflow when implementing one feature slice end-to-end. Invoke with `/build-slice` and tell me which feature/PRD section to build.

## Steps

1. **Read context**
   - Open the relevant section(s) in `docs/PRD.md` and restate the business rules in your plan before writing any code.
   - Open `prisma/schema.prisma` and confirm which models/enums this feature touches. Do not modify the schema without flagging it first.

2. **Service layer**
   - Write the service function(s) with Zod validation for all inputs.
   - Enforce every business rule from step 1 here (not just in the UI later).
   - Use `prisma.$transaction` if the operation touches more than one table.
   - Write an `AuditLog` entry if this action is one of: schedule change, quota adjustment, payment verification, cancellation, substitute assignment.

3. **API route**
   - Route handler calls the service only — no direct Prisma queries here.
   - Map thrown errors to appropriate HTTP status codes with actionable messages.

4. **UI**
   - If a matching file exists in `reference/`, open it for layout structure only.
   - Re-style using tokens and components from `docs/design.md` — no hardcoded colors/spacing.
   - Wire the UI to the real API route from step 3 (no mock data).

5. **Verify**
   - Open the page in the browser subagent, click through the happy path, and check at least one business-rule edge case (e.g. a conflict, a rejected reschedule) actually behaves as specified in the PRD.
   - Report back a short checklist of what was built and what was verified.

6. **Stop scope**
   - Do not start the next slice in the same run unless explicitly asked.