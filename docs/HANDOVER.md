# Handover record: konxhekulaj.com

Prepared 7 October 2026 when Claude Code took over day-to-day management from
Perplexity Computer. `CLAUDE.md` holds the standing rules; this file holds the history
and context behind them. It contains no credentials by design.

## History
1. Original build (before July 2026): designed and built with Perplexity Computer and
   deployed to Railway through GitHub. That original working session was later lost.
2. 7 July 2026: the project was reconstructed by pulling every file and image from the
   live site.
3. 7 July 2026: dark mode removed at the owner's request; a fixed light theme replaced it.
4. 7 July 2026: the personal page was rebuilt (personal.css and all 8 photos); pushed to
   production as commit 095e275 via Railway's GitHub auto-deploy.
5. 7 October 2026 (Claude Code):
   - Added CLAUDE.md (f2d2e0f).
   - Self-hosted Cormorant Garamond and JetBrains Mono, compressed photos from about
     3.1 MB to 1.9 MB (505d938).
   - Added the push allow-rule (cff915c). All merged to main as PR #1 (a5c0902).
   - Found a duplicate Railway service in project "chic-bravery"; the owner approved its
     deletion, which is still to be completed.

## Stack and hosting
Plain static HTML/CSS/JS, no build step. Railway (Railpack builder) deploys from the
`main` branch of the GitHub repo. No environment variables.

## Open items, in priority order
1. Fill the four content placeholders (see CLAUDE.md) once the owner supplies content.
2. Finish deleting the duplicate Railway service in "chic-bravery".
3. Self-host Switzer and remove the Fontshare link (owner supplies the woff2 files).
4. Remove dead dark-mode leftovers.
5. Add basic search/sharing basics: sitemap.xml, robots.txt, Open Graph image, favicon.
6. Consider a contact route (email address or form; a form needs AVG/GDPR review).

## Owner-side housekeeping (tracked outside this repo)
Old access credentials from the Perplexity period should be reviewed and revoked by the
owner. Claude Code needs none of them. Details are deliberately not recorded here.
