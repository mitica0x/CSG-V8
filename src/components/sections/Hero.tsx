import { motion } from 'motion/react'
import { ArrowRight, ChevronDown } from 'lucide-react'
import ThreeHero from '../ThreeHero'

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
      style={{ background: 'linear-gradient(160deg, #0a0e1a 0%, #060d1c 60%, #0a0e1a 100%)' }}
    >
      {/* Three.js blob — right side, behind text */}
      <ThreeHero
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.85 }}
      />

      {/* Static orbs for depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="orb-1 absolute rounded-full"
          style={{
            width: 700, height: 700,
            top: '-5%', left: '-15%',
            background: 'radial-gradient(circle, rgba(91,168,181,0.08) 0%, transparent 65%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="orb-2 absolute rounded-full"
          style={{
            width: 800, height: 800,
            bottom: '-15%', right: '-15%',
            background: 'radial-gradient(circle, rgba(123,94,167,0.07) 0%, transparent 65%)',
            filter: 'blur(100px)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-32 pt-40">
        <motion.div variants={container} initial="hidden" animate="visible">

          {/* Heading */}
          <motion.h1
            variants={item}
            className="font-bold leading-none tracking-tight mb-10"
            style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)', letterSpacing: '-0.02em' }}
          >
            <span style={{ color: '#f8fafc' }}>COIN</span>
            <span
              className="gradient-cyan"
              style={{ filter: 'drop-shadow(0 0 40px rgba(91,168,181,0.5))' }}
            >
              siglieri
            </span>
          </motion.h1>

          {/* Tagline (motto) — bigger */}
          <motion.p
            variants={item}
            className="font-semibold mb-6"
            style={{
              fontSize: 'clamp(1.5rem, 3.6vw, 2.4rem)',
              color: '#cbd5e1',
              lineHeight: 1.25,
              letterSpacing: '-0.015em',
            }}
          >
            AI-native financial infrastructure.
          </motion.p>

          {/* Description — centered under motto */}
          <motion.p
            variants={item}
            className="max-w-3xl mx-auto mb-10 leading-relaxed text-center"
            style={{ color: '#8892a4', fontSize: 'clamp(1rem, 1.4vw, 1.15rem)' }}
          >
            Building AI-native financial infrastructure since 2017.
          </motion.p>

          {/* CTAs — bigger, more readable */}
          <motion.div variants={item} className="flex flex-wrap justify-center gap-5 mb-14">
            <button
              onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4.5 rounded-xl text-base font-semibold transition-all duration-300 cursor-pointer"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.18)',
                color: '#f8fafc',
                padding: '1.05rem 2.4rem',
                fontSize: '1rem',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'rgba(255,255,255,0.09)'
                el.style.borderColor = 'rgba(255,255,255,0.3)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'rgba(255,255,255,0.05)'
                el.style.borderColor = 'rgba(255,255,255,0.18)'
              }}
            >
              Explore Services
            </button>

            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="rounded-xl font-bold cursor-pointer transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #5BA8B5, #0ea5e9)',
                color: '#0a0e1a',
                border: 'none',
                boxShadow: '0 0 28px rgba(91,168,181,0.45)',
                padding: '1.05rem 2.4rem',
                fontSize: '1rem',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = '0 0 50px rgba(91,168,181,0.7)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = '0 0 28px rgba(91,168,181,0.45)')}
            >
              Start a Project
            </button>
          </motion.div>

          {/* Trust pills — slightly bigger, more readable */}
          <motion.div variants={item} className="flex flex-wrap justify-center gap-2.5 mb-10">
            {trustPills.map((pill) => (
              <span
                key={pill}
                className="px-4 py-1.5 rounded-full text-sm font-medium"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#8892a4',
                }}
              >
                {pill}
              </span>
            ))}
          </motion.div>

          {/* Partner names — more readable */}
          <motion.div variants={item} className="flex flex-wrap justify-center items-center gap-x-10 gap-y-3 mb-6">
            {partners.map((p) => (
              <span
                key={p}
                className="text-sm font-semibold tracking-widest uppercase"
                style={{ color: '#8892a4' }}
              >
                {p}
              </span>
            ))}
          </motion.div>

          <motion.p
            variants={item}
            className="italic"
            style={{ color: '#8892a4', fontSize: '0.95rem', letterSpacing: '0.02em' }}
          >
            Early movers · Ecosystem operators · Execution-driven since 2017
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
