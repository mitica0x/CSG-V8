import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'

function useCountUp(target: number, shouldStart: boolean, duration = 2000) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!shouldStart) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [shouldStart, target, duration])
  return count
}

const stats = [
  { label: 'Founded', value: 2017, suffix: '', isYear: true },
  { label: 'Partners', value: 60, suffix: '+' },
  { label: 'VC Access', value: 4000, suffix: '+' },
  { label: 'Focus', value: 0, suffix: '', text: 'Strategy → Execution' },
]

function StatCard({ stat, active }: { stat: typeof stats[0]; active: boolean }) {
  const count = useCountUp(stat.value, active)
  return (
    <motion.div
      className="flex flex-col items-center p-8 rounded-xl"
      style={{
        background: 'rgba(6,182,212,0.04)',
        border: '1px solid rgba(6,182,212,0.1)',
      }}
      whileHover={{ borderColor: 'rgba(6,182,212,0.3)', boxShadow: '0 0 25px rgba(6,182,212,0.08)' }}
      transition={{ duration: 0.3 }}
    >
      <p className="stat-number text-3xl md:text-4xl mb-2">
        {stat.text
          ? stat.text
          : (stat.isYear ? count || stat.value : count + stat.suffix)}
      </p>
      <p
        className="text-sm font-semibold tracking-[0.18em] uppercase text-center"
        style={{ color: '#475569' }}
      >
        {stat.label}
      </p>
    </motion.div>
  )
}

export default function About() {
  const [statsActive, setStatsActive] = useState(false)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStatsActive(true); obs.disconnect() } },
      { threshold: 0.2 }
    )
    if (statsRef.current) obs.observe(statsRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id="about"
      className="relative overflow-hidden section-divide"
      style={{ background: 'linear-gradient(180deg, #06101d 0%, #080e1c 50%, #030712 100%)' }}
    >
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 600, height: 600,
          background: 'radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />


      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: '#22d3ee' }}>
              About Us
            </p>
            <h2
              className="font-bold mb-12"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', color: '#f8fafc', letterSpacing: '-0.02em', lineHeight: 1.15 }}
            >
              We transform{' '}
              <span className="gradient-cyan">ZERO into ONE</span>
            </h2>

            <div className="space-y-6">
              <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: '#94a3b8' }}>
                COINsiglieri is a Web3 consulting and execution agency that helps founders, startups,
                and businesses move from concept to reality — all under one management with synced vision.
              </p>
              <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: '#64748b' }}>
                We bring together curated experts across go-to-market strategy, legal, development,
                tokenomics, fundraising, crypto payments, marketing, ORM, smart contracts, and more.
                A practical one-stop-shop for ambitious Web3 projects and traditional businesses making
                the leap into Web3.
              </p>
            </div>
          </motion.div>

          {/* Right: stat cards + callout */}
          <div style={{ marginTop: '80px' }}>
            <motion.div
              ref={statsRef}
              className="grid grid-cols-2 gap-6 mb-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              {stats.map((stat) => (
                <StatCard key={stat.label} stat={stat} active={statsActive} />
              ))}
            </motion.div>

            <motion.div
              className="p-6 rounded-xl"
              style={{
                background: 'rgba(6,182,212,0.03)',
                border: '1px solid rgba(6,182,212,0.09)',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#94a3b8' }}>
                <span className="gradient-cyan font-semibold">One team. Full spectrum.</span>
                {' '}Strategy, legal, development, fundraising, marketing — from whitepaper to token launch,
                from smart contract to POS terminal.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
