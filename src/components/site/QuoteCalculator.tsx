import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";
import { Link } from "@tanstack/react-router";

type MoveType = "residential" | "office" | "international";
type Size = "studio" | "1br" | "2br" | "3br" | "office";

const MOVE_TYPES: { id: MoveType; label: string; note: string }[] = [
  { id: "residential", label: "Residential", note: "Homes & apartments" },
  { id: "office", label: "Office", note: "Business relocation" },
  { id: "international", label: "International", note: "Cross-border" },
];

const SIZES: { id: Size; label: string }[] = [
  { id: "studio", label: "Studio / Bedsitter" },
  { id: "1br", label: "1 Bedroom" },
  { id: "2br", label: "2 Bedrooms" },
  { id: "3br", label: "3 Bedrooms +" },
  { id: "office", label: "Office space" },
];

// Indicative KES base rates. Final quotes are confirmed after a survey.
const BASE: Record<MoveType, number> = {
  residential: 18000,
  office: 45000,
  international: 220000,
};

const SIZE_FACTOR: Record<Size, number> = {
  studio: 1,
  "1br": 1.35,
  "2br": 1.8,
  "3br": 2.4,
  office: 2.1,
};

const kes = (n: number) =>
  new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
    maximumFractionDigits: 0,
  }).format(n);

export function QuoteCalculator() {
  const [step, setStep] = useState(0);
  const [moveType, setMoveType] = useState<MoveType | null>(null);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [size, setSize] = useState<Size | null>(null);

  const estimate = useMemo(() => {
    if (!moveType || !size) return null;
    const crossCity =
      from.trim().toLowerCase() !== to.trim().toLowerCase() && to.trim() !== "";
    const base = BASE[moveType] * SIZE_FACTOR[size] * (crossCity ? 1.25 : 1);
    return { low: Math.round(base / 1000) * 1000, high: Math.round((base * 1.4) / 1000) * 1000 };
  }, [moveType, size, from, to]);

  const canAdvance =
    (step === 0 && moveType !== null) ||
    (step === 1 && from.trim() !== "" && to.trim() !== "") ||
    (step === 2 && size !== null);

  const reset = () => {
    setStep(0);
    setMoveType(null);
    setFrom("");
    setTo("");
    setSize(null);
  };

  const optionClass = (active: boolean) =>
    `w-full border p-5 text-left transition-colors ${
      active
        ? "border-accent bg-accent text-accent-foreground"
        : "border-gray-700 text-background hover:border-accent"
    }`;

  return (
    <div className="border border-gray-700">
      <div className="flex items-center justify-between border-b border-gray-700 px-5 py-4 md:px-8">
        <p className="eyebrow text-accent">
          {step < 3 ? `Step ${step + 1} of 3` : "Your estimate"}
        </p>
        <ol className="flex gap-2" aria-hidden="true">
          {[0, 1, 2].map((i) => (
            <li
              key={i}
              className={`h-1 w-10 ${i <= step ? "bg-accent" : "bg-gray-700"}`}
            />
          ))}
        </ol>
      </div>

      <div className="px-5 py-8 md:px-8 md:py-10">
        {step === 0 && (
          <fieldset>
            <legend className="display text-3xl text-background md:text-4xl">
              What are you moving?
            </legend>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {MOVE_TYPES.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  aria-pressed={moveType === t.id}
                  onClick={() => setMoveType(t.id)}
                  className={optionClass(moveType === t.id)}
                >
                  <span className="block font-semibold">{t.label}</span>
                  <span className="mt-1 block text-xs opacity-70">{t.note}</span>
                </button>
              ))}
            </div>
          </fieldset>
        )}

        {step === 1 && (
          <div>
            <h3 className="display text-3xl text-background md:text-4xl">
              Where to, and from?
            </h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="quote-from"
                  className="eyebrow block text-gray-300"
                >
                  Moving from
                </label>
                <input
                  id="quote-from"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  placeholder="e.g. Kilimani, Nairobi"
                  className="mt-2 w-full border border-gray-700 bg-transparent px-4 py-4 text-background placeholder:text-gray-500 focus:border-accent focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="quote-to" className="eyebrow block text-gray-300">
                  Moving to
                </label>
                <input
                  id="quote-to"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  placeholder="e.g. Nyali, Mombasa"
                  className="mt-2 w-full border border-gray-700 bg-transparent px-4 py-4 text-background placeholder:text-gray-500 focus:border-accent focus:outline-none"
                />
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <fieldset>
            <legend className="display text-3xl text-background md:text-4xl">
              How much are we moving?
            </legend>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {SIZES.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  aria-pressed={size === s.id}
                  onClick={() => setSize(s.id)}
                  className={optionClass(size === s.id)}
                >
                  <span className="font-semibold">{s.label}</span>
                </button>
              ))}
            </div>
          </fieldset>
        )}

        {step === 3 && estimate && (
          <div aria-live="polite">
            <p className="eyebrow text-gray-300">Estimated range</p>
            <p className="display mt-3 text-5xl text-accent md:text-7xl">
              {kes(estimate.low)} – {kes(estimate.high)}
            </p>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-gray-300">
              An indicative range based on your move type, distance and volume.
              We confirm a fixed, all-inclusive price after a free survey — no
              hidden fees.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="bg-accent px-8 py-4 font-semibold text-accent-foreground transition-colors hover:bg-background"
              >
                Get a detailed quote
              </Link>
              <button
                type="button"
                onClick={reset}
                className="inline-flex items-center gap-2 border border-gray-700 px-8 py-4 font-semibold text-background transition-colors hover:border-accent hover:text-accent"
              >
                <RotateCcw size={16} /> Start over
              </button>
            </div>
          </div>
        )}
      </div>

      {step < 3 && (
        <div className="flex items-center justify-between border-t border-gray-700 px-5 py-4 md:px-8">
          <button
            type="button"
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
            className="inline-flex items-center gap-2 py-2 text-sm text-gray-300 transition-colors hover:text-accent disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ArrowLeft size={16} /> Back
          </button>
          <button
            type="button"
            onClick={() => setStep((s) => s + 1)}
            disabled={!canAdvance}
            className="inline-flex items-center gap-2 bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-background disabled:cursor-not-allowed disabled:bg-gray-700 disabled:text-gray-500"
          >
            {step === 2 ? "See estimate" : "Continue"} <ArrowRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
}
