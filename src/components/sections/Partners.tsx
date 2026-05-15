import { motion } from 'motion/react'

const logos = [
  'NoCash', 'Banca Transilvania', 'TOKEN2049', 'EBC Barcelona', 'NFT Show Europe',
  'Clutch.co', 'Qwoted', 'Bybit', 'LUNU', 'Nuba', 'Global Records',
  'Tokero', 'Crypto Vineri', 'ClusterPower', 'Banking 4.0',
  'NBX Warsaw', 'The Paypers', 'Crypto.ro', 'Agerpres', 'HackerNoon',
]

function LogoItem({ name }: { name: string }) {
  return (
    <div
      className="flex-none flex items-center justify-center px-7 py-3 rounded-xl mx-2 transition-all duration-300 cursor-default"
      style={{
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.05)',
        minWidth: 148,
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.background = 'rgba(91,168,181,0.05)'
        el.style.borderColor = 'rgba(91,168,181,0.18)'
        const span = el.querySelector('span') as HTMLElement
        if (span) span.style.color = '#8892a4'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.background = 'rgba(255,255,255,0.02)'
        el.style.borderColor = 'rgba(255,255,255,0.05)'
        const span = el.querySelector('span') as HTMLElement
        if (span) span.style.color = '#2d3748'
      }}
    >
      <span
        className="text-sm font-semibold tracking-wide transition-colors duration-300"
        style={{ color: '#2d3748', fontFamily: 'Geist, sans-serif', whiteSpace: 'nowrap' }}
      >
        {name}
      </span>
    </div>
  )
}

export default function Partners() {
  const doubled = [...logos, ...logos]

  return (
    <section
      id="partners"
      className="py-24 overflow-hidden relative"
      style={{ background: 'linear-gradient(180deg, #0a0e1a 0%, #06101c 50%, #0a0e1a 100%)' }}
    >
      {/* Edge fades */}
      <div className="absolute top-0 bottom-0 left-0 w-28 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, #0a0e1a, transparent)' }} />
      <div className="absolute top-0 bottom-0 right-0 w-28 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(270deg, #0a0e1a, transparent)' }} />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-14">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: '#5BA8B5' }}>
            Partners & Media
          </p>
          <h2
            className="font-bold"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: '#f8fafc', letterSpacing: '-0.02em' }}
          >
            Part of the Ecosystem
          </h2>
        </motion.div>
      </div>

      {/* Row 1 — forward */}
      <div className="flex mb-5 overflow-hidden">
        <div className="flex animate-marquee">
          {doubled.map((name, i) => <LogoItem key={`a-${i}`} name={name} />)}
        </div>
      </div>

      {/* Row 2 — reverse */}
      <div className="flex overflow-hidden">
        <div className="flex animate-marquee-slow" style={{ animationDirection: 'reverse' }}>
          {[...doubled].reverse().map((name, i) => <LogoItem key={`b-${i}`} name={name} />)}
        </div>
      </div>
    </section>
  )
}
