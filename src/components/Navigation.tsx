import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";

type NavLink = { label: string; href: string };

const navLinks: NavLink[] = [
  { label: "Products", href: "#stack" },
  { label: "About", href: "#operator" },
  { label: "Track Record", href: "#track-record" },
  { label: "Contact", href: "#contact" },
];

const COMPARE_PATH = "/compare";
const FIND_PATH = "/find-my-exchange";
const ADVERTISE_PATH = "/advertise";
const PRICING_PATH = "/pricing";

const PLATFORM_LINKS: {
  label: string;
  to: typeof COMPARE_PATH | typeof FIND_PATH | typeof ADVERTISE_PATH | typeof PRICING_PATH;
}[] = [
  { label: "Find Exchange", to: FIND_PATH },
  { label: "Advertise", to: ADVERTISE_PATH },
  { label: "Pricing", to: PRICING_PATH },
];

const DASHBOARD_URL = "https://app.coinsiglieri.com";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (link: NavLink) => {
    setMobileOpen(false);
    const el = document.querySelector(link.href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-[100]"
        style={{
          background: "rgba(9,9,11,0.85)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: `1px solid ${scrolled ? "rgba(255,255,255,0.07)" : "transparent"}`,
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
          {/* Brand — hard left */}
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="press inline-flex items-center select-none"
            style={{ textDecoration: "none", padding: "8px 0" }}
            aria-label="CoinSiglieri home"
          >
            <span
              style={{
                fontFamily: "Geist, sans-serif",
                fontSize: 16,
                fontWeight: 600,
                letterSpacing: "-0.01em",
                color: "#e4e4e7",
              }}
            >
              Coin
            </span>
            <span
              style={{
                fontFamily: "Geist, sans-serif",
                fontSize: 16,
                fontWeight: 600,
                letterSpacing: "-0.01em",
                color: "#18b4d4",
              }}
            >
              Siglieri
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center" style={{ gap: 32 }}>
            <Link
              to={COMPARE_PATH}
              className="press"
              style={{
                fontFamily: "Geist, sans-serif",
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: "0.01em",
                color: "#18b4d4",
                textDecoration: "none",
                padding: "12px 0",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#22c4e5")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#18b4d4")}
            >
              Compare
            </Link>
            {PLATFORM_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="press"
                style={{
                  fontFamily: "Geist, sans-serif",
                  fontSize: 14,
                  fontWeight: 500,
                  letterSpacing: "0.01em",
                  color: "#71717a",
                  textDecoration: "none",
                  padding: "12px 0",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#e4e4e7")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#71717a")}
              >
                {link.label}
              </Link>
            ))}
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link)}
                className="press"
                style={{
                  fontFamily: "Geist, sans-serif",
                  fontSize: 14,
                  fontWeight: 500,
                  letterSpacing: "0.01em",
                  color: "#71717a",
                  background: "none",
                  border: "none",
                  padding: "12px 0",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#e4e4e7")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#71717a")}
              >
                {link.label}
              </button>
            ))}
            <a
              href={DASHBOARD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="press"
              style={{
                fontFamily: "Geist, sans-serif",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.02em",
                padding: "8px 20px",
                borderRadius: 2,
                background: "#18b4d4",
                color: "#09090b",
                textDecoration: "none",
                whiteSpace: "nowrap",
                boxShadow: "0 0 0 0 rgba(24,180,212,0)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "#22c4e5";
                el.style.boxShadow = "0 0 24px 0 rgba(24,180,212,0.45)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "#18b4d4";
                el.style.boxShadow = "0 0 0 0 rgba(24,180,212,0)";
              }}
            >
              Open Dashboard →
            </a>
          </nav>

          {/* Mobile hamburger — 40×40 hit area */}
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

      <AnimatePresence initial={false}>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[99] flex flex-col items-center justify-center"
            style={{ background: "rgba(9,9,11,0.97)", backdropFilter: "blur(20px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="flex flex-col items-center gap-6">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  to={COMPARE_PATH}
                  onClick={() => setMobileOpen(false)}
                  className="press"
                  style={{
                    color: "#18b4d4",
                    fontFamily: "Geist, sans-serif",
                    fontSize: 22,
                    fontWeight: 600,
                    letterSpacing: "-0.01em",
                    textDecoration: "none",
                  }}
                >
                  Compare
                </Link>
              </motion.div>
              {PLATFORM_LINKS.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: (i + 1) * 0.05,
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className="press"
                    style={{
                      color: "#e4e4e7",
                      fontFamily: "Geist, sans-serif",
                      fontSize: 22,
                      fontWeight: 600,
                      letterSpacing: "-0.01em",
                      textDecoration: "none",
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  onClick={() => handleNavClick(link)}
                  className="press"
                  style={{
                    background: "none",
                    border: "none",
                    color: "#e4e4e7",
                    fontFamily: "Geist, sans-serif",
                    fontSize: 22,
                    fontWeight: 600,
                    letterSpacing: "-0.01em",
                    cursor: "pointer",
                  }}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (i + 1) * 0.05, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.a
                href={DASHBOARD_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="press mt-4"
                style={{
                  background: "#18b4d4",
                  color: "#09090b",
                  fontFamily: "Geist, sans-serif",
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: "0.02em",
                  padding: "12px 28px",
                  borderRadius: 2,
                  textDecoration: "none",
                }}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: navLinks.length * 0.05,
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                Open Dashboard →
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
