# yuwei97910.github.io

Personal website of Yuwei Lai — built with React, Vite, and Material UI, deployed to GitHub Pages.

## Editing content

All personal content lives in data files — pages render whatever is in them:

| What | Where |
| --- | --- |
| Name, bio, skills, social links | `src/data/profile.js` |
| Project cards | `src/data/projects.js` |
| Work experience & education | `src/data/experience.js` |
| Blog posts | `src/content/posts/*.md` (filename = URL slug) |
| Resume PDF | Disabled for public site; set `resumePdf` in `src/data/profile.js` only when using a public-safe PDF |

## Development

```bash
npm install
npm run dev        # http://localhost:5173
```

Or with Docker:

```bash
docker compose up dev                       # hot-reload dev server on :5173
docker compose --profile preview up preview # production bundle via nginx on :8080
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages.

One-time setup: in the repo settings on GitHub, set **Settings → Pages → Source** to **GitHub Actions**.

Deep links (e.g. `/blog/hello-world`) work on Pages via the `public/404.html` redirect trick from [spa-github-pages](https://github.com/rafgraph/spa-github-pages).

## Structure

```
├── .github/workflows/deploy.yml   # CI: build + deploy to Pages
├── public/                        # static assets (favicon, 404.html, images)
├── src/
│   ├── data/                      # ← edit these to update content
│   ├── content/posts/             # ← blog posts in markdown
│   ├── components/                # shared UI (cards, sequence views, layout)
│   ├── pages/                     # one component per route
│   ├── lib/posts.js               # markdown/frontmatter loader
│   └── theme.js                   # MUI theme (light/dark)
├── Dockerfile                     # dev + preview stages
└── docker-compose.yml
```

The previous Create React App version is preserved in `yuwei-app/` and can be deleted once this version is confirmed working.
