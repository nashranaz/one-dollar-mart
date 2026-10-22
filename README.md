# One Dollar Mart

A responsive, animated Pakistani budget-deals storefront built with React, Vite, Tailwind CSS, React Router, Framer Motion and Lucide React.

## Run locally

```sh
npm install
npm run dev
```

Vite prints the local URL (usually `http://localhost:5173`). Create a production build with `npm run build`.

## Project notes

- `src/App.jsx` contains only the route tree and the cart/wishlist providers. Shared page chrome lives in `src/components/layout/`; route-level composition lives in `src/pages/`.
- Reusable product UI lives in `src/components/products/`, category browse sections in `src/components/categories/`, and cart/wishlist/detail page parts in their matching component folders.
- Product listings live in [`src/data/products.js`](./src/data/products.js). Each product has a title, category, PKR price, previous price, rating, review count, description, image URL and deal metadata.
- Category labels and their display styles live in [`src/data/categories.js`](./src/data/categories.js).
- To add a product, add its image ID to the `photos` array and add a matching product row to `inventory` in `src/data/products.js`. Keep the photo IDs in the same order as the inventory rows; product IDs are assigned automatically.
- Product photos are served from Unsplash URLs in `src/data/products.js`. Replace a product's `image` URL there to use another permitted remote image or a local file under `public/`.
- Cart and wishlist contents persist in the browser's local storage. Checkout and newsletter forms are front-end demos and need a payment or mailing-list service to process real orders/subscriptions.

## Included dependencies

Runtime UI dependencies: `react`, `react-dom`, `react-router-dom`, `framer-motion`, and `lucide-react`.

Build and styling dependencies: `vite`, `@vitejs/plugin-react`, `tailwindcss`, and `@tailwindcss/vite`.
