import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

type MoveType = "residential" | "office" | "international";
type Size = "studio" | "1br" | "2br" | "3br" | "office";

const MOVE_TYPES: { id: MoveType; label: string; note: string }[] = [
  { id: "residential", label: "Home", note: "Flats & houses" },
  { id: "office", label: "Office", note: "Business moves" },
  { id: "international", label: "International", note: "Cross-border" },
];

const SIZES: { id: Size; label: string }[] = [
  { id: "studio", label: "Studio / Bedsitter" },
  { id: "1br", label: "1 Bedroom" },
  { id: "2br", label: "2 Bedrooms" },
  { id: "3br", label: "3 Bedrooms +" },
  { id: "office", label: "Office floor" },
];

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

type Props = { embedded?: boolean };

export function QuoteCalculator({ embedded = false }: Props) {
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
    return {
      low: Math.round(base / 1000) * 1000,
      high: Math.round((base * 1.4) / 1000) * 1000,
    };
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
    cn(
      "w-full rounded-xl border p-4 text-left transition-all sm:p-5",
      active
        ? "border-accent bg-accent text-accent-foreground shadow-md scale-[1.02]"
        : "border-background/20 text-background hover:border-accent/80",
    );

  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-background/15 bg-ink/80 shadow-2xl backdrop-blur-sm",
        embedded && "w-full",
      )}
    >
      <div className="flex items-center justify-between border-b border-background/10 px-5 py-4 md:px-7">
        <p className="eyebrow text-accent">
          {step < 3 ? `Step ${step + 1} of 3` : "Your range"}
        </p>
        <ol className="flex gap-1.5" aria-hidden="true">
          {[0, 1, 2].map((i) => (
            <li
              key={i}
              className={cn(
                "h-1.5 w-8 rounded-full transition-colors",
                i <= step ? "bg-accent" : "bg-background/20",
              )}
            />
          ))}
        </ol>
      </div>

      <div className="px-5 py-7 md:px-7 md:py-9">
        {step === 0 && (
          <fieldset>
            <legend className="font-display text-2xl text-background md:text-3xl">
              What are you moving?
            </legend>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {MOVE_TYPES.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  aria-pressed={moveType === t.id}
                  onClick={() => setMoveType(t.id)}
                  className={optionClass(moveType === t.id)}
                >
                  <span className="block font-bold">{t.label}</span>
                  <span className="mt-1 block text-xs opacity-70">{t.note}</span>
                </button>
              ))}
            </div>
          </fieldset>
        )}

        {step === 1 && (
          <div>
            <h3 className="font-display text-2xl text-background md:text-3xl">
              Route
            </h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="quote-from" className="eyebrow text-background/50">
                  From
                </label>
                <input
                  id="quote-from"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  placeholder="e.g. Kilimani"
                  className="mt-2 w-full rounded-xl border border-background/20 bg-background/5 px-4 py-3.5 text-background placeholder:text-background/35 focus:border-accent focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="quote-to" className="eyebrow text-background/50">
                  To
                </label>
                <input
                  id="quote-to"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  placeholder="e.g. Westlands"
                  className="mt-2 w-full rounded-xl border border-background/20 bg-background/5 px-4 py-3.5 text-background placeholder:text-background/35 focus:border-accent focus:outline-none"
                />
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <fieldset>
            <legend className="font-display text-2xl text-background md:text-3xl">
              Size of move
            </legend>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {SIZES.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  aria-pressed={size === s.id}
                  onClick={() => setSize(s.id)}
                  className={optionClass(size === s.id)}
                >
                  <span className="font-bold">{s.label}</span>
                </button>
              ))}
            </div>
          </fieldset>
        )}

        {step === 3 && estimate && (
          <div aria-live="polite">
            <p className="eyebrow text-background/50">Indicative range (KES)</p>
            <p className="font-display mt-3 text-4xl text-accent md:text-5xl">
              {kes(estimate.low)} – {kes(estimate.high)}
            </p>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-background/65">
              Ballpark only. We confirm one all-in fixed price after a free
              survey — no hidden fees.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="rounded-full bg-accent px-7 py-3.5 font-bold text-accent-foreground transition-transform hover:scale-[1.02]"
              >
                Book free survey
              </Link>
              <button
                type="button"
                onClick={reset}
                className="inline-flex items-center gap-2 rounded-full border border-background/25 px-7 py-3.5 font-semibold text-background transition-colors hover:border-accent hover:text-accent"
              >
                <RotateCcw size={16} /> Restart
              </button>
            </div>
          </div>
        )}
      </div>

      {step < 3 && (
        <div className="flex items-center justify-between border-t border-background/10 px-5 py-4 md:px-7">
          <button
            type="button"
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
            className="inline-flex items-center gap-2 py-2 text-sm text-background/60 transition-colors hover:text-accent disabled:opacity-30"
          >
            <ArrowLeft size={16} /> Back
          </button>
          <button
            type="button"
            onClick={() => setStep((s) => s + 1)}
            disabled={!canAdvance}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-accent-foreground transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:bg-background/15 disabled:text-background/40 disabled:hover:scale-100"
          >
            {step === 2 ? "See estimate" : "Continue"} <ArrowRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
}
