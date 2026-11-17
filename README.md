# Keep Wafflin - Waffle Hut — Narayanguda, Hyderabad

Luxury, mobile-first single-page site for **Keep Wafflin - Waffle Hut**, 3-4-627/A opposite
Deepak Theatre, Chitrapuri Colony, Lingampally, Narayanguda, Hyderabad 500027.
Built with React 18 + Vite 5 + Tailwind CSS 3.

## Run it

```bash
npm install
npm run build
npm run preview    # http://localhost:4173
```

### ⚠️ `npm run dev` and the `#` in the folder name

Vite cannot serve modules from a directory whose path contains `#` (it prints this warning on
every command). In this folder, `npm run dev` loads the page but the JS stays untransformed and
the app never mounts. `npm run build` / `npm run preview` are unaffected.

To get hot-reload dev mode, rename the project folder so it has no `#`, e.g.
`C:\Users\abdul\Downloads\waffle-hut-3`, then:

```bash
npm run dev
```

## What's in here

| Path | Purpose |
| --- | --- |
| `src/data.js` | **All** business data — address, phone, hours, menu items, prices, images, customer reviews. Edit here only. |
| `src/hooks.js` | Live open/closed pill, scroll-reveal observer, WhatsApp cart state. |
| `src/components/` | `Navbar`, `Hero`, `Menu`, `Reviews`, `Location`, `OrderBar` (cart + sticky bars), `Footer`, `Icons`. |
| `tailwind.config.js` | Midnight Velvet palette (`midnight`, `cocoa`), Playfair Display + Plus Jakarta Sans, gold shadows, animations. |

## Editing the menu

Add or change items in `src/data.js` → `menu`. Each item takes
`{ id, name, category, price, badge?, description, image }`. `category` must be one of the
values in `categories` so the filter tabs pick it up.

## Editing the reviews

Quotes live in `src/data.js` → `reviews`, each `{ id, name, initials, stars, source, quote }`.
They render as a 3-up grid on desktop and stack on mobile; adding a fourth entry just extends
the grid.

## How ordering works

No backend, no payments. Tapping **+ Add to WhatsApp Order** builds a local cart; the floating
bar opens a drawer, and **Send Order to WhatsApp** opens `wa.me/917207047700` with the items,
quantities and total pre-filled as a message. The customer still presses send in WhatsApp.

## Notes

- Hours: only the 12:00 AM closing time is published for this outlet. The live status pill
  assumes an **11:00 AM** opening (`business.opensAt` in `src/data.js`) — change it if the real
  opening time differs.
- The Google rating (4.7) is shown without a review count, since no verified count was
  available for the Narayanguda outlet. To show one, add it back in `src/data.js`.
- Menu prices (₹149–₹289) are realistic placeholders; Peri Peri Fries sits just below the
  ₹150–₹300 dessert band. Confirm
  against the current in-store menu before going live.
- Food photography is from Unsplash hotlinks. For production, replace `image` / `heroImage` in
  `src/data.js` with the café's own photos placed in `public/`.
