import { createFileRoute } from '@tanstack/react-router'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ProductsPage from '@/components/pages/ProductsPage'

export const Route = createFileRoute('/products')({
  head: () => ({
    meta: [
      { title: 'Products — COINsiglieri' },
      {
        name: 'description',
        content:
          'Horiz0n and Ax0n — two products built by COINsiglieri. EU market intelligence for exchanges. AI agent execution protocol.',
      },
    ],
  }),
  component: () => (
    <div style={{ background: '#030712', minHeight: '100vh' }}>
      <Navigation />
      <ProductsPage />
      <Footer />
    </div>
  ),
})
