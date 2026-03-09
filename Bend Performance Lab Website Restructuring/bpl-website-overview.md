# Bend Performance Lab — Website Build Overview

## Reference Document & Claude Code Prompt

---

## Project Summary

Build a marketing website for Bend Performance Lab (BPL), Central Oregon's first dedicated baseball and softball indoor performance facility. The site serves as a pre-opening community-building and credibility tool targeting athletes, families, coaches, teams, sponsors, and investors. Opening target: Fall 2026.

---

## Tech Stack

- **Framework:** Vite + React (static marketing site)
- **Styling:** Tailwind CSS
- **Deployment:** Static build (deployable to Vercel, Netlify, or similar)
- **Forms:** Embedded form handling (Formspree, Netlify Forms, or similar — use placeholder action URLs for now)
- **No CMS required** — all content is hardcoded for now

---

## Brand Guidelines

- **Logo:** BPL circular badge logo — baseball with "BEND PERFORMANCE LAB" text and "BPL" center mark
- **Primary Colors:**
  - Dark Navy: `#1a2744` (primary backgrounds, headers)
  - Steel Blue: `#2d5a8e` (accents, CTAs, links)
  - Light Gray: `#f0f2f5` (section backgrounds)
  - White: `#ffffff` (text on dark, card backgrounds)
  - Medium Gray: `#6b7280` (body text, secondary)
- **Typography:** Modern, clean, athletic feel
  - Headlines: Bold sans-serif (use Montserrat or similar athletic display font from Google Fonts)
  - Body: Clean sans-serif (use Source Sans 3 or similar)
- **Tone:** Confident, professional, community-rooted. Not corporate. Not hype. Credible.
- **Visual approach:** Dark backgrounds with blue/white accents. Athletic and modern. Placeholder images should use solid color blocks or subtle patterns — not stock photos.

---

## Site Structure & Navigation

### Primary Navigation
| Page | Route | Priority |
|------|-------|----------|
| Home | `/` | Primary |
| Facility | `/facility` | Primary |
| Programs | `/programs` | Primary |
| Founders | `/founders` | Primary |
| Get Involved (Bat Wall) | `/get-involved` | Primary |
| Tournaments & Events | `/tournaments` | Secondary |

### Persistent Elements
- **Header:** Logo (left), nav links (center/right), "Join the Community" CTA button (right)
- **Footer:** Logo, email (info@bendperformancelab.com), social links (Instagram placeholder), "Bend, Oregon", copyright, brief tagline

---

## Page-by-Page Specifications

---

### 1. HOME PAGE (`/`)

The homepage is the primary landing page. It must establish credibility, communicate the problem/opportunity, introduce the vision, and collect community interest. It is the longest page on the site.

#### Section 1 — Hero
- **Headline:** Bend Performance Lab
- **Subheadline:** Central Oregon's First Dedicated Baseball & Softball Performance Facility
- **Supporting line:** Built for mechanics. Built for the whole athlete. Opening Fall 2026.
- **CTAs:** "Join the Community" (scrolls to signup) | "Get Involved" (links to /get-involved)
- **Visual:** Full-width dark background with subtle texture/pattern. Logo mark prominent.

#### Section 2 — The Problem
- **Headline:** Bend Has Thousands of Diamond Athletes — But No True Training Home
- **Body:** Central Oregon is home to thousands of baseball and softball athletes, dozens of competitive travel teams, multiple high school programs, and even professional players. Yet the region has no dedicated indoor facility designed specifically for baseball and softball training. Winter weather, oversubscribed outdoor fields, and shared multi-sport indoor spaces make consistent training nearly impossible. Athletes scramble for space, shorten sessions, or drive hours to access proper development environments.
- **Design:** Clean text section, possibly with a few stat callouts (3,000+ athletes, 70+ teams, 0 dedicated facilities)

