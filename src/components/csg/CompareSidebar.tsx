import { useEffect, useState } from "react";
import { Info, Trophy, Table, FileText } from "lucide-react";

// Sticky 4-item sidebar for /compare. Scroll-spy via IntersectionObserver —
// updates `active` based on which section is closest to the top of viewport.

export type CompareSection = "overview" | "top-exchanges" | "comparison-table" | "reviews";

const ITEMS: { id: CompareSection; label: string; Icon: typeof Info }[] = [
  { id: "overview",          label: "Overview",         Icon: Info },
  { id: "top-exchanges",     label: "Top Exchanges",    Icon: Trophy },
  { id: "comparison-table",  label: "Comparison Table", Icon: Table },
  { id: "reviews",           label: "Exchange Reviews", Icon: FileText },
];

const SNAP = "cubic-bezier(0.16, 1, 0.3, 1)";

export default function CompareSidebar() {
  const [active, setActive] = useState<CompareSection>("overview");

  useEffect(() => {
    const targets = ITEMS.map((i) => document.getElementById(i.id)).filter(
      (el): el is HTMLElement => !!el,
    );
    if (targets.length === 0) return;

    // Use the top 35% of viewport as the "active" band — feels right for long
    // pages where headings sit near the top after a click.
    const observer = new IntersectionObserver(
      (entries) => {
        // Take the entry whose top is closest to the band threshold.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActive(visible[0].target.id as CompareSection);
        }
      },
      {
        rootMargin: "-80px 0px -55% 0px",
        threshold: 0,
      },
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>, id: CompareSection) {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    // Account for the 64px fixed nav.
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
    // Optimistic active update so the chip lights immediately.
    setActive(id);
  }

  return (
    <aside
      aria-label="Compare sections"
      style={{
        position: "sticky",
        top: 88,
        alignSelf: "start",
        width: 220,
        flexShrink: 0,
      }}
    >
      <p
        style={{
          fontFamily: "Geist Mono, monospace",
          fontSize: 10,
          fontWeight: 600,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#71717a",
          marginBottom: 12,
          paddingLeft: 12,
        }}
      >
        Sections
      </p>
      <nav style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {ITEMS.map((item) => {
          const isActive = active === item.id;
          return (
            <SidebarRow
              key={item.id}
              item={item}
              active={isActive}
              onClick={(e) => handleClick(e, item.id)}
            />
          );
        })}
      </nav>
    </aside>
  );
}

function SidebarRow({
  item,
  active,
  onClick,
}: {
  item: (typeof ITEMS)[number];
  active: boolean;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) {
  const [hover, setHover] = useState(false);
  const { id, label, Icon } = item;
  return (
    <a
      href={`#${id}`}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        height: 36,
        paddingLeft: 12,
        paddingRight: 12,
        background: active
          ? "rgba(255,255,255,0.04)"
          : hover
            ? "rgba(255,255,255,0.02)"
            : "transparent",
        borderLeft: `2px solid ${active ? "#0dbe82" : "transparent"}`,
        borderRadius: 3,
        color: active ? "#e4e4e7" : hover ? "#d4d4d8" : "#a1a1aa",
        fontFamily: "Geist Mono, monospace",
        fontSize: 12,
        fontWeight: active ? 600 : 500,
        letterSpacing: "0.04em",
        textDecoration: "none",
        cursor: "pointer",
        transform: hover && !active ? "translateX(2px)" : "translateX(0)",
        transition: `background 150ms ${SNAP}, color 150ms ${SNAP}, border-color 150ms ${SNAP}, transform 150ms ${SNAP}`,
      }}
    >
      <Icon
        size={14}
        strokeWidth={1.75}
        color={active ? "#0dbe82" : "currentColor"}
        style={{ flexShrink: 0, transition: `color 150ms ${SNAP}` }}
      />
      {label}
    </a>
  );
}
