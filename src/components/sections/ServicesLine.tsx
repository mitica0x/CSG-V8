import { motion, useReducedMotion } from "motion/react";

export default function ServicesLine() {
  const reduce = useReducedMotion();

  return (
    <section
      id="contact"
      className="relative"
      style={{
        background: "#09090b",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        padding: "48px clamp(24px, 4vw, 64px)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: reduce ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-start md:justify-between"
          style={{ gap: 24 }}
        >
          {/* Left — two lines */}
          <div style={{ maxWidth: "52rem" }}>
            <p
              style={{
                fontFamily: "Geist, sans-serif",
                fontSize: 17,
                color: "#71717a",
                lineHeight: 1.55,
              }}
            >
              Some teams need someone in the room.
            </p>
            <p
              style={{
                fontFamily: "Geist, sans-serif",
                fontSize: 17,
                fontStyle: "italic",
                color: "#a1a1aa",
                lineHeight: 1.55,
              }}
            >
              We do that too — selectively.
            </p>
          </div>

          {/* Right — CTA + mono tag */}
          <div className="flex flex-col md:items-end" style={{ gap: 8 }}>
            <a
              href="mailto:hello@coinsiglieri.com"
              className="press"
              style={{
                fontFamily: "Geist Mono, monospace",
                fontSize: 12,
                color: "#18b4d4",
                letterSpacing: "0.06em",
                textDecoration: "none",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.7")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
            >
              → Talk to us
            </a>
            <p
              style={{
                fontFamily: "Geist Mono, monospace",
                fontSize: 10,
                color: "#3f3f46",
                letterSpacing: "0.06em",
              }}
            >
              Strategy · BD · Execution
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
