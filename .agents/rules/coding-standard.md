---
trigger: always_on
---

BrainVibes OMS — Engineering Rules

These rules apply to the entire codebase (Next.js + TypeScript + Prisma + MySQL + Tailwind/shadcn). The goal is to keep code quality consistent while the project is built incrementally per-slice, including when parts of the code are generated with an AI assistant.

1. TypeScript
Never use any. If a type isn't known yet, use unknown and narrow it with a type guard — don't reach for any just to "get it working for now".
Don't use as to force a type unless there's truly no other way (e.g. the result of JSON.parse that has already been validated at runtime with Zod). A type assertion without runtime validation is a bug waiting to happen.
Don't use ! (non-null assertion) to bypass a null check. Handle null/undefined explicitly.
strict: true must be enabled in tsconfig.json (strictNullChecks, noImplicitAny, and everything that comes with it). Never disable strict flags to "make errors go away temporarily".
Every exported function must have an explicit return type — don't rely on inference for public API/service functions.
Prisma-generated enums (SessionStatus, PaymentStatus, etc.) are the single source of truth for status strings. Don't create a separate string union type that duplicates those enum values.
No // @ts-ignore or // @ts-expect-error without a comment explaining why, and without a ticket/TODO to fix it properly.
2. Data Validation
Every input coming from outside the system (form, API request body, query param) must be validated with Zod before it reaches the service layer. Don't trust TypeScript types alone at this boundary — TypeScript disappears at runtime.
Zod schemas live next to the service they validate, not lumped into one giant global validation file.
API responses should also be validated/typed through the same schema (infer the type from the Zod schema) so the frontend and backend never drift apart.
3. Prisma & Database
Never query Prisma directly from a UI component or route handler. All database access goes through the service layer (/services or /lib/services) — route handlers only call services, they never build queries themselves.
Business rules from the PRD must be enforced in the service layer, not only in the UI. Examples: conflict detection (PRD Section 9), quota can never go negative (Section 21), a COMPLETED/CANCELLED session can't be rescheduled (Section 12) — all of these must be re-checked on the server even if the UI already disables the button.
QuotaLedger is append-only. Never UPDATE or DELETE an existing ledger row — corrections are always a new entry with type ADJUSTMENT.
Schema changes (schema.prisma) always go through prisma migrate dev with a descriptive migration name — never edit the database directly or use db push outside of local experimentation.
Use prisma.$transaction for any operation that touches more than one table that must stay consistent together — for example, Check-Out, which moves Session.status to COMPLETED and writes a QuotaLedger entry at the same time.
4. Code Structure & Naming
One file, one concern. Don't merge a service, its Zod validation, and its types into a single large file.
Naming stays consistent with the terms used in the PRD/domain — don't invent new names for concepts that already have a name in the PRD (e.g. keep RecurringSchedule, not ScheduleTemplate).
UI components follow the tokens and structure in design.md — don't hardcode hex colors or custom spacing outside the defined tokens (primary, success, warning, etc.).
HTML files in the reference/ folder are only used for layout structure, never for final styling — all colors/typography/spacing must be pulled from design.md.
5. Error Handling
Never leave an empty catch (e) {} or one that just does console.log(e) and moves on as if nothing happened. Errors from the service layer must be thrown as a clearly typed error (a custom error class) so the route handler can map it to the right HTTP response.
Every error shown to the user must have an actionable message, not a raw technical one (Error: undefined is not a function).
6. Audit & Data Consistency
Every change to an entity explicitly called out in PRD Section 29 (schedule changes, quota adjustment, payment verification, cancellation, substitute assignment) must write an AuditLog in the same service call, not bolted on later as a separate feature.
Never overwrite old data without recording the previous value in the audit trail, for any field in the categories above.
7. Testing
Business rules with a fixed number in the PRD (100m GPS radius, 30-minute-before check-in window, minimum H-1 for reschedule) must have a unit test, since these are easy to get wrong if re-hardcoded somewhere else.
Conflict detection (newStart < existingEnd AND newEnd > existingStart) must have tests covering overlap, adjacent (non-overlapping), and the exact-same-time edge case.
8. Git & Commits
Commit messages are short, in English, formatted as type: description (feat: add reschedule conflict check, fix: quota ledger not writing on completion).
One commit = one logical change. Don't mix a schema change with an unrelated UI change in the same commit.
Note for AI-assisted coding

When prompting an AI assistant to generate code for this project, always reference this file (rules.md) alongside design.md, PRD.md, and schema.prisma, so the generated code automatically follows the rules above — instead of the AI's usual, looser default around any and validation.