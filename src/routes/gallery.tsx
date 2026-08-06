import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { GALLERY } from "@/components/site/services-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Work Gallery | Rahisi Movers" },
      {
        name: "description",
        content:
          "A look at Rahisi Movers jobs — home pack-outs, office moves and staging in and around Nairobi.",
      },
    ],
  }),
  component: GalleryPage,
});

const FILTERS = ["All", "Home", "Office", "International"] as const;

function GalleryPage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const items = useMemo(
    () =>
      filter === "All" ? GALLERY : GALLERY.filter((g) => g.tag === filter),
    [filter],
  );

  const heroBg = GALLERY[0]?.image;
  const peeks = GALLERY.slice(1, 4);

  return (
    <>
      {/* Full-bleed job photo hero */}
      <section className="relative min-h-[min(72vh,640px)] overflow-hidden">
        {heroBg ? (
          <img
            src={heroBg}
            alt=""
            aria-hidden
            className="absolute inset-0 size-full object-cover"
            loading="eager"
          />
        ) : null}
        {/* Dim + brand grade for title readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, oklch(0.18 0.02 55 / 0.92) 0%, oklch(0.18 0.02 55 / 0.78) 42%, oklch(0.18 0.02 55 / 0.45) 100%), radial-gradient(ellipse 70% 80% at 100% 0%, color-mix(in oklch, var(--saffron) 22%, transparent), transparent 55%)",
          }}
        />

        <div className="relative mx-auto grid min-h-[min(72vh,640px)] max-w-[1400px] items-end gap-10 px-5 py-14 md:px-10 md:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div className="max-w-2xl pb-2">
            <p className="eyebrow text-accent">Gallery</p>
            <h1 className="font-display mt-4 text-[clamp(2.75rem,8vw,5.25rem)] leading-[0.92] tracking-tight text-background">
              On site.
              <br />
              <span className="text-accent">In motion.</span>
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-background/75 md:text-lg">
              Real Rahisi job moments — from Kileleshwa doorstep to truck load to
              last box in.
            </p>
          </div>

          {peeks.length > 0 ? (
            <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:pb-1">
              {peeks.map((g, i) => (
                <figure
                  key={g.id}
                  className={cn(
                    "overflow-hidden rounded-xl border border-background/20 shadow-lg shadow-black/30",
                    i === 1 && "translate-y-3 sm:translate-y-5",
                  )}
                >
                  <img
                    src={g.image}
                    alt={g.title}
                    className="aspect-[3/4] w-full object-cover"
                    loading="eager"
                  />
                </figure>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <div className="border-b border-border bg-card px-5 py-4 md:px-10">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            <span className="font-bold text-ink">{items.length}</span> shots
            {filter !== "All" ? (
              <>
                {" "}
                · filtered by <span className="font-semibold">{filter}</span>
              </>
            ) : null}
          </p>
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-bold transition-colors",
                  filter === f
                    ? "bg-ink text-background"
                    : "border border-border text-muted-foreground hover:border-ink hover:text-ink",
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="px-5 py-10 md:px-10 md:py-12">
        <div className="mx-auto max-w-[1400px] columns-1 gap-4 sm:columns-2 lg:columns-3">
          {items.map((g, i) => (
            <Reveal key={g.id} delay={i * 0.04} className="mb-4 break-inside-avoid">
              <figure className="bento-card group">
                <div
                  className={cn(
                    "overflow-hidden",
                    i % 3 === 0 ? "aspect-4/5" : "aspect-4/3",
                  )}
                >
                  <img
                    src={g.image}
                    alt={g.title}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <figcaption className="flex items-center justify-between p-4">
                  <span className="font-semibold">{g.title}</span>
                  <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-bold text-muted-foreground">
                    {g.tag}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="mx-auto mt-12 flex max-w-[1400px] flex-col items-start justify-between gap-4 rounded-2xl border border-border bg-card p-6 sm:flex-row sm:items-center md:p-8">
          <div>
            <p className="font-display text-2xl md:text-3xl">Seen enough?</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Book a free survey — same crew energy as the photos.
            </p>
          </div>
          <Link
            to="/quote"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-accent-foreground"
          >
            Get a free estimate <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