#### Section 3 — The Vision
- **Headline:** A New Home for Baseball & Softball Development
- **Body:** Bend Performance Lab is a 17,682 sq ft purpose-built indoor training facility in east Bend, designed specifically for baseball and softball athletes. Year-round access to training environments built around how diamond athletes actually develop — through consistent reps, integrated strength training, data-driven feedback, and focused preparation.
- **Feature cards (4):**
  - **Mechanics** — Dedicated spaces for skill development and position-specific training
  - **Strength** — Athlete-specific conditioning designed for durability and on-field performance
  - **Performance** — HitTrax, Rapsodo, and video analysis for measurable improvement
  - **Whole-Athlete Development** — An environment that develops focus, confidence, and competitive presence alongside physical skills
- **Note on Whole-Athlete Development:** This is a core part of BPL's mission — training the complete athlete, not just the physical. The facility will integrate intentional spaces and programming focused on mental preparation, focus, and competitive mindset. Keep copy forward-looking ("designed to support," "will integrate") since specific spaces are still being finalized.

#### Section 4 — Facility Preview
- **Headline:** A Purpose-Built Facility for Diamond Athletes
- **Body:** BPL will feature specialized training spaces designed to support athletes, teams, and coaches in a professional environment built for development.
- **Highlight grid:**
  - Retractable batting cages and pitching lanes
  - 70' x 45' convertible turf infield
  - High-performance lab with HitTrax & Rapsodo
  - 1,800 sq ft athlete-specific weight room
  - Plyometrics and arm care area
  - Pro shop and athlete lounge
  - 10 professional office suites
- **CTA:** "Explore the Facility" → links to /facility
- **Visual:** Placeholder image block(s) for future renders/photos

#### Section 5 — Training Philosophy
- **Headline:** Train the Right Way
- **Body intro:** At Bend Performance Lab, development goes beyond simply taking more swings or throwing more pitches. Great athletes are built through intentional training environments where mechanics, strength, and mindset develop together.
- **Principles (displayed as styled list or cards):**
  - Mechanics before volume — movement quality before speed, load, or volume
  - Strength must transfer to sport — every program designed to improve on-field performance
  - Durability is trained, not hoped for — deceleration, tissue tolerance, and joint control matter
  - Youth athletes are developed, not pushed — structured progression protects long-term development
  - Baseball and softball deserve specialized environments — rotational, asymmetric, skill-dominant sports need purpose-built spaces

#### Section 6 — Community Roots
- **Headline:** Built by the Bend Baseball & Softball Community
- **Body:** BPL is being built by coaches, athletes, and leaders who are already deeply embedded in Central Oregon's baseball and softball community. This is not an outside company bringing a facility to Bend — it's a facility being built by the people already serving this community.
- **Proof points (small stats or icons):**
  - 70+ teams engaged
  - 15+ organizations in conversation
  - 2,200+ Little League athletes in the region
  - 50+ athletes on existing waitlists
- **CTA:** "Meet the Founders" → links to /founders

#### Section 7 — What People Are Saying
- **Headline:** From the Community
- **Quotes:**
  - "We've essentially given up trying to book time at the Fieldhouse. Between the scheduling difficulties and baseball getting priority at Mountain View, our softball teams just don't have reliable indoor access during the winter months." — Kayleen, President, Jr. Cougars Softball
  - "Even getting a single cage rental after school or on weekends is a struggle. There's just not enough availability for families who want to work with their kids outside of team practice." — Jason Wilson, Parent
- **Design:** Styled testimonial cards on dark background

