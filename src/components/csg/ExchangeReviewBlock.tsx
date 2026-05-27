import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Check, X, ArrowUpRight } from "lucide-react";
import type { Exchange } from "@/data/exchanges";
import { scoreColor } from "@/data/exchanges";

// Per-exchange editorial review block. Static editorial content keyed by
// exchange id — keeps the data layer clean and makes the copy easy to
// iterate without touching schemas.

const SOFT = [0.22, 1, 0.36, 1] as const;
const SPRING = [0.34, 1.56, 0.64, 1] as const;

type ReviewCopy = {
  summary: string;
  pros: string[];
  cons: string[];
};

const COPY: Record<string, ReviewCopy> = {
  bybit: {
    summary:
      "Bybit is the highest-scoring venue we cover. They were one of the first non-EU venues to pursue MiCAR alignment seriously, they publish monthly proof-of-reserves, and their EU card programme is the largest in the cohort. Spreads on majors are consistently tight; uptime over 90 days sits at 99.98%.",
    pros: [
      "MiCAR licensed in the EU",
      "Monthly Merkle-tree proof of reserves",
      "3M+ EU cards active",
      "Tight spreads on majors",
    ],
    cons: [
      "Derivatives ramp can feel steep for new accounts",
      "Card region eligibility is country-specific",
    ],
  },
  binance: {
    summary:
      "The deepest liquidity on the planet — and the regulatory baggage that comes with it. For pure execution Binance is hard to beat. For EU-only operators, MiCAR posture remains the open question we keep flagging.",
    pros: [
      "Deepest spot and derivatives liquidity",
      "Strongest asset breadth",
      "Robust API and tooling",
    ],
    cons: [
      "No MiCAR licence (as of this review cycle)",
      "Patchy EU access by country",
      "Compliance posture moving target",
    ],
  },
  kraken: {
    summary:
      "Kraken Pro is what serious traders use when they don't want to compromise on either security or regulatory clarity. Their public security audits are the best in the cohort and they've never had a major breach. Liquidity isn't Binance, but for MiCAR-aware EU traders it's the strongest second pick.",
    pros: [
      "MiCAR licensed",
      "No major breach in 13+ years",
      "Strongest published security posture",
      "Lower fees on Pro tier",
    ],
    cons: [
      "Liquidity thinner than top-tier venues on minors",
      "No proprietary crypto card",
    ],
  },
  okx: {
    summary:
      "Strong derivatives venue with a respectable proof-of-reserves cadence. OKX hasn't pursued MiCAR yet, which keeps them off any list we recommend for EU-resident traders strictly. For non-EU or US-friendly geographies they're competitive.",
    pros: [
      "Strong derivatives and copy-trading product",
      "Quarterly PoR with audited Merkle trees",
      "Crypto card available in select regions",
    ],
    cons: [
      "No MiCAR licence",
      "EU residency restrictions in some countries",
    ],
  },
  coinbase: {
    summary:
      "Coinbase is the easy first step for EU retail. They're MiCAR-licensed, US-listed, and SOC-audited. Fees on the standard product are high — Advanced is the route for anyone serious. Beginner UX is genuinely the best of the cohort.",
    pros: [
      "MiCAR licensed",
      "US-listed, audited financials",
      "Beginner-friendly UX",
      "Crypto card with Visa rails",
    ],
    cons: [
      "Standard product fees are high",
      "Thinner liquidity on majors",
      "No derivatives in EU",
    ],
  },
  bitstamp: {
    summary:
      "The oldest exchange still operating — and it shows in the conservative posture. MiCAR licensed, SOC 2 + ISO 27001 certified, and one of the few venues with a credible regulatory history across multiple jurisdictions. Liquidity is the trade-off.",
    pros: [
      "MiCAR licensed",
      "SOC 2 Type II + ISO 27001 certified",
      "13+ year track record",
    ],
    cons: [
      "Thin liquidity on minors",
      "No derivatives or crypto card",
    ],
  },
  cryptocom: {
    summary:
      "Crypto.com is built around the card programme — that's the lead product, and it remains one of the broadest crypto cards on the market. The exchange product underneath is solid but the card is what brings retention.",
    pros: [
      "MiCAR licensed",
      "Broadest crypto card programme in EU",
      "Wide asset coverage on spot",
    ],
    cons: [
      "Card tier benefits gated behind CRO staking",
      "Liquidity on derivatives thinner than peers",
    ],
  },
  bitpanda: {
    summary:
      "Vienna-based, EU-native, and one of the cleanest compliance postures in the cohort. Bitpanda's product is wider than crypto (stocks, metals) — for a strictly crypto operator they're a regulated, conservative pick.",
    pros: [
      "MiCAR licensed",
      "Vienna headquarters, fully EU-regulated",
      "Cryptoassets + stocks + metals in one app",
    ],
    cons: [
      "Liquidity thin compared to global venues",
      "Fee structure can be opaque on the standard product",
    ],
  },
};

