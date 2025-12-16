# Welcome to your Lovable project

## Project info

**URL**: https://github.com/CursedOn3/Final-portfolio.git

# Final-portfolio

A Vite + React + TypeScript portfolio built with Tailwind CSS and shadcn-ui components.

## Quick start

Prerequisites: Node.js (>=18) and npm.

```bash
# install dependencies
npm install

# run development server
npm run dev

# build for production
npm run build

# preview production build
npm run preview

# lint project
npm run lint
```

## Available scripts

- `dev`: Starts Vite dev server
- `build`: Builds production assets
- `build:dev`: Builds with development mode
- `preview`: Serves the production build locally
- `lint`: Runs ESLint across the repo

## Tech stack

- Vite
- React 18 (TypeScript)
- Tailwind CSS
- shadcn-ui
- Radix UI (individual packages)

## Notes about Radix UI

This project lists many `@radix-ui/*` packages in `package.json` and they are installed under `node_modules/@radix-ui`.
If you see an import error for a Radix package, run `npm install` and restart your editor/TypeScript server. Example check:

```bash
npm ls @radix-ui/react-dialog
```

## Project structure

- `src/` — application source
- `src/components/` — React components
- `public/` — static assets

## Contributing

Make changes on a branch, open a pull request, and describe what you changed.

## License

See the `LICENSE` file in the repository.
