import { motion } from "motion/react";
import { Settings, RefreshCw, BarChart2, Shield } from "lucide-react";

// /compare → Overview block. Hero copy + 4-item trust band with vertical
// dividers between items.

const SOFT = [0.22, 1, 0.36, 1] as const;

const TRUST = [
  { Icon: Settings,  label: "Hands-on testing" },
  { Icon: RefreshCw, label: "30-day review cycle" },
  { Icon: BarChart2, label: "5 weighted pillars" },
  { Icon: Shield,    label: "Editorial independence" },
];

export default function CompareOverview() {
  return (
    <section id="overview" style={{ scrollMarginTop: 88 }}>
      <motion.p
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4, ease: SOFT }}
        style={{
          fontFamily: "Geist Mono, monospace",
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#0dbe82",
          marginBottom: 16,
        }}
      >
        Compare
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, ease: SOFT, delay: 0.05 }}
        style={{
          fontFamily: "Geist, sans-serif",
          fontSize: "clamp(32px, 5vw, 44px)",
          fontWeight: 700,
          letterSpacing: "-0.025em",
          color: "#e4e4e7",
          lineHeight: 1.1,
          marginBottom: 14,
          maxWidth: 820,
        }}
      >
        The leaderboard nobody paid to be on.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, ease: SOFT, delay: 0.1 }}
        style={{
          fontFamily: "Geist, sans-serif",
          fontSize: 15,
          lineHeight: 1.55,
          color: "#71717a",
          maxWidth: 720,
          marginBottom: 32,
        }}
      >
        Scored by algorithm. Not by who pays us. Featured slot is editorial, not commercial.
      </motion.p>

      {/* Trust band — 4 horizontal items with vertical dividers between them */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          alignItems: "center",
          background: "#0f1422",
          border: "0.5px solid rgba(255,255,255,0.07)",
          borderRadius: 3,
          overflow: "hidden",
        }}
        className="trust-band"
      >
        {TRUST.map(({ Icon, label }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, ease: SOFT, delay: i * 0.06 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "18px 20px",
              borderLeft: i > 0 ? "0.5px solid rgba(255,255,255,0.07)" : "none",
              fontFamily: "Geist Mono, monospace",
              fontSize: 11,
              letterSpacing: "0.06em",
              color: "#a1a1aa",
              minWidth: 0,
            }}
          >
            <Icon size={16} strokeWidth={1.75} color="#0dbe82" style={{ flexShrink: 0 }} />
            <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {label}
            </span>
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width: 880px) {
          .trust-band {
            grid-template-columns: 1fr 1fr !important;
          }
          .trust-band > div:nth-child(3) {
            border-left: none !important;
            border-top: 0.5px solid rgba(255,255,255,0.07) !important;
          }
          .trust-band > div:nth-child(4) {
            border-top: 0.5px solid rgba(255,255,255,0.07) !important;
          }
        }
      `}</style>
    </section>
  );
}
