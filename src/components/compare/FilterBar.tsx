export const FILTER_TABS = ['All', 'MiCAR Licensed', 'Crypto Card', 'Futures', 'Spot'] as const
export type FilterTab = (typeof FILTER_TABS)[number]

export const SORT_OPTIONS = [
  'C0insiglieri Score',
  'Security',
  'Compliance',
  'Liquidity',
] as const
export type SortOption = (typeof SORT_OPTIONS)[number]

interface Props {
  activeTab: FilterTab
  onTabChange: (tab: FilterTab) => void
  sortBy: SortOption
  onSortChange: (sort: SortOption) => void
}

export default function FilterBar({ activeTab, onTabChange, sortBy, onSortChange }: Props) {
  return (
    <div
      style={{
        position: 'sticky',
        top: 64,
        zIndex: 40,
        background: 'rgba(8,11,22,0.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '0.5px solid rgba(255,255,255,0.07)',
        padding: '12px 64px',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 16,
        }}
      >
        {/* Tabs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
          {FILTER_TABS.map((tab) => {
            const isActive = tab === activeTab
            return (
              <button
                key={tab}
                onClick={() => onTabChange(tab)}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '6px 0',
                  fontFamily: 'Geist Mono, monospace',
                  fontSize: 11,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: isActive ? '#e4e4e7' : '#3f3f46',
                  borderBottom: isActive ? '2px solid #18b4d4' : '2px solid transparent',
                  cursor: 'pointer',
                  transitionProperty: 'color, border-color',
                  transitionDuration: '150ms',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) (e.currentTarget as HTMLElement).style.color = '#71717a'
                }}
                onMouseLeave={(e) => {
                  if (!isActive) (e.currentTarget as HTMLElement).style.color = '#3f3f46'
                }}
              >
                {tab}
              </button>
            )
          })}
        </div>

        {/* Sort */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span
            style={{
              fontFamily: 'Geist Mono, monospace',
              fontSize: 11,
              fontWeight: 500,
              color: '#3f3f46',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
            }}
          >
            Sort by
          </span>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value as SortOption)}
            style={{
              background: '#0f1422',
              border: '0.5px solid rgba(255,255,255,0.07)',
              color: '#e4e4e7',
              borderRadius: 3,
              padding: '6px 12px',
              fontFamily: 'Geist, sans-serif',
              fontSize: 12,
              cursor: 'pointer',
              outline: 'none',
            }}
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}
