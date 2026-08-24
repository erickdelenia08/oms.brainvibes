---
name: BrainVibes Tutoring OMS
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf2'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fb'
  on-surface: '#111c2d'
  on-surface-variant: '#47464f'
  inverse-surface: '#263143'
  inverse-on-surface: '#ecf1ff'
  outline: '#787680'
  outline-variant: '#c8c5d0'
  surface-tint: '#5b598c'
  primary: '#070235'
  on-primary: '#ffffff'
  primary-container: '#1e1b4b'
  on-primary-container: '#8683ba'
  inverse-primary: '#c4c1fb'
  secondary: '#855300'
  on-secondary: '#ffffff'
  secondary-container: '#fea619'
  on-secondary-container: '#684000'
  tertiary: '#110031'
  on-tertiary: '#ffffff'
  tertiary-container: '#2d0069'
  on-tertiary-container: '#9e6bff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  warning: '#a15c00'
  on-warning: '#ffffff'
  warning-container: '#ffddb0'
  on-warning-container: '#3d2400'
  success: '#146c2e'
  on-success: '#ffffff'
  success-container: '#c8f5cf'
  on-success-container: '#032e0e'
  info: '#00639b'
  on-info: '#ffffff'
  info-container: '#cee5ff'
  on-info-container: '#001d33'
  primary-fixed: '#e3dfff'
  primary-fixed-dim: '#c4c1fb'
  on-primary-fixed: '#181445'
  on-primary-fixed-variant: '#444173'
  secondary-fixed: '#ffddb8'
  secondary-fixed-dim: '#ffb95f'
  on-secondary-fixed: '#2a1700'
  on-secondary-fixed-variant: '#653e00'
  tertiary-fixed: '#ebddff'
  tertiary-fixed-dim: '#d3bbff'
  on-tertiary-fixed: '#250059'
  on-tertiary-fixed-variant: '#5b00c5'
  background: '#f9f9ff'
  on-background: '#111c2d'
  surface-variant: '#d8e3fb'
typography:
  h1:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  h2:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.01em
  h3:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  h1-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  mono-sm:
    fontFamily: 'IBM Plex Mono, monospace'
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-margin: 24px
  gutter: 16px
  card-padding: 20px
  section-gap: 32px
  base-unit: 4px
---

## Brand & Style
This design system is built for high-performance operational management. The brand personality is professional, authoritative, and structured, reflecting the reliability required for educational logistics.

The aesthetic follows a **Corporate Modern** style with a focus on data density and clarity. It utilizes a card-based architecture to organize complex information into digestible modules. The interface relies on generous whitespace within containers while maintaining a compact overall layout to minimize scrolling for power users. Visual interest is introduced through a sophisticated play of deep indigo backgrounds for navigation and high-contrast status accents.

> **Scope note:** This design system governs the internal Operations Management System (Admin, Tutor, and Parent dashboards) as defined in the BrainVibes PRD v2.0. It is intentionally distinct from any public-facing marketing materials (flyers, social posts, landing pages), which follow a separate, more playful consumer brand treatment.

## Colors
The palette is anchored by **Deep Indigo** to establish trust and institutional stability. **Cool Slate** neutrals are used for the background and secondary text to maintain a modern, "SaaS-native" feel that reduces eye strain during long operational sessions.

**Accent colors** are used sparingly:
- **Warm Amber** is reserved for primary actions or highlights that require immediate attention.
- **Violet** is used for secondary interactive elements or to distinguish between different user roles (e.g., Tutors vs. Admins).
- **Status colors** follow a semantic logic to provide instant visual feedback on session states within data tables and schedules.

### Semantic Status Colors
Four semantic tones cover every state in the system. Do not reuse `primary`/`secondary` for status — always use the dedicated semantic tokens so meaning stays consistent across Admin, Tutor, and Parent views.

