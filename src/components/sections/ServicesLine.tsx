import { motion } from 'motion/react'

export default function ServicesLine() {
  return (
    <section
      id="contact"
      className="relative py-20"
      style={{ background: '#09090b', borderTop: '1px solid rgba(255,255,255,0.07)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-6"
        >
          <p
            style={{
              fontFamily: 'Geist, sans-serif',
              fontSize: 'clamp(1.05rem, 1.6vw, 1.35rem)',
              color: '#e4e4e7',
              lineHeight: 1.5,
              letterSpacing: '-0.01em',
              maxWidth: '52rem',
            }}
          >
            Some teams need someone in the room. We do that too — selectively.
          </p>

          <a
            href="mailto:hello@coinsiglieri.com"
            className="font-semibold transition-colors duration-200 whitespace-nowrap self-start md:self-auto"
            style={{
              fontFamily: 'Geist, sans-serif',
              fontSize: '1rem',
              color: '#18b4d4',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#22c4e5')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#18b4d4')}
          >
            → Talk to us
          </a>
        </motion.div>
      </div>
    </section>
  )
}
