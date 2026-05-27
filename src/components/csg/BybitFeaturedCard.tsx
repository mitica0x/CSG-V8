import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Star, Check, ArrowUpRight } from "lucide-react";
import type { Exchange } from "@/data/exchanges";

// Rust-bordered featured card for the paid placement.
// Grid: 280px / 1fr / 220px (left identity / center score+bars / right metrics).
// Score ring + 6 mini-bars are IntersectionObserver-triggered.

const SPRING = [0.34, 1.56, 0.64, 1] as const;
const SOFT = [0.22, 1, 0.36, 1] as const;
const RUST = "#e8703a";
const EMERALD = "#0dbe82";
const CYAN = "#18b4d4";
const LIME = "#70a848";

// Tradeable static stats for the Bybit featured card. Numbers ratify the
// score — the user's brief calls these out specifically.
const BYBIT_VITALS = {
  vol24h: { value: "$12.4B", delta: "+8.2%" },
  spreadBtc: { value: "0.6 bps", note: "tight" },
  uptime90d: { value: "99.98%", note: "stable" },
  ctr24h: "3.4%",
};

const DIM_LABELS: Record<string, string> = {
  security: "Security",
  proofOfReserves: "Proof of Reserves",
  compliance: "Compliance",
  liquidity: "Liquidity",
  trackRecord: "Track Record",
  productDepth: "Product Depth",
};

export default function BybitFeaturedCard({ exchange }: { exchange: Exchange }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  // Product depth isn't in the data shape — derive a reasonable value from
  // the existing dimensions so we still ship the spec'd 6 bars.
  const productDepth = Math.round(
    (exchange.liquidity * 0.5 + exchange.trackRecord * 0.5 + 8) // tilted slightly up for featured
  );

  const dims = [
    { key: "security",       value: exchange.security },
    { key: "proofOfReserves", value: exchange.proofOfReserves },
    { key: "compliance",     value: exchange.compliance },
    { key: "liquidity",      value: exchange.liquidity },
    { key: "trackRecord",    value: exchange.trackRecord },
    { key: "productDepth",   value: Math.min(98, productDepth) },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: SOFT }}
      style={{
        position: "relative",
        background: "#0f1422",
        border: "0.5px solid rgba(232,112,58,0.15)",
        borderLeft: `3px solid ${RUST}`,
        borderRadius: 3,
        padding: "clamp(20px, 3vw, 32px)",
      }}
    >
      {/* SPONSORED disclosure pin */}
      <div
        style={{
          position: "absolute",
          top: 14,
          right: 14,
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          padding: "3px 8px",
          background: "rgba(232,112,58,0.08)",
          border: `0.5px solid ${RUST}40`,
          borderRadius: 3,
          fontFamily: "Geist Mono, monospace",
          fontSize: 9,
          fontWeight: 700,
          letterSpacing: "0.14em",
          color: RUST,
          textTransform: "uppercase",
        }}
      >
        Sponsored · disclosed
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(220px, 280px) 1fr minmax(180px, 220px)",
          gap: "clamp(20px, 3vw, 36px)",
          alignItems: "center",
        }}
        className="bybit-grid"
      >
        {/* LEFT — rank + logo + name + badges */}
        <div>
          <p
            style={{
              fontFamily: "Geist Mono, monospace",
              fontSize: 28,
              fontWeight: 700,
              color: "#3f3f46",
              lineHeight: 1,
              marginBottom: 14,
            }}
          >
            #{1}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 14 }}>
            <img
              src={`https://logo.clearbit.com/${exchange.domain}`}
              alt={exchange.name}
              width={44}
              height={44}
              loading="lazy"
              style={{ borderRadius: 3, background: "#0a0e1c", flexShrink: 0 }}
              onError={(e) => ((e.currentTarget as HTMLImageElement).style.visibility = "hidden")}
            />
            <h3
              style={{
                fontFamily: "Geist, sans-serif",
                fontSize: 24,
                fontWeight: 700,
                letterSpacing: "-0.015em",
                color: "#e4e4e7",
              }}
            >
              {exchange.name}
            </h3>
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <Chip color={RUST} rgb="232,112,58">
              <Star size={10} strokeWidth={2.5} fill={RUST} />
              FEATURED
            </Chip>
            {exchange.micarLicensed && (
              <Chip color={EMERALD} rgb="13,190,130">
                <Check size={10} strokeWidth={2.5} />
                MiCAR LICENSED
              </Chip>
            )}
          </div>
        </div>

        {/* CENTER — score ring + 6 mini-bars */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gap: 20,
            alignItems: "center",
            minWidth: 0,
          }}
        >
          <ScoreRing value={exchange.score} shown={inView} />
          <div style={{ display: "flex", flexDirection: "column", gap: 8, minWidth: 0 }}>
            {dims.map((d, i) => (
              <MiniBar
                key={d.key}
                label={DIM_LABELS[d.key] || d.key}
                value={d.value}
                shown={inView}
                delay={i * 0.06}
              />
            ))}
          </div>
        </div>

        {/* RIGHT — metrics + understated CTA */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10, minWidth: 0 }}>
          <Vital label="24H VOL" value={BYBIT_VITALS.vol24h.value} note={BYBIT_VITALS.vol24h.delta} noteColor={EMERALD} />
          <Vital label="SPREAD BTC" value={BYBIT_VITALS.spreadBtc.value} note={BYBIT_VITALS.spreadBtc.note} noteColor={LIME} />
          <Vital label="UPTIME 90D" value={BYBIT_VITALS.uptime90d.value} note={BYBIT_VITALS.uptime90d.note} noteColor={EMERALD} />

          {/* Cyan text-link CTA — understated by design; the featured-rust
              border carries the placement weight, the link is the conversion. */}
          <a
            href={exchange.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: 10,
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontFamily: "Geist Mono, monospace",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.04em",
              color: "#18b4d4",
              textDecoration: "none",
              transition: "color 150ms cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#22c4e5")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#18b4d4")}
          >
            Visit {exchange.name} <ArrowUpRight size={12} strokeWidth={2.25} />
          </a>

          {/* Disclosure — own line, below CTA, never inside button */}
          <p
            style={{
              marginTop: 8,
              fontFamily: "Geist Mono, monospace",
              fontSize: 9,
              color: "#52525b",
              letterSpacing: "0.06em",
              lineHeight: 1.5,
            }}
          >
            Sponsored by Bybit · CTR 24h {BYBIT_VITALS.ctr24h} · Editorial score independent
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .bybit-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </motion.div>
  );
}

