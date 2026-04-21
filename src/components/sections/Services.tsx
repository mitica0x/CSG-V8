import { useRef } from 'react'
import { motion } from 'motion/react'
import { ChevronRight } from 'lucide-react'

const services = [
  {
    number: '01', title: 'Blockchain & Web3',
    description: 'EVM/non-EVM chains, L0/L1/L2 architecture, smart contract development and audits. Full-stack blockchain infrastructure.',
    tags: ['EVM', 'L1/L2', 'Smart Contracts', 'Audits'], accent: '#06b6d4',
  },
  {
    number: '02', title: 'Products',
    description: 'Whitepaper design, DeFi protocols, NFT systems, token engineering, MVPs, wallets, and exchange platforms.',
    tags: ['Whitepaper', 'DeFi', 'NFT', 'MVP', 'Wallet'], accent: '#8b5cf6',
  },
  {
    number: '03', title: 'Strategic Advisory & Ops',
    description: 'Proof of concept, project management, go-to-market strategy, investor relations and ecosystem positioning.',
    tags: ['PoC', 'GTM', 'Investor Relations', 'Strategy'], accent: '#06b6d4',
  },
  {
    number: '04', title: 'Business & Legal',
    description: 'VASP/EMI/PSP frameworks, SAFT agreements, KYC/AML strategy, GDPR compliance, and licensing across jurisdictions.',
    tags: ['VASP', 'KYC/AML', 'GDPR', 'SAFT', 'EMI'], accent: '#8b5cf6',
  },
  {
    number: '05', title: 'Marketing & PR',
    description: 'Branding, storytelling, video explainers, social media, ORM, press releases, influencer campaigns, and advertising.',
    tags: ['Branding', 'Social', 'ORM', 'Influencer', 'Ads'], accent: '#06b6d4',
  },
  {
    number: '06', title: 'Fundraising',
    description: 'ICO/STO/IEO/IDO structuring, seed/OTC/public rounds, pitch to 2,200+ VCs, and agreement documentation.',
    tags: ['ICO', 'STO', 'IDO', 'VCs', 'Seed'], accent: '#8b5cf6',
  },
  {
    number: '07', title: 'Brand Awareness',
    description: 'Summit presence, AMAs, interviews, live events, supercharged networking, and organic traffic strategies.',
    tags: ['Summits', 'AMAs', 'Events', 'Networking'], accent: '#06b6d4',
  },
  {
    number: '08', title: 'Digitalization',
    description: 'Full-stack websites, dApps, cloud infrastructure, cybersecurity, AI-powered tools, and ERP integration.',
    tags: ['dApps', 'Cloud', 'AI', 'Cybersecurity', 'ERP'], accent: '#8b5cf6',
  },
]

export default function Services() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section
      id="services"
      className="py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #030712 0%, #07101f 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: '#22d3ee' }}>
            Capabilities
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
            <h2
              className="font-bold"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', color: '#f8fafc', letterSpacing: '-0.02em' }}
            >
              Services &{' '}
              <span className="gradient-cyan">Deliverables</span>
            </h2>
            <p className="max-w-sm text-base leading-relaxed" style={{ color: '#64748b' }}>
              COINsiglieri delivers turnkey support across strategy, product, legal, fundraising,
              infrastructure, marketing, and real-world execution.
            </p>
          </div>
        </motion.div>

        {/* Horizontal drag scroll */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 pb-8 hide-scrollbar"
            style={{ overflowX: 'auto', cursor: 'grab', scrollPadding: '0 24px', paddingLeft: '8px' }}
            onMouseDown={(e) => {
              const el = scrollRef.current!
              const startX = e.pageX - el.offsetLeft
              const scrollLeft = el.scrollLeft
              const onMove = (e: MouseEvent) => {
                el.scrollLeft = scrollLeft - (e.pageX - el.offsetLeft - startX)
              }
              const onUp = () => {
                el.style.cursor = 'grab'
                document.removeEventListener('mousemove', onMove)
                document.removeEventListener('mouseup', onUp)
              }
              el.style.cursor = 'grabbing'
              document.addEventListener('mousemove', onMove)
              document.addEventListener('mouseup', onUp)
            }}
          >
            {services.map((svc, i) => (
              <motion.div
                key={svc.number}
                className="flex-none flex flex-col rounded-xl p-8 transition-all duration-300"
                style={{
                  width: 350,
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  backdropFilter: 'blur(12px)',
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: Math.min(i * 0.06, 0.3) }}
                whileHover={{
                  scale: 1.02,
                  borderColor: `${svc.accent}40`,
                  boxShadow: `0 0 30px ${svc.accent}12`,
                  y: -3,
                }}
              >
                <p
                  className="text-5xl font-bold mb-5 opacity-15"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', color: svc.accent, lineHeight: 1 }}
                >
                  {svc.number}
                </p>
                <h3 className="font-bold mb-4" style={{ fontSize: '1rem', color: '#f8fafc', lineHeight: 1.35 }}>
                  {svc.title}
                </h3>
                <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: '#64748b' }}>
                  {svc.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {svc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded text-xs font-medium"
                      style={{
                        background: `${svc.accent}10`,
                        color: svc.accent,
                        border: `1px solid ${svc.accent}22`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Fade edges */}
          <div
            className="absolute top-0 bottom-8 left-0 w-4 pointer-events-none"
            style={{ background: 'linear-gradient(90deg, #030712, transparent)' }}
          />
          <div
            className="absolute top-0 bottom-8 right-0 w-20 pointer-events-none"
            style={{ background: 'linear-gradient(270deg, #07101f, transparent)' }}
          />
        </div>

        {/* What we offer — turnkey keywords */}
        <motion.div
          className="mt-16 pt-10"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-6 text-center" style={{ color: '#334155' }}>
            What We Offer (Turnkey)
          </p>
          <div className="flex flex-wrap justify-center gap-2.5 mb-8">
            {[
              'Project Management', 'Web3 Legal Expertise', 'MiCA Licensing',
              'Crypto POS Payments', 'Crypto Marketing', 'KYC/AML Solution',
              'Tokenomics', 'Smart Contracts', 'Litepaper / Whitepaper',
              'Fundraising Strategy', 'Token Listing Strategy',
            ].map((item) => (
              <span
                key={item}
                className="px-3 py-1.5 rounded-lg text-xs font-medium"
                style={{
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  color: '#64748b',
                }}
              >
                {item}
              </span>
            ))}
          </div>
          <p className="text-center text-sm font-medium" style={{ color: '#475569' }}>
            From structure to scale — clarity, compliance, and execution.
          </p>
        </motion.div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center gap-2 text-sm font-semibold cursor-pointer transition-colors duration-200"
            style={{ color: '#22d3ee', background: 'none', border: 'none' }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#67e8f9')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#22d3ee')}
          >
            Interested? Let's talk
            <ChevronRight size={15} className="transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
