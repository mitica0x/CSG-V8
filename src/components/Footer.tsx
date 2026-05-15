import { Link2, AtSign, Mail, ExternalLink } from 'lucide-react'
import { Link } from '@tanstack/react-router'

const navLinks = [
  { label: 'About',       to: '/' },
  { label: 'Services',    to: '/services' },
  { label: 'Crypto POS',  to: '/crypto-pos' },
  { label: 'Competition', to: '/competition' },
  { label: 'Media',       to: '/media' },
  { label: 'Team',        to: '/team' },
  { label: 'Contact',     to: '/contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="relative pt-16 pb-8 overflow-hidden"
      style={{
        background: '#0a0e1a',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: 600, height: 200,
          background: 'radial-gradient(ellipse, rgba(91,168,181,0.04) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span
                className="text-2xl font-bold"
                style={{ fontFamily: 'Geist, sans-serif', color: '#f8fafc' }}
              >
                COIN
              </span>
              <span
                className="text-2xl font-bold"
                style={{ fontFamily: 'Geist, sans-serif', color: '#5BA8B5' }}
              >
                siglieri
              </span>
            </div>
            <p className="text-sm mb-5" style={{ color: '#8892a4', lineHeight: 1.65 }}>
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
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: '#8892a4',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = 'rgba(91,168,181,0.3)'
                    el.style.color = '#5BA8B5'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = 'rgba(255,255,255,0.08)'
                    el.style.color = '#8892a4'
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: '#8892a4', letterSpacing: '0.18em' }}
            >
              Navigation
            </p>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-sm transition-colors duration-200"
                  style={{ color: '#8892a4', textDecoration: 'none' }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#8892a4')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#8892a4')}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: '#8892a4', letterSpacing: '0.18em' }}
            >
              Products
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="https://horizon.coinsiglieri.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm transition-colors duration-200"
                style={{ color: '#8892a4', textDecoration: 'none' }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#94c864')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#8892a4')}
              >
                Horiz<span style={{ color: '#94c864' }}>0</span>n
              </a>
              <a
                href="https://ax0n.run"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm transition-colors duration-200"
                style={{ color: '#8892a4', textDecoration: 'none' }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#D4A853')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#8892a4')}
              >
                Ax<span style={{ color: '#D4A853' }}>0</span>n
              </a>
            </div>
          </div>

          {/* Contact block */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: '#8892a4', letterSpacing: '0.18em' }}
            >
              Contact
            </p>
            <a
              href="mailto:madalin@coinsiglieri.com"
              className="flex items-center gap-2 text-sm mb-3 transition-colors duration-200"
              style={{ color: '#8892a4', textDecoration: 'none' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#5BA8B5')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#8892a4')}
            >
              <Mail size={13} />
              madalin@coinsiglieri.com
            </a>
            <a
              href="https://coinsiglieri.com"
              className="flex items-center gap-2 text-sm transition-colors duration-200"
              style={{ color: '#8892a4', textDecoration: 'none' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#5BA8B5')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#8892a4')}
            >
              <ExternalLink size={13} />
              coinsiglieri.com
            </a>

            <div className="mt-6 p-4 rounded-xl" style={{
              background: 'rgba(91,168,181,0.04)',
              border: '1px solid rgba(91,168,181,0.1)',
            }}>
              <p className="text-xs" style={{ color: '#8892a4', lineHeight: 1.6 }}>
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
          <p className="text-xs" style={{ color: '#2d3748' }}>
            C<span style={{ color: '#5BA8B5' }}>0</span>insiglieri is a Registered Trademark brand name and logo. © {year} C<span style={{ color: '#5BA8B5' }}>0</span>insiglieri. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: '#2d3748' }}>
            Bridging vision and execution in Web3
          </p>
        </div>
      </div>
    </footer>
  )
}
