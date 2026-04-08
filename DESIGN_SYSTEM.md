# Portfolio Website - Design System Documentation
### For Figma Recreation

---

## 🎯 Design Philosophy

**Approach:**
- Clean layout with structured grid
- Editorial design principles
- Bold typography inspired by animation portfolios
- Subtle motion feel
- Minimal but intentional decorative elements

**Key Principles:**
- Every element has a purpose
- Strong typography hierarchy (uppercase headings, bold weights)
- Generous whitespace for breathing room
- Consistent spacing system (8px grid)
- Controlled color palette (black/white base + 1-2 playful accents per section)
- Smooth, minimal animations (300-600ms duration)

---

## 🎨 Color Palette

### Primary Colors
```
Black: #000000
White: #FFFFFF
```

### Neutral Grays
```
Gray 50:  #F9FAFB
Gray 100: #F3F4F6
Gray 200: #E5E7EB
Gray 400: #9CA3AF
Gray 500: #6B7280
Gray 600: #4B5563
Gray 700: #374151
Gray 800: #1F2937
```

### Accent Colors

**Purple/Pink (Tahfidz Project)**
```
Purple 50:  #FAF5FF
Purple 100: #F3E8FF
Purple 400: #C084FC
Purple 500: #A855F7
Purple 600: #9333EA
Purple 700: #7E22CE

Pink 50:  #FDF2F8
Pink 400: #F472B6
Pink 500: #EC4899
Pink 600: #DB2777
```

**Blue/Cyan (Landing Page Project)**
```
Blue 100: #DBEAFE
Blue 400: #60A5FA
Blue 500: #3B82F6
Blue 600: #2563EB
Blue 700: #1D4ED8

Cyan 400: #22D3EE
Cyan 500: #06B6D4
Cyan 600: #0891B2

Teal 400: #2DD4BF
Teal 500: #14B8A6
Teal 600: #0D9488
```

**Orange/Yellow (Portfolio Project)**
```
Orange 50:  #FFF7ED
Orange 100: #FFEDD5
Orange 400: #FB923C
Orange 500: #F97316
Orange 600: #EA580C
Orange 700: #C2410C

Yellow 50:  #FEFCE8
Yellow 400: #FACC15
Yellow 500: #EAB308

Pink 50: #FDF2F8
```

**Green (Accent)**
```
Green 400: #4ADE80
Green 500: #22C55E
Green 600: #16A34A
```

### Gradient Presets

**Purple to Pink**
```
from-purple-400 to-pink-400
#C084FC → #F472B6 (135deg)
```

**Purple to Pink (Darker)**
```
from-purple-500 to-pink-500
#A855F7 → #EC4899 (135deg)
```

**Blue to Cyan**
```
from-blue-400 to-cyan-400
#60A5FA → #22D3EE (135deg)
```

**Blue to Teal**
```
from-blue-600 via-cyan-600 to-teal-600
#2563EB → #0891B2 → #0D9488 (135deg)
```

**Orange to Yellow**
```
from-orange-400 to-yellow-400
#FB923C → #FACC15 (135deg)
```

**Orange to Pink**
```
from-orange-500 to-pink-500
#F97316 → #EC4899 (135deg)
```

---

## 📝 Typography

### Font Family
```
Primary: System Font Stack
-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif
```

### Font Sizes (Clamp Values)

**Display - Hero Titles**
```
Desktop: 96px (6rem)
Tablet:  80px (5rem)
Mobile:  48px (3rem)
Clamp: clamp(3rem, 10vw, 6rem)
```

**H1 - Section Titles**
```
Desktop: 56px (3.5rem)
Tablet:  48px (3rem)
Mobile:  32px (2rem)
Clamp: clamp(2rem, 6vw, 3.5rem)
```

**H2 - Project Titles**
```
Desktop: 48px (3rem)
Tablet:  40px (2.5rem)
Mobile:  28px (1.75rem)
Clamp: clamp(1.75rem, 5vw, 3rem)
```

