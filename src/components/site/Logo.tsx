import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "full" | "mark" | "onDark";
  className?: string;
  asLink?: boolean;
};

export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-11 shrink-0", className)}
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="22" className="fill-accent stroke-ink" strokeWidth="2" />
      <path
        d="M14 32V16h7.2c3.4 0 5.5 1.7 5.5 4.3 0 1.9-1 3.3-2.8 3.9L28 32h-4.2l-3.5-6.8H18V32H14Zm4-10.2h3c1.5 0 2.4-.7 2.4-1.8S22.5 18.2 21 18.2h-3v3.6Z"
        className="fill-ink"
      />
      <path d="M30 16h3.6l5.4 16H35l-1-3.2h-5.2L27.8 32H24l6-16Zm4.7 9.8-1.7-5.4-1.7 5.4h3.4Z" className="fill-ink" />
      {/* Route dash */}
      <path
        d="M10 38h6M20 38h4M28 38h10"
        className="stroke-ink"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="0 0"
      />
    </svg>
  );
}

export function Logo({ variant = "full", className, asLink = true }: LogoProps) {
  const dark = variant === "onDark";
  const content = (
    <span
      className={cn(
        "inline-flex items-center gap-3 transition-opacity hover:opacity-90",
        className,
      )}
    >
      <Mark />
      {variant !== "mark" && (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "font-display text-xl font-bold tracking-tight md:text-2xl",
              dark ? "text-background" : "text-ink",
            )}
          >
            Rahisi{" "}
            <span className={dark ? "text-accent" : "text-saffron-deep"}>Movers</span>
          </span>
          <span
            className={cn(
              "mt-1 text-[0.65rem] font-semibold tracking-[0.22em] uppercase",
              dark ? "text-background/55" : "text-muted-foreground",
            )}
          >
            Nairobi · KE
          </span>
        </span>
      )}
    </span>
  );

  if (!asLink) return content;
  return (
    <Link to="/" aria-label="Rahisi Movers home" className="min-w-0">
      {content}
    </Link>
  );
}
