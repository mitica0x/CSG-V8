import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Blockchain & Web3",
    description:
      "EVM/non-EVM chains, L0/L1/L2 architecture, smart contract development and audits. Full-stack blockchain infrastructure.",
    tags: ["EVM", "L1/L2", "Smart Contracts", "Audits"],
    accent: "#5BA8B5",
  },
  {
    number: "02",
    title: "Products",
    description:
      "Whitepaper design, DeFi protocols, NFT systems, token engineering, MVPs, wallets, and exchange platforms.",
    tags: ["Whitepaper", "DeFi", "NFT", "MVP", "Wallet"],
    accent: "#7B5EA7",
  },
  {
    number: "03",
    title: "Strategic Advisory & Ops",
    description:
      "Proof of concept, project management, go-to-market strategy, investor relations and ecosystem positioning.",
    tags: ["PoC", "GTM", "Investor Relations", "Strategy"],
    accent: "#5BA8B5",
  },
  {
    number: "04",
    title: "Business & Legal",
    description:
      "VASP/EMI/PSP frameworks, SAFT agreements, KYC/AML strategy, GDPR compliance, and licensing across jurisdictions.",
    tags: ["VASP", "KYC/AML", "GDPR", "SAFT", "EMI"],
    accent: "#7B5EA7",
  },
  {
    number: "05",
    title: "Marketing & PR",
    description:
      "Branding, storytelling, video explainers, social media, ORM, press releases, influencer campaigns, and advertising.",
    tags: ["Branding", "Social", "ORM", "Influencer", "Ads"],
    accent: "#5BA8B5",
  },
  {
    number: "06",
    title: "Fundraising",
    description:
      "ICO/STO/IEO/IDO structuring, seed/OTC/public rounds, pitch to 2,200+ VCs, and agreement documentation.",
    tags: ["ICO", "STO", "IDO", "VCs", "Seed"],
    accent: "#7B5EA7",
  },
  {
    number: "07",
    title: "Brand Awareness",
    description:
      "Summit presence, AMAs, interviews, live events, supercharged networking, and organic traffic strategies.",
    tags: ["Summits", "AMAs", "Events", "Networking"],
    accent: "#5BA8B5",
  },
  {
    number: "08",
    title: "Digitalization",
    description:
      "Full-stack websites, dApps, cloud infrastructure, cybersecurity, AI-powered tools, and ERP integration.",
    tags: ["dApps", "Cloud", "AI", "Cybersecurity", "ERP"],
    accent: "#7B5EA7",
  },
];

const MASK_FADE_RIGHT = "linear-gradient(to right, black 85%, transparent 100%)";