export default function ExchangeReviewBlock({ exchange }: { exchange: Exchange }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const copy = COPY[exchange.id];

  // If we don't have editorial copy for an exchange, skip it — the table
  // already lists it. Better than rendering a half-empty review block.
  if (!copy) return null;

  const color = scoreColor(exchange.score);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: SOFT }}
      style={{
        background: "#0f1422",
        border: "0.5px solid rgba(255,255,255,0.07)",
        borderRadius: 3,
        padding: "clamp(20px, 3vw, 32px)",
        scrollMarginTop: 88,
      }}
      id={`review-${exchange.id}`}
    >
      {/* Header */}
      <header style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24, flexWrap: "wrap" }}>
        <img
          src={`https://logo.clearbit.com/${exchange.domain}`}
          alt={exchange.name}
          width={56}
          height={56}
          loading="lazy"
          style={{ borderRadius: 3, background: "#0a0e1c", flexShrink: 0 }}
          onError={(e) => ((e.currentTarget as HTMLImageElement).style.visibility = "hidden")}
        />
        <div style={{ minWidth: 0, flex: 1 }}>
          <p
            style={{
              fontFamily: "Geist Mono, monospace",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#71717a",
              marginBottom: 4,
            }}
          >
            Exchange Review
          </p>
          <h2
            style={{
              fontFamily: "Geist, sans-serif",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: "-0.015em",
              color: "#e4e4e7",
              lineHeight: 1.2,
            }}
          >
            {exchange.name}
          </h2>
        </div>
        <ScoreRing value={exchange.score} color={color} shown={inView} />
      </header>

      {/* Editorial paragraph */}
      <p
        style={{
          fontFamily: "Geist, sans-serif",
          fontSize: 15,
          lineHeight: 1.65,
          color: "#d4d4d8",
          marginBottom: 24,
          maxWidth: 720,
        }}
      >
        {copy.summary}
      </p>

      {/* Pros / Cons */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 16,
          marginBottom: 24,
        }}
      >
        <ProsCons
          label="Pros"
          color="#0dbe82"
          Icon={Check}
          items={copy.pros}
        />
        <ProsCons
          label="Cons"
          color="#e8703a"
          Icon={X}
          items={copy.cons}
        />
      </div>

      {/* CTAs */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
        <a
          href={exchange.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "10px 18px",
            background: "#0dbe82",
            color: "#080b16",
            fontFamily: "Geist, sans-serif",
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "0.01em",
            borderRadius: 3,
            textDecoration: "none",
            transition: "background 200ms cubic-bezier(0.22, 1, 0.36, 1)",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#16d491")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#0dbe82")}
        >
          Visit {exchange.name} <ArrowUpRight size={13} strokeWidth={2.25} />
        </a>
        <p
          style={{
            fontFamily: "Geist Mono, monospace",
            fontSize: 10,
            color: "#52525b",
            letterSpacing: "0.06em",
          }}
        >
          May earn commission. Editorial score independent.
        </p>
      </div>
    </motion.article>
  );
}

function ScoreRing({ value, color, shown }: { value: number; color: string; shown: boolean }) {
  const size = 56;
  const stroke = 3;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (value / 100) * c;
  return (
    <div style={{ position: "relative", width: size, height: size, flexShrink: 0 }}>
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
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
          fontSize: 16,
          fontWeight: 700,
          color,
        }}
      >
        {value}
      </span>
    </div>
  );
}

function ProsCons({
  label,
  color,
  Icon,
  items,
}: {
  label: string;
  color: string;
  Icon: typeof Check;
  items: string[];
}) {
  return (
    <div>
      <p
        style={{
          fontFamily: "Geist Mono, monospace",
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color,
          marginBottom: 10,
        }}
      >
        {label}
      </p>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
        {items.map((it, i) => (
          <li
            key={i}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 8,
              fontFamily: "Geist, sans-serif",
              fontSize: 13.5,
              lineHeight: 1.5,
              color: "#a1a1aa",
            }}
          >
            <Icon size={13} strokeWidth={2.25} color={color} style={{ flexShrink: 0, marginTop: 4 }} />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}
