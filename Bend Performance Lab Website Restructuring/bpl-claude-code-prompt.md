# Claude Code Prompt — Bend Performance Lab Website

## Instructions

Copy and paste everything below the line into Claude Code to build the BPL website. Make sure the `bpl-website-overview.md` file and `BPL_Logos.png` are in your project directory before running.

---

## Prompt

Build a complete marketing website for Bend Performance Lab (BPL) — a baseball and softball indoor performance facility opening Fall 2026 in Bend, Oregon. Use the `bpl-website-overview.md` file in this directory as the comprehensive specification for all pages, content, and design.

### Tech Stack
- Vite + React + React Router
- Tailwind CSS for styling
- Static site — no backend, no CMS
- All content hardcoded in components

### Project Setup
```
npm create vite@latest bpl-website -- --template react
cd bpl-website
npm install
npm install react-router-dom
npm install -D tailwindcss @tailwindcss/vite
```

### Key Requirements

**Structure:** 6 pages as defined in the overview doc:
1. Home (`/`) — hero, problem, vision, facility preview, philosophy, community roots, testimonials, community input survey form, email signup
2. Facility (`/facility`) — detailed facility breakdown with placeholder image blocks
3. Programs (`/programs`) — lessons, team training, camps/clinics, leagues, strength, tech, memberships with actual pricing
4. Founders (`/founders`) — 4 founder profiles with full bios, placeholder photo circles
5. Get Involved (`/get-involved`) — Bat Wall Society with 3 tiers: business sponsorship, personal support, investment. Shared contact form.
6. Tournaments (`/tournaments`) — NCS/NABA tournament info, league overview, economic impact

**Brand:**
- Dark navy primary: `#1a2744`
- Steel blue accent: `#2d5a8e`
- Light gray sections: `#f0f2f5`
- White: `#ffffff`
- Medium gray text: `#6b7280`
- Fonts: Montserrat (headlines) + Source Sans 3 (body) from Google Fonts
- Logo file: `BPL_Logos.png` in project assets
- Dark, modern, athletic aesthetic — NOT generic or clip-art-y

**Design:**
- Mobile-first responsive
- Dark/light section alternation for visual rhythm
- Placeholder images: styled dark rectangles with subtle gradients and descriptive text (e.g., "Facility Render — Coming Soon"). No broken images, no stock photos.
- Founder photos: colored circles with initials
- Subtle scroll-triggered fade-in animations (CSS only, no heavy libraries)
- Sticky header with transparent-to-solid transition on scroll

**Forms:**
- Community Input Survey (Section 8 of home page): 7 questions + contact info, inline on page. Questions:
  1. Who would primarily use the facility? (single select: Parent of athlete, Youth athlete, High school athlete, Coach / team organization)
  2. What sport? (single select: Baseball, Softball, Both)
  3. Athlete age group (single select: 8-10, 11-13, 14-16, 17-18, College / Adult)
  4. What amenities would you most likely use? (multi-select up to 5: Batting cages, Pitching lanes, Team practice space, Infield training area, HitTrax / hitting analytics, Rapsodo pitching analytics, Weight room, Strength & agility training, Private lessons, Camps & clinics)
  5. How would you primarily use the facility? (single select: Individual training, Team practices, Lessons, Strength training, Combination of everything)
  6. How often would you expect to train at BPL? (single select: Daily, 3-5 times per week, 1-2 times per week, A few times per month)
  7. What is your biggest challenge training in Bend today? (open text)
  8. Contact: Name (required), Email (required), Team name (optional)
- Email signup form (bottom of home page): Name + Email
- Get Involved contact form: Name, Email, Phone, Interest type (pre-selectable), Message
- All forms use placeholder action URLs for now. Show success state on submit.

**Content:**
- All copy from the overview document. Write in present-future tense ("will feature", "is designed to") since the facility is pre-opening.
- Include a pricing note on Programs page: "Pricing subject to change. Final rates confirmed before opening."
- The "Whole-Athlete Development" messaging should be forward-looking about mental/mindset training — it's a core mission but specific spaces are still being finalized.

**Navigation:**
- Sticky header: Logo left, nav links center, "Join the Community" CTA button right
- Mobile: hamburger menu
- Footer: Logo, contact email, location (Bend, Oregon), social placeholder, copyright

Read the full `bpl-website-overview.md` file before starting. Build all 6 pages with complete content. Make it look professional and production-ready — this will be shown to investors and the community.
