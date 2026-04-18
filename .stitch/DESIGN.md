# Design System: Sanctuary — iMind Psychological Services

**Project ID:** sanctuary-imind
**Framework:** Next.js 16 (App Router) + Tailwind CSS v4
**Local Path:** `sanctuary-imind/`

---

## 1. Visual Theme & Atmosphere

Sanctuary embodies a **"Therapeutic Serenity"** aesthetic — an airy, calm, and deeply trustworthy environment that feels like a breath of fresh air. The design is deliberately unhurried, with generous whitespace that communicates safety and thoughtfulness.

The palette draws from **cerulean sea and calm sky blues**, avoiding the clinical coldness typically associated with healthcare. Soft ambient gradients and floating glassmorphism elements give the UI a sense of gentle movement — like light filtering through water.

**Mood keywords:** Healing · Trustworthy · Professional-yet-warm · Airy · Luminous

---

## 2. Color Palette & Roles

### Primary Family — Cerulean Teal
- **Deep Teal Sanctuary** (`#07677f`) — Primary actions, active states, CTAs, brand identity
- **Sky Mist Teal** (`#66afca`) — Primary container backgrounds, hover overlays, gradient endpoints
- **Icy Frost Blue** (`#b8eaff`) — Primary fixed, very light tinted surfaces
- **Glacial Blue** (`#88d1ec`) — Primary fixed dimmed, secondary highlights
- **Pure White on Teal** (`#ffffff`) — Text on all primary-colored surfaces

### Secondary Family — Terracotta Warmth
- **Sunset Terracotta** (`#894f3e`) — Secondary accents, warm emotional counterpoint to the cool primary
- **Peach Blossom** (`#fdb19d`) — Secondary container, soft warm fills
- **Pale Apricot** (`#ffdbd1`) — Secondary fixed, barely-there warm tint
- **Coral Blush** (`#ffb5a0`) — Secondary fixed dimmed

### Tertiary Family — Healing Green
- **Forest Sage** (`#2b6a43`) — Tertiary actions, success states, \"go\" signals
- **Meadow Green** (`#73b385`) — Tertiary container backgrounds
- **Mint Whisper** (`#aff2c0`) — Tertiary fixed, soft success fill
- **Sage Mist** (`#93d5a5`) — Tertiary fixed dimmed

### Surfaces & Backgrounds
- **Fog White** (`#f4faff`) — Global page background; slightly tinted blue-white
- **Morning Mist** (`#e6f6ff`) — Low container; section alternating backgrounds
- **Cloud Surface** (`#d9f2ff`) — Standard card container
- **Vapor Blue** (`#ceedfd`) — High container; elevated card backgrounds
- **Pure Surface** (`#ffffff`) — Lowest container; highest elevation white cards
- **Deep Ink Navy** (`#001f2a`) — Primary text; near-black for maximum legibility
- **Slate Gray** (`#3f484c`) — Secondary text, captions, meta information

### Error & Destructive
- **Alert Crimson** (`#ba1a1a`) — Errors, destructive actions, critical notices

### Utility
- **Storm Gray** (`#6f787d`) — Border outlines, dividers
- **Mist Gray** (`#bfc8cd`) — Subtle variant borders, disabled states

---

## 3. Typography Rules

### Font Stack
- **Headline Font:** Manrope (Google Fonts) — Used for all `h1`–`h4` headings
- **Body Font:** Inter (Google Fonts) — Used for all body copy, labels, buttons

### Usage Patterns
- **Display / Hero H1:** Manrope, 60–80px, weight 800 (ExtraBold), tight leading (1.1)
- **Section Headings H2:** Manrope, 40–56px, weight 700 (Bold), leading 1.15
- **Card Titles H3:** Manrope, 20–24px, weight 700 (Bold)
- **Body Text:** Inter, 16–18px, weight 400 (Regular), leading 1.6
- **Labels / Captions:** Inter, 12–14px, weight 500 (Medium), slight letter-spacing (+0.02em)
- **Buttons / CTAs:** Inter, 14–15px, weight 600 (SemiBold), letter-spacing +0.01em

### Character
Clean, humanist, and highly legible. Headlines feel authoritative but approachable — not cold or corporate.

---

## 4. Component Stylings

### Buttons
- **Primary CTA:** Pill to rounded-xl shape (24px radius), Deep Teal Sanctuary fill (`#07677f`), white text, subtle glow shadow on hover (`0 16px 40px rgba(7,103,127,0.3)`), scale-up 1.02 on hover
- **Secondary / Outline:** Transparent fill, Deep Teal Sanctuary border, teal text — transitions to filled on hover
- **Ghost Links:** Inline text links with arrow icon, color transition on hover

