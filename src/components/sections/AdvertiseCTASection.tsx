import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import PulseDot from "@/components/csg/PulseDot";

const ease = [0.22, 1, 0.36, 1] as const;

const CHIPS: { label: string; color: string }[] = [
  { label: "Featured Placement", color: "#e8703a" },
  { label: "Match Engine Priority", color: "#18b4d4" },
  { label: "Sponsored Article", color: "#70a848" },
];

export default function AdvertiseCTASection() {
  return (
    <section id="contact" style={{ background: "#09090b", padding: "clamp(64px, 10vw, 96px) 0" }}>
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
            padding: "clamp(28px, 5vw, 44px)",
            position: "relative",
            overflow: "hidden",
            textAlign: "center",
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
              Advertising & Partnerships
            </span>
          </div>

          <h3
            className="balance"
            style={{
              fontFamily: "Geist, sans-serif",
              fontSize: "clamp(24px, 3.5vw, 32px)",
              fontWeight: 700,
              letterSpacing: "-0.025em",
              color: "#e4e4e7",
              margin: 0,
              maxWidth: 560,
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: 1.2,
            }}
          >
            Reach the people who run crypto exchanges.
          </h3>

          <div
            style={{
              marginTop: 18,
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 8,
            }}
          >
            {CHIPS.map((c) => (
              <span
                key={c.label}
                style={{
                  fontFamily: "Geist Mono, monospace",
                  fontSize: 10,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  color: c.color,
                  background: `${c.color}1a`,
                  border: `0.5px solid ${c.color}66`,
                  borderRadius: 3,
                  padding: "4px 8px",
                }}
              >
                {c.label}
              </span>
            ))}
          </div>

          <div
            style={{
              fontFamily: "Geist Mono, monospace",
              fontSize: 10,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#3f3f46",
              marginTop: 18,
            }}
          >
            No public pricing — custom packages. Response within 24h.
          </div>

          <div
            style={{
              marginTop: 24,
              display: "flex",
              gap: 10,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="mailto:partnerships@coinsiglieri.com?subject=Media%20Kit%20Request%20-%20CoinSiglieri"
              target="_blank"
              rel="noopener noreferrer"
              className="press"
              style={{
                fontFamily: "Geist Mono, monospace",
                fontSize: 11.5,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                fontWeight: 700,
                background: "#18b4d4",
                color: "#09090b",
                padding: "11px 16px",
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
                fontSize: 11.5,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                fontWeight: 700,
                background: "transparent",
                color: "#18b4d4",
                border: "0.5px solid rgba(24,180,212,0.50)",
                padding: "11px 16px",
                borderRadius: 3,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              DM @coinsiglieri on Telegram
              <ArrowUpRight size={14} strokeWidth={2.5} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
