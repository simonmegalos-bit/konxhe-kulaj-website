# Konxhe Kulaj Website

## Purpose
Personal academic profile website for Dr. Konxhe Kulaj, PhD (postdoctoral
researcher, Cancer Center Amsterdam / Amsterdam UMC). Live at https://konxhekulaj.com.
Owner (Simon, GitHub: simonmegalos-bit) is not a developer: explain changes in
plain English, small reversible steps. Background and history: docs/HANDOVER.md.

## Structure
- index.html: main profile (About, Research, Publications, Experience, Contact)
- personal.html + personal.css: personal page (photo mosaic, interests); personal.css loads after style.css
- style.css (~1050 lines): shared design system and main-page styles
- main.js: small script (forces light theme, mobile nav, scroll behaviour)
- fonts/: self-hosted Cormorant Garamond + JetBrains Mono (woff2) and fonts.css
- *.jpg / *.png: portraits and photos (already compressed)
- robots.txt, sitemap.xml, favicon.svg, apple-touch-icon.png, og-image.png: search and link-sharing basics
  (add new pages to sitemap.xml; og-image.png is a text-only card)
- .claude/settings.json: allow-rule for `git push origin HEAD:main` (see Approval rules)
Static site: no framework, no build step, no package manager, no tests.
Nav order: About, Research, Publications, Experience, Personal (gold accent), Contact.
Desktop and mobile menus are separate lists in index.html: keep both in sync.

## Local preview
Run `python3 -m http.server 8000` in the project folder and visit http://localhost:8000.
Check desktop (1280px or wider) and mobile (375px). The personal-page photo mosaic
and the mobile nav are the most fragile parts.

## Deployment
- GitHub: simonmegalos-bit/konxhe-kulaj-website, branch main.
- Railway project "melodious-perception", service "konxhe-kulaj-website",
  environment "production", custom domain konxhekulaj.com
  (also konxhe-kulaj-website-production.up.railway.app).
- Pushing or merging to `main` DEPLOYS TO PRODUCTION automatically.
- Work happens on a separate branch (e.g. claude/<short-description>). Merge to main
  only with explicit owner approval.
- No environment variables or secrets exist. Never add secrets to the repo.
- The repo root is served as the website, so every committed file (including this
  one) may be publicly readable. Never write credentials or private details in it.
- Duplicate unused service with the same name in Railway project "chic-bravery"
  (no domain, no traffic). Owner approved deleting it on 7 Oct 2026. Railway's tool timed
  out repeatedly; the deletion is queued but not applied. Do not touch the
  "melodious-perception" one.

## Working procedure
1. Pull latest main, create a branch.
2. Make the change, preview locally (desktop and mobile).
3. Show the owner what changed in plain English; open a PR.
4. Merge to main only with explicit approval (this deploys).
5. Confirm the deploy shows SUCCESS in Railway and load https://konxhekulaj.com.

## Rollback
Railway dashboard > melodious-perception > service > Deployments > Rollback, or
`git revert` the commit on main. Newest known-good commit: a5c0902
(previous good: 095e275).

## Approval rules
Ask the owner first, stating action, target, effect, cost/risk and how to undo, before:
installing anything; committing or pushing; merging to main or anything
that triggers a deploy; changing Railway settings, domains or DNS;
deleting anything; adding tracking, analytics, cookies, forms or any data collection.
Reading and inspecting needs no approval. The allow-rule in .claude/settings.json only
removes the system prompt; it does not remove the need to ask the owner first.

## Legal (Netherlands/EU)
No cookies, tracking or forms. Any change that collects personal data (a contact
form, newsletter, analytics) needs an AVG/GDPR privacy review before building.
Switzer still loads from Fontshare, so visitor IPs still reach a third party until it
is self-hosted (check Fontshare's licence first).

## Design and content conventions
- Academic, restrained "quiet luxury". Palette: parchment background #f9f6ef,
  charcoal text #1c1914, brushed-gold accent #9a7b3f.
- Type: Cormorant Garamond (headings), Switzer (body), JetBrains Mono (labels).
- Light theme only. Dark mode was removed on purpose at the owner's request: do not
  add a theme toggle. Leftovers (safe to remove in a cleanup): `.theme-toggle { display: none; }`
  in style.css and the data-theme="light" line in main.js.
- Logo is an inline SVG "K" monogram in the header.
- Never invent content. Check publications and citation counts against Google Scholar
  (user rQQsSL4AAAAJ) and ORCID (0000-0002-2355-2583) before editing.

## Known issues / outstanding work
- Four visible placeholders on the live site, need real content from the owner
  (index.html ~lines 431-433 "[Add paper title]", "[Add book title]",
  "[Add current question]"; ~line 479 "[Add CV link here]", link is "#"; the hero CV button
  points to #contact). If no content is supplied, hide them instead.
- Switzer still loads from Fontshare (both HTML files); needs the woff2 files from the owner.
- Duplicate Railway service in "chic-bravery" (deletion approved, not yet done).
- No contact email or form (a form needs a privacy review first).
- Publications and citation counts are hand-maintained and can go stale. Total citations set to 6,100 on 7 Oct 2026
  at the owner's instruction (figure from Dr. Kulaj's CV). Google Scholar showed about 4,298 in a web-search summary, and the four
  per-paper counts on the page (~103, ~3,764, ~38, ~334) still sum to 4,239. Owner to confirm the source of 6,100.
- Dead dark-mode leftovers (see above).
