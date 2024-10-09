# BELAIR Magazine Headless Client with Nuxt 3

This is a version of BELAIR Magazine created in Nuxt3 using Vue, TailwindCSS, and WordPress + GraphQL as a headless CMS backend. This is a proof of concept / ongoing work so there are many features not ready for production.

## Check Demo:

[Live Demo](https://headless-belair.vguria.com/)

## Features
```
🟢 SSR compatible
🟢 Light/dark mode styles
🟢 Styling
🟢 Homepage
  🟢 Routing
  🟢 Layout (Header, footer, main content)
  🟢 Sections and components
  🟢 API data retrieval
🟠 Route [category/post]
  🟢 Routing
  🟢 Data retrieval
  🟢 Data sanitization
  🔴 Sidebar
🟠 Route [category]
  🟢 Routing
  🟢 Data retrieval
  🟢 Data sanitization
  🔴 Sidebar
🟠 Off-canvas navigation
  🟢 Basic design and state
  🔴 Close on keyboard input
  🟢 Close when clicking out of element
🟠 Voting favorites
  🟢 Get votes
  🟢 Frontend voting
  🔴 Backend
  🔴 Local Storage Persistance
```
## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
