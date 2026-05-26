import ExchangeRow from './ExchangeRow'
import type { Exchange } from '@/data/exchanges'

interface Props {
  exchanges: Exchange[]
}

const HEADER_COLS: Array<{ label: string; align?: 'left' | 'right' }> = [
  { label: 'Rank' },
  { label: 'Exchange' },
  { label: 'Tags' },
  { label: 'Score' },
  { label: 'Security' },
  { label: 'Compliance' },
  { label: 'Liquidity' },
  { label: 'Action', align: 'right' },
]

export default function ExchangeTable({ exchanges }: Props) {
  return (
    <div>
      {/* Header row */}
      <div
        style={{
          padding: '10px 64px',
          background: 'rgba(8,11,22,0.95)',
          borderBottom: '0.5px solid rgba(255,255,255,0.07)',
          display: 'grid',
          gridTemplateColumns: '48px 200px 1fr 100px 80px 80px 80px 120px',
          alignItems: 'center',
          gap: 16,
          fontFamily: 'Geist Mono, monospace',
          fontSize: 9,
          fontWeight: 600,
          color: '#71717a',
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
        }}
      >
        {HEADER_COLS.map((c) => (
          <span key={c.label} style={{ textAlign: c.align ?? 'left' }}>
            {c.label}
          </span>
        ))}
      </div>

      {/* Body */}
      {exchanges.length === 0 ? (
        <div
          style={{
            padding: '48px 64px',
            fontFamily: 'Geist Mono, monospace',
            fontSize: 12,
            color: '#71717a',
            textAlign: 'center',
            letterSpacing: '0.04em',
          }}
        >
          No exchanges match this filter.
        </div>
      ) : (
        exchanges.map((exchange, i) => (
          <ExchangeRow
            key={exchange.id}
            exchange={exchange}
            rank={i + 1}
            rowIndex={i}
          />
        ))
      )}
    </div>
  )
}
