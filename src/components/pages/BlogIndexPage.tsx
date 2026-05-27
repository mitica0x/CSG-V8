import { motion } from "motion/react";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Link } from "@tanstack/react-router";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ease = [0.22, 1, 0.36, 1] as const;

interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tag: string;
  tagColor: string;
  gradient: string;
}

const ARTICLES: Article[] = [
  {
    slug: "best-micar-licensed-crypto-exchanges-eu-2026",
    title: "Best MiCAR Licensed Crypto Exchanges in EU 2026",
    excerpt:
      "Complete guide to MiCAR-compliant crypto exchanges in Europe. C0insiglieri Score rankings, compliance analysis, and EU regulatory status.",
    date: "May 27, 2026",
    readTime: "8 min read",
    tag: "MiCAR",
    tagColor: "#0dbe82",
    gradient: "linear-gradient(135deg, rgba(13,190,130,0.20) 0%, rgba(24,180,212,0.10) 100%)",
  },
];

export default function BlogIndexPage() {
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
              marginBottom: 12,
            }}
          >
            Field Notes
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease }}
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
            Blog. <span style={{ color: "#71717a" }}>EU market intel, decoded.</span>
          </motion.h1>

          <div
            style={{
              marginTop: 40,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 16,
            }}
          >
            {ARTICLES.map((a, i) => (
              <ArticleCard key={a.slug} a={a} i={i} />
            ))}
          </div>

          <div
            style={{
              fontFamily: "Geist Mono, monospace",
              fontSize: 9,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#3f3f46",
              marginTop: 56,
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

function ArticleCard({ a, i }: { a: Article; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: i * 0.06, ease }}
      whileHover={{ scale: 1.005 }}
      className="card-lift"
      style={{
        background: "#0f1422",
        border: "0.5px solid rgba(255,255,255,0.07)",
        borderRadius: 3,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Link
        to="/blog/best-micar-licensed-crypto-exchanges-eu-2026"
        className="press"
        style={{ textDecoration: "none", color: "inherit", display: "block" }}
      >
        <div
          style={{
            aspectRatio: "16/9",
            background: a.gradient,
            position: "relative",
            borderBottom: "0.5px solid rgba(255,255,255,0.05)",
            display: "flex",
            alignItems: "flex-end",
            padding: 14,
          }}
        >
          <span
            style={{
              fontFamily: "Geist Mono, monospace",
              fontSize: 9.5,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              fontWeight: 700,
              color: a.tagColor,
              background: "rgba(8,11,22,0.85)",
              border: `0.5px solid ${a.tagColor}66`,
              borderRadius: 3,
              padding: "3px 8px",
            }}
          >
            {a.tag}
          </span>
        </div>

        <div style={{ padding: 18, display: "flex", flexDirection: "column", gap: 8 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontFamily: "Geist Mono, monospace",
              fontSize: 10,
              color: "#71717a",
            }}
          >
            <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
              <Calendar size={11} />
              {a.date}
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
              <Clock size={11} />
              {a.readTime}
            </span>
          </div>
          <h3
            className="balance"
            style={{
              fontFamily: "Geist, sans-serif",
              fontSize: 19,
              fontWeight: 700,
              letterSpacing: "-0.015em",
              color: "#e4e4e7",
              margin: 0,
              lineHeight: 1.25,
            }}
          >
            {a.title}
          </h3>
          <p
            className="pretty"
            style={{
              fontFamily: "Geist, sans-serif",
              fontSize: 13.5,
              color: "#71717a",
              lineHeight: 1.55,
              margin: 0,
            }}
          >
            {a.excerpt}
          </p>
          <div
            style={{
              fontFamily: "Geist Mono, monospace",
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontWeight: 700,
              color: "#18b4d4",
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              marginTop: 6,
            }}
          >
            Read article
            <ArrowRight size={13} strokeWidth={2.5} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
