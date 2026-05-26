import { motion } from 'motion/react'
import type { CSSProperties } from 'react'

const DASHBOARD_URL = 'https://app.coinsiglieri.com'

type Status = 'live' | 'coming' | 'in-dev'

type Card = {
  name: string
  accent: string          // hex
  status: Status
  statusLabel: string
  tagline: string
  body: string
  price?: string
  meta?: string
  tag?: string
  domain?: string
  ctaLabel: string
  ctaHref: string
  ctaVariant: 'fill' | 'outline'
}

const cards: Card[] = [
  {
    name: 'C0insiglieri',
    accent: '#18b4d4',
    status: 'live',
    statusLabel: 'LIVE',
    tagline: 'Market intelligence for exchanges.',
    body: 'Know what the competition is doing. Know where the EU gaps are. Automated. Always current.',
    price: '$499/month',
    meta: 'Live. Automated. Now.',
    ctaLabel: 'Open the dashboard →',
    ctaHref: DASHBOARD_URL,
    ctaVariant: 'fill',
  },
  {
    name: 'Ax0n',
    accent: '#D4A853',
    status: 'coming',
    statusLabel: 'COMING',
    tagline: 'A city built for the new species.',
    body: "Where agents don't pretend to be human.",
    tag: 'Signal · Route · Execute',
    domain: 'ax0n.run',
    ctaLabel: 'Follow the build →',
    ctaHref: 'https://ax0n.run',
    ctaVariant: 'outline',
  },
  {
    name: 'Sc0rx',
    accent: '#4f46e5',
    status: 'in-dev',
    statusLabel: 'IN DEV',
    tagline: 'Every exchange has a score.',
    body: 'Not all of them want you to see it.',
    tag: 'Algorithmic. Independent. Transparent.',
    domain: 'sc0rx.com',
    ctaLabel: 'Follow the build →',
    ctaHref: 'https://sc0rx.com',
    ctaVariant: 'outline',
  },
]

function Dot({ status, accent }: { status: Status; accent: string }) {
  // LIVE: filled emerald. COMING/IN DEV: outline in accent color.
  if (status === 'live') {
    return (
      <span
        style={{
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: '#0dbe82',
          boxShadow: '0 0 10px rgba(13,190,130,0.7)',
          display: 'inline-block',
        }}
      />
    )
  }
  return (
    <span
      style={{
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: 'transparent',
        border: `1.5px solid ${accent}`,
        display: 'inline-block',
      }}
    />
  )
}

function StatusBadge({ status, accent, label }: { status: Status; accent: string; label: string }) {
  const color = status === 'live' ? '#0dbe82' : accent
  return (
    <span
      className="flex items-center gap-2"
      style={{ fontFamily: 'Geist Mono, monospace', fontSize: '0.7rem', letterSpacing: '0.18em', color }}
    >
      <Dot status={status} accent={accent} />
      {label}
    </span>
  )
}

function CardView({ card, index }: { card: Card; index: number }) {
  const isFill = card.ctaVariant === 'fill'
  const ctaStyle: CSSProperties = isFill
    ? {
        background: card.accent,
        color: '#09090b',
        border: 'none',
      }
    : {
        background: 'transparent',
        color: card.accent,
        border: `1px solid ${card.accent}`,
      }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col justify-between"
      style={{
        padding: '2.4rem 2rem',
        minHeight: 460,
      }}
    >
      <div>
        <div className="mb-8">
          <StatusBadge status={card.status} accent={card.accent} label={card.statusLabel} />
        </div>

        <h3
          className="font-semibold mb-3"
          style={{
            fontFamily: 'Geist, sans-serif',
            fontSize: '1.9rem',
            letterSpacing: '-0.02em',
            color: card.accent,
          }}
        >
          {card.name}
        </h3>

        <p
          className="mb-4"
          style={{
            fontFamily: 'Geist, sans-serif',
            fontSize: '1.05rem',
            color: '#e4e4e7',
            lineHeight: 1.4,
          }}
        >
          {card.tagline}
        </p>

        <p
          className="mb-6"
          style={{
            fontFamily: 'Geist, sans-serif',
            fontSize: '0.95rem',
            color: '#a1a1aa',
            lineHeight: 1.6,
          }}
        >
          {card.body}
        </p>

        {card.price && (
          <p
            className="mb-2"
            style={{
              fontFamily: 'Geist, sans-serif',
              fontSize: '1.05rem',
              fontWeight: 600,
              color: '#e4e4e7',
            }}
          >
            {card.price}
          </p>
        )}

        {card.meta && (
          <p
            style={{
              fontFamily: 'Geist Mono, monospace',
              fontSize: '0.74rem',
              color: '#71717a',
              letterSpacing: '0.06em',
            }}
          >
            {card.meta}
          </p>
        )}

        {card.tag && (
          <p
            className="mb-2"
            style={{
              fontFamily: 'Geist Mono, monospace',
              fontSize: '0.74rem',
              color: '#71717a',
              letterSpacing: '0.06em',
            }}
          >
            {card.tag}
          </p>
        )}

        {card.domain && (
          <p
            style={{
              fontFamily: 'Geist Mono, monospace',
              fontSize: '0.78rem',
              color: '#a1a1aa',
              letterSpacing: '0.04em',
            }}
          >
            {card.domain}
          </p>
        )}
      </div>

      <div className="mt-8">
        <a
          href={card.ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-semibold transition-all duration-200 cursor-pointer"
          style={{
            ...ctaStyle,
            fontFamily: 'Geist, sans-serif',
            fontSize: '0.9rem',
            padding: '0.85rem 1.6rem',
            borderRadius: 8,
            textDecoration: 'none',
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement
            if (isFill) {
              el.style.boxShadow = `0 0 28px ${card.accent}66`
            } else {
              el.style.background = `${card.accent}14`
            }
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement
            if (isFill) {
              el.style.boxShadow = 'none'
            } else {
              el.style.background = 'transparent'
            }
          }}
        >
          {card.ctaLabel}
        </a>
      </div>
    </motion.div>
  )
}

export default function Stack() {
  return (
    <section
      id="stack"
      className="relative py-28"
      style={{ background: '#09090b', borderTop: '1px solid rgba(255,255,255,0.07)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: 12,
            overflow: 'hidden',
          }}
        >
          {cards.map((card, i) => (
            <div
              key={card.name}
              style={{
                borderRight: i < cards.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                borderBottom: 'none',
              }}
              className="border-b border-b-[rgba(255,255,255,0.07)] md:border-b-0"
            >
              <CardView card={card} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
