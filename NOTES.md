# DRES NIRMAN — site notes

Built from `DRES WEBSITE .docx`, restructured Aug 30 2026 from `DRES WEBSITE  2.docx`,
revised Sep 5 2026 from `WEBSITE.docx` (client mark-up — see "Sep 5 2026 revision").
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
- **Leadership portraits** — the Director has a real photograph
  (`public/images/sanjeeva-reddy.jpg`, from `WEBSITE.docx`). The Founder is still
  a monogram tile (`DK`) in `src/app/people/page.tsx`.
- **Email / domain** — `WEBSITE.docx` opens with a bare "MAIL ID , DOMAIN" heading
  and gives no values, so both are still the invented placeholders:
  `info@dresnirman.com` in `src/lib/content.ts` and `dresnirman.com` in
  `metadataBase`. Replace once the client supplies them.
- **LinkedIn** — `contact.linkedin` is `#`.
- **Contact form** — client-side only, does not send. Wire to an email service
  (Resend / Formspree) in `src/components/enquiry-form.tsx`.
- **Technology & Innovation** — section 07 of the doc was empty and the drafted
  placeholder copy has been dropped at the client's request. Nothing on the site
  covers it now; add a page if real copy arrives.
- **Domain** — `metadataBase` in `src/app/layout.tsx` points at `dresnirman.com`.

## Home page
Deliberately thin: full-bleed hero, capability marquee, stats strip, positioning
statement, CTA. No expertise list, no about copy.

The hero carries no logo image — the mark lives in the header. Its two lines
("Multidisciplinary Engineering and Industrial Solutions Company" and
"Engineering a Stronger, Smarter, Sustainable Tomorrow") are set as live Jost
type so they stay crisp and can be positioned, rather than cropped out of the
raster logo.

## Logo
Replaced Sep 5 2026 with the client's new artwork (no buildings graphic inside
the D). `public/logo-dres.png` / `logo-mark.png` (the DRES mark alone, header) come
from `WEBSITE.docx` → `word/media/image1.png`; `public/logo-full.png` (complete
lockup, footer) from `word/media/image2.png`. Both are navy-on-white/cream.
A script keys out the paper and remaps the ink to an accent-blue → near-white ramp
(alpha `t**0.72`) so it reads on the dark ground. `src/app/icon.png` (favicon) is
the D of the mark on the brand navy — it used to be a stock house glyph.
The header pairs the mark with a typeset
"NIRMAN PVT. LTD." because the logo's own version of that line is far too small
to survive at 38px.

## Design system
Tokens in `src/app/globals.css`. Ink `#06080c`, accent `#1f6fe0` / `#5aa2ff`
(sampled from the logo). Type is **Jost** — light-weight, wide-tracked, lowercase
for nav and labels (`.display`, `.label`, `.nav-link`) — with Inter for body copy
and IBM Plex Mono kept only for the small index numerals (`.num`).
All body paragraphs are justified with `hyphens: none` (`p` rule in
`globals.css`) — the client does not want words broken across lines with a dash,
so justification stretches word spacing instead. Because those rules sit outside
Tailwind's utility layer, alignment overrides are spelled out there as
`p.text-center` / `p.text-left` rather than via utility classes.
Logo assets: `public/logo-full.png` (from the docx), `src/app/icon.png` (favicon).

## Sep 5 2026 revision (`WEBSITE.docx`)
The client marked up the live site. Applied:

- **Logo** — new artwork throughout (see "Logo" above), favicon included.
- **Address** — now "Flat No. 101, Vijayalakshmi Fortune, Venkata Ramana Colony,
  Kurnool" (`contact.address` in `src/lib/content.ts`, shown in the footer and on
  `/contact`).
- **Home** — "Where Industrial Strength Meets Modern Engineering." and its
  paragraph removed. The tagline that sat above them now stands alone, centred
  and set larger. (It needs `text-center` spelled out on the `p` — the global
  `p { text-align: justify }` rule beats a bare utility.)
- **About** — hero headline "Engineering Built on Experience…" removed, along with
  "Good engineering is not simply about designing something that works today."
  and the "It is about creating solutions…" paragraph.
- **Expertise** — hero headline "Multidisciplinary by design, not by accident."
  and its lede removed.
- **PageHero** — `title` is now optional; without it the label becomes the h1, so
  About and Expertise still have a page heading.
- **People** — the Director's photograph from the doc replaces the `SR` monogram.
  The doc supplied the photo under "IN PEOPLE SECTION" with no name attached; it
  was matched to K. Sanjeeva Reddy on age and role. Confirm with the client.
- **Team** — A. Prasad and N. Rama Krishna Reddy removed from `team`.

Still outstanding from the doc: mail ID and domain.

## Dashes
Sep 5 2026: the client asked for no dashes in the copy. Em dashes were removed
from every visible string (replaced with commas, colons or full stops) and
automatic hyphenation was turned off site-wide. Metadata descriptions, `aria-label`
strings and code comments still contain them — none of those render as page copy.
Keep new copy dash-free.

## Logo filenames
The logo files carry a `-v2` suffix (`logo-dres-v2.png`, `logo-full-v2.png`).
Next/Image and the Vercel CDN cache by source URL, so replacing the artwork under
the same filename keeps serving the old image to anyone who has seen the page.
Bump the suffix whenever the logo changes.
