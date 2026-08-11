# SHREE ENTERPRISE — Corporate Website (PRD)

## Problem Statement
Premium, award-worthy corporate website for SHREE ENTERPRISE, a construction & infrastructure (civil/EPC) company in Jalpaiguri, West Bengal — "Building With Trust · Since 2010". All content sourced strictly from the official company profile PDF; nothing fabricated.

## Architecture
- Frontend: React 19 + React Router 7, Tailwind (custom dark industrial theme, Cabinet Grotesk + Manrope), framer-motion (scroll reveals, kinetic hero, parallax, counters), lenis (smooth scroll), sonner (toasts).
- Backend: FastAPI + MongoDB. `POST /api/enquiry`, `GET /api/enquiry`.
- Content database: `/app/frontend/src/data/company.js` (single source of truth, verbatim from PDF).

## User Personas
- Corporate / government procurement teams evaluating a contractor.
- Private promoters seeking a residential builder.
- Prospective employees / vendors.

## Core Requirements (static)
- Evidence-driven storytelling from real PDF data (projects, values, dates, team, equipment, credentials).
- No fabricated stats/certifications. Missing data marked "To be updated".
- Premium motion, mobile-first, SEO-conscious.

## Implemented (2026-06)
- Kinetic hero with masked line-by-line reveal + scroll indicator + parallax.
- Proof metrics strip (count-up, linked to evidence pages).
- About (story, mission manifesto, philosophy, track record), Capabilities (9 sectors, alternating editorial), Projects portfolio (sector/status/location filters, 24 curated projects), Project case-study pages (facts, scope breakdown, gallery lightbox, related), People (management/executive/engineers/office/supervisors), Equipment + scaffolding + quality, Credentials cards, Contact (B2B enquiry form → MongoDB, click-to-call, WhatsApp, email).
- Editorial marquee, stylised North-Bengal project map, premium footer with giant typographic logo.
- Backend enquiry API verified (curl) + frontend flows verified (screenshots).

## Backlog
- P1: Admin/CMS to edit projects/team/equipment/news (deferred per user — "CMS later").
- P1: Email notifications on enquiry (Emergent Resend).
- P2: Careers page, News/Insights, Download Profile lead capture, before/after slider, global search, Schema.org structured data, sitemap/robots.

## Next Tasks
- Add CMS/admin when user is ready; wire enquiry email alerts; add Careers/News + downloadable profile.

## Credentials
- No auth in this version (public site only). Contact enquiries stored in MongoDB `enquiries` collection.