| Token | Hex | Meaning | Example use |
|---|---|---|---|
| `success` | `#146c2e` on `success-container` `#c8f5cf` | Completed, verified, on track | COMPLETED session, VERIFIED payment, valid attendance |
| `info` | `#00639b` on `info-container` `#cee5ff` | Neutral/active, in progress, informational | SCHEDULED, IN_PROGRESS, active package |
| `warning` | `#a15c00` on `warning-container` `#ffddb0` | Needs attention but not broken | RESCHEDULE_REQUESTED, PENDING payment, GPS >100m, quota low |
| `error` | `#ba1a1a` on `error-container` `#ffdad6` | Failed, rejected, blocked | CANCELLED, REJECTED payment, conflict detected, expired package |

`warning` and `error` are deliberately distinct (amber vs. red) — a warning is something an Admin should review soon; an error is something that already failed or was blocked outright. Never substitute one for the other.

## Typography
The system uses a dual-font strategy. **Plus Jakarta Sans** is used for headings to provide a modern, approachable character with its slightly rounded geometric forms. **Inter** is used for all body text, labels, and data points due to its exceptional legibility in dense operational environments. **IBM Plex Mono** (`mono-sm`) is used sparingly for machine-readable values — GPS coordinates, timestamps, ledger entries — where fixed-width alignment aids scanning.

- **Weight usage:** Use Bold (700) or SemiBold (600) for all headers to create a clear visual hierarchy against body content.
- **Data Tables:** Use `body-sm` for table rows to maximize information density without sacrificing readability.
- **KPIs:** Use `h2` for primary metric numbers to make them stand out in dashboard views.
- **Ledger/log entries:** Use `mono-sm` for quota deltas and timestamps, `body-sm` for descriptions.

## Layout & Spacing
The layout follows a **fluid grid** model optimized for wide-screen operational dashboards.

- **Desktop:** 12-column grid with 24px side margins. Sidebars are fixed at 280px to ensure consistent navigation access.
- **Mobile:** 4-column grid with 16px margins. Primary actions and navigation should move to a bottom-tab bar or a collapsible drawer to maximize vertical workspace.
- **Spacing Rhythm:** All spacing must be multiples of 4px. Use 20px (`card-padding`) for internal content within cards to balance density and elegance.

## Elevation & Depth
This design system utilizes **Tonal Layers** combined with **Ambient Shadows** to create a structured sense of depth.

- **Surface:** The main background is `#F8FAFC`.
- **Cards:** White (`#FFFFFF`) surfaces with a `1px` border in `#E2E8F0` (Slate-200) and a subtle `shadow-sm` (4px blur, 2% opacity) to lift them slightly from the background.
- **Interactive:** Hover states on cards should transition to a slightly deeper shadow and a subtle border color shift to Deep Indigo.
- **Modals:** Use a heavy backdrop blur (8px) and a centralized elevation to focus the user's attention on critical tasks like "Schedule New Session."

## Shapes
The shape language is defined by **Rounded-2XL** corners for major containers, creating a sophisticated and modern "app-like" feel.

- **Cards & Modals:** Use `1rem` (16px / rounded-2xl) corner radius.
- **Buttons & Inputs:** Use `0.5rem` (8px / rounded-lg) to maintain a professional look that isn't overly soft.
- **Status Badges:** Use full pill-shaped rounding for immediate recognition of categorical metadata.

## Components
Consistent component styling ensures the OMS feels like a unified tool.

- **Data Tables:** Use thin borders between rows (`border-slate-100`). Header rows should have a subtle slate background (`#F1F5F9`) with `label-md` typography.
- **KPI Metrics:** Large numerical values in `h2` weight, paired with a small trend indicator icon and a descriptive `label-sm` text.
- **Buttons:**
  - **Primary:** Deep Indigo background with white text.
  - **Secondary:** White background with Indigo border and text.
  - **Accent:** Warm Amber for "Add" or "Create" actions.
- **Input Fields:** 1px Slate-200 borders, turning Deep Indigo on focus with a 2px outer glow. Labels always sit above the input.
- **Status Badges:** Use a subtle background tint and high-contrast text as defined in the Color section. Text should be `label-sm` and uppercase.
- **Touch-Optimized Elements:** For mobile, increase the height of list items and buttons to a minimum of 44px to accommodate touch interactions for tutors in the field.

