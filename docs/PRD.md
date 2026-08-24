# Product Requirements Document — BrainVibes Tutoring Operations Management System

**Version:** 2.0
**Status:** Ready for MVP Development
**Product Type:** Web Application / Responsive PWA
**Target:** Private Tutoring Operations
**Primary User:** Admin
**Secondary Users:** Tutor, Parent/Student

---

## 1. Executive Summary

BrainVibes Tutoring Operations Management System is an operations management system for a private tutoring business that matches students with tutors at designated learning locations.

The system is designed to replace manual operational processes, specifically in:

- managing student and tutor data
- scheduling lessons
- detecting schedule conflicts
- handling reschedule requests
- handling tutor unavailability
- assigning substitute tutors
- validating attendance via GPS and photo
- recording learning progress
- managing packages and learning quotas
- and monitoring operational activity by the Admin

The MVP is not meant to build a full AI scheduling system. The system will use rule-based scheduling and conflict detection first, so the Admin retains full control over operational decisions.

---

## 2. Problem Statement

When the number of students and tutors is still small, scheduling can be done manually via spreadsheets, WhatsApp, or a calendar. However, as the number of tutors grows, this process introduces risks:

1. A tutor gets double-booked for the same time slot.
2. A student gets an overlapping schedule.
3. Schedule changes are hard to track.
4. When a tutor is unavailable, the Admin has to find a replacement manually.
5. Tutor attendance is hard to verify.
6. Student progress reports are scattered across WhatsApp or documents.
7. Remaining quota calculations are prone to error.
8. Cancellation and reschedule history is poorly documented.
9. The Admin struggles to get a real-time operational overview.

BrainVibes solves these problems through a single, centralized system.

---

## 3. Product Goals

### Primary Goals
1. Eliminate double-booking.
2. Reduce the Admin's manual scheduling workload.
3. Simplify handling of reschedules and tutor unavailability.
4. Ensure tutor attendance can be verified.
5. Provide a structured history of student learning.
6. Provide accurate, auditable quota calculations.

### Secondary Goals
1. Increase transparency for parents.
2. Simplify tutor performance monitoring.
3. Provide operational data that can be used for future feature development.
4. Lay the foundation for smart tutor matching in Phase 2.

---

## 4. Non-Goals / Out of Scope

To keep the MVP realistic:

- Automated payment gateway
- AI tutor matching
- Google Maps route optimization
- Automatic payroll
- Accounting system
- WhatsApp API automation
- Video conferencing
- Online learning / LMS
- Online examinations
- AI-generated learning reports
- Public tutor marketplace
- Native mobile application

All of these can be considered for Phase 2 or Phase 3.

---

## 5. User Roles

### 5.1 Admin
Admin is the primary operational user. Able to:

- manage tutors
- manage parents/students
- manage subjects
- manage packages
- create recurring schedules
- create and modify sessions
- view conflicts
- approve reschedules
- assign substitute tutors
- handle tutor unavailability
- verify payments
- view attendance
- view learning logs
- make quota corrections via adjustments
- view notifications and operational alerts

### 5.2 Tutor
Tutors can:

- view their schedule
- view student details
- view the learning location
- check in
- check out
- fill out a learning log
- request a reschedule
- report unavailability
- view session history
- view notifications

Tutors cannot change a schedule directly.

### 5.3 Parent / Student
The customer account can:

- view student profiles
- view the schedule
- view remaining quota
- view session history
- request a reschedule
- view attendance
- view learning logs
- view package status

The account structure allows one parent to have multiple students.

```
Parent
 ├── Student A
 ├── Student B
 └── Student C
```

---

## 6. Core Domain Model

The system's core concept:

```
User
 │
 ├── Admin
 ├── Tutor
 └── Parent
        │
        └── Student
               │
               ├── Package
               │
               ├── Recurring Schedule
               │       │
               │       └── Sessions
               │
               └── Learning Logs
```

### Core Entities
User · Tutor · Parent · Student · Subject · Location · Package · Payment · RecurringSchedule · Session · RescheduleRequest · SubstituteAssignment · Attendance · LearningLog · QuotaLedger · Notification

---

## 7. Scheduling Architecture

### 7.1 Recurring Schedule
A Recurring Schedule is a scheduling rule, not an actual session.

**Example:**
```
Student      : Budi
Subject      : Mathematics
Tutor        : Andi
Day          : Monday
Start Time   : 16:00
End Time     : 17:30
Period       : August – December
```

A Recurring Schedule then generates Sessions.

```
Recurring Schedule
        ↓
Generate Sessions
        ↓
Session, Session, Session, Session
```

A change to a single session must not change the recurring schedule.

---

## 8. Session Generation

The system creates sessions based on the recurring schedule. The MVP can use the approach of generating sessions for a given period, e.g. one month.

