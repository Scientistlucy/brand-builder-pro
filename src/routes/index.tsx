import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, MapPin, Phone, Star } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { HeroSlider } from "@/components/site/HeroSlider";
import { SERVICES, PROCESS_STEPS } from "@/components/site/services-data";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rahisi Movers | Nairobi Moving Company" },
      {
        name: "description",
        content:
          "Lively, professional home and office movers in Nairobi. Free estimate, careful packing, Industrial Area base. Call or quote online.",
      },
    ],
  }),
  component: Home,
});

const TRUST_CHIPS = [
  "Google · 4.9",
  "Licensed crew",
  "Goods-in-transit",
  "500+ moves",
  "Industrial Area HQ",
  "Fixed written quotes",
  "Weekend office moves",
  "East Africa corridors",
];

const TESTIMONIALS = [
  {
    quote:
      "Kilimani flat, done before lunch. Glass cabinet intact. Clear price, no drama.",
    name: "Wanjiru M.",
    place: "Kilimani",
  },
  {
    quote:
      "Westlands office over one weekend. Phones worked Monday. Fair and on time.",
    name: "Dennis O.",
    place: "Westlands",
  },
];

function Stars() {
  return (
    <span className="flex gap-0.5" aria-label="5 of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} size={14} className="fill-accent text-accent" aria-hidden />
      ))}
    </span>
  );
}

