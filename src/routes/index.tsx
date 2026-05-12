import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import LoadingScreen from '@/components/LoadingScreen'
import Navigation from '@/components/Navigation'
import Hero from '@/components/sections/Hero'
import ProductsTeaser from '@/components/sections/ProductsTeaser'
import Ecosystem from '@/components/sections/Ecosystem'
import AboutWhy from '@/components/sections/AboutWhy'
import Services from '@/components/sections/Services'
import Testimonials from '@/components/sections/Testimonials'
import CTAStrip from '@/components/sections/CTAStrip'
import Footer from '@/components/Footer'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  const [loading, setLoading] = useState(true)
  return (
    <div className="relative min-h-screen" style={{ background: '#030712' }}>
      <LoadingScreen isVisible={loading} onComplete={() => setLoading(false)} />
      <Navigation />
      <main>
        <Hero />
        <ProductsTeaser />
        <Ecosystem />
        <AboutWhy />
        <Services />
        <Testimonials />
        <CTAStrip />
      </main>
      <Footer />
    </div>
  )
}