Each session has:

- `sessionId`
- `studentId`
- `tutorId`
- `subjectId`
- `locationId`
- `scheduledStart`
- `scheduledEnd`
- `status`
- `recurringScheduleId`

An individual session can undergo reschedule, cancellation, substitution, or completion — without changing the recurring schedule.

---

## 9. Scheduling Conflict Detection

Every session creation or change must run conflict detection.

### 9.1 Tutor Conflict
```
Tutor A
16:00–17:00 → Student A

Tutor A
16:30–17:30 → Student B
```
The system must reject this or issue a warning.

### 9.2 Student Conflict
```
Student A
16:00–17:00 → Mathematics

Student A
16:30–17:30 → Physics
```
The system must detect the overlapping session.

### 9.3 Conflict Rule
Two sessions are considered conflicting if:

```
newStart < existingEnd
AND
newEnd > existingStart
```

The conflict check applies to: creating a session, rescheduling, and assigning a substitute tutor.

---

## 10. Calendar

- **Admin:** Day View, Week View, Month View
- **Tutor:** Day View, Week View
- **Parent:** Schedule List / Calendar

The calendar can be filtered by: tutor, student, subject, status.

---

## 11. Reschedule Workflow

A reschedule must not directly change the session.

```
Student/Tutor
      ↓
Request Reschedule
      ↓
Input: new date, new time, reason
      ↓
System Conflict Check
      ↓
Pending Approval
      ↓
Admin Review
      ↓
Approve / Reject
```

If approved:
```
Original Session → Rescheduled → New Date & Time
```

The system stores the change history. A Reschedule Request stores: requester, original date/time, requested date/time, reason, status, reviewer, reviewedAt.

---

## 12. Reschedule Business Rules

MVP defaults:

