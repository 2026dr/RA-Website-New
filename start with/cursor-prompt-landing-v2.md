# ResaleAgent Landing Page — Full Build from Scratch

## What is ResaleAgent?
A Telegram bot that uses AI to create marketplace listings from a single photo. Send a photo of your item → AI identifies brand, model, condition, generates title, description, and suggests pricing → publish to eBay and StockX in one tap. Under 60 seconds instead of 20 minutes manually.

---

## Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Static export (`output: 'export'` in next.config.js) — will deploy on Vercel

---

## Design System

### Brand Aesthetic
Clean, minimal white interface enhanced with liquid chrome accents. Gooey, inflated typography for logo only. The rest of the UI is clean and modern. Think Apple meets AI-native experimental.

### Brand Tone of Voice
Visionary, Innovative, Empowering, Tech-forward

### Fonts
```css
font-family: 'DM Sans', 'Onest', 'Be Vietnam Pro', sans-serif;
```
Import from Google Fonts: DM Sans (400, 500, 600, 700) and Be Vietnam Pro (700, 800 for headings).

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| Background | `#FAFAFA` | Page background, light sections |
| White | `#FFFFFF` | Cards, hero bg |
| Primary CTA | `#4F35EB` | All buttons, links, accents |
| Heading text | `#2D354C` | All headings (dark navy, NOT pure black) |
| Body text | `#6B7280` | Paragraphs, descriptions |
| Lime accent | `#E5FF7D` | Decorative highlights, badges, secondary accent sparingly |
| Light surface | `#F3F7FB` | Alternate section backgrounds |
| Border | `#E5E7EB` | Card borders, dividers |

### Buttons
- **Primary CTA:** `background: #4F35EB; color: #FFFFFF; border-radius: 60px; padding: 14px 32px; font-weight: 600;`
- **Secondary:** `background: transparent; color: #2D354C; border: 1.5px solid #2D354C; border-radius: 60px;`
- All CTAs link to `https://t.me/ResaleAgentBot`

### Chrome / Metallic Accents (use sparingly — 10% of the page)
- Small floating chrome particles in hero (6-12px circles with `background: linear-gradient(135deg, #C0C0C0, #F0F0F0, #A0A0A0)`, floating animation)
- Chrome gradient on decorative badges like "AI-powered"
- Card hover: subtle metallic border shimmer
- 90% of the page stays clean white — chrome is jewelry, not the outfit

---

## Logo
The logo is at `/public/logo.png` — it's a liquid chrome metallic "RESALE AGENT" text. Display it as an `<img>` in the navbar and footer. Height ~40px in navbar. Do NOT use text for the logo.

---

## Available Images
Copy all these to `/public/visuals/`:

| File | Best for | Description |
|------|----------|-------------|
| `One_photo_is_all_it_takes__version_1__1_.png` | How it Works Step 1 | Hand holding phone scanning sneakers, living room |
| `Capture_Your_Collection_version_1.png` | How it Works Step 1 alt | Hand scanning blazer with AI overlay |
| `AI_identifies__you_just_tap_version_1.png` | How it Works Step 2 | Phone showing AI identification UI with sneaker |
| `Lists_While_You_Watch_version_1.png` | How it Works Step 2 alt | Chrome liquid AI generating listings |
| `One_Photo__Total_ID__version_1.png` | How it Works Step 1 alt | Hand holding phone over chrome sneakers on marble |
| `From_clutter_to_cash__version_1.png` | How it Works Step 3 | Phone showing listings with checkmark |
| `Global_Reach_in_One_Tap_version_1.png` | Platforms section | Phone on glass table, watch, marketplaces |
| `End_the_manual_data_entry_grind_version_1.png` | Comparison section | Reseller workstation with boxes and camera |
| `AI_writes_the_listing_for_you__version_2.mp4` | Demo video section | Video of AI generating listing |

---

## Page Structure (10 sections)

### 1. Navbar (sticky)
- Logo image (left)
- Links: How it works, Features, Platforms, Reviews (center)
- CTA button "Start Listing" → links to Telegram bot (right)
- Transparent on top, white with subtle border-bottom on scroll
- Clean, no chrome on navbar

