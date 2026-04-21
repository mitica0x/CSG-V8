import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import LoadingScreen from '@/components/LoadingScreen'
import Navigation from '@/components/Navigation'
import Hero from '@/components/sections/Hero'
import Ecosystem from '@/components/sections/Ecosystem'
import About from '@/components/sections/About'
import WhoWeServe from '@/components/sections/WhoWeServe'
import Services from '@/components/sections/Services'
import WhyUs from '@/components/sections/WhyUs'
import CryptoPOS from '@/components/sections/CryptoPOS'
import Competition from '@/components/sections/Competition'
import Partners from '@/components/sections/Partners'
import Media from '@/components/sections/Media'
import Testimonials from '@/components/sections/Testimonials'
import People from '@/components/sections/People'
import AiBook from '@/components/sections/AiBook'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/Footer'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      <LoadingScreen isVisible={loading} onComplete={() => setLoading(false)} />

      {!loading && (
        <div className="relative min-h-screen" style={{ background: '#030712' }}>
          <Navigation />
          <main>
            <Hero />
            <Ecosystem />
            <About />
            <WhoWeServe />
            <Services />
            <WhyUs />
            <CryptoPOS />
            <Competition />
            <Partners />
            <Media />
            <Testimonials />
            <People />
            <AiBook />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  )
}
