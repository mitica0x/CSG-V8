import type { CSSProperties } from 'react'
import { Link } from '@tanstack/react-router'
import { motion } from 'motion/react'

const mono: CSSProperties = { fontFamily: 'JetBrains Mono, monospace' }
const grotesk: CSSProperties = { fontFamily: 'Geist, sans-serif' }
const inter: CSSProperties = { fontFamily: 'Inter, sans-serif' }

const btnBase: CSSProperties = {
  ...grotesk,
  fontWeight: 600,
  fontSize: 14,
  borderRadius: 8,
  padding: '12px 28px',
  textDecoration: 'none',
  display: 'inline-block',
  transition: 'all 0.2s',
}

export default function CTAStrip() {
  return (
    <section
      id="lets-build"
      style={{
        background: 'rgba(6,182,212,0.04)',
        borderTop: '1px solid rgba(6,182,212,0.1)',
        padding: '72px 40px',
        textAlign: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        style={{ maxWidth: 640, margin: '0 auto' }}
      >
        <p style={{ ...mono, fontSize: 11, color: '#06b6d4', textTransform: 'uppercase', letterSpacing: '0.22em', marginBottom: 14 }}>
          Let&apos;s Build
        </p>

        <h2 style={{ ...grotesk, fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 700, color: '#f8fafc', marginBottom: 12 }}>
          Start Your <span className="gradient-cyan">Project</span>
        </h2>

        <p style={{ ...inter, fontSize: 15, color: '#64748b', maxWidth: 480, margin: '0 auto 28px', lineHeight: 1.6 }}>
          We&apos;ll review your project, needs, and direction, then come back with
          an initial assessment and estimated budget.
        </p>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            to="/contact"
            style={{ ...btnBase, background: '#06b6d4', color: '#030712' }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.filter = 'brightness(1.1)')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.filter = 'none')}
          >
            Start a Project →
          </Link>
          <a
            href="mailto:madalin@coinsiglieri.com"
            style={{ ...btnBase, background: 'transparent', border: '1px solid rgba(255,255,255,0.15)', color: '#f8fafc' }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.3)')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.15)')}
          >
            madalin@coinsiglieri.com
          </a>
        </div>
      </motion.div>
    </section>
  )
}
