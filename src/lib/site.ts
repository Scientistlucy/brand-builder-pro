/** Shared business details used across the site. */
export const SITE = {
  name: "Rahisi Movers",
  shortName: "Rahisi",
  tagline: "Your move, sorted.",
  phone: "+254 700 000 000",
  phoneHref: "tel:+254700000000",
  email: "hello@rahisimovers.co.ke",
  emailHref: "mailto:hello@rahisimovers.co.ke",
  address: "Enterprise Road, Industrial Area, Nairobi",
  hours: "Mon–Sat, 7:00 – 19:00 EAT",
  mapsUrl: "https://maps.app.goo.gl/FqtD18D8niedtVVAA",
  googleRating: "4.9",
  movesCompleted: "500+",
} as const;

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/process", label: "Process" },
  { to: "/gallery", label: "Gallery" },
  { to: "/faq", label: "FAQ" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;
