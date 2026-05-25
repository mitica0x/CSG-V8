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
        background: 'rgba(91,168,181,0.04)',
        border: '1px solid rgba(91,168,181,0.1)',
      }}
      whileHover={{ borderColor: 'rgba(91,168,181,0.3)', boxShadow: '0 0 25px rgba(91,168,181,0.08)' }}
      transition={{ duration: 0.3 }}
    >
      <p className="stat-number text-3xl md:text-4xl mb-2">
        {stat.text
          ? stat.text
          : (stat.isYear ? count || stat.value : count + stat.suffix)}
      </p>
      <p
        className="text-xs font-semibold tracking-[0.15em] uppercase text-center"
        style={{ color: '#8892a4' }}
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
      className="relative py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #06101d 0%, #080e1c 50%, #0a0e1a 100%)' }}
    >
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 600, height: 600,
          background: 'radial-gradient(circle, rgba(123,94,167,0.06) 0%, transparent 70%)',
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
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: '#5BA8B5' }}>
              About Us
            </p>
            <h2
              className="font-bold mb-10"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', color: '#f8fafc', letterSpacing: '-0.02em', lineHeight: 1.15 }}
            >
              We transform{' '}
              <span className="gradient-cyan">ZERO into ONE</span>
            </h2>

            <div className="space-y-6">
              <p className="text-lg leading-relaxed" style={{ color: '#8892a4' }}>
                C<span style={{ color: '#5BA8B5' }}>0</span>insiglieri is a AI-native financial infrastructure builder built to help founders, startups,
                and businesses move from concept to reality.
              </p>
              <p className="leading-relaxed" style={{ color: '#8892a4' }}>
                We bring together curated experts in go-to-market strategy, legal, development, AI,
                trading, networking, user acquisition, marketing, PR, crypto payments, tokenomics,
                CEX &amp; DEX listing, ORM, smart contracts, and other critical functions — all under
                one management with synced vision.
              </p>
              <p className="leading-relaxed" style={{ color: '#8892a4' }}>
                We operate as a practical one-stop-shop for ambitious Web3 projects and traditional
                businesses looking to make the leap into Web2.5 or Web3.
              </p>
            </div>
          </motion.div>

          {/* Right: stat cards + callout */}
          <div>
            <motion.div
              ref={statsRef}
              className="grid grid-cols-2 gap-5 mb-6"
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
                background: 'rgba(91,168,181,0.03)',
                border: '1px solid rgba(91,168,181,0.09)',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <p className="text-sm leading-relaxed" style={{ color: '#8892a4' }}>
                <span className="gradient-cyan font-semibold">One management. Full spectrum.</span>
                {' '}From the whitepaper to the token launch, from legal to marketing,
                from smart contract to the POS terminal at a 120k-person festival.
                <span style={{ color: '#8892a4' }}> Curated experts. Synced vision.</span>
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
