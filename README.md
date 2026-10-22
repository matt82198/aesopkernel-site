# aesopkernel-site

The one-page public site for the Aesop Kernel, for aesopkernel.ai. Plain static files: no framework, no build step, no analytics, no CDN scripts.

## Deploy on Cloudflare Pages

| Setting | Value |
|---|---|
| Framework preset | None |
| Build command | (leave empty) |
| Build output directory | `/` |
| Production branch | `main` |

The site is served from the repository root. `_headers` sets `Cache-Control: public, max-age=3600` and `X-Content-Type-Options: nosniff` for every path. `.nojekyll` is present so that no Jekyll processing runs on static hosts.

## Files

- `index.html`: the page (hero, harness vs kernel, receipts loop, primitives, provenance, footer)
- `styles.css`: the one stylesheet
- `script.js`: reveal-on-scroll and the copy-install button
- `favicon.svg`: the tab icon
- `_headers`, `.nojekyll`: Cloudflare Pages configuration
- `SOURCES.md`: every factual sentence on the page, mapped to the source file and line it comes from

## Facts

Every factual sentence on the page is listed in `SOURCES.md`. The facts come from the `v0.11.0` tag of the public `matt82198/aesop` repository (README, CHANGELOG, `docs/PROVENANCE.md`, `LANE-CONTRACT.md`, `package.json`) and from the npm registry. Nothing on the page is an estimate.
