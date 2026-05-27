import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import {
  Sparkle,
  ShieldCheck,
  Users,
  Star,
  Newspaper,
  Mail,
  CreditCard,
  Compass,
  Wrench,
  ArrowUpRight,
  Check,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// CryptoSlate-style media kit for coinsiglieri.com.
// No public pricing on this page. All CTAs route to the bottom contact form.

const SOFT = [0.22, 1, 0.36, 1] as const;

const TRUST = [
  { label: "EU-focused · MiCAR-native" },
  { label: "Built by operators · 2016+ in crypto" },
  { label: "Scoring independent · Placement disclosed" },
  { label: "B2B audience · Decision-makers" },
];

const WHY = [
  {
    Icon: Compass,
    color: "#18b4d4",
    title: "EU / MiCAR specialist",
    body: "We cover what other crypto media doesn't. Specific exchanges, specific jurisdictions, specific licences. Not generic.",
  },
  {
    Icon: ShieldCheck,
    color: "#0dbe82",
    title: "Algorithmic scoring",
    body: "Your placement sits next to an independent C0insiglieri Score you didn't pay for. That credibility transfers.",
  },
  {
    Icon: Users,
    color: "#e8703a",
    title: "High-intent audience",
    body: "Compliance officers. CMOs. Active traders evaluating regulated venues. Not retail noise.",
  },
];

const PLACEMENTS = [
  {
    num: "01",
    Icon: Star,
    color: "#e8703a",
    eyebrow: "FEATURED",
    title: "Featured Placement · /compare",
    body: "Rust-bordered featured slot on our highest-intent page. Permanent top-of-directory until contract end.",
    surface: "/compare",
  },
  {
    num: "02",
    Icon: Newspaper,
    color: "#0dbe82",
    eyebrow: "EDITORIAL",
    title: "Sponsored Article",
    body: "Editorial-style long-form on /news, permanently SEO-indexed. We write it. You approve it. Both bylines disclosed.",
    surface: "/news · permanent",
  },
  {
    num: "03",
    Icon: Mail,
    color: "#18b4d4",
    eyebrow: "NEWSLETTER",
    title: "Newsletter Mention",
    body: "Dedicated mention in the CoinSiglieri Signal newsletter. EU operators and active traders on the list — not retail.",
    surface: "Newsletter · weekly cadence",
  },
  {
    num: "04",
    Icon: CreditCard,
    color: "#e8703a",
    eyebrow: "FEATURED",
    title: "Crypto Card Spotlight · /cards",
    body: "Featured slot on the crypto cards page. Same rust-bordered treatment, scoped to card-issuer placements.",
    surface: "/cards",
  },
  {
    num: "05",
    Icon: Compass,
    color: "#0dbe82",
    eyebrow: "QUIZ",
    title: "Find My Exchange · Recommended Slot",
    body: "Lead-gen quiz. Recommended position when the user's answer profile matches your venue. Performance-priced on activations.",
    surface: "/find-my-exchange · CPA",
  },
  {
    num: "06",
    Icon: Wrench,
    color: "#18b4d4",
    eyebrow: "BESPOKE",
    title: "Custom Campaign",
    body: "Newsletter + sponsored article + featured slot + CPA. Built to a specific brief — launch, MiCAR moment, product reveal.",
    surface: "Cross-surface · bespoke",
  },
];

const TRUSTED_BY = [
  { name: "Bybit", domain: "bybit.com", paid: true },
  { name: "YOUR EXCHANGE", domain: null, paid: false },
  { name: "YOUR EXCHANGE", domain: null, paid: false },
  { name: "YOUR EXCHANGE", domain: null, paid: false },
];

export default function AdvertisePage() {
  return (
    <div style={{ background: "#080b16", minHeight: "100vh", color: "#e4e4e7" }}>
      <Navigation />

      <main style={{ paddingTop: 64 }}>
        <Hero />
        <TrustBand />
        <WhySection />
        <PlacementsGrid />
        <EditorialStandards />
        <TrustedByStrip />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      style={{
        padding: "clamp(64px, 10vw, 112px) clamp(24px, 4vw, 64px) clamp(48px, 6vw, 72px)",
        borderBottom: "0.5px solid rgba(255,255,255,0.07)",
      }}
    >
      <div className="max-w-7xl mx-auto" style={{ maxWidth: 1100 }}>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: SOFT }}
          style={{
            fontFamily: "Geist Mono, monospace",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#0dbe82",
            marginBottom: 18,
          }}
        >
          Media Kit · 2026
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: SOFT, delay: 0.06 }}
          style={{
            fontFamily: "Geist, sans-serif",
            fontSize: "clamp(36px, 6vw, 56px)",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
            color: "#e4e4e7",
            marginBottom: 18,
            maxWidth: 900,
          }}
        >
          The leaderboard nobody paid to be on.
          <br />
          <span style={{ color: "#71717a" }}>The real estate around it is.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: SOFT, delay: 0.12 }}
          style={{
            fontFamily: "Geist, sans-serif",
            fontSize: 17,
            lineHeight: 1.55,
            color: "#71717a",
            maxWidth: 640,
          }}
        >
          Independent intelligence. Algorithmic scoring. Commercial placement available — and
          clearly disclosed when it's there.
        </motion.p>

        {/* Tagline — one of the 4 reserved tagline placements site-wide */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: SOFT, delay: 0.16 }}
          style={{
            marginTop: 24,
            fontFamily: "Geist Mono, monospace",
            fontSize: 11,
            fontWeight: 600,
            color: "#18b4d4",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
          }}
        >
          All Signal. <span style={{ color: "#0dbe82" }}>0</span> Guess.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: SOFT, delay: 0.18 }}
          style={{ marginTop: 32 }}
        >
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 22px",
              background: "#0dbe82",
              color: "#080b16",
              fontFamily: "Geist, sans-serif",
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: "0.01em",
              borderRadius: 3,
              textDecoration: "none",
              transition: "background 200ms cubic-bezier(0.22, 1, 0.36, 1)",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#16d491")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#0dbe82")}
          >
            Reserve placement <ArrowUpRight size={14} strokeWidth={2.25} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Trust band ──────────────────────────────────────────────────────────────
