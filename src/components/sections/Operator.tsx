import { motion } from 'motion/react'

export default function Operator() {
  return (
    <section
      id="operator"
      className="relative py-28"
      style={{ background: '#09090b', borderTop: '1px solid rgba(255,255,255,0.07)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p
              className="mb-6 uppercase"
              style={{
                fontFamily: 'Geist Mono, monospace',
                fontSize: '0.74rem',
                letterSpacing: '0.22em',
                color: '#71717a',
              }}
            >
              Operator Identity
            </p>
            <h2
              className="font-semibold mb-6"
              style={{
                fontFamily: 'Geist, sans-serif',
                fontSize: 'clamp(1.8rem, 3.6vw, 2.8rem)',
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                color: '#e4e4e7',
              }}
            >
              We brought live crypto payments to 120,000 people.
            </h2>
            <p
              style={{
                fontFamily: 'Geist Mono, monospace',
                fontSize: '0.82rem',
                color: '#a1a1aa',
                letterSpacing: '0.02em',
                lineHeight: 1.7,
              }}
            >
              LUNU infrastructure. Bybit-backed. First time in Romania.
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              borderLeft: '1px solid rgba(255,255,255,0.07)',
              paddingLeft: '2.4rem',
            }}
          >
            <p
              className="font-semibold mb-6"
              style={{
                fontFamily: 'Geist, sans-serif',
                fontSize: 'clamp(1.8rem, 3.4vw, 2.6rem)',
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                color: '#e4e4e7',
              }}
            >
              We showed up. We executed.
            </p>
            <p
              style={{
                fontFamily: 'Geist Mono, monospace',
                fontSize: '0.82rem',
                color: '#71717a',
                letterSpacing: '0.02em',
              }}
            >
              Operators who build what they use.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
