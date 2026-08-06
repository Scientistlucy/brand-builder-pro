import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Rahisi Movers | Free Moving Quote in Nairobi" },
      {
        name: "description",
        content:
          "Call +254 700 000 000 or send an enquiry for a free moving survey and fixed quote anywhere in Kenya or abroad.",
      },
      { property: "og:title", content: "Contact Rahisi Movers" },
      {
        property: "og:description",
        content: "Get a free survey and a fixed quote for your move.",
      },
    ],
  }),
  component: ContactPage,
});

const DETAILS = [
  { Icon: Phone, label: "Phone", value: "+254 700 000 000", href: "tel:+254700000000" },
  {
    Icon: Mail,
    label: "Email",
    value: "hello@rahisimovers.co.ke",
    href: "mailto:hello@rahisimovers.co.ke",
  },
  { Icon: MapPin, label: "Office", value: "Enterprise Road, Industrial Area, Nairobi" },
  { Icon: Clock, label: "Hours", value: "Mon–Sat, 7:00 – 19:00 EAT" },
];

function ContactPage() {
  const [sent, setSent] = useState(false);

  const inputClass =
    "mt-2 w-full border border-gray-300 bg-background px-4 py-4 focus:border-accent focus:outline-none";

  return (
    <>
      <section className="grain bg-gray-900 px-5 py-20 text-background md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <p className="eyebrow text-accent">Contact</p>
          <h1 className="display mt-4 max-w-4xl text-[clamp(3.5rem,10vw,8rem)]">
            Get a fixed quote
          </h1>
          <p className="mt-8 max-w-xl leading-relaxed text-gray-300">
            Tell us about the move and we will arrange a free survey — on site
            or over video — then send a written, all-inclusive price.
          </p>
        </div>
      </section>

      <section className="px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <dl className="space-y-8">
              {DETAILS.map(({ Icon, label, value, href }) => (
                <div key={label} className="border-t border-gray-300 pt-6">
                  <dt className="eyebrow flex items-center gap-2 text-gray-500">
                    <Icon size={14} aria-hidden="true" /> {label}
                  </dt>
                  <dd className="mt-2 text-lg">
                    {href ? (
                      <a href={href} className="hover:text-accent">
                        {value}
                      </a>
                    ) : (
                      value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.1}>
            {sent ? (
              <div
                aria-live="polite"
                className="border border-gray-900 bg-gray-100 p-10"
              >
                <h2 className="display text-4xl">Enquiry noted</h2>
                <p className="mt-4 leading-relaxed text-gray-700">
                  Thanks — this demo form does not yet send anywhere. For a real
                  quote today, call{" "}
                  <a href="tel:+254700000000" className="font-semibold underline">
                    +254 700 000 000
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-8 border border-gray-900 px-6 py-3 font-semibold transition-colors hover:bg-gray-900 hover:text-background"
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
                className="grid gap-6 sm:grid-cols-2"
              >
                <div>
                  <label htmlFor="name" className="eyebrow text-gray-500">
                    Full name
                  </label>
                  <input id="name" name="name" required className={inputClass} />
                </div>
                <div>
                  <label htmlFor="phone" className="eyebrow text-gray-500">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className={inputClass}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="eyebrow text-gray-500">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="from" className="eyebrow text-gray-500">
                    Moving from
                  </label>
                  <input id="from" name="from" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="to" className="eyebrow text-gray-500">
                    Moving to
                  </label>
                  <input id="to" name="to" className={inputClass} />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="details" className="eyebrow text-gray-500">
                    Tell us about the move
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    rows={5}
                    className={inputClass}
                  />
                </div>
                <button
                  type="submit"
                  className="bg-accent px-8 py-4 font-semibold text-accent-foreground transition-colors hover:bg-gray-900 hover:text-background sm:col-span-2 sm:justify-self-start"
                >
                  Send enquiry
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}
