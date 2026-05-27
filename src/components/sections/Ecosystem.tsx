import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";

const cards = [
  {
    category: "Flagship",
    title: "Web3 Startup Competition",
    body: "Banking 4.0 × Banca Transilvania (2023) — €152,000+. NBX Warsaw (2025) — €287,000+. 30+ startups shaped.",
    accent: "#5BA8B5",
  },
  {
    category: "Real-World Execution",
    title: "Crypto Payments at Scale",
    body: "Beach, Please! 2024 — 120,000+ attendees. First crypto POS deployment in Romania. LUNU · Global Records · Bybit · Nuba.",
    accent: "#7B5EA7",
  },
  {
    category: "Network",
    title: "60+ Partners & 4,000+ VCs",
    body: "Curated ecosystem built over 7+ years. Capital access, strategic introductions, and market presence that compounds.",
    accent: "#5BA8B5",
  },
];

export default function Ecosystem() {
  return (
    <section
      id="ecosystem"
      className="relative py-24 overflow-hidden section-divide"
      style={{ background: "linear-gradient(180deg, #0a0e1a 0%, #06101d 100%)" }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: 900,
          height: 500,
          background: "radial-gradient(ellipse, rgba(91,168,181,0.05) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="text-sm font-semibold tracking-[0.22em] uppercase mb-4"
            style={{ color: "#5BA8B5" }}
          >
            Track Record
          </p>
          <h2
            className="font-bold"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              color: "#f8fafc",
              letterSpacing: "-0.02em",
              marginBottom: "1.5rem",
            }}
          >
            In the Ecosystem
          </h2>
          <p style={{ color: "#8892a4", fontSize: "1.125rem" }}>
            Where we've been. What we've built.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className="group relative rounded-xl p-8 flex flex-col text-center cursor-default transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.06)",
                backdropFilter: "blur(12px)",
                minHeight: 220,
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              whileHover={{
                borderColor: `${card.accent}40`,
                boxShadow: `0 0 35px ${card.accent}14, 0 8px 32px rgba(0,0,0,0.35)`,
                y: -4,
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-px rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(90deg, transparent, ${card.accent}, transparent)`,
                }}
              />

              <p
                className="text-sm font-semibold tracking-[0.22em] uppercase mb-4"
                style={{ color: card.accent }}
              >
                {card.category}
              </p>

              <h3
                className="font-bold mb-4"
                style={{ fontSize: "1.15rem", color: "#f8fafc", lineHeight: 1.35 }}
              >
                {card.title}
              </h3>

              <p style={{ color: "#8892a4", fontSize: "1rem", lineHeight: 1.75 }}>{card.body}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-right">
          <Link
            to="/competition"
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 11,
              color: "#8892a4",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            See full track record →
          </Link>
        </div>
      </div>
    </section>
  );
}
