---
name: Emerald Minimalist Portfolio
colors:
  surface: '#f9f9ff'
  surface-dim: '#d3daef'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f3ff'
  surface-container: '#e9edff'
  surface-container-high: '#e1e8fd'
  surface-container-highest: '#dce2f7'
  on-surface: '#141b2b'
  on-surface-variant: '#3d4a42'
  inverse-surface: '#293040'
  inverse-on-surface: '#edf0ff'
  outline: '#6d7a72'
  outline-variant: '#bccac0'
  surface-tint: '#006c4a'
  primary: '#006948'
  on-primary: '#ffffff'
  primary-container: '#00855d'
  on-primary-container: '#f5fff7'
  inverse-primary: '#68dba9'
  secondary: '#006c4e'
  on-secondary: '#ffffff'
  secondary-container: '#97f5cc'
  on-secondary-container: '#007353'
  tertiary: '#006947'
  on-tertiary: '#ffffff'
  tertiary-container: '#00855b'
  on-tertiary-container: '#f5fff6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#85f8c4'
  primary-fixed-dim: '#68dba9'
  on-primary-fixed: '#002114'
  on-primary-fixed-variant: '#005137'
  secondary-fixed: '#97f5cc'
  secondary-fixed-dim: '#7bd8b1'
  on-secondary-fixed: '#002115'
  on-secondary-fixed-variant: '#00513a'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#f9f9ff'
  on-background: '#141b2b'
  surface-variant: '#dce2f7'
typography:
  display:
    fontFamily: Manrope
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: Manrope
    fontSize: 38px
    fontWeight: '700'
    lineHeight: 46px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Manrope
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Manrope
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: 0em
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style
This design system embodies high-craft digital minimalism with an editorial edge. Tailored for senior practitioners, designers, engineers, and digital leaders, it conveys quiet confidence, precision, and modern sophistication.

Visual style characteristics:
- **Restrained Minimalism**: Expansive whitespace, intentional asymmetry, and strict typographic hierarchy that lets work artifacts take center stage.
- **Organic Precision**: High-precision geometric layouts tempered by deep, botanical emerald accents and organic mint undertones.
- **Architectural Clarity**: Micro-fine borders, luminous card planes, and subtle physical depth that feels crisp rather than heavy.

## Colors
The palette balances ultra-clean neutrals with a layered emerald spectrum.

Color Roles and Context:
- **Canvas & Surfaces**: The base canvas operates on `#FFFFFF` with primary section stratification utilizing `#FAFAFA`. Nested containers, hover surfaces, and utility panels leverage `#F3F4F6`.
- **Primary Emerald (`#059669`)**: Core interactive states, primary actions, prominent metadata markers, and focal indicators.
- **Secondary Deep Forest (`#047857`)**: High-contrast hover states, emphasized text callouts, and dark-accent anchors.
- **Tertiary Mint Accent (`#10B981`)**: Active status pulses, live indicators, and progress tracks.
- **Subtle Mint Tint (`#ECFDF5`)**: Pill badge backgrounds, selected card states, code tags, and subtle contextual highlights.
- **Text & Contrast Neutrals**: `#111827` (slate black) for primary headings and body; `#4B5563` for secondary descriptions; `#9CA3AF` for subtle timestamps, captions, and deactivated borders.

## Typography
The typographic balance leverages Manrope’s geometric confidence for titles and Plus Jakarta Sans’s open counters and humanistic warmth for sustained reading.

Implementation Rules:
- Display and headline levels must strictly maintain negative letter spacing to preserve high-density visual unity.
- All body copy defaults to a line-height multiplier between 1.6 and 1.65 for maximum legibility against white backdrops.
- Labels, chip text, and small metadata tags use semi-bold weights with slight tracking expansion (+0.02em to +0.04em) to maintain visual hierarchy at compact scales.

## Layout & Spacing
The layout relies on a content-first, fluid 12-column grid constrained to a maximum width of `1200px` to maintain optimal line-length and scanability.

Breakpoints & Responsive Behavior:
- **Mobile (< 768px)**: 4 columns, `gutter-mobile` (1rem / 16px), `margin-mobile` (1.25rem / 20px). Layout stacks vertically.
- **Tablet (768px - 1024px)**: 8 columns, 1.25rem gutters, 2rem canvas margins. Grid collapses secondary sidebars into modular full-width blocks.
- **Desktop (> 1024px)**: 12 columns, `gutter` (1.5rem / 24px), `margin` (3rem / 48px). Off-axis whitespace is preserved intentionally for portfolio case-study narrative flow.
- Section rhythm adheres to generous vertical block spacing: sections separate by `4rem` on mobile and `6rem` to `8rem` on desktop.