**H3 - Subsection Titles**
```
Desktop: 32px (2rem)
Tablet:  28px (1.75rem)
Mobile:  24px (1.5rem)
```

**Body Large**
```
Desktop: 20px (1.25rem)
Mobile:  18px (1.125rem)
```

**Body Regular**
```
Size: 16px (1rem)
Line Height: 1.5
```

**Body Small**
```
Size: 14px (0.875rem)
Line Height: 1.5
```

**Caption/Label**
```
Size: 12px (0.75rem)
Line Height: 1.4
Letter Spacing: 0.3em (uppercase labels)
```

**Tiny**
```
Size: 10px (0.625rem)
```

### Font Weights
```
Regular: 400
Medium:  500
Semibold: 600
Bold:    700
```

### Line Heights
```
Tight:   0.9 (for large display text)
Snug:    1.1
Normal:  1.5 (body text)
Relaxed: 1.625
```

### Letter Spacing
```
Tighter:  -0.05em
Tight:    -0.025em
Normal:   0
Wide:     0.05em
Wider:    0.1em
Widest:   0.3em (for labels)
```

---

## 📐 Spacing System

### Base Unit: 4px (0.25rem)

```
0:   0px
1:   4px   (0.25rem)
2:   8px   (0.5rem)
3:   12px  (0.75rem)
4:   16px  (1rem)
5:   20px  (1.25rem)
6:   24px  (1.5rem)
8:   32px  (2rem)
10:  40px  (2.5rem)
12:  48px  (3rem)
16:  64px  (4rem)
20:  80px  (5rem)
24:  96px  (6rem)
32:  128px (8rem)
40:  160px (10rem)
48:  192px (12rem)
```

### Section Padding
```
Mobile:  py-16 (64px top/bottom)
Desktop: py-32 (128px top/bottom)
```

### Container Max Width
```
Max Width: 1280px
Padding X: 24px (mobile), 48px (desktop)
```

### Gap Spacing
```
Small:  8px  (gap-2)
Medium: 16px (gap-4)
Large:  24px (gap-6)
XL:     32px (gap-8)
```

---

## 🎯 Components Breakdown

### 1. Hero Section

