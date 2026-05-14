import { motion } from 'motion/react'
import { ExternalLink } from 'lucide-react'

const media = [
  { outlet: 'The Paypers', headline: 'Interview on crypto payment adoption in Eastern Europe', year: '2024' },
  { outlet: 'HackerNoon', headline: 'The State of Web3 Startups in Emerging Markets', year: '2024' },
  { outlet: 'Agerpres', headline: 'First crypto payments deployed at Romanian music festival', year: '2024' },
  { outlet: 'Crypto.ro', headline: 'C0insiglieri: Building Web3 infrastructure from Bucharest', year: '2023' },
  { outlet: 'NoCash.ro', headline: 'Crypto POS technology and the future of festival payments', year: '2024' },
  { outlet: 'OTcrypto', headline: 'Arena Finanțelor — Blockchain & DeFi deep dive', year: '2023' },
  { outlet: 'Clutch.co', headline: 'Top Web3 Development Companies — Featured Review', year: '2024' },
]

export default function Media() {
  return (
    <section
      id="media"
      className="py-32 relative"
      style={{ background: '#030712' }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: '#22d3ee' }}>
            Press
          </p>
          <h2
            className="font-bold"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: '#f8fafc', letterSpacing: '-0.02em' }}
          >
            Featured in the Media
          </h2>
        </motion.div>

        <div className="space-y-2">
          {media.map((item, i) => (
            <motion.div
              key={item.outlet}
              className="group flex items-center gap-5 py-5 px-6 rounded-xl cursor-pointer transition-all duration-200"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.05)',
              }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              whileHover={{
                background: 'rgba(6,182,212,0.03)',
                borderColor: 'rgba(6,182,212,0.14)',
                x: 4,
              }}
            >
              <span
                className="flex-none text-xs font-bold tracking-widest uppercase"
                style={{ color: '#22d3ee', minWidth: 120 }}
              >
                {item.outlet}
              </span>
              <span
                className="text-sm leading-relaxed flex-1 truncate"
                style={{ color: '#64748b' }}
              >
                {item.headline}
              </span>
              <div className="flex items-center gap-3 flex-none">
                <span className="text-xs" style={{ color: '#334155' }}>{item.year}</span>
                <ExternalLink
                  size={13}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ color: '#22d3ee' }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