### Session Lifecycle Status Badges
Maps directly to the Session status field in the PRD (Section 15). Every badge is pill-shaped, uppercase `label-sm`, using the semantic tokens above.

| Status | Badge tone | Notes |
|---|---|---|
| `SCHEDULED` | info | Default active state |
| `RESCHEDULE_REQUESTED` | warning | Awaiting Admin decision |
| `RESCHEDULED` | info | Treated as a fresh scheduled state once approved |
| `SUBSTITUTE_REQUESTED` | warning | Needs Admin action |
| `SUBSTITUTE_ASSIGNED` | info | Resolved, session proceeds |
| `IN_PROGRESS` | info (with a subtle pulsing dot) | Tutor has checked in |
| `COMPLETED` | success | Terminal, positive |
| `CANCELLED` | error | Terminal, negative |

Payment statuses reuse the same tones: `PENDING` → warning, `VERIFIED` → success, `REJECTED` → error.

### Quota Ledger Component
Renders the append-only ledger described in PRD Section 20, not a bare number. Structure:

- **Header row:** Package name (`label-md`) + summary chips — `Purchased`, `Used`, `Remaining` (each a small stat in `body-sm` label + `h3`-weight number).
- **Entry list:** Each row is a compact table line: signed delta in `mono-sm` (`+8` in success color, `-1` in `on-surface-variant`), a short description (`body-sm`, e.g. "Session #001 Completed"), and a right-aligned timestamp (`label-sm`, muted).
- **Low-quota state:** When `Remaining` drops at or below a configurable threshold (e.g. 2 sessions), the summary chip switches to the `warning` tone to flag renewal.
- **Adjustment entries:** Manual `Quota Adjustment` rows are visually distinguished with a small "Admin" tag (violet, `label-sm`) next to the description, since these bypass normal session completion.

### Calendar / Schedule Grid
Used across Admin (Day/Week/Month), Tutor (Day/Week), and Parent (List/Calendar) views (PRD Section 10).

- **Grid lines:** Hairline `outline-variant` dividers between time slots; current-time indicator is a 2px Deep Indigo line with a small dot.
- **Event blocks:** Rounded-`md` (8px) blocks filled with the session's status tone at low opacity (10–15%) with a solid 3px left border in the full status color — keeps dense weekly grids readable without turning into a wall of solid color.
- **Event block content:** Time range (`label-sm`), student or tutor name (`body-sm` semibold), subject (`label-sm`, muted).
- **Conflict indicator:** Overlapping events get a diagonal-stripe pattern in `error-container` behind them plus a small warning-triangle icon, per the conflict rule in PRD Section 9.
- **Filters:** Rendered as a horizontal chip row above the grid (tutor / student / subject / status), using the pill shape from Status Badges but in a neutral `surface-container-high` tone when inactive, `primary` when selected.

### GPS + Photo Check-In Component
Supports the attendance flow in PRD Sections 16–17.

- **Layout:** A compact card triggered from "Mulai Les" — small static map preview (rounded-`md`, 4:3) with a pin for the tutor's captured location, alongside the captured photo thumbnail (rounded-`md`, square).
- **Distance indicator:** A `label-md` line beneath the map — e.g. "42m from location" in `success` color if within radius, `warning` color with the exact distance if outside the configured radius (PRD default: 100m), never silently rejected.
- **Timestamp & device info:** `label-sm`, muted, shown below the distance line — supports the audit trail requirement (PRD Section 29).
- **Time-window state:** If check-in is attempted outside the allowed window (PRD Section 17), the CTA button disables and shows an inline `warning`-toned message rather than a blocking modal, so the tutor immediately understands why and can contact Admin for an override.

## Accessibility & Density Notes
- All semantic color pairs (`token` / `on-token`) meet at least WCAG AA contrast for `body-sm` text and larger.
- Because this is a data-dense operational tool, never rely on color alone for status — every badge and event block also carries a text label (status name) so the system remains usable for color-blind Admins and Tutors.
- Minimum interactive target size is 44×44px on mobile per the Touch-Optimized Elements rule above; this applies to calendar event blocks and ledger row actions as well, not just primary buttons.
