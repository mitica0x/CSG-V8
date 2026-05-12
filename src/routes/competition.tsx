import { createFileRoute } from '@tanstack/react-router'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Competition from '@/components/sections/Competition'

export const Route = createFileRoute('/competition')({
  head: () => ({
    meta: [
      { title: 'Web3 Startup Competition — COINsiglieri' },
      {
        name: 'description',
        content:
          'Two editions. €439,755+ in prize pools. Banking 4.0 × Banca Transilvania (2023). NBX Warsaw (2025).',
      },
    ],
  }),
  component: () => (
    <div style={{ background: '#030712', minHeight: '100vh' }}>
      <Navigation />
      <main>
        <Competition />
      </main>
      <Footer />
    </div>
  ),
})
