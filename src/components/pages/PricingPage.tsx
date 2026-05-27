import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PulseDot from "@/components/csg/PulseDot";

const ease = [0.22, 1, 0.36, 1] as const;

interface Tier {
  name: string;
  price: string;
  priceSub?: string;
  features: string[];
  cta: string;
  ctaHref: string;
  ctaTo?: "/compare" | "/find-my-exchange";
  ctaFilled: boolean;
  ctaColor: string;
  borderColor?: string;
  topLine?: string;
  badge?: string;
}

const TIERS: Tier[] = [
  {
    name: "Free",
    price: "$0",
    priceSub: "/forever",
    features: [
      "Public website access",
      "Exchange directory /compare",
      "C0insiglieri Scores",
      "Match Engine /find-my-exchange",
      "Articles & Blog",
    ],
    cta: "Explore Exchanges",
    ctaTo: "/compare",
    ctaHref: "/compare",
    ctaFilled: false,
    ctaColor: "#71717a",
  },
  {
    name: "Signal",
    price: "$19",
    priceSub: "/month",
    borderColor: "#18b4d4",
    features: [
      "Everything in Free, plus:",
      "Score change alerts",
      "Exchange movement notifications",
      "Weekly signal digest",
    ],
    cta: "Start Signal",
    ctaHref: "mailto:signal@coinsiglieri.com?subject=Signal%20Plan%20Access",
    ctaFilled: false,
    ctaColor: "#18b4d4",
  },
  {
    name: "Intelligence",
    price: "$699",
    priceSub: "/month",
    borderColor: "#0dbe82",
    topLine: "#0dbe82",
    badge: "B2B",
    features: [
      "Everything in Signal, plus:",
      "Full C0insiglieri terminal",
      "N0VA pre-incident signals",
      "Staff movements, on-chain alerts",
      "Regulatory radar",
      "Multi-seat access",
      "Ask C0insiglieri AI",
    ],
    cta: "Access Intelligence",
    ctaHref: "https://project-horizon-beta.vercel.app/",
    ctaFilled: true,
    ctaColor: "#0dbe82",
  },
];

