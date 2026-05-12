import { createFileRoute } from '@tanstack/react-router'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ProductsPage from '@/components/pages/ProductsPage'

export const Route = createFileRoute('/products')({
  head: () => ({
    meta: [
      { title: 'Products — COINsiglieri' },
      { name: 'description', content: 'Horiz0n and Ax0n — two products built by COINsiglieri.' },
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