#### Section 8 — Community Input Survey
- **Headline:** Help Shape Bend Performance Lab
- **Body:** We're building Bend Performance Lab for the athletes and teams who will train here. Tell us how you would use the facility so we can design memberships and training spaces the right way. 60-second survey.
- **Survey fields (inline form on page, NOT a link to external survey):**
  1. **Who would primarily use the facility?** (single select)
     - Parent of athlete | Youth athlete | High school athlete | Coach / team organization
  2. **What sport?** (single select)
     - Baseball | Softball | Both
  3. **Athlete age group** (single select)
     - 8–10 | 11–13 | 14–16 | 17–18 | College / Adult
  4. **What amenities would you most likely use?** (multi-select, up to 5)
     - Batting cages | Pitching lanes | Team practice space | Infield training area | HitTrax / hitting analytics | Rapsodo pitching analytics | Weight room | Strength & agility training | Private lessons | Camps & clinics
  5. **How would you primarily use the facility?** (single select)
     - Individual training | Team practices | Lessons | Strength training | Combination of everything
  6. **How often would you expect to train at BPL?** (single select)
     - Daily | 3–5 times per week | 1–2 times per week | A few times per month
  7. **What is your biggest challenge training in Bend today?** (open text)
  8. **Contact info:** Name (required), Email (required), Team name (optional)
- **Submit button:** "Submit Survey"
- **Design:** Card-style form section with clean styling. Progress indication optional.

#### Section 9 — Final CTA / Email Signup
- **Headline:** Be Part of Building Bend's Baseball & Softball Home
- **Body:** Whether you're a parent, athlete, coach, or supporter of youth sports in Central Oregon — join the community to receive updates on progress, early access opportunities, and ways to get involved.
- **Form fields:** Name, Email
- **Button:** "Join the BPL Community"

---

### 2. FACILITY PAGE (`/facility`)

#### Header
- **Headline:** Inside Bend Performance Lab
- **Subheadline:** A 17,682 sq ft baseball and softball performance facility designed for complete athlete development.

#### Section 1 — Training Cages & Lanes
- 100' long cage with optional divider (converts to 3 full-size bullpens or 2 x 50' cages)
- 30' hitting cage
- High-performance lab: 65' x 25' with HitTrax and Rapsodo integration
- Retractable curtain system configurable for individual, small group, and team use
- **Placeholder image blocks for renders**

#### Section 2 — Team Training Area
- 70' x 45' turfed infield area
- Converts to 4 x 17' x 45' tunnels or 2 x 35' x 45' spaces
- Designed for team practices, infield work, and defensive drills
- **Placeholder image blocks**

#### Section 3 — Strength & Performance
- 1,800 sq ft weight room: squat racks, barbells, baseball/softball-specific equipment, slam wall, sled area
- 700 sq ft plyometrics/medballs area for warmup, arm care, and recovery classes
- Programming emphasis: rotational power, lower body strength, arm care, deceleration training, speed and agility
- **Placeholder image blocks**

#### Section 4 — Technology
- HitTrax hitting analytics
- Rapsodo pitching data (baseball + softball)
- Video analysis systems
- ForceDecks and Perch performance monitoring
- Brief explanation: measurable, data-driven feedback to accelerate development

#### Section 5 — Professional Offices
- 10 private office suites
- Designed for performance-aligned professionals: physical therapists, sports psychologists, nutrition specialists, performance coaches
- Weight room access included for tenants
- Coworking space available

#### Section 6 — Facility at a Glance (summary)
- Quick stats: 17,682 sq ft | 8+ training lanes | 1,800 sq ft weight room | 10 office suites | 35+ parking spaces
- Location: East Bend, Oregon
- **CTA:** "Get Involved" → /get-involved

---

### 3. PROGRAMS PAGE (`/programs`)

Programs should showcase the depth and variety available — this is a selling point. Use the detailed programming from the business plan.

#### Header
- **Headline:** Training Programs
- **Subheadline:** Development opportunities for athletes, teams, and families at every level.

#### Section 1 — Private Lessons
- One-on-one training with experienced coaches
- Hitting, pitching, catching, fielding instruction
- Members: $80/session | Non-members: $100/session
- 7 lesson days per week

#### Section 2 — Team Training
- Facility rental for club, high school, and Little League teams
- Full facility access: turf area, long cage, plyo wall
- Team packages available (Bronze through Diamond tiers)
- $130–150/hr facility rate, with volume discounts
- 40+ committed team hours per week

