# AdaptSphere website

Next.js replacement for AdaptSphere NextGen AI, LLC's WordPress site at https://adaptsphere.ai. The website lives in `app/`; content is local TypeScript and Markdown with no CMS or required secrets.

## Development

Use Node.js 22. From `app/`:

```sh
npm ci
npm run dev
```

Open http://localhost:3215.

## Check and build

```sh
npm run lint
npm run typecheck
npm test
npm run build
npm start
```

The production start script honors the hosting provider's PORT. GitHub Actions runs the checks on pushes to main and pull requests.

## GitHub and Hostinger

Follow [the deployment guide](docs/DEPLOYMENT_HOSTINGER.md) to create an empty private GitHub repository, push main, and deploy with application root `app`. This matches the Hostinger Node.js pattern used by the other sites. See [migration plan](docs/migration-plan.md) and [redirect inventory](docs/redirect-inventory.md) before replacing WordPress.

Historical source backups and browser QA output stay local and are excluded from Git. Keep separate backups before domain cutover. Contact links use info@adaptsphere.ai; newsletter integration is not configured.
