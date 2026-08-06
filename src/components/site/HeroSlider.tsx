import { useCallback, useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

import slideArrive from "@/assets/user-photos/arrive-truck.png";
import slidePack from "@/assets/user-photos/pack-kitchen-a.png";
import slideCarry from "@/assets/user-photos/carry-stairs.png";
import slideLoad from "@/assets/user-photos/load-truck.png";
import slideSettle from "@/assets/user-photos/settle-apartment.png";

export type HeroSlide = {
  id: string;
  src: string;
  step: string;
  title: string;
  caption: string;
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "arrive",
    src: slideArrive,
    step: "01 · Arrive",
    title: "Kileleshwa, Nairobi",
    caption: "Branded Rahisi crew on site — checklist ready, boxes ready.",
  },
  {
    id: "pack",
    src: slidePack,
    step: "02 · Pack",
    title: "Packed with care",
    caption: "Uniformed team, RM tape, fragile items done properly.",
  },
  {
    id: "carry",
    src: slideCarry,
    step: "03 · Move out",
    title: "Out of the house",
    caption: "Boxes and furniture protected as we leave the building.",
  },
  {
    id: "load",
    src: slideLoad,
    step: "04 · Load",
    title: "On the truck",
    caption: "Inventoried, labelled, loaded for the road.",
  },
  {
    id: "settle",
    src: slideSettle,
    step: "05 · Settle",
    title: "You are in",
    caption: "Last box down. Clean handoff in your new space.",
  },
];

const INTERVAL_MS = 5500;

/**
 * Branded hero slideshow using Rahisi Gemini-generated crew photos.
 */
export function HeroSlider() {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = HERO_SLIDES.length;

  const go = useCallback(
    (dir: 1 | -1) => {
      setIndex((i) => (i + dir + total) % total);
    },
    [total],
  );

  useEffect(() => {
    if (reduced || paused) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [reduced, paused, total]);

  return (
    <div
      className="absolute inset-0 -z-20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Rahisi Movers branded move story"
    >
      {HERO_SLIDES.map((slide, i) => {
        const active = i === index;
        return (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-700 ease-out",
              active ? "opacity-100" : "pointer-events-none opacity-0",
            )}
            aria-hidden={!active}
          >
            <img
              src={slide.src}
              alt={slide.title}
              className={cn(
                "size-full object-cover object-center",
                !reduced && active && "hero-kenburns",
              )}
              width={1600}
              height={900}
            />
          </div>
        );
      })}

      {/* Soft scrim — lighter so branded photos stay visible */}
      <div
        className="pointer-events-none absolute inset-0 bg-linear-to-r from-ink/85 via-ink/40 to-ink/15 md:from-ink/80 md:via-ink/35 md:to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-ink/75 to-transparent"
        aria-hidden
      />

      {/* Active slide caption — right card */}
      <div className="absolute top-24 right-4 z-10 max-w-[15rem] rounded-2xl border border-background/15 bg-ink/55 p-4 backdrop-blur-md md:right-8 md:top-28 md:max-w-[17rem]">
        <p className="eyebrow text-accent">{HERO_SLIDES[index].step}</p>
        <p className="mt-1 font-display text-lg text-background md:text-xl">
          {HERO_SLIDES[index].title}
        </p>
        <p className="mt-1.5 text-xs leading-relaxed text-background/80">
          {HERO_SLIDES[index].caption}
        </p>
      </div>

      {/* Controls */}
      <div className="absolute right-5 bottom-6 z-20 flex items-center gap-2 md:right-10 md:bottom-10">
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => go(-1)}
          className="grid size-10 place-items-center rounded-full border border-background/30 bg-ink/50 text-background backdrop-blur-sm transition-colors hover:border-accent hover:text-accent"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => go(1)}
          className="grid size-10 place-items-center rounded-full border border-background/30 bg-ink/50 text-background backdrop-blur-sm transition-colors hover:border-accent hover:text-accent"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Step pills */}
      <div className="absolute bottom-6 left-5 z-20 flex max-w-[60%] flex-wrap gap-2 md:bottom-10 md:left-10">
        {HERO_SLIDES.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            aria-label={`Show ${slide.step}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
            className={cn(
              "rounded-full px-2.5 py-1 text-[0.65rem] font-bold tracking-wide uppercase transition-all",
              i === index
                ? "bg-accent text-ink"
                : "bg-background/15 text-background/70 hover:bg-background/25",
            )}
          >
            {slide.step.split("·")[0].trim()}
          </button>
        ))}
      </div>

      {!reduced && (
        <div className="absolute inset-x-0 bottom-0 z-20 h-1 bg-background/15">
          <div
            key={index}
            className="h-full bg-accent hero-slide-progress"
            style={{ animationDuration: `${INTERVAL_MS}ms` }}
          />
        </div>
      )}
    </div>
  );
}
