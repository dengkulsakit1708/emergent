# PT Sonar Nusantara Utama — Corporate Website PRD

## Original Problem Statement
Premium corporate website for PT Sonar Nusantara Utama, positioning the company as an integrated **Marine & Geospatial Technology Solutions** company with three pillars: Technology Distribution, Marine Project Support, Digital Products. Tagline: *"Integrated Marine & Geospatial Technology Solutions"*. Target audience: international principals, EPC contractors, oil & gas, mining, BUMN, government, offshore/marine contractors.

## User Choices (from initial clarification)
- Scope: **B** — Core pages first (Home, About, 3 Business Unit pages, Brands, Contact)
- Contact handling: **C** — Store in MongoDB only (admin panel later)
- Product images: **C** — Use representational Unsplash imagery + clean typographic brand cards (real brand scraping not feasible due to copyright; using neutral, premium imagery instead, as instructed by design guidelines)
- Language: **C** — Bilingual EN/ID toggle (localStorage persisted)
- Backend functionality: **D** — Static-feel + contact form only

## User Personas
1. **EPC Contractor / Project Manager** — needs equipment rental, offshore personnel, project coordination
2. **Principal / Brand Representative** — evaluates Sonar as partner; needs portfolio credibility
3. **Oil & Gas / Mining / BUMN buyer** — needs marine technology distribution and project support
4. **Government / Geospatial buyer** — needs mobile mapping / aerial LiDAR / hydrography
5. **HR / Operations leader** — evaluates Digital Products subscription platform

## Core Requirements (static)
- Premium, navy + electric-blue corporate aesthetic (Outfit + Manrope typography, IBM Plex Mono accents)
- EN / ID language toggle (persistent)
- Sticky glassmorphism header with Business mega-menu
- Contact form → POST /api/contact → MongoDB

## Architecture
- **Backend**: FastAPI + Motor + MongoDB. Endpoints: `GET /api/`, `POST /api/contact`, `GET /api/contact`, plus pre-existing `/api/status`.
- **Frontend**: React 19 + React Router 7 + Tailwind + shadcn/ui (where needed) + lucide-react icons. Bilingual via `LanguageContext` + `useT()` helper (English / Indonesian inline pairs).
- **Routes**: `/`, `/about`, `/business`, `/business/technology-distribution`, `/business/marine-project-support`, `/business/digital-products`, `/brands`, `/contact`

## What's Been Implemented (2026-06-30)
- ✅ **Home** — Hero (offshore vessel image + bathymetry overlay), Three Business Units bento cards, Why Sonar (6 reasons), Featured Technologies brand grid, Industries Served (8 icons + 2 featured sector tiles), final CTA
- ✅ **About** — Company Overview, Vision (navy card), Mission (4 bullets), What We Do (3 unit cards), Commitment (3 pillars), Leadership placeholder
- ✅ **Business overview** — alternating 3-section layout (one per unit) with images & CTAs
- ✅ **Technology Distribution** — 3 segments (Ground, Aerial, Marine) with brand pills + solution chips, neutral wording disclaimer
- ✅ **Marine Project Support** — 8 capabilities grid + 8-step Project Lifecycle timeline (Planning → Demobilization) + scope-of-role disclaimer
- ✅ **Digital Products** — Offshore Workforce & Field Operations Platform hero, 5 core modules, 3 subscription tiers (Starter / Professional (highlighted) / Enterprise)
- ✅ **Brands & Products** — 3 groups (Ground / Aerial / Marine) with brand cards using neutral wording for Uni-Series
- ✅ **Contact** — Multi-field form with inquiry-type dropdown, GET/POST to /api/contact, validation states
- ✅ EN/ID toggle, mobile menu with expandable Business submenu, sticky glass header
- ✅ Backend `/api/contact` endpoint (POST + GET) with MongoDB persistence
- ✅ Tested end-to-end via testing_agent_v3 (backend 6/6 pytest, frontend ~95% pass after design fix)

## Deferred / Prioritized Backlog
- **P1** — Solutions page (`/solutions`) with 7 customer-need-driven subpages
- **P1** — Marine Technologies detail page (`/marine-technologies`) — deeper product taxonomy
- **P1** — Industries page with per-industry detail (Oil & Gas, Offshore Energy, etc.)
- **P2** — Projects / Case Studies page with placeholder cards
- **P2** — News / Blog CMS
- **P2** — Admin panel for contact inquiry inbox
- **P2** — Email notification on form submit (Resend/SendGrid)
- **P3** — Real principal logos/images once licensing is confirmed
- **P3** — Newsletter subscription, sitemap.xml, robots.txt, structured data (JSON-LD)

## Next Tasks (suggested order)
1. Add Solutions page + 7 solution subpages
2. Add Industries detail page
3. Add Marine Technologies detail page
4. Add Projects / Case Studies placeholders
5. Add admin inbox + email notification for contact form
6. Wire real principal logos once permissions are in place