#### Section 3 — Camps & Clinics
- **Camps:** Multi-hour and multi-day programs (hitting, pitching, infield, catching — baseball and softball)
- **Clinics:** 1.5-hour focused sessions on specific skills
- Seasonal programming: Fall, Winter, Spring, Summer
- Pricing from $75 (clinics) to $300 (multi-day camps)

#### Section 4 — Leagues
- **HitTrax League:** 8 weeks, 2 games/week — 12U, 14U, HS, Adult divisions
- **Whiffle League:** 8 weeks — 10U, 12U, 14U, HS, Adult divisions
- **2v2 League:** 8 weeks, 7-inning games — 14U, HS, Adult divisions
- **Cage Baseball League** in the high-performance lab
- $300 per team

#### Section 5 — Strength & Conditioning
- Athlete-specific programming: durability, explosiveness, speed, injury prevention
- Team lift sessions available ($85/session or 10-pack for $800)
- Trainer-led team sessions also available
- Integrated with sport-specific programming

#### Section 6 — Technology Sessions
- HitTrax hitting analytics sessions
- Rapsodo pitching analysis
- Video breakdown and mechanical review
- Available as add-ons or standalone bookings

#### Section 7 — Memberships
- **Base ($80/mo):** 20% off lessons, camps, clinics, cage reservations
- **Premier ($120/mo):** Same discounts + gym membership
- **Family ($200/mo):** Same discounts + 3 gym memberships
- **Pro Individual ($1,000/mo):** Full facility access, high-performance area, gym — designed for MLB/MiLB offseason athletes. Daytime access 7am–2pm. Annual options available.
- **Family Gym Add-On ($40/mo):** Available for any player membership

#### CTA
- "Join the Community for Early Access" → scrolls to signup or links to home

---

### 4. FOUNDERS PAGE (`/founders`)

This page needs to sell credibility. The founding team IS the product at this stage.

#### Header
- **Headline:** Meet the Founders
- **Subheadline:** The team building Bend Performance Lab.

#### Intro
- BPL was created by coaches, operators, and leaders deeply embedded in the Central Oregon baseball and softball community. The founders bring experience spanning professional baseball, national-level coaching, tournament operations, strength and conditioning, and business management. Several founders already operate training and tournament businesses that will feed directly into BPL's programming and customer base.

#### Founder Profiles (each gets a card/section with placeholder photo)

**Miranda Abrahams McLeod — Director of Softball & Strength Training**
- Certified Strength and Conditioning Specialist (CSCS) with 10+ years in youth athlete development
- Former collegiate softball catcher/utility player, 25+ years competitive experience
- Founder of Mojo Strength and Softball — a leading softball training resource in Central Oregon and nationally, currently traveling to hold clinics across multiple states
- Certified in Tincher Pitching methodology with additional credentials in injury resilience, kettlebell training, and pre/postnatal coaching
- Former President of Central Oregon Fastpitch (now merged into Crush Softball)
- 9-year Bend resident with deep relationships across the local softball community
- At BPL: Leads all softball programming (lessons, clinics, camps, coach development) and oversees strength and conditioning operations