function TrustBand() {
  return (
    <section
      style={{
        padding: "32px clamp(24px, 4vw, 64px)",
        borderBottom: "0.5px solid rgba(255,255,255,0.07)",
        background: "#0a0e1c",
      }}
    >
      <div
        className="max-w-7xl mx-auto"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 24,
          alignItems: "center",
        }}
      >
        {TRUST.map((t, i) => (
          <motion.div
            key={t.label}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, ease: SOFT, delay: i * 0.06 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontFamily: "Geist Mono, monospace",
              fontSize: 11,
              letterSpacing: "0.06em",
              color: "#a1a1aa",
            }}
          >
            <Sparkle size={12} strokeWidth={2} color="#0dbe82" />
            {t.label}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ─── Why CoinSiglieri ────────────────────────────────────────────────────────
function WhySection() {
  return (
    <section
      style={{
        padding: "clamp(64px, 8vw, 96px) clamp(24px, 4vw, 64px)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader eyebrow="Why CoinSiglieri" title="Three reasons your placement performs here." />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 16,
            marginTop: 40,
          }}
        >
          {WHY.map((w, i) => (
            <WhyCard key={w.title} item={w} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyCard({
  item,
  idx,
}: {
  item: (typeof WHY)[number];
  idx: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const [hover, setHover] = useState(false);
  const { Icon, color, title, body } = item;
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: SOFT, delay: idx * 0.08 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: "#0f1422",
        border: hover ? `0.5px solid ${color}33` : "0.5px solid rgba(255,255,255,0.07)",
        borderRadius: 3,
        padding: 28,
        transform: hover ? "translateY(-2px)" : "translateY(0)",
        transition: "border-color 200ms cubic-bezier(0.16, 1, 0.3, 1), transform 200ms cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 36,
          height: 36,
          background: `${color}10`,
          border: `0.5px solid ${color}33`,
          borderRadius: 3,
          marginBottom: 18,
        }}
      >
        <Icon size={16} strokeWidth={2} color={color} />
      </div>
      <h3
        style={{
          fontFamily: "Geist, sans-serif",
          fontSize: 18,
          fontWeight: 600,
          color: "#e4e4e7",
          letterSpacing: "-0.01em",
          marginBottom: 10,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: "Geist, sans-serif",
          fontSize: 14,
          lineHeight: 1.6,
          color: "#a1a1aa",
        }}
      >
        {body}
      </p>
    </motion.div>
  );
}

// ─── Placements grid ─────────────────────────────────────────────────────────
function PlacementsGrid() {
  return (
    <section
      style={{
        padding: "clamp(48px, 7vw, 80px) clamp(24px, 4vw, 64px)",
        borderTop: "0.5px solid rgba(255,255,255,0.07)",
        background: "#0a0e1c",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Campaign Solutions"
          title="Six placement types. One commercial boundary."
          sub="Pick a single surface or combine them. Editorial scoring stays independent across every package."
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 16,
            marginTop: 40,
          }}
        >
          {PLACEMENTS.map((p, i) => (
            <PlacementCard key={p.num} placement={p} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PlacementCard({
  placement,
  idx,
}: {
  placement: (typeof PLACEMENTS)[number];
  idx: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });
  const [hover, setHover] = useState(false);
  const { num, Icon, color, eyebrow, title, body, surface } = placement;
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, ease: SOFT, delay: idx * 0.06 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        background: "#0f1422",
        border: hover ? `0.5px solid ${color}40` : "0.5px solid rgba(255,255,255,0.07)",
        borderRadius: 3,
        padding: 24,
        transform: hover ? "translateY(-2px)" : "translateY(0)",
        transition:
          "border-color 200ms cubic-bezier(0.16, 1, 0.3, 1), transform 200ms cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 18 }}>
        <span
          style={{
            fontFamily: "Geist Mono, monospace",
            fontSize: 11,
            color: "#3f3f46",
            letterSpacing: "0.1em",
          }}
        >
          {num}
        </span>
        <Icon size={18} strokeWidth={1.75} color={color} />
      </div>
      <span
        style={{
          display: "inline-block",
          fontFamily: "Geist Mono, monospace",
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: "0.14em",
          color,
          background: `${color}12`,
          border: `0.5px solid ${color}40`,
          padding: "3px 8px",
          borderRadius: 3,
          marginBottom: 14,
        }}
      >
        {eyebrow}
      </span>
      <h3
        style={{
          fontFamily: "Geist, sans-serif",
          fontSize: 17,
          fontWeight: 600,
          color: "#e4e4e7",
          letterSpacing: "-0.01em",
          marginBottom: 10,
          lineHeight: 1.3,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: "Geist, sans-serif",
          fontSize: 13.5,
          lineHeight: 1.6,
          color: "#a1a1aa",
          marginBottom: 20,
          minHeight: 84,
        }}
      >
        {body}
      </p>
      <div
        style={{
          fontFamily: "Geist Mono, monospace",
          fontSize: 10,
          color: "#52525b",
          letterSpacing: "0.06em",
          marginBottom: 14,
          paddingBottom: 14,
          borderBottom: "0.5px solid rgba(255,255,255,0.07)",
        }}
      >
        {surface}
      </div>
      <a
        href="#contact"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          fontFamily: "Geist Mono, monospace",
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "0.06em",
          color: "#18b4d4",
          textDecoration: "none",
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#22c4e5")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#18b4d4")}
      >
        Reserve placement <ArrowUpRight size={11} strokeWidth={2.25} />
      </a>
    </motion.div>
  );
}

// ─── Editorial standards ─────────────────────────────────────────────────────
function EditorialStandards() {
  return (
    <section
      style={{
        padding: "clamp(48px, 7vw, 80px) clamp(24px, 4vw, 64px)",
      }}
    >
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, ease: SOFT }}
        style={{
          background: "#0f1422",
          borderLeft: "3px solid #18b4d4",
          border: "0.5px solid rgba(24,180,212,0.18)",
          borderLeftWidth: 3,
          borderLeftColor: "#18b4d4",
          borderRadius: 3,
          padding: "32px 36px",
          maxWidth: 920,
        }}
      >
        <p
          style={{
            fontFamily: "Geist Mono, monospace",
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#18b4d4",
            marginBottom: 12,
          }}
        >
          Editorial Independence
        </p>
        <h2
          style={{
            fontFamily: "Geist, sans-serif",
            fontSize: 22,
            fontWeight: 700,
            color: "#e4e4e7",
            letterSpacing: "-0.015em",
            marginBottom: 14,
            lineHeight: 1.25,
          }}
        >
          Editorial independence is the product.
        </h2>
        <p
          style={{
            fontFamily: "Geist, sans-serif",
            fontSize: 15,
            lineHeight: 1.65,
            color: "#a1a1aa",
          }}
        >
          Our scoring methodology is public and weighted. Featured placement is commercial and
          disclosed. Scores cannot be purchased. Reviews are editorial. This boundary protects both
          our credibility and your investment — because if it didn't, neither would matter.
        </p>
      </motion.div>
    </section>
  );
}

// ─── Trusted by ──────────────────────────────────────────────────────────────
function TrustedByStrip() {
  return (
    <section
      style={{
        padding: "48px clamp(24px, 4vw, 64px)",
        borderTop: "0.5px solid rgba(255,255,255,0.07)",
        borderBottom: "0.5px solid rgba(255,255,255,0.07)",
        background: "#0a0e1c",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <p
          style={{
            fontFamily: "Geist Mono, monospace",
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#71717a",
            textAlign: "center",
            marginBottom: 24,
          }}
        >
          Trusted by
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 16,
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          {TRUSTED_BY.map((t, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "12px 16px",
                opacity: t.paid ? 1 : 0.35,
                filter: t.paid ? "none" : "grayscale(1)",
              }}
            >
              {t.paid && t.domain ? (
                <>
                  <img
                    src={`https://logo.clearbit.com/${t.domain}`}
                    alt={t.name}
                    width={24}
                    height={24}
                    loading="lazy"
                    style={{ borderRadius: 3 }}
                    onError={(e) => ((e.currentTarget as HTMLImageElement).style.visibility = "hidden")}
                  />
                  <span
                    style={{
                      fontFamily: "Geist, sans-serif",
                      fontSize: 15,
                      fontWeight: 600,
                      color: "#e4e4e7",
                    }}
                  >
                    {t.name}
                  </span>
                </>
              ) : (
                <span
                  style={{
                    fontFamily: "Geist Mono, monospace",
                    fontSize: 11,
                    letterSpacing: "0.14em",
                    color: "#3f3f46",
                  }}
                >
                  {t.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact ─────────────────────────────────────────────────────────────────
const PLACEMENT_OPTIONS = [
  "Featured Placement · /compare",
  "Sponsored Article · /news",
  "Newsletter Mention",
  "Crypto Card Spotlight · /cards",
  "Find My Exchange · Recommended Slot",
  "Custom Campaign",
];

function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [selected, setSelected] = useState<Set<string>>(new Set());

  // Honeypot: a hidden field bots fill. If filled, silently no-op.
  const honeypotRef = useRef<HTMLInputElement>(null);

  function toggle(opt: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(opt)) next.delete(opt);
      else next.add(opt);
      return next;
    });
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (honeypotRef.current?.value) return;
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      placements: Array.from(selected),
    };
    // Without a backend wired up: open a mailto with the form pre-populated so
    // the lead still lands in the inbox. Replace with /api/contact later.
    const body =
      `Name: ${data.name}\n` +
      `Company: ${data.company}\n` +
      `Email: ${data.email}\n` +
      `Interested in: ${data.placements.join(", ") || "(none specified)"}\n\n` +
      `${data.message}`;
    window.location.href = `mailto:madalchemx@gmail.com?subject=${encodeURIComponent(
      "Reserve placement — " + (data.company || "CoinSiglieri media kit lead"),
    )}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      style={{
        padding: "clamp(64px, 9vw, 112px) clamp(24px, 4vw, 64px) 96px",
      }}
    >
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: SOFT }}
        style={{
          background: "#0f1422",
          border: "0.5px solid rgba(255,255,255,0.07)",
          borderRadius: 3,
          padding: "clamp(32px, 5vw, 56px)",
          maxWidth: 720,
          margin: "0 auto",
        }}
      >
        <p
          style={{
            fontFamily: "Geist Mono, monospace",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#0dbe82",
            marginBottom: 14,
          }}
        >
          Reserve placement
        </p>
        <h2
          style={{
            fontFamily: "Geist, sans-serif",
            fontSize: "clamp(24px, 3.5vw, 32px)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "#e4e4e7",
            marginBottom: 12,
            lineHeight: 1.15,
          }}
        >
          Tell us what you want to launch.
        </h2>
        <p
          style={{
            fontFamily: "Geist, sans-serif",
            fontSize: 15,
            lineHeight: 1.6,
            color: "#71717a",
            marginBottom: 32,
          }}
        >
          We respond within 24 hours. Pricing depends on placement type, duration, and creative
          scope — we'll quote on the brief.
        </p>

        {submitted ? (
          <SubmittedPanel />
        ) : (
          <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <input
              ref={honeypotRef}
              type="text"
              name="hp"
              tabIndex={-1}
              autoComplete="off"
              style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
              aria-hidden="true"
            />
            <Field id="name" label="Name" required type="text" autoComplete="name" />
            <Field id="company" label="Company" required type="text" autoComplete="organization" />
            <Field id="email" label="Email" required type="email" autoComplete="email" />

            <div>
              <label
                style={{
                  display: "block",
                  fontFamily: "Geist Mono, monospace",
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#a1a1aa",
                  marginBottom: 10,
                }}
              >
                Interested in
              </label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {PLACEMENT_OPTIONS.map((opt) => (
                  <CheckboxChip
                    key={opt}
                    label={opt}
                    checked={selected.has(opt)}
                    onChange={() => toggle(opt)}
                  />
                ))}
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                style={{
                  display: "block",
                  fontFamily: "Geist Mono, monospace",
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#a1a1aa",
                  marginBottom: 8,
                }}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Brief, timing, budget bracket, anything we should know."
                style={{
                  width: "100%",
                  background: "#080b16",
                  border: "0.5px solid rgba(255,255,255,0.1)",
                  borderRadius: 3,
                  padding: "12px 14px",
                  fontFamily: "Geist, sans-serif",
                  fontSize: 14,
                  color: "#e4e4e7",
                  outline: "none",
                  resize: "vertical",
                }}
                onFocus={(e) => ((e.currentTarget as HTMLTextAreaElement).style.borderColor = "#0dbe82")}
                onBlur={(e) =>
                  ((e.currentTarget as HTMLTextAreaElement).style.borderColor = "rgba(255,255,255,0.1)")
                }
              />
            </div>

            <button
              type="submit"
              style={{
                marginTop: 8,
                padding: "14px 22px",
                background: "#0dbe82",
                color: "#080b16",
                fontFamily: "Geist, sans-serif",
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: "0.01em",
                border: "none",
                borderRadius: 3,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                transition: "background 200ms cubic-bezier(0.22, 1, 0.36, 1)",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#16d491")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#0dbe82")}
            >
              Reserve placement <ArrowUpRight size={14} strokeWidth={2.25} />
            </button>

            <p
              style={{
                fontFamily: "Geist Mono, monospace",
                fontSize: 10,
                color: "#52525b",
                letterSpacing: "0.06em",
                textAlign: "center",
                marginTop: 4,
              }}
            >
              We respond within 24 hours · madalchemx@gmail.com
            </p>
          </form>
        )}
      </motion.div>
    </section>
  );
}

function Field({
  id,
  label,
  required,
  type,
  autoComplete,
}: {
  id: string;
  label: string;
  required?: boolean;
  type: string;
  autoComplete?: string;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <label
        htmlFor={id}
        style={{
          display: "block",
          fontFamily: "Geist Mono, monospace",
          fontSize: 10,
          fontWeight: 600,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "#a1a1aa",
          marginBottom: 8,
        }}
      >
        {label}
        {required && <span style={{ color: "#e8703a", marginLeft: 4 }}>*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: "100%",
          background: "#080b16",
          border: `0.5px solid ${focused ? "#0dbe82" : "rgba(255,255,255,0.1)"}`,
          borderRadius: 3,
          padding: "12px 14px",
          fontFamily: "Geist, sans-serif",
          fontSize: 14,
          color: "#e4e4e7",
          outline: "none",
          transition: "border-color 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />
    </div>
  );
}

function CheckboxChip({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onChange}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "7px 12px",
        background: checked ? "rgba(13,190,130,0.08)" : "#080b16",
        border: `0.5px solid ${checked ? "rgba(13,190,130,0.4)" : "rgba(255,255,255,0.1)"}`,
        borderRadius: 3,
        fontFamily: "Geist Mono, monospace",
        fontSize: 11,
        fontWeight: 500,
        color: checked ? "#0dbe82" : "#a1a1aa",
        letterSpacing: "0.04em",
        cursor: "pointer",
        transition:
          "background 150ms cubic-bezier(0.16, 1, 0.3, 1), border-color 150ms cubic-bezier(0.16, 1, 0.3, 1), color 150ms cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {checked && <Check size={11} strokeWidth={2.5} />}
      {label}
    </button>
  );
}

function SubmittedPanel() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "40px 24px",
        background: "rgba(13,190,130,0.04)",
        border: "0.5px solid rgba(13,190,130,0.3)",
        borderRadius: 3,
      }}
    >
      <Check size={28} strokeWidth={2} color="#0dbe82" style={{ marginBottom: 14 }} />
      <h3
        style={{
          fontFamily: "Geist, sans-serif",
          fontSize: 18,
          fontWeight: 600,
          color: "#e4e4e7",
          marginBottom: 8,
        }}
      >
        Brief sent.
      </h3>
      <p
        style={{
          fontFamily: "Geist, sans-serif",
          fontSize: 14,
          color: "#a1a1aa",
          lineHeight: 1.55,
        }}
      >
        Your mail client should have opened with the brief pre-filled. If not, send it directly to
        madalchemx@gmail.com — we respond within 24 hours.
      </p>
    </div>
  );
}

// ─── Reusable section header ─────────────────────────────────────────────────
function SectionHeader({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
}) {
  return (
    <div style={{ maxWidth: 720 }}>
      <p
        style={{
          fontFamily: "Geist Mono, monospace",
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#0dbe82",
          marginBottom: 14,
        }}
      >
        {eyebrow}
      </p>
      <h2
        style={{
          fontFamily: "Geist, sans-serif",
          fontSize: "clamp(26px, 3.5vw, 36px)",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          color: "#e4e4e7",
          lineHeight: 1.15,
          marginBottom: sub ? 14 : 0,
        }}
      >
        {title}
      </h2>
      {sub && (
        <p
          style={{
            fontFamily: "Geist, sans-serif",
            fontSize: 16,
            lineHeight: 1.55,
            color: "#71717a",
          }}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

