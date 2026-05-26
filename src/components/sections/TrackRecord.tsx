import { motion } from 'motion/react'

type Cell = { number: string; suffix?: string; label: string }

const cells: Cell[] = [
  { number: '2017', label: 'In the market since' },
  { number: '€439', suffix: 'K+', label: 'Capital shaped' },
  { number: '60', suffix: '+', label: 'Ecosystem partners' },
  { number: '120', suffix: 'K', label: 'Live crypto payments in Romania' },
]

function CellView({ cell, index }: { cell: Cell; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-start"
      style={{ padding: '2.4rem 2rem' }}
    >
      <p
        className="font-semibold mb-3"
        style={{
          fontFamily: 'Geist, sans-serif',
          fontSize: 'clamp(2.6rem, 5vw, 3.6rem)',
          letterSpacing: '-0.03em',
          lineHeight: 1,
          color: '#e4e4e7',
        }}
      >
        {cell.number}
        {cell.suffix && <span style={{ color: '#18b4d4' }}>{cell.suffix}</span>}
      </p>
      <p
        style={{
          fontFamily: 'Geist Mono, monospace',
          fontSize: '0.78rem',
          color: '#71717a',
          letterSpacing: '0.06em',
          lineHeight: 1.5,
        }}
      >
        {cell.label}
      </p>
    </motion.div>
  )
}

export default function TrackRecord() {
  return (
    <section
      id="track-record"
      className="relative py-28"
      style={{ background: '#09090b', borderTop: '1px solid rgba(255,255,255,0.07)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: 12,
            overflow: 'hidden',
          }}
        >
          {cells.map((cell, i) => (
            <div
              key={cell.label}
              style={{
                borderRight: i < cells.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                borderBottom: '1px solid rgba(255,255,255,0.07)',
              }}
              className="lg:!border-b-0"
            >
              <CellView cell={cell} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
