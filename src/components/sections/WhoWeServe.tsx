import { motion } from 'motion/react'

const chips = [
  'Web3 startups', 'Fashion & luxury', 'Real estate', 'Payments / ATMs',
  'Sport clubs', 'Traditional Web2 businesses', 'DeFi protocols',
  'NFT projects', 'DAO governance', 'Fintech ventures',
]

export default function WhoWeServe() {
  return (
    <section
      id="who-we-serve"
      className="relative section-divide"
      style={{ background: '#030712' }}
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: '#a78bfa' }}>
            Who We Work With
          </p>
          <h2
            className="font-bold mb-5"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: '#f8fafc', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}
          >
            Built for operators, founders, and visionaries
          </h2>
          <p className="leading-relaxed max-w-2xl mx-auto mb-14" style={{ color: '#64748b', fontSize: '1.125rem' }}>
            From crypto-native founders to established traditional businesses —
            we operate across industries where execution matters.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }}
        >
          {chips.map((chip) => (
            <motion.span
              key={chip}
              className="px-6 py-3 rounded-full font-medium cursor-default transition-all duration-300"
              style={{
                fontSize: '1rem',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: '#94a3b8',
              }}
              variants={{
                hidden: { opacity: 0, scale: 0.88 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
              }}
              whileHover={{
                background: 'rgba(6,182,212,0.07)',
                borderColor: 'rgba(6,182,212,0.28)',
                color: '#22d3ee',
                scale: 1.03,
              }}
            >
              {chip}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
