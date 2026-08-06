import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Phone, Star } from "lucide-react";
import heroImg from "@/assets/hero-movers.jpg";
import { Reveal } from "@/components/site/Reveal";
import { QuoteCalculator } from "@/components/site/QuoteCalculator";
import { SERVICES } from "@/components/site/services-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rahisi Movers | Premium Moving Company in Nairobi" },
      {
        name: "description",
        content:
          "Move with confidence. Rahisi Movers handles residential, office and international relocation from Nairobi with punctual crews and transparent pricing.",
      },
      { property: "og:title", content: "Rahisi Movers | Move with Confidence" },
      {
        property: "og:description",
        content:
          "Residential, office and international relocation from Nairobi. Free instant estimate in three steps.",
      },
    ],
  }),
  component: Home,
});

const TRUST = [
  { value: "500+", label: "Moves completed" },
  { value: "100%", label: "Client satisfaction" },
  { value: "5+", label: "Years experience" },
  { value: "4.9", label: "Google rating" },
];

const PILLARS = [
  {
    n: "01",
    title: "Reliable & Punctual",
    body: "We arrive when we said we would. Every crew runs to a written schedule you receive the day before the move.",
  },
  {
    n: "02",
    title: "Careful Handling",
    body: "Our zero-scratch packing system wraps, corners and crates every item — from glassware to server racks.",
  },
  {
    n: "03",
    title: "Transparent Pricing",
    body: "One fixed quote after a free survey. No fuel surcharges, no stair fees, no invoice surprises.",
  },
  {
    n: "04",
    title: "Experienced Team",
    body: "Trained, vetted, uniformed movers — the same faces our repeat clients ask for by name.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Amazing experience, from the movers to the team who helped us throughout the process. Highly recommend.",
    name: "Wanjiru M.",
    place: "Kilimani, Nairobi",
  },
  {
    quote:
      "Professional, careful, and on time. Not a single scratch on the furniture. Will definitely use them again.",
    name: "Dennis O.",
    place: "Nyali, Mombasa",
  },
  {
    quote:
      "We moved a 40-person office over one weekend and everyone was working by Monday morning. Faultless.",
    name: "Achieng' K.",
    place: "Westlands, Nairobi",
  },
];

const AREAS = [
  "Nairobi",
  "Mombasa",
  "Kisumu",
  "Nakuru",
  "Eldoret",
  "Thika",
  "Naivasha",
  "Machakos",
];

const INTERNATIONAL = [
  "Kampala",
  "Dar es Salaam",
  "Kigali",
  "Addis Ababa",
  "Dubai",
  "London",
  "Johannesburg",
];

function Stars() {
  return (
    <span className="flex gap-1" aria-label="Rated 5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} size={14} className="fill-accent text-accent" aria-hidden="true" />
      ))}
    </span>
  );
}

