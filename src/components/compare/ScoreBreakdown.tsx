import ScoreBar from './ScoreBar'
import { scoreColor, type Exchange } from '@/data/exchanges'

interface Props {
  exchange: Exchange
  onMouseEnter: () => void
  onMouseLeave: () => void
}

const ROWS: Array<{ label: string; key: keyof Exchange }> = [
  { label: 'Security',          key: 'security' },
  { label: 'Proof of Reserves', key: 'proofOfReserves' },
  { label: 'Compliance',        key: 'compliance' },
  { label: 'Liquidity',         key: 'liquidity' },
  { label: 'Track Record',      key: 'trackRecord' },
]

export default function ScoreBreakdown({ exchange, onMouseEnter, onMouseLeave }: Props) {
  return (
    <div
      role="tooltip"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        position: 'absolute',
        right: 64,
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 50,
        maxWidth: 240,
        minWidth: 220,
        background: '#0f1422',
        border: '0.5px solid rgba(255,255,255,0.07)',
        borderRadius: 3,
        padding: '10px 12px',
        boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
        pointerEvents: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
      }}
    >
      {ROWS.map((row) => {
        const value = exchange[row.key] as number
        return (
          <div
            key={row.key}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 12,
            }}
          >
            <span
              style={{
                fontFamily: 'Geist Mono, monospace',
                fontSize: 9,
                color: '#71717a',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                whiteSpace: 'nowrap',
              }}
            >
              {row.label}
            </span>
            <div style={{ flex: 1, minWidth: 60, maxWidth: 80 }}>
              <ScoreBar value={value} color={scoreColor(value)} height={3} width="100%" animate={false} />
            </div>
            <span
              className="tabular-nums"
              style={{
                fontFamily: 'Geist Mono, monospace',
                fontSize: 9,
                color: '#a1a1aa',
                minWidth: 22,
                textAlign: 'right',
              }}
            >
              {value}
            </span>
          </div>
        )
      })}
    </div>
  )
}
