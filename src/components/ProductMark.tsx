import type { CSSProperties } from 'react'

type Product = 'c0insiglieri' | 'ax0n' | 'sc0rx'

const COLORS = {
  c0insiglieri: '#18b4d4',
  ax0n: '#D4A853',
  sc0rx: '#6366f1',
} as const

interface Props {
  product: Product
  style?: CSSProperties
  className?: string
}

export default function ProductMark({ product, style, className }: Props) {
  const accent = COLORS[product]

  if (product === 'c0insiglieri') {
    return (
      <span className={className} style={style}>
        <span style={{ color: accent }}>C</span>
        <span style={{ color: accent }}>0</span>
        <span>insiglieri</span>
      </span>
    )
  }

  if (product === 'ax0n') {
    return (
      <span className={className} style={style}>
        <span>Ax</span>
        <span style={{ color: accent }}>0</span>
        <span>n</span>
      </span>
    )
  }

  return (
    <span className={className} style={style}>
      <span>Sc</span>
      <span style={{ color: accent }}>0</span>
      <span>rx</span>
    </span>
  )
}

export const PRODUCT_COLORS = COLORS
