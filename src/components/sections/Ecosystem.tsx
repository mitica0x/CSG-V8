import { motion } from 'motion/react'

const cards = [
  {
    category: 'Partnership',
    title: 'Bybit Brand Ambassador',
    body: 'Official Brand Ambassador for Bybit in Romania since 2024. Managing events, affiliate programs, sponsorships. Beach, Please! 2024.',
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
    body: 'TOKEN2049 Singapore · EBC Barcelona · NFT Show Europe Valencia · Blockchain Economy Summit · NBX Warsaw · Crypto Gibraltar · GoTech World.',
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
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: '#22d3ee' }}>
            Track Record
          </p>
          <h2
            className="font-bold mb-5"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', color: '#f8fafc', letterSpacing: '-0.02em' }}
          >
            In the Ecosystem
          </h2>
          <p className="text-lg" style={{ color: '#64748b' }}>
            Where we've been. What we've built.
          </p>
        </motion.div>

        {/* Cards — equal-height grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className="group relative rounded-xl p-8 flex flex-col cursor-default transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.06)',
                backdropFilter: 'blur(12px)',
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
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-px rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${card.accent}, transparent)` }}
              />

              <p
                className="text-xs font-semibold tracking-[0.2em] uppercase mb-4"
                style={{ color: card.accent }}
              >
                {card.category}
              </p>

              <h3
                className="font-bold mb-4"
                style={{ fontSize: '1.1rem', color: '#f8fafc', lineHeight: 1.35 }}
              >
                {card.title}
              </h3>

              <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
