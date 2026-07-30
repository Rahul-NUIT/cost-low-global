# Wholesale Hub

Global trading site for food products and consumer electronics. React + Vite, built as a
content-complete rebuild of the source demo under a new editorial design system.

```bash
npm install
npm run dev      # http://localhost:5173/
npm run build    # production bundle -> dist/
npm run preview  # serve the built bundle
```

## Deployment

The site is built for the **domain root** (https://costlowglobal.com/). Upload the whole
contents of `dist/` (including the dot-file `.htaccess` — most SFTP clients hide it) into
the web root on the server, so `dist/index.html` lands at `/index.html`.

The path is set once, by `base` in `vite.config.js`. Everything else derives from it:
asset URLs at build time, the router's `basename` via `import.meta.env.BASE_URL`
(`App.jsx`), and the form endpoints (`src/utils/api.js`). To move the site into a
sub-folder, change `base` — then update `RewriteBase` and the fallback path in
`public/.htaccess`, which cannot read the Vite config.

`public/.htaccess` provides the SPA fallback. Without it, `/about` serves fine via in-app
navigation but 404s on a direct hit or refresh. On nginx the equivalent is:

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## Stack

React 19 · Vite 8 · React Router 7 · Tailwind CSS 4 · Framer Motion · lucide-react

## Structure

```
src/
  assets/images/   32 optimised images (WebP; logos keep alpha as PNG)
  components/
    ui/            primitives — Button, SectionTitle, Field, cards, Timeline, …
    sections/      page-level compositions — Hero, ProductGrid, EnquiryDrawer, …
  data/            all copy and the product catalogue (no strings live in components)
  hooks/           useForm, useCountUp, useSeo, useEnquiry, useScrolled, …
  layout/          Header, MobileDrawer, Footer, Logo, Layout
  pages/           one file per route
  routes/          route table (lazy-loaded)
  styles/          index.css — the single source of design tokens
  utils/           cn, api, icons, motion variants
```

## Theme

Every design decision lives in the `@theme` block of `src/styles/index.css` — colours,
fonts, type scale, container width, radii, shadows and easing. Change a token there and it
propagates everywhere.

Type is Cormorant Garamond (display) over Outfit (sans), loaded in `index.html`.

Four constraints worth knowing before editing:

- **The system is square.** Every `--radius-*` token is `0px`, so a stray `rounded-*`
  utility cannot reintroduce curves. Depth comes from hairline borders, not shadows.
- **Gold has two tokens.** `--color-accent` is tuned for dark surfaces. Gold *text* on
  light backgrounds must use `--color-accent-deep`, which clears WCAG AA contrast;
  `--color-accent` on white reaches only 2.3:1.
- **Headings default to the display serif.** `h1`–`h4` get `--font-display` from the base
  layer, so small-caps *labels* built as headings must opt back in with `font-sans` (see
  `LABEL` in `layout/Footer.jsx`).
- **Icon names must be registered.** `data/site.js` stores icons as strings; add any new
  one to `utils/icons.js` or it falls back to `Globe2` (dev builds warn).

### Logos

The lockup must match its surface — `logo.png` sets its wordmark in **white** and
disappears on light backgrounds:

| File             | Wordmark            | Use on                                |
| ---------------- | ------------------- | ------------------------------------- |
| `logo.png`       | white               | dark surfaces — hero header, footer   |
| `logo-black.png` | black               | light surfaces — solid header, drawer |
| `logo-dark.png`  | black, red mark     | unused; colour alternative for light  |
| `logo-icon.png`  | mark only           | source for `public/favicon.png`       |

`layout/Logo.jsx` switches on its `light` prop. The lockup stacks three lines, so below
~56px tall the lower two stop resolving — don't shrink it further.

## Forms

`useForm` (`src/hooks/useForm.js`) handles controlled state, validation, and the
idle → submitting → success/error lifecycle. Fields validate on blur, then live once
touched. Composable validators: `required`, `email`, `minLength`, `compose`.

Submissions route through `src/utils/api.js` to the PHP endpoints in `public/api/`, which
Vite copies into `dist/`. Each endpoint mails the admin (`admin_email` in
`public/api/config.php`) and acknowledges the sender, over SMTP via PHPMailer.

| Endpoint              | Used by                       |
| --------------------- | ----------------------------- |
| `api/enquiry.php`     | Enquiry drawer (product CTAs) |
| `api/contact.php`     | Contact page form             |
| `api/newsletter.php`  | Footer newsletter             |

Paths are resolved against `import.meta.env.BASE_URL`, so they follow the deploy path.
The Vite dev server cannot execute PHP — for local testing set `VITE_API_BASE_URL` to a
host that can (see `.env.example`), and leave it unset for production builds.

`public/api/config.php` holds the live SMTP credentials. It is gitignored; copy
`config.example.php` and fill it in on a fresh checkout, and make sure the host actually
executes PHP in that folder or the file is served as readable text.

## Before launch

These are deliberately unfinished because the source provided no content for them — they
are flagged rather than invented:

- **Social links** — `socialLinks` in `src/data/site.js` points at `#`. Add real profile
  URLs, or set the array to `[]` to remove the footer row.
- **Privacy / Terms** — the source site 404s on both. The routes render an honest
  placeholder; pass a `sections` array to `LegalPage` once legal supplies the copy.
- **Stat figures** — the source quotes different numbers in two places (hero: 40+
  countries / 12+ years; about: 30+ / 10+). Both are reproduced as authored. Reconcile in
  `heroStats` / `aboutStats` if that was a mistake upstream.

## Accessibility

Audited with axe-core (WCAG 2.1 A/AA): zero violations across all routes. Semantic
landmarks, a skip link, labelled controls with `aria-invalid`/`aria-describedby` on errors,
Escape-to-close and scroll-lock on both drawers, visible focus rings, and full
`prefers-reduced-motion` support.
