import { motion, useReducedMotion } from "motion/react";
import type { CSSProperties } from "react";
import ProductMark from "../ProductMark";

const DASHBOARD_URL = "https://app.coinsiglieri.com";

type Status = "live" | "coming" | "in-dev";
type Product = "c0insiglieri" | "ax0n";

type Card = {
  product: Product;
  accent: string;
  status: Status;
  statusLabel: string;
  tagline: string;
  body: string;
  price?: string;
  meta?: string;
  tag?: string;
  ctaLabel: string;
  ctaHref: string;
  ctaVariant: "fill" | "outline";
};

const cards: Card[] = [
  {
    product: "c0insiglieri",
    accent: "#18b4d4",
    status: "live",
    statusLabel: "LIVE",
    tagline: "Market intelligence for exchanges.",
    body: "Know what the competition is doing. Know where the EU gaps are. Automated. Always current.",
    price: "$699/month",
    meta: "Live. Automated. Now.",
    ctaLabel: "OPEN THE DASHBOARD →",
    ctaHref: DASHBOARD_URL,
    ctaVariant: "fill",
  },
  {
    product: "ax0n",
    accent: "#D4A853",
    status: "coming",
    statusLabel: "COMING",
    tagline: "A city built for the new species.",
    body: "Where agents don't pretend to be human.",
    tag: "Signal · Route · Execute",
    ctaLabel: "FOLLOW THE BUILD →",
    ctaHref: "https://ax0n.run",
    ctaVariant: "outline",
  },
];

function StatusBadge({ status, accent, label }: { status: Status; accent: string; label: string }) {
  const isLive = status === "live";
  const dotColor = isLive ? "#0dbe82" : accent;
  return (
    <span
      className="inline-flex items-center"
      style={{
        gap: 8,
        fontFamily: "Geist Mono, monospace",
        fontSize: 9,
        fontWeight: 600,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: dotColor,
      }}
    >
      <span
        aria-hidden
        style={{
          width: 7,
          height: 7,
          borderRadius: "50%",
          background: isLive ? "#0dbe82" : "transparent",
          border: isLive ? "none" : `1.5px solid ${accent}`,
          boxShadow: isLive ? "0 0 8px rgba(13,190,130,0.6)" : "none",
        }}
      />
      {label}
    </span>
  );
}

function CardView({ card, index, reduce }: { card: Card; index: number; reduce: boolean | null }) {
  const isFill = card.ctaVariant === "fill";

  const ctaStyle: CSSProperties = isFill
    ? {
        background: card.accent,
        color: "#09090b",
        border: "1px solid transparent",
      }
    : {
        background: "transparent",
        color: card.accent,
        border: `1px solid ${card.accent}66`,
      };

  return (
    <motion.article
      initial={reduce ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 24, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: reduce ? 0 : 0.55,
        delay: reduce ? 0 : index * 0.09,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="card-lift relative flex flex-col"
      style={{
        background: "#0f0f12",
        padding: "36px 32px",
        minHeight: 480,
        position: "relative",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = `0 0 24px 0 ${card.accent}26, inset 0 1px 0 ${card.accent}33`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = "none";
      }}
    >
      {/* Top accent bar — flush to top of card */}
      <span
        aria-hidden
        className="absolute left-0 right-0 top-0"
        style={{ height: 2, background: card.accent }}
      />

      {/* Status badge */}
      <div style={{ marginBottom: 28 }}>
        <StatusBadge status={card.status} accent={card.accent} label={card.statusLabel} />
      </div>

      {/* Product name */}
      <ProductMark
        product={card.product}
        style={{
          fontFamily: "Geist, sans-serif",
          fontSize: 28,
          fontWeight: 700,
          letterSpacing: "-0.025em",
          lineHeight: 1.05,
          color: "#e4e4e7",
        }}
      />

      {/* Tagline */}
      <p
        style={{
          fontFamily: "Geist, sans-serif",
          fontSize: 14,
          fontWeight: 500,
          color: "#a1a1aa",
          marginTop: 8,
          lineHeight: 1.45,
        }}
      >
        {card.tagline}
      </p>

      {/* Body */}
      <p
        className="pretty"
        style={{
          fontFamily: "Geist, sans-serif",
          fontSize: 13,
          color: "#71717a",
          marginTop: 20,
          lineHeight: 1.75,
          flex: 1,
        }}
      >
        {card.body}
      </p>

      {/* Price block (C0insiglieri only) */}
      {card.price && (
        <div style={{ marginTop: 20 }}>
          <p
            className="tabular-nums"
            style={{
              fontFamily: "Geist, sans-serif",
              fontSize: 22,
              fontWeight: 700,
              color: "#e4e4e7",
              letterSpacing: "-0.02em",
            }}
          >
            {card.price}
          </p>
          {card.meta && (
            <p
              style={{
                fontFamily: "Geist Mono, monospace",
                fontSize: 10,
                color: "#3f3f46",
                letterSpacing: "0.06em",
                marginTop: 6,
              }}
            >
              {card.meta}
            </p>
          )}
        </div>
      )}

      {/* 3-word mono tag (Ax0n / Sc0rx) */}
      {card.tag && (
        <p
          style={{
            fontFamily: "Geist Mono, monospace",
            fontSize: 10,
            color: "#3f3f46",
            letterSpacing: "0.1em",
            marginTop: 20,
          }}
        >
          {card.tag}
        </p>
      )}

      {/* CTA — full width, bottom */}
      <a
        href={card.ctaHref}
        target="_blank"
        rel="noopener noreferrer"
        className="press"
        style={{
          ...ctaStyle,
          fontFamily: "Geist, sans-serif",
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          padding: "12px 0",
          textAlign: "center",
          borderRadius: 2,
          textDecoration: "none",
          marginTop: 28,
          display: "block",
          width: "100%",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          if (isFill) {
            el.style.background = "#22c4e5";
          } else {
            el.style.background = `${card.accent}14`;
            el.style.borderColor = card.accent;
          }
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          if (isFill) {
            el.style.background = card.accent;
          } else {
            el.style.background = "transparent";
            el.style.borderColor = `${card.accent}66`;
          }
        }}
      >
        {card.ctaLabel}
      </a>
    </motion.article>
  );
}

export default function Stack() {
  const reduce = useReducedMotion();

  return (
    <section
      id="stack"
      className="relative"
      style={{
        background: "#09090b",
        padding: "clamp(64px, 12vh, 96px) clamp(24px, 4vw, 64px)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div style={{ marginBottom: 48 }}>
          <p
            className="uppercase"
            style={{
              fontFamily: "Geist Mono, monospace",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.16em",
              color: "#71717a",
              marginBottom: 12,
            }}
          >
            The Stack
          </p>
          <h2
            className="balance"
            style={{
              fontFamily: "Geist, sans-serif",
              fontSize: 28,
              fontWeight: 600,
              letterSpacing: "-0.02em",
              color: "#e4e4e7",
              lineHeight: 1.15,
            }}
          >
            Two products. One stack.
          </h2>
        </div>

        {/* Grid: 1px separator lines achieved via background showing through 1px gap */}
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{
            background: "rgba(255,255,255,0.07)",
            gap: 1,
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {cards.map((card, i) => (
            <CardView key={card.product} card={card} index={i} reduce={reduce} />
          ))}
        </div>
      </div>
    </section>
  );
}
