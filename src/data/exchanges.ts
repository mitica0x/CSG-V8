export type Exchange = {
  id: string
  name: string
  domain: string
  score: number
  security: number
  proofOfReserves: number
  compliance: number
  liquidity: number
  trackRecord: number
  tags: string[]
  affiliateUrl: string
  featured?: boolean
}

export const EXCHANGES: Exchange[] = [
  {
    id: 'bybit',
    name: 'Bybit',
    domain: 'bybit.com',
    score: 94,
    security: 95,
    proofOfReserves: 92,
    compliance: 90,
    liquidity: 97,
    trackRecord: 96,
    tags: ['MiCAR Licensed', 'Crypto Card', 'Futures', 'Spot'],
    affiliateUrl: 'https://bybit.com', // TODO: https://partner.bybit.com/b/[referral_code]
    featured: true,
  },
  {
    id: 'binance',
    name: 'Binance',
    domain: 'binance.com',
    score: 88,
    security: 90,
    proofOfReserves: 88,
    compliance: 82,
    liquidity: 98,
    trackRecord: 85,
    tags: ['Futures', 'Spot'],
    affiliateUrl: 'https://binance.com', // TODO: real affiliate URL
  },
  {
    id: 'kraken',
    name: 'Kraken',
    domain: 'kraken.com',
    score: 84,
    security: 88,
    proofOfReserves: 85,
    compliance: 88,
    liquidity: 78,
    trackRecord: 82,
    tags: ['MiCAR Licensed', 'Spot', 'Futures'],
    affiliateUrl: 'https://kraken.com', // TODO: real affiliate URL
  },
  {
    id: 'okx',
    name: 'OKX',
    domain: 'okx.com',
    score: 82,
    security: 84,
    proofOfReserves: 85,
    compliance: 78,
    liquidity: 88,
    trackRecord: 76,
    tags: ['Futures', 'Spot'],
    affiliateUrl: 'https://okx.com', // TODO: real affiliate URL
  },
  {
    id: 'coinbase',
    name: 'Coinbase',
    domain: 'coinbase.com',
    score: 80,
    security: 86,
    proofOfReserves: 72,
    compliance: 95,
    liquidity: 72,
    trackRecord: 80,
    tags: ['MiCAR Licensed', 'Crypto Card', 'Spot'],
    affiliateUrl: 'https://coinbase.com', // TODO: real affiliate URL
  },
  {
    id: 'kucoin',
    name: 'KuCoin',
    domain: 'kucoin.com',
    score: 74,
    security: 72,
    proofOfReserves: 78,
    compliance: 65,
    liquidity: 80,
    trackRecord: 72,
    tags: ['Futures', 'Spot'],
    affiliateUrl: 'https://kucoin.com', // TODO: real affiliate URL
  },
  {
    id: 'bitfinex',
    name: 'Bitfinex',
    domain: 'bitfinex.com',
    score: 67,
    security: 68,
    proofOfReserves: 60,
    compliance: 62,
    liquidity: 74,
    trackRecord: 70,
    tags: ['Spot', 'Futures'],
    affiliateUrl: 'https://bitfinex.com', // TODO: real affiliate URL
  },
]

export const TAG_COLORS: Record<string, { fg: string; bg: string; bd: string }> = {
  'MiCAR Licensed': { fg: '#0dbe82', bg: 'rgba(13,190,130,0.08)',  bd: 'rgba(13,190,130,0.20)' },
  'Crypto Card':    { fg: '#18b4d4', bg: 'rgba(24,180,212,0.08)',  bd: 'rgba(24,180,212,0.20)' },
  'Futures':        { fg: '#70a848', bg: 'rgba(112,168,72,0.08)',  bd: 'rgba(112,168,72,0.20)' },
  'Spot':           { fg: '#a1a1aa', bg: 'rgba(255,255,255,0.04)', bd: 'rgba(255,255,255,0.10)' },
}

// Score → color threshold
export function scoreColor(value: number): string {
  if (value >= 85) return '#0dbe82'
  if (value >= 75) return '#18b4d4'
  if (value >= 65) return '#70a848'
  return '#71717a'
}
