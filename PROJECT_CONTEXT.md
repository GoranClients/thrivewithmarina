# ThriveWithMarina — Project Context

> Kontekst i sve odluke do sada. **Single source of truth** za projekat. Ažuriramo ga posle svake značajne faze.

**Last updated:** 2026-05-28 (Pixel-perfect pass, layout tokens, naslovi, slider peek, footer fix)

---

## 1. Šta gradimo

Next.js klon Webflow yoga template-a, rebrand u `ThriveWithMarina`.

- **Figma izvor:** [Inspiracija portfolio agencija](https://www.figma.com/design/MIJHFqVgXPInaK17jGBIDY/Inspiracija-portfolio-agencija?node-id=684-3584)
- **Live referenca:** [yoga-db.webflow.io](https://yoga-db.webflow.io/)
- **Lokalni put:** `C:\Users\Goranche\Projects\thrivewithmarina`

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
| Fontovi | Playfair Display (headings), Poppins Medium (body), italic Playfair za akcent |
| Email | Resend (kasnije, za kontakt formu) |
| Hosting | TBD (Vercel pretpostavka) |

### Instalirano (`package.json`)

```json
{
  "next": "16.2.6",
  "react": "19.2.4",
  "react-dom": "19.2.4",
  "gsap": "^3.15.0",
  "@gsap/react": "^2.1.2",
  "lenis": "^1.3.23",
  "tailwindcss": "^4",
  "typescript": "^5"
}
```

### Dev / build napomene

- **`npm run dev`** i **`npm run build`** koriste **`--webpack`** (Turbopack na ovom Windows okruženju pravi probleme).
- **Jedan** dev server na **http://localhost:3000** — ne pokretati drugi `npm run dev` dok je prvi aktivan (dupli proces lomi HMR/CSS).
- Ako sajt „pukne“ ili footer izgleda fiksiran: ugasiti procese na portu 3000, obrisati `.next`, ponovo `npm run dev`.
- `suppressHydrationWarning` na `<html>` i `<body>` (browser ekstenzije tipa Grammarly).
- SWC native binary upozorenje na Windowsu je poznato; webpack/WASM i dalje rade.

---

## 3. Brend i copy

| Stavka | Vrednost |
|---|---|
| Brand name u UI | **ThriveWithMarina** |
| Footer credit | `by GoranFLow` |
| Copyright | `© 2026 ThriveWithMarina` |
| Jezik sajta | EN |
| Tekstovi sekcija | Webflow template copy; `[Studio Name]` → **ThriveWithMarina** gde se pojavi |

---

## 4. Boje, fontovi, design tokens

Definisano u `src/app/globals.css` (`:root` + `@theme inline`):

| Token | Vrednost |
|---|---|
| `--pudra-500` | `#221e20` |
| `--pudra-100` | `#f9f7f6` |
| `--pudra-200` | `#e2d7d2` |
| `--green` | `#909c87` |
| `--green-secondary` | `#636d5c` |
| `--gray-200` | `#949191` |
| `--white` | `#ffffff` |

- Headings: **Playfair Display** (`src/lib/fonts.ts`)
- Body: **Poppins Medium**
- Reduced motion: GSAP `matchMedia("(prefers-reduced-motion: no-preference)")`

### Header link boje (`globals.css`)

- Hero (`data-theme="light"`, nije scroll-ovan): beli linkovi
- Posle scroll-a (`data-scrolled="true"`): tamni linkovi na beloj pill
- Krem/tamne sekcije (`data-theme="dark"`): tamni linkovi

### Tipografija (`globals.css`)

| Klasa | Webflow ekvivalent | Upotreba |
|---|---|---|
| `.heading-large` | `.heading-large` | Hero H1 — `6vw`, max `5rem`, `line-height: 1`, `letter-spacing: -0.03em` |
| `.heading-medium` | `.heading-medium` | Naslovi sekcija — max `4.25rem`, `line-height: 1.1`, `letter-spacing: -0.06em` |

### Layout tokeni (`src/lib/layout.ts`)

| Export | Vrednost / značenje |
|---|---|
| `containerClass` | `max-w-[1440px]`, `px-5` / `md:px-[68px]` (Webflow `.container` @ 1440) |
| `sectionYClass` | `py-20` / `md:py-[160px]` (Webflow `.section` = `10rem`) |
| `sectionHeaderMbClass` | `mb-12` / `md:mb-20` (Webflow `.section-header` = `5rem`) |
| `headerShellClass` | `min-h-[89px]`, `max-w-[1304px]`, rounded pill |
| `heroTitleClass` | `.heading-large` + `max-w-[14.1176em]` |
| `sessionsTitleClass` | `.heading-medium` + `max-w-[43.25em]` |
| `plansTitleClass` | `.heading-medium` + `lg:max-w-[15em]` |
| `journeyTitleClass` | `.heading-medium` + `max-w-[12em]` |

---

## 5. Sekcije sajta — plan vs. status

| # | Sekcija | Status | Komponenta | `id` / anchor |
|---|---|---|---|---|
| 1 | **Header** | ✅ | `Header.tsx` | — |
| 2 | **Hero** | ✅ | `Hero.tsx` | `#Hero` |
| 3 | **Yoga Sessions** | ✅ | `Sessions.tsx` | `#Sessions` |
| 4 | **Expert Instructors** | ✅ | `Instructors.tsx` | `#Experts` |
| 5 | **Reviews** | ✅ | `Reviews.tsx` | `#Reviews` |
| 6 | **Group photo slider** | ✅ | `GroupSlider.tsx` | — (nema anchor) |
| 7 | **Memberships** | ✅ | `Memberships.tsx` | `#Memberships` |
| 8 | **Contact** | ✅ | `Contact.tsx` | `#Contact` |
| 9 | **Footer** | ✅ | `Footer.tsx` | — |

### Redosled na home (`src/app/page.tsx`)

```
Header → Hero → … → Contact → **Footer** (van `<main>`)
```

### NE gradimo

- ❌ Timetable of Classes
- ❌ Meet our yoga instructors (grid kartica)
- ❌ Licences / Changelog / Style Guide

### Utility stranice (placeholder)

- ✅ `not-found.tsx` + ruta `/404`
- ✅ `/privacy`
- ✅ `/terms`

Placeholder copy (Lorem + standardne klauzule).

---

## 6. Header / Navigacija

**Fajl:** `src/components/layout/Header.tsx`  
**Nav:** `src/lib/navigation.ts` — Trainers · Reviews · Memberships · Classes

| Anchor u nav | `id` na stranici | Napomena |
|---|---|---|
| `#Experts` | `#Experts` | OK (label: Trainers) |
| `#Reviews` | `#Reviews` | OK |
| `#Memberships` | `#Memberships` | OK |
| `#Sessions` | `#Sessions` | OK (label: Classes) |

### Ponašanje

- **Na hero-u (nije scroll-ovan):** poluprovidna pill `bg-white/[0.12]`, **`backdrop-blur-[60px]`** (kao Webflow `header-blur`), beli linkovi
- **Posle scroll-a (>24px):** bela pill `bg-white/90`, `backdrop-blur-xl`, tamni linkovi (`data-scrolled="true"`)
- **Tema linkova:** `data-header-theme` na sekcijama + ScrollTrigger (`light` na hero/video, `dark` na krem/tamnim blokovima); offset **`top/bottom 89px`** (visina shell-a)
- **Shell:** `headerShellClass` iz `layout.ts`
- **Desktop + mobilni meni CTA:** **Contact** → `#Contact` (belo dugme, `Button` variant `primary`)
- **Mobilni meni:** slide-in panel sa desne, overlay blur

---

## 7. Hero

**Fajl:** `src/components/sections/Hero.tsx`

| Element | Implementacija |
|---|---|
| Pozadina | 2 slike, GSAP crossfade loop |
| Overlay | `hero-overlay` — `bg-black/20` (Webflow: `rgba(0,0,0,.2)`) |
| Video | Ovalni loop desno (`max-w-[324px]`), muted/autoplay/`playsInline` |
| Desktop min-height | `md:min-h-[56.25rem]` (900px) |
| Desktop padding | `md:pt-[22.8125rem]`, `md:pb-[5.625rem]` |
| Grid | `1fr` / `0.5fr`, `gap-x-[9.5rem]` unutar `containerClass` |
| H1 | `heroTitleClass` — **3 reda** na desktopu (Webflow `hero-title-text`): Discover *balance* and / *inner harmony* at our / yoga studio |
| Tekst | `max-w-[28.5556em]` (Webflow `.hero-text`) |
| Mobile layout | Jedna kolona: naslov → video → tekst → CTA |
| CTA | **Contact**, belo dugme / crni tekst, `#Contact` |
| Header tema | `data-header-theme="light"` |

**Figma napomena:** u importu nema eksplicitnog sloja „overlay“ po imenu; vizuelno odgovara Webflow `hero-overlay` (20% crno).

---

## 8. CTA dugmad

| Lokacija | Tekst | Stil | Link |
|---|---|---|---|
| Hero | Contact | Belo / crno (`primary`) | `#Contact` |
| Header (desktop + mobile) | Contact | Belo / crno (`primary`) | `#Contact` |
| Instructors | Buy a subscription | Zeleno (`green`) | `#` |
| Memberships | Buy a subscription | tamno / belo na VIP | `#` |
| Contact submit | Send message | — | `console.log` (Resend kasnije) |
| Newsletter (footer) | Subscribe | UI only | — |

---

## 9. Sekcije — detalji implementacije

### Sessions (`#Sessions`, `data-header-theme="dark"`)

- **Naslov (desktop):** `sessionsTitleClass` — jedan flow tekst, **2 reda** pri `max-w-[43.25em]`: *Yoga sessions this **find balance** and inner peace*
- **Desktop:** GSAP horizontal scroll + progress bar; **track kartica puna širina ekrana** (`w-full overflow-hidden`), naslov u `containerClass`; lista `pl-5 md:pl-[68px] md:pr-[68px]`
- **Mobile:** vertikalni **stack** kartica (peek **14px**, `top` od **100px**), **bez** progress bara
- **Data:** `src/data/sessions.ts` (5 sesija)
- **Asset:** `public/assets/sessions/session-logo.svg`

### Expert Instructors (`#Experts`)

- Krem blok: `md:py-[160px]`, `lg:min-h-[56.25rem]`, `heading-medium` naslov
- Krem blok: naslov, copy, zeleni CTA „Buy a subscription“ (`#`)
- Ovalna slika + GSAP scroll reveal / blagi parallax
- Sticky full-width **video** pozadina (`experts-bg.mp4`), `data-header-theme="light"` na video delu
- **Assets:** `instructor.webp`, `experts-bg.mp4`, poster

### Reviews (`#Reviews`, `data-header-theme="dark"`)

- `sectionYClass` + `containerClass`; naslov `heading-medium`
- Tamna pozadina (`pudra-500`), beli naslov (italic akcenti)
- **Desktop:** masonry 3 kolone (`columns-3`, `break-inside-avoid`)
- **Ispod `lg`:** wallet stack (sticky scroll, peek 14px) — kao Sessions
- 9 recenzija: `src/data/reviews.ts`
- Video kartice → `VideoLightbox` (Vimeo za Emily/Olivia; lokalni MP4 za James)
- **Assets:** `public/assets/reviews/` (posteri + `james.mp4`)

### Footer (`data-header-theme="light"`)

- Tamna pozadina (`pudra-500`), **`relative z-0`** (bez `sticky bottom-0` — Lenis lomi sticky reveal)
- `pt-20` na wrapperu (preklapanje Contact), `footer` unutra `pt-[8.75rem]` (Webflow)
- `containerClass` za sadržaj
- Newsletter: Email + Subscribe (UI only, `console.log`)
- Menu + Utility links (404, Privacy, Terms — ne Licence/Changelog)
- Društvene mreže (LinkedIn, Twitter, Facebook)
- © 2026 ThriveWithMarina · **by GoranFLow**
- Back-to-top → `#Hero` (desktop u top bloku, mobile pored loga)
- Contact sekcija: `-mb-16/md:-mb-20` preklapanje pre footera

### Contact (`#Contact`, `data-header-theme="dark"`)

- `md:py-[160px]`, `heading-medium` naslov; `containerClass`, gap `90px` na lg
- Naslov: *Get in **touch***, forma + ovalna slika
- Polja: Name*, Email*, Message* — submit → `console.log` (Resend kasnije)
- Uspeh: inline poruka „Thank you! Your submission has been received!“
- **Desktop:** forma levo, slika desno; blagi parallax na slici
- **Mobile:** `flex-col-reverse` — slika iznad, forma ispod
- **Asset:** `public/assets/contact/contact.webp`

### Memberships (`#Memberships`, `data-header-theme="dark"`)

- Naslov: `plansTitleClass` — **2 reda** na desktopu (`lg:max-w-[15em]`): *Pricing **plans** for your yoga **wellness journey***
- Sekcija: `sectionYClass` + `containerClass`
- 3 plana: Basic ($125), VIP ($150, zelena kartica), Online ($225)
- **Desktop (lg+):** 3 kolone u redu, VIP blago uvećan (`scale-[1.03]`)
- **Ispod lg:** statičan vertikalni stack (jedna ispod druge), bez swipe-a
- CTA: „Buy a subscription“ → `#` (tamno na belim, belo na VIP)
- **Data:** `src/data/memberships.ts`

### Group photo slider (posle Reviews)

- Naslov u `containerClass`: `journeyTitleClass` (`max-w-[12em]`)
- **Slider:** naslov u containeru; traka **puna širina viewporta** (`overflow-hidden`)
- **Kartica:** `w-[94vw] max-w-[79rem]` (~97% container sadržaja @ 1440), `aspect-[1.625/1]`, `rounded-[40px]`
- **Peek:** aktivni slajd **centriran** u viewportu (GSAP `x = viewport/2 - slide/2 - index * step`); susedne kartice delimično vidljive levo/desno
- Razmak između slajdova: `gap-5`
- 5 slika, strelice ◀ ▶ (desktop), GSAP slide + scroll reveal
- Mobilni dots ispod (u containeru)
- Bela pozadina, `data-header-theme="dark"`
- **Data:** `src/data/journey.ts`  
- **Assets:** `public/assets/journey/slide-1.webp` … `slide-5.webp`

> **Ne koristiti** `sticky bottom-0` na footeru — sa Lenis-om izgleda kao fiksiran footer kroz celu stranicu. Footer je `relative`; Contact preklapanje ostaje preko `-mb-16/md:-mb-20`.

---

## 10. Mobilni

- **Referenca:** `c:\Users\Goranche\Desktop\yoga sajt mobile.mp4`
- Keyframes: `public/assets/mobile-ref/frame_01.jpg` … `frame_15.jpg`

| Sekcija | Ponašanje (cilj / implementirano) |
|---|---|
| Header | Pill + blur na hero; tamni tekst na krem |
| Hero | Single column flow ✅ |
| Sessions | Vertikalni stack (ne swipe) ✅ |
| Instructors | Centrirana ovalna slika ✅ |
| Reviews | Wallet stack ispod `lg` ✅ |
| Group slider | Strelicama + dots ✅ |
| Memberships | Vertikalni stack ispod `lg` ✅ |
| Contact/Footer | Vertikalni stack ✅ |

---

## 11. Assets (preuzeto)

```
public/assets/
  brand/logo.svg
  hero/                    # carousel-1/2.jpg, hero-video.mp4, posteri
  sessions/session-logo.svg
  instructors/             # instructor.webp, experts-bg.mp4, poster
  reviews/                 # emily.webp, olivia.webp, james-poster.jpg, james.mp4
  journey/                 # slide-1 … slide-5.webp
  contact/                 # contact.webp
  mobile-ref/              # frame_01 … frame_15.jpg
```

Izvor URL-ova: Webflow CDN (`temp.html` + skripte u `scripts/`). Figma MCP asseti imaju 7-day expiry — preuzimati odmah.

---

## 12. Animacije

| Sekcija | Animacija | Status |
|---|---|---|
| Hero | Carousel crossfade | ✅ |
| Header | Pill + blur scroll | ✅ |
| Sessions | Horizontal scrub + progress (desktop) | ✅ |
| Instructors | Reveal + parallax slike | ✅ |
| Reviews | Reveal + lightbox | ✅ |
| Group slider | Slide + strelice | ✅ |
| Memberships | Stagger reveal + VIP zelena kartica | ✅ |
| Contact | Forma + parallax slika | ✅ |
| Footer | Newsletter UI + back-to-top | ✅ |

**Toolbox:** `gsap`, `ScrollTrigger`, `Lenis`, `@gsap/react` (`useGSAP`), `gsap.matchMedia()`.

---

## 13. Struktura koda (trenutno)

```
src/
  app/
    layout.tsx              # fontovi, SmoothScroll, suppressHydrationWarning
    page.tsx                # home — sve sekcije (vidi §5)
    globals.css             # tokens + .heading-large/medium + header link boje
    not-found.tsx
    404/page.tsx            # redirect na notFound()
    privacy/page.tsx
    terms/page.tsx
  components/
    layout/
      Header.tsx
      SmoothScroll.tsx
      Footer.tsx
    sections/
      Hero.tsx
      Sessions.tsx
      Instructors.tsx
      Reviews.tsx
      GroupSlider.tsx
      Memberships.tsx
      Contact.tsx
    ui/
      Button.tsx            # primary | secondary | dark | green
      StarRating.tsx
      VideoLightbox.tsx
  data/
    sessions.ts
    reviews.ts
    journey.ts
    memberships.ts
  lib/
    fonts.ts
    layout.ts               # containerClass, sectionYClass, naslov klase
    navigation.ts
scripts/                      # extract/download asset skripte
temp.html / temp.css          # Webflow referenca (fallback za Figma MCP)
```

GSAP logika je u komponentama (`useGSAP` + `scope`); nema zasebnog `lib/animations/`.

---

## 14. Odgovori korisnika (zaključano)

| # | Tema | Odgovor |
|---|---|---|
| 1 | Brand | **ThriveWithMarina** |
| 2 | Nav linkovi | Ostaju; kasnije preimenovanje/prelinkovanje |
| 3 | Group slider | Ulazi u sajt, **posle Reviews** |
| 4 | Hero mobile | **A** — jedna kolona |
| 5 | Utility copy | Placeholder |
| 6 | Copyright | © 2026 ThriveWithMarina |
| 7 | Buy a subscription | `#` osim gde Figma kaže Contact (hero/header) |
| 8 | Sessions mobile | **A** — vertikalni stack, peek 14px, **bez** progress bara |
| 9 | Hero CTA / header blur | Contact + jači blur (60px) na hero headeru |

---

## 15. Checklist

### Završeno

- [x] GSAP + Lenis + `@gsap/react`
- [x] Fontovi + design tokens
- [x] Lenis + ScrollTrigger proxy
- [x] Header (blur, tema, mobilni meni, Contact CTA)
- [x] Hero (carousel, overlay, video, Contact CTA)
- [x] Sessions (desktop scroll + mobile stack)
- [x] Expert Instructors (video + oval slika)
- [x] Reviews (masonry + swipe + lightbox)
- [x] Group photo slider
- [x] Mobile ref keyframes
- [x] Webpack dev/build skripte

### Završeno (pixel-perfect + QA fixevi)

- [x] Pixel-perfect: `layout.ts`, `160px`/`68px` spacing, `.heading-large` / `.heading-medium`
- [x] Nav anchor-i (`#Experts`, `#Sessions`)
- [x] Hero H1 — 3 reda, `14.1176em`
- [x] Sessions naslov — 2 reda; kartice full-bleed track na desktopu
- [x] Memberships naslov — 2 reda (`15em`)
- [x] Group slider — centriran slajd + peek; kartica `max-w-[79rem]`
- [x] Footer bez `sticky` (Lenis fix)
- [x] Memberships, Contact, Footer, utility stranice

### Sledeće

- [ ] Zameniti placeholder copy (footer blurb, utility stranice)
- [ ] Finalni vizuelni QA 375px / 1440px po potrebi
- [ ] Resend integracija za Contact formu (kasnije)

---

## 16. Figma MCP

- Povezan; `get_design_context` pre kodiranja sekcije
- Rate limit na Starter planu — fallback: Webflow HTML (`temp.html`) + CSS CDN
- Hero overlay: u Figmi nije imenovan u metapodacima; Webflow `hero-overlay` = 20% crno

---

## 17. Konvencije

- Komponente: PascalCase, named exports
- GSAP cleanup: `useGSAP` + `scope`
- Slike: `next/image`, `alt`, `sizes`
- A11y: semantic HTML, `prefers-reduced-motion`
- Minimalan diff; bez nepotrebnih apstrakcija

---

## 18. Definition of Done (per sekcija)

1. Layout ~Figma/Webflow na 1440 i 375
2. Animacije 60fps
3. Reduced motion fallback
4. Linter čist na fajlovima sekcije

---

## 19. Sledeći koraci

1. Zameniti placeholder copy na utility stranicama i u footeru
2. Finalni vizuelni QA (375 / 1440) — prijaviti sekciju ako odstupa
3. Resend za Contact formu (kada bude prioritet)

> Home stranica je funkcionalno kompletna. Dalje: copy, backend forme, deploy.

---

## 20. Istorija važnih fixeva (dev)

| Problem | Uzrok | Rešenje |
|---|---|---|
| Footer fiksiran pri skrolu | `sticky bottom-0` + Lenis | Footer `relative z-0`; Contact `-mb-16/md:-mb-20` |
| CSS/layout „pukne“ | Dva `npm run dev` na portu 3000 | Jedan server; kill port 3000; obriši `.next` |
| Journey slider preširok | Kartica `w-[97%]` od celog viewporta | `max-w-[79rem]` + centriranje trake |
| Hero naslov previše redova | `max-w-[14ch]` | `max-w-[14.1176em]` + 3 eksplicitna reda |
