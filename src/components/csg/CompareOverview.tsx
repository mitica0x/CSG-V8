import { motion } from "motion/react";
import { Wrench, RefreshCw, BarChart3, ShieldCheck } from "lucide-react";

// /compare → Overview block. Hero copy + trust band. The 5 weighted pillars
// from the scoring methodology are referenced briefly here (the full table
// is intentionally NOT on this page — user dropped the Methodology tab).

const SOFT = [0.22, 1, 0.36, 1] as const;

const TRUST = [
  { Icon: Wrench,       label: "Hands-on testing" },
  { Icon: RefreshCw,    label: "Review cycle · 30 days" },
  { Icon: BarChart3,    label: "Methodology · 5 weighted pillars" },
  { Icon: ShieldCheck,  label: "Editorial independence" },
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
          fontSize: 17,
          lineHeight: 1.55,
          color: "#a1a1aa",
          maxWidth: 720,
          marginBottom: 28,
        }}
      >
        Scored by algorithm. Not by who pays us. The featured slot is editorial real estate —
        commercial, disclosed, and scored independently of the placement.
      </motion.p>

      {/* Trust band — 4 horizontal items */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 16,
          padding: "20px 24px",
          background: "#0f1422",
          border: "0.5px solid rgba(255,255,255,0.07)",
          borderRadius: 3,
        }}
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
              fontFamily: "Geist Mono, monospace",
              fontSize: 11,
              letterSpacing: "0.06em",
              color: "#d4d4d8",
            }}
          >
            <Icon size={14} strokeWidth={1.75} color="#0dbe82" />
            {label}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
