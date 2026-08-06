import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { PROCESS_STEPS } from "@/components/site/services-data";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "How We Move | Rahisi Movers Process" },
      {
        name: "description",
        content:
          "Survey, pack, move, settle — Rahisi Movers' four-step process for calm home and office relocations in Kenya.",
      },
    ],
  }),
  component: ProcessPage,
});

function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Process"
        title={
          <>
            Your move, as a
            <br />
            manifest
          </>
        }
        description="No mystery days. Each step is booked, written and owned by the crew that shows up in Rahisi kit."
        aside={
          <ol className="grid grid-cols-2 gap-3">
            {PROCESS_STEPS.map((s) => (
              <li
                key={s.n}
                className="rounded-2xl border border-background/15 bg-background/10 px-4 py-4 backdrop-blur-sm"
              >
                <span className="font-display text-2xl text-accent">{s.n}</span>
                <p className="mt-1 text-sm font-bold text-background">{s.title}</p>
              </li>
            ))}
          </ol>
        }
      />

      <section className="px-5 py-10 md:px-10 md:py-14">
        <div className="mx-auto max-w-[1200px] space-y-12">
          {PROCESS_STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.05}>
              <article
                className={`grid items-center gap-8 md:grid-cols-2 md:gap-10 ${
                  i % 2 === 1 ? "md:[&>figure]:order-2" : ""
                }`}
              >
                <figure className="overflow-hidden rounded-2xl border border-border">
                  <img
                    src={s.image}
                    alt={`${s.title} — Rahisi Movers`}
                    loading="lazy"
                    className="aspect-4/3 w-full object-cover"
                  />
                </figure>
                <div>
                  <span className="font-display text-5xl text-saffron-deep md:text-6xl">
                    {s.n}
                  </span>
                  <h2 className="font-display mt-2 text-3xl md:text-4xl">
                    {s.title}
                  </h2>
                  <p className="mt-3 max-w-lg leading-relaxed text-muted-foreground">
                    {s.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mx-auto mt-12 max-w-[1200px]">
          <Link
            to="/quote"
            className="inline-flex rounded-full bg-accent px-8 py-4 text-sm font-bold text-accent-foreground"
          >
            Start with a free estimate
          </Link>
        </div>
      </section>
    </>
  );
}