function Home() {
  const reduced = useReducedMotion();
  const rise = (d: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay: d, ease: [0.16, 1, 0.3, 1] as const },
        };

  const featured = SERVICES.find((s) => s.featured) ?? SERVICES[0];
  const rest = SERVICES.filter((s) => s.id !== featured.id).slice(0, 4);

  return (
    <>
      {/* HERO — branded slide story */}
      <section
        className="relative isolate min-h-[92vh] overflow-hidden bg-ink text-background"
        aria-label="Rahisi Movers: pack, load, and deliver"
      >
        <HeroSlider />


        <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-[1400px] flex-col justify-end px-5 pb-36 pt-28 md:justify-center md:px-10 md:pb-40">
          <motion.div
            {...rise(0)}
            className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-background/20 bg-ink/40 px-3 py-1.5 text-xs font-semibold backdrop-blur-md"
          >
            <Stars />
            <span>
              {SITE.googleRating} Google · {SITE.movesCompleted} moves
            </span>
          </motion.div>

          <motion.p {...rise(0.05)} className="eyebrow text-accent">
            Kileleshwa · Industrial Area · Nairobi
          </motion.p>

          <motion.h1
            {...rise(0.1)}
            className="mt-4 max-w-3xl font-sans text-[clamp(2.5rem,8vw,5rem)] font-bold leading-[1.05] tracking-tight drop-shadow-sm"
          >
            Moves that
            <br />
            <span className="text-accent">actually land.</span>
          </motion.h1>

          <motion.p
            {...rise(0.18)}
            className="mt-5 max-w-md text-base leading-relaxed text-background/90 md:text-lg"
          >
            From packing with the Rahisi stamp to loading the truck — a clean handoff for homes and offices across Kenya.
          </motion.p>

          <motion.div {...rise(0.26)} className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/quote"
              className="rounded-full bg-accent px-8 py-4 text-sm font-bold text-accent-foreground shadow-lg transition-transform hover:scale-[1.03]"
            >
              Get free estimate
            </Link>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-background/40 bg-ink/35 px-8 py-4 text-sm font-bold backdrop-blur-md transition-colors hover:border-accent hover:text-accent"
            >
              <Phone size={16} /> Call now
            </a>
          </motion.div>
        </div>
      </section>

      {/* TRUST MARQUEE */}
      <div className="border-y border-border bg-card overflow-hidden py-3" aria-hidden>
        <div className="marquee gap-10 px-4">
          {[...TRUST_CHIPS, ...TRUST_CHIPS].map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="shrink-0 text-sm font-semibold tracking-wide text-muted-foreground"
            >
              {t}
              <span className="ml-10 text-saffron-deep">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* BENTO SERVICES — 1 large + 2×2 right (no empty gap) */}
      <section className="px-5 py-14 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-saffron-deep">Services</p>
              <h2 className="font-display mt-3 text-4xl md:text-5xl">
                Built like a route map
              </h2>
              <p className="mt-3 max-w-md text-muted-foreground">
                Pick your lane — home, office, freight, packing or storage.
              </p>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-bold hover:text-saffron-deep"
            >
              All services <ArrowUpRight size={16} />
            </Link>
          </Reveal>

          <div className="mt-10 grid gap-4 lg:grid-cols-2 lg:items-stretch">
            {/* Featured home — fills full height of right stack */}
            <Reveal className="min-h-0 h-full">
              <Link
                to="/services"
                hash={featured.id}
                className="bento-card group relative block h-full min-h-[380px] overflow-hidden"
              >
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-background md:p-8">
                  <featured.Icon className="text-accent" size={28} />
                  <h3 className="font-display mt-3 text-3xl md:text-4xl">
                    {featured.title}
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-background/80">
                    {featured.summary}
                  </p>
                </div>
              </Link>
            </Reveal>

            {/* Right: 2×2 grid fills the empty space */}
            <div className="grid gap-4 sm:grid-cols-2 sm:grid-rows-2">
              {rest.map((s, i) => (
                <Reveal key={s.id} delay={0.05 * (i + 1)} className="min-h-0 h-full">
                  <Link
                    to="/services"
                    hash={s.id}
                    className="bento-card group flex h-full min-h-[200px] flex-col overflow-hidden"
                  >
                    <div className="aspect-[16/10] shrink-0 overflow-hidden sm:aspect-[5/3]">
                      <img
                        src={s.image}
                        alt={s.title}
                        loading="lazy"
                        className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-center p-4 md:p-5">
                      <s.Icon size={20} className="text-saffron-deep" />
                      <h3 className="font-display mt-2 text-xl md:text-2xl">
                        {s.title}
                      </h3>
                      <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                        {s.summary}
                      </p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS MANIFEST */}
      <section className="ink-panel route-lanes px-5 py-16 md:px-10 md:py-24">
        <div className="relative mx-auto max-w-[1400px]">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow text-accent">The manifest</p>
              <h2 className="font-display mt-3 text-4xl text-background md:text-6xl">
                Four steps. Done right.
              </h2>
            </div>
            <Link
              to="/process"
              className="rounded-full border border-background/25 px-5 py-2.5 text-sm font-bold text-background hover:border-accent hover:text-accent"
            >
              Full process
            </Link>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.06}>
                <article className="rounded-2xl border border-background/10 bg-background/5 p-6 backdrop-blur-sm">
                  <span className="font-display text-4xl text-accent">{s.n}</span>
                  <h3 className="mt-4 text-xl font-bold text-background">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-background/65">
                    {s.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-4xl md:text-5xl">On the record</h2>
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-saffron-deep underline-offset-4 hover:underline"
            >
              Google Maps reviews â†’
            </a>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <figure className="bento-card p-8">
                  <Stars />
                  <blockquote className="mt-5 text-xl font-medium leading-snug md:text-2xl">
                    â€œ{t.quote}â€
                  </blockquote>
                  <figcaption className="mt-6 text-sm">
                    <span className="font-bold">{t.name}</span>
                    <span className="text-muted-foreground"> · {t.place}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SAFFRON CTA */}
      <section className="saffron-band px-5 py-14 md:px-10 md:py-16">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="font-display text-4xl md:text-5xl">Ready when you are.</p>
            <p className="mt-2 max-w-md text-sm font-medium opacity-80 md:text-base">
              Online estimate in minutes — or talk to a coordinator today.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/quote"
              className="rounded-full bg-ink px-7 py-3.5 text-sm font-bold text-background transition-transform hover:scale-[1.03]"
            >
              Start quote
            </Link>
            <a
              href={SITE.phoneHref}
              className="rounded-full border-2 border-ink/20 px-7 py-3.5 text-sm font-bold"
            >
              {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      {/* MAP / LOCATION — real map, not stripe placeholder */}
      <section className="px-5 py-14 md:px-10 md:py-16">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
                <div className="flex flex-col justify-center p-8 md:p-10">
                  <p className="eyebrow text-saffron-deep">HQ · Nairobi</p>
                  <h2 className="font-display mt-3 text-3xl md:text-4xl">
                    Find us on Enterprise Road
                  </h2>
                  <p className="mt-3 max-w-md text-muted-foreground">
                    {SITE.address}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">{SITE.hours}</p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      href={SITE.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-accent-foreground"
                    >
                      <MapPin size={16} /> Open in Google Maps
                    </a>
                    <a
                      href={SITE.phoneHref}
                      className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-bold"
                    >
                      Call {SITE.phone}
                    </a>
                  </div>
                </div>
                <div className="relative min-h-[280px] bg-muted lg:min-h-[340px]">
                  <iframe
                    title="Rahisi Movers — Enterprise Road, Industrial Area, Nairobi"
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(SITE.address)}&z=15&output=embed`}
                    className="absolute inset-0 size-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
