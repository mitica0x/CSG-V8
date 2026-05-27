// CSS-marquee stats ticker — feeds the homepage between sections.
// Live numbers are static stubs for now; data layer is wired separately in a later phase.
const STATS: { value: string; label: string; color: string }[] = [
  { value: "60+", label: "Exchanges Tracked", color: "#18b4d4" },
  { value: "5", label: "Score Dimensions", color: "#0dbe82" },
  { value: "24/7", label: "Signal Monitoring", color: "#e8703a" },
  { value: "0", label: "Pay-to-Win Placement", color: "#D4A853" },
  { value: "27", label: "MiCAR Jurisdictions", color: "#70a848" },
  { value: "100%", label: "Score Independence", color: "#0dbe82" },
  { value: "<24h", label: "Reserves Attestation", color: "#18b4d4" },
  { value: "EU", label: "Native Coverage", color: "#e8703a" },
];

export default function StatsTicker() {
  // Duplicate the list so marquee can loop seamlessly via -50% translation
  const items = [...STATS, ...STATS];

  return (
    <section
      style={{
        background: "#09090b",
        borderTop: "0.5px solid rgba(255,255,255,0.07)",
        borderBottom: "0.5px solid rgba(255,255,255,0.07)",
        overflow: "hidden",
        padding: "18px 0",
      }}
    >
      <div className="animate-marquee" style={{ display: "flex", gap: 48, width: "max-content" }}>
        {items.map((s, i) => (
          <div
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "baseline",
              gap: 10,
              whiteSpace: "nowrap",
              paddingLeft: 16,
              paddingRight: 16,
              borderLeft: "0.5px solid rgba(255,255,255,0.05)",
            }}
          >
            <span
              className="tabular-nums"
              style={{
                fontFamily: "Geist Mono, monospace",
                fontSize: 22,
                fontWeight: 800,
                color: s.color,
                letterSpacing: "-0.01em",
              }}
            >
              {s.value}
            </span>
            <span
              style={{
                fontFamily: "Geist Mono, monospace",
                fontSize: 10,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#71717a",
                fontWeight: 600,
              }}
            >
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
