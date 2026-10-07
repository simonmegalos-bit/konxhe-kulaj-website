# Konxhe Kulaj Website

## Purpose
Personal academic profile website for Dr. Konxhe Kulaj, PhD (postdoctoral
researcher, Cancer Center Amsterdam / Amsterdam UMC). Live at https://konxhekulaj.com.
Owner is not a developer: explain changes in plain English, small reversible steps.

## Structure
- index.html: main profile (About, Research, Publications, Experience, Contact)
- personal.html + personal.css: photo/personal page
- style.css, main.js: shared styling and a small script (site is light theme only)
- *.jpg / *.png: portraits and photos
Static site: no framework, no build step, no package manager, no tests.

## Local preview
Open index.html in a browser, or run `python3 -m http.server 8000` in the
project folder and visit http://localhost:8000.

## Deployment
- GitHub: simonmegalos-bit/konxhe-kulaj-website, branch main.
- Railway project "melodious-perception", service "konxhe-kulaj-website",
  environment "production", custom domain konxhekulaj.com.
- Pushing or merging to `main` DEPLOYS TO PRODUCTION automatically.
- Work happens on a separate branch. Merge to main only with explicit owner approval.
- No environment variables or secrets exist. Never add secrets to the repo.
- A second, unused service with the same name exists in Railway project
  "chic-bravery" (no domain). Do not modify or delete without owner approval.

## Rollback
Railway dashboard > service > Deployments > Rollback to the previous
deployment, or `git revert` the commit on main. Last known good: 095e275.

## Approval rules
Ask the owner first, stating action, target, effect, cost/risk and how to undo, before:
installing anything; committing or pushing; merging to main or anything
that triggers a deploy; changing Railway settings, domains or DNS;
deleting anything; adding tracking, analytics, cookies, forms or any data collection.
Reading and inspecting needs no approval.

## Legal (Netherlands/EU)
Currently no cookies, tracking or forms. Any change that collects personal data
needs a privacy review (AVG/GDPR) before building. Fonts load from Google
Fonts and Fontshare (visitor IPs sent to them); self-hosting is recommended.

## Content and design conventions
Academic, restrained "quiet luxury" look: gold accents, Cormorant Garamond
headings, Switzer body text, JetBrains Mono labels. Keep facts (publications,
citation counts, affiliations) accurate; do not invent content.

## Known issues / outstanding work
- Live-site check pending (could not be fetched from this environment).
- Fonts not self-hosted; photos are uncompressed (~3.3 MB total).
- No contact email or form on the site.
- Duplicate unused Railway service in "chic-bravery".
- Outstanding items from the Perplexity project: to be added by owner.
