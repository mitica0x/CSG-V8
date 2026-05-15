import { createFileRoute } from '@tanstack/react-router'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import People from '@/components/sections/People'

export const Route = createFileRoute('/team')({
  head: () => ({
    meta: [
      { title: 'Team — C0insiglieri' },
      { name: 'description', content: 'Madalin Muraretiu, Co-Founder. Operating in Web3 since 2017 from Bucharest, Romania.' },
    ],
  }),
  component: () => (
    <div style={{ background: '#0a0e1a', minHeight: '100vh' }}>
      <Navigation />
      <main>
        <People />
      </main>
      <Footer />
    </div>
  ),
})
