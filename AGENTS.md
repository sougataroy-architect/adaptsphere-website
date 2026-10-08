# Repository Instructions

This repository is the AdaptSphere website. Keep changes focused, typed, accessible, and easy to extend.

## Project Shape

- The website lives in `app/`.
- Routes use the Next.js app router under `app/src/app`.
- Reusable UI belongs in `app/src/components`.
- Local content belongs in `app/src/content`.
- Shared utilities belong in `app/src/lib`.

## Content Rules

- Use local TypeScript or Markdown content.
- Do not add Sanity, CMS fetch logic, Sanity environment variables, schemas, or Sanity dependencies.
- Keep copy practical, senior, and specific to Microsoft AI implementation, governance, security, and automation.
- Do not make unsupported claims, fake metrics, or exaggerated outcomes.
- Superpowers is available in this Codex environment as a plugin/skill set. It is not a project npm dependency and does not need to be installed into this repository.

## Quality Bar

- Run `npm run lint` and `npm run build` from `app/` before handoff.
- Use semantic HTML and accessible labels.
- Keep contrast strong and responsive layouts stable.
- Prefer small reusable components over one-off page markup when a pattern repeats.

## Website messaging

For website copy changes, read `.agents/product-marketing.md` first and use `.agents/skills/copywriting/SKILL.md`. Explain the governed AI implementation service in plain language before using FDE terminology. Microsoft is the primary specialization, not the limit of the practice. Keep personal authorship and personal research links off the public website.