function Home() {
  const reduced = useReducedMotion();
  const rise = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 40 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] as const },
        };

  return (
    <>
      {/* HERO — full-bleed dark, oversized type overlapping the image */}
      <section className="grain relative isolate overflow-hidden bg-gray-900 text-background">
        <img
          src={heroImg}
          alt="Rahisi Movers crew carrying a wrapped crate down a truck ramp at dawn in Nairobi"
          width={1600}
          height={1104}
          className="absolute inset-0 -z-10 size-full object-cover opacity-45 grayscale"
        />
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-gray-900 via-gray-900/70 to-transparent" />

        <div className="mx-auto max-w-[1400px] px-5 pt-24 pb-20 md:px-10 md:pt-40 md:pb-32">
          <motion.p {...rise(0)} className="eyebrow text-accent">
            Local &amp; international relocation — Nairobi, Kenya
          </motion.p>

          <motion.h1
            {...rise(0.12)}
            className="display mt-6 max-w-5xl text-[clamp(3.5rem,13vw,10rem)]"
          >
            Move with
            <br />
            <span className="text-accent">Confidence.</span>
          </motion.h1>

          <motion.p
            {...rise(0.24)}
            className="mt-8 max-w-xl text-lg leading-relaxed text-gray-300"
          >
            Rahisi Movers packs, lifts and delivers with the precision of a crew
            that has done it five hundred times — because we have.
          </motion.p>

          <motion.div {...rise(0.34)} className="mt-10 flex flex-wrap gap-3">
            <a
              href="#quote"
              className="bg-accent px-8 py-4 font-semibold tracking-wide text-accent-foreground transition-colors hover:bg-background"
            >
              Get a Free Quote
            </a>
            <a
              href="tel:+254700000000"
              className="inline-flex items-center gap-2 border border-gray-500 px-8 py-4 font-semibold tracking-wide transition-colors hover:border-accent hover:text-accent"
            >
              <Phone size={16} aria-hidden="true" /> +254 700 000 000
            </a>
          </motion.div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section aria-label="Credentials" className="border-b border-gray-300 bg-gray-100">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-px bg-gray-300 md:grid-cols-4">
          {TRUST.map((t) => (
            <div key={t.label} className="bg-gray-100 px-5 py-8 text-center md:px-8">
              <p className="display text-4xl md:text-5xl">{t.value}</p>
              <p className="eyebrow mt-2 text-gray-700">{t.label}</p>
            </div>
          ))}
        </div>
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-gray-300 px-5 py-5 text-xs tracking-widest text-gray-700 uppercase md:px-10">
          <span className="flex items-center gap-2">
            <Stars /> Google Reviews
          </span>
          <span>Licensed &amp; Insured</span>
          <span>Goods-in-Transit Cover</span>
        </div>
      </section>

      {/* SERVICES — asymmetric editorial cards */}
      <section className="px-5 py-20 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="grid gap-6 md:grid-cols-[1fr_1fr] md:items-end">
            <div>
              <p className="eyebrow text-gray-500">What we do</p>
              <h2 className="display mt-4 text-6xl md:text-8xl">
                Three ways
                <br />
                we move you
              </h2>
            </div>
            <p className="max-w-md leading-relaxed text-gray-700 md:justify-self-end">
              Every job runs on the same discipline: survey first, plan in
              writing, wrap everything, arrive on time.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-px bg-gray-300 md:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.id} delay={i * 0.08} className="bg-background">
                <article className="group flex h-full flex-col">
                  <div className="aspect-4/3 overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      className="size-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-8">
                    <s.Icon size={28} className="text-accent" aria-hidden="true" />
                    <h3 className="display mt-6 text-4xl">{s.title}</h3>
                    <p className="mt-4 flex-1 leading-relaxed text-gray-700">
                      {s.summary}
                    </p>
                    <Link
                      to="/services"
                      hash={s.id}
                      className="mt-8 inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase transition-colors hover:text-accent"
                    >
                      Learn more <ArrowUpRight size={16} aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY RAHISI */}
      <section className="grain bg-gray-900 px-5 py-20 text-background md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="eyebrow text-accent">Why Rahisi Movers</p>
            <h2 className="display mt-4 max-w-3xl text-6xl md:text-8xl">
              Quietly, relentlessly dependable
            </h2>
          </Reveal>

          <dl className="mt-16 grid gap-px bg-gray-700 sm:grid-cols-2">
            {PILLARS.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.06} className="bg-gray-900">
                <div className="p-8 md:p-12">
                  <span className="display text-2xl text-accent">{p.n}</span>
                  <dt className="display mt-4 text-4xl">{p.title}</dt>
                  <dd className="mt-4 max-w-md leading-relaxed text-gray-300">
                    {p.body}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-5 py-20 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="display text-6xl md:text-8xl">
              What clients
              <br />
              say
            </h2>
            <div className="flex items-center gap-3">
              <Stars />
              <span className="text-sm text-gray-700">4.9 average · Google Reviews</span>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-px bg-gray-300 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08} className="bg-background">
                <figure className="flex h-full flex-col p-8 md:p-10">
                  <Stars />
                  <blockquote className="mt-6 flex-1 text-xl leading-snug">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-8 border-t border-gray-300 pt-5 text-sm">
                    <span className="font-semibold">{t.name}</span>
                    <span className="block text-gray-500">{t.place}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE CALCULATOR */}
      <section
        id="quote"
        className="scroll-mt-24 bg-gray-900 px-5 py-20 text-background md:px-10 md:py-32"
      >
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="eyebrow text-accent">Instant estimate</p>
            <h2 className="display mt-4 text-6xl md:text-8xl">
              Price it
              <br />
              in three
              <br />
              steps
            </h2>
            <p className="mt-6 max-w-sm leading-relaxed text-gray-300">
              Tell us the type of move, the route and the volume. You get an
              indicative range immediately — no phone tag required.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <QuoteCalculator />
          </Reveal>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="px-5 py-20 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-12 md:grid-cols-2">
          <Reveal>
            <p className="eyebrow text-gray-500">Where we operate</p>
            <h2 className="display mt-4 text-5xl md:text-7xl">Across Kenya</h2>
            <ul className="mt-8 flex flex-wrap gap-2">
              {AREAS.map((a) => (
                <li key={a} className="border border-gray-300 px-4 py-2 text-sm">
                  {a}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow text-gray-500">And beyond</p>
            <h2 className="display mt-4 text-5xl md:text-7xl">
              International
            </h2>
            <ul className="mt-8 flex flex-wrap gap-2">
              {INTERNATIONAL.map((a) => (
                <li
                  key={a}
                  className="border border-gray-900 px-4 py-2 text-sm font-medium"
                >
                  {a}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}
