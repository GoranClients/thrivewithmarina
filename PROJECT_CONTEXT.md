# ThriveWithMarina — Project Context

> Kontekst i sve odluke do sada. **Single source of truth** za projekat. Ažuriramo ga posle svake značajne faze.

**Last updated:** 2026-06-10 (Breathiva redizajn — hero parallax, About Me, Reviews, nove sekcije)

---

## 1. Šta gradimo

Next.js sajt **Thrive with Marina** — breathwork & holistic coaching (Dubai), vizuelno usklađen sa Breathiva referencom.

- **Figma izvor:** [Inspiracija portfolio agencija](https://www.figma.com/design/MIJHFqVgXPInaK17jGBIDY/Inspiracija-portfolio-agencija?node-id=698-3708)
- **Live referenca (dizajn):** [breathiva.webflow.io](https://breathiva.webflow.io/) — boje, fontovi, CTA, parallax, memberships, footer
- **Copy izvor (wireframe):** `copy/*.html` — **samo tekst, nikad wireframe dizajn**
- **Stari sajt (testimonials):** [thrivewithmarina.com/testimonials](https://thrivewithmarina.com/testimonials/)
- **Live:** [thrivewithmarina.vercel.app](https://thrivewithmarina.vercel.app)
- **GitHub:** `GoranClients/thrivewithmarina`
- **Lokalni put:** `C:\Users\Goranche\Projects\thrivewithmarina`

### Dizajn pravilo (jun 2026)

**Breathiva + Figma redizajn** — Breathiva boje/fontovi/CTA/parallax; Figma primarni za `rt-gallery-v2` i `rt-booking-v2`. Sekcija-po-sekcija odobrenje na localhost.

---

## 2. Tech Stack

| Kategorija | Izbor |
|---|---|
| Framework | Next.js 16 (App Router) |
| Jezik | TypeScript |
| Styling | Tailwind v4 + CSS varijable |
| Lint | ESLint (eslint-config-next) |
| Animacije | GSAP + `@gsap/react` + ScrollTrigger |
| Smooth scroll | Lenis (`SmoothScroll.tsx` + `ScrollTrigger.scrollerProxy`) |
| Fontovi | Satoshi (body), Orticalinear (headings), Avelora (display) — lokalni `@font-face` u `public/fonts/` |
| Hosting | **Vercel** — [thrivewithmarina.vercel.app](https://thrivewithmarina.vercel.app) |

### Dev / build napomene

- **`npm run dev`** i **`npm run build`** koriste **`--webpack`** (Turbopack na Windows-u pravi probleme).
- Jedan dev server na **http://localhost:3000**.
- SWC native binary upozorenje na Windowsu je poznato; WASM fallback radi.

---

## 3. Brend i copy

| Stavka | Vrednost |
|---|---|
| Brand name u UI | **ThriveWithMarina** / **Thrive with Marina** |
| Jezik | EN |
| Calendly | `https://calendly.com/marina-savic30/clarity-call` |
| Instagram | `https://www.instagram.com/marinasavic1111/` |
| Free Breathwork anchor | `#FreeBreathwork` |

Centralizovano u `src/lib/site.ts`.

---

## 4. Boje, fontovi, design tokens

Definisano u `src/app/globals.css` (`:root` + `@theme inline`):

| Token | Vrednost |
|---|---|
| `--marsh` / `--pudra-500` | `#1f2a1c` |
| `--vista-white` / `--pudra-100` | `#f9f6f3` |
| `--platinum` / `--pudra-200` | `#e7e9e1` |
| `--kaitoke-green` / `--green` | `#2f3c2c` |
| `--burlywood` | `#d8aa78` |
| `--grullo` / `--gray-200` | `#ada07d` |
| `--black` | `#000000` |

**Napomena:** Tailwind utility za zeleno dugme koristi `bg-green` (ne `bg-kaitoke-green`) — `--color-green` je u `@theme`.

### Tipografija

| Klasa | Upotreba |
|---|---|
| `.heading-medium` | Naslovi sekcija |
| `.heading-large` | Veći display naslovi |
| `.rt-button-text` | Breathiva uppercase CTA label |

### Layout tokeni (`src/lib/layout.ts`)

`containerClass`, `containerXlClass`, `sectionYClass`, `sectionHeaderMbClass`, `headerShellClass`.

---

## 5. Sekcije sajta — trenutno stanje

### Redosled na home (`src/app/page.tsx`)

```
Header → HeroWellnessStack → Instructors → FreeBreathwork → Reviews → GalleryV2 → Memberships → BookingV2 → Footer
```

| # | Sekcija | Komponenta | `id` / anchor |
|---|---|---|---|
| 1 | Header | `Header.tsx` | — |
| 2 | Hero + Wellness parallax | `HeroWellnessStack.tsx` | `#Hero`, `#Sessions` |
| 3 | About Me / Instructors | `Instructors.tsx` | `#Experts` |
| 4 | Free Breathwork | `FreeBreathwork.tsx` | `#FreeBreathwork` |
| 5 | Reviews / Testimonials | `Reviews.tsx` | `#Reviews` |
| 6 | Gallery v2 | `GalleryV2.tsx` | — |
| 7 | Memberships | `Memberships.tsx` | `#Memberships` |
| 8 | Booking v2 | `BookingV2.tsx` | `#Contact` |
| — | Footer | `Footer.tsx` | — |

### Uklonjeno sa home-a (legacy)

- `Sessions.tsx` — zamenjeno `ParallaxPanels`
- `GroupSlider.tsx` — zamenjeno `GalleryV2`
- `Contact.tsx` — zamenjeno `BookingV2`

Fajlovi i dalje postoje u repo-u ali nisu u `page.tsx`.

---

## 6. Hero + Parallax (sekcije 2–3)

**Fajlovi:** `HeroWellnessStack.tsx`, `Hero.tsx`, `ParallaxPanels.tsx`

### Arhitektura (Breathiva sticky overlap)

```
HeroWellnessStack
├── sticky video pozadina (z-0) + marsh overlay (GSAP scrub)
├── Hero tekst — absolute overlay (z-5), nezavisan od GSAP pin/transform
└── ParallaxPanels (#Sessions, z-7) — klizi preko sticky pozadine
```

- **Hero tekst:** vidljiv odmah; mobilni padding `pt-32`; 4 reči (22px mobile / 34px desktop); mobile 2×2 grid ispod CTA
- **Parallax GSAP:** samo `sectionBackdrop` opacity + `marshOverlay` — **bez** animacije hero teksta
- **Wellness sekcija:** logo, intro, burlywood underline CTA, 4 therapy kartice, dekorativna SVG pozadina

### Hero copy

- H1: *You've built the success. But your body is running on empty.*
- CTA: Book a Clarity Call (Calendly) + Free Breathwork Practice (`#FreeBreathwork`)
- 4 reči: Focus, Wellness, Strength, Balance — hover/tap opis

---

## 7. About Me — Instructors (`#Experts`)

**Fajl:** `Instructors.tsx`

| Element | Stanje |
|---|---|
| Pozadina | `bg-pudra-100` (vista-white) |
| Naslov | *You can't think your way into a thriving body. You have to feel your way back.* |
| Slika | Ovalna `marina.png` |
| CTA | **Learn my full story** — zeleno pill (`variant="green"`, `bg-green`) |
| Statistika | 4 brojke na **kraju sekcije** (`src/data/stats.ts`) |
| Video | **Uklonjen** (`experts-bg.mp4` više nije u sekciji) |

---

## 8. Reviews / Testimonials (`#Reviews`)

**Fajl:** `Reviews.tsx`

| Element | Stanje |
|---|---|
| Naslov | **They chose themselves.** |
| Pozadina | `bg-pudra-100` (ista kao About Me) |
| Tekst recenzija | Crn (`text-black`, body `text-black/90`) na belim karticama |
| Layout | Desktop masonry; mobile wallet stack |
| Data | 9 recenzija — `src/data/reviews.ts` |

---

## 9. Ostale sekcije (kratko)

| Sekcija | Napomena |
|---|---|
| **FreeBreathwork** | Lead magnet email forma, `#FreeBreathwork` |
| **GalleryV2** | Figma rt-gallery-v2 layout |
| **Memberships** | 2 plana Soul-Led + HeartLead, Breathiva stil |
| **BookingV2** | Figma rt-booking-v2 + Calendly embed, `#Contact` |
| **Footer** | Breathiva layout, Instagram CTA, newsletter UI |

---

## 10. Header / Navigacija

**Nav (`navigation.ts`):** Trainers · Reviews · Memberships · Classes

| Anchor | `id` |
|---|---|
| Trainers | `#Experts` |
| Reviews | `#Reviews` |
| Memberships | `#Memberships` |
| Classes | `#Sessions` |

CTA: **Book a Clarity Call** → Calendly.

---

## 11. CTA dugmad

| Lokacija | Tekst | Stil | Link |
|---|---|---|---|
| Hero | Book a Clarity Call | `primary` pill | Calendly |
| Hero | Free Breathwork Practice | `secondary` pill | `#FreeBreathwork` |
| Parallax / Sessions | Book a Clarity Call | burlywood underline link | Calendly |
| Instructors | Learn my full story | `green` pill | `#` |
| Memberships | Explore this path | `gold` / dark | `#` |
| Header | Book a Clarity Call | `primary` | Calendly |

---

## 12. Struktura koda

```
src/
  app/
    page.tsx              # HeroWellnessStack + sve sekcije
    globals.css           # tokens, fontovi, header boje
  components/
    layout/               # Header, Footer, SmoothScroll
    sections/
      Hero.tsx
      HeroWellnessStack.tsx
      ParallaxPanels.tsx
      Instructors.tsx
      FreeBreathwork.tsx
      Reviews.tsx
      GalleryV2.tsx
      Memberships.tsx
      BookingV2.tsx
    ui/                   # Button, StarRating, VideoLightbox
  data/
    hero-words.ts
    parallax-panels.ts
    stats.ts
    reviews.ts
    gallery.ts
    memberships.ts
  lib/
    layout.ts
    navigation.ts
    site.ts
public/fonts/             # Satoshi, Orticalinear, Avelora
scripts/                  # breathiva.html/css, asset skripte
```

---

## 13. Animacije

| Sekcija | Animacija |
|---|---|
| HeroWellnessStack | Sticky bg + wellness overlap scrub; wellness reveal |
| Hero | GSAP height expand na 4 reči |
| Instructors | Scroll reveal + blagi parallax slike |
| Reviews | Naslov + kartice reveal; video lightbox |
| Ostale | GSAP reveal po sekciji |

Toolbox: GSAP, ScrollTrigger, Lenis, `@gsap/react`, `matchMedia` za reduced motion.

---

## 14. Assets

```
public/
  fonts/                  # lokalni fontovi
  assets/
    instructors/marina.png
    reviews/              # MP4 + posteri
    contact/contact.webp
    journey/              # legacy slider slike
scripts/
  breathiva.html/css      # referenca
  parse-breathiva.mjs
```

Hero/wellness video: Webflow CDN (Breathiva).

---

## 15. Checklist

### Završeno (Breathiva redizajn + jun 2026 iteracije)

- [x] Globalni DS — Breathiva boje, fontovi, Button pill + underline varijante
- [x] Hero — video pozadina, 4 reči, pill CTA
- [x] HeroWellnessStack — sticky parallax overlap (#Sessions)
- [x] About Me — bez video bg, stats na dnu, zeleni CTA vidljiv (`bg-green`)
- [x] Reviews — naslov *They chose themselves.*, svetla pozadina, crn tekst
- [x] FreeBreathwork, GalleryV2, BookingV2, Memberships, Footer
- [x] Utility stranice (404, privacy, terms)

### Sledeće

- [ ] About Me CTA link (trenutno `#`)
- [ ] Memberships CTA linkovi
- [ ] Resend za forme
- [ ] Vercel Git reconnect — auto-deploy
- [ ] Footer / nav copy finetuning po potrebi

---

## 16. Git & deploy

**Branch:** `main`  
**Production:** https://thrivewithmarina.vercel.app  
**Deploy:** `npx vercel deploy --prod --yes` ili push na `main` ako je Git povezan.

---

## 17. Konvencije

- Komponente: PascalCase, named exports
- GSAP: `useGSAP` + `scope`, cleanup automatski
- Slike: `next/image` + `sizes`
- Minimalan diff; bez nepotrebnih apstrakcija
- Hero tekst **ne sme** biti GSAP pinovan / vezan za parallax sekciju 2

---

## 18. Istorija važnih fixeva

| Problem | Rešenje |
|---|---|
| Hero tekst nevidljiv na load | Grid/absolute overlay; bez GSAP na tekstu |
| CTA About Me vidljiv samo na hover | `bg-kaitoke-green` nije u Tailwind temi → `bg-green` |
| Parallax ne radi u grid-u | Sticky video izvan grid-a; hero absolute overlay |
| Footer fiksiran sa Lenis | Footer `relative`, bez `sticky bottom-0` |
| Reviews loš kontrast | `bg-pudra-100` + `text-black` na karticama |
