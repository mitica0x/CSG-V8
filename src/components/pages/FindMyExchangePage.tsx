import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Check, Search } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ExchangeLogo from "@/components/compare/ExchangeLogo";
import ScoreBar from "@/components/compare/ScoreBar";
import PulseDot from "@/components/csg/PulseDot";
import { C0insiglieri } from "@/components/csg/WordmarkCSG";
import { EXCHANGES, COUNTRIES, MICAR_COUNTRIES, scoreColor, type Exchange } from "@/data/exchanges";

const ease = [0.22, 1, 0.36, 1] as const;

type TradeType = "Spot" | "Futures/Leverage" | "Staking" | "Just starting out";
type CardPref = "yes" | "nice" | "no" | null;
type Frequency = "Daily" | "Weekly" | "Monthly" | "Mostly HODL" | null;
type Volume = "Under €500" | "€500–€5K" | "Over €5K" | null;

interface Answers {
  country: string;
  trades: TradeType[];
  card: CardPref;
  frequency: Frequency;
  volume: Volume;
}

const initial: Answers = {
  country: "",
  trades: [],
  card: null,
  frequency: null,
  volume: null,
};

function rankExchanges(a: Answers): { exchange: Exchange; finalScore: number }[] {
  const euCountry = a.country && MICAR_COUNTRIES.has(a.country);
  let list = EXCHANGES.slice();
  if (euCountry) list = list.filter((e) => e.micarLicensed);

  return list
    .map((e) => {
      let bonus = 0;
      if (a.card === "yes") {
        if (e.id === "bybit") bonus += 30;
        else if (e.id === "coinbase") bonus += 10;
      } else if (a.card === "nice") {
        if (e.id === "bybit") bonus += 10;
      }
      if (a.trades.includes("Futures/Leverage")) {
        if (e.id === "bybit" || e.id === "okx" || e.id === "binance") bonus += 10;
      }
      if (a.trades.includes("Staking")) {
        if (e.id === "coinbase") bonus += 15;
        if (e.id === "kraken") bonus += 10;
      }
      if (a.trades.includes("Just starting out")) {
        if (e.id === "coinbase" || e.id === "bitpanda") bonus += 8;
      }
      if (a.volume === "Over €5K") {
        if (e.id === "bybit" || e.id === "binance") bonus += 5;
      }
      return { exchange: e, finalScore: Math.min(100, e.score + bonus) };
    })
    .sort((x, y) => y.finalScore - x.finalScore);
}

export default function FindMyExchangePage() {
  const [a, setA] = useState<Answers>(initial);
  const [step, setStep] = useState(1);

  const ranking = useMemo(() => rankExchanges(a), [a]);
  const top4 = ranking.slice(0, 4);
  const completed = step > 5;

  const goNext = () => setStep((s) => Math.min(6, s + 1));

  return (
    <div style={{ minHeight: "100vh", background: "#080b16", color: "#e4e4e7" }}>
      <Navigation />

      <section
        style={{
          position: "relative",
          paddingTop: "clamp(120px, 16vw, 180px)",
          paddingBottom: "clamp(60px, 8vw, 100px)",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: 0,
            right: -200,
            width: 600,
            height: 600,
            background: "radial-gradient(circle, rgba(13,190,130,0.04) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden
          className="grid-pattern"
          style={{ position: "absolute", inset: 0, opacity: 0.5, pointerEvents: "none" }}
        />

        <div
          className="max-w-7xl mx-auto"
          style={{
            position: "relative",
            paddingLeft: "clamp(24px, 5vw, 64px)",
            paddingRight: "clamp(24px, 5vw, 64px)",
          }}
        >
          <div style={{ marginBottom: 36 }}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(13,190,130,0.06)",
                border: "0.5px solid rgba(13,190,130,0.30)",
                borderRadius: 3,
                padding: "5px 10px",
                marginBottom: 16,
              }}
            >
              <PulseDot color="#0dbe82" />
              <span
                style={{
                  fontFamily: "Geist Mono, monospace",
                  fontSize: 10,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#0dbe82",
                  fontWeight: 700,
                }}
              >
                C0insiglieri Match Engine
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease }}
              className="balance"
              style={{
                fontFamily: "Geist, sans-serif",
                fontSize: "clamp(34px, 5.5vw, 54px)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                color: "#e4e4e7",
                margin: 0,
                maxWidth: 760,
              }}
            >
              Find your exchange. <span style={{ color: "#71717a" }}>In 5 questions.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16, ease }}
              className="pretty"
              style={{
                fontFamily: "Geist, sans-serif",
                fontSize: 15,
                color: "#71717a",
                margin: "14px 0 0 0",
                maxWidth: 600,
                lineHeight: 1.55,
              }}
            >
              Personalized match. Scored by <C0insiglieri />. All Signal. 0 Guess.
            </motion.p>
          </div>

          <div
            className="quiz-grid"
            style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr)", gap: 24 }}
          >
            <QuizPanel
              step={step}
              setStep={setStep}
              a={a}
              setA={setA}
              completed={completed}
              onNext={goNext}
            />
            <RankingPanel ranking={top4} step={step} completed={completed} a={a} />
          </div>
        </div>

        <style
          dangerouslySetInnerHTML={{
            __html: `
            @media (min-width: 980px) {
              .quiz-grid {
                grid-template-columns: 60fr 40fr !important;
              }
              .quiz-grid > :last-child {
                position: sticky;
                top: 100px;
                align-self: flex-start;
              }
            }
          `,
          }}
        />
      </section>

      <Footer />
    </div>
  );
}

