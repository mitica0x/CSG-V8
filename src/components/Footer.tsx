import ProductMark from './ProductMark'

const PRODUCT_LINKS = [
  { product: 'c0insiglieri' as const, href: 'https://app.coinsiglieri.com', color: '#18b4d4' },
  { product: 'ax0n'         as const, href: 'https://ax0n.run',             color: '#D4A853' },
]

export default function Footer() {
  return (
    <footer
      className="relative"
      style={{
        background: '#09090b',
        borderTop: '1px solid rgba(255,255,255,0.07)',
        padding: '56px clamp(24px, 4vw, 64px)',
        minHeight: 160,
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-start justify-between" style={{ gap: 32 }}>
          {/* Left — logo + mono lines */}
          <div>
            <div style={{ marginBottom: 16 }}>
              <span
                style={{
                  fontFamily: 'Geist, sans-serif',
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: '-0.01em',
                  color: '#e4e4e7',
                }}
              >
                Coin
              </span>
              <span
                style={{
                  fontFamily: 'Geist, sans-serif',
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: '-0.01em',
                  color: '#18b4d4',
                }}
              >
                Siglieri
              </span>
            </div>
            <div
              style={{
                fontFamily: 'Geist Mono, monospace',
                fontSize: 11,
                color: '#3f3f46',
                lineHeight: 2,
                letterSpacing: '0.06em',
              }}
            >
              <p>AI-native financial infrastructure.</p>
              <p>In the market since 2017.</p>
            </div>
          </div>

          {/* Right — locked copy + product links */}
          <div className="md:text-right" style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                fontFamily: 'Geist Mono, monospace',
                fontSize: 11,
                color: '#3f3f46',
                lineHeight: 2,
                letterSpacing: '0.06em',
              }}
            >
              <p>coinsiglieri.com</p>
              <p>© 2026 CoinSiglieri</p>
            </div>

            <div
              className="md:justify-end"
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 10,
                marginTop: 12,
                fontFamily: 'Geist Mono, monospace',
                fontSize: 10,
                letterSpacing: '0.04em',
              }}
            >
              {PRODUCT_LINKS.map((link, i) => (
                <span key={link.product} style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
                  {i > 0 && <span style={{ color: '#3f3f46' }} aria-hidden>·</span>}
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: link.color, textDecoration: 'none' }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.7')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')}
                  >
                    <ProductMark product={link.product} />
                  </a>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
