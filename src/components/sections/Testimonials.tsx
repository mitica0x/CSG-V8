import { motion } from 'motion/react'
import { Star, ExternalLink } from 'lucide-react'

const testimonials = [
  {
    name: 'Rachel',
    role: 'Bybit',
    text: 'The team at COINsiglieri delivered an exceptional brand presence for Bybit in Romania. Their execution on events and affiliate programs exceeded expectations — professional, strategic, and deeply connected to the local ecosystem.',
    stars: 5,
  },
  {
    name: 'Imperium Index Team',
    role: 'Web3 Startup',
    text: 'Working with COINsiglieri was a turning point for our project. They didn\'t just advise — they got in the trenches with us. From tokenomics to fundraising strategy, every deliverable was done with precision and speed.',
    stars: 5,
  },
  {
    name: 'Endi',
    role: 'Trustpilot Reviewer',
    text: 'Highly recommended. One of the few teams in this space that actually delivers what they promise. Their network access and execution speed are real differentiators. 10/10 would work again.',
    stars: 5,
  },
]

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 relative overflow-hidden section-divide"
      style={{ background: 'linear-gradient(180deg, #030712 0%, #070d1a 100%)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(139,92,246,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: '#a78bfa' }}>
            Social Proof
          </p>
          <h2
            className="font-bold"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: '#f8fafc', letterSpacing: '-0.02em' }}
          >
            What Partners Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="rounded-xl p-8 flex flex-col"
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              whileHover={{
                borderColor: 'rgba(139,92,246,0.28)',
                boxShadow: '0 0 35px rgba(139,92,246,0.1)',
                y: -4,
              }}
            >
              <div className="flex gap-1 mb-5">
                {Array(t.stars).fill(0).map((_, j) => (
                  <Star key={j} size={13} fill="#8b5cf6" style={{ color: '#8b5cf6' }} />
                ))}
              </div>

              <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: '#94a3b8' }}>
                "{t.text}"
              </p>

              <div>
                <p className="font-bold text-sm" style={{ color: '#f8fafc' }}>{t.name}</p>
                <p className="text-xs mt-0.5" style={{ color: '#475569' }}>{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="https://www.trustpilot.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200"
            style={{ color: '#64748b', textDecoration: 'none' }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#22d3ee')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#64748b')}
          >
            Read all 13 reviews on Trustpilot
            <ExternalLink size={13} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
