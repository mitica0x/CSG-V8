import { createFileRoute } from "@tanstack/react-router";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Placeholder route — /news is linked from the nav but the editorial index
// hasn't shipped. Renders a quiet "coming soon" so the link resolves to a
// real surface instead of 404.

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News — CoinSiglieri" },
      {
        name: "description",
        content:
          "CoinSiglieri editorial — MiCAR, exchange moves, crypto cards, regulation. Coming soon.",
      },
    ],
  }),
  component: NewsPage,
});

function NewsPage() {
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
            What we're watching.
          </h1>
          <p
            style={{
              fontFamily: "Geist, sans-serif",
              fontSize: 17,
              lineHeight: 1.55,
              color: "#a1a1aa",
            }}
          >
            MiCAR, exchange moves, crypto cards, market signals. Editorial — by operators, for
            operators. First piece ships with the rest of the directory rebuild.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
