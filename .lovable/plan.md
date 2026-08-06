# Rahisi Movers — Editorial Industrial Website

A premium moving company site for Nairobi, built in a bold black-and-white editorial style with a warm gold accent.

## Design system

- Palette: near-black `#1A1A1A`, pure white, warm gold `#D4A84B`, plus a 5-step gray scale — wired into the project's token system so no hardcoded colors live in components.
- Type: Bebas Neue for display headlines (loaded via a font link in the root layout), Work Sans for body. Hero headlines at 4–6rem, dropping cleanly on mobile.
- Sharp corners everywhere (zero border radius), thin high-contrast rules instead of shadows, subtle CSS grain overlay on the hero.
- Motion: one hero entrance reveal, scroll-triggered section reveals, restrained hover states. Nothing decorative.

## Pages

Separate routes so each has its own title/description and can be shared and indexed:

- `/` — Home: hero, trust bar, services preview, why-choose pillars, testimonials, quote calculator, service area, footer
- `/services` — the three services in full
- `/about` — company story, experience, team approach
- `/contact` — contact details, service areas, enquiry form

Shared header (logo, nav, gold "Get a Quote" CTA) and footer in the root layout.

## Home sections

1. Hero — full-bleed dark, oversized "Move with Confidence.", subline "Local & International Relocation — Nairobi, Kenya", gold primary CTA + call-now secondary, desaturated moving-truck imagery behind.
2. Trust bar — horizontal strip: Licensed & Insured, 5+ Years, 500+ Moves, 100% Satisfaction, Google review stars.
3. Services — three asymmetric editorial cards: Residential, Office, International.
4. Why Rahisi — four pillars: Reliable & Punctual, Careful Handling, Transparent Pricing, Experienced Team.
5. Testimonials — three client quotes with names and locations, review stars.
6. Instant quote calculator — 3 steps (move type, from → to, size) producing an estimated KES price range plus a "Get Detailed Quote" CTA. Pure client-side pricing logic, no backend.
7. Service area — Nairobi, Mombasa, Kisumu, Nakuru, Eldoret + international destinations.
8. Footer — contact, quick links, socials.

## Imagery

Generated black-and-white / desaturated photography: a hero moving-truck-and-crew shot, plus supporting images for services and about. No smiling-stock-office photos.

## Technical notes

- React + TypeScript on the existing TanStack Start setup; styling via Tailwind v4 tokens defined in `src/styles.css` (the project has no CSS-modules/styled-components setup — tokens give the same design-system guarantee).
- Motion via the `motion` library for the hero reveal and scroll-triggered section entrances, respecting `prefers-reduced-motion`.
- Quote calculator is local component state with a rate table; no data is stored.
- Accessibility: AA contrast on all text, keyboard-navigable steps and nav, visible gold focus rings, ARIA labels on icon-only controls, single `<main>` per page, lazy-loaded images.
- Placeholder phone `+254 700 000 000` and email until real details are supplied.

## Not included

No database, auth, or form submission backend — the quote calculator and contact form are front-end only. Say the word if you want enquiries emailed or stored.
