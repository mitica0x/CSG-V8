import { createFileRoute } from '@tanstack/react-router'
import { useMemo, useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FilterBar, { type FilterTab, type SortOption } from '@/components/compare/FilterBar'
import FeaturedSlot from '@/components/compare/FeaturedSlot'
import ExchangeTable from '@/components/compare/ExchangeTable'
import { EXCHANGES, type Exchange } from '@/data/exchanges'

export const Route = createFileRoute('/compare')({
  head: () => ({
    meta: [
      { title: 'Exchange Directory — C0insiglieri Score | CoinSiglieri' },
      {
        name: 'description',
        content:
          'Compare crypto exchanges by C0insiglieri Score. Algorithmic rankings based on Security, Proof of Reserves, Compliance, Liquidity and Track Record.',
      },
      { property: 'og:title', content: 'Exchange Directory — CoinSiglieri' },
      {
        property: 'og:description',
        content: 'Find the right exchange. Scored by algorithm, not by who pays us.',
      },
    ],
  }),
  component: ComparePage,
})

const SORT_KEY: Record<SortOption, keyof Exchange> = {
  'C0insiglieri Score': 'score',
  'Security': 'security',
  'Compliance': 'compliance',
  'Liquidity': 'liquidity',
}

function ComparePage() {
  const [activeTab, setActiveTab] = useState<FilterTab>('All')
  const [sortBy, setSortBy] = useState<SortOption>('C0insiglieri Score')

  const featured = EXCHANGES.find((e) => e.featured)
  const organic = EXCHANGES.filter((e) => !e.featured)

  const visible = useMemo(() => {
    const filtered =
      activeTab === 'All' ? organic : organic.filter((e) => e.tags.includes(activeTab))
    const key = SORT_KEY[sortBy]
    return [...filtered].sort((a, b) => (b[key] as number) - (a[key] as number))
  }, [activeTab, sortBy, organic])

  const featuredDimmed =
    !!featured && activeTab !== 'All' && !featured.tags.includes(activeTab)

  return (
    <div style={{ background: '#080b16', minHeight: '100vh' }}>
      <Navigation />

      <main style={{ paddingTop: 64 }}>
        {/* Page header */}
        <header
          style={{
            background: '#080b16',
            padding: 'clamp(40px, 8vw, 64px) clamp(24px, 4vw, 64px) clamp(32px, 6vw, 48px)',
          }}
        >
          <div
            className="max-w-7xl mx-auto"
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: 32,
              flexWrap: 'wrap',
            }}
          >
            {/* Left */}
            <div style={{ maxWidth: 720, minWidth: 0 }}>
              <p
                style={{
                  fontFamily: 'Geist Mono, monospace',
                  fontSize: 10,
                  fontWeight: 500,
                  color: '#71717a',
                  textTransform: 'uppercase',
                  letterSpacing: '0.16em',
                  marginBottom: 12,
                }}
              >
                Exchange Directory
              </p>
              <h1
                className="balance"
                style={{
                  fontFamily: 'Geist, sans-serif',
                  fontSize: 'clamp(28px, 4vw, 36px)',
                  fontWeight: 700,
                  letterSpacing: '-0.025em',
                  color: '#e4e4e7',
                  lineHeight: 1.1,
                }}
              >
                Find the right exchange.
              </h1>
              <p
                style={{
                  fontFamily: 'Geist, sans-serif',
                  fontSize: 16,
                  color: '#71717a',
                  marginTop: 8,
                  lineHeight: 1.5,
                }}
              >
                Scored by algorithm. Not by who pays us the most.
              </p>
              <span
                style={{
                  display: 'inline-block',
                  marginTop: 16,
                  fontFamily: 'Geist Mono, monospace',
                  fontSize: 10,
                  fontWeight: 600,
                  background: 'rgba(13,190,130,0.08)',
                  border: '0.5px solid rgba(13,190,130,0.2)',
                  color: '#0dbe82',
                  padding: '4px 12px',
                  borderRadius: 3,
                  letterSpacing: '0.1em',
                }}
              >
                ALL SIGNAL. 0 GUESS.
              </span>
            </div>

            {/* Right */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                gap: 6,
                maxWidth: 520,
              }}
            >
              <p
                style={{
                  fontFamily: 'Geist Mono, monospace',
                  fontSize: 10,
                  fontWeight: 500,
                  color: '#71717a',
                  textTransform: 'uppercase',
                  letterSpacing: '0.16em',
                }}
              >
                C
                <span style={{ color: '#18b4d4' }}>0</span>
                insiglieri Score
              </p>
              <p
                style={{
                  fontFamily: 'Geist Mono, monospace',
                  fontSize: 9,
                  color: '#71717a',
                  letterSpacing: '0.06em',
                  lineHeight: 1.6,
                  textAlign: 'right',
                }}
              >
                Security 30% · Proof of Reserves 25% · Compliance 20% · Liquidity 15% · Track Record 10%
              </p>
            </div>
          </div>
        </header>

        {/* Sticky filter bar */}
        <FilterBar
          activeTab={activeTab}
          onTabChange={setActiveTab}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        {/* Featured slot */}
        <div style={{ paddingTop: 16 }}>
          {featured && <FeaturedSlot exchange={featured} dimmed={featuredDimmed} />}
        </div>

        {/* Organic table */}
        <div style={{ marginTop: 8 }}>
          <ExchangeTable exchanges={visible} />
        </div>

        <div style={{ height: 96 }} />
      </main>

      <Footer />
    </div>
  )
}
