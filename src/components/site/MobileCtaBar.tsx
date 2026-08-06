import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";

/** Always-visible mobile conversion strip */
export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-canvas/95 p-3 backdrop-blur-md lg:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-2">
        <a
          href={SITE.phoneHref}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-ink py-3 text-sm font-bold"
        >
          <Phone size={16} aria-hidden="true" /> Call
        </a>
        <Link
          to="/quote"
          className="inline-flex items-center justify-center rounded-full bg-accent py-3 text-sm font-bold text-accent-foreground"
        >
          Quote
        </Link>
      </div>
    </div>
  );
}
