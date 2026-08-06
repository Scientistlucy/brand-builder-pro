import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-700 bg-gray-900 text-background">
      <div className="mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 md:px-10">
        <Link to="/" className="min-w-0" onClick={() => setOpen(false)}>
          <span className="display block text-2xl leading-none md:text-3xl">
            Rahisi <span className="text-accent">Movers</span>
          </span>
          <span className="eyebrow block text-gray-500">Nairobi · Kenya</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm tracking-wide text-gray-300 transition-colors hover:text-accent"
              activeProps={{ className: "text-accent" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-accent px-6 py-3 text-sm font-semibold tracking-wide text-accent-foreground transition-colors hover:bg-background"
          >
            Get a Quote
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid size-11 place-items-center border border-gray-700 text-background md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav
          aria-label="Mobile"
          className="border-t border-gray-700 px-5 pb-6 md:hidden"
        >
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block border-b border-gray-700 py-4 text-lg text-gray-300"
              activeProps={{ className: "text-accent" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:+254700000000"
            className="mt-6 block bg-accent px-6 py-4 text-center font-semibold text-accent-foreground"
          >
            Call +254 700 000 000
          </a>
        </nav>
      )}
    </header>
  );
}
