import { createFileRoute } from '@tanstack/react-router'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ProductsPage from '@/components/pages/ProductsPage'

export const Route = createFileRoute('/products')({
  head: () => ({
    meta: [
      { title: 'Products — C0insiglieri' },
      { name: 'description', content: 'Horiz0n and Ax0n — two products built by C0insiglieri.' },
    ],
  }),
  component: () => (
    <div style={{ background: '#030712', minHeight: '100vh' }}>
      <Navigation />
      <main>
        <ProductsPage />
      </main>
      <Footer />
    </div>
  ),
})
