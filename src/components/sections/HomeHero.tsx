import { motion, useReducedMotion } from "motion/react";
import ThreeHero from "../ThreeHero";

const DASHBOARD_URL = "https://app.coinsiglieri.com";

export default function HomeHero() {
  const reduce = useReducedMotion();

  const fade = (delay: number) => ({
    initial: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduce ? 0 : 0.6,
      delay: reduce ? 0 : delay,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  });

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center overflow-hidden grid-pattern"
      style={{ background: "#09090b", minHeight: "100vh" }}
    >
      {/* Globe — full-bleed behind text, deliberately not covered */}
      <ThreeHero className="absolute inset-0 w-full h-full" style={{ opacity: 0.75 }} />

      {/* Top + bottom vignettes so the text block reads cleanly without occluding the globe sides */}
      <div
        className="absolute inset-x-0 top-0 pointer-events-none"
        style={{
          height: "38%",
          background: "linear-gradient(180deg, rgba(9,9,11,0.85) 0%, rgba(9,9,11,0) 100%)",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(0deg, rgba(9,9,11,0.85) 0%, rgba(9,9,11,0) 100%)",
        }}
      />

      {/* Soft center spotlight that fades the globe behind the headline only */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "38%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 880,
          height: 360,
          background:
            "radial-gradient(ellipse at center, rgba(9,9,11,0.65) 0%, rgba(9,9,11,0) 70%)",
          filter: "blur(4px)",
        }}
      />

      {/* Content — positioned slightly above center (~45%) */}
      <div
        className="relative z-10 w-full px-6"
        style={{
          paddingTop: "clamp(140px, 22vh, 220px)",
          paddingBottom: "clamp(120px, 18vh, 200px)",
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow */}
          <motion.p
            {...fade(0)}
            className="uppercase"
            style={{
              fontFamily: "Geist Mono, monospace",
              fontSize: 11,
              letterSpacing: "0.16em",
              color: "#71717a",
              marginBottom: 32,
            }}
          >
            AI-Native Financial Infrastructure
          </motion.p>

          {/* H1 */}
          <motion.h1
            {...fade(0.12)}
            className="balance"
            style={{
              fontFamily: "Geist, sans-serif",
              fontSize: "clamp(36px, 6.4vw, 52px)",
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "#e4e4e7",
              maxWidth: 640,
              margin: "0 auto",
            }}
          >
            Building for what comes next.
          </motion.h1>

          {/* Subline */}
          <motion.p
            {...fade(0.24)}
            className="pretty"
            style={{
              fontFamily: "Geist, sans-serif",
              fontSize: 18,
              fontWeight: 400,
              lineHeight: 1.5,
              color: "#71717a",
              marginTop: 16,
              maxWidth: 560,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Everything in financial markets was built for humans.
          </motion.p>

          {/* Mono tag */}
          <motion.p
            {...fade(0.36)}
            style={{
              fontFamily: "Geist Mono, monospace",
              fontSize: 12,
              color: "#71717a",
              letterSpacing: "0.08em",
              marginTop: 24,
            }}
          >
            Crypto · Web3 · Now AI · In the market since 2017
          </motion.p>

          {/* CTA */}
          <motion.div {...fade(0.48)} style={{ marginTop: 40 }}>
            <a
              href={DASHBOARD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="press inline-block"
              style={{
                fontFamily: "Geist, sans-serif",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.05em",
                background: "#18b4d4",
                color: "#09090b",
                padding: "14px 28px",
                borderRadius: 2,
                textDecoration: "none",
                boxShadow: "0 0 0 0 rgba(24,180,212,0)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "#22c4e5";
                el.style.boxShadow = "0 0 36px 0 rgba(24,180,212,0.55)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "#18b4d4";
                el.style.boxShadow = "0 0 0 0 rgba(24,180,212,0)";
              }}
            >
              Open the dashboard →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
