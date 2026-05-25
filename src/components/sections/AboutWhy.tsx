import type { CSSProperties, ReactNode } from 'react'
import { motion } from 'motion/react'

const mono: CSSProperties = { fontFamily: 'JetBrains Mono, monospace' }
const grotesk: CSSProperties = { fontFamily: 'Geist, sans-serif' }
const inter: CSSProperties = { fontFamily: 'Inter, sans-serif' }

const h2Style: CSSProperties = {
  ...grotesk,
  fontSize: 'clamp(28px, 3.5vw, 40px)',
  fontWeight: 700,
  color: '#f8fafc',
  lineHeight: 1.15,
}

const cardStyle: CSSProperties = {
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid rgba(255,255,255,0.06)',
  borderRadius: 10,
  padding: 20,
}

const stats = [
  { value: '2017', label: 'Founded' },
  { value: '60+', label: 'Partners' },
  { value: '4,000+', label: 'VC Access' },
  { value: '7+', label: 'Years in Web3' },
]

const points = [
  {
    title: 'One Management. Full Spectrum.',
    desc: 'From whitepaper to token launch, from legal to marketing, from smart contract to POS terminal at a 120k-person festival.',
  },
  {
    title: 'Execution First. Always.',
    desc: 'We operate as a practical one-stop-shop for ambitious Web3 projects and traditional businesses making the leap into Web2.5 or Web3.',
  },
  {
    title: 'Real Market Presence.',
    desc: 'TOKEN2049 · EBC · NFT Show Europe · Blockchain Economy Summit · NBX Warsaw · Crypto Gibraltar · GoTech World.',
  },
]

function Eyebrow({ children, color }: { children: ReactNode; color: string }) {
  return (
    <p style={{ ...mono, fontSize: 11, color, textTransform: 'uppercase', letterSpacing: '0.22em', marginBottom: 16 }}>
      {children}
    </p>
  )
}

export default function AboutWhy() {
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-10"
      style={{ background: 'rgba(255,255,255,0.01)', borderTop: '1px solid rgba(255,255,255,0.04)' }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* LEFT — About */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <Eyebrow color="#5BA8B5">About Us</Eyebrow>

          <h2 style={{ ...h2Style, marginBottom: 20 }}>
            We transform <span className="gradient-cyan">ZERO</span> into <span className="gradient-cyan">ONE</span>
          </h2>

          <p style={{ ...inter, fontSize: 14, color: '#8892a4', lineHeight: 1.7, marginBottom: 16 }}>
            C<span style={{ color: '#5BA8B5' }}>0</span>insiglieri is a AI-native financial infrastructure builder built to help founders,
            startups, and businesses move from concept to reality.
          </p>
          <p style={{ ...inter, fontSize: 14, color: '#8892a4', lineHeight: 1.7 }}>
            We bring together curated experts in go-to-market strategy, legal, development,
            AI, trading, networking, crypto payments, tokenomics, CEX &amp; DEX listing, ORM,
            and smart contracts — all under one management with synced vision.
          </p>

          {/* Stats 2x2 */}
          <div className="grid grid-cols-2 gap-3" style={{ marginTop: 28 }}>
            {stats.map((s) => (
              <div key={s.label} style={cardStyle}>
                <p style={{ ...grotesk, fontSize: 30, fontWeight: 700, color: '#5BA8B5', lineHeight: 1 }}>{s.value}</p>
                <p style={{ ...mono, fontSize: 10, color: '#8892a4', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 8 }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT — Why */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <Eyebrow color="#7B5EA7">Why C<span style={{ color: '#5BA8B5' }}>0</span>insiglieri</Eyebrow>

          <h2 style={{ ...h2Style, marginBottom: 24 }}>
            Not consultants. <span className="gradient-purple">Operators</span> with skin in the game.
          </h2>

          <div className="flex flex-col gap-4">
            {points.map((p) => (
              <div key={p.title} style={{ ...cardStyle, background: 'rgba(255,255,255,0.025)' }}>
                <p style={{ ...grotesk, fontSize: 15, fontWeight: 600, color: '#f8fafc', marginBottom: 4 }}>{p.title}</p>
                <p style={{ ...inter, fontSize: 13, color: '#8892a4', lineHeight: 1.55 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
