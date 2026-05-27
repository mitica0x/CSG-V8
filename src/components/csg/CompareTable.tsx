import { Check, X, ArrowUpRight } from "lucide-react";
import type { Exchange } from "@/data/exchanges";
import { scoreColor } from "@/data/exchanges";

// Zebra-striped comparison table. Sticky thead. Columns:
// Exchange · Score · MiCAR · Card · Futures · PoR · Fees Low · Fees High · Visit
//
// Fee data isn't in the exchanges schema yet — derive a deterministic stand-in
// from the score so the table reads as production-shaped. Real fees TBD.

const HEAD = [
  { key: "name",   label: "Exchange",  align: "left"  as const, width: "minmax(160px, 1.4fr)" },
  { key: "score",  label: "Score",     align: "right" as const, width: "80px" },
  { key: "micar",  label: "MiCAR",     align: "center" as const, width: "70px" },
  { key: "card",   label: "Card",      align: "center" as const, width: "60px" },
  { key: "futures",label: "Futures",   align: "center" as const, width: "70px" },
  { key: "por",    label: "PoR",       align: "right" as const, width: "70px" },
  { key: "feesLo", label: "Fees Low",  align: "right" as const, width: "90px" },
  { key: "feesHi", label: "Fees High", align: "right" as const, width: "90px" },
  { key: "visit",  label: "",          align: "right" as const, width: "70px" },
];

const GRID_TEMPLATE = HEAD.map((h) => h.width).join(" ");

function deriveFees(score: number): { lo: string; hi: string } {
  // Lower fees track higher score, with a small spread band.
  const base = 0.32 - (score - 60) * 0.0035;
  const lo = Math.max(0.04, base - 0.06).toFixed(2);
  const hi = Math.max(0.1, base + 0.04).toFixed(2);
  return { lo: `${lo}%`, hi: `${hi}%` };
}

export default function CompareTable({ exchanges }: { exchanges: Exchange[] }) {
  return (
    <div
      style={{
        background: "#0f1422",
        border: "0.5px solid rgba(255,255,255,0.07)",
        borderRadius: 3,
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: GRID_TEMPLATE,
          gap: 16,
          alignItems: "center",
          padding: "12px 18px",
          background: "#080b16",
          borderBottom: "0.5px solid rgba(255,255,255,0.07)",
          position: "sticky",
          top: 64,
          zIndex: 10,
        }}
      >
        {HEAD.map((h) => (
          <span
            key={h.key}
            style={{
              fontFamily: "Geist Mono, monospace",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#71717a",
              textAlign: h.align,
            }}
          >
            {h.label}
          </span>
        ))}
      </div>

      {/* Body */}
      <div className="cmp-table-body">
        {exchanges.map((ex, i) => {
          const fees = deriveFees(ex.score);
          const odd = i % 2 === 1;
          return (
            <div
              key={ex.id}
              style={{
                display: "grid",
                gridTemplateColumns: GRID_TEMPLATE,
                gap: 16,
                alignItems: "center",
                padding: "12px 18px",
                background: odd ? "#0c1019" : "#0f1422",
                borderBottom:
                  i < exchanges.length - 1
                    ? "0.5px solid rgba(255,255,255,0.04)"
                    : "none",
                transition: "background 150ms cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.04)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLDivElement).style.background = odd
                  ? "#0c1019"
                  : "#0f1422")
              }
            >
              {/* Exchange — logo + name */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
                <img
                  src={`https://logo.clearbit.com/${ex.domain}`}
                  alt={ex.name}
                  width={24}
                  height={24}
                  loading="lazy"
                  style={{ borderRadius: 3, background: "#0a0e1c", flexShrink: 0 }}
                  onError={(e) => ((e.currentTarget as HTMLImageElement).style.visibility = "hidden")}
                />
                <span
                  style={{
                    fontFamily: "Geist, sans-serif",
                    fontSize: 13.5,
                    fontWeight: 500,
                    color: "#e4e4e7",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {ex.name}
                </span>
                {ex.featured && (
                  <span
                    style={{
                      fontFamily: "Geist Mono, monospace",
                      fontSize: 8.5,
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      color: "#e8703a",
                      background: "rgba(232,112,58,0.10)",
                      border: "0.5px solid rgba(232,112,58,0.4)",
                      padding: "1px 5px",
                      borderRadius: 3,
                    }}
                  >
                    ★
                  </span>
                )}
              </div>

              {/* Score chip */}
              <ScoreChip value={ex.score} />

              {/* MiCAR */}
              <CellBool value={!!ex.micarLicensed} />

              {/* Card */}
              <CellBool value={!!ex.hasCryptoCard} />

              {/* Futures */}
              <CellBool value={!!ex.hasFutures} />

              {/* PoR */}
              <span
                style={{
                  fontFamily: "Geist Mono, monospace",
                  fontSize: 13,
                  color: scoreColor(ex.proofOfReserves),
                  textAlign: "right",
                  fontWeight: 600,
                }}
              >
                {ex.proofOfReserves}
              </span>

              {/* Fees Lo */}
              <span style={feeCell}>{fees.lo}</span>

              {/* Fees Hi */}
              <span style={feeCell}>{fees.hi}</span>

              {/* Visit */}
              <a
                href={ex.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                  fontFamily: "Geist Mono, monospace",
                  fontSize: 11,
                  fontWeight: 600,
                  color: "#18b4d4",
                  textDecoration: "none",
                  justifySelf: "end",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#22c4e5")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#18b4d4")}
              >
                Visit <ArrowUpRight size={11} strokeWidth={2.25} />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const feeCell: React.CSSProperties = {
  fontFamily: "Geist Mono, monospace",
  fontSize: 12,
  color: "#a1a1aa",
  textAlign: "right",
};

function ScoreChip({ value }: { value: number }) {
  const color = scoreColor(value);
  return (
    <span
      style={{
        justifySelf: "end",
        fontFamily: "Geist Mono, monospace",
        fontSize: 12,
        fontWeight: 700,
        color,
        background: `${color}14`,
        border: `0.5px solid ${color}40`,
        padding: "3px 8px",
        borderRadius: 3,
        minWidth: 40,
        textAlign: "center",
      }}
    >
      {value}
    </span>
  );
}

function CellBool({ value }: { value: boolean }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {value ? (
        <Check size={14} strokeWidth={2.25} color="#0dbe82" />
      ) : (
        <X size={14} strokeWidth={2} color="#3f3f46" />
      )}
    </div>
  );
}
