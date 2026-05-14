import { createFileRoute } from '@tanstack/react-router'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CryptoPOS from '@/components/sections/CryptoPOS'

export const Route = createFileRoute('/crypto-pos')({
  head: () => ({
    meta: [
      { title: 'Crypto POS Payments — C0insiglieri' },
      { name: 'description', content: 'Real-world crypto payment infrastructure. First POS deployment in Romania at Beach, Please! 2024 — 120,000+ attendees.' },
    ],
  }),
  component: () => (
    <div style={{ background: '#030712', minHeight: '100vh' }}>
      <Navigation />
      <main>
        <CryptoPOS />
      </main>
      <Footer />
    </div>
  ),
})
