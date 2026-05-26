import { useEffect, useState } from 'react'

interface Props {
  value: number
  color: string
  height?: number
  width?: string
  delay?: number
  animate?: boolean
}

export default function ScoreBar({
  value,
  color,
  height = 4,
  width = '100%',
  delay = 0,
  animate = true,
}: Props) {
  const [filled, setFilled] = useState(animate ? 0 : value)

  useEffect(() => {
    if (!animate) {
      setFilled(value)
      return
    }
    const id = setTimeout(() => setFilled(value), 30)
    return () => clearTimeout(id)
  }, [value, animate])

  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      style={{
        width,
        height,
        background: 'rgba(255,255,255,0.06)',
        borderRadius: 2,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          width: `${filled}%`,
          height: '100%',
          background: color,
          borderRadius: 2,
          transitionProperty: 'width',
          transitionDuration: animate ? '800ms' : '0ms',
          transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
          transitionDelay: `${delay}ms`,
        }}
      />
    </div>
  )
}
