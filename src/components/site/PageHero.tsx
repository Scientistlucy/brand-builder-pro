import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  /** Right column — CTAs, facts, image, etc. Fills the dark empty space. */
  aside?: ReactNode;
  className?: string;
  /** Use lighter canvas instead of ink panel */
  light?: boolean;
};

/** Compact two-column page intro — text left, useful content right (no dead space). */
export function PageHero({
  eyebrow,
  title,
  description,
  aside,
  className,
  light = false,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        light
          ? "border-b border-border bg-background px-5 py-10 md:px-10 md:py-14"
          : "ink-panel route-lanes px-5 py-10 md:px-10 md:py-14",
        className,
      )}
    >
      <div
        className={cn(
          "relative mx-auto grid max-w-[1400px] gap-8 lg:gap-12",
          aside && "lg:grid-cols-[1.1fr_0.9fr] lg:items-end",
        )}
      >
        <div>
          <p
            className={cn(
              "eyebrow",
              light ? "text-saffron-deep" : "text-accent",
            )}
          >
            {eyebrow}
          </p>
          <h1
            className={cn(
              "font-display mt-3 text-[clamp(2.25rem,6vw,4rem)] leading-[0.95] tracking-tight",
              light ? "text-foreground" : "text-background",
            )}
          >
            {title}
          </h1>
          {description ? (
            <p
              className={cn(
                "mt-4 max-w-xl text-base leading-relaxed md:text-lg",
                light ? "text-muted-foreground" : "text-background/70",
              )}
            >
              {description}
            </p>
          ) : null}
        </div>
        {aside ? <div className="min-w-0">{aside}</div> : null}
      </div>
    </section>
  );
}

/** Default contact/quote actions for empty hero rightsides */
export function HeroContactAside() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
      <a
        href={SITE.phoneHref}
        className="flex items-center justify-between gap-3 rounded-2xl border border-background/15 bg-background/10 px-5 py-4 text-background backdrop-blur-sm transition hover:bg-background/15"
      >
        <span>
          <span className="block text-xs font-bold uppercase tracking-wider text-accent">
            Call now
          </span>
          <span className="mt-1 block font-semibold">{SITE.phone}</span>
        </span>
        <Phone size={20} className="text-accent" />
      </a>
      <Link
        to="/quote"
        className="flex items-center justify-between gap-3 rounded-2xl bg-accent px-5 py-4 font-bold text-accent-foreground transition hover:brightness-105"
      >
        <span>
          <span className="block text-xs font-bold uppercase tracking-wider opacity-80">
            Instant
          </span>
          <span className="mt-1 block">Online estimate</span>
        </span>
        <ArrowRight size={20} />
      </Link>
      <div className="rounded-2xl border border-background/15 px-5 py-4 text-sm text-background/75 sm:col-span-2 lg:col-span-1">
        <p className="font-semibold text-background">{SITE.address}</p>
        <p className="mt-1">{SITE.hours}</p>
        <a
          href={SITE.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block font-bold text-accent underline-offset-2 hover:underline"
        >
          Open in Maps →
        </a>
      </div>
    </div>
  );
}

type Stat = { label: string; value: string };

export function HeroStatsAside({ stats }: { stats: Stat[] }) {
  return (
    <ul className="grid grid-cols-2 gap-3">
      {stats.map((s) => (
        <li
          key={s.label}
          className="rounded-2xl border border-background/15 bg-background/10 px-4 py-4 backdrop-blur-sm"
        >
          <p className="font-display text-2xl text-accent md:text-3xl">
            {s.value}
          </p>
          <p className="mt-1 text-xs font-medium uppercase tracking-wide text-background/60">
            {s.label}
          </p>
        </li>
      ))}
    </ul>
  );
}

export function HeroImageAside({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-background/15 shadow-lg">
      <img
        src={src}
        alt={alt}
        className="aspect-[4/3] w-full object-cover"
        loading="eager"
      />
    </figure>
  );
}
