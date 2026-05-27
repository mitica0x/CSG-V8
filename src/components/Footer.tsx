import { Link } from "@tanstack/react-router";
import { CoinSiglieri } from "@/components/csg/WordmarkCSG";
import ProductMark from "./ProductMark";

// 4-column footer. Items removed from the primary nav (Products, Pricing,
// Track Record, Contact) live here. Tagline anchors the bottom strip — one
// of the four reserved tagline placements site-wide.

type RouteHref =
  | "/compare"
  | "/find-my-exchange"
  | "/advertise"
  | "/pricing"
  | "/products"
  | "/contact"
  | "/team";
type AnchorHref = "/cards" | "/news" | "/#track-record";

type FooterLink =
  | { label: string; kind: "route"; to: RouteHref }
  | { label: string; kind: "anchor"; href: AnchorHref };

const COLUMNS: { heading: string; links: FooterLink[] }[] = [
  {
    heading: "Platform",
    links: [
      { label: "Compare",       kind: "route",  to: "/compare" },
      { label: "Find Exchange", kind: "route",  to: "/find-my-exchange" },
      { label: "Cards",         kind: "anchor", href: "/cards" },
      { label: "News",          kind: "anchor", href: "/news" },
    ],
  },
  {
    heading: "Products",
    links: [
      { label: "Pricing",       kind: "route", to: "/pricing" },
      { label: "Products",      kind: "route", to: "/products" },
      { label: "Advertise",     kind: "route", to: "/advertise" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About",         kind: "route",  to: "/team" },
      { label: "Track Record",  kind: "anchor", href: "/#track-record" },
      { label: "Contact",       kind: "route",  to: "/contact" },
    ],
  },
];

const PRODUCT_LINKS = [
  { product: "c0insiglieri" as const, href: "https://app.coinsiglieri.com", color: "#18b4d4" },
  { product: "ax0n" as const,         href: "https://ax0n.run",            color: "#D4A853" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#09090b",
        borderTop: "0.5px solid rgba(255,255,255,0.07)",
        padding: "56px clamp(24px, 4vw, 64px) 32px",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Top — 4 columns: brand + 3 link columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr repeat(3, 1fr)",
            gap: 40,
            marginBottom: 48,
          }}
          className="footer-grid"
        >
          {/* Brand column */}
          <div>
            <div
              style={{
                fontFamily: "Geist, sans-serif",
                fontSize: 16,
                fontWeight: 600,
                letterSpacing: "-0.01em",
                marginBottom: 14,
              }}
            >
              <CoinSiglieri />
            </div>
            <p
              style={{
                fontFamily: "Geist, sans-serif",
                fontSize: 13.5,
                lineHeight: 1.65,
                color: "#71717a",
                marginBottom: 18,
                maxWidth: 320,
              }}
            >
              AI-native financial infrastructure. EU-focused, MiCAR-native — built by operators in
              the market since 2017.
            </p>
            <div
              style={{
                display: "inline-flex",
                gap: 10,
                fontFamily: "Geist Mono, monospace",
                fontSize: 10,
                letterSpacing: "0.04em",
              }}
            >
              {PRODUCT_LINKS.map((link, i) => (
                <span
                  key={link.product}
                  style={{ display: "inline-flex", alignItems: "center", gap: 10 }}
                >
                  {i > 0 && (
                    <span style={{ color: "#3f3f46" }} aria-hidden>
                      ·
                    </span>
                  )}
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: link.color, textDecoration: "none" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.7")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
                  >
                    <ProductMark product={link.product} />
                  </a>
                </span>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <FooterColumn key={col.heading} heading={col.heading} links={col.links} />
          ))}
        </div>

        {/* Bottom strip — copyright + tagline + meta */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            alignItems: "center",
            gap: 16,
            paddingTop: 20,
            borderTop: "0.5px solid rgba(255,255,255,0.07)",
            fontFamily: "Geist Mono, monospace",
            fontSize: 10,
            letterSpacing: "0.06em",
            color: "#52525b",
          }}
          className="footer-bottom"
        >
          <span>© 2026 CoinSiglieri · Bucharest, RO</span>
          <span
            style={{
              fontWeight: 700,
              letterSpacing: "0.16em",
              color: "#71717a",
              textAlign: "center",
            }}
          >
            ALL SIGNAL. <span style={{ color: "#18b4d4" }}>0</span> GUESS.
          </span>
          <span style={{ textAlign: "right" }}>coinsiglieri.com</span>
        </div>

        <p
          style={{
            marginTop: 14,
            fontFamily: "Geist Mono, monospace",
            fontSize: 9.5,
            color: "#3f3f46",
            letterSpacing: "0.04em",
            lineHeight: 1.6,
            maxWidth: 720,
          }}
        >
          Some links on this site are affiliate links — we may earn commission when you sign up
          through them. Editorial scoring and reviews are independent of any placement.
        </p>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
          .footer-bottom {
            grid-template-columns: 1fr !important;
            text-align: center !important;
            gap: 8px !important;
          }
          .footer-bottom > * {
            text-align: center !important;
          }
        }
      `}</style>
    </footer>
  );
}

function FooterColumn({ heading, links }: { heading: string; links: FooterLink[] }) {
  return (
    <div>
      <p
        style={{
          fontFamily: "Geist Mono, monospace",
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#a1a1aa",
          marginBottom: 14,
        }}
      >
        {heading}
      </p>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
        {links.map((link) => (
          <li key={link.label}>
            <FooterLinkRow link={link} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterLinkRow({ link }: { link: FooterLink }) {
  const baseStyle: React.CSSProperties = {
    fontFamily: "Geist, sans-serif",
    fontSize: 13.5,
    color: "#71717a",
    textDecoration: "none",
    transition: "color 150ms cubic-bezier(0.16, 1, 0.3, 1)",
    cursor: "pointer",
  };
  const enter = (e: React.MouseEvent<HTMLElement>) =>
    ((e.currentTarget as HTMLElement).style.color = "#e4e4e7");
  const leave = (e: React.MouseEvent<HTMLElement>) =>
    ((e.currentTarget as HTMLElement).style.color = "#71717a");

  if (link.kind === "route") {
    return (
      <Link to={link.to} style={baseStyle} onMouseEnter={enter} onMouseLeave={leave}>
        {link.label}
      </Link>
    );
  }
  return (
    <a href={link.href} style={baseStyle} onMouseEnter={enter} onMouseLeave={leave}>
      {link.label}
    </a>
  );
}
