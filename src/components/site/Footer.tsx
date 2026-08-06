import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/site/Logo";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-background">
      {/* Soft glow — no diagonal stripes */}
      <div
        className="pointer-events-none absolute inset-0 opacity-90"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 100% 0%, color-mix(in oklch, var(--saffron) 18%, transparent), transparent 55%), radial-gradient(ellipse 50% 60% at 0% 100%, color-mix(in oklch, var(--route) 12%, transparent), transparent 50%)",
        }}
      />
      <div className="relative mx-auto max-w-[1400px] px-5 py-12 md:px-10 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr] md:gap-12">
          <div>
            <Logo variant="onDark" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-background/70">
              Home, office and cross-border moves from Industrial Area, Nairobi.
              Careful packing. Clear price. Crew on time.
            </p>
          </div>

          <div>
            <h2 className="eyebrow text-accent">Explore</h2>
            <ul className="mt-5 space-y-3 text-sm text-background/75">
              {[
                ["/", "Home"],
                ["/services", "Services"],
                ["/process", "How we move"],
                ["/gallery", "Gallery"],
                ["/faq", "FAQ"],
                ["/quote", "Get a quote"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="transition-colors hover:text-accent">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="eyebrow text-accent">Company</h2>
            <ul className="mt-5 space-y-3 text-sm text-background/75">
              <li>
                <Link to="/about" className="hover:text-accent">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-accent">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="eyebrow text-accent">Contact</h2>
            <ul className="mt-5 space-y-4 text-sm text-background/75">
              <li className="flex gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-accent" />
                <a href={SITE.phoneHref} className="hover:text-accent">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-accent" />
                <a href={SITE.emailHref} className="hover:text-accent">
                  {SITE.email}
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                <a
                  href={SITE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent"
                >
                  {SITE.address}
                  <span className="mt-1 block text-xs text-accent">
                    Open in Maps →
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-background/12 pt-6 text-xs text-background/45 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Rahisi Movers. All rights reserved.</p>
          <p>Licensed · Insured · Nairobi, Kenya</p>
        </div>
      </div>
    </footer>
  );
}
