import type { CSSProperties, ReactNode } from 'react'
import { Link } from '@tanstack/react-router'
import { motion } from 'motion/react'

const mono: CSSProperties = { fontFamily: 'JetBrains Mono, monospace' }
const grotesk: CSSProperties = { fontFamily: 'Geist, sans-serif' }
const inter: CSSProperties = { fontFamily: 'Inter, sans-serif' }

function PulseDot() {
  return (
    <motion.span
      style={{ width: 5, height: 5, borderRadius: '50%', background: '#E8FF3C', display: 'inline-block' }}
      animate={{ opacity: [1, 0.3, 1] }}
      transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
    />
  )
}

function Badge({ children, accent, withDot }: { children: ReactNode; accent: string; withDot?: boolean }) {
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
        background: accent === '#06b6d4' ? 'rgba(6,182,212,0.08)' : accent === '#E8FF3C' ? 'rgba(232,255,60,0.08)' : 'rgba(212,168,83,0.08)',
        border: `1px solid ${accent === '#06b6d4' ? 'rgba(6,182,212,0.2)' : accent === '#E8FF3C' ? 'rgba(232,255,60,0.2)' : 'rgba(212,168,83,0.2)'}`,
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

const cardBase: CSSProperties = {
  background: 'rgba(255,255,255,0.025)',
  border: '1px solid rgba(255,255,255,0.07)',
  borderRadius: 14,
  padding: 32,
  display: 'flex',
  flexDirection: 'column',
}

export default function ProductsTeaser() {
  return (
    <motion.section
      id="products-teaser"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{
        background: 'rgba(6,182,212,0.02)',
        borderTop: '1px solid rgba(255,255,255,0.04)',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
        padding: '64px 40px',
      }}
    >
      <div style={{ maxWidth: 1152, margin: '0 auto' }}>
        {/* Header row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: 20,
            marginBottom: 36,
          }}
        >
          <div>
            <p style={{ ...mono, fontSize: 11, color: '#06b6d4', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 14 }}>
              Products
            </p>
            <h2 style={{ ...grotesk, fontSize: 42, fontWeight: 700, color: '#f8fafc', lineHeight: 1.1, marginBottom: 12 }}>
              Built by C<span style={{ color: '#06b6d4' }}>0</span>insiglieri.
            </h2>
            <p style={{ ...inter, fontSize: 16, color: '#64748b', maxWidth: 480, lineHeight: 1.6 }}>
              Two products. Intelligence for exchanges. Execution protocol for AI agents.
            </p>
          </div>
          <Link
            to="/products"
            style={{ ...mono, fontSize: 11, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em', textDecoration: 'none', whiteSpace: 'nowrap' }}
          >
            View all products →
          </Link>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 20 }}>

          {/* Card 1 — Horiz0n */}
          <div style={{ ...cardBase, borderTop: '3px solid #E8FF3C' }}>
            <Badge accent="#E8FF3C" withDot>LIVE</Badge>

            <h3 style={{ ...grotesk, fontSize: 26, fontWeight: 700, color: '#f8fafc', marginTop: 16, marginBottom: 2 }}>
              Horiz<span style={{ color: '#E8FF3C' }}>0</span>n
            </h3>
            <p style={{ ...mono, fontSize: 10, color: '#E8FF3C', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 14 }}>
              EU Market Intelligence
            </p>

            <p style={{ ...inter, fontSize: 13, color: '#64748b', lineHeight: 1.65, marginBottom: 20 }}>
              Real-time intelligence for crypto exchanges entering or operating in the EU market.
              Regulatory signals, competitor moves, and BD opportunities — in one war room.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 20 }}>
              <Feature accent="#E8FF3C">Regulatory &amp; compliance signals</Feature>
              <Feature accent="#E8FF3C">Competitor activity tracking</Feature>
              <Feature accent="#E8FF3C">BD opportunity radar</Feature>
              <Feature accent="#E8FF3C">Weekly intelligence briefings</Feature>
            </div>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 16, marginBottom: 16, marginTop: 'auto' }}>
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
                ...grotesk,
                fontWeight: 600,
                fontSize: 13,
                background: '#E8FF3C',
                color: '#030712',
                borderRadius: 8,
                padding: '11px 20px',
                textDecoration: 'none',
                textAlign: 'center',
                transition: 'filter 0.2s',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.filter = 'brightness(1.1)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.filter = 'none')}
            >
              Access Dashboard →
            </a>
          </div>

          {/* Card 2 — Ax0n */}
          <div style={{ ...cardBase, borderTop: '3px solid #D4A853' }}>
            <Badge accent="#D4A853">COMING SOON</Badge>

            <h3 style={{ ...grotesk, fontSize: 26, fontWeight: 700, color: '#f8fafc', marginTop: 16, marginBottom: 2 }}>
              Ax<span style={{ color: '#D4A853' }}>0</span>n
            </h3>
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

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 16, marginBottom: 16, marginTop: 'auto' }}>
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
                ...grotesk,
                fontWeight: 600,
                fontSize: 13,
                background: 'transparent',
                border: '1px solid #D4A853',
                color: '#D4A853',
                borderRadius: 8,
                padding: '11px 20px',
                textDecoration: 'none',
                textAlign: 'center',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = 'rgba(212,168,83,0.08)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = 'transparent')}
            >
              Join the Waitlist →
            </a>
          </div>

        </div>
      </div>
    </motion.section>
  )
}
