import type { CSSProperties, ReactNode } from 'react'
import { motion } from 'motion/react'

const mono: CSSProperties = { fontFamily: 'JetBrains Mono, monospace' }
const grotesk: CSSProperties = { fontFamily: 'Space Grotesk, sans-serif' }
const inter: CSSProperties = { fontFamily: 'Inter, sans-serif' }

function PulseDot() {
  return (
    <motion.span
      style={{ width: 5, height: 5, borderRadius: '50%', background: '#06b6d4', display: 'inline-block' }}
      animate={{ opacity: [1, 0.3, 1] }}
      transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
    />
  )
}

function Badge({ children, accent, withDot }: { children: ReactNode; accent: string; withDot?: boolean }) {
  const cyan = accent === '#06b6d4'
  return (
    <span
      style={{
        ...mono,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontSize: 10,
        letterSpacing: '0.1em',
        color: accent,
        background: cyan ? 'rgba(6,182,212,0.08)' : 'rgba(212,168,83,0.08)',
        border: `1px solid ${cyan ? 'rgba(6,182,212,0.2)' : 'rgba(212,168,83,0.2)'}`,
        borderRadius: 3,
        padding: '2px 8px',
        width: 'fit-content',
        textTransform: 'uppercase',
      }}
    >
      {withDot && <PulseDot />}
      {children}
    </span>
  )
}

function Feature({ children, accent }: { children: ReactNode; accent: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
      <span style={{ color: accent, fontSize: 13, lineHeight: 1.65, flexShrink: 0 }}>✓</span>
      <span style={{ ...inter, fontSize: 13, color: '#94a3b8', lineHeight: 1.65 }}>{children}</span>
    </div>
  )
}

