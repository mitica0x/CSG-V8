import { useRef, useState } from 'react'
import ExchangeLogo from './ExchangeLogo'
import ScoreBar from './ScoreBar'
import ScoreBreakdown from './ScoreBreakdown'
import { TAG_COLORS, scoreColor, type Exchange } from '@/data/exchanges'

interface Props {
  exchange: Exchange
  rank: number
  rowIndex: number
}

export default function ExchangeRow({ exchange, rank, rowIndex }: Props) {
  const [showTooltip, setShowTooltip] = useState(false)
  const [hovered, setHovered] = useState(false)
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const cancelHide = () => {
    if (hideTimer.current) {
      clearTimeout(hideTimer.current)
      hideTimer.current = null
    }
  }

  const scheduleHide = () => {
    cancelHide()
    hideTimer.current = setTimeout(() => setShowTooltip(false), 150)
  }

  const handleRowEnter = () => {
    cancelHide()
    setHovered(true)
    setShowTooltip(true)
  }

  const handleRowLeave = () => {
    setHovered(false)
    scheduleHide()
  }

  const sColor = scoreColor(exchange.score)
  const animDelay = rowIndex * 60

  return (
    <div
      onMouseEnter={handleRowEnter}
      onMouseLeave={handleRowLeave}
      style={{
        position: 'relative',
        padding: '16px 64px',
        borderBottom: '0.5px solid rgba(255,255,255,0.04)',
        background: hovered
          ? 'rgba(255,255,255,0.02)'
          : rowIndex % 2 === 0
          ? 'rgba(255,255,255,0.01)'
          : 'transparent',
        transitionProperty: 'background-color',
        transitionDuration: '150ms',
        display: 'grid',
        gridTemplateColumns: '48px 200px 1fr 100px 80px 80px 80px 120px',
        alignItems: 'center',
        gap: 16,
      }}
    >
      {/* Rank */}
      <span
        className="tabular-nums"
        style={{
          fontFamily: 'Geist Mono, monospace',
          fontSize: 13,
          fontWeight: 500,
          color: '#3f3f46',
        }}
      >
        #{rank}
      </span>

      {/* Exchange */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, minWidth: 0 }}>
        <ExchangeLogo name={exchange.name} domain={exchange.domain} size={24} />
        <span
          style={{
            fontFamily: 'Geist, sans-serif',
            fontSize: 14,
            fontWeight: 600,
            color: '#e4e4e7',
            letterSpacing: '-0.01em',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {exchange.name}
        </span>
      </div>

      {/* Tags */}
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', minWidth: 0 }}>
        {exchange.tags.map((tag) => {
          const c = TAG_COLORS[tag] ?? TAG_COLORS.Spot
          return (
            <span
              key={tag}
              style={{
                fontFamily: 'Geist Mono, monospace',
                fontSize: 8,
                background: c.bg,
                color: c.fg,
                border: `0.5px solid ${c.bd}`,
                padding: '2px 7px',
                borderRadius: 2,
                whiteSpace: 'nowrap',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              {tag}
            </span>
          )
        })}
      </div>

      {/* Score */}
      <span
        className="tabular-nums"
        style={{
          fontFamily: 'Geist, sans-serif',
          fontSize: 20,
          fontWeight: 700,
          color: sColor,
          letterSpacing: '-0.02em',
        }}
      >
        {exchange.score}
      </span>

      {/* Security */}
      <ScoreBar
        value={exchange.security}
        color={scoreColor(exchange.security)}
        height={3}
        width="64px"
        delay={animDelay}
      />

      {/* Compliance */}
      <ScoreBar
        value={exchange.compliance}
        color={scoreColor(exchange.compliance)}
        height={3}
        width="64px"
        delay={animDelay + 80}
      />

      {/* Liquidity */}
      <ScoreBar
        value={exchange.liquidity}
        color={scoreColor(exchange.liquidity)}
        height={3}
        width="64px"
        delay={animDelay + 160}
      />

      {/* Action */}
      <a
        href={exchange.affiliateUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontFamily: 'Geist Mono, monospace',
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: '0.04em',
          color: '#18b4d4',
          textDecoration: 'none',
          textTransform: 'uppercase',
          transitionProperty: 'opacity',
          transitionDuration: '150ms',
          textAlign: 'right',
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.7')}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')}
      >
        Visit →
      </a>

      {showTooltip && (
        <ScoreBreakdown
          exchange={exchange}
          onMouseEnter={cancelHide}
          onMouseLeave={scheduleHide}
        />
      )}
    </div>
  )
}