function QuizPanel({
  step,
  setStep,
  a,
  setA,
  completed,
  onNext,
}: {
  step: number;
  setStep: (n: number) => void;
  a: Answers;
  setA: (a: Answers) => void;
  completed: boolean;
  onNext: () => void;
}) {
  return (
    <div
      style={{
        background: "#0f1422",
        border: "0.5px solid rgba(255,255,255,0.07)",
        borderRadius: 3,
        padding: "clamp(18px, 3vw, 28px)",
      }}
    >
      <div style={{ display: "flex", gap: 6, marginBottom: 22 }}>
        {[1, 2, 3, 4, 5].map((n) => (
          <div
            key={n}
            style={{
              flex: 1,
              height: 3,
              background: step >= n ? "#0dbe82" : "rgba(255,255,255,0.08)",
              borderRadius: 2,
              transition: "background 280ms ease",
            }}
          />
        ))}
      </div>

      <div
        style={{
          fontFamily: "Geist Mono, monospace",
          fontSize: 10,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "#71717a",
          marginBottom: 10,
        }}
      >
        {completed ? "Match Complete" : `Question ${Math.min(step, 5)} of 5`}
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <Step key="q1" question="Where are you based?">
            <CountryPicker value={a.country} onChange={(v) => setA({ ...a, country: v })} />
            {a.country && MICAR_COUNTRIES.has(a.country) && (
              <Hint icon="✓" color="#0dbe82">
                MiCAR jurisdiction detected — filtering to licensed exchanges only.
              </Hint>
            )}
            <NextButton disabled={!a.country} onClick={() => setStep(2)} />
          </Step>
        )}

        {step === 2 && (
          <Step key="q2" question="What do you mainly trade?">
            <Hint color="#71717a">Pick all that apply.</Hint>
            <ChipMulti
              options={["Spot", "Futures/Leverage", "Staking", "Just starting out"]}
              values={a.trades}
              onToggle={(v) => {
                const t = v as TradeType;
                setA({
                  ...a,
                  trades: a.trades.includes(t) ? a.trades.filter((x) => x !== t) : [...a.trades, t],
                });
              }}
            />
            <NextButton disabled={a.trades.length === 0} onClick={() => setStep(3)} />
          </Step>
        )}

        {step === 3 && (
          <Step key="q3" question="Do you want a crypto card?">
            <Hint color="#18b4d4">Key differentiator in the EU.</Hint>
            <ChipSingle
              options={[
                { value: "yes", label: "Yes, it's important" },
                { value: "nice", label: "Nice to have" },
                { value: "no", label: "Not needed" },
              ]}
              value={a.card ?? ""}
              onSelect={(v) => setA({ ...a, card: v as CardPref })}
            />
            <NextButton disabled={!a.card} onClick={() => setStep(4)} />
          </Step>
        )}

        {step === 4 && (
          <Step key="q4" question="How often do you trade?">
            <ChipSingle
              options={[
                { value: "Daily", label: "Daily" },
                { value: "Weekly", label: "Weekly" },
                { value: "Monthly", label: "Monthly" },
                { value: "Mostly HODL", label: "Mostly HODL" },
              ]}
              value={a.frequency ?? ""}
              onSelect={(v) => setA({ ...a, frequency: v as Frequency })}
            />
            <NextButton disabled={!a.frequency} onClick={() => setStep(5)} />
          </Step>
        )}

        {step === 5 && (
          <Step key="q5" question="How much are you investing?">
            <ChipSingle
              options={[
                { value: "Under €500", label: "Under €500" },
                { value: "€500–€5K", label: "€500–€5K" },
                { value: "Over €5K", label: "Over €5K" },
              ]}
              value={a.volume ?? ""}
              onSelect={(v) => setA({ ...a, volume: v as Volume })}
            />
            <NextButton disabled={!a.volume} onClick={onNext} label="See Match →" />
          </Step>
        )}

        {step >= 6 && (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease }}
          >
            <div
              style={{
                fontFamily: "Geist, sans-serif",
                fontSize: 22,
                fontWeight: 700,
                color: "#e4e4e7",
                letterSpacing: "-0.02em",
                marginBottom: 8,
              }}
            >
              Match complete.{" "}
              <span style={{ color: "#0dbe82" }}>Your top exchange is on the right.</span>
            </div>
            <p
              style={{
                fontFamily: "Geist, sans-serif",
                fontSize: 14,
                color: "#71717a",
                lineHeight: 1.55,
                margin: 0,
                marginBottom: 16,
              }}
            >
              Scoring weights: Security 30%, Proof of Reserves 25%, Compliance 20%, Liquidity 15%,
              Track Record 10%. Personal preferences add positive boosts only — no exchange is
              penalized.
            </p>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="press"
              style={{
                fontFamily: "Geist Mono, monospace",
                fontSize: 10,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                fontWeight: 700,
                background: "transparent",
                color: "#18b4d4",
                border: "0.5px solid rgba(24,180,212,0.4)",
                borderRadius: 3,
                padding: "8px 12px",
                cursor: "pointer",
              }}
            >
              ← Start Over
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Step({ question, children }: { question: string; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 12 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -12 }}
      transition={{ duration: 0.3, ease }}
    >
      <h2
        className="balance"
        style={{
          fontFamily: "Geist, sans-serif",
          fontSize: "clamp(20px, 2.5vw, 26px)",
          fontWeight: 600,
          letterSpacing: "-0.02em",
          color: "#e4e4e7",
          margin: 0,
          marginBottom: 18,
        }}
      >
        {question}
      </h2>
      {children}
    </motion.div>
  );
}