export default function PricingPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#080b16", color: "#e4e4e7" }}>
      <Navigation />

      <section
        style={{
          paddingTop: "clamp(120px, 16vw, 180px)",
          paddingBottom: "clamp(80px, 10vw, 120px)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: 0,
            left: -200,
            width: 600,
            height: 600,
            background: "radial-gradient(circle, rgba(13,190,130,0.04) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden
          className="grid-pattern"
          style={{ position: "absolute", inset: 0, opacity: 0.5, pointerEvents: "none" }}
        />

        <div
          className="max-w-7xl mx-auto"
          style={{
            position: "relative",
            paddingLeft: "clamp(24px, 5vw, 64px)",
            paddingRight: "clamp(24px, 5vw, 64px)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            style={{ textAlign: "center", marginBottom: 44 }}
          >
            <div
              style={{
                fontFamily: "Geist Mono, monospace",
                fontSize: 10,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#18b4d4",
                fontWeight: 700,
                marginBottom: 12,
              }}
            >
              Pricing
            </div>
            <h1
              className="balance"
              style={{
                fontFamily: "Geist, sans-serif",
                fontSize: "clamp(34px, 5.5vw, 54px)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                color: "#e4e4e7",
                margin: 0,
              }}
            >
              Three tiers. <span style={{ color: "#71717a" }}>One signal layer.</span>
            </h1>
            <p
              className="pretty"
              style={{
                fontFamily: "Geist, sans-serif",
                fontSize: 15,
                color: "#71717a",
                lineHeight: 1.6,
                margin: "16px auto 0",
                maxWidth: 600,
              }}
            >
              Start free. Step up to Signal for alerts. Go to Intelligence when crypto is your job.
            </p>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 16,
              maxWidth: 1100,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {TIERS.map((t, i) => (
              <TierCard key={t.name} t={t} i={i} />
            ))}
          </div>

          <p
            style={{
              fontFamily: "Geist Mono, monospace",
              fontSize: 11,
              letterSpacing: "0.10em",
              color: "#3f3f46",
              textAlign: "center",
              marginTop: 40,
              maxWidth: 640,
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: 1.6,
            }}
          >
            Intelligence plan is B2B-focused — designed for exchange operators, CMOs, and compliance
            teams.
          </p>

          <div
            style={{
              fontFamily: "Geist Mono, monospace",
              fontSize: 9,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#3f3f46",
              marginTop: 28,
              textAlign: "center",
            }}
          >
            All Signal. 0 Guess.
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function TierCard({ t, i }: { t: Tier; i: number }) {
  const inner = (
    <>
      {t.cta}
      <ArrowRight size={14} strokeWidth={2.5} />
    </>
  );
  const ctaStyle: React.CSSProperties = {
    fontFamily: "Geist Mono, monospace",
    fontSize: 11,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    fontWeight: 700,
    background: t.ctaFilled ? t.ctaColor : "transparent",
    color: t.ctaFilled ? "#09090b" : t.ctaColor,
    border: t.ctaFilled ? "none" : `0.5px solid ${t.ctaColor}80`,
    padding: "11px 14px",
    borderRadius: 3,
    textDecoration: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: i * 0.07, ease }}
      whileHover={{ scale: 1.005 }}
      className="card-lift"
      style={{
        background: "#0f1422",
        border: t.borderColor
          ? `0.5px solid ${t.borderColor}66`
          : "0.5px solid rgba(255,255,255,0.07)",
        borderRadius: 3,
        padding: 22,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {t.topLine && (
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 2,
            background: `linear-gradient(90deg, ${t.topLine}, transparent)`,
          }}
        />
      )}

      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
        <span
          style={{
            fontFamily: "Geist Mono, monospace",
            fontSize: 11,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: t.borderColor ?? "#71717a",
            fontWeight: 700,
          }}
        >
          {t.name}
        </span>
        {t.badge && (
          <span
            style={{
              fontFamily: "Geist Mono, monospace",
              fontSize: 8.5,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontWeight: 700,
              color: "#0dbe82",
              background: "rgba(13,190,130,0.10)",
              border: "0.5px solid rgba(13,190,130,0.40)",
              borderRadius: 3,
              padding: "2px 6px",
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            <PulseDot color="#0dbe82" size={4} />
            {t.badge}
          </span>
        )}
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: 4,
          marginBottom: 22,
          paddingBottom: 18,
          borderBottom: "0.5px solid rgba(255,255,255,0.05)",
        }}
      >
        <span
          className="tabular-nums"
          style={{
            fontFamily: "Geist Mono, monospace",
            fontSize: 38,
            fontWeight: 800,
            color: "#e4e4e7",
            letterSpacing: "-0.02em",
            lineHeight: 1,
          }}
        >
          {t.price}
        </span>
        {t.priceSub && (
          <span style={{ fontFamily: "Geist Mono, monospace", fontSize: 12, color: "#71717a" }}>
            {t.priceSub}
          </span>
        )}
      </div>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          flexDirection: "column",
          gap: 9,
          flex: 1,
          marginBottom: 22,
        }}
      >
        {t.features.map((f, idx) => {
          const isIntro = idx === 0 && f.startsWith("Everything in");
          return (
            <li
              key={f}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 8,
                fontFamily: "Geist, sans-serif",
                fontSize: 13.5,
                color: isIntro ? "#71717a" : "#e4e4e7",
                fontStyle: isIntro ? "italic" : "normal",
              }}
            >
              {!isIntro && (
                <span
                  aria-hidden
                  style={{
                    color: t.borderColor ?? "#0dbe82",
                    fontWeight: 800,
                    marginTop: 1,
                    flexShrink: 0,
                  }}
                >
                  ✓
                </span>
              )}
              {isIntro && <span style={{ width: 13, flexShrink: 0 }} />}
              {f}
            </li>
          );
        })}
      </ul>

      {t.ctaTo ? (
        <Link to={t.ctaTo} className="press" style={ctaStyle}>
          {inner}
        </Link>
      ) : (
        <a
          href={t.ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="press"
          style={ctaStyle}
        >
          {inner}
        </a>
      )}
    </motion.div>
  );
}
