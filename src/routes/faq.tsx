import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  Clock,
  HelpCircle,
  Phone,
  Shield,
  Wallet,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { FAQS } from "@/components/site/services-data";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | Rahisi Movers Nairobi" },
      {
        name: "description",
        content:
          "Pricing, insurance, booking windows and coverage — common questions about moving with Rahisi Movers.",
      },
    ],
  }),
  component: FaqPage,
});

const TOPICS = [
  {
    icon: Wallet,
    title: "Pricing",
    body: "Fixed written quote after survey — no stair surprises.",
  },
  {
    icon: Shield,
    title: "Cover",
    body: "Licensed & insured. Goods-in-transit on pro moves.",
  },
  {
    icon: Clock,
    title: "Booking",
    body: "Book 5–10 days out. Weekends fill first.",
  },
  {
    icon: HelpCircle,
    title: "Still unsure?",
    body: "Call a coordinator — we answer the grey areas.",
  },
] as const;

function FaqPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title={
          <>
            Straight
            <br />
            answers
          </>
        }
        description="Pricing, booking, insurance and coverage — short answers, no legal fog."
        aside={
          <div className="grid grid-cols-2 gap-3">
            {TOPICS.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-background/15 bg-background/10 px-4 py-4 backdrop-blur-sm"
              >
                <Icon size={18} className="text-accent" />
                <p className="mt-3 text-sm font-bold text-background">{title}</p>
                <p className="mt-1 text-xs leading-snug text-background/60">
                  {body}
                </p>
              </div>
            ))}
          </div>
        }
      />

      {/* Quick actions band */}
      <div className="border-b border-border bg-card px-5 py-4 md:px-10">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            Prefer a human? We answer the same day during business hours.
          </p>
          <div className="flex flex-wrap gap-2">
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-bold"
            >
              <Phone size={15} /> {SITE.phone}
            </a>
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-bold text-accent-foreground"
            >
              Get a quote <ArrowRight size={15} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-ink px-4 py-2 text-sm font-bold"
            >
              Contact form
            </Link>
          </div>
        </div>
      </div>

      <section className="px-5 py-10 md:px-10 md:py-12">
        <div className="mx-auto max-w-[900px]">
          <p className="mb-4 text-sm font-semibold text-muted-foreground">
            {FAQS.length} questions
          </p>
          <div className="divide-y divide-border rounded-2xl border border-border bg-card shadow-sm">
            {FAQS.map((item, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={item.q} delay={i * 0.03}>
                  <div>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-7"
                    >
                      <span className="font-semibold md:text-lg">{item.q}</span>
                      <ChevronDown
                        size={20}
                        className={cn(
                          "shrink-0 text-saffron-deep transition-transform",
                          isOpen && "rotate-180",
                        )}
                      />
                    </button>
                    {isOpen && (
                      <p className="px-5 pb-6 text-sm leading-relaxed text-muted-foreground md:px-7 md:text-base">
                        {item.a}
                      </p>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
