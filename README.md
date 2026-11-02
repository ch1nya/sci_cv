# sci-cv

A one-page academic business card for Ivan Chiniakin — PhD applicant, 2027 intake.
Static, minimal, designed to be read in ~30 seconds.

## Preview

- Dev server: `npm run dev`
- Production preview: `npm run build && npm run preview`

## Project structure

```
sci_cv/
├── public/
│   └── .nojekyll          # GitHub Pages: disable Jekyll processing
├── src/
│   ├── main.tsx           # Entry point
│   ├── App.tsx            # Root component
│   ├── content.ts         # All copy + links (source of truth)
│   ├── styles/
│   │   └── global.css     # Design system (CSS variables, tokens)
│   ├── components/        # Dumb presentational components
│   └── test-setup.ts      # Vitest + jest-dom setup
├── .github/workflows/
│   └── deploy.yml         # CI/CD: build + deploy to GitHub Pages
├── index.html
├── vite.config.ts
└── tsconfig.json
```

## Content editing

All copy, links, avatar, CV, and proposal are in `src/content.ts`.
Components are dumb and render from it. Unknown values are `null` — the UI
hides those elements completely. No `TODO`, `null`, `undefined` or `lorem`
should appear in production.

## Adding assets

- **Avatar**: `public/portrait.jpg` (square, 1px border, radius 4px, max 160px)
- **CV**: `public/cv.pdf`
- **Proposal**: `public/proposal.pdf`

Add the file and set the corresponding property to a string path in
`content.ts`. If the file is absent or the property is `null`, the UI hides
the element.

## Deployment

1. Push to `main` branch — GitHub Actions builds and deploys automatically.
2. GitHub repo Settings → Pages → Source: "GitHub Actions".
3. Custom domain: add `public/CNAME` (requires setting `CNAME` in `content.ts`).

## Design tokens

- Warm near-monochrome palette
- Accent colour `#034CFF` (links, focus rings, primary button)
- IBM Plex Mono for headings, body, code
- 1px borders, radius 4px (max 6px), no shadows
- 4px base spacing scale: 4/8/12/16/24/32/48/64/96
- Material: flat, 1px borders, radius 4px (max 6px), no shadows, no gradients

## Quality gates

- `npm run lint` — ESLint with zero warnings
- `npm run build` — production build succeeds
- `npm test` — Vitest all pass (5 tests)
- `npm run typecheck` — `tsc --noEmit` clean
- Transfer budget: HTML + JS + CSS ≤ 150 kB gzipped
- Screenshots at 375, 768, 1280 px in light and dark saved to `docs/screenshots/`
