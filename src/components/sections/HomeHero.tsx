import { motion } from 'motion/react'
import ThreeHero from '../ThreeHero'

const DASHBOARD_URL = 'https://app.coinsiglieri.com'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export default function HomeHero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern"
      style={{ background: '#09090b' }}
    >
      <ThreeHero className="absolute inset-0 w-full h-full" style={{ opacity: 0.7 }} />

      {/* Ambient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="orb-1 absolute rounded-full"
          style={{
            width: 700, height: 700,
            top: '-10%', left: '-15%',
            background: 'radial-gradient(circle, rgba(24,180,212,0.08) 0%, transparent 65%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="orb-2 absolute rounded-full"
          style={{
            width: 800, height: 800,
            bottom: '-20%', right: '-15%',
            background: 'radial-gradient(circle, rgba(79,70,229,0.06) 0%, transparent 65%)',
            filter: 'blur(100px)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-32 pt-40">
        <motion.div variants={container} initial="hidden" animate="visible">
          {/* Eyebrow */}
          <motion.p
            variants={item}
            className="mb-10 uppercase"
            style={{
              fontFamily: 'Geist Mono, monospace',
              fontSize: '0.78rem',
              letterSpacing: '0.22em',
              color: '#71717a',
            }}
          >
            AI-Native Financial Infrastructure
          </motion.p>

          {/* H1 */}
          <motion.h1
            variants={item}
            className="font-semibold mb-8"
            style={{
              fontFamily: 'Geist, sans-serif',
              fontSize: 'clamp(2.4rem, 6.4vw, 5rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.035em',
              color: '#e4e4e7',
            }}
          >
            Everything in financial markets
            <br />
            was built for humans.
          </motion.h1>

          {/* Body */}
          <motion.p
            variants={item}
            className="max-w-2xl mx-auto mb-10"
            style={{
              fontFamily: 'Geist, sans-serif',
              fontSize: 'clamp(1.1rem, 1.6vw, 1.4rem)',
              color: '#a1a1aa',
              lineHeight: 1.5,
            }}
          >
            We&rsquo;re building for what comes next.
          </motion.p>

          {/* Mono line */}
          <motion.p
            variants={item}
            className="mb-12"
            style={{
              fontFamily: 'Geist Mono, monospace',
              fontSize: '0.82rem',
              color: '#71717a',
              letterSpacing: '0.02em',
            }}
          >
            In the market since 2017. · Crypto. Web3. Now AI.
          </motion.p>

          {/* CTA */}
          <motion.div variants={item} className="flex justify-center">
            <a
              href={DASHBOARD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold transition-all duration-300 cursor-pointer"
              style={{
                fontFamily: 'Geist, sans-serif',
                background: '#18b4d4',
                color: '#09090b',
                border: 'none',
                padding: '1.1rem 2.4rem',
                fontSize: '1rem',
                borderRadius: 10,
                textDecoration: 'none',
                boxShadow: '0 0 32px rgba(24,180,212,0.35)',
                display: 'inline-block',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = '#22c4e5'
                el.style.boxShadow = '0 0 48px rgba(24,180,212,0.6)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = '#18b4d4'
                el.style.boxShadow = '0 0 32px rgba(24,180,212,0.35)'
              }}
            >
              Open the dashboard →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
