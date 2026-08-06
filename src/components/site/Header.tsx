import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "@/components/site/Logo";
import { NAV, SITE } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-canvas/90 text-ink backdrop-blur-md">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-5 py-3.5 md:px-10">
        <Logo />

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="relative rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-accent/35 hover:text-ink"
              activeProps={{
                className:
                  "relative rounded-full bg-ink px-3 py-2 text-sm font-semibold text-background hover:bg-ink hover:text-background",
              }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={SITE.phoneHref}
            className="ml-2 inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-semibold text-ink transition-colors hover:text-saffron-deep"
          >
            <Phone size={15} aria-hidden="true" />
            <span className="hidden xl:inline">{SITE.phone}</span>
          </a>
          <Link
            to="/quote"
            className="ml-1 rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-accent-foreground shadow-sm transition-all hover:brightness-105 hover:shadow-md"
          >
            Get quote
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid size-11 place-items-center rounded-xl border border-border lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav
          aria-label="Mobile"
          className="border-t border-border bg-canvas px-5 pb-6 lg:hidden"
        >
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: item.to === "/" }}
              className="block border-b border-border py-4 text-lg font-medium text-muted-foreground transition-colors hover:text-saffron-deep"
              activeProps={{
                className:
                  "block border-b border-border py-4 text-lg font-bold text-ink",
              }}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-5 grid gap-3">
            <Link
              to="/quote"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-accent py-3.5 text-center font-bold text-accent-foreground"
            >
              Get a free quote
            </Link>
            <a
              href={SITE.phoneHref}
              className="block rounded-full border border-ink py-3.5 text-center font-semibold"
            >
              Call {SITE.phone}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
