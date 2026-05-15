import { motion } from 'motion/react'
import { Bot, BookOpen, ArrowRight } from 'lucide-react'

const cards = [
  {
    icon: Bot, label: 'Coming Soon', title: 'C0insiglieri AI',
    desc: 'An AI-powered strategist concept built to support Web3 startups, fintech innovators, and crypto entrepreneurs with strategy, compliance, market analysis, and project management.',
    tags: ['Strategy', 'Compliance', 'Market Analysis', 'Project Management'],
    accent: '#5BA8B5', cta: 'Explore the Concept',
  },
  {
    icon: BookOpen, label: 'Published', title: 'How to Start-up: From Idea to ICO',
    desc: 'A practical guide through the entire journey of building a Web3 company — from ideation and whitepaper to token launch and exchange listing. Written from the trenches.',
    tags: ['Web3 Startups', 'ICO', 'Token Launch', 'GTM'],
    accent: '#7B5EA7', cta: 'Get the Book',
  },
]

export default function AiBook() {
  return (
    <section
      id="resources"
      className="py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0a0e1a 0%, #070d1a 100%)' }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: '#7B5EA7' }}>
            Ecosystem Resources
          </p>
          <h2
            className="font-bold"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: '#f8fafc', letterSpacing: '-0.02em' }}
          >
            Knowledge & Tools
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, i) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                className="rounded-xl p-8 relative overflow-hidden cursor-default"
                style={{
                  background: 'rgba(255,255,255,0.025)',
                  border: `1px solid ${card.accent}1e`,
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                whileHover={{
                  borderColor: `${card.accent}40`,
                  boxShadow: `0 0 35px ${card.accent}0f`,
                  y: -4,
                }}
              >
                <div
                  className="absolute top-0 right-0 pointer-events-none"
                  style={{
                    width: 200, height: 200,
                    background: `radial-gradient(circle, ${card.accent}0e 0%, transparent 70%)`,
                  }}
                />

                <div className="flex items-start gap-4 mb-6">
                  <div
                    className="p-3 rounded-xl flex-none"
                    style={{
                      background: `${card.accent}12`,
                      border: `1px solid ${card.accent}22`,
                    }}
                  >
                    <Icon size={20} style={{ color: card.accent }} />
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: card.accent }}>
                      {card.label}
                    </span>
                    <h3 className="font-bold text-base mt-1" style={{ color: '#f8fafc' }}>
                      {card.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm leading-relaxed mb-6" style={{ color: '#8892a4' }}>
                  {card.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded text-xs font-medium"
                      style={{
                        background: `${card.accent}0e`,
                        border: `1px solid ${card.accent}1e`,
                        color: card.accent,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  className="group/btn inline-flex items-center gap-2 text-sm font-semibold cursor-pointer transition-colors duration-200"
                  style={{ color: card.accent, background: 'none', border: 'none' }}
                >
                  {card.cta}
                  <ArrowRight size={13} className="transition-transform group-hover/btn:translate-x-1" />
                </button>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
