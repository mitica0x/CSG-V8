import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'
import { Trophy } from 'lucide-react'

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

const criteria = [
  'Market Fit', 'Token Economics', 'Team Quality', 'Technical Innovation',
  'Go-to-Market', 'Regulatory Compliance', 'Community Traction', 'Investor Readiness',
]

const editions = [
  {
    year: '2025', event: 'Warsaw, Poland · Powered by COINsiglieri in partnership with NBX Warsaw', prize: 287855, startups: 30,
    winners: ['Carbon X Tons', 'Galeon Care', 'QUDO'], accent: '#06b6d4',
  },
  {
    year: '2023', event: 'Bucharest, Romania · Banking 4.0 × Banca Transilvania at STUP BT', prize: 152900, startups: 30,
    winners: ['ixfi.com', 'banksters.com', 'Hodlezz.com'], accent: '#8b5cf6',
  },
]

function PrizeCounter({ value, active }: { value: number; active: boolean }) {
  const count = useCountUp(value, active, 2000)
  return (
    <span className="stat-number" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)' }}>
      €{count.toLocaleString()}
    </span>
  )
}

export default function Competition() {
  const [active, setActive] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); obs.disconnect() } },
      { threshold: 0.2 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id="competition"
      className="py-24 relative overflow-hidden section-divide"
      style={{ background: 'linear-gradient(180deg, #030712 0%, #07101a 100%)' }}
    >
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: 600, height: 600,
          background: 'radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)',
          filter: 'blur(70px)',
          transform: 'translate(30%, -20%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: '#a78bfa' }}>
            Flagship Initiative
          </p>
          <h2
            className="font-bold mb-5"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', color: '#f8fafc', letterSpacing: '-0.02em', marginBottom: '1.5rem' }}
          >
            Web3 Startup{' '}
            <span className="gradient-purple">Competition</span>
          </h2>
          <p className="text-lg leading-relaxed max-w-xl mx-auto" style={{ color: '#64748b' }}>
            Building the next generation of Web3 companies. Two editions. Real prize pools. Real founders.
          </p>
        </motion.div>

        {/* Edition cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-stretch">
          {editions.map((ed, i) => (
            <motion.div
              key={ed.year}
              className="rounded-xl p-8 relative overflow-hidden flex flex-col h-full"
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: `1px solid ${ed.accent}1f`,
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{
                borderColor: `${ed.accent}40`,
                boxShadow: `0 0 40px ${ed.accent}0f`,
                y: -4,
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: `linear-gradient(90deg, transparent, ${ed.accent}55, transparent)` }}
              />

              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="text-sm font-bold tracking-[0.22em] uppercase mb-1.5" style={{ color: ed.accent }}>
                    {ed.year} Edition
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>{ed.event}</p>
                </div>
                <Trophy size={20} style={{ color: ed.accent, opacity: 0.6 }} />
              </div>

              <div className="mb-6">
                <PrizeCounter value={ed.prize} active={active} />
                <p className="text-xs mt-1.5" style={{ color: '#475569' }}>
                  Total Prize Pool · {ed.startups} Startups
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#334155' }}>
                  Winners
                </p>
                <div className="flex flex-wrap gap-2">
                  {ed.winners.map((w) => (
                    <span
                      key={w}
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        background: `${ed.accent}0e`,
                        border: `1px solid ${ed.accent}22`,
                        color: ed.accent,
                      }}
                    >
                      {w}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Criteria */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs uppercase tracking-[0.2em] mb-6" style={{ color: '#334155' }}>
            Evaluation Criteria
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {criteria.map((c) => (
              <span
                key={c}
                className="px-4 py-2 rounded-lg font-medium"
                style={{
                  fontSize: '0.9375rem',
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  color: '#64748b',
                }}
              >
                {c}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