### 2. Hero
**Layout:** Two columns — text left, product showcase right.

**Left side:**
- Headline: "Turn product photos into listings in seconds." (font: Be Vietnam Pro, 800 weight, ~48px, color: #2D354C)
- Subheadline: "Upload a photo, let AI generate your listing, and publish instantly to resale marketplaces." (DM Sans, 16px, #6B7280)
- Two buttons: "Start Listing for Free" (primary #4F35EB) + "See How It Works" (outline)
- Trust line below: "Works in Telegram · Pay per listing · Free to start" (12px, #9CA3AF)

**Right side — Athena Studio style product showcase:**
Use the jacket cutout image (provide a PNG with transparent bg at `/public/visuals/jacket.png`).

- Large jacket image (~450-500px tall) as focal point
- 6 floating UI cards around it, overlapping edges slightly:
  - Brand: Zara
  - Title: Wool Blend Short Coat Beige Funnel Neck Button Front
  - Condition: New with tags (green badge)
  - Category: Outerwear
  - Suggested price: $45 ($35–$60)
  - Description: "Brand new with tags, unworn and in perfect condition. Wool blend..." (truncated, expands on hover)
- Cards: white bg, `border: 0.5px solid #E5E7EB`, `box-shadow: 0 4px 20px rgba(0,0,0,0.08)`, border-radius 14px, padding 14px 18px
- Thin gray connector lines (#D1D5DB, 1px, slight SVG bezier curves) from jacket to each card
- Small 4px dots at connection points
- Staggered entrance animation: cards fade-in + slide-up with 0.2s delays (Framer Motion)
- Cards float gently (3-4px up/down, 3-4s infinite, different delays)
- 4-5 small chrome particles scattered around, floating
- Subtle light gray radial gradient circle behind the jacket to ground it

**Background:** Plain white `#FFFFFF` — no gradient.

### 3. How It Works
- Section heading: "Listing items has never been this simple"
- 3 cards in a row, each with:
  - An image from `/public/visuals/` (see table above)
  - Step number (chrome gradient circle badge)
  - Title
  - Description
- Step 1: "Snap a photo" — image: `One_photo_is_all_it_takes__version_1__1_.png`
  - "Take a photo of your item — sneakers, bags, clothing, anything. Send it to the bot in Telegram."
- Step 2: "AI creates your listing" — image: `AI_identifies__you_just_tap_version_1.png`
  - "Brand, model, colorway, title, description, market pricing — all generated in seconds."
- Step 3: "Publish everywhere" — image: `From_clutter_to_cash__version_1.png`
  - "Choose your platforms and go live with one tap. eBay, StockX, and more coming soon."
- CTA button below: "Try It Now" (#4F35EB)
- Background: #F3F7FB

### 4. Demo Video
- Section heading: "See it in action"
- Centered video player with the MP4 file: `AI_writes_the_listing_for_you__version_2.mp4`
- Video in a phone frame mockup or rounded card with subtle shadow
- Autoplay on scroll (muted), with play/pause control
- Background: #FFFFFF

### 5. Supported Platforms
- Section heading: "Sell on the platforms you already use"
- Image: `Global_Reach_in_One_Tap_version_1.png` on one side
- Platform logos on the other side:
  - eBay — "Live" (green or lime badge)
  - StockX — "Live" (green or lime badge)
  - Depop — "Coming soon" (gray)
  - Poshmark — "Coming soon"
  - Vinted — "Coming soon"
  - Vestiaire Collective — "Coming soon"
  - Mercari — "Coming soon"
- Background: #FFFFFF

### 6. Comparison
- Section heading: "Stop wasting time on manual listings"
- Image: `End_the_manual_data_entry_grind_version_1.png`
- Two-column comparison:
  - **Manual listing** (boring, crossed out): Title ✗, Description ✗, Category ✗, Item specifics ✗, Photos upload ✗, Price research ✗, Repeat per platform ✗ → "~20 min per listing"
  - **Resale Agent** (highlighted): All of the above ✓ → "Under 60 seconds"
- Optional: competitor comparison row (List Perfectly $29/mo, Vendoo $19-49/mo, Resale Agent $1/listing)
- Background: #F3F7FB

### 7. Features
- Section heading: "Everything you need to list faster"
- 2x3 grid of feature cards:
  1. AI listing generation — "Complete listings from a single photo."
  2. Smart pricing — "AI suggests the right price from market data."
  3. Multi-platform — "eBay and StockX now. More coming soon."
  4. Sold notifications — "Instant alerts + auto-delist from other platforms."
  5. Up to 24 photos — "Send multiple angles for faster sales."
  6. Cross-listing — "Already listed on eBay? Cross-list to StockX in one tap."
- Cards: white bg, border, icon with chrome gradient bg circle, hover shimmer
- Background: #FFFFFF

### 8. Reviews / Social Proof
- Section heading: "What resellers are saying"
- **Minimum 12 testimonial cards** in a horizontally scrolling carousel / marquee animation (auto-scroll, pause on hover)
- Two rows scrolling in opposite directions for visual interest
- Placeholder testimonials:
  1. "I listed my entire sneaker collection in 20 minutes. This used to take me an entire weekend." — Alex M., Sneaker reseller
  2. "The AI gets the titles right every time. My eBay listings look way more professional now." — Jordan K., Vintage seller
  3. "Cross-listing from eBay to StockX saved me so much time. Game changer." — Sam R., Full-time reseller
  4. "I was skeptical about AI listings but the descriptions are better than what I write manually." — Priya T., Thrift flipper
  5. "Finally something that actually works from my phone. No laptop needed." — Marcus D., Side hustler
  6. "Listed 40 items in one evening. My Depop is gonna love this when it launches." — Olivia H., Closet cleaner
  7. "The pricing suggestions are spot on. Saves me from having to research comps every time." — Tyler W., Sneaker reseller
  8. "Sold notifications across platforms is the feature I didn't know I needed." — Aisha B., Multi-platform seller
  9. "I switched from List Perfectly and I'm saving $29/month. Plus it's faster." — Jake F., Full-time reseller
  10. "My wife sends photos, I hit publish. We cleared out our garage in a week." — Chris L., Casual seller
  11. "The StockX integration is seamless. Identifies the exact colorway every time." — Devon R., Sneaker reseller
  12. "I run a vintage shop and this cut my listing time by 80%. Not exaggerating." — Nina S., Vintage store owner
- Card style: white bg, subtle quote icon (top-left, faded), rounded corners (14px), `box-shadow: 0 2px 12px rgba(0,0,0,0.06)`, subtle chrome border shimmer on hover
- Star rating (5 stars) on each card
- Avatar initials circle with chrome gradient background
- Background: #F3F7FB

### 9. Who It's For
- Section heading: "Built for every kind of reseller"
- Horizontal pills/tags showing seller types:
  - Sneaker resellers
  - Vintage sellers
  - Thrift flippers
  - Closet cleaners
  - Side hustlers
  - Full-time resellers
  - Bulk sellers
- Clean, pill-shaped tags with hover effect
- Background: #FFFFFF

### 10. Final CTA
- Dark card (#1A1A1A or #2D354C) with:
  - Headline: "We handle the listings. You handle the business."
  - Subheadline: "Your first listings are free. No credit card required."
  - CTA button: "Start Listing for Free" (chrome gradient or #4F35EB on dark bg)
- Background: dark card on white page

### 11. Footer
- Logo image
- Links: How it works, Features, Platforms, Reviews
- Social links (placeholder)
- "© 2026 ResaleAgent. All rights reserved."
- Minimal, clean

---

## Animations (Framer Motion)
- **Hero cards:** staggered fade-in + slide-up on load, gentle float infinite
- **All sections:** fade-in on scroll (`whileInView`)
- **Cards:** subtle scale on hover (1.02)
- **CTA buttons:** slight scale on hover (1.05)
- **Video:** autoplay on scroll into viewport
- **Chrome particles:** CSS float animation (4s ease-in-out infinite)
- Keep animations subtle and professional — not flashy

---

## Technical Notes
- All CTA links go to: `https://t.me/ResaleAgentBot`
- Static export for Vercel deployment
- Mobile responsive (test all sections at 375px, 768px, 1280px)
- Optimize images (use next/image with sizes prop)
- Semantic HTML (proper heading hierarchy h1→h2→h3)
