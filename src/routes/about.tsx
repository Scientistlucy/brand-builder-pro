import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { HeroStatsAside, PageHero } from "@/components/site/PageHero";
import { ABOUT_IMAGES } from "@/components/site/services-data";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Rahisi Movers | Nairobi Crew" },
      {
        name: "description",
        content:
          "Nairobi-based movers on Enterprise Road — permanent crew, fixed pricing, local knowledge.",
      },
    ],
  }),
  component: AboutPage,
});

const NUMBERS = [
  { value: "2019", label: "Started here" },
  { value: "500+", label: "Moves done" },
  { value: "24", label: "Crew on staff" },
  { value: "9", label: "Vehicles" },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            Nairobi crew.
            <br />
            Not a middleman.
          </>
        }
        description="Permanent staff on Enterprise Road — not day labour, not a broker list."
        aside={
          <HeroStatsAside
            stats={NUMBERS.map((n) => ({
              value: n.value,
              label: n.label,
            }))}
          />
        }
      />

      <section className="px-5 py-10 md:px-10 md:py-14">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="text-xl font-medium leading-snug md:text-2xl">
              Permanent staff based on{" "}
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-saffron-deep underline-offset-4 hover:underline"
              >
                Enterprise Road, Industrial Area
              </a>
              — not day labour, not a broker list.
            </p>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Families and offices hire us because we show up on time, pack
              properly and quote one price. Most jobs come from people who
              moved with us before — or a neighbour who did.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <img
              src={ABOUT_IMAGES.hero}
              alt="Rahisi Movers team — Nairobi"
              className="aspect-[4/3] w-full rounded-2xl object-cover"
              loading="lazy"
            />
          </Reveal>
        </div>

        <div className="mx-auto mt-10 grid max-w-[1400px] gap-4 sm:grid-cols-3">
          {[
            { src: ABOUT_IMAGES.packing, label: "Kitchen packing" },
            { src: ABOUT_IMAGES.carry, label: "Apartment move" },
            { src: ABOUT_IMAGES.load, label: "On the truck" },
          ].map((item) => (
            <figure
              key={item.label}
              className="overflow-hidden rounded-2xl border border-border"
            >
              <img
                src={item.src}
                alt={`Rahisi Movers — ${item.label}`}
                className="aspect-4/3 w-full object-cover"
                loading="lazy"
              />
              <figcaption className="px-4 py-3 text-sm font-bold">
                {item.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="saffron-band px-5 py-10 md:px-10 md:py-12">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <h2 className="font-display text-3xl md:text-4xl">Planning a move?</h2>
          <Link
            to="/quote"
            className="rounded-full bg-ink px-8 py-3.5 text-sm font-bold text-background"
          >
            Get a free estimate
          </Link>
        </div>
      </section>
    </>
  );
}
