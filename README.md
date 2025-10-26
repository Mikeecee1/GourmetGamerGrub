# GourmetGamerGrub  🍔🕹️

**The food hub for gamers!** 

> A playful, responsive food-ordering UI tailored for gamers — quick add/remove, real-time totals, and a slick single-screen flow.

---

## Project Summary  🍕🎮
GourmetGamerGrub is a shopping app that lets users order gourmet takeaway food with a gamer-first UX. The interface pairs curated menu items with quick ordering and a playful, game-inspired visual style.

## ✨ Features

- **Fast ordering flow** — Add/remove with quantity tracking and dynamic basket total.
- **Single-screen UX** — Minimal navigation interruptions; sticky basket on desktop.
- **Responsive from phone → desktop** — Fluid grids, `clamp()` typography, and reduced media-query noise.
- **Accessible by default** — Keyboard focus states, good tap targets, and reduced motion fallback.

##  Styling Strategy 🎨

One stylesheet: App.css holds design tokens (spacing, type scale, colors), page layout, and component rules.

Fluid sizing with CSS functions:

clamp() for fonts, paddings, and button heights.

auto-fit/minmax() for adaptive card grids.

Minimal media queries:

@media (min-width: 1200px): switch to a 2-column layout with sticky basket.

Prefer 100dvh over 100vh to avoid mobile browser chrome issues.


## Demo / Screenshots 📸 

> ![HomeScreen](<src/images/Screenshot 2025-10-26 180559.png>)



## Theme & Target Audience 🍕🎮
Designed for gamers who value quality food delivered quickly — the app combines gamer-centric language, visuals, and quick checkout flows to suit streaming, multiplayer sessions, and on‑the‑go gaming breaks.

## Key Features (brief) 🍽️🎮
- Browse curated gourmet categories (e.g., Comfort Food, Energy Bites).
- Fast add/remove ordering with quantity tracking and dynamic totals.
- Lightweight basket and single‑screen checkout flow for minimal interruption.
- Responsive layout goals to support phones, tablets, and varying aspect ratios.

##  Roadmap 🗺️

[] Add real backend / API integration

[] Basket persistence (localStorage)

[] “Favorites” / quick re-order

[] i18n (string extraction)

[] Visual theme toggle (light/dark)

## Portability & Responsive Notes 🍜🎮
Current UI is tuned for Pixel 7. Recommended portability improvements include:
- Use flexible layouts (Flexbox/Grid), relative units (%, rem, vw/vh), and responsive breakpoints.
- Replace fixed pixel assets with SVGs or multi-density images.
- Respect safe areas and keyboard handling for smaller screens.

## License 📄 

MIT © Mike Cooksley

## Quick Start 🌮🕹️
1. Clone the repo.
2. Install dependencies: `npm install` or `yarn`.
3. Run the app locally: `npm start` or `yarn start`.

![Status](https://img.shields.io/badge/status-beta-yellow)
![Build](https://img.shields.io/badge/build-React-blue)
![License](https://img.shields.io/badge/license-MIT-green)