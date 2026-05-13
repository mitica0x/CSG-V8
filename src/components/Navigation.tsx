import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { Link, useNavigate } from '@tanstack/react-router'

type RoutePath = '/' | '/services' | '/products' | '/crypto-pos' | '/competition' | '/media' | '/team' | '/contact'
type NavLink = { label: string; type: 'scroll' | 'route'; href?: string; to?: RoutePath; accent?: boolean }

const navLinks: NavLink[] = [
  { label: 'About',       type: 'scroll', href: '#about' },
  { label: 'Services',    type: 'route',  to: '/services' },
  { label: 'Products',    type: 'route',  to: '/products', accent: true },
  { label: 'Crypto POS',  type: 'route',  to: '/crypto-pos' },
  { label: 'Competition', type: 'route',  to: '/competition' },
  { label: 'Media',       type: 'route',  to: '/media' },
  { label: 'Team',        type: 'route',  to: '/team' },
  { label: 'Contact',     type: 'route',  to: '/contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (link: NavLink) => {
    setMobileOpen(false)
    if (link.type === 'scroll') {
      const el = document.querySelector(link.href!)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate({ to: link.to! })
    }
  }

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
          {/* Logo — bigger, more prominent */}
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-0 cursor-pointer select-none flex-none"
            style={{ textDecoration: 'none' }}
          >
            <span
              className="font-bold"
              style={{ fontFamily: 'Geist, sans-serif', fontSize: '1.45rem', letterSpacing: '0.06em', color: '#f8fafc' }}
            >
              COIN
            </span>
            <span
              className="font-bold"
              style={{ fontFamily: 'Geist, sans-serif', fontSize: '1.45rem', letterSpacing: '0.06em', color: '#22d3ee' }}
            >
              siglieri
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link)}
                style={{
                  fontSize: '0.875rem',
                  color: link.accent ? '#06b6d4' : '#94a3b8',
                  background: 'none',
                  border: 'none',
                  padding: '4px 0',
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = link.accent ? '#22d3ee' : '#f8fafc')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = link.accent ? '#06b6d4' : '#94a3b8')}
                className="font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => navigate({ to: '/contact' })}
              className="font-bold transition-all duration-200 cursor-pointer whitespace-nowrap"
              style={{
                fontSize: '0.875rem',
                padding: '9px 20px',
                borderRadius: 10,
                background: 'linear-gradient(135deg, #06b6d4, #0ea5e9)',
                color: '#030712',
                boxShadow: '0 0 20px rgba(6,182,212,0.3)',
                border: 'none',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = '0 0 35px rgba(6,182,212,0.6)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px rgba(6,182,212,0.3)')}
            >
              Start a Project
            </button>
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
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  onClick={() => handleNavClick(link)}
                  className="text-2xl font-semibold cursor-pointer"
                  style={{ background: 'none', border: 'none', color: link.accent ? '#06b6d4' : '#f8fafc', fontFamily: 'Geist, sans-serif' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                onClick={() => { setMobileOpen(false); navigate({ to: '/contact' }) }}
                className="mt-4 px-8 py-3 rounded-lg text-base font-semibold cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, #06b6d4, #0ea5e9)',
                  color: '#030712',
                  border: 'none',
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.06 }}
              >
                Start a Project
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
