# FSD Coursework

This repository contains the full-stack development coursework and practice projects.

## Projects

- `book store/` - Vanilla JavaScript book store example.
- `Book-CDN-App/` - Book app using CDN-based dependencies.
- `Book_npm_app/` - Book app using npm dependencies.
- `FSD(CSE-23)/` - JavaScript asynchronous examples and a React/Vite example.
- `dom-example/` - DOM manipulation examples.
- `shopping_app/client/` - Morrow responsive shopping storefront built with React and Vite.

## Running the React apps

From the relevant app directory, install dependencies and start the development server:

```powershell
npm install
npm run dev
```

The shopping app is configured for LAN access on port `5858`:

```powershell
cd shopping_app/client
npm install
npm run dev
```

Then open `http://localhost:5858/`. To open it from another device on the same network, use the host PC's LAN IP with port `5858`.

Do not commit `node_modules`, build output, local environment files, or secrets. The root `.gitignore` covers these files across all nested projects.
