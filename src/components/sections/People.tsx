import { motion } from 'motion/react'
import { ExternalLink, Link2, AtSign } from 'lucide-react'

const mediaAppearances = [
  { label: 'Arena Finanțelor — OTcrypto', href: '#' },
  { label: 'The Paypers Interview', href: '#' },
  { label: 'NBX Warsaw 2025 — Speaker', href: '#' },
  { label: 'NFT Show Europe — Panel', href: '#' },
  { label: 'HackerNoon — Op-ed', href: '#' },
  { label: 'European Blockchain Convention Barcelona', href: '#' },
]

const team = [
  { name: 'Oana', role: 'Finance & Operations' },
  { name: 'Mihai', role: 'Engineering' },
  { name: 'Iulia', role: 'Operations' },
]

export default function People() {
  return (
    <section
      id="people"
      className="py-32 relative overflow-hidden"
      style={{ background: '#030712' }}
    >
      <div
        className="absolute left-0 top-0 pointer-events-none"
        style={{
          width: 700, height: 700,
          background: 'radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 70%)',
          filter: 'blur(70px)',
          transform: 'translate(-35%, -20%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: '#22d3ee' }}>
            The Team
          </p>
          <h2
            className="font-bold"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#f8fafc', letterSpacing: '-0.02em' }}
          >
            People & Presence
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Founder card */}
          <motion.div
            className="rounded-2xl p-10 relative overflow-hidden"
            style={{
              background: 'rgba(6,182,212,0.025)',
              border: '1px solid rgba(6,182,212,0.14)',
            }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="absolute top-0 right-0 pointer-events-none"
              style={{
                width: 300, height: 300,
                background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)',
              }}
            />

            <div className="relative">
              {/* Avatar */}
              <div
                className="w-16 h-16 rounded-2xl mb-7 flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(6,182,212,0.18), rgba(139,92,246,0.18))',
                  border: '1px solid rgba(6,182,212,0.28)',
                }}
              >
                <span style={{ fontSize: '1.4rem', fontFamily: 'Geist, sans-serif', fontWeight: 700, color: '#22d3ee' }}>
                  MM
                </span>
              </div>

              <h3
                className="font-bold mb-1.5"
                style={{ fontSize: '1.4rem', color: '#f8fafc', fontFamily: 'Geist, sans-serif' }}
              >
                Madalin Muraretiu
              </h3>
              <p className="text-sm font-medium mb-1" style={{ color: '#22d3ee' }}>
                Co-Founder · Blockchain Alchemist
              </p>
              <p className="text-xs mb-7" style={{ color: '#475569' }}>
                Operating in Web3 since 2017 · Bucharest, Romania
              </p>

              <p className="text-sm leading-relaxed mb-8" style={{ color: '#64748b' }}>
                Seven years building at the intersection of blockchain, strategy, and real-world
                execution. From whitepaper to live POS terminal at a 120k-person festival.
                Ecosystem connector, strategic operator, and builder of bridges between Web3
                vision and market reality.
              </p>

              {/* Media appearances */}
              <div className="mb-8">
                <p
                  className="text-xs uppercase tracking-[0.18em] mb-4"
                  style={{ color: '#334155' }}
                >
                  Media Appearances
                </p>
                <div className="space-y-2.5">
                  {mediaAppearances.map((m) => (
                    <a
                      key={m.label}
                      href={m.href}
                      className="group/link flex items-center gap-2.5 text-xs transition-colors duration-200"
                      style={{ color: '#475569', textDecoration: 'none' }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#94a3b8')}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#475569')}
                    >
                      <span style={{ color: '#22d3ee', fontSize: '0.45rem' }}>●</span>
                      {m.label}
                      <ExternalLink size={10} className="ml-auto opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Socials */}
              <div className="flex gap-3">
                <a
                  href="https://linkedin.com/in/madalin-muraretiu-b8bb74105/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-medium transition-all duration-200"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: '#64748b',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = 'rgba(6,182,212,0.3)'
                    el.style.color = '#f8fafc'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = 'rgba(255,255,255,0.08)'
                    el.style.color = '#64748b'
                  }}
                >
                  <Link2 size={12} />
                  LinkedIn
                </a>
                <a
                  href="https://x.com/COINsiglieriRO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-medium transition-all duration-200"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: '#64748b',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = 'rgba(6,182,212,0.3)'
                    el.style.color = '#f8fafc'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = 'rgba(255,255,255,0.08)'
                    el.style.color = '#64748b'
                  }}
                >
                  <AtSign size={12} />
                  X.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right column */}
          <div className="space-y-6">
            {/* Team */}
            <motion.div
              className="rounded-xl p-8"
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.08 }}
            >
              <p className="text-xs uppercase tracking-[0.18em] mb-6" style={{ color: '#334155' }}>
                Core Team
              </p>
              <div className="space-y-4">
                {team.map((m) => (
                  <div
                    key={m.name}
                    className="flex items-center justify-between py-3 border-b"
                    style={{ borderColor: 'rgba(255,255,255,0.05)' }}
                  >
                    <span className="font-semibold text-sm" style={{ color: '#f8fafc' }}>{m.name}</span>
                    <span className="text-xs" style={{ color: '#475569' }}>{m.role}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Co-founder note */}
            <motion.div
              className="rounded-xl p-7"
              style={{
                background: 'rgba(139,92,246,0.03)',
                border: '1px solid rgba(139,92,246,0.1)',
              }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.14 }}
            >
              <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>
                <span style={{ color: '#a78bfa', fontWeight: 600 }}>Co-founded</span> by{' '}
                <span style={{ color: '#94a3b8' }}>Ionuț Vîlceanu</span>, who led operations
                and international initiatives and is currently Lead Marketing Manager at Bybit EU.{' '}
                <a
                  href="https://www.ionutvilceanu.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#475569', textDecoration: 'none' }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#94a3b8')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#475569')}
                >
                  www.ionutvilceanu.com
                </a>
              </p>
            </motion.div>

            {/* Global footprint */}
            <motion.div
              className="rounded-xl p-7"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p className="text-xs uppercase tracking-[0.18em] mb-5" style={{ color: '#334155' }}>
                Global Footprint
              </p>
              <div className="flex flex-wrap gap-2.5">
                {['Singapore', 'Warsaw', 'Barcelona', 'Valencia', 'Bucharest', 'Gibraltar', 'Dubai'].map((city) => (
                  <span
                    key={city}
                    className="px-3 py-1.5 rounded-full text-xs font-medium"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.07)',
                      color: '#64748b',
                    }}
                  >
                    {city}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
