import { Outlet, createRootRoute, HeadContent, Scripts, Link } from '@tanstack/react-router'
import appCss from '../index.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'COINsiglieri — Bridging Vision and Execution in Web3' },
      { name: 'description', content: 'Web3-native since 2017. Ecosystem operator — licensing, tokenomics, fundraising, smart contracts, crypto payments, and go-to-market.' },
      { property: 'og:title', content: 'COINsiglieri — Bridging Vision and Execution in Web3' },
      { property: 'og:description', content: 'Web3-native since 2017. Ecosystem operator with real market presence.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://coinsiglieri.com/og-image.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'COINsiglieri — Bridging Vision and Execution in Web3' },
      { name: 'twitter:description', content: 'Web3-native since 2017. Ecosystem operator with real market presence.' },
      { name: 'twitter:image', content: 'https://coinsiglieri.com/og-image.png' },
    ],
    links: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:ital,wght@0,300;0,400;0,500;0,600;1,400&family=JetBrains+Mono:wght@400;500&display=swap' },
      { rel: 'stylesheet', href: appCss },
    ],
  }),
  notFoundComponent: () => (
    <div
      style={{
        minHeight: '100vh',
        background: '#030712',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16,
        textAlign: 'center',
        padding: 24,
      }}
    >
      <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 96, fontWeight: 700, color: '#06b6d4', lineHeight: 1 }}>404</p>
      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 20, color: '#f8fafc' }}>Page not found</p>
      <Link
        to="/"
        style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, color: '#64748b', textDecoration: 'none', marginTop: 8 }}
      >
        ← Back to home
      </Link>
    </div>
  ),
  component: () => (
    <html lang="en">
      <head><HeadContent /></head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  ),
})
