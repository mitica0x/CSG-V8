import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Check, ArrowUpRight } from "lucide-react";
import type { Exchange } from "@/data/exchanges";
import { scoreColor } from "@/data/exchanges";

// Compact 56px row for the organic exchange list under the Bybit featured
// card. Score bar animates 0 → value with spring easing on viewport entry.

const SPRING = [0.34, 1.56, 0.64, 1] as const;
const SNAP = "cubic-bezier(0.16, 1, 0.3, 1)";

export default function ExchangeListRow({
  exchange,
  rank,
}: {
  exchange: Exchange;
  rank: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const [hover, setHover] = useState(false);
  const color = scoreColor(exchange.score);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 6 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: (rank % 8) * 0.04 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "grid",
        gridTemplateColumns: "32px 32px minmax(120px, 1fr) minmax(120px, 200px) 40px 80px 60px",
        gap: 14,
        alignItems: "center",
        height: 56,
        padding: "0 14px",
        borderBottom: "0.5px solid rgba(255,255,255,0.07)",
        background: hover ? "rgba(255,255,255,0.02)" : "transparent",
        transition: `background 150ms ${SNAP}`,
      }}
      className="exchange-row"
    >
      <span
        style={{
          fontFamily: "Geist Mono, monospace",
          fontSize: 13,
          color: "#52525b",
        }}
      >
        #{rank}
      </span>
      <img
        src={`https://logo.clearbit.com/${exchange.domain}`}
        alt={exchange.name}
        width={28}
        height={28}
        loading="lazy"
        style={{ borderRadius: 3, background: "#0a0e1c" }}
        onError={(e) => ((e.currentTarget as HTMLImageElement).style.visibility = "hidden")}
      />
      <span
        style={{
          fontFamily: "Geist, sans-serif",
          fontSize: 14,
          fontWeight: 500,
          color: "#e4e4e7",
          letterSpacing: "-0.01em",
        }}
      >
        {exchange.name}
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
            width: inView ? `${exchange.score}%` : 0,
            height: "100%",
            background: color,
            transition: `width 800ms cubic-bezier(${SPRING[0]}, ${SPRING[1]}, ${SPRING[2]}, ${SPRING[3]})`,
          }}
        />
      </div>
      <span
        style={{
          fontFamily: "Geist Mono, monospace",
          fontSize: 14,
          fontWeight: 600,
          color,
          textAlign: "right",
        }}
      >
        {exchange.score}
      </span>
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        {exchange.micarLicensed && (
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              padding: "2px 6px",
              background: "rgba(13,190,130,0.10)",
              color: "#0dbe82",
              border: "0.5px solid rgba(13,190,130,0.4)",
              borderRadius: 3,
              fontFamily: "Geist Mono, monospace",
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: "0.08em",
            }}
          >
            <Check size={9} strokeWidth={2.5} />
            MiCAR
          </span>
        )}
      </div>
      <a
        href={exchange.affiliateUrl}
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
          letterSpacing: "0.04em",
          justifySelf: "end",
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#22c4e5")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#18b4d4")}
      >
        Visit <ArrowUpRight size={11} strokeWidth={2.25} />
      </a>
    </motion.div>
  );
}
