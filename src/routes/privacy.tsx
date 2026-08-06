import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Rahisi Movers Nairobi" },
      {
        name: "description",
        content:
          "How Rahisi Movers collects, uses and protects the personal information you share when requesting a moving quote in Kenya.",
      },
      { property: "og:title", content: "Privacy Policy | Rahisi Movers" },
      {
        property: "og:description",
        content: "How Rahisi Movers handles and protects your personal information.",
      },
    ],
  }),
  component: PrivacyPage,
});

const sections = [
  {
    title: "What we collect",
    body: "Your name, phone number, email address, and the origin and destination of your move — only what we need to prepare an accurate quote and carry it out.",
  },
  {
    title: "How we use it",
    body: "To respond to quote requests, schedule surveys and moves, issue invoices, and keep you updated on the day. We do not sell or rent your information to anyone.",
  },
  {
    title: "Who sees it",
    body: "Our operations team and, where a move requires it, the customs agents and partner carriers handling your consignment. They receive only what the job requires.",
  },
  {
    title: "How long we keep it",
    body: "Move records are retained for seven years to meet Kenyan tax and insurance obligations. Quote enquiries that do not become moves are deleted after twelve months.",
  },
  {
    title: "Your rights",
    body: "You may ask us for a copy of the information we hold about you, request corrections, or ask us to delete it. Write to hello@rahisimovers.co.ke and we will respond within 30 days.",
  },
];

function PrivacyPage() {
  return (
    <>
      <section className="bg-gray-900 px-5 py-20 text-background md:px-10 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <p className="eyebrow text-accent">Legal</p>
          <h1 className="display mt-4 text-6xl md:text-8xl">Privacy Policy</h1>
        </div>
      </section>

      <section className="px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="text-lg leading-relaxed text-gray-700">
            Rahisi Movers is committed to handling your information carefully —
            with the same care we give your belongings.
          </p>
          <dl className="mt-14 space-y-12">
            {sections.map((s) => (
              <div key={s.title} className="border-t border-gray-300 pt-8">
                <dt className="display text-3xl">{s.title}</dt>
                <dd className="mt-4 leading-relaxed text-gray-700">{s.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
