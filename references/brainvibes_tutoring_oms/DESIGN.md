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

## Colors
The palette is anchored by **Deep Indigo** to establish trust and institutional stability. **Cool Slate** neutrals are used for the background and secondary text to maintain a modern, "SaaS-native" feel that reduces eye strain during long operational sessions.

**Accent colors** are used sparingly:
- **Warm Amber** is reserved for primary actions or highlights that require immediate attention.
- **Violet** is used for secondary interactive elements or to distinguish between different user roles (e.g., Tutors vs. Admins).
- **Status colors** follow a semantic logic to provide instant visual feedback on session states within data tables and schedules.

## Typography
The system uses a dual-font strategy. **Plus Jakarta Sans** is used for headings to provide a modern, approachable character with its slightly rounded geometric forms. **Inter** is used for all body text, labels, and data points due to its exceptional legibility in dense operational environments.

- **Weight usage:** Use Bold (700) or SemiBold (600) for all headers to create a clear visual hierarchy against body content. 
- **Data Tables:** Use `body-sm` for table rows to maximize information density without sacrificing readability.
- **KPIs:** Use `h2` for primary metric numbers to make them stand out in dashboard views.

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