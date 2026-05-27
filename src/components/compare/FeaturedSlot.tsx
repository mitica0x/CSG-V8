import ExchangeLogo from "./ExchangeLogo";
import ScoreBar from "./ScoreBar";
import { TAG_COLORS, scoreColor, type Exchange } from "@/data/exchanges";

interface Props {
  exchange: Exchange;
  dimmed?: boolean;
}

const MINI_KEYS: Array<{ label: string; key: keyof Exchange }> = [
  { label: "SEC", key: "security" },
  { label: "PoR", key: "proofOfReserves" },
  { label: "CMP", key: "compliance" },
  { label: "LIQ", key: "liquidity" },
  { label: "TR", key: "trackRecord" },
];

export default function FeaturedSlot({ exchange, dimmed = false }: Props) {
  return (
    <div
      style={{
        margin: "0 64px 2px",
        background: "#0f1422",
        border: "0.5px solid rgba(232,112,58,0.25)",
        borderLeft: "3px solid #e8703a",
        borderRadius: 3,
        padding: "20px 24px",
        display: "flex",
        alignItems: "center",
        gap: 24,
        opacity: dimmed ? 0.5 : 1,
        transitionProperty: "opacity",
        transitionDuration: "200ms",
      }}
    >
      {/* Left cluster */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, flex: "none" }}>
        <span
          style={{
            fontFamily: "Geist Mono, monospace",
            fontSize: 9,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.14em",
            background: "rgba(232,112,58,0.1)",
            color: "#e8703a",
            border: "0.5px solid rgba(232,112,58,0.2)",
            padding: "3px 10px",
            borderRadius: 2,
            whiteSpace: "nowrap",
          }}
        >
          FEATURED
        </span>

        <ExchangeLogo name={exchange.name} domain={exchange.domain} size={28} accent="#e8703a" />

        <span
          style={{
            fontFamily: "Geist, sans-serif",
            fontSize: 16,
            fontWeight: 600,
            color: "#e4e4e7",
            letterSpacing: "-0.01em",
          }}
        >
          {exchange.name}
        </span>

        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {exchange.tags.slice(0, 3).map((tag) => {
            const c = TAG_COLORS[tag] ?? TAG_COLORS.Spot;
            return (
              <span
                key={tag}
                style={{
                  fontFamily: "Geist Mono, monospace",
                  fontSize: 9,
                  background: c.bg,
                  color: c.fg,
                  border: `0.5px solid ${c.bd}`,
                  padding: "2px 8px",
                  borderRadius: 2,
                  whiteSpace: "nowrap",
                  letterSpacing: "0.02em",
                }}
              >
                {tag}
              </span>
            );
          })}
        </div>
      </div>

      {/* Center: score + bar + mini breakdown */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
          <span
            className="tabular-nums"
            style={{
              fontFamily: "Geist, sans-serif",
              fontSize: 32,
              fontWeight: 700,
              color: "#e4e4e7",
              lineHeight: 1,
              letterSpacing: "-0.03em",
            }}
          >
            {exchange.score}
          </span>
          <span style={{ fontFamily: "Geist, sans-serif", fontSize: 14, color: "#3f3f46" }}>
            /100
          </span>
        </div>

        <ScoreBar value={exchange.score} color="#0dbe82" height={4} width="100%" />

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 4 }}>
          {MINI_KEYS.map((m) => {
            const v = exchange[m.key] as number;
            return (
              <div key={m.label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span
                  style={{
                    fontFamily: "Geist Mono, monospace",
                    fontSize: 8,
                    color: "#71717a",
                    letterSpacing: "0.08em",
                  }}
                >
                  {m.label}
                </span>
                <ScoreBar value={v} color={scoreColor(v)} height={3} width="48px" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Right: CTA + affiliate disclosure */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: 6,
          flex: "none",
        }}
      >
        <a
          href={exchange.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="press"
          style={{
            background: "#e8703a",
            color: "#09090b",
            fontFamily: "Geist, sans-serif",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.04em",
            padding: "10px 24px",
            borderRadius: 3,
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#f48555")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#e8703a")}
        >
          Visit {exchange.name} →
        </a>
        <span
          style={{
            fontFamily: "Geist Mono, monospace",
            fontSize: 9,
            color: "#71717a",
            letterSpacing: "0.04em",
          }}
        >
          Affiliate disclosure
        </span>
        {dimmed && (
          <span
            style={{
              fontFamily: "Geist Mono, monospace",
              fontSize: 9,
              color: "#71717a",
              letterSpacing: "0.04em",
            }}
          >
            Not matching your filter
          </span>
        )}
      </div>
    </div>
  );
}
