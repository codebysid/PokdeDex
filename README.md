This is a PokeDex App created with Next.js and Pokemon API.

## Getting Started

First, clone the GitHub Repo

Second, install all dependencies

```bash
npm install
```

Third, run the development server:

```bash
npm run dev
```

Four, Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Architecture

```bash
├── jsconfig.json
├── next.config.js
├── package.json
├── package-lock.json
├── postcss.config.js
├── public
│   ├── next.svg
│   ├── pokeball.png
│   └── vercel.svg
├── README.md
├── src
│   ├── app
│   │   ├── actions.js
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.js
│   │   └── page.jsx
│   ├── components
│   │   ├── CustomImage.jsx
│   │   ├── DisplayPokemon.jsx
│   │   ├── DropDownFilter.jsx
│   │   ├── PokemonCard.jsx
│   │   ├── SearchBar.jsx
│   │   ├── Spinner.jsx
│   │   └── StatsModal.jsx
│   ├── providers
│   │   └── ReduxStoreProvider.jsx
│   ├── redux-store
│   │   ├── slices
│   │   │   ├── allPokemons
│   │   │   │   └── index.js
│   │   │   ├── infiniteScrolling
│   │   │   │   └── index.js
│   │   │   └── searchBar.index.js
│   │   └── store.js
│   ├── styles
│   │   └── spinner.css
│   └── utils
│       └── services.js
└── tailwind.config.js

```
