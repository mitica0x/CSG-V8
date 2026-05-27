import { createFileRoute } from "@tanstack/react-router";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CompareSidebar from "@/components/csg/CompareSidebar";
import CompareOverview from "@/components/csg/CompareOverview";
import BybitFeaturedCard from "@/components/csg/BybitFeaturedCard";
import ExchangeListRow from "@/components/csg/ExchangeListRow";
import CompareTable from "@/components/csg/CompareTable";
import ExchangeReviewBlock from "@/components/csg/ExchangeReviewBlock";
import { EXCHANGES } from "@/data/exchanges";

// /compare — 4-section sidebar layout (Overview · Top Exchanges · Comparison
// Table · Exchange Reviews). The Methodology tab from the original 5-section
// spec is deliberately out of scope here per the latest brief.

export const Route = createFileRoute("/compare")({
  head: () => ({
    meta: [
      { title: "Compare Crypto Exchanges — C0insiglieri Score | CoinSiglieri" },
      {
        name: "description",
        content:
          "Independent crypto exchange comparison. Algorithmic scoring across Security, Proof of Reserves, Compliance, Liquidity and Track Record. MiCAR-licensed venues highlighted.",
      },
      { property: "og:title", content: "Compare Crypto Exchanges — CoinSiglieri" },
      {
        property: "og:description",
        content: "The leaderboard nobody paid to be on. Scored by algorithm. Not by who pays us.",
      },
    ],
  }),
  component: ComparePage,
});

// Featured exchange (Bybit) sits up top of Top Exchanges.
// All organic exchanges sorted by score desc, deduped against the featured.
function ComparePage() {
  const featured = EXCHANGES.find((e) => e.featured);
  const organic = [...EXCHANGES.filter((e) => !e.featured)].sort((a, b) => b.score - a.score);

  // Top 8 reviews — featured first, then organic by score.
  const reviewExchanges = [featured, ...organic].filter(Boolean).slice(0, 8) as typeof EXCHANGES;

  // Comparison table covers the full set, sorted by score desc.
  const tableExchanges = [...EXCHANGES].sort((a, b) => b.score - a.score);

  return (
    <div style={{ background: "#080b16", minHeight: "100vh", color: "#e4e4e7" }}>
      <Navigation />

      <main style={{ paddingTop: 64 }}>
        <div
          className="cmp-layout"
          style={{
            display: "grid",
            gridTemplateColumns: "220px minmax(0, 1fr)",
            gap: 48,
            maxWidth: 1400,
            margin: "0 auto",
            padding: "clamp(32px, 5vw, 56px) clamp(24px, 4vw, 56px) 96px",
          }}
        >
          <CompareSidebar />

          <div style={{ minWidth: 0, display: "flex", flexDirection: "column", gap: 64 }}>
            {/* Section 1 — Overview */}
            <CompareOverview />

            {/* Section 2 — Top Exchanges */}
            <section id="top-exchanges" style={{ scrollMarginTop: 88 }}>
              <SectionHeader
                eyebrow="Top Exchanges"
                title="The leaderboard."
                sub="Featured slot is editorial real estate — commercial and disclosed. Every other rank is organic."
              />

              {/* Bybit featured card */}
              {featured && <div style={{ marginTop: 32 }}><BybitFeaturedCard exchange={featured} /></div>}

              {/* Organic exchange list */}
              <div
                style={{
                  marginTop: 24,
                  background: "#0f1422",
                  border: "0.5px solid rgba(255,255,255,0.07)",
                  borderRadius: 3,
                  overflow: "hidden",
                }}
              >
                {organic.map((ex, i) => (
                  <ExchangeListRow key={ex.id} exchange={ex} rank={i + 2} />
                ))}
              </div>
            </section>

            {/* Section 3 — Comparison Table */}
            <section id="comparison-table" style={{ scrollMarginTop: 88 }}>
              <SectionHeader
                eyebrow="Comparison Table"
                title="Side-by-side, by the numbers."
                sub="Filtered to the dimensions that change a real decision: MiCAR, card programme, futures, proof of reserves, fees."
              />
              <div style={{ marginTop: 32 }}>
                <CompareTable exchanges={tableExchanges} />
              </div>
              <p
                style={{
                  marginTop: 14,
                  fontFamily: "Geist Mono, monospace",
                  fontSize: 10,
                  color: "#52525b",
                  letterSpacing: "0.06em",
                }}
              >
                Fees shown are indicative spot trading rates for the standard tier. Pro / VIP tiers are lower across the board.
              </p>
            </section>

            {/* Section 4 — Exchange Reviews */}
            <section id="reviews" style={{ scrollMarginTop: 88 }}>
              <SectionHeader
                eyebrow="Exchange Reviews"
                title="The editorial."
                sub="One short read per venue — what they're good at, where the trade-off lives, and whether we'd recommend them under MiCAR."
              />
              <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 20 }}>
                {reviewExchanges.map((ex) => (
                  <ExchangeReviewBlock key={ex.id} exchange={ex} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />

      <style>{`
        @media (max-width: 880px) {
          .cmp-layout {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .cmp-layout > aside {
            position: relative !important;
            top: 0 !important;
            width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub: string;
}) {
  return (
    <header>
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
          fontSize: "clamp(24px, 3.5vw, 32px)",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          color: "#e4e4e7",
          lineHeight: 1.15,
          marginBottom: 10,
        }}
      >
        {title}
      </h2>
      <p
        style={{
          fontFamily: "Geist, sans-serif",
          fontSize: 15,
          lineHeight: 1.6,
          color: "#a1a1aa",
          maxWidth: 720,
        }}
      >
        {sub}
      </p>
    </header>
  );
}
