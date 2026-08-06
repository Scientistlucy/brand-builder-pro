import { createFileRoute } from "@tanstack/react-router";
import { QuoteCalculator } from "@/components/site/QuoteCalculator";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Free Moving Estimate | Rahisi Movers Nairobi" },
      {
        name: "description",
        content:
          "Get an instant ballpark for your Nairobi move. Confirm a fixed written price after a free survey with Rahisi Movers.",
      },
    ],
  }),
  component: QuotePage,
});

function QuotePage() {
  return (
    <section className="relative overflow-hidden ink-panel px-5 py-10 md:px-10 md:py-14">
      <div className="route-lanes absolute inset-0 opacity-50" aria-hidden />
      <div className="relative mx-auto grid max-w-[1400px] gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-12">
        <div>
          <p className="eyebrow text-accent">Quote</p>
          <h1 className="font-display mt-3 text-[clamp(2.25rem,6vw,4rem)] leading-[0.95] text-background">
            Price your{" "}
            <span className="text-accent">route.</span>
          </h1>
          <p className="mt-4 max-w-md text-background/70 leading-relaxed">
            Three steps for a ballpark range. Then book a free survey for one
            fixed price — no stair or fuel surprises.
          </p>
          <ul className="mt-6 space-y-2.5 text-sm text-background/60">
            <li>✓ Local & long-distance Kenya</li>
            <li>✓ Home · office · international</li>
            <li>✓ Call {SITE.phone} if you prefer a human first</li>
          </ul>
        </div>
        <QuoteCalculator embedded />
      </div>
    </section>
  );
}
