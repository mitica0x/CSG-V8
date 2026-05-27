import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type Cell = { id: string; label: string; renderNumber: () => ReactNode; glow?: boolean };

const cells: Cell[] = [
  {
    id: "2017",
    label: "In the market since",
    glow: true,
    renderNumber: () => <span style={{ color: "#e4e4e7" }}>2017</span>,
  },
  {
    id: "capital",
    label: "Capital shaped",
    renderNumber: () => (
      <>
        <span style={{ color: "#e4e4e7" }}>€439K</span>
        <span style={{ color: "#18b4d4" }}>+</span>
      </>
    ),
  },
  {
    id: "partners",
    label: "Ecosystem partners",
    renderNumber: () => (
      <>
        <span style={{ color: "#e4e4e7" }}>60</span>
        <span style={{ color: "#18b4d4" }}>+</span>
      </>
    ),
  },
  {
    id: "payments",
    label: "Live crypto payments in Romania",
    renderNumber: () => (
      <>
        <span style={{ color: "#e4e4e7" }}>120</span>
        <span style={{ color: "#18b4d4" }}>K</span>
      </>
    ),
  },
];

export default function TrackRecord() {
  const reduce = useReducedMotion();

  return (
    <section
      id="track-record"
      className="relative"
      style={{
        background: "#09090b",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        padding: "clamp(64px, 12vh, 96px) clamp(24px, 4vw, 64px)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <p
          className="uppercase"
          style={{
            fontFamily: "Geist Mono, monospace",
            fontSize: 10,
            fontWeight: 500,
            letterSpacing: "0.16em",
            color: "#71717a",
            marginBottom: 48,
          }}
        >
          Track Record
        </p>

        {/* Grid with 1px separators (bg-through-gap technique) */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{
            background: "rgba(255,255,255,0.07)",
            gap: 1,
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {cells.map((cell, i) => (
            <motion.div
              key={cell.id}
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: reduce ? 0 : 0.5,
                delay: reduce ? 0 : i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="card-lift"
              style={{
                background: "#0f0f12",
                padding: "40px 32px",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)")
              }
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#0f0f12")}
            >
              <p
                className="tabular-nums"
                style={{
                  fontFamily: "Geist, sans-serif",
                  fontSize: "clamp(40px, 5.4vw, 56px)",
                  fontWeight: 700,
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                  textShadow: cell.glow ? "0 0 40px rgba(24,180,212,0.2)" : "none",
                }}
              >
                {cell.renderNumber()}
              </p>
              <p
                className="uppercase"
                style={{
                  fontFamily: "Geist Mono, monospace",
                  fontSize: 11,
                  color: "#71717a",
                  letterSpacing: "0.06em",
                  lineHeight: 1.6,
                  marginTop: 12,
                }}
              >
                {cell.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
