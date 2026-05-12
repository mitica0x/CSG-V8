import { Link } from '@tanstack/react-router'
import { Link2, AtSign, Mail, ExternalLink } from 'lucide-react'

type RoutePath = '/' | '/services' | '/products' | '/crypto-pos' | '/competition' | '/media' | '/team' | '/contact'
type FooterLink = { label: string; to: RoutePath; hash?: string }

const navLinks: FooterLink[] = [
  { label: 'About', to: '/', hash: 'about' },
  { label: 'Services', to: '/services' },
  { label: 'Products', to: '/products' },
  { label: 'Crypto POS', to: '/crypto-pos' },
  { label: 'Competition', to: '/competition' },
  { label: 'Media', to: '/media' },
  { label: 'Team', to: '/team' },
  { label: 'Contact', to: '/contact' },
]

const productLinks = [
  { label: 'Horiz0n', href: 'https://horizon.coinsiglieri.com', note: 'EU Market Intelligence' },
  { label: 'Ax0n', href: 'https://ax0n.run', note: 'AI Agent Execution Protocol' },
]

const linkStyle = { fontSize: '1rem', color: '#475569', textDecoration: 'none' } as const
const sectionLabelStyle = {
  fontSize: '0.875rem',
  color: '#475569',
  letterSpacing: '0.18em',
} as const

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="relative pt-16 pb-8 overflow-hidden"
      style={{ background: '#030712', borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: 600, height: 200,
          background: 'radial-gradient(ellipse, rgba(6,182,212,0.04) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Top row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="mb-4 inline-block" style={{ textDecoration: 'none' }}>
              <span className="text-2xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#f8fafc' }}>COIN</span>
              <span className="text-2xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#06b6d4' }}>siglieri</span>
            </Link>
            <p className="mb-5 mt-4" style={{ fontSize: '0.9375rem', color: '#475569', lineHeight: 1.65 }}>
              Bridging the gap between vision and execution in Web3.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Link2, href: 'https://linkedin.com/in/madalin-muraretiu-b8bb74105/', label: 'LinkedIn' },
                { icon: AtSign, href: 'https://x.com/COINsiglieriRO', label: 'X / Twitter' },
                { icon: Mail, href: 'mailto:madalin@coinsiglieri.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 rounded-lg transition-all duration-200"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#64748b', textDecoration: 'none' }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(6,182,212,0.3)'; el.style.color = '#06b6d4' }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,0.08)'; el.style.color = '#64748b' }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-semibold uppercase tracking-widest mb-5" style={sectionLabelStyle}>Navigation</p>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  hash={link.hash}
                  className="transition-colors duration-200"
                  style={linkStyle}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#94a3b8')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#475569')}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <p className="font-semibold uppercase tracking-widest mb-5" style={sectionLabelStyle}>Products</p>
            <div className="flex flex-col gap-4">
              {productLinks.map((p) => (
                <a
                  key={p.label}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group transition-colors duration-200"
                  style={{ textDecoration: 'none' }}
                >
                  <span
                    className="flex items-center gap-1.5 font-semibold"
                    style={{ fontSize: '1rem', color: '#64748b' }}
                  >
                    {p.label}
                    <ExternalLink size={11} className="opacity-0 group-hover:opacity-60 transition-opacity" />
                  </span>
                  <span style={{ fontSize: '0.75rem', color: '#334155', fontFamily: 'JetBrains Mono, monospace' }}>{p.note}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact block */}
          <div>
            <p className="font-semibold uppercase tracking-widest mb-5" style={sectionLabelStyle}>Contact</p>
            <a
              href="mailto:madalin@coinsiglieri.com"
              className="flex items-center gap-2 mb-3 transition-colors duration-200"
              style={{ fontSize: '1rem', color: '#64748b', textDecoration: 'none' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#06b6d4')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#64748b')}
            >
              <Mail size={13} />
              madalin@coinsiglieri.com
            </a>
            <a
              href="https://coinsiglieri.com"
              className="flex items-center gap-2 transition-colors duration-200"
              style={{ fontSize: '1rem', color: '#64748b', textDecoration: 'none' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#06b6d4')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#64748b')}
            >
              <ExternalLink size={13} />
              coinsiglieri.com
            </a>

            <div className="mt-6 p-4 rounded-xl" style={{ background: 'rgba(6,182,212,0.04)', border: '1px solid rgba(6,182,212,0.1)' }}>
              <p style={{ fontSize: '0.8125rem', color: '#475569', lineHeight: 1.6 }}>
                Fast response · Confidential handling · No spam
              </p>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}
        >
          <p style={{ fontSize: '0.875rem', color: '#2d3748' }}>
            COINsiglieri is a Registered Trademark brand name and logo. © {year} COINsiglieri. All rights reserved.
          </p>
          <p style={{ fontSize: '0.875rem', color: '#2d3748' }}>
            Bridging vision and execution in Web3
          </p>
        </div>
      </div>
    </footer>
  )
}
