# Pokemon Search

A small React and TypeScript project for practicing TypeScript while building a
Pokemon search page.

## Project goal

Search for a Pokemon by name, then show its image and basic details using data
from the [PokeAPI](https://pokeapi.co/).

## Current progress

- React, TypeScript, and Vite are set up.
- The home page has an initial search form and a basic results layout.
- The page has a first attempt at requesting a Pokemon from the PokeAPI.
- Search results are not displayed yet, and the project currently has TypeScript
  errors to resolve before it builds successfully.

## Getting started

Install dependencies and start the development server:

```sh
npm install
npm run dev
```

Check the production build with:

```sh
npm run build
```

## Project structure

```text
index.html             Vite HTML entry point
src/
  main.ts              React application entry point
  pages/
    HomePage.tsx       Pokemon search page
  style.css            Page styles
```

## Roadmap

1. Fix the search input and Pokemon result TypeScript types.
2. Handle empty searches, failed requests, and loading state.
3. Show the Pokemon name, image, and basic details after a successful search.
4. Improve responsive styling and accessibility.
5. Add tests for search behavior and API response handling.