**Ian MacDougall — Director of Baseball Programs**
- Former professional pitcher: Australian Baseball League (Perth Heat) and Frontier League (Traverse City Beach Bums)
- Playing career: Summit High School (part of program's first league championship, 2007), Columbia Basin CC, Western Oregon University
- Co-owner of MacDougall & Sons Bat Company
- Head baseball coach at Caldera High School, co-managed the Gladiators to consecutive championships (2022–2023)
- Active private pitching and hitting instructor serving Central Oregon youth athletes
- At BPL: Leads all baseball programming including lessons, clinics, camps, and coach development

**Sean Jacox — Business Operations & Tournaments**
- Central Oregon native, immersed in baseball since age 7
- Player-manager at Summit High School, 4 seasons of club baseball at COCC, 6 years on coaching staff
- Co-managed competitive adult teams to 4 straight league championships (2022–2025)
- League President of Central Oregon Adult Baseball (after 3 years as Commissioner)
- State Director for National Championship Sports (NCS) and Tournament Director for NABA
- Brings operational and financial management experience from non-profit and business management
- At BPL: Oversees business operations, tournament hosting, and league partnerships

**Kyle McLeod — Business Management & Investor Relations**
- Background in small business operations, technology, and startup development
- Experience guiding early-stage companies through capital raises, operational buildouts, and growth scaling
- 9-year Bend resident
- At BPL: Oversees business management, financial operations, technology systems, and investor communications

#### Section — Why This Team
- Playing and coaching credibility at professional, collegiate, and youth levels across both baseball and softball
- Deep local roots with established relationships across schools, travel teams, adult leagues, and tournaments
- Operational infrastructure through existing training businesses, tournament networks, and league leadership
- Business acumen spanning facility operations, finance, capital raising, and technology
- **Key line:** "This is not a team learning the market — they are the market."

---

### 5. GET INVOLVED PAGE (`/get-involved`)

This page consolidates three audiences into one "founding supporter" funnel. The unifying concept is the **Bat Wall** — a permanent recognition display inside the facility for founding supporters at every level.

#### Header
- **Headline:** Get Involved
- **Subheadline:** Three ways to support the creation of Central Oregon's first dedicated baseball and softball performance facility — and earn your place on the Bat Wall.

#### Section 1 — The Bat Wall
- **Headline:** The Bat Wall Society
- **Body:** Every founding supporter — whether a local business, an individual fan, or an investor — will be permanently recognized on the Bat Wall inside Bend Performance Lab. This is a limited, one-time founding opportunity to be part of building Bend's baseball and softball home.
- **Visual:** Placeholder image/illustration of a wall display with bats

#### Section 2 — Business Advertising & Sponsorship
- **Headline:** Business Sponsorship
- **Body:** Thousands of athletes and families will visit BPL each year. Business sponsors gain ongoing visibility inside the facility while supporting youth athletics and community development.
- **Tiers (keep tier names but details TBD):**
  - Grand Slam Sponsor
  - Home Run Sponsor
  - On Base Sponsor
- **CTA:** "Request Sponsorship Information" → opens form/modal

#### Section 3 — Personal Support
- **Headline:** Individual & Family Support
- **Body:** Love baseball and softball in Central Oregon? Support the facility with a personal contribution and earn your name (or your athlete's name) on the Bat Wall. Perfect for families, former players, and anyone who wants to be part of building something lasting for the community.
- **CTA:** "Support BPL" → opens form/modal

#### Section 4 — Investment
- **Headline:** Invest in Bend Performance Lab
- **Body:** BPL addresses a clear infrastructure gap in Central Oregon. The facility combines multiple revenue streams — team training, individual memberships, lessons, camps, leagues, tournaments, and office subleasing — designed for sustainable, diversified income.
- **Key details (brief, not a full pitch):**
  - Target raise: $350K–$500K
  - Minimum investment: $25K
  - Target opening: Fall 2026
  - Revenue streams: Memberships, lessons, team training, camps/clinics, leagues, tournaments, technology sessions, office subleasing
- **CTA:** "Request Investor Information" → opens form/modal
- **Note:** This is a teaser, not a full investor deck. The goal is to capture qualified interest.

#### Shared Form (used by all three CTAs — can be a modal or section)
- **Fields:**
  - Name (required)
  - Email (required)
  - Phone (optional)
  - Interest type: Business Sponsorship | Personal Support | Investment (pre-selected based on which CTA they clicked)
  - Message (optional)
- **Button:** "Submit"

---

### 6. TOURNAMENTS & EVENTS PAGE (`/tournaments`)

#### Header
- **Headline:** Tournaments & Events
- **Subheadline:** Competitive events powered by national tournament networks, based in Central Oregon.

#### Section 1 — Tournament Network
- BPL's founding team includes leadership in two national tournament organizations:
  - **National Championship Sports (NCS):** Sean Jacox — State Director; Ian MacDougall — Tournament Director
  - **National Adult Baseball Association (NABA):** Sean Jacox — League President & Tournament Director
- This gives BPL the ability to host and operate sanctioned tournaments across Oregon, Northern California, and Washington.

#### Section 2 — Tournament Types
- **NCS Baseball (9U–18U):** Youth travel baseball tournaments, 3–4 per season
- **NCS Fastpitch (10U, 12U, 14U, HS):** Softball tournaments, 1–2 per season
- **NCS Slowpitch (18+ divisions):** Adult slowpitch events (Cinco de Mayo, Fathers Day, Labor Day)
- **NABA Adult Baseball (18+, 25+, 35+, 45+, 65+):** Adult baseball tournaments, Spring and Fall

#### Section 3 — Economic Impact
- Tournaments bring teams, families, and spending from across the Pacific Northwest into Central Oregon
- Estimated growth potential: $150K+ in tournament revenue within 3–4 years
- BPL serves as a home base for tournament operations, with games hosted at local outdoor fields across the region

#### Section 4 — Leagues
- In-facility competitive leagues:
  - HitTrax League (8 weeks)
  - Whiffle League (8 weeks)
  - 2v2 League (8 weeks)
- Multiple age divisions from 10U through Adult
- Brief note: full league details on Programs page

#### CTA
- "Interested in hosting an event or entering a tournament? Contact us." → mailto:info@bendperformancelab.com

---

## Design & UX Notes

### Overall Aesthetic
- Dark, modern, athletic. Think premium sports brand — not youth league clip art.
- Primary backgrounds: dark navy (`#1a2744`) and near-black
- Accent color: steel blue (`#2d5a8e`) for CTAs, links, highlights
- Section alternation: dark → light gray → dark to create visual rhythm
- Generous whitespace. Strong typography hierarchy.
- Placeholder images: use styled div blocks with subtle gradients or patterns and "Image Coming Soon" or descriptive text. No broken image icons.

### Responsive
- Mobile-first. Most visitors will be parents on phones.
- Hamburger nav on mobile.
- Survey form must be fully functional on mobile.

### Animations
- Subtle scroll-triggered fade-ins for sections
- No heavy animations — this is a credibility site, not a portfolio piece

### Forms
- Survey form: multi-step or single-page with clear grouping
- All forms should have clear success states ("Thanks! We'll be in touch.")
- Use placeholder form action URLs (e.g., `https://formspree.io/f/placeholder`)

---

## Image Assets

- **Logo:** BPL circular badge logo (provided as PNG). Use as-is in header and footer. For hero section, can use larger version.
- **Founder photos:** Placeholder circles with initials for now
- **Facility images:** Placeholder blocks — styled dark rectangles with descriptive labels like "Facility Render — Coming Soon"
- **No stock photos.** Better to have clean placeholders than generic stock.

---

## Content Notes

- All copy should be written in present-future tense ("BPL will feature...", "The facility is designed to...") since the facility is pre-opening
- Avoid over-promising on features that aren't confirmed — use "designed to support" language for aspirational elements
- Pricing shown on Programs page should include a note: "Pricing subject to change. Final rates will be confirmed before opening."
- Square footage is 17,682 sq ft throughout
- The facility is in east Bend, Oregon in an existing warehouse

---

## Files Provided for Reference
- `BPL_Business_Plan_Investor_Ready__Draft_.docx` — Full business plan
- `Rev__Expenses__BPL_Ownership.pdf` — Financial projections spreadsheet
- `BPL_Logos.png` — Logo file
- Original website copy deck (from ChatGPT session) — used as starting point, modified significantly in this overview

---

## What This Document Does NOT Cover
- Domain and hosting setup
- Email service provider integration (Beehiiv for newsletter)
- Acuity booking system integration
- Instagram feed embed
- SEO metadata (can be added later)
- Analytics setup

These are all post-build items that can be layered on.
