import { motion } from "motion/react";

// /compare → Methodology block. Five-pillar weighted scoring table +
// independence paragraph. Anchor target: #methodology.

const SOFT = [0.22, 1, 0.36, 1] as const;

const PILLARS: { label: string; weight: string }[] = [
  { label: "Security & Custody",      weight: "30%" },
  { label: "Proof of Reserves",       weight: "25%" },
  { label: "Compliance & Licensing",  weight: "20%" },
  { label: "Liquidity & Execution",   weight: "15%" },
  { label: "Track Record",            weight: "10%" },
];

export default function CompareMethodology() {
  return (
    <section id="methodology" style={{ scrollMarginTop: 88 }}>
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
          color: "#18b4d4",
          marginBottom: 14,
        }}
      >
        How we score
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, ease: SOFT, delay: 0.05 }}
        style={{
          fontFamily: "Geist, sans-serif",
          fontSize: "clamp(24px, 3.5vw, 32px)",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          color: "#e4e4e7",
          lineHeight: 1.15,
          marginBottom: 24,
          maxWidth: 720,
        }}
      >
        Five pillars. One transparent formula.
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: SOFT, delay: 0.1 }}
        style={{
          background: "#0f1422",
          border: "0.5px solid rgba(255,255,255,0.07)",
          borderRadius: 3,
          overflow: "hidden",
          maxWidth: 640,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 100px",
            padding: "12px 18px",
            background: "#080b16",
            borderBottom: "0.5px solid rgba(255,255,255,0.07)",
            fontFamily: "Geist Mono, monospace",
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#71717a",
          }}
        >
          <span>Pillar</span>
          <span style={{ textAlign: "right" }}>Weight</span>
        </div>
        {PILLARS.map((p, i) => {
          const odd = i % 2 === 1;
          return (
            <div
              key={p.label}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 100px",
                padding: "14px 18px",
                background: odd ? "#0c1019" : "#0f1422",
                borderBottom:
                  i < PILLARS.length - 1
                    ? "0.5px solid rgba(255,255,255,0.04)"
                    : "none",
                fontFamily: "Geist Mono, monospace",
                fontSize: 13,
                color: "#e4e4e7",
              }}
            >
              <span>{p.label}</span>
              <span style={{ textAlign: "right", color: "#0dbe82", fontWeight: 600 }}>
                {p.weight}
              </span>
            </div>
          );
        })}
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, ease: SOFT, delay: 0.15 }}
        style={{
          marginTop: 24,
          fontFamily: "Geist, sans-serif",
          fontSize: 15,
          lineHeight: 1.65,
          color: "#71717a",
          maxWidth: 720,
        }}
      >
        Scoring is weighted, transparent, and audited monthly. Featured slot on this page is a
        commercial placement — clearly disclosed. Editorial review is fully independent of
        placement. Scores cannot be purchased.
      </motion.p>
    </section>
  );
}
