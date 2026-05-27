import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "@tanstack/react-router";
import { CoinSiglieri } from "@/components/csg/WordmarkCSG";

// Public-site nav. Order (locked): Compare · Find Exchange · Cards · News ·
// Advertise · About · [Open App →]. Cards/News routes don't exist yet — we
// use raw <a> for them so the typed Link API doesn't complain; they'll resolve
// to the 404 route until those pages ship. About anchors to the operator
// section on the homepage.

const SNAP = "cubic-bezier(0.16, 1, 0.3, 1)";
const APP_URL = "https://app.coinsiglieri.com";

type RouteHref = "/compare" | "/find-my-exchange" | "/advertise";
type AnchorHref = "/cards" | "/news" | "/#operator";

type NavItem =
  | { label: string; kind: "route"; to: RouteHref }
  | { label: string; kind: "anchor"; href: AnchorHref };

const ITEMS: NavItem[] = [
  { label: "Compare",       kind: "route",  to: "/compare" },
  { label: "Find Exchange", kind: "route",  to: "/find-my-exchange" },
  { label: "Cards",         kind: "anchor", href: "/cards" },
  { label: "News",          kind: "anchor", href: "/news" },
  { label: "Advertise",     kind: "route",  to: "/advertise" },
  { label: "About",         kind: "anchor", href: "/#operator" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile panel is open.
  useEffect(() => {
    if (mobileOpen) {
      const orig = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = orig;
      };
    }
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-[100]"
        style={{
          background: "rgba(8,11,22,0.85)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: `0.5px solid ${scrolled ? "rgba(255,255,255,0.07)" : "transparent"}`,
          transitionProperty: "border-color",
          transitionDuration: "300ms",
        }}
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className="max-w-7xl mx-auto px-6 flex items-center justify-between"
          style={{ minHeight: 64 }}
        >
          {/* Brand wordmark — single source of truth, no route concatenation */}
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="press inline-flex items-center select-none"
            style={{
              textDecoration: "none",
              padding: "8px 0",
              fontFamily: "Geist, sans-serif",
              fontSize: 16,
              fontWeight: 600,
              letterSpacing: "-0.01em",
            }}
            aria-label="CoinSiglieri home"
          >
            <CoinSiglieri />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center" style={{ gap: 28 }}>
            {ITEMS.map((item) => (
              <NavItemDesktop
                key={item.label}
                item={item}
                active={isActive(item, location.pathname, location.hash)}
              />
            ))}

            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="press"
              style={{
                fontFamily: "Geist, sans-serif",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.02em",
                padding: "8px 18px",
                borderRadius: 3,
                background: "#0dbe82",
                color: "#080b16",
                textDecoration: "none",
                whiteSpace: "nowrap",
                transition: "background 200ms cubic-bezier(0.22, 1, 0.36, 1)",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#16d491")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#0dbe82")}
            >
              Open App →
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden inline-flex items-center justify-center"
            style={{
              background: "none",
              border: "none",
              color: "#e4e4e7",
              width: 40,
              height: 40,
              cursor: "pointer",
            }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile slide-down panel */}
      <AnimatePresence initial={false}>
        {mobileOpen && (
          <motion.div
            className="fixed left-0 right-0 z-[99] lg:hidden"
            style={{
              top: 64,
              background: "rgba(8,11,22,0.97)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderBottom: "0.5px solid rgba(255,255,255,0.07)",
            }}
            initial={{ y: -8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -8, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "16px 24px 24px",
                gap: 4,
              }}
            >
              {ITEMS.map((item, i) => (
                <NavItemMobile
                  key={item.label}
                  item={item}
                  active={isActive(item, location.pathname, location.hash)}
                  delay={i * 0.03}
                  onSelect={() => setMobileOpen(false)}
                />
              ))}
              <motion.a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: ITEMS.length * 0.03,
                  duration: 0.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  marginTop: 12,
                  display: "inline-block",
                  textAlign: "center",
                  fontFamily: "Geist, sans-serif",
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: "0.02em",
                  padding: "12px 20px",
                  background: "#0dbe82",
                  color: "#080b16",
                  borderRadius: 3,
                  textDecoration: "none",
                }}
              >
                Open App →
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ─── Active-state detection ──────────────────────────────────────────────────
function isActive(item: NavItem, pathname: string, hash: string): boolean {
  if (item.kind === "route") return pathname === item.to;
  if (item.href.startsWith("/#")) {
    return pathname === "/" && hash === item.href.slice(1);
  }
  return pathname === item.href;
}

// ─── Desktop item ────────────────────────────────────────────────────────────
function NavItemDesktop({ item, active }: { item: NavItem; active: boolean }) {
  const [hover, setHover] = useState(false);
  const lit = hover || active;
  const baseStyle: React.CSSProperties = {
    fontFamily: "Geist Mono, monospace",
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: lit ? "#e4e4e7" : "#71717a",
    textDecoration: "none",
    padding: "12px 0",
    borderBottom: `2px solid ${active ? "#0dbe82" : "transparent"}`,
    whiteSpace: "nowrap",
    transition: `color 150ms ${SNAP}, border-color 150ms ${SNAP}`,
    cursor: "pointer",
    background: "none",
    border: "none",
    borderRadius: 0,
  };

  if (item.kind === "route") {
    return (
      <Link
        to={item.to}
        className="press"
        style={baseStyle}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <a
      href={item.href}
      className="press"
      style={baseStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {item.label}
    </a>
  );
}

// ─── Mobile item ─────────────────────────────────────────────────────────────
function NavItemMobile({
  item,
  active,
  delay,
  onSelect,
}: {
  item: NavItem;
  active: boolean;
  delay: number;
  onSelect: () => void;
}) {
  const baseStyle: React.CSSProperties = {
    display: "block",
    padding: "12px 4px",
    fontFamily: "Geist Mono, monospace",
    fontSize: 14,
    fontWeight: 600,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: active ? "#e4e4e7" : "#a1a1aa",
    textDecoration: "none",
    borderLeft: `2px solid ${active ? "#0dbe82" : "transparent"}`,
    paddingLeft: 12,
  };

  const content = (
    <motion.span
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      style={{ display: "block" }}
    >
      {item.label}
    </motion.span>
  );

  if (item.kind === "route") {
    return (
      <Link to={item.to} onClick={onSelect} style={baseStyle}>
        {content}
      </Link>
    );
  }
  return (
    <a href={item.href} onClick={onSelect} style={baseStyle}>
      {content}
    </a>
  );
}
