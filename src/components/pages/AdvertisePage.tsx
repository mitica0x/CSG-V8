import { motion } from "motion/react";
import { ArrowUpRight, Check } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PulseDot from "@/components/csg/PulseDot";
import { C0insiglieri } from "@/components/csg/WordmarkCSG";

const ease = [0.22, 1, 0.36, 1] as const;

interface Placement {
  num: string;
  type: string;
  title: string;
  desc: string;
  context: string;
  color: string;
}

const PLACEMENTS: Placement[] = [
  {
    num: "01",
    type: "Featured Slot",
    title: "Featured Placement",
    desc: "Permanent top-of-directory card with rust border treatment and dedicated CTA.",
    context: "/compare · always top · fix/month",
    color: "#e8703a",
  },
  {
    num: "02",
    type: "Match Engine",
    title: "Match Engine Priority",
    desc: "Default boost in personalized match engine recommendations.",
    context: "/find-my-exchange · CPA per activation",
    color: "#18b4d4",
  },
  {
    num: "03",
    type: "Homepage Banner",
    title: "Homepage Banner",
    desc: "Rotation slot on the homepage above-the-fold of a high-intent funnel.",
    context: "/ · rotation · fix/month",
    color: "#0dbe82",
  },
  {
    num: "04",
    type: "Sponsored Article",
    title: "Sponsored Article",
    desc: "Permanent SEO-indexed editorial deep-dive on your platform.",
    context: "/blog · permanent · one-time fee",
    color: "#70a848",
  },
  {
    num: "05",
    type: "Newsletter",
    title: "Newsletter Mention",
    desc: "Dedicated callout sent to all Signal-tier subscribers.",
    context: "Signal subscribers · fix/issue",
    color: "#18b4d4",
  },
  {
    num: "06",
    type: "Verified Badge",
    title: "Exchange Profile Badge",
    desc: "Verified Partner mark on your card across the entire directory.",
    context: "Across /compare · fix/month",
    color: "#70a848",
  },
];

const BENEFITS = [
  {
    title: "Exclusive positioning",
    body: "One partner per slot. No rotation bidding, no surprises.",
  },
  { title: "Weekly performance reports", body: "Impressions, clicks, CTR delivered every Monday." },
  {
    title: "Score independence",
    body: "Placement never affects your C0insiglieri Score. Editorial firewall.",
  },
];

const STANDARDS = [
  "Score independence",
  "Advertiser due diligence",
  "Clear labeling (Featured / Sponsored)",
  "We don't work with everyone — unregulated entities excluded",
];

