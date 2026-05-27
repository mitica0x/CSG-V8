import { motion } from "motion/react";

const tiles = [
  { value: "60+", label: "Top-Tier Partners", desc: "Curated relationships across the ecosystem" },
  {
    value: "4,000+",
    label: "VCs in Network",
    desc: "Direct access to capital and decision-makers",
  },
  { value: "7+", label: "Years in Web3", desc: "In the space before it was crowded" },
  { value: "∞", label: "Execution First", desc: "Always. No exceptions." },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="py-32 relative overflow-hidden"
      style={{ background: "#0a0e1a" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(91,168,181,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-5"
            style={{ color: "#7B5EA7" }}
          >
            Why C<span style={{ color: "#5BA8B5" }}>0</span>insiglieri
          </p>
          <h2
            className="font-bold"
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
              color: "#f8fafc",
              letterSpacing: "-0.02em",
            }}
          >
            Not consultants. <span className="gradient-cyan">Operators with skin in the game.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {tiles.map((tile, i) => (
            <motion.div
              key={tile.label}
              className="flex flex-col items-center text-center p-8 rounded-xl cursor-default"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              whileHover={{
                borderColor: "rgba(91,168,181,0.28)",
                boxShadow: "0 0 30px rgba(91,168,181,0.08)",
                y: -4,
              }}
            >
              <p
                className="font-bold mb-2"
                style={{
                  fontFamily: "Geist, sans-serif",
                  fontSize: "clamp(1.8rem, 4vw, 2.75rem)",
                  background: "linear-gradient(135deg, #5BA8B5, #5BA8B5)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 0 12px rgba(91,168,181,0.35))",
                }}
              >
                {tile.value}
              </p>
              <p className="font-bold text-sm mb-2" style={{ color: "#f8fafc" }}>
                {tile.label}
              </p>
              <p className="text-xs leading-relaxed" style={{ color: "#8892a4" }}>
                {tile.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
