import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { HeroContactAside, PageHero } from "@/components/site/PageHero";
import { SERVICES } from "@/components/site/services-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Moving Services Nairobi | Rahisi Movers" },
      {
        name: "description",
        content:
          "Home moving, office relocation, packing, storage and international shipping from Nairobi.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Every lane covered"
        description="Home, office, packing, storage and freights — same checklist, same care. Jump in with a free estimate."
        aside={<HeroContactAside />}
      />

      {/* Quick jump chips — fills unused space under intro */}
      <div className="border-b border-border bg-card px-5 py-4 md:px-10">
        <div className="mx-auto flex max-w-[1400px] flex-wrap gap-2">
          {SERVICES.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-full border border-border px-4 py-2 text-sm font-semibold transition hover:border-ink hover:bg-ink hover:text-background"
            >
              {s.title}
            </a>
          ))}
        </div>
      </div>

      {SERVICES.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className="scroll-mt-28 border-b border-border px-5 py-12 md:px-10 md:py-16"
        >
          <div
            className={`mx-auto grid max-w-[1400px] gap-8 lg:grid-cols-2 lg:items-center ${
              i % 2 === 1 ? "lg:[&>figure]:order-2" : ""
            }`}
          >
            <figure className="aspect-4/3 overflow-hidden rounded-2xl">
              <img
                src={s.image}
                alt={s.title}
                loading="lazy"
                className="size-full object-cover"
              />
            </figure>
            <Reveal>
              <s.Icon size={28} className="text-saffron-deep" />
              <h2 className="font-display mt-3 text-3xl md:text-4xl">{s.title}</h2>
              <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
                {s.detail}
              </p>
              <ul className="mt-5 space-y-2.5">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm">
                    <Check size={18} className="shrink-0 text-accent" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/quote"
                className="mt-7 inline-block rounded-full bg-ink px-8 py-3.5 text-sm font-bold text-background transition-transform hover:scale-[1.02]"
              >
                Request a quote
              </Link>
            </Reveal>
          </div>
        </section>
      ))}
    </>
  );
}
