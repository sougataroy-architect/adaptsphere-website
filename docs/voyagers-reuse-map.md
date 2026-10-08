# Exact Voyagers reuse inventory

Byte-for-byte copied: `VoyagersBeyond/app/src/lib/utils.ts` → `AdaptSphere-2026-redesign/app/src/lib/utils.ts`.

The following are design/architecture adaptations implemented afresh, not file copies:

| Voyagers reference | AdaptSphere implementation |
| --- | --- |
| app/src/components/site/header.tsx and mobile-menu.tsx | app/src/components/Header.tsx |
| app/src/components/site/footer.tsx | app/src/components/Footer.tsx |
| app/src/components/editorial/page-header.tsx, breadcrumbs.tsx, layout.tsx | app/src/components/UI.tsx and app/src/app/insights/[slug]/page.tsx |
| app/src/components/content/reading-toc.tsx | native details TOC in app/src/app/insights/[slug]/page.tsx |
| app/src/components/content/content-card.tsx and question-card.tsx | app/src/components/Cards.tsx |
| app/src/components/site/json-ld.tsx | app/src/components/JsonLd.tsx |
| app/src/app/globals.css | app/src/app/globals.css: new tokens; similar constrained editorial rhythm |

All 50 original component files below were deliberately not copied as files. Selected concepts were adapted as stated above; forms, tracking, maps, search, embedded video, editorial framework interactions and travel assets are outside this build. No dependency or environment configuration was copied.

- `app/src/components/analytics/tracked-link.tsx`
- `app/src/components/content/content-card.tsx`
- `app/src/components/content/continue-path.tsx`
- `app/src/components/content/distinction.tsx`
- `app/src/components/content/download-artifact.tsx`
- `app/src/components/content/evidence-ledger.tsx`
- `app/src/components/content/figure.tsx`
- `app/src/components/content/framework-open-tracker.tsx`
- `app/src/components/content/framework-stepper.tsx`
- `app/src/components/content/framework-workbook.tsx`
- `app/src/components/content/motif-glyph.tsx`
- `app/src/components/content/print-button.tsx`
- `app/src/components/content/question-card.tsx`
- `app/src/components/content/reading-progress.tsx`
- `app/src/components/content/reading-toc.tsx`
- `app/src/components/content/related-questions.tsx`
- `app/src/components/content/scope-note.tsx`
- `app/src/components/content/source-card.tsx`
- `app/src/components/content/territory-illustration.tsx`
- `app/src/components/content/theme-card.tsx`
- `app/src/components/content/version-history.tsx`
- `app/src/components/content/video-pending.tsx`
- `app/src/components/content/youtube-facade.tsx`
- `app/src/components/editorial/breadcrumbs.tsx`
- `app/src/components/editorial/callout.tsx`
- `app/src/components/editorial/highlight.tsx`
- `app/src/components/editorial/layout.tsx`
- `app/src/components/editorial/page-header.tsx`
- `app/src/components/editorial/prose.tsx`
- `app/src/components/home/hero-chooser.tsx`
- `app/src/components/library/library-filters.tsx`
- `app/src/components/map/voyager-map-client.tsx`
- `app/src/components/map/voyager-map.tsx`
- `app/src/components/search/search-command.tsx`
- `app/src/components/search/search-form.tsx`
- `app/src/components/site/analytics-scripts.tsx`
- `app/src/components/site/footer.tsx`
- `app/src/components/site/header.tsx`
- `app/src/components/site/json-ld.tsx`
- `app/src/components/site/legal-blocks.tsx`
- `app/src/components/site/mobile-menu.tsx`
- `app/src/components/site/newsletter-form.tsx`
- `app/src/components/site/newsletter-section.tsx`
- `app/src/components/site/orientation-links.tsx`
- `app/src/components/site/portrait.tsx`
- `app/src/components/site/scroll-reveal.tsx`
- `app/src/components/site/suggest-topic-form.tsx`
- `app/src/components/site/wordmark.tsx`
- `app/src/components/ui/button.tsx`
- `app/src/components/ui/dialog.tsx`
