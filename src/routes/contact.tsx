import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { HeroContactAside, PageHero } from "@/components/site/PageHero";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Rahisi Movers | Nairobi" },
      {
        name: "description",
        content: `Call ${SITE.phone} or send an enquiry for a free survey and fixed quote.`,
      },
    ],
  }),
  component: ContactPage,
});

const labelClass =
  "block text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground";
const inputClass =
  "block w-full rounded-xl border border-border bg-background px-4 py-3 text-base text-ink outline-none transition placeholder:text-muted-foreground/70 focus:border-saffron-deep focus:ring-2 focus:ring-saffron/25";

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s plan
            <br />
            the move
          </>
        }
        description={
          <>
            Free survey, written price. Fill the enquiry form — or jump to an{" "}
            <Link
              to="/quote"
              className="font-bold text-accent underline-offset-2 hover:underline"
            >
              online estimate
            </Link>
            .
          </>
        }
        aside={<HeroContactAside />}
      />

      <section className="px-5 py-10 md:px-10 md:py-14">
        <Reveal className="mx-auto max-w-[1100px]">
          {/* One card, two columns — shared edges so nothing can sit off-level */}
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="grid lg:grid-cols-2 lg:items-stretch">
              {/* LEFT */}
              <div className="flex flex-col border-b border-border p-6 sm:p-8 lg:border-b-0 lg:border-r">
                <header className="min-h-[4.5rem]">
                  <h2 className="font-display text-2xl leading-none">
                    Reach us
                  </h2>
                  <p className="mt-2 text-sm leading-snug text-muted-foreground">
                    Same day reply during business hours.
                  </p>
                </header>

                <ul className="mt-6 flex flex-1 flex-col border-t border-border">
                  <li className="flex gap-3 border-b border-border py-4">
                    <Phone
                      size={18}
                      className="mt-0.5 shrink-0 text-saffron-deep"
                      aria-hidden
                    />
                    <div className="min-w-0 flex-1">
                      <p className={labelClass}>Phone</p>
                      <a
                        href={SITE.phoneHref}
                        className="mt-1.5 block text-base font-semibold hover:text-saffron-deep sm:text-lg"
                      >
                        {SITE.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-3 border-b border-border py-4">
                    <Mail
                      size={18}
                      className="mt-0.5 shrink-0 text-saffron-deep"
                      aria-hidden
                    />
                    <div className="min-w-0 flex-1">
                      <p className={labelClass}>Email</p>
                      <a
                        href={SITE.emailHref}
                        className="mt-1.5 block break-all text-base font-semibold hover:text-saffron-deep sm:text-lg"
                      >
                        {SITE.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-3 border-b border-border py-4">
                    <MapPin
                      size={18}
                      className="mt-0.5 shrink-0 text-saffron-deep"
                      aria-hidden
                    />
                    <div className="min-w-0 flex-1">
                      <p className={labelClass}>Office</p>
                      <a
                        href={SITE.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1.5 block text-base font-semibold leading-snug hover:text-saffron-deep sm:text-lg"
                      >
                        {SITE.address}
                      </a>
                      <a
                        href={SITE.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-bold text-accent-foreground"
                      >
                        Directions <ExternalLink size={14} />
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-3 py-4">
                    <Clock
                      size={18}
                      className="mt-0.5 shrink-0 text-saffron-deep"
                      aria-hidden
                    />
                    <div className="min-w-0 flex-1">
                      <p className={labelClass}>Hours</p>
                      <p className="mt-1.5 text-base font-semibold sm:text-lg">
                        {SITE.hours}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* RIGHT */}
              <div className="flex flex-col p-6 sm:p-8">
                {sent ? (
                  <div className="flex flex-1 flex-col justify-center">
                    <h2 className="font-display text-2xl">Got it</h2>
                    <p className="mt-3 max-w-md text-muted-foreground">
                      Demo form only — for a real quote call{" "}
                      <a href={SITE.phoneHref} className="font-bold underline">
                        {SITE.phone}
                      </a>
                      .
                    </p>
                    <button
                      type="button"
                      onClick={() => setSent(false)}
                      className="mt-6 w-fit rounded-full border border-ink px-6 py-3 text-sm font-bold"
                    >
                      Send another
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSent(true);
                    }}
                    className="flex h-full flex-col"
                  >
                    <header className="min-h-[4.5rem]">
                      <h2 className="font-display text-2xl leading-none">
                        Send an enquiry
                      </h2>
                      <p className="mt-2 text-sm leading-snug text-muted-foreground">
                        We reply during business hours — or call anytime.
                      </p>
                    </header>

                    <div className="mt-6 grid flex-1 grid-cols-2 gap-x-4 gap-y-4 border-t border-border pt-6">
                      <div className="col-span-2 space-y-1.5 sm:col-span-1">
                        <label htmlFor="name" className={labelClass}>
                          Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          required
                          autoComplete="name"
                          className={inputClass}
                        />
                      </div>
                      <div className="col-span-2 space-y-1.5 sm:col-span-1">
                        <label htmlFor="phone" className={labelClass}>
                          Phone
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          autoComplete="tel"
                          className={inputClass}
                        />
                      </div>
                      <div className="col-span-2 space-y-1.5">
                        <label htmlFor="email" className={labelClass}>
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          className={inputClass}
                        />
                      </div>
                      <div className="col-span-1 space-y-1.5">
                        <label htmlFor="from" className={labelClass}>
                          From
                        </label>
                        <input
                          id="from"
                          name="from"
                          placeholder="e.g. Kilimani"
                          className={inputClass}
                        />
                      </div>
                      <div className="col-span-1 space-y-1.5">
                        <label htmlFor="to" className={labelClass}>
                          To
                        </label>
                        <input
                          id="to"
                          name="to"
                          placeholder="e.g. Karen"
                          className={inputClass}
                        />
                      </div>
                      <div className="col-span-2 space-y-1.5">
                        <label htmlFor="details" className={labelClass}>
                          Details
                        </label>
                        <textarea
                          id="details"
                          name="details"
                          rows={3}
                          placeholder="Rooms, stairs, preferred date…"
                          className={`${inputClass} min-h-[96px] resize-y`}
                        />
                      </div>
                      <div className="col-span-2 mt-1">
                        <button
                          type="submit"
                          className="w-full rounded-full bg-accent py-3.5 text-sm font-bold text-accent-foreground transition hover:brightness-105"
                        >
                          Send enquiry
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