- Requests require a minimum of H-1 (one day's notice).
- Requests made after the cutoff require special Admin approval.
- A Completed session cannot be rescheduled.
- A Cancelled session cannot be rescheduled.
- A reschedule does not deduct quota.
- A session that eventually becomes Completed deducts quota only once.

---

## 13. Tutor Unavailability

A tutor can report "I'm Unavailable".

```
Tutor → Report Unavailability → Admin Alert → Admin Decision
```

The Admin has two options:

**Option A — Substitute**
```
Original Tutor → Substitute Tutor → Session stays the same
```
Student quota does not change.

**Option B — Cancel**
```
Session: Scheduled → Cancelled
```
Quota is not deducted.

---

## 14. Substitute Tutor

The Admin can find a replacement tutor based on:

1. Subject compatibility
2. Availability
3. Conflicts
4. Active tutor status

The MVP does not use AI. The Admin still selects the tutor manually after the system presents the available candidates.

**Example:**
```
Available Tutors

✓ Andi   — Mathematics — Available 16:00–17:30
✓ Rina   — Mathematics — Available 16:00–17:30
✕ Budi   — Mathematics — Conflict
```

---

## 15. Session Lifecycle

```
SCHEDULED
     │
     ├── RESCHEDULE_REQUESTED → RESCHEDULED
     │
     ├── SUBSTITUTE_REQUESTED → SUBSTITUTE_ASSIGNED
     │
     ├── CANCELLED
     │
     ↓
IN_PROGRESS
     ↓
COMPLETED
```

| Status | Description | Quota |
|---|---|---|
| SCHEDULED | Active schedule | 0 |
| RESCHEDULE_REQUESTED | Awaiting reschedule approval | 0 |
| RESCHEDULED | Schedule successfully moved | 0 |
| SUBSTITUTE_REQUESTED | Awaiting a substitute tutor | 0 |
| SUBSTITUTE_ASSIGNED | Substitute tutor has been assigned | 0 |
| IN_PROGRESS | Tutor has checked in | 0 |
| COMPLETED | Lesson finished and log submitted | -1 |
| CANCELLED | Session cancelled | 0 |

---

## 16. Attendance System

**Check-In** — The tutor taps "Start Lesson". The system stores: timestamp, latitude, longitude, GPS accuracy, photo, device information. The system then calculates the tutor's distance from the student's location.

**Example Location Radius:**
```
≤ 100 meters → Valid
> 100 meters → Warning / Reject
```
The radius value can be made configurable by the Admin.

---

## 17. Attendance Time Window

Tutors can only check in within a specific window.

**Default:** 30 minutes before the scheduled time until the session's end time.

**Example:**
```
Session: 16:00–17:30
Check-in: 15:30–17:30
```

The Admin can override this if needed.

---

## 18. Check-Out

The tutor taps "End Lesson". The system then requests a Learning Log. A session cannot become COMPLETED until the Learning Log has been successfully submitted.

```
Check-In → IN_PROGRESS → Learning Log → Check-Out → COMPLETED → Quota -1
```

---

## 19. Learning Log

The Learning Log must include:

**Material**
- subject
- chapter/topic
- material covered

**Progress**
- student progress
- strengths
- difficulties
- tutor notes

**Understanding** (scale)
1. Very poor
2. Poor
3. Fair
4. Good
5. Excellent

**Optional**
- homework
- recommendation
- next topic

---

## 20. Quota Management

Quota is not simply stored as a number. The system uses a Quota Ledger.

**Example:**
```
Package: 8 Sessions

+8  Package Activation
-1  Session #001 Completed
-1  Session #002 Completed
-1  Session #003 Completed

Summary:
Purchased : 8
Used      : 3
Remaining : 5
```

---

## 21. Quota Business Rules

Quota is only deducted when `Session.status = COMPLETED`, and only once.

- Cancellation: Quota = unchanged
- Reschedule: Quota = unchanged
- Substitute: Quota = unchanged

Admin corrections use a **Quota Adjustment**, rather than directly editing the quota number.

---

## 22. Package Management

A Package has: Package Name, Session Quota, Price, Start Date, Expiry Date, Status.

**Example:**
```
BrainVibes 8x
Quota  : 8
Price  : Rp800,000
Start  : 01/08/2026
Expiry : 31/08/2026
```

The business rule on whether unused quota can carry over must be determined by BrainVibes.

The MVP must support the statuses: active, expired, exhausted.

---

## 23. Payment Verification

The MVP uses manual payment.

```
Admin Creates Package
        ↓
Payment Pending
        ↓
Parent Transfers Funds
        ↓
Parent Uploads Proof
        ↓
Admin Reviews
        ↓
Approve
        ↓
Package Active
        ↓
Quota Available
```

Payment status: PENDING, VERIFIED, REJECTED.

Payment verification does not automatically deduct or add quota directly. Quota is created via Package Activation / the Quota Ledger.

---

## 24. Notification System

The system has a notification center.

**Admin Notifications:** tutor unavailable, reschedule request, payment pending, failed attendance, session conflict, session requires attention.

**Tutor Notifications:** upcoming session, reschedule approved, reschedule rejected, substitute assignment, session cancelled.

**Parent Notifications:** upcoming session, reschedule status, session completed, learning log available, package quota low.

The MVP only needs in-app notifications. Email/WhatsApp can be added in Phase 2.

---

## 25. Dashboard — Admin

The dashboard must be oriented toward operational overview, not just statistics.

**Example KPIs:** Today's Sessions, Active Students, Active Tutors, Pending Reschedules, Tutor Alerts, Pending Payments.

**Section — Today's Sessions:** Time, Student, Tutor, Subject, Status.

**Attention Required:**
- ⚠ Tutor unavailable
- ⚠ Reschedule request
- ⚠ Payment pending
- ⚠ Attendance issue

**Operational Summary:** Today's sessions — Completed, In Progress, Cancelled, Upcoming.

---

## 26. Tutor Dashboard

Displays: Today's Schedule, Upcoming Sessions, Attendance History, Learning Log History, Notifications.

Each session has a CTA: View Details, Start Lesson, Report Unavailable.

---

## 27. Parent Dashboard

Displays: My Students, Upcoming Lessons, Package Status, Remaining Quota, Learning Progress, Attendance History, Notifications.

---

## 28. Permissions Matrix

| Feature | Admin | Tutor | Parent |
|---|---|---|---|
| Manage Tutor | ✓ | – | – |
| Manage Student | ✓ | View | View |
| Manage Package | ✓ | – | View |
| Verify Payment | ✓ | – | – |
| Create Schedule | ✓ | – | – |
| View Schedule | ✓ | ✓ | ✓ |
| Request Reschedule | ✓ | ✓ | ✓ |
| Approve Reschedule | ✓ | – | – |
| Assign Substitute | ✓ | – | – |
| Report Unavailable | – | ✓ | – |
| Check-In | – | ✓ | – |
| Check-Out | – | ✓ | – |
| Learning Log | View | Create | View |
| Quota Adjustment | ✓ | – | – |
| View Notifications | ✓ | ✓ | ✓ |

---

## 29. Audit Trail

For important operations, the system stores a history.

**Example:**
```
Admin Andi changed Session #102

Old: 16:00 Monday
New: 17:00 Tuesday
Reason: Parent request
```

The audit trail must at minimum record: actor, action, entity, old value, new value, timestamp.

Auditing is especially required for: schedule changes, quota adjustments, payment verification, cancellation, substitute assignment.

---

## 30. Business Rules

**Scheduling**
- A tutor must not have overlapping sessions.
- A student must not have overlapping sessions.
- A session must have a tutor, student, subject, and time.
- A reschedule must not change the recurring schedule.

**Attendance**
- Check-in requires GPS.
- Check-in requires a photo.
- Check-in has a time window.
- Check-out requires a Learning Log.

**Quota**
- Completed = quota -1.
- Cancelled = quota unchanged.
- Rescheduled = quota unchanged.
- Substitute = quota unchanged.
- Quota must never go negative.
- Adjustments must be recorded in the ledger.

**Package**
- A package has an expiry date.
- An expired package cannot be used for a new session.
- An active package must have available quota.

---

## 31. Data Model — MVP

```
User
 ├── Admin
 ├── Tutor
 └── Parent

Parent
 └── Student

Student
 ├── Package
 ├── RecurringSchedule
 └── Session

Tutor
 ├── RecurringSchedule
 └── Session

RecurringSchedule
 └── Session

Session
 ├── Attendance
 ├── LearningLog
 ├── RescheduleRequest
 ├── SubstituteAssignment
 └── QuotaLedger

Package
 ├── Payment
 └── QuotaLedger

User
 └── Notification
```

---

## 32. MVP Feature Priority

**P0 — Absolutely Required**
Authentication · Role & authorization · Student management · Tutor management · Subject management · Location management · Package management · Recurring schedule · Session generation · Calendar · Conflict detection · Reschedule · Substitute tutor · Check-in · Check-out · Learning Log · Quota Ledger · Payment verification · Admin dashboard

**P1 — Important**
Notification center · Audit trail · Advanced filtering · Attendance history · Learning progress history · Export report · Dashboard analytics

**P2 — Future**
WhatsApp integration · Email automation · Automatic payroll · Google Maps integration · Travel time calculation · Smart tutor matching · AI scheduling · Parent mobile app · Online payment · AI learning report

---

## 33. Success Metrics

| Area | Target |
|---|---|
| Scheduling | 0 confirmed double-bookings |
| Operational Efficiency | Admin can create a recurring schedule without creating sessions one by one |
| Exception Handling | Tutor unavailability can be handled by Admin in <15 minutes |
| Attendance | 95% of completed sessions have a valid attendance record |
| Learning Report | 100% of completed sessions have a Learning Log |
| Quota Accuracy | 0 discrepancy between completed sessions and the quota ledger |

---

## 34. MVP Success Scenario

BrainVibes is considered successful if the Admin can carry out the following complete workflow:

```
1. Register Student
2. Register Parent
3. Create Package
4. Verify Payment
5. Package Activated
6. Create Recurring Schedule
7. System Generates Sessions
8. System Checks Conflict
9. Tutor Sees Schedule
10. Tutor Arrives
11. GPS + Photo Check-In
12. Teaching Session
13. Learning Log
14. Check-Out
15. Session = COMPLETED
16. Quota Ledger -1
17. Parent Sees Learning Report
```

**Exception scenario:**
```
Tutor Unavailable → Admin Alert → Find Available Tutor
→ Assign Substitute → Student Notified → Session Continues Normally
```

---

## 35. Future Vision — Phase 2

Once BrainVibes has accumulated enough operational data, the system can evolve into a **Smart Tutor Scheduling System**.

**Data that can be used:**
```
Tutor
 ├── Subjects
 ├── Availability
 ├── Location
 ├── Teaching History
 ├── Student Preferences
 ├── Workload
 └── Performance

Student
 ├── Location
 ├── Subject
 ├── Preferred Time
 ├── Learning History
 └── Tutor Preference
```

The system can then provide a **Recommended Tutor** based on: Subject compatibility + Schedule availability + Distance + Tutor workload + Student preference + Historical compatibility.

So AI would not replace the Admin in the future, but become a decision-support system instead.

---

## Conclusion

With this version, BrainVibes has evolved from *"an app to manage tutoring schedules"* into *"an operations management system for a private tutoring business."* This is a much stronger project for a portfolio.

The most important thing before starting to code is **not to jump straight into building UI pages**. The recommended implementation order is:

```
PRD
 ↓
Business Rules
 ↓
ERD / Database Schema
 ↓
Session State Machine
 ↓
Permission Matrix
 ↓
Server Actions / API
 ↓
Admin Dashboard
 ↓
Tutor Dashboard
 ↓
Parent Dashboard
 ↓
Notification
```

Given the stack already mastered — **Next.js + TypeScript + Prisma + MySQL + Tailwind/shadcn** — it's a great fit for this MVP. For GPS, the browser's Geolocation API is sufficient; a native app isn't needed yet.

**An architectural decision that must be preserved:** keep `RecurringSchedule`, `Session`, and `QuotaLedger` separate. These three entities will be the foundation that keeps the system from becoming a mess as BrainVibes grows from a handful of tutors to dozens.