function MiniLabel({ children }: { children: ReactNode }) {
  return (
    <p style={{ ...mono, fontSize: 10, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>
      {children}
    </p>
  )
}

const cardBase: CSSProperties = {
  background: 'rgba(255,255,255,0.025)',
  border: '1px solid rgba(255,255,255,0.07)',
  borderRadius: 14,
  padding: 32,
  display: 'flex',
  flexDirection: 'column',
}

const sectionDivider: CSSProperties = { borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 16, marginBottom: 16 }

const howItWorks = [
  { n: '01', text: 'Connect your exchange account and define your market scope' },
  { n: '02', text: 'Receive daily intelligence briefings and real-time alerts' },
  { n: '03', text: 'Act on BD opportunities before competitors do' },
]

const buildStatus = [
  { label: 'Smart contract layer — COMPLETE', dot: '#06b6d4' },
  { label: 'Agent execution layer — COMPLETE', dot: '#06b6d4' },
  { label: 'Frontend + protocol API — IN PROGRESS', dot: '#D4A853' },
  { label: 'Mainnet bridge — Q4 2026', dot: 'rgba(255,255,255,0.2)' },
]

export default function ProductsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      style={{ padding: '80px 40px', background: '#030712' }}
    >
      <div style={{ maxWidth: 1024, margin: '0 auto' }}>

        {/* Page header */}
        <p style={{ ...mono, fontSize: 11, color: '#06b6d4', textTransform: 'uppercase', letterSpacing: '0.22em', marginBottom: 20 }}>
          Products
        </p>
        <h1 style={{ ...grotesk, fontSize: 52, fontWeight: 700, color: '#f8fafc', marginBottom: 16, lineHeight: 1.1 }}>
          Built by COINsiglieri.
        </h1>
        <p style={{ ...inter, fontSize: 18, color: '#64748b', maxWidth: 560, marginBottom: 56, lineHeight: 1.6 }}>
          Two products. One intelligence layer for exchanges. One protocol layer for AI agents.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 24 }}>

          {/* Horiz0n */}
          <div style={{ ...cardBase, borderTop: '3px solid #06b6d4' }}>
            <Badge accent="#06b6d4" withDot>LIVE</Badge>

            <h2 style={{ ...grotesk, fontSize: 26, fontWeight: 700, color: '#f8fafc', marginTop: 16, marginBottom: 2 }}>
              Horiz<span style={{ color: '#06b6d4' }}>0</span>n
            </h2>
            <p style={{ ...mono, fontSize: 10, color: '#06b6d4', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 14 }}>
              EU Market Intelligence
            </p>

            <p style={{ ...inter, fontSize: 13, color: '#64748b', lineHeight: 1.65, marginBottom: 20 }}>
              Real-time intelligence for crypto exchanges entering or operating in the EU market.
              Regulatory signals, competitor moves, and BD opportunities — in one war room.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 20 }}>
              <Feature accent="#06b6d4">Regulatory &amp; compliance signals</Feature>
              <Feature accent="#06b6d4">Competitor activity tracking</Feature>
              <Feature accent="#06b6d4">BD opportunity radar</Feature>
              <Feature accent="#06b6d4">Weekly intelligence briefings</Feature>
            </div>

            <div style={{ marginBottom: 20 }}>
              <MiniLabel>How it works</MiniLabel>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {howItWorks.map((s) => (
                  <div key={s.n} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <span style={{ ...mono, fontSize: 12, color: '#06b6d4', flexShrink: 0 }}>{s.n}</span>
                    <span style={{ ...inter, fontSize: 13, color: '#94a3b8', lineHeight: 1.55 }}>{s.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ ...sectionDivider, marginTop: 'auto' }}>
              <div>
                <span style={{ ...grotesk, fontSize: 28, fontWeight: 700, color: '#f8fafc' }}>$500</span>
                <span style={{ ...inter, fontSize: 13, color: '#64748b' }}> / month</span>
              </div>
              <p style={{ ...mono, fontSize: 10, color: '#64748b', textTransform: 'uppercase', marginTop: 4 }}>
                B2B · Exchange-facing · Active clients
              </p>
            </div>

            <a
              href="https://horizon.coinsiglieri.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...grotesk, fontWeight: 600, fontSize: 13,
                background: '#06b6d4', color: '#030712', borderRadius: 8, padding: '11px 20px',
                textDecoration: 'none', textAlign: 'center', transition: 'filter 0.2s',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.filter = 'brightness(1.1)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.filter = 'none')}
            >
              Access Dashboard →
            </a>
          </div>

          {/* Ax0n */}
          <div style={{ ...cardBase, borderTop: '3px solid #D4A853' }}>
            <Badge accent="#D4A853">COMING SOON</Badge>

            <h2 style={{ ...grotesk, fontSize: 26, fontWeight: 700, color: '#f8fafc', marginTop: 16, marginBottom: 2 }}>
              Ax<span style={{ color: '#D4A853' }}>0</span>n
            </h2>
            <p style={{ ...mono, fontSize: 10, color: '#D4A853', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 14 }}>
              AI Agent Execution Protocol
            </p>

            <p style={{ ...inter, fontSize: 13, color: '#64748b', lineHeight: 1.65, marginBottom: 20 }}>
              The routing layer AI agents need to trade. Ax0n connects financial intent to execution —
              across protocols, across markets, without humans in the loop.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 20 }}>
              <Feature accent="#D4A853">Cross-protocol routing standard</Feature>
              <Feature accent="#D4A853">EIP-4337 compliant execution</Feature>
              <Feature accent="#D4A853">Risk manager + veto layer</Feature>
              <Feature accent="#D4A853">Bybit API integrated (testnet)</Feature>
            </div>

            <div style={{ marginBottom: 20 }}>
              <MiniLabel>Build status</MiniLabel>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {buildStatus.map((s) => (
                  <div key={s.label} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: s.dot, flexShrink: 0 }} />
                    <span style={{ ...inter, fontSize: 13, color: '#94a3b8' }}>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ ...sectionDivider, marginTop: 'auto' }}>
              <p style={{ ...mono, fontSize: 12, color: '#D4A853', textTransform: 'uppercase' }}>Early Access</p>
              <p style={{ ...mono, fontSize: 10, color: '#64748b', marginTop: 4 }}>
                Base tier free · Protocol tier $499/month
              </p>
            </div>

            <a
              href="https://ax0n.run"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...grotesk, fontWeight: 600, fontSize: 13,
                background: 'transparent', border: '1px solid #D4A853', color: '#D4A853',
                borderRadius: 8, padding: '11px 20px', textDecoration: 'none', textAlign: 'center', transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = 'rgba(212,168,83,0.08)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = 'transparent')}
            >
              Join the Waitlist →
            </a>
          </div>

        </div>

        {/* Bottom strip */}
        <p
          style={{
            ...mono,
            fontSize: 11,
            color: 'rgba(255,255,255,0.15)',
            textTransform: 'uppercase',
            letterSpacing: '0.22em',
            textAlign: 'center',
            marginTop: 64,
          }}
        >
          COINsiglieri builds what the market needs next
        </p>
      </div>
    </motion.div>
  )
}
