# DRES NIRMAN — site notes

Built from `DRES WEBSITE .docx`, restructured Aug 30 2026 from `DRES WEBSITE  2.docx`.
Next.js 16 (App Router) + Tailwind v4, fully static.

## Run
```
npm run dev     # http://localhost:3000
npm run build   # static export of all 8 routes
```

## Pages
Information architecture follows geoconsurveys.in: the home page carries only the
essentials, every other topic lives on its own page, and each expertise discipline
has a dedicated page reachable from the header dropdown.

| Route | Doc section |
|---|---|
| `/` | 01 Home — hero + expertise index + CTA. Nothing else. |
| `/about` | 02 About us, Our Story, Vision, Mission, Values |
| `/expertise` | 03 Our Expertise — index of the 7 disciplines |
| `/expertise/[slug]` | one page per discipline (7 static routes) |
| `/approach` | 05 Our Approach + 06 Why DRES + 07 Technology |
| `/projects` | 04 Our Projects — "yet to come" placeholder |
| `/people` | 08 People — founder, director, team |
| `/careers` | 09 Careers — "yet to come" placeholder |
| `/contact` | 10 Contact — enquiry form + office |

### Expertise slugs
`civil-engineering`, `peb-and-steel-structures`, `structural-engineering`,
`industrial-projects`, `architectural-and-planning-coordination`,
`surveying-mapping-and-geospatial`, `sustainable-engineering`

Content lives in `src/lib/content.ts` — edit there, not in the page files.

## Placeholders to replace before launch
- **Photography** — most images in `public/images/` are stock (Unsplash), used as
  stand-ins for DRES project photos. Swap them keeping the same filenames.
  `civil.jpg`, `peb.jpg`, `survey-drone.jpg`, `carbon-fibre.jpg`, `story.jpg` and
  `safety.jpg` came from `DRES WEBSITE  2.docx` (the doc's infographic-style
  images were deliberately left out — they carry baked-in text and a foreign logo).
- **Leadership portraits** — currently monogram tiles (`DK`, `SR`) in `src/app/people/page.tsx`.
- **Email** — `info@dresnirman.com` invented from the doc's `info@`. Set in `src/lib/content.ts`.
- **LinkedIn** — `contact.linkedin` is `#`.
- **Contact form** — client-side only, does not send. Wire to an email service
  (Resend / Formspree) in `src/components/enquiry-form.tsx`.
- **Technology & Innovation** — the doc had no copy under section 07; the four
  capability lines on `/approach` are drafted and need confirming.
- **Domain** — `metadataBase` in `src/app/layout.tsx` points at `dresnirman.com`.

## Design system
Tokens in `src/app/globals.css`. Ink `#06080c`, accent `#1f6fe0` / `#5aa2ff`
(sampled from the logo). Type is **Jost** — light-weight, wide-tracked, lowercase
for nav and labels (`.display`, `.label`, `.nav-link`) — with Inter for body copy
and IBM Plex Mono kept only for the small index numerals (`.num`).
Logo assets: `public/logo-full.png` (from the docx), `src/app/icon.png` (favicon).
