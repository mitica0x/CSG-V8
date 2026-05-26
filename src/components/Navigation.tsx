import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { Link } from '@tanstack/react-router'

type NavLink = { label: string; href: string }

const navLinks: NavLink[] = [
  { label: 'Products',     href: '#stack' },
  { label: 'About',        href: '#operator' },
  { label: 'Track Record', href: '#track-record' },
  { label: 'Contact',      href: '#contact' },
]

const DASHBOARD_URL = 'https://app.coinsiglieri.com'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (link: NavLink) => {
    setMobileOpen(false)
    const el = document.querySelector(link.href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(9,9,11,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : 'none',
        }}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Brand */}
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="flex items-center cursor-pointer select-none flex-none"
            style={{ textDecoration: 'none' }}
          >
            <span
              className="font-semibold"
              style={{ fontFamily: 'Geist, sans-serif', fontSize: '1.25rem', letterSpacing: '-0.01em', color: '#e4e4e7' }}
            >
              Coin
            </span>
            <span
              className="font-semibold"
              style={{ fontFamily: 'Geist, sans-serif', fontSize: '1.25rem', letterSpacing: '-0.01em', color: '#18b4d4' }}
            >
              Siglieri
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link)}
                style={{
                  fontFamily: 'Geist, sans-serif',
                  fontSize: '0.875rem',
                  color: '#a1a1aa',
                  background: 'none',
                  border: 'none',
                  padding: '4px 0',
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#e4e4e7')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#a1a1aa')}
                className="font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap"
              >
                {link.label}
              </button>
            ))}
            <a
              href={DASHBOARD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap"
              style={{
                fontFamily: 'Geist, sans-serif',
                fontSize: '0.875rem',
                padding: '9px 18px',
                borderRadius: 8,
                background: '#18b4d4',
                color: '#09090b',
                textDecoration: 'none',
                boxShadow: '0 0 20px rgba(24,180,212,0.25)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = '#22c4e5'
                el.style.boxShadow = '0 0 32px rgba(24,180,212,0.55)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = '#18b4d4'
                el.style.boxShadow = '0 0 20px rgba(24,180,212,0.25)'
              }}
            >
              Open Dashboard →
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 cursor-pointer"
            style={{ background: 'none', border: 'none', color: '#e4e4e7' }}
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
            style={{ background: 'rgba(9,9,11,0.97)', backdropFilter: 'blur(20px)' }}
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
                  style={{ background: 'none', border: 'none', color: '#e4e4e7', fontFamily: 'Geist, sans-serif' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.a
                href={DASHBOARD_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="mt-4 px-8 py-3 rounded-lg text-base font-semibold cursor-pointer"
                style={{
                  background: '#18b4d4',
                  color: '#09090b',
                  border: 'none',
                  textDecoration: 'none',
                  fontFamily: 'Geist, sans-serif',
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.06 }}
              >
                Open Dashboard →
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
