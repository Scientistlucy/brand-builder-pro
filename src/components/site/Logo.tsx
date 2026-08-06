import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import rmLogo from "@/assets/rm-logo.png";

type LogoProps = {
  variant?: "full" | "mark" | "onDark";
  className?: string;
  asLink?: boolean;
};

/** Rahisi Movers circular RM badge */
export function Mark({ className }: { className?: string }) {
  return (
    <img
      src={rmLogo}
      alt=""
      width={48}
      height={48}
      className={cn(
        "size-11 shrink-0 rounded-full object-cover shadow-sm ring-1 ring-ink/10",
        className,
      )}
      aria-hidden="true"
    />
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
              "font-sans text-xl font-bold tracking-tight md:text-2xl",
              dark ? "text-background" : "text-ink",
            )}
          >
            Rahisi{" "}
            <span className={dark ? "text-accent" : "text-saffron-deep"}>
              Movers
            </span>
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