**Layout**
- Container: Max-width 1280px, centered
- Padding: px-6 (mobile), px-12 (desktop)
- Padding Y: py-32
- Min Height: 100vh
- Background: White (#FFFFFF)

**Main Headline**
- Text: "WELCOME TO MY PORTFOLIO"
- Font Size: clamp(3rem, 10vw, 6rem)
- Font Weight: Bold (700)
- Line Height: 0.9
- Letter Spacing: Tight (-0.025em)
- Color: Black (#000000)
- Transform: Uppercase
- Margin Bottom: 24px

**Subtext**
- Text: "Created by Fakhry Zacky Akhmad"
- Font Size: 14px
- Color: Gray 500 (#6B7280)
- Letter Spacing: Wide (0.05em)
- Margin Bottom: 64px

**Minimal Line Decoration**
- Width: 48px
- Height: 2px
- Background: Black (#000000)
- Margin Bottom: 64px

**CTA Buttons**
- Container Gap: 16px
- Margin Top: 0

*Primary Button*
- Padding: 16px 32px
- Background: Black (#000000)
- Text Color: White (#FFFFFF)
- Font Size: 16px
- Font Weight: Medium (500)
- Border Radius: 9999px (full)
- Hover: Scale 1.05

*Secondary Button*
- Padding: 16px 32px
- Background: Transparent
- Border: 2px solid Black (#000000)
- Text Color: Black (#000000)
- Font Size: 16px
- Font Weight: Medium (500)
- Border Radius: 9999px (full)
- Hover: Background Black, Text White

**Background Shapes**
- Circle 1: 400px, Purple 200 (#DDD6FE), opacity 60%, top-right, blur-3xl
- Circle 2: 400px, Pink 200 (#FBCFE8), opacity 60%, bottom-left, blur-3xl
- Position: Absolute, -z-10

---

### 2. Personal Branding Section (Marquee)

**Layout**
- Padding Y: py-6 (mobile), py-8 (desktop)
- Background: Black (#000000)
- Overflow: Hidden

**Text**
- Content: "PERSONAL BRANDING"
- Font Size: clamp(1.75rem, 5vw, 3rem)
- Font Weight: Bold (700)
- Color: Transparent
- Text Stroke: 2px White (CSS stroke-text class)
- Letter Spacing: Tighter (-0.05em)
- Line Height: 1

**Icon**
- Content: ✦
- Same size as text
- Color: White
- Margin X: 24px

**Animation**
- Type: Horizontal scroll (marquee)
- Direction: Left
- Duration: 30 seconds
- Loop: Infinite
- Easing: Linear
- Movement: 0% to -100% translateX

**Gradient Overlay**
- Left: width 160px, gradient from black to transparent
- Right: width 160px, gradient from transparent to black
- Z-index: 10

---

### 3. About Section

**Layout**
- Padding Y: 128px
- Background: White (#FFFFFF)
- Grid: 1 column (mobile), 2 columns (desktop)
- Gap: 64px
- Items: Center aligned

**Left Column - Text**

*Label*
- Text: "ABOUT ME"
- Font Size: 12px
- Font Weight: Medium (500)
- Letter Spacing: 0.3em
- Color: Gray 500 (#6B7280)
- Transform: Uppercase
- Background: Gray 100 (#F3F4F6)
- Padding: 8px 16px
- Border Radius: 9999px

*Title*
- Text: "Digital Creator & Founder of Kresify Studio"
- Font Size: clamp(2rem, 6vw, 3.5rem)
- Font Weight: Bold (700)
- Line Height: Tight (1.1)
- Margin Top: 24px

*Description*
- Font Size: 18px
- Line Height: Relaxed (1.625)
- Color: Gray 600 (#4B5563)
- Margin Top: 24px
- Max Width: 600px

**Right Column - ID Card**

*Lanyard Clip*
- Width: 40px
- Height: 24px
- Background: Gray 700 (#374151)
- Border Radius: Top-lg, Bottom-sm
- Position: Absolute, -top-16
- Shadow: XL

*ID Card Container*
- Background: White (#FFFFFF)
- Border: 4px solid Black (#000000)
- Border Radius: 24px
- Padding: 32px
- Shadow: 2xl
- Max Width: 320px

*Header - Company Name*
- Background: Black (#000000)
- Color: White (#FFFFFF)
- Padding: 12px
- Border Radius: 12px
- Text Align: Center
- Font Size: 20px
- Font Weight: Bold (700)
- Letter Spacing: Wide (0.05em)

*Photo Container*
- Width: 180px
- Height: 225px (aspect 4:5)
- Border Radius: 16px
- Overflow: Hidden
- Border: 3px solid Gray 200 (#E5E7EB)
- Position: Relative
- Margin Top: 24px

*Photo*
- Object Fit: Cover
- Width: 100%
- Height: 100%

*Verified Badge*
- Width: 40px
- Height: 40px
- Background: Gradient Blue 500 to Cyan 500
- Border Radius: Full
- Position: Absolute, -top-8, -right-8
- Shadow: lg
- Icon: ✓ (white, 18px)

*Name & Role*
- Text Align: Center
- Margin Top: 24px
- Name: 18px, bold
- Role: 14px, Gray 600

*ID Number*
- Font Size: 12px
- Color: Gray 500
- Text Align: Center
- Margin Top: 8px
- Font: Monospace

*Footer - QR Code Section*
- Background: Gray 50 (#F9FAFB)
- Padding: 16px
- Border Radius: 12px
- Margin Top: 24px
- QR Size: 80px x 80px
- Label: 10px, Gray 500

**Animations**
- Float: Y movement 0 → -8px → 0 (4s loop)
- Hover: Scale 1.02
- Badge Rotate: 0° → 8° → 0° → -8° → 0° (4s loop)

---

### 4. What I Do Header

**Layout**
- Padding Y: 80px
- Background: White (#FFFFFF)
- Max Width: 1024px

**Section Label**
- Line: 48px width, 1px height, Black
- Text: "PROJECTS"
- Font Size: 12px
- Letter Spacing: 0.3em
- Color: Gray 500
- Transform: Uppercase
- Gap: 16px

**Title**
- Text: "What I Do"
- Font Size: clamp(3rem, 10vw, 6rem)
- Line Height: 0.9
- Letter Spacing: Tight
- Margin Bottom: 24px

**Description**
- Font Size: 18px (mobile), 20px (desktop)
- Line Height: Relaxed (1.625)
- Color: Gray 600
- Max Width: 672px

---

### 5. Project Section (Tahfidz)

**Layout**
- Padding Y: 128px
- Background: White (#FFFFFF)
- Grid: 1 column (mobile), 2 columns (desktop)
- Gap: 64px
- Items: Center

**Left Column - Text**

*Label*
- Text: "WEB APPLICATION"
- Font Size: 12px
- Font Weight: Medium (500)
- Letter Spacing: Wider (0.1em)
- Transform: Uppercase
- Background: Purple 100 (#F3E8FF)
- Color: Purple 700 (#7E22CE)
- Padding: 8px 16px
- Border Radius: Full

*Title*
- Text: "Website Monitoring Hafalan Tahfidz"
- Font Size: clamp(2rem, 6vw, 3.5rem)
- Line Height: Tight (1.1)
- Letter Spacing: Tight
- Margin Top: 24px

*Subtitle*
- Font Size: 20px
- Color: Gray 600
- Line Height: Relaxed
- Margin Top: 24px

*Features List*
- Gap: 16px
- Margin Top: 16px

*Feature Item*
- Icon: CheckCircle2 (24px, Purple 600)
- Title: 16px, Semibold
- Description: 14px, Gray 600
- Gap: 12px

**Right Column - Browser Mockup**

*Container*
- Border Radius: 16px
- Overflow: Hidden
- Shadow: 2xl
- Border: 2px solid Gray 200
- Background: White

*Browser Header*
- Background: Gray 100
- Padding: 12px 16px
- Border Bottom: 1px solid Gray 200
- Dots: 12px circles (Red 400, Yellow 400, Green 400)
- URL Bar: White background, rounded, 12px text

*Dashboard Content*
- Padding: 32px
- Background: Gradient Purple 50 to Pink 50

*Dashboard Header*
- Label: 14px, Purple 600, Medium
- Title: 24px, Bold
- Subtitle: 14px, Gray 600

*Stats Cards Grid*
- Grid: 3 columns
- Gap: 12px
- Card Padding: 16px
- Card Background: White
- Border Radius: 12px
- Shadow: sm
- Number: 24px, Bold, Colored
- Label: 12px, Gray 600

*Activity Table*
- Background: White
- Border Radius: 12px
- Shadow: sm
- Header: Purple 600 background, white text, 14px
- Row Padding: 12px 16px
- Avatar: 32px circle, gradient
- Name: 12px, Medium
- Detail: 10px, Gray 500

**Decorative Circle**
- Size: 128px
- Background: Gradient Purple 200 to Pink 200
- Position: Bottom-right (-24px, -24px)
- Blur: 3xl
- Z-index: -10
- Animation: Scale 1 → 1.2 → 1 (4s loop)

**Hover Effects**
- Browser mockup: Scale 1.02, Y -8px

---

### 6. Project Section (Landing Page)

**Same structure as Tahfidz but:**

**Colors**
- Label Background: Blue 100 (#DBEAFE)
- Label Text: Blue 700 (#1D4ED8)
- Gradient: Blue 600 → Cyan 600 → Teal 600
- Decorative: Blue 200 to Cyan 200

**Layout**
- Text: Right (order-2 on desktop)
- Mockup: Left (order-1 on desktop)

**Landing Content**
- Hero: Gradient blue background, white text
- Title: 24px, Bold
- Subtitle: 14px, opacity 90%
- Buttons: White BG + Border variant

**Services Grid**
- 3 columns
- Icon boxes: 48px, gradient backgrounds
- Icons: Zap, Smartphone, TrendingUp (24px)
- Title: 12px, Medium
- Description: 10px, Gray 600

---

### 7. Project Section (Portfolio)

**Same structure as Tahfidz but:**

**Colors**
- Label Background: Orange 100 (#FFEDD5)
- Label Text: Orange 700 (#C2410C)
- Gradient: Orange 50 → Pink 50 → Yellow 50
- Decorative: Orange 200 to Yellow 200

**Features Icons**
- Palette, Star, Sparkles
- Icon Size: 16px
- Container: 32px x 32px, rounded-lg, gradient

**Portfolio Content**
- Header with logo (32px gradient box)
- Nav: 12px, Gray 600
- Greeting: 12px, Orange 600
- Title: 24px, Bold with gradient text

**Projects Grid**
- 2x2 Grid
- Gap: 16px
- Card: White, rounded-xl, shadow-sm
- Image Height: 96px
- Gradient backgrounds (purple, blue, orange, green)
- Title: 12px, Semibold
- Category: 10px, Gray 500

---

### 8. CTA Section

**Layout**
- Padding Y: 128px
- Background: Black (#000000)
- Text Align: Center
- Container: Max-width 800px, centered

**Label**
- Text: "LET'S WORK TOGETHER"
- Font Size: 12px
- Letter Spacing: 0.3em
- Color: Gray 400
- Margin Bottom: 24px

**Title**
- Text: "Punya Project?"
- Font Size: clamp(2.5rem, 8vw, 4rem)
- Font Weight: Bold
- Color: White
- Line Height: Tight
- Margin Bottom: 24px

**Description**
- Font Size: 20px
- Color: Gray 400
- Line Height: Relaxed
- Margin Bottom: 48px

**WhatsApp Button**
- Padding: 20px 40px
- Background: White
- Text Color: Black
- Font Size: 16px
- Font Weight: Semibold
- Border Radius: Full
- Gap: 12px (icon + text)
- Icon: MessageCircle (20px)
- Hover: Scale 1.05, Shadow lg

---

### 9. Footer

**Layout**
- Padding Y: 48px
- Background: Black (#000000)
- Border Top: 1px solid Gray 800 (#1F2937)

**Content**
- Text Align: Center
- Font Size: 14px
- Color: Gray 400 (#9CA3AF)

**Name**
- Color: White (#FFFFFF)
- Font Weight: Medium (500)

---

## 🎬 Animations & Interactions

### Marquee (Personal Branding)
```
Type: translateX
From: 0%
To: -100%
Duration: 30s
Repeat: Infinite
Easing: Linear
```

### Hover - Buttons
```
Transform: scale(1.05)
Duration: 0.2s
Easing: ease-out
```

### Hover - Browser Mockup
```
Transform: scale(1.02) translateY(-8px)
Duration: 0.4s
Easing: ease-out
```

### Float Animation (ID Card)
```
Transform: translateY
Keyframes: 0px → -8px → 0px
Duration: 4s
Repeat: Infinite
Easing: ease-in-out
```

### Badge Rotate
```
Transform: rotate
Keyframes: 0° → 8° → 0° → -8° → 0°
Duration: 4s
Repeat: Infinite
Easing: ease-in-out
```

### Decorative Circle Pulse
```
Transform: scale
Keyframes: 1 → 1.2 → 1
Duration: 4s
Repeat: Infinite
Easing: ease-in-out
```

### Fade In Up (Scroll)
```
Initial: opacity 0, translateY(30px)
Animate: opacity 1, translateY(0)
Duration: 0.8s
Trigger: When in viewport (intersection observer)
Threshold: -100px margin
```

---

## 📱 Responsive Breakpoints

```
Mobile:  < 640px
Tablet:  640px - 1023px
Desktop: ≥ 1024px
Wide:    ≥ 1280px
```

### Responsive Adjustments

**Container Padding**
- Mobile: 24px (px-6)
- Desktop: 48px (px-12)

**Section Padding Y**
- Mobile: 64px (py-16)
- Desktop: 128px (py-32)

**Grid Columns**
- Mobile: 1 column
- Desktop: 2 columns (most sections)

**Text Sizes**
- Use clamp() for fluid typography
- Min size for mobile, max for desktop

**Browser Mockup**
- Mobile: Full width, scaled down
- Desktop: 50% width in grid

---

## 🎨 Special Effects

### Stroke Text (Personal Branding)
```css
.stroke-text {
  -webkit-text-stroke: 2px #FFFFFF;
  text-stroke: 2px #FFFFFF;
  color: transparent;
}
```

### Glass Morphism (ID Card QR area)
```
Background: rgba(255, 255, 255, 0.1)
Backdrop Filter: blur(10px)
Border: 1px solid rgba(255, 255, 255, 0.2)
```

### Shadow Levels
```
sm:  0 1px 2px rgba(0,0,0,0.05)
md:  0 4px 6px rgba(0,0,0,0.1)
lg:  0 10px 15px rgba(0,0,0,0.1)
xl:  0 20px 25px rgba(0,0,0,0.1)
2xl: 0 25px 50px rgba(0,0,0,0.25)
```

### Blur Levels
```
sm:  blur(4px)
md:  blur(8px)
lg:  blur(16px)
xl:  blur(24px)
2xl: blur(40px)
3xl: blur(64px)
```

---

## 📋 Component Checklist for Figma

### Frame Setup
- [ ] Desktop: 1440px width
- [ ] Tablet: 768px width
- [ ] Mobile: 375px width

### Components to Create
- [ ] Button - Primary (black)
- [ ] Button - Secondary (outline)
- [ ] Button - WhatsApp (white)
- [ ] Label - Tag (all color variants)
- [ ] Card - ID Card
- [ ] Card - Browser Mockup
- [ ] Card - Stats Card
- [ ] Card - Project Card
- [ ] Icon - Feature List Item
- [ ] Text Styles (all variants)

### Auto Layout Frames
- [ ] Hero Section
- [ ] Personal Branding Marquee
- [ ] About Section (Grid)
- [ ] Project Section (Grid)
- [ ] CTA Section
- [ ] Footer

### Gradient Styles
- [ ] Purple to Pink
- [ ] Blue to Cyan
- [ ] Orange to Yellow
- [ ] All decorative gradients

### Effects
- [ ] Drop shadows (all levels)
- [ ] Blur effects
- [ ] Stroke text effect

---

## 🚀 Export Settings

### Images
- Format: PNG (2x for retina)
- Quality: High
- Background: Transparent (for assets)

### Icons
- Format: SVG
- Size: 24x24 base
- Stroke Width: 2px

### Colors
- Export as Color Styles
- Name format: `color/shade` (e.g., `purple/500`)

### Typography
- Export as Text Styles
- Name format: `category/variant` (e.g., `heading/h1`)

---

## 📝 Notes

1. **Font**: Use Inter or similar system font in Figma
2. **Grid**: 12 columns, 24px gutter
3. **Spacing**: Use 8px grid for all spacing
4. **Components**: Create variants for hover states
5. **Prototyping**: Use smart animate for smooth transitions

---

**Created for:** Fakhry Zacky Akhmad Portfolio  
**Version:** 1.0  
**Last Updated:** 2026  
**Tools:** React, Tailwind CSS, Motion (Framer Motion)