## Elevation & Depth
Elevation is expressed through atmospheric, low-opacity shadows paired with razor-sharp hairline borders (`1px solid #E5E7EB`). The visual effect simulates light passing across flat matte surfaces.

Surface Stack:
- **Base Canvas**: `#FFFFFF` (pure surface).
- **Secondary Canvas / Contrast Sections**: `#FAFAFA`.
- **Card Planes (Resting)**: `#FFFFFF` surface framed by `1px solid rgba(0, 0, 0, 0.05)` and an ambient shadow: `0 1px 3px 0 rgba(0, 0, 0, 0.02), 0 4px 12px 0 rgba(0, 0, 0, 0.03)`.
- **Card Planes (Interactive / Hover)**: Translates `-2px` along the Y-axis, border shifts to `rgba(5, 150, 105, 0.25)`, and shadow softens to `0 12px 24px -4px rgba(4, 120, 87, 0.08), 0 4px 8px -2px rgba(0, 0, 0, 0.02)`.
- **Floating Overlays (Navigation & Modals)**: Frosted glass finish with `backdrop-filter: blur(12px)`, background `rgba(255, 255, 255, 0.85)`, and a fine bottom rule `rgba(0, 0, 0, 0.06)`.

## Shapes
The shape system leverages level `2` rounded geometry, conveying refined modern craft without appearing bubbly or child-like.

Element Geometries:
- **Standard Cards, Panels & Modals**: `1rem` (16px) radius.
- **Inputs & Standard Interactive Elements**: `0.5rem` (8px) radius.
- **Pills, Status Badges & Quick Action Chips**: Full pill curvature (`9999px`) to contrast against structured rectangular layouts.
- **Project Thumbnail Visuals**: `0.75rem` (12px) internal radius to nest symmetrically within 16px parent card bounds.

## Components

### Buttons
- **Primary**: Solid emerald background (`#059669`), white text, `0.5rem` border radius, medium weight (`label-md`). Hover state deepens to `#047857` with subtle upward lift. Focus state adds an outer ring of `2px solid #ECFDF5` over `2px solid #059669`.
- **Secondary / Ghost**: High-contrast white background with `1px solid #E5E7EB`, text in `#111827`. On hover: surface transitions to `#FAFAFA` and border darkens to `#D1D5DB`.
- **Tertiary (Text link)**: Minimalist link with trailing icon; text color `#059669` transitioning to `#047857` with an expanding baseline underline on hover.

### Navigation Bar
- **Sticky Frosted Header**: Positioned at page top with `backdrop-filter: blur(12px)` over `rgba(255, 255, 255, 0.85)`. Height `64px`, border-bottom `1px solid #F3F4F6`.
- **Nav Links**: `#4B5563` resting, `#111827` on hover. Active indicator displays as a subtle, centered 4px emerald pill directly beneath the active label.

### Cards (Portfolio & Case Studies)
- White background (`#FFFFFF`), `1rem` border radius, subtle perimeter stroke (`1px solid #F3F4F6`).
- Image containers feature a gentle `#F9FAFB` fallback canvas with an aspect ratio of `16:10`.
- Padding adheres to `space-lg` (1.5rem) internally. Metadata badges and titles are separated using `space-xs`.

### Chips & Badges
- **Status Chip**: Subtle mint background (`#ECFDF5`), text in deep emerald (`#047857`), `9999px` pill radius, padding `4px 10px`, accompanied by a pulsing 6px `#10B981` dot for "Available for hire" status.
- **Tech Stack & Category Chips**: `#F3F4F6` background, `#4B5563` label, no border, shifting to `#E5E7EB` on hover.

### Input Fields & Contact Elements
- Surfaces use `#FFFFFF` with `1px solid #E5E7EB` border.
- Height: `44px` for single-line inputs; `space-md` inner horizontal padding.
- Focus: Border shifts directly to `#059669` with a subtle box-shadow glow of `0 0 0 3px rgba(16, 185, 129, 0.15)`. Labels sit strictly outside inputs in `label-md` `#374151`.

### Checkboxes & Radio Controls
- Base control: `18px` by `18px`, border `1.5px solid #D1D5DB`.
- Checked state: `#059669` fill with crisp white vector checkmark; radio uses a centered white inner dot.