import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SERVICES } from "@/components/site/services-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Moving Services in Nairobi | Rahisi Movers" },
      {
        name: "description",
        content:
          "Residential moving, office relocation and international shipping from Nairobi — packing, crating, customs clearance and storage.",
      },
      { property: "og:title", content: "Moving Services | Rahisi Movers" },
      {
        property: "og:description",
        content:
          "Residential, office and international relocation services across Kenya and beyond.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="grain bg-gray-900 px-5 py-20 text-background md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <p className="eyebrow text-accent">Services</p>
          <h1 className="display mt-4 max-w-4xl text-[clamp(3.5rem,10vw,8rem)]">
            Every move, handled end to end
          </h1>
          <p className="mt-8 max-w-xl leading-relaxed text-gray-300">
            Three service lines, one standard of care. Survey first, plan in
            writing, wrap everything, arrive on time.
          </p>
        </div>
      </section>

      {SERVICES.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className="scroll-mt-24 border-b border-gray-300 px-5 py-20 md:px-10 md:py-28"
        >
          <div
            className={`mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-2 lg:items-center ${
              i % 2 === 1 ? "lg:[&>figure]:order-2" : ""
            }`}
          >
            <figure className="aspect-4/3 overflow-hidden">
              <img
                src={s.image}
                alt={s.title}
                loading="lazy"
                className="size-full object-cover grayscale"
              />
            </figure>
            <Reveal>
              <s.Icon size={32} className="text-accent" aria-hidden="true" />
              <h2 className="display mt-6 text-5xl md:text-7xl">{s.title}</h2>
              <p className="mt-6 max-w-xl leading-relaxed text-gray-700">
                {s.detail}
              </p>
              <ul className="mt-8 space-y-3">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm">
                    <Check size={18} className="shrink-0 text-accent" aria-hidden="true" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-10 inline-block bg-gray-900 px-8 py-4 font-semibold text-background transition-colors hover:bg-accent hover:text-accent-foreground"
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
