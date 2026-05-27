import { createFileRoute } from "@tanstack/react-router";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Placeholder route — /cards is in the nav but the full page hasn't shipped
// yet. Renders a single "coming soon" surface that matches the site's tone.

export const Route = createFileRoute("/cards")({
  head: () => ({
    meta: [
      { title: "Crypto Cards — CoinSiglieri" },
      {
        name: "description",
        content:
          "Crypto card comparison — coming soon. Cashback, currencies, fees, EU availability.",
      },
    ],
  }),
  component: CardsPage,
});

function CardsPage() {
  return (
    <div style={{ background: "#080b16", minHeight: "100vh", color: "#e4e4e7" }}>
      <Navigation />
      <main
        style={{
          minHeight: "calc(100vh - 64px)",
          paddingTop: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ textAlign: "center", padding: "0 24px", maxWidth: 640 }}>
          <p
            style={{
              fontFamily: "Geist Mono, monospace",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#18b4d4",
              marginBottom: 18,
            }}
          >
            Coming soon
          </p>
          <h1
            style={{
              fontFamily: "Geist, sans-serif",
              fontSize: "clamp(32px, 5vw, 44px)",
              fontWeight: 700,
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
              color: "#e4e4e7",
              marginBottom: 16,
            }}
          >
            Crypto cards. Scored on what matters.
          </h1>
          <p
            style={{
              fontFamily: "Geist, sans-serif",
              fontSize: 17,
              lineHeight: 1.55,
              color: "#a1a1aa",
            }}
          >
            Cashback, currencies, EU availability, fees. Same scoring discipline as the exchange
            leaderboard — applied to the cards behind them. Shipping next.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
