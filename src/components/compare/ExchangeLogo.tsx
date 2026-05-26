import { useState } from 'react'

interface Props {
  name: string
  domain: string
  size?: number
  accent?: string
}

export default function ExchangeLogo({ name, domain, size = 24, accent = '#71717a' }: Props) {
  const [errored, setErrored] = useState(false)

  if (errored) {
    return (
      <div
        aria-hidden
        style={{
          width: size,
          height: size,
          borderRadius: 4,
          background: '#0f1422',
          border: '0.5px solid rgba(255,255,255,0.07)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Geist Mono, monospace',
          fontSize: Math.round(size * 0.42),
          fontWeight: 700,
          color: accent,
          flex: 'none',
        }}
      >
        {name.charAt(0)}
      </div>
    )
  }

  return (
    <img
      src={`https://logo.clearbit.com/${domain}`}
      alt={`${name} logo`}
      width={size}
      height={size}
      onError={() => setErrored(true)}
      loading="lazy"
      style={{
        borderRadius: 4,
        objectFit: 'contain',
        flex: 'none',
      }}
    />
  )
}