export default function AdvertisePage() {
  return (
    <div style={{ minHeight: "100vh", background: "#080b16", color: "#e4e4e7" }}>
      <Navigation />

      <section
        style={{
          position: "relative",
          paddingTop: "clamp(120px, 16vw, 180px)",
          paddingBottom: "clamp(48px, 7vw, 72px)",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: 0,
            left: -250,
            width: 700,
            height: 700,
            background: "radial-gradient(circle, rgba(232,112,58,0.04) 0%, transparent 60%)",
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
            style={{
              fontFamily: "Geist Mono, monospace",
              fontSize: 10,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#18b4d4",
              fontWeight: 700,
              marginBottom: 16,
            }}
          >
            Advertising & Partnerships
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease }}
            className="balance"
            style={{
              fontFamily: "Geist, sans-serif",
              fontSize: "clamp(36px, 6vw, 60px)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              color: "#e4e4e7",
              margin: 0,
              maxWidth: 820,
            }}
          >
            Reach the people who run crypto exchanges.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease }}
            className="pretty"
            style={{
              fontFamily: "Geist, sans-serif",
              fontSize: 17,
              color: "#71717a",
              lineHeight: 1.6,
              maxWidth: 640,
              margin: "18px 0 0 0",
            }}
          >
            CoinSiglieri is where EU market operators and CMOs monitor the field. Your brand, in the
            room where decisions are made.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.28, ease }}
            style={{
              fontFamily: "Geist Mono, monospace",
              fontSize: 10,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#3f3f46",
              marginTop: 20,
            }}
          >
            No public pricing — custom packages. Response within 24h.
          </motion.div>
        </div>
      </section>

      {/* Placement types — 2x3 */}
      <section
        style={{ paddingTop: "clamp(40px, 6vw, 60px)", paddingBottom: "clamp(40px, 6vw, 60px)" }}
      >
        <div
          className="max-w-7xl mx-auto"
          style={{ paddingLeft: "clamp(24px, 5vw, 64px)", paddingRight: "clamp(24px, 5vw, 64px)" }}
        >
          <SectionHead overline="Placement Types" title="Six ways to be in front of operators." />
          <div
            style={{
              marginTop: 28,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 14,
            }}
          >
            {PLACEMENTS.map((p, i) => (
              <PlacementCard key={p.num} p={p} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section
        style={{ paddingTop: "clamp(40px, 6vw, 60px)", paddingBottom: "clamp(40px, 6vw, 60px)" }}
      >
        <div
          className="max-w-7xl mx-auto"
          style={{ paddingLeft: "clamp(24px, 5vw, 64px)", paddingRight: "clamp(24px, 5vw, 64px)" }}
        >
          <SectionHead overline="What you get" title="Partner benefits." />
          <div
            style={{
              marginTop: 28,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 14,
            }}
          >
            {BENEFITS.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
                style={{
                  background: "#0f1422",
                  border: "0.5px solid rgba(255,255,255,0.07)",
                  borderRadius: 3,
                  padding: 18,
                }}
              >
                <div
                  style={{
                    fontFamily: "Geist, sans-serif",
                    fontWeight: 600,
                    fontSize: 16,
                    color: "#e4e4e7",
                    marginBottom: 8,
                  }}
                >
                  {b.title}
                </div>
                <p
                  style={{
                    fontFamily: "Geist, sans-serif",
                    fontSize: 13,
                    color: "#71717a",
                    margin: 0,
                    lineHeight: 1.55,
                  }}
                >
                  {b.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards */}
      <section
        style={{ paddingTop: "clamp(40px, 6vw, 60px)", paddingBottom: "clamp(40px, 6vw, 60px)" }}
      >
        <div
          style={{
            maxWidth: 720,
            margin: "0 auto",
            paddingLeft: "clamp(24px, 5vw, 64px)",
            paddingRight: "clamp(24px, 5vw, 64px)",
            textAlign: "center",
          }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease }}
            className="balance"
            style={{
              fontFamily: "Geist, sans-serif",
              fontSize: "clamp(22px, 3vw, 30px)",
              fontWeight: 600,
              letterSpacing: "-0.025em",
              color: "#e4e4e7",
              margin: 0,
              lineHeight: 1.25,
            }}
          >
            <C0insiglieri /> Score is calculated independently of commercial relationships.
          </motion.h2>

          <div
            style={{
              marginTop: 24,
              display: "flex",
              flexDirection: "column",
              gap: 10,
              alignItems: "flex-start",
              maxWidth: 520,
              marginLeft: "auto",
              marginRight: "auto",
              textAlign: "left",
            }}
          >
            {STANDARDS.map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.06, ease }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  fontFamily: "Geist, sans-serif",
                  fontSize: 14,
                  color: "#e4e4e7",
                }}
              >
                <Check size={14} color="#0dbe82" strokeWidth={3} />
                {s}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact block */}
      <section
        style={{ paddingTop: "clamp(40px, 6vw, 60px)", paddingBottom: "clamp(80px, 10vw, 120px)" }}
      >
        <div
          style={{
            maxWidth: 920,
            margin: "0 auto",
            paddingLeft: "clamp(24px, 5vw, 64px)",
            paddingRight: "clamp(24px, 5vw, 64px)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease }}
            style={{
              background: "#0f1422",
              border: "0.5px solid rgba(24,180,212,0.40)",
              borderRadius: 3,
              padding: "clamp(28px, 5vw, 48px)",
              position: "relative",
              textAlign: "center",
              overflow: "hidden",
            }}
          >
            <div
              aria-hidden
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 2,
                background: "linear-gradient(90deg, transparent, #18b4d4, transparent)",
              }}
            />
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 14,
              }}
            >
              <PulseDot color="#18b4d4" />
              <span
                style={{
                  fontFamily: "Geist Mono, monospace",
                  fontSize: 10,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#18b4d4",
                  fontWeight: 700,
                }}
              >
                Get In Touch
              </span>
            </div>
            <h3
              className="balance"
              style={{
                fontFamily: "Geist, sans-serif",
                fontSize: "clamp(24px, 3.5vw, 34px)",
                fontWeight: 700,
                letterSpacing: "-0.025em",
                color: "#e4e4e7",
                margin: 0,
                marginBottom: 22,
              }}
            >
              Ready to reach the operators?
            </h3>

            <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="mailto:partnerships@coinsiglieri.com?subject=Media%20Kit%20Request%20-%20CoinSiglieri"
                target="_blank"
                rel="noopener noreferrer"
                className="press"
                style={{
                  fontFamily: "Geist Mono, monospace",
                  fontSize: 12,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  background: "#18b4d4",
                  color: "#09090b",
                  padding: "12px 18px",
                  borderRadius: 3,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                Get a Media Kit
                <ArrowUpRight size={14} strokeWidth={2.5} />
              </a>
              <a
                href="https://t.me/coinsiglieri"
                target="_blank"
                rel="noopener noreferrer"
                className="press"
                style={{
                  fontFamily: "Geist Mono, monospace",
                  fontSize: 12,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  background: "transparent",
                  color: "#18b4d4",
                  padding: "12px 18px",
                  borderRadius: 3,
                  textDecoration: "none",
                  border: "0.5px solid rgba(24,180,212,0.50)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                DM @coinsiglieri on Telegram
                <ArrowUpRight size={14} strokeWidth={2.5} />
              </a>
            </div>

            <div
              style={{
                fontFamily: "Geist Mono, monospace",
                fontSize: 9,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#3f3f46",
                marginTop: 22,
              }}
            >
              All Signal. 0 Guess.
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function SectionHead({ overline, title }: { overline: string; title: string }) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease }}
        style={{
          fontFamily: "Geist Mono, monospace",
          fontSize: 10,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "#71717a",
          marginBottom: 8,
        }}
      >
        {overline}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, delay: 0.05, ease }}
        className="balance"
        style={{
          fontFamily: "Geist, sans-serif",
          fontSize: "clamp(26px, 3.6vw, 38px)",
          fontWeight: 600,
          letterSpacing: "-0.025em",
          color: "#e4e4e7",
          margin: 0,
          lineHeight: 1.2,
        }}
      >
        {title}
      </motion.h2>
    </div>
  );
}

