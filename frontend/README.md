# CODE KOLKATA — frontend

Single-page site for CODE KOLKATA, a 24-hour build sprint hosted by two
communities in Kolkata. Built with React, Vite, Tailwind CSS v4 and React Router,
with Lenis smooth scrolling, scroll-triggered reveals, a theme switcher and an
opt-in soundtrack.

## Requirements

- Node.js 20.19+ (or 22.12+)
- npm 10+

## Getting started

```bash
cd frontend
npm install
npm run dev
```

Vite prints the local URL (default `http://localhost:5173`).

## Scripts

| Command           | What it does                                  |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Start the Vite dev server with HMR            |
| `npm run build`   | Create an optimized production build in `dist` |
| `npm run preview` | Serve the production build locally            |
| `npm run lint`    | Run ESLint over the project                   |

## Routes

| Path         | Page                                            |
| ------------ | ----------------------------------------------- |
| `/`          | Home — hero, stats, tracks, schedule, prizes    |
| `/about`     | Story, organizers, expectations, venue          |
| `/register`  | Locally validated application form (preview)    |
| `/schedule`  | Schedule placeholder — revealing soon           |
| `/sponsors`  | Sponsorship placeholder — revealing soon        |
| `/mentors`   | Mentor placeholder — revealing soon             |
| `/prizes`    | Prize pool, placements, categories and perks    |
| `/partners`  | Community partner program and benefits          |
| `/team`      | Team placeholder — revealing soon               |
| `*`          | 404 page                                        |

The host must rewrite unknown paths to `index.html` (SPA fallback) so direct
visits to routes such as `/prizes` work in production.

## Content

All event copy, dates, venue, stats, tracks, schedule, prizes, sponsor and
partner data live in `src/config/event.js`. Edit that file rather than individual
pages — navigation labels are in `src/data/navigation.js`.

Registration is a local preview: submitting validates the fields and shows a
success summary, but nothing is sent. Set `registration.url` to a real form
service when one is available; the external-form button appears automatically.

## Structure

```text
frontend/
├─ public/                 static assets (favicon)
├─ src/
│  ├─ assets/              background image and soundtrack
│  ├─ components/          layout, navigation, sections and UI primitives
│  │  └─ ui/               Button, Card, Icon, Reveal, CountUp, PageHeader…
│  ├─ config/event.js      single source of event content
│  ├─ data/navigation.js   primary navigation links
│  ├─ lib/smoothScroll.js  Lenis bridge, scroll lock and scroll-to-top
│  ├─ pages/               one component per route
│  ├─ styles/theme.css     design tokens and theme variables
│  ├─ App.jsx              routes and Lenis lifecycle
│  ├─ index.css            Tailwind import, base styles and components
│  └─ main.jsx             React entry point
├─ index.html              metadata and no-flash theme boot script
└─ vite.config.js
```

## Behavior notes

- **Smooth scrolling** — Lenis is loaded lazily and torn down on unmount. Dialogs
  and the mobile menu share a counter-based scroll lock, so closing one never
  unlocks the page while the other is still open.
- **Background media** — rendered once in `Layout`, outside the keyed page
  container, so route changes do not restart it.
- **Soundtrack** — the ~3 MB MP3 is only fetched after the visitor asks for
  music, from the welcome dialog or the navbar sound button. A saved preference
  offers a resume action but never autoplays.
- **Reduced motion** — reveal, count-up and other animations are skipped when the
  visitor prefers reduced motion.
- **Theme** — dark/light preference is stored in `localStorage`; an inline script
  in `index.html` applies it before first paint to avoid a flash.
