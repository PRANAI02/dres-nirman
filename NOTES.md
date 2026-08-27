# DRES NIRMAN — site notes

Built from `DRES WEBSITE .docx`. Next.js 16 (App Router) + Tailwind v4, fully static.

## Run
```
npm run dev     # http://localhost:3000
npm run build   # static export of all 8 routes
```

## Pages
| Route | Doc section |
|---|---|
| `/` | 01 Home + 05 Approach + 06 Why DRES + 07 Technology + projects teaser |
| `/about` | 02 About us, Our Story, Vision, Mission, Values |
| `/expertise` | 03 Our Expertise (6 discipline groups) |
| `/projects` | 04 Our Projects — "yet to come" placeholder |
| `/people` | 08 People — founder, director, team |
| `/careers` | 09 Careers — "yet to come" placeholder |
| `/contact` | 10 Contact — enquiry form + office |

Content lives in `src/lib/content.ts` — edit there, not in the page files.

## Placeholders to replace before launch
- **Photography** — all images in `public/images/` are stock (Unsplash), used as
  stand-ins for DRES project photos. Swap them keeping the same filenames.
- **Leadership portraits** — currently monogram tiles (`DK`, `SR`) in `src/app/people/page.tsx`.
- **Email** — `info@dresnirman.com` invented from the doc's `info@`. Set in `src/lib/content.ts`.
- **LinkedIn** — `contact.linkedin` is `#`.
- **Contact form** — client-side only, does not send. Wire to an email service
  (Resend / Formspree) in `src/components/enquiry-form.tsx`.
- **Technology & Innovation** — the doc had no copy under section 07; the four
  capability lines on the home page are drafted and flagged on-page as placeholder.
- **Stats strip** — `1991 / 08 / 3+ / 02` on the home page; confirm the numbers.
- **Domain** — `metadataBase` in `src/app/layout.tsx` points at `dresnirman.com`.

## Design system
Tokens in `src/app/globals.css`. Ink `#06080c`, accent `#1f6fe0` / `#5aa2ff`
(sampled from the logo), Archivo display + Inter body + IBM Plex Mono labels.
Logo assets: `public/logo-full.png` (from the docx), `src/app/icon.png` (favicon).
