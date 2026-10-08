# Migration Plan

This replaces WordPress on Hostinger. Do not upload Next source into the WordPress PHP directory. First verify a Hostinger plan with Node.js Web Apps (Business/Cloud), current supported Node runtime and Next.js deployment support. Official guide: https://www.hostinger.com/support/how-to-deploy-a-nodejs-website-in-hostinger/. Deploy the app directory as the application root; install via npm ci, build via npm run build and start via npm start (honors PORT).

Before cutover: export WordPress database, uploads, themes/plugins and complete files; export URL inventory and redirect map; record domain, TLS and email DNS/MX records; verify backup restore. Create separate staging app, restrict/index-block staging, test routes, headers, metadata, email link and redirects. Review legal hosting details. Point production domain only after approved staging and backups. Preserve MX/email records. Monitor 404s and Search Console. Rollback: restore original domain/application mapping and WordPress backup, then verify home, contact, email and key old URLs. No WordPress admin access or production migration has been performed by this build.

Public WordPress sitemap inventory: 20 URLs covered by preserved routes or explicit redirects; see redirect-inventory.md. Access-log/Search Console URLs still need staging review.
