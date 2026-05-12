import { useState, useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X } from 'lucide-react'

type RoutePath = '/' | '/services' | '/products' | '/crypto-pos' | '/competition' | '/media' | '/team' | '/contact'
type NavLink = { label: string; to: RoutePath; hash?: string; accent?: boolean }

const links: NavLink[] = [
  { label: 'About', to: '/', hash: 'about' },
  { label: 'Services', to: '/services' },
  { label: 'Products', to: '/products', accent: true },
  { label: 'Crypto POS', to: '/crypto-pos' },
  { label: 'Competition', to: '/competition' },
  { label: 'Media', to: '/media' },
  { label: 'Team', to: '/team' },
  { label: 'Contact', to: '/contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMobile = () => setMobileOpen(false)

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(3,7,18,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
        }}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMobile}
            className="flex items-center gap-0 cursor-pointer select-none flex-none"
            style={{ textDecoration: 'none' }}
          >
            <span
              className="font-bold"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.45rem', letterSpacing: '0.06em', color: '#f8fafc' }}
            >
              COIN
            </span>
            <span
              className="font-bold"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.45rem', letterSpacing: '0.06em', color: '#22d3ee' }}
            >
              siglieri
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                hash={link.hash}
                onClick={closeMobile}
                className="font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap"
                style={{
                  fontSize: '1rem',
                  color: link.accent ? '#06b6d4' : '#94a3b8',
                  textDecoration: 'none',
                  padding: '4px 0',
                }}
                onMouseEnter={(e) => { if (!link.accent) (e.currentTarget as HTMLElement).style.color = '#f8fafc' }}
                onMouseLeave={(e) => { if (!link.accent) (e.currentTarget as HTMLElement).style.color = '#94a3b8' }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={closeMobile}
              className="font-bold transition-all duration-200 cursor-pointer whitespace-nowrap"
              style={{
                fontSize: '1rem',
                padding: '9px 20px',
                borderRadius: 10,
                background: 'linear-gradient(135deg, #06b6d4, #0ea5e9)',
                color: '#030712',
                boxShadow: '0 0 20px rgba(6,182,212,0.3)',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = '0 0 35px rgba(6,182,212,0.6)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px rgba(6,182,212,0.3)')}
            >
              Start a Project
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 cursor-pointer"
            style={{ background: 'none', border: 'none', color: '#f8fafc' }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[99] flex flex-col items-center justify-center"
            style={{ background: 'rgba(3,7,18,0.97)', backdropFilter: 'blur(20px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <nav className="flex flex-col items-center gap-6">
              {links.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={link.to}
                    hash={link.hash}
                    onClick={closeMobile}
                    className="text-2xl font-semibold cursor-pointer"
                    style={{
                      color: link.accent ? '#06b6d4' : '#f8fafc',
                      fontFamily: 'Space Grotesk, sans-serif',
                      textDecoration: 'none',
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: links.length * 0.06 }}
              >
                <Link
                  to="/contact"
                  onClick={closeMobile}
                  className="mt-4 px-8 py-3 rounded-lg text-base font-semibold cursor-pointer inline-block"
                  style={{
                    background: 'linear-gradient(135deg, #06b6d4, #0ea5e9)',
                    color: '#030712',
                    textDecoration: 'none',
                  }}
                >
                  Start a Project
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
