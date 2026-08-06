import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-gray-700 bg-gray-900 text-background">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="display text-4xl md:text-5xl">
              Rahisi <span className="text-accent">Movers</span>
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-300">
              Move with confidence. Local and international relocation for homes
              and businesses across Kenya.
            </p>
            <div className="mt-8 flex gap-3">
              {[
                { Icon: Facebook, label: "Facebook" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Linkedin, label: "LinkedIn" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={`Rahisi Movers on ${label}`}
                  className="grid size-11 place-items-center border border-gray-700 text-gray-300 transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="eyebrow text-accent">Contact</h2>
            <ul className="mt-6 space-y-4 text-sm text-gray-300">
              <li className="flex gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-accent" />
                <a href="tel:+254700000000" className="hover:text-accent">
                  +254 700 000 000
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-accent" />
                <a href="mailto:hello@rahisimovers.co.ke" className="hover:text-accent">
                  hello@rahisimovers.co.ke
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                <span>Enterprise Road, Industrial Area, Nairobi</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="eyebrow text-accent">Quick links</h2>
            <ul className="mt-6 space-y-4 text-sm text-gray-300">
              <li>
                <Link to="/services" className="hover:text-accent">
                  Services
                </Link>
              </li>
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
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-gray-700 pt-8 text-xs text-gray-500 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Rahisi Movers. All rights reserved.</p>
          <p>Licensed &amp; insured relocation contractor.</p>
        </div>
      </div>
    </footer>
  );
}