export default function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [hintVisible, setHintVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setHintVisible(false), 2000);
    return () => clearTimeout(t);
  }, []);

  const onScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setScrollLeft(el.scrollLeft);
    setScrollProgress(max > 0 ? (el.scrollLeft / max) * 100 : 0);
  };

  return (
    <section
      id="services"
      className="py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0a0e1a 0%, #07101f 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header — left-aligned, no arrows */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-5"
            style={{ color: "#5BA8B5" }}
          >
            Capabilities
          </p>
          <h2
            className="font-bold mb-5"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              color: "#f8fafc",
              letterSpacing: "-0.02em",
            }}
          >
            Services & <span className="gradient-cyan">Deliverables</span>
          </h2>
          <p className="max-w-sm text-base leading-relaxed" style={{ color: "#8892a4" }}>
            C<span style={{ color: "#5BA8B5" }}>0</span>insiglieri delivers turnkey support across
            strategy, product, legal, fundraising, infrastructure, marketing, and real-world
            execution.
          </p>
        </motion.div>

        {/* Cards — drag scroll with right-edge mask fade */}
        <div className="relative">
          {scrollLeft > 20 && (
            <button
              type="button"
              aria-label="Scroll left"
              onClick={() => scrollRef.current?.scrollBy({ left: -420, behavior: "smooth" })}
              style={{
                position: "absolute",
                left: 10,
                top: "50%",
                transform: "translateY(-50%)",
                color: "var(--cs-cyan, #5BA8B5)",
                opacity: 0.35,
                pointerEvents: "auto",
                zIndex: 3,
                cursor: "pointer",
                background: "none",
                border: "none",
                padding: 0,
                display: "flex",
                alignItems: "center",
                transition: "opacity 200ms ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.75";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "0.35";
              }}
            >
              <ChevronLeft size={20} />
            </button>
          )}
          <div
            ref={scrollRef}
            onScroll={onScroll}
            className="flex gap-6 pb-8 hide-scrollbar"
            style={{
              overflowX: "auto",
              cursor: "grab",
              scrollPadding: "0 24px",
              paddingLeft: "8px",
              maskImage: MASK_FADE_RIGHT,
              WebkitMaskImage: MASK_FADE_RIGHT,
            }}
            onMouseDown={(e) => {
              const el = scrollRef.current!;
              const startX = e.pageX - el.offsetLeft;
              const scrollLeft = el.scrollLeft;
              const onMove = (ev: MouseEvent) => {
                el.scrollLeft = scrollLeft - (ev.pageX - el.offsetLeft - startX);
              };
              const onUp = () => {
                el.style.cursor = "grab";
                document.removeEventListener("mousemove", onMove);
                document.removeEventListener("mouseup", onUp);
              };
              el.style.cursor = "grabbing";
              document.addEventListener("mousemove", onMove);
              document.addEventListener("mouseup", onUp);
            }}
          >
            {services.map((svc, i) => (
              <motion.div
                key={svc.number}
                className="flex-none flex flex-col rounded-xl p-8 transition-all duration-300"
                style={{
                  width: 350,
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  backdropFilter: "blur(12px)",
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: Math.min(i * 0.06, 0.3) }}
                whileHover={{
                  scale: 1.02,
                  borderColor: `${svc.accent}40`,
                  boxShadow: `0 0 30px ${svc.accent}12`,
                  y: -3,
                }}
              >
                <p
                  className="text-5xl font-bold mb-5 opacity-15"
                  style={{ fontFamily: "Geist, sans-serif", color: svc.accent, lineHeight: 1 }}
                >
                  {svc.number}
                </p>
                <h3
                  className="font-bold mb-4"
                  style={{ fontSize: "1rem", color: "#f8fafc", lineHeight: 1.35 }}
                >
                  {svc.title}
                </h3>
                <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "#8892a4" }}>
                  {svc.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {svc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded text-xs font-medium"
                      style={{
                        background: `${svc.accent}10`,
                        color: svc.accent,
                        border: `1px solid ${svc.accent}22`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {scrollProgress < 95 && (
            <button
              type="button"
              aria-label="Scroll right"
              onClick={() => scrollRef.current?.scrollBy({ left: 420, behavior: "smooth" })}
              style={{
                position: "absolute",
                right: 10,
                top: "50%",
                transform: "translateY(-50%)",
                color: "var(--cs-cyan, #5BA8B5)",
                opacity: 0.35,
                pointerEvents: "auto",
                zIndex: 3,
                cursor: "pointer",
                background: "none",
                border: "none",
                padding: 0,
                display: "flex",
                alignItems: "center",
                transition: "opacity 200ms ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.75";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "0.35";
              }}
            >
              <ChevronRight size={20} />
            </button>
          )}

          {/* Scrubber track */}
          <div
            style={{
              height: 2,
              background: "rgba(255,255,255,0.08)",
              borderRadius: 2,
              width: "100%",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: 2,
                background: "var(--cs-cyan, #5BA8B5)",
                borderRadius: 2,
                width: `${scrollProgress}%`,
                transition: "width 80ms linear",
              }}
            />
          </div>

          {/* Hint — fades out after 2s */}
          <span
            style={{
              fontSize: 9,
              letterSpacing: "0.15em",
              color: "rgba(255,255,255,0.2)",
              textTransform: "uppercase",
              marginTop: 6,
              display: "block",
              opacity: hintVisible ? 0.4 : 0,
              transition: "opacity 600ms ease",
            }}
          >
            drag to explore
          </span>
        </div>

        {/* What we offer — turnkey keywords */}
        <motion.div
          className="mt-16 pt-10"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-6 text-center"
            style={{ color: "#334155" }}
          >
            What We Offer (Turnkey)
          </p>
          <div className="flex flex-wrap justify-center gap-2.5 mb-8">
            {[
              "Project Management",
              "Web3 Legal Expertise",
              "MiCA Licensing",
              "Crypto POS Payments",
              "Crypto Marketing",
              "KYC/AML Solution",
              "Tokenomics",
              "Smart Contracts",
              "Litepaper / Whitepaper",
              "Fundraising Strategy",
              "Token Listing Strategy",
            ].map((item) => (
              <span
                key={item}
                className="px-3 py-1.5 rounded-lg text-xs font-medium"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  color: "#8892a4",
                }}
              >
                {item}
              </span>
            ))}
          </div>
          <p className="text-center text-sm font-medium" style={{ color: "#8892a4" }}>
            From structure to scale — clarity, compliance, and execution.
          </p>
        </motion.div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={() =>
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="group inline-flex items-center gap-2 text-sm font-semibold cursor-pointer transition-colors duration-200"
            style={{ color: "#5BA8B5", background: "none", border: "none" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#67e8f9")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#5BA8B5")}
          >
            Interested? Let's talk
            <ChevronRight size={15} className="transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
