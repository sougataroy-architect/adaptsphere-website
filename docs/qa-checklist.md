# Verified QA — October 8, 2026

- npm run lint: passed (final run below).
- npm run typecheck: passed.
- npm test: two meaningful local content integrity checks passed.
- npm run build: passed; production routes prerendered.
- Browser: 20 content routes × 1440, 768, 390 and 320px = 80 page/viewport checks.
- All returned 200; one H1, description and canonical each; no horizontal overflow.
- Axe WCAG A/AA tags: no violations detected on these 80 checks.
- Internal navigation links: no HTTP errors. Runtime page errors: zero.
- Missing route: 404. Sitemap and robots: 200 with production domain.
- Keyboard: skip link reaches main; mobile dialog contains focus; Escape restores trigger focus.
- Reduced motion: smooth scrolling disabled.

Browser report: app/output/playwright/qa-results.json. Screenshots: home-1440.png, home-768.png, home-390.png. Automated checks are not a complete WCAG conformance audit. No external mail was sent; contact is a verified mailto link, not a server form.

Remaining before production: Hostinger Node plan and staging deployment, real WordPress database/files backup and restore, complete old URL inventory/redirects, email DNS preservation, hosting/email privacy details and company review of legal copy. Full script CSP hardening is documented separately.

Final migration smoke: all 20 actual WordPress sitemap URLs returned 200 or a deliberate 308 to a working page; privacy, terms, sitemap, robots and social image returned 200. See app/output/playwright/migration-smoke.json. Final lint completed with zero warnings. Final optimized build passed after redirect and legal copy changes.

Interactive pass: lint, TypeScript-in-build, production build and two content tests passed. Browser-tested all seven recommendation outcomes; disabled Continue until a choice, preserved selections on Back, cleared selections on Start again, native radio ArrowDown operation, result heading focus and scroll position below the sticky header. Desktop and 390px phone checked without horizontal overflow; architecture identity/auth/tool/evidence panels verified, including Enter activation. Browser error/warning logs empty. All seven Service schemas and answer sections, plus all four control explanations, confirmed in response HTML by scripts/seo-interactive-smoke.mjs. The actual 20 WordPress URL migrations and five endpoints passed again. These interactive checks supplement, rather than rerun, the earlier automated axe audit.
Navigation update: full desktop links stay visible at 900px and above; mobile dialog below 900px. Tested 1440, 1280, 1100, 1024, 960, 900, 899, 768, and 390px: correct menu visibility, zero header overlap, zero horizontal overflow. Fractional browser widths covered by the width < 900px media query. Lint and production build passed.
Progressive navigation supersedes the earlier 900px all-or-nothing breakpoint. Items move individually into More: Insights below 1040px, How We Work below 940px, Microsoft AI below 840px, Agent Governance below 740px. Services stays until the full phone menu below 640px. Eighteen widths from 320 to 1440px tested with correct visible counts, no overlap or horizontal overflow. More contents checked at 1000, 900, 800, 700px and full mobile menu at 390px; all displaced links present, Escape closes, focus returns to trigger. Final lint and optimized build passed.
