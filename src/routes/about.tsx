import { createFileRoute, Link } from "@tanstack/react-router";
import teamImg from "@/assets/team.jpg";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Rahisi Movers | Nairobi Relocation Company" },
      {
        name: "description",
        content:
          "Rahisi Movers is a Nairobi-based relocation company built on punctuality, careful handling and transparent pricing for homes and businesses.",
      },
      { property: "og:title", content: "About Rahisi Movers" },
      {
        property: "og:description",
        content:
          "A Nairobi relocation company built on punctuality, care and transparent pricing.",
      },
    ],
  }),
  component: AboutPage,
});

const NUMBERS = [
  { value: "2019", label: "Founded in Nairobi" },
  { value: "500+", label: "Moves completed" },
  { value: "24", label: "Trained crew members" },
  { value: "9", label: "Vehicles in the fleet" },
];

function AboutPage() {
  return (
    <>
      <section className="grain bg-gray-900 px-5 py-20 text-background md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <p className="eyebrow text-accent">About us</p>
          <h1 className="display mt-4 max-w-4xl text-[clamp(3.5rem,10vw,8rem)]">
            Relocation, redefined
          </h1>
        </div>
      </section>

      <section className="px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <Reveal>
            <p className="text-2xl leading-snug md:text-3xl">
              Rahisi Movers is a premier relocation company based in Nairobi,
              Kenya, dedicated to delivering seamless moving experiences for
              residential and commercial clients.
            </p>
            <p className="mt-8 leading-relaxed text-gray-700">
              With a commitment to punctuality, care and transparent pricing,
              we have helped hundreds of families and businesses transition to
              new spaces — locally and internationally. We started with one
              truck and a rule we still keep: nothing leaves the house until it
              is wrapped properly.
            </p>
            <p className="mt-6 leading-relaxed text-gray-700">
              Our crews are permanent staff, not day labour. They are trained on
              our own packing system, uniformed, and accountable for the
              inventory they sign for. That is why most of our work now comes
              from clients who have moved with us before, or were told to.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <img
              src={teamImg}
              alt="The Rahisi Movers crew standing beside a company truck"
              width={1400}
              height={1000}
              loading="lazy"
              className="w-full object-cover grayscale"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-gray-100 px-5 py-16 md:px-10 md:py-20">
        <dl className="mx-auto grid max-w-[1400px] grid-cols-2 gap-px bg-gray-300 md:grid-cols-4">
          {NUMBERS.map((n) => (
            <div key={n.label} className="bg-gray-100 px-6 py-10 text-center">
              <dt className="display text-5xl md:text-6xl">{n.value}</dt>
              <dd className="eyebrow mt-3 text-gray-700">{n.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-end justify-between gap-8">
          <h2 className="display max-w-2xl text-5xl md:text-7xl">
            Planning a move? Let's talk it through.
          </h2>
          <Link
            to="/contact"
            className="bg-accent px-8 py-4 font-semibold text-accent-foreground transition-colors hover:bg-gray-900 hover:text-background"
          >
            Book a free survey
          </Link>
        </div>
      </section>
    </>
  );
}
