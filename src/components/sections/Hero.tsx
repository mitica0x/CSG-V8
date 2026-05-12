import { lazy, Suspense } from 'react'
import { motion } from 'motion/react'
import { ArrowRight, ChevronDown } from 'lucide-react'

const ThreeHero = lazy(() => import('../ThreeHero'))

const trustPills = [
  'Crypto Licensing', 'Smart Contracts', 'KYC/AML', 'Tokenomics', 'MVP',
  'Fundraising', 'Legal', 'Marketing', 'Events', 'Networking', 'Crypto POS', 'Web3 Startup Competition',
]

const partners = [
  'Bybit', 'LUNU', 'Banca Transilvania', 'NBX Warsaw',
  'TOKEN2049', 'European Blockchain Convention', 'Global Records',
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern"
      style={{ background: 'linear-gradient(160deg, #030712 0%, #060d1c 60%, #030712 100%)' }}
    >
      {/* Three.js blob — right side, behind text */}
      <Suspense fallback={<div style={{ background: '#030712', height: '100vh' }} />}>
        <ThreeHero
          className="absolute inset-0 w-full h-full"
          style={{ opacity: 0.85 }}
        />
      </Suspense>

      {/* Static orbs for depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="orb-1 absolute rounded-full"
          style={{
            width: 700, height: 700,
            top: '-5%', left: '-15%',
            background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 65%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="orb-2 absolute rounded-full"
          style={{
            width: 800, height: 800,
            bottom: '-15%', right: '-15%',
            background: 'radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 65%)',
            filter: 'blur(100px)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-24 pt-36">
        <motion.div variants={container} initial="hidden" animate="visible">

          {/* Heading */}
          <motion.h1
            variants={item}
            className="font-bold leading-none tracking-tight mb-12"
            style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)', letterSpacing: '-0.02em' }}
          >
            <span style={{ color: '#f8fafc' }}>COIN</span>
            <span
              className="gradient-cyan"
              style={{ filter: 'drop-shadow(0 0 40px rgba(6,182,212,0.5))' }}
            >
              siglieri
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={item}
            className="font-medium mb-6"
            style={{
              fontSize: 'clamp(1.35rem, 3vw, 1.85rem)',
              color: '#94a3b8',
              lineHeight: 1.4,
              letterSpacing: '-0.01em',
            }}
          >
            Bridging the Gap between{' '}
            <span style={{ color: '#f8fafc' }}>Vision</span>{' '}
            and{' '}
            <span className="gradient-cyan">Execution</span>
          </motion.p>

          {/* Description */}
          <motion.p
            variants={item}
            className="max-w-2xl mx-auto mb-8 leading-relaxed"
            style={{ color: '#64748b', fontSize: '1.0625rem' }}
          >
            The one-stop-web3-shop — from idea to execution across strategy, legal and licensing,
            development and fundraising as well as marketing and go to market.
          </motion.p>

          {/* Sub-tagline */}
          <motion.p
            variants={item}
            className="font-semibold mb-12"
            style={{ fontSize: '1.0625rem', color: '#94a3b8', letterSpacing: '0.01em' }}
          >
            Curated experts. One management. Synced vision.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap justify-center gap-4 mb-16">
            <button
              onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap"
              style={{
                fontSize: '1rem',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: '#f8fafc',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'rgba(255,255,255,0.09)'
                el.style.borderColor = 'rgba(255,255,255,0.22)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'rgba(255,255,255,0.05)'
                el.style.borderColor = 'rgba(255,255,255,0.12)'
              }}
            >
              Explore Services
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3.5 rounded-xl font-bold cursor-pointer transition-all duration-300 whitespace-nowrap"
              style={{
                fontSize: '1rem',
                background: 'linear-gradient(135deg, #06b6d4, #0ea5e9)',
                color: '#030712',
                border: 'none',
                boxShadow: '0 0 28px rgba(6,182,212,0.45)',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = '0 0 50px rgba(6,182,212,0.7)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = '0 0 28px rgba(6,182,212,0.45)')}
            >
              Start a Project
            </button>
          </motion.div>

          {/* Trust pills */}
          <motion.div variants={item} className="flex flex-wrap justify-center gap-2 mb-12">
            {trustPills.map((pill) => (
              <span
                key={pill}
                className="px-3.5 py-1.5 rounded-full font-medium"
                style={{
                  fontSize: '0.9375rem',
                  letterSpacing: '0.01em',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  color: '#475569',
                }}
              >
                {pill}
              </span>
            ))}
          </motion.div>

          {/* Partner names */}
          <motion.div variants={item} className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 mb-6">
            {partners.map((p) => (
              <span
                key={p}
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: '#2d3748' }}
              >
                {p}
              </span>
            ))}
          </motion.div>

          <motion.p variants={item} className="italic" style={{ fontSize: '0.9375rem', color: '#475569' }}>
            Early movers. Ecosystem operators. Execution-driven since 2017.
          </motion.p>

        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
        style={{ background: 'none', border: 'none', color: '#2d3748' }}
        onClick={() => document.querySelector('#ecosystem')?.scrollIntoView({ behavior: 'smooth' })}
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: [0, 7, 0] }}
        transition={{ opacity: { duration: 1, delay: 1 }, y: { repeat: Infinity, duration: 2.2, ease: 'easeInOut', delay: 1 } }}
      >
        <ChevronDown size={20} />
      </motion.button>
    </section>
  )
}
