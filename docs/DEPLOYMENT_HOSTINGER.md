# Deploy AdaptSphere to Hostinger

This repository follows the app-directory deployment pattern used by sougataroy.com and voyagersbeyond.com. Keep the existing WordPress installation until the staged replacement has passed review.

## GitHub

Create an empty private repository named `adaptsphere-website` in your GitHub account. Do not initialize a README, license, or gitignore; these already exist locally. From this repository root, add the HTTPS remote shown by GitHub and push:

```powershell
git remote add origin https://github.com/YOUR_ACCOUNT/adaptsphere-website.git
git push -u origin main
```

GitHub Actions runs dependency installation, lint, TypeScript checks, content tests, and the production build. Local build output, QA evidence, environment files, and the historical WordPress/source preservation directory are excluded. Keep the preservation directory backed up separately; it is not a complete WordPress database backup.

## Hostinger settings

Create a separate Node.js web app and import the GitHub repository. Authorize access to this private repository when prompted.

| Setting | Value |
| --- | --- |
| Branch | `main` |
| Application root | `app` |
| Framework | Next.js |
| Node.js | 22.x |
| Install | `npm ci` |
| Build | `npm run build` (or `npm ci && npm run build` if there is only one build field) |
| Start | `npm start` |
| Build output, if requested | `.next` |

Hostinger supplies `PORT`; the existing start script respects it. No environment variables or CMS credentials are needed for launch. Contact actions open an email to info@adaptsphere.ai; there is no newsletter subscription backend. Fonts require internet access during the build.

Official setup and supported plans: https://www.hostinger.com/support/how-to-deploy-a-nodejs-website-in-hostinger/. Confirm that the current account supports Node.js Web Apps before migrating. This Next.js application must run as a Node.js app, not as files copied into WordPress public_html.

## Staging and cutover

1. Export and download a complete WordPress backup: database, uploads, plugins, themes, and files. Record the current domain/application mapping and DNS records, especially MX, SPF, DKIM, and DMARC. Confirm a restore is possible.
2. Deploy the new app on a temporary Hostinger URL. Restrict access or enable hosting-level noindex for staging. Production metadata deliberately uses https://adaptsphere.ai; do not submit the staging URL to search engines.
3. Check home, all seven services, menu keyboard/mobile behavior, contact email, legal pages, sitemap.xml, robots.txt, and share images. Verify old WordPress URLs against docs/redirect-inventory.md. Review Search Console/access logs for URLs absent from the public sitemap inventory.
4. After staging approval, connect adaptsphere.ai and its www alias to the new app, enable HTTPS, and choose https://adaptsphere.ai as the canonical domain. Preserve all email records. Verify www and HTTP redirect to the canonical HTTPS domain using Hostinger/domain settings.
5. Remove staging-only indexing restrictions from production. Submit https://adaptsphere.ai/sitemap.xml to Search Console and monitor failed routes and redirects.

Rollback: restore the previous WordPress domain/application mapping; restore its backup if needed. Verify home, contact, key old URLs, and email. Keep the original WordPress backup until the new site is stable. For later Node app releases, redeploy the previous working commit.

## Local verification

From app/ run npm ci, npm run lint, npm run typecheck, npm test, npm run build, then npm start. Local production preview is http://localhost:3215; a hosting PORT overrides this default.
