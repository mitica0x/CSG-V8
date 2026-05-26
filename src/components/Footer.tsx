export default function Footer() {
  return (
    <footer
      className="relative py-10"
      style={{
        background: '#09090b',
        borderTop: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* Left */}
          <div
            style={{
              fontFamily: 'Geist Mono, monospace',
              fontSize: '0.78rem',
              color: '#a1a1aa',
              letterSpacing: '0.04em',
              lineHeight: 1.7,
            }}
          >
            <p>AI-native financial infrastructure.</p>
            <p>In the market since 2017.</p>
          </div>

          {/* Right */}
          <div
            className="md:text-right"
            style={{
              fontFamily: 'Geist Mono, monospace',
              fontSize: '0.78rem',
              color: '#71717a',
              letterSpacing: '0.04em',
              lineHeight: 1.7,
            }}
          >
            <p>coinsiglieri.com</p>
            <p>© 2026 CoinSiglieri</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
