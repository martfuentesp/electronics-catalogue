# Electro Store (Electronics Catalogue)

A realistic, production-style **React** frontend project that represents a static electronics catalogue website.

- No backend / database
- Products and homepage banners are hardcoded data modules
- Focused on clean structure, reusable components, and React Router navigation

## Tech stack

- React 18
- Vite
- React Router
- CSS Modules

## Getting started

### Install

```bash
npm install
```

### Run dev server

```bash
npm run dev
```

### Build

```bash
npm run build
```

## Routes

- `/` – Home
- `/products` – Product catalogue
- `/products/:id` – Product details
- `/about`
- `/contact`
- `*` – 404

## Project structure

```text
src/
  assets/
    banners/
    icons/
    images/
      products/
    logos/
  components/
    banners/
      HeroCarousel.jsx
      HeroSlide.jsx
      PromotionBanner.jsx
    layout/
      AppLayout.jsx
      Footer.jsx
    navigation/
      NavBar.jsx
    products/
      ProductCard.jsx
      ProductFilters.jsx
      ProductGrid.jsx
    shared/
      Button.jsx
      SectionHeading.jsx
  contexts/
    NewsletterContext.jsx
  data/
    bannerData.js
    products.js
  hooks/
    useDocumentTitle.js
  pages/
    About/
    Contact/
    Home/
    NotFound/
    Products/
  services/
    catalogService.js
  styles/
    globals.css
  utils/
    formatters.js
  App.jsx
  main.jsx
```

## Homepage banner architecture

Banners are **data-driven** and implemented as reusable components:

- Data lives in: `src/data/bannerData.js`
  - `heroBanners[]` for the hero carousel
  - `promoBanners[]` for smaller promo banners

- Components live in: `src/components/banners/`
  - `HeroCarousel.jsx` renders slides using `heroBanners`
  - `HeroSlide.jsx` renders a single hero slide
  - `PromotionBanner.jsx` is a reusable promo block component

### Adding a new promotional sale banner

1. Add a new object to `promoBanners` in `src/data/bannerData.js`.
2. Add a banner image to `src/assets/banners/`.
3. The Home page will render it automatically.

## Future improvements

- Add product sorting (price, newest, popularity)
- Add a wishlist page and persisted state
- Improve accessibility testing and add component tests
- Add a search index for faster filtering
- Add a design tokens file for theme + spacing
