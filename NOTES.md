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
| `/about` | 02 About us, Our Story, Why DRES NIRMAN |
| `/mission` | Our Vision, Our Mission, Our Values |
| `/expertise` | 03 Our Expertise — index of the 7 disciplines |
| `/expertise/[slug]` | one page per discipline (7 static routes) |
| `/approach` | 05 Our Approach — the five steps, nothing else |
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
  Every image must depict work DRES actually does: `factory.jpg`, `automation.jpg`
  (robotic production lines), `drone.jpg` and `drone2.jpg` (stock drone shots) were
  removed on that basis. Each page hero is chosen to match that page's heading.
- **Leadership portraits** — currently monogram tiles (`DK`, `SR`) in `src/app/people/page.tsx`.
- **Email** — `info@dresnirman.com` invented from the doc's `info@`. Set in `src/lib/content.ts`.
- **LinkedIn** — `contact.linkedin` is `#`.
- **Contact form** — client-side only, does not send. Wire to an email service
  (Resend / Formspree) in `src/components/enquiry-form.tsx`.
- **Technology & Innovation** — section 07 of the doc was empty and the drafted
  placeholder copy has been dropped at the client's request. Nothing on the site
  covers it now; add a page if real copy arrives.
- **Domain** — `metadataBase` in `src/app/layout.tsx` points at `dresnirman.com`.

## Home page
Deliberately thin: full-bleed hero carrying the logo (the header hides itself
over it and slides in once you scroll past — see `overlayHero` in
`site-header.tsx`), capability marquee, stats strip, positioning statement, CTA.
No expertise list, no about copy.

## Logo
`public/logo-full.png` (complete lockup, used on the hero and in the footer) and
`public/logo-dres.png` (the DRES mark alone, used in the header) are both derived
from `DRES WEBSITE  2.docx` → `word/media/image1.png`, which is navy-on-white.
A script keys out the white and remaps the ink to a near-white → accent-blue ramp
so it reads on the dark ground. The header pairs the mark with a typeset
"NIRMAN PVT. LTD." because the logo's own version of that line is far too small
to survive at 38px.

## Design system
Tokens in `src/app/globals.css`. Ink `#06080c`, accent `#1f6fe0` / `#5aa2ff`
(sampled from the logo). Type is **Jost** — light-weight, wide-tracked, lowercase
for nav and labels (`.display`, `.label`, `.nav-link`) — with Inter for body copy
and IBM Plex Mono kept only for the small index numerals (`.num`).
All body paragraphs are justified (`p` rule in `globals.css`); because those
rules sit outside Tailwind's utility layer, alignment overrides are spelled out
there as `p.text-center` / `p.text-left` rather than via utility classes.
Logo assets: `public/logo-full.png` (from the docx), `src/app/icon.png` (favicon).