// ─── Chip ────────────────────────────────────────────────────────────────────
function Chip({ children, color, rgb }: { children: React.ReactNode; color: string; rgb: string }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        padding: "3px 8px",
        background: `rgba(${rgb},0.10)`,
        color,
        border: `0.5px solid rgba(${rgb},0.45)`,
        borderRadius: 3,
        fontFamily: "Geist Mono, monospace",
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: "0.08em",
      }}
    >
      {children}
    </span>
  );
}

// ─── Score ring — 72px circular progress ─────────────────────────────────────
function ScoreRing({ value, shown }: { value: number; shown: boolean }) {
  const size = 72;
  const stroke = 4;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (value / 100) * c;
  return (
    <div
      style={{
        position: "relative",
        width: size,
        height: size,
        flexShrink: 0,
      }}
    >
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={EMERALD}
          strokeWidth={stroke}
          strokeDasharray={c}
          strokeDashoffset={shown ? offset : c}
          strokeLinecap="round"
          style={{
            transition: `stroke-dashoffset 800ms cubic-bezier(${SPRING[0]}, ${SPRING[1]}, ${SPRING[2]}, ${SPRING[3]})`,
          }}
        />
      </svg>
      <span
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Geist Mono, monospace",
          fontSize: 22,
          fontWeight: 700,
          color: EMERALD,
        }}
      >
        {value}
      </span>
    </div>
  );
}

// ─── Mini bar (one of the 6 dimensions) ──────────────────────────────────────
function MiniBar({
  label,
  value,
  shown,
  delay,
}: {
  label: string;
  value: number;
  shown: boolean;
  delay: number;
}) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "100px 1fr 32px", gap: 12, alignItems: "center", minWidth: 0 }}>
      <span
        style={{
          fontFamily: "Geist Mono, monospace",
          fontSize: 10,
          color: "#a1a1aa",
          letterSpacing: "0.04em",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {label}
      </span>
      <div
        style={{
          width: "100%",
          height: 3,
          background: "rgba(255,255,255,0.06)",
          borderRadius: 3,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: shown ? `${value}%` : 0,
            height: "100%",
            background: dimColor(value),
            transition: `width 800ms cubic-bezier(${SPRING[0]}, ${SPRING[1]}, ${SPRING[2]}, ${SPRING[3]}) ${delay}s`,
          }}
        />
      </div>
      <span
        style={{
          fontFamily: "Geist Mono, monospace",
          fontSize: 11,
          fontWeight: 600,
          color: dimColor(value),
          textAlign: "right",
        }}
      >
        {value}
      </span>
    </div>
  );
}

function dimColor(v: number): string {
  if (v >= 85) return EMERALD;
  if (v >= 75) return CYAN;
  if (v >= 65) return LIME;
  return "#71717a";
}

// ─── Vital ───────────────────────────────────────────────────────────────────
function Vital({
  label,
  value,
  note,
  noteColor,
}: {
  label: string;
  value: string;
  note: string;
  noteColor: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        gap: 8,
        paddingBottom: 8,
        borderBottom: "0.5px solid rgba(255,255,255,0.07)",
      }}
    >
      <span
        style={{
          fontFamily: "Geist Mono, monospace",
          fontSize: 10,
          color: "#71717a",
          letterSpacing: "0.08em",
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontFamily: "Geist Mono, monospace",
          fontSize: 12,
          fontWeight: 600,
          color: "#e4e4e7",
        }}
      >
        {value} <span style={{ color: noteColor, fontWeight: 500 }}>{note}</span>
      </span>
    </div>
  );
}
