import { motion } from 'motion/react'

const cards = [
  {
    category: 'Partnership',
    title: 'Bybit Brand Ambassador',
    body: 'Official Brand Ambassador for Bybit in Romania. Events, affiliates, sponsorships.',
    accent: '#06b6d4',
  },
  {
    category: 'Flagship',
    title: 'Web3 Startup Competition',
    body: 'Banking 4.0 × Banca Transilvania (2023) — €152,000+. NBX Warsaw (2025) — €287,000+. 30+ startups shaped.',
    accent: '#8b5cf6',
  },
  {
    category: 'Conferences',
    title: 'Global Presence',
    body: 'TOKEN2049 · EBC · NFT Show Europe · Blockchain Economy Summit · NBX Warsaw · Crypto Gibraltar · GoTech World.',
    accent: '#06b6d4',
  },
  {
    category: 'Press',
    title: 'Media & Publications',
    body: 'The Paypers · Agerpres · OTcrypto · HackerNoon · Crypto.ro · NoCash.ro · Clutch.co · Qwoted — real editorial coverage.',
    accent: '#8b5cf6',
  },
  {
    category: 'Real-World Execution',
    title: 'Crypto Payments at Scale',
    body: 'Beach, Please! 2024 — 120,000+ attendees. LUNU · Global Records · Bybit · Nuba. First crypto POS deployment in Romania.',
    accent: '#06b6d4',
  },
  {
    category: 'Network',
    title: '60+ Partners & 4,000+ VCs',
    body: 'Curated ecosystem built over 7+ years. Capital access, strategic introductions, and market presence that compounds.',
    accent: '#8b5cf6',
  },
]

export default function Ecosystem() {
  return (
    <section
      id="ecosystem"
      className="relative py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #030712 0%, #06101d 100%)' }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: 900, height: 500,
          background: 'radial-gradient(ellipse, rgba(6,182,212,0.05) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header — only Track Record + The Ecosystem */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="font-semibold tracking-[0.25em] uppercase mb-5"
            style={{ color: '#22d3ee', fontSize: '0.85rem' }}
          >
            Track Record
          </p>
          <h2
            className="font-bold mx-auto"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#f8fafc', letterSpacing: '-0.02em', lineHeight: 1.05 }}
          >
            The Ecosystem
          </h2>
        </motion.div>

        {/* Cards — bigger text, bigger padding, centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className="group relative rounded-2xl p-10 flex flex-col cursor-default transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.07)',
                backdropFilter: 'blur(12px)',
                minHeight: 280,
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              whileHover={{
                borderColor: `${card.accent}40`,
                boxShadow: `0 0 35px ${card.accent}14, 0 8px 32px rgba(0,0,0,0.35)`,
                y: -4,
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-px rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${card.accent}, transparent)` }}
              />

              <p
                className="font-semibold tracking-[0.25em] uppercase mb-5"
                style={{ color: card.accent, fontSize: '0.78rem' }}
              >
                {card.category}
              </p>

              <h3
                className="font-bold mb-5"
                style={{ fontSize: '1.5rem', color: '#f8fafc', lineHeight: 1.25 }}
              >
                {card.title}
              </h3>

              <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: 1.7 }}>
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