### Cards / Containers
- **Service Cards:** Generously rounded corners (24px / `rounded-3xl`), pure white background (`#ffffff`), ultra-soft ambient shadow (`0 8px 32px rgba(0,31,42,0.06)`), 8px upward translateY on hover with shadow deepening
- **Testimonial Cards:** Same as service cards but with top-left quote decoration element
- **Glassmorphism Panels:** Semi-transparent white (`rgba(255,255,255,0.72)`), 24px backdrop blur, light border (`rgba(255,255,255,0.4)`)

### Inputs / Forms
- **Field Containers:** White background, 1px solid Mist Gray (`#bfc8cd`) border, 16px radius (`rounded-2xl`), transitions to Deep Teal border on focus with a soft teal glow ring
- **Error States:** Alert Crimson border and text, `aria-invalid` attribute for accessibility
- **Select/Radio Groups:** Card-style with active state showing teal border and soft primary-container background

### Navigation
- **Sticky Navbar:** Glassmorphism treatment — `rgba(255,255,255,0.72)` bg, 24px backdrop-filter blur, subtle bottom border that appears on scroll
- **Nav Links:** Inter SemiBold, slate text, teal color on hover, underline animation from left

---

## 5. Layout Principles

### Spacing System
- **Section vertical padding:** `py-24` (6rem top + bottom) — generous breathing room between all major sections
- **Container max-width:** `max-w-7xl` (80rem), centered with `mx-auto`, `px-6` horizontal gutters
- **Card internal padding:** `p-8` to `p-10` (2rem–2.5rem)
- **Grid gaps:** `gap-6` (1.5rem) standard, `gap-8` (2rem) for hero-level grids

### Grid Strategy
- **Hero:** 2-column asymmetric (60/40), copy left + image right
- **Services Bento:** 12-column grid — Row 1: 8+4 split, Row 2: 5+7 split
- **About:** 2-column equal (image collage left, text right)
- **Testimonials:** 3-column equal grid
- **FAQ:** 2-column (questions left, map/contact right)

### Animation & Motion
- **Scroll reveals:** `opacity: 0 → 1`, `translateY: 24px → 0`, 600ms ease-out, triggered by IntersectionObserver
- **Stagger delays:** 80–120ms between sequential items
- **Hover states:** 400ms cubic-bezier(0.34, 1.56, 0.64, 1) for spring-like lifts
- **Page transitions (form steps):** 300ms Framer Motion slide left/right
- **Floating shapes:** 20s ease-in-out infinite keyframe float animation at 15% opacity

### Elevation Model
1. **Background layer:** Fog White (`#f4faff`) page background + floating color blobs
2. **Section layer:** Morning Mist (`#e6f6ff`) for alternating section backgrounds
3. **Card layer:** Pure white with ambient shadows
4. **Navigation layer:** Glassmorphism floating above content
5. **Modal/Overlay layer:** Full-screen backdrop with centered panels

---

## 6. Design System Notes for Stitch Generation

When generating new screens for this project, use this block verbatim:

```
Sanctuary iMind Psychological Services — calm, airy, therapeutic web design.

**DESIGN SYSTEM (REQUIRED):**
- Platform: Web, Desktop-first (responsive to mobile)
- Theme: Light, airy, trustworthy — "Therapeutic Serenity"
- Background: Fog White (#f4faff) — slightly tinted blue-white
- Primary Action: Deep Teal Sanctuary (#07677f) for CTAs, links, active states
- Primary Gradient: Linear from #07677f to #66afca (135°)
- Secondary Warmth: Sunset Terracotta (#894f3e) for emotional accents
- Text Primary: Deep Ink Navy (#001f2a) — near-black
- Text Secondary: Slate Gray (#3f484c)
- Surface Cards: Pure White (#ffffff) with ambient shadow (0 8px 32px rgba(0,31,42,0.06))
- Nav Style: Glassmorphism — rgba(255,255,255,0.72) + 24px backdrop blur
- Buttons: Pill/rounded-24px, teal fill, white text, glow hover shadow
- Cards: rounded-24px corners, white bg, soft shadow, 8px lift on hover
- Typography: Manrope (headlines) + Inter (body), generous line-height
- Animations: Scroll-triggered fade-up reveals, spring hover lifts (Framer Motion)
```