function PlacementCard({ p, i }: { p: Placement; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: i * 0.05, ease }}
      whileHover={{ scale: 1.01 }}
      className="card-lift"
      style={{
        background: "#0f1422",
        border: "0.5px solid rgba(255,255,255,0.07)",
        borderRadius: 3,
        padding: 16,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: `linear-gradient(90deg, ${p.color}, transparent)`,
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 10,
        }}
      >
        <span
          style={{
            fontFamily: "Geist Mono, monospace",
            fontSize: 9,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: p.color,
            fontWeight: 700,
          }}
        >
          {p.type}
        </span>
        <span style={{ fontFamily: "Geist Mono, monospace", fontSize: 9, color: "#3f3f46" }}>
          {p.num}
        </span>
      </div>
      <div
        style={{
          fontFamily: "Geist, sans-serif",
          fontSize: 16,
          fontWeight: 600,
          color: "#e4e4e7",
          marginBottom: 6,
        }}
      >
        {p.title}
      </div>
      <p
        style={{
          fontFamily: "Geist, sans-serif",
          fontSize: 13,
          color: "#71717a",
          lineHeight: 1.5,
          margin: 0,
          marginBottom: 12,
        }}
      >
        {p.desc}
      </p>
      <div
        style={{
          fontFamily: "Geist Mono, monospace",
          fontSize: 9.5,
          letterSpacing: "0.10em",
          color: "#71717a",
          background: "rgba(255,255,255,0.03)",
          border: "0.5px solid rgba(255,255,255,0.05)",
          borderRadius: 3,
          padding: "4px 8px",
          display: "inline-block",
        }}
      >
        {p.context}
      </div>
    </motion.div>
  );
}