function Hint({
  icon,
  color = "#71717a",
  children,
}: {
  icon?: string;
  color?: string;
  children: React.ReactNode;
}) {
  return (
    <p
      style={{
        fontFamily: "Geist Mono, monospace",
        fontSize: 11,
        color,
        marginTop: 10,
        marginBottom: 14,
        display: "flex",
        alignItems: "center",
        gap: 6,
      }}
    >
      {icon && <span>{icon}</span>}
      {children}
    </p>
  );
}

function NextButton({
  onClick,
  disabled,
  label = "Next →",
}: {
  onClick: () => void;
  disabled?: boolean;
  label?: string;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      disabled={disabled}
      whileTap={!disabled ? { scale: 0.97 } : undefined}
      style={{
        fontFamily: "Geist Mono, monospace",
        fontSize: 11,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        fontWeight: 700,
        background: disabled ? "rgba(255,255,255,0.04)" : "#0dbe82",
        color: disabled ? "#3f3f46" : "#09090b",
        border: "none",
        borderRadius: 3,
        padding: "10px 16px",
        cursor: disabled ? "not-allowed" : "pointer",
        marginTop: 20,
      }}
    >
      {label}
    </motion.button>
  );
}

function CountryPicker({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const [query, setQuery] = useState(value);
  const [focused, setFocused] = useState(false);
  const filtered =
    query.length > 0
      ? COUNTRIES.filter((c) => c.toLowerCase().includes(query.toLowerCase())).slice(0, 8)
      : COUNTRIES.slice(0, 8);
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          background: "#080b16",
          border: "0.5px solid rgba(255,255,255,0.12)",
          borderRadius: 3,
          padding: "10px 12px",
        }}
      >
        <Search size={14} color="#71717a" />
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            if (!e.target.value) onChange("");
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 180)}
          placeholder="Type your country…"
          style={{
            flex: 1,
            background: "transparent",
            border: "none",
            outline: "none",
            color: "#e4e4e7",
            fontFamily: "Geist, sans-serif",
            fontSize: 14,
          }}
        />
        {value && (
          <span
            style={{
              fontFamily: "Geist Mono, monospace",
              fontSize: 9.5,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: MICAR_COUNTRIES.has(value) ? "#0dbe82" : "#71717a",
              background: MICAR_COUNTRIES.has(value)
                ? "rgba(13,190,130,0.10)"
                : "rgba(255,255,255,0.04)",
              padding: "2px 6px",
              borderRadius: 3,
              fontWeight: 700,
            }}
          >
            {MICAR_COUNTRIES.has(value) ? "MiCAR" : "Non-EU"}
          </span>
        )}
      </div>
      {focused && filtered.length > 0 && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            marginTop: 4,
            background: "#0f1422",
            border: "0.5px solid rgba(255,255,255,0.12)",
            borderRadius: 3,
            maxHeight: 240,
            overflowY: "auto",
            zIndex: 10,
            boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
          }}
        >
          {filtered.map((c) => (
            <button
              key={c}
              type="button"
              onMouseDown={(e) => {
                e.preventDefault();
                onChange(c);
                setQuery(c);
                setFocused(false);
              }}
              style={{
                width: "100%",
                textAlign: "left",
                background: "transparent",
                border: "none",
                padding: "8px 12px",
                color: "#e4e4e7",
                fontFamily: "Geist, sans-serif",
                fontSize: 13,
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "transparent")
              }
            >
              {c}
              {MICAR_COUNTRIES.has(c) && (
                <span
                  style={{
                    fontFamily: "Geist Mono, monospace",
                    fontSize: 8.5,
                    color: "#0dbe82",
                    letterSpacing: "0.12em",
                  }}
                >
                  MiCAR
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function ChipMulti({
  options,
  values,
  onToggle,
}: {
  options: string[];
  values: string[];
  onToggle: (v: string) => void;
}) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      {options.map((o) => {
        const active = values.includes(o);
        return (
          <motion.button
            key={o}
            type="button"
            onClick={() => onToggle(o)}
            whileTap={{ scale: 0.97 }}
            style={{
              fontFamily: "Geist Mono, monospace",
              fontSize: 11,
              letterSpacing: "0.10em",
              textTransform: "uppercase",
              fontWeight: 700,
              background: active ? "rgba(24,180,212,0.10)" : "rgba(255,255,255,0.03)",
              color: active ? "#18b4d4" : "#e4e4e7",
              border: `0.5px solid ${active ? "rgba(24,180,212,0.50)" : "rgba(255,255,255,0.10)"}`,
              borderRadius: 3,
              padding: "8px 12px",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              transition: "all 200ms ease",
            }}
          >
            {active && <Check size={12} strokeWidth={3} />}
            {o}
          </motion.button>
        );
      })}
    </div>
  );
}

function ChipSingle({
  options,
  value,
  onSelect,
}: {
  options: { value: string; label: string }[];
  value: string;
  onSelect: (v: string) => void;
}) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      {options.map((o) => {
        const active = value === o.value;
        return (
          <motion.button
            key={o.value}
            type="button"
            onClick={() => onSelect(o.value)}
            whileTap={{ scale: 0.97 }}
            style={{
              fontFamily: "Geist Mono, monospace",
              fontSize: 11,
              letterSpacing: "0.10em",
              textTransform: "uppercase",
              fontWeight: 700,
              background: active ? "rgba(13,190,130,0.10)" : "rgba(255,255,255,0.03)",
              color: active ? "#0dbe82" : "#e4e4e7",
              border: `0.5px solid ${active ? "rgba(13,190,130,0.50)" : "rgba(255,255,255,0.10)"}`,
              borderRadius: 3,
              padding: "8px 12px",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              transition: "all 200ms ease",
            }}
          >
            {active && <Check size={12} strokeWidth={3} />}
            {o.label}
          </motion.button>
        );
      })}
    </div>
  );
}

function RankingPanel({
  ranking,
  step,
  completed,
  a,
}: {
  ranking: { exchange: Exchange; finalScore: number }[];
  step: number;
  completed: boolean;
  a: Answers;
}) {
  const noResults = ranking.length === 0;
  const maxBase = ranking.reduce((m, r) => Math.max(m, r.finalScore), 1);

  return (
    <div
      style={{
        background: "#0f1422",
        border: "0.5px solid rgba(255,255,255,0.07)",
        borderRadius: 3,
        padding: "clamp(16px, 2.5vw, 22px)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 14,
          gap: 8,
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "Geist Mono, monospace",
              fontSize: 10,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#71717a",
            }}
          >
            Live Ranking
          </div>
          <div
            style={{
              fontFamily: "Geist, sans-serif",
              fontSize: 16,
              fontWeight: 700,
              color: "#e4e4e7",
              marginTop: 2,
            }}
          >
            {completed ? "Your match" : step === 1 ? "Tell us where you're based" : "Top results"}
          </div>
        </div>
        {a.country && (
          <span
            style={{
              fontFamily: "Geist Mono, monospace",
              fontSize: 9,
              color: "#71717a",
              letterSpacing: "0.10em",
              textTransform: "uppercase",
            }}
          >
            {a.country}
          </span>
        )}
      </div>

      {noResults ? (
        <div
          style={{
            fontFamily: "Geist Mono, monospace",
            fontSize: 11,
            color: "#e8703a",
            padding: 14,
            background: "rgba(232,112,58,0.06)",
            border: "0.5px solid rgba(232,112,58,0.30)",
            borderRadius: 3,
          }}
        >
          No MiCAR-licensed exchanges match your country filter.
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {ranking.map((r, i) => {
            const matchPct =
              maxBase > 0 ? Math.round((r.finalScore / maxBase) * 100) : r.finalScore;
            const isMatched = completed && i === 0;
            return (
              <motion.div
                key={r.exchange.id}
                layout
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.04, ease }}
                style={{
                  background: isMatched ? "rgba(13,190,130,0.06)" : "rgba(8,11,22,0.5)",
                  border: `0.5px solid ${
                    isMatched ? "rgba(13,190,130,0.50)" : "rgba(255,255,255,0.07)"
                  }`,
                  borderRadius: 3,
                  padding: 12,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <span
                    style={{
                      fontFamily: "Geist Mono, monospace",
                      fontSize: 11,
                      fontWeight: 800,
                      color: isMatched ? "#0dbe82" : "#71717a",
                      minWidth: 18,
                    }}
                  >
                    #{i + 1}
                  </span>
                  <ExchangeLogo domain={r.exchange.domain} name={r.exchange.name} size={28} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        flexWrap: "wrap",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "Geist, sans-serif",
                          fontSize: 14,
                          fontWeight: 600,
                          color: "#e4e4e7",
                        }}
                      >
                        {r.exchange.name}
                      </span>
                      {isMatched && (
                        <span
                          style={{
                            fontFamily: "Geist Mono, monospace",
                            fontSize: 9,
                            letterSpacing: "0.14em",
                            textTransform: "uppercase",
                            fontWeight: 700,
                            color: "#0dbe82",
                            background: "rgba(13,190,130,0.12)",
                            border: "0.5px solid rgba(13,190,130,0.50)",
                            borderRadius: 3,
                            padding: "1px 6px",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 4,
                          }}
                        >
                          <PulseDot color="#0dbe82" size={5} />
                          Matched
                        </span>
                      )}
                    </div>
                    <div
                      style={{
                        fontFamily: "Geist Mono, monospace",
                        fontSize: 9.5,
                        color: "#71717a",
                        marginTop: 1,
                      }}
                    >
                      {matchPct}% match · {r.finalScore}/100
                    </div>
                  </div>
                  {isMatched && (
                    <a
                      href={r.exchange.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="press"
                      style={{
                        fontFamily: "Geist Mono, monospace",
                        fontSize: 10,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        fontWeight: 700,
                        background: "#e8703a",
                        color: "#09090b",
                        padding: "5px 10px",
                        borderRadius: 3,
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 4,
                      }}
                    >
                      Visit
                      <ArrowUpRight size={12} strokeWidth={2.5} />
                    </a>
                  )}
                </div>
                <ScoreBar
                  value={r.finalScore}
                  color={scoreColor(r.finalScore)}
                  height={3}
                  width="100%"
                />
              </motion.div>
            );
          })}
        </div>
      )}

      <p
        style={{
          fontFamily: "Geist Mono, monospace",
          fontSize: 9,
          letterSpacing: "0.10em",
          color: "#3f3f46",
          marginTop: 14,
          marginBottom: 0,
          textAlign: "center",
          lineHeight: 1.5,
        }}
      >
        Scores calculated by C0insiglieri algorithm — independent of placement
      </p>
    </div>
  );
}
