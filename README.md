# sci-cv

An academic profile and research page for Ivan Chiniakin, PhD applicant for the 2027 intake. Built with React, TypeScript, Vite, Tailwind CSS v4, and shadcn/ui-style components with Radix primitives.

## Development

```sh
npm install
npm run dev
```

Production build and preview:

```sh
npm run build
npm run preview
```

Quality checks:

```sh
npm run lint
npm run typecheck
npm test
```

## Content and assets

Copy and links are maintained in `src/content.ts`. Unknown optional data stays `null` and is not rendered. `CONTENT_TODO.md` tracks details and assets that still need owner input. Add optional files under `public/` and set their paths in the content file.

## UI setup

`components.json` configures the shadcn/ui component aliases and CSS-variable theming. The project uses the Tailwind v4 Vite plugin and the `@` alias for `src/`. The small set of UI components lives in `src/components/ui/`; Radix UI supplies accessible Accordion, Dialog/Sheet, and Tooltip primitives.

Theme variables are defined in `src/styles/global.css`. The page starts in light mode, follows the system preference before a user choice, and remembers explicit theme selection.

## Deployment

The Vite base path remains `/sci_cv/` for GitHub Pages (overridable through `VITE_BASE`). The existing GitHub Actions workflow deploys builds from `main`.
