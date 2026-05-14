import { createFileRoute } from '@tanstack/react-router'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Partners from '@/components/sections/Partners'
import Media from '@/components/sections/Media'

export const Route = createFileRoute('/media')({
  head: () => ({
    meta: [
      { title: 'Media & Partners — C0insiglieri' },
      { name: 'description', content: 'Featured in The Paypers, HackerNoon, Agerpres, Crypto.ro, NoCash.ro, Clutch.co. 60+ ecosystem partners.' },
    ],
  }),
  component: () => (
    <div style={{ background: '#030712', minHeight: '100vh' }}>
      <Navigation />
      <main>
        <Partners />
        <Media />
      </main>
      <Footer />
    </div>
  ),
})
