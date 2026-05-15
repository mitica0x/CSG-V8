import { motion } from 'motion/react'
import { CheckCircle2, ArrowRight } from 'lucide-react'

const benefits = [
  'No crypto volatility — instant fiat conversion',
  'Zero chargebacks — irreversible transactions',
  'Same-day settlement to merchant account',
  '20+ cryptocurrencies accepted',
  'Plug-and-play POS hardware integration',
  'Real-time analytics dashboard',
]

export default function CryptoPOS() {
  return (
    <section
      id="crypto-pos"
      className="relative py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0a0e1a 0%, #080f1d 50%, #0a0e1a 100%)' }}
    >
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: 700, height: 700,
          background: 'radial-gradient(circle, rgba(91,168,181,0.07) 0%, transparent 65%)',
          filter: 'blur(90px)',
          transform: 'translate(25%, -25%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 pointer-events-none"
        style={{
          width: 500, height: 500,
          background: 'radial-gradient(circle, rgba(123,94,167,0.05) 0%, transparent 70%)',
          filter: 'blur(70px)',
          transform: 'translate(-20%, 20%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: '#5BA8B5' }}>
              Crypto Payments
            </p>
            <h2
              className="font-bold mb-7"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', color: '#f8fafc', letterSpacing: '-0.02em', lineHeight: 1.15 }}
            >
              Real-World{' '}
              <span className="gradient-cyan">Crypto Payments</span>{' '}
              at Scale
            </h2>
            <p className="text-lg leading-relaxed mb-10" style={{ color: '#8892a4' }}>
              Powered by LUNU — the leading crypto payment infrastructure. We deployed the first
              crypto POS in Romania at Beach, Please! 2024 with 120,000+ attendees.
              Not a pilot. An operation.
            </p>

            <div className="space-y-4 mb-12">
              {benefits.map((b) => (
                <div key={b} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="mt-0.5 flex-none" style={{ color: '#5BA8B5' }} />
                  <p className="text-sm leading-relaxed" style={{ color: '#8892a4' }}>{b}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold cursor-pointer transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #5BA8B5, #0ea5e9)',
                  color: '#0a0e1a',
                  border: 'none',
                  boxShadow: '0 0 22px rgba(91,168,181,0.38)',
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = '0 0 42px rgba(91,168,181,0.65)')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = '0 0 22px rgba(91,168,181,0.38)')}
              >
                Integrate Crypto Payments
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3.5 rounded-xl text-sm font-semibold cursor-pointer transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#8892a4',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'rgba(91,168,181,0.3)'
                  el.style.color = '#f8fafc'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'rgba(255,255,255,0.1)'
                  el.style.color = '#8892a4'
                }}
              >
                Request POS Details
              </button>
            </div>
          </motion.div>

          {/* Right — case study card */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.12 }}
          >
            <div
              className="relative rounded-2xl p-10 overflow-hidden"
              style={{
                background: 'rgba(91,168,181,0.035)',
                border: '1px solid rgba(91,168,181,0.18)',
                boxShadow: '0 0 60px rgba(91,168,181,0.06), inset 0 1px 0 rgba(91,168,181,0.08)',
              }}
            >
              <div
                className="absolute top-0 right-0 pointer-events-none"
                style={{
                  width: 250, height: 250,
                  background: 'radial-gradient(circle, rgba(91,168,181,0.1) 0%, transparent 70%)',
                }}
              />

              <div className="relative">
                <div className="flex items-center gap-3 mb-8">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase"
                    style={{
                      background: 'rgba(91,168,181,0.1)',
                      border: '1px solid rgba(91,168,181,0.28)',
                      color: '#5BA8B5',
                    }}
                  >
                    Case Study
                  </span>
                  <span className="text-xs" style={{ color: '#8892a4' }}>2024</span>
                </div>

                <h3
                  className="font-bold mb-3"
                  style={{ fontSize: '1.6rem', color: '#f8fafc', fontFamily: 'Geist, sans-serif' }}
                >
                  Beach, Please! 2024
                </h3>
                <p className="text-sm leading-relaxed mb-8" style={{ color: '#8892a4' }}>
                  Romania's Black Sea Coast. In partnership with LUNU, Global Records, Bybit, and Nuba —
                  VIP guests purchased champagne and luxury experiences using crypto for the first time in Romania.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { value: '120,000+', label: 'Attendees' },
                    { value: '#1', label: 'In Romania' },
                    { value: 'LUNU', label: 'Infrastructure' },
                    { value: 'Live', label: 'Operation' },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="p-4 rounded-xl"
                      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}
                    >
                      <p className="font-bold text-lg mb-0.5" style={{ color: '#5BA8B5', fontFamily: 'Geist, sans-serif' }}>
                        {s.value}
                      </p>
                      <p className="text-xs" style={{ color: '#8892a4' }}>{s.label}</p>
                    </div>
                  ))}
                </div>

                <p className="text-xs italic" style={{ color: '#8892a4' }}>
                  Partners: LUNU · Global Records · Bybit · Nuba
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
