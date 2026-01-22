# Copilot / AI Agent Instructions — Portfolio (static site)

This repository is a small, static portfolio website. The purpose of these instructions is to help an AI coding agent be immediately productive by explaining the repo "big picture", local workflows, and project-specific conventions.

## Big picture

- Structure: a single-page (or multi-page) static site built with plain HTML/CSS (no framework present).
- Typical responsibilities for contributors/agents: add/update content in `index.html`, add project pages under `projects/`, add assets (images/fonts) to `assets/`, and update styles in `styles/`.

## Key files & directories

- `index.html` — primary entry point (root). Keep it semantic and accessible.
- `projects/` — individual project pages or fragments. Use `projects/<slug>.html` or `projects/<slug>.md` if markdown support is added later.
- `assets/` — images, icons, fonts. Keep filenames lowercase and hyphen-separated, e.g. `assets/project-screenshot.jpg`.
- `styles/` — CSS files. Prefer `styles/main.css` as the default stylesheet.

## Local development & quick commands

- No build system is present. To preview locally:
  - Use a simple static server, e.g.: `python -m http.server 8000` in the repo root, then open `http://localhost:8000`.
  - Or use VS Code Live Server extension and open `index.html` with Live Server.

- If you add JS or other build tooling, update this file with the new commands and a short explanation.

## Conventions & patterns (project-specific)

- Keep the site plain and minimal. Prefer semantic HTML (`<header>`, `<main>`, `<section>`, `<footer>`).
- Styles:
  - Use a single `styles/main.css` when possible.
  - Use meaningful class names. Prefer hyphenated-lowercase (e.g., `.project-card`).
- Assets: store all images under `assets/` and reference them with relative paths from the file that uses them (e.g., `../assets/image.jpg` from `projects/` pages).
- Project pages: name files with the project slug (e.g., `projects/awesome-portfolio.html`) and include a canonical link back to `/`.

## Testing & QA

- There are no automated tests. If you introduce JS logic, add unit tests (Jest, Vitest, or similar) and describe how to run them in this file.
- Manual checks for any layout/content change:
  - Test on desktop and mobile widths (responsive).  
  - Verify images include `alt` attributes and no broken links.

## PR, commit, and change guidance for agents

- Keep changes small and focused (single feature or content update per PR).
- Include a brief description of what changed and why, and a screenshot for visual changes when possible.
- If introducing a new third-party dependency or build step, note rationale and add instructions (how to run, build, and why it’s necessary).

## Integration points & deployment notes

- No CI/CD or GitHub Pages configuration present. Recommended default deploy approach:
  - Use GitHub Pages (publish from the `main` branch or `gh-pages` branch). Document the chosen approach here if you add it.
  - If you add a GitHub Actions workflow to build/deploy, include a short `workflows/` README or update this file.

## What to avoid

- Don’t introduce heavy frameworks (React/Vue/etc.) without prior discussion — this repo is intentionally minimal.
- Don’t move existing content into deeply nested folders without explaining the migration and updating relative paths.

## Search tokens and example patterns for quick navigation

- `index.html`  
- `projects/*.html` or `projects/*.md`  
- `assets/*`  
- `styles/*.css`

---

If anything here is unclear or you want additional examples (e.g., a sample `index.html` scaffold or a GitHub Actions workflow for Pages), tell me which section to expand and I’ll iterate. ✅
