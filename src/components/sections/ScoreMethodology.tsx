import { motion } from "motion/react";
import { C0insiglieri } from "@/components/csg/WordmarkCSG";

const ease = [0.22, 1, 0.36, 1] as const;

interface Dim {
  pct: string;
  name: string;
  desc: string;
  color: string;
  special?: boolean;
}

const DIMS: Dim[] = [
  {
    pct: "30%",
    name: "Security",
    desc: "Multisig custody, audits, bug bounties, exploit resistance.",
    color: "#0dbe82",
  },
  {
    pct: "25%",
    name: "Proof of Reserves",
    desc: "Merkle attestations, third-party audits, liability matching.",
    color: "#18b4d4",
  },
  {
    pct: "20%",
    name: "Compliance",
    desc: "MiCAR licensing in EU jurisdictions, AML operations.",
    color: "#70a848",
  },
  {
    pct: "15%",
    name: "Liquidity",
    desc: "Market depth, spread stability, orderbook resistance.",
    color: "#e8703a",
  },
  {
    pct: "10%",
    name: "Track Record",
    desc: "Executive history, user protection funds, uptime legacy.",
    color: "#71717a",
  },
  {
    pct: "+",
    name: "Signal Layer",
    desc: "Pre-incident signals from hiring, on-chain, regulatory radar.",
    color: "#18b4d4",
    special: true,
  },
];

export default function ScoreMethodology() {
  return (
    <section
      id="methodology"
      style={{ background: "#09090b", padding: "clamp(64px, 10vw, 96px) 0" }}
    >
      <div
        className="max-w-7xl mx-auto"
        style={{
          paddingLeft: "clamp(24px, 5vw, 64px)",
          paddingRight: "clamp(24px, 5vw, 64px)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease }}
          style={{
            fontFamily: "Geist Mono, monospace",
            fontSize: 10,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#71717a",
            fontWeight: 700,
            marginBottom: 10,
          }}
        >
          Methodology
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.06, ease }}
          className="balance"
          style={{
            fontFamily: "Geist, sans-serif",
            fontSize: "clamp(28px, 4vw, 40px)",
            fontWeight: 700,
            letterSpacing: "-0.025em",
            color: "#e4e4e7",
            margin: 0,
            lineHeight: 1.15,
          }}
        >
          Scored by algorithm. <span style={{ color: "#71717a" }}>Not by who pays us.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.12, ease }}
          className="pretty"
          style={{
            fontFamily: "Geist, sans-serif",
            fontSize: 15,
            color: "#71717a",
            lineHeight: 1.55,
            margin: "14px 0 0 0",
            maxWidth: 640,
          }}
        >
          <C0insiglieri /> Score is calculated across 5 independent dimensions plus a Signal Layer.
          Sponsored placement does not affect organic ranking.
        </motion.p>

        <div
          style={{
            marginTop: 32,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 12,
          }}
        >
          {DIMS.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.05, ease }}
              whileHover={{ scale: 1.01 }}
              className="card-lift"
              style={{
                background: "#0f1422",
                border: d.special
                  ? `0.5px solid ${d.color}66`
                  : "0.5px solid rgba(255,255,255,0.07)",
                borderRadius: 3,
                padding: 16,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {d.special && (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 2,
                    background: `linear-gradient(90deg, ${d.color}, transparent)`,
                  }}
                />
              )}
              <div
                className="tabular-nums"
                style={{
                  fontFamily: "Geist Mono, monospace",
                  fontSize: 22,
                  fontWeight: 800,
                  color: d.color,
                  letterSpacing: "-0.01em",
                  lineHeight: 1,
                  marginBottom: 8,
                }}
              >
                {d.pct}
              </div>
              <div
                style={{
                  fontFamily: "Geist, sans-serif",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#e4e4e7",
                  marginBottom: 6,
                }}
              >
                {d.name}
              </div>
              <p
                style={{
                  fontFamily: "Geist, sans-serif",
                  fontSize: 12,
                  color: "#71717a",
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                {d.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
