import { motion, useReducedMotion } from "motion/react";

export default function Operator() {
  const reduce = useReducedMotion();

  const fade = (delay: number) => ({
    initial: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: {
      duration: reduce ? 0 : 0.6,
      delay: reduce ? 0 : delay,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  });

  return (
    <section
      id="operator"
      className="relative"
      style={{
        background: "#09090b",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        padding: "clamp(64px, 12vh, 96px) clamp(24px, 4vw, 64px)",
        minHeight: 400,
        overflow: "hidden",
      }}
    >
      {/* Subtle cyan radial — left side */}
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          inset: 0,
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(24,180,212,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 0 }}>
          {/* Left */}
          <motion.div {...fade(0)}>
            <p
              className="uppercase"
              style={{
                fontFamily: "Geist Mono, monospace",
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: "0.16em",
                color: "#71717a",
                marginBottom: 24,
              }}
            >
              Operator Identity
            </p>

            <h2
              className="balance"
              style={{
                fontFamily: "Geist, sans-serif",
                fontSize: "clamp(28px, 4.4vw, 42px)",
                fontWeight: 700,
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
                color: "#e4e4e7",
                maxWidth: 480,
                paddingLeft: 20,
                borderLeft: "3px solid #18b4d4",
              }}
            >
              We brought live crypto payments to 120,000 people.
            </h2>

            <p
              style={{
                fontFamily: "Geist Mono, monospace",
                fontSize: 12,
                color: "#71717a",
                lineHeight: 2.2,
                letterSpacing: "0.04em",
                marginTop: 32,
              }}
            >
              LUNU infrastructure. Bybit-backed. First time in Romania.
            </p>
          </motion.div>

          {/* Right — border-left separator */}
          <motion.div
            {...fade(0.1)}
            className="flex flex-col justify-center"
            style={{
              borderLeft: "1px solid rgba(255,255,255,0.07)",
              paddingLeft: "clamp(32px, 5vw, 64px)",
              marginTop: "clamp(48px, 6vw, 0px)",
            }}
          >
            <p
              className="balance"
              style={{
                fontFamily: "Geist, sans-serif",
                fontSize: "clamp(26px, 3.8vw, 36px)",
                fontWeight: 700,
                color: "#e4e4e7",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
              }}
            >
              We showed up.
              <br />
              We executed.
            </p>

            <p
              style={{
                fontFamily: "Geist Mono, monospace",
                fontSize: 12,
                color: "#3f3f46",
                letterSpacing: "0.08em",
                marginTop: 20,
              }}
            >
              Operators who build what they use.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
