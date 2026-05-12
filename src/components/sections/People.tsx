import { useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import { ExternalLink, Link2, AtSign, Globe } from 'lucide-react'
import * as THREE from 'three'

const mediaAppearances = [
  { label: 'Arena Finanțelor — OTcrypto', href: '#' },
  { label: 'The Paypers Interview', href: '#' },
  { label: 'NBX Warsaw 2025 — Speaker', href: '#' },
  { label: 'NFT Show Europe — Panel', href: '#' },
  { label: 'HackerNoon — Op-ed', href: '#' },
  { label: 'European Blockchain Convention Barcelona', href: '#' },
]

const team = [
  { name: 'Oana', initials: 'OA', role: 'Finance & Operations' },
  { name: 'Mihai', initials: 'MH', role: 'Engineering' },
  { name: 'Iulia', initials: 'IU', role: 'Operations' },
]

const cities = ['Singapore', 'Warsaw', 'Barcelona', 'Valencia', 'Bucharest', 'Gibraltar', 'Dubai']

const CARD = {
  background: 'rgba(255,255,255,0.025)',
  border: '1px solid rgba(255,255,255,0.06)',
}

// Subtle wireframe globe — purely decorative, slow Y rotation
function WireframeSphere() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const W = mount.clientWidth || 320
    const H = mount.clientHeight || 320

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(W, H)
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(50, W / H, 0.1, 100)
    camera.position.z = 3.2

    const geo = new THREE.SphereGeometry(1, 28, 28)
    const mat = new THREE.MeshBasicMaterial({
      color: 0x22d3ee,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    })
    const mesh = new THREE.Mesh(geo, mat)
    scene.add(mesh)

    const clock = new THREE.Clock()
    let raf: number

    const animate = () => {
      raf = requestAnimationFrame(animate)
      const t = clock.getElapsedTime()
      mesh.rotation.y = t * 0.14
      mesh.rotation.x = t * 0.035
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(raf)
      renderer.dispose()
      geo.dispose()
      mat.dispose()
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} style={{ width: '100%', height: '100%', pointerEvents: 'none' }} />
}

function InitialsAvatar({ initials, accent = '#06b6d4' }: { initials: string; accent?: string }) {
  return (
    <div
      className="rounded-xl flex items-center justify-center flex-shrink-0"
      style={{
        width: 40, height: 40,
        background: `linear-gradient(135deg, ${accent}18, ${accent}10)`,
        border: `1px solid ${accent}30`,
      }}
    >
      <span style={{ fontSize: '0.8rem', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, color: accent }}>
        {initials}
      </span>
    </div>
  )
}

function RolePill({ label, accent = '#06b6d4' }: { label: string; accent?: string }) {
  return (
    <span
      className="px-2.5 py-1 rounded-full font-medium"
      style={{
        fontSize: '0.75rem',
        background: `${accent}12`,
        border: `1px solid ${accent}25`,
        color: accent,
        whiteSpace: 'nowrap',
      }}
    >
      {label}
    </span>
  )
}

export default function People() {
  return (
    <section
      id="people"
      className="py-24 relative overflow-hidden section-divide"
      style={{ background: '#030712' }}
    >
      {/* Background orb */}
      <div
        className="absolute left-0 top-0 pointer-events-none"
        style={{
          width: 700, height: 700,
          background: 'radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 70%)',
          filter: 'blur(70px)',
          transform: 'translate(-35%, -20%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6">

        {/* Section title with wireframe sphere behind it */}
        <motion.div
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          {/* Wireframe globe — absolute, centered behind title */}
          <div
            className="absolute left-1/2 top-1/2 pointer-events-none"
            style={{
              width: 280, height: 280,
              transform: 'translate(-50%, -50%)',
              zIndex: 0,
            }}
          >
            <WireframeSphere />
          </div>

          <div className="relative" style={{ zIndex: 1 }}>
            <p className="text-sm font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: '#22d3ee' }}>
              The Team
            </p>
            <h2
              className="font-bold"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#f8fafc', letterSpacing: '-0.02em' }}
            >
              People & Presence
            </h2>
          </div>
        </motion.div>

        {/* ── Featured Founder — full-width magazine card ── */}
        <motion.div
          className="rounded-2xl mb-8 overflow-hidden"
          style={CARD}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex flex-col lg:flex-row">

            {/* Left — identity + bio (60%) */}
            <div
              className="flex flex-col p-10"
              style={{ flex: '0 0 60%' }}
            >
              {/* Avatar + name block */}
              <div className="flex items-center gap-5 mb-7">
                <div
                  className="rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{
                    width: 80, height: 80,
                    background: 'linear-gradient(135deg, rgba(6,182,212,0.18), rgba(139,92,246,0.18))',
                    border: '1px solid rgba(6,182,212,0.3)',
                    boxShadow: '0 0 20px rgba(6,182,212,0.4)',
                  }}
                >
                  <span style={{ fontSize: '1.5rem', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, color: '#22d3ee' }}>
                    MM
                  </span>
                </div>
                <div>
                  <h3
                    className="font-bold mb-1"
                    style={{ fontSize: '1.75rem', color: '#f8fafc', fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.01em' }}
                  >
                    Madalin Muraretiu
                  </h3>
                  <p className="font-medium mb-0.5" style={{ fontSize: '0.9375rem', color: '#22d3ee' }}>
                    Co-Founder · Blockchain Alchemist
                  </p>
                  <p style={{ fontSize: '0.8125rem', color: '#475569' }}>
                    Operating in Web3 since 2017 · Bucharest, Romania
                  </p>
                </div>
              </div>

              <p className="leading-[1.8] mb-8" style={{ fontSize: '1rem', color: '#64748b', maxWidth: '52ch' }}>
                Seven years building at the intersection of blockchain, strategy, and real-world
                execution. From whitepaper to live POS terminal at a 120k-person festival.
                Ecosystem connector, strategic operator, and builder of bridges between Web3
                vision and market reality.
              </p>

              {/* Social buttons */}
              <div className="flex gap-3 mt-auto">
                <a
                  href="https://linkedin.com/in/madalin-muraretiu-b8bb74105/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all duration-200"
                  style={{
                    fontSize: '0.875rem',
                    background: 'rgba(6,182,212,0.08)',
                    border: '1px solid rgba(6,182,212,0.2)',
                    color: '#22d3ee',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.background = 'rgba(6,182,212,0.14)'
                    el.style.borderColor = 'rgba(6,182,212,0.4)'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.background = 'rgba(6,182,212,0.08)'
                    el.style.borderColor = 'rgba(6,182,212,0.2)'
                  }}
                >
                  <Link2 size={13} />
                  LinkedIn
                </a>
                <a
                  href="https://x.com/COINsiglieriRO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all duration-200"
                  style={{
                    fontSize: '0.875rem',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: '#64748b',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = 'rgba(255,255,255,0.16)'
                    el.style.color = '#f8fafc'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = 'rgba(255,255,255,0.08)'
                    el.style.color = '#64748b'
                  }}
                >
                  <AtSign size={13} />
                  X.com
                </a>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-px self-stretch" style={{ background: 'rgba(255,255,255,0.06)' }} />

            {/* Right — media appearances (40%) */}
            <div className="flex flex-col p-10" style={{ flex: '0 0 40%' }}>
              <p className="uppercase tracking-[0.2em] mb-6" style={{ fontSize: '0.75rem', color: '#334155' }}>
                Media Appearances
              </p>
              <div className="flex flex-wrap gap-2.5">
                {mediaAppearances.map((m) => (
                  <a
                    key={m.label}
                    href={m.href}
                    className="group/pill inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full transition-all duration-200"
                    style={{
                      fontSize: '0.8125rem',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.07)',
                      color: '#475569',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement
                      el.style.borderColor = 'rgba(6,182,212,0.25)'
                      el.style.color = '#94a3b8'
                      el.style.background = 'rgba(6,182,212,0.05)'
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement
                      el.style.borderColor = 'rgba(255,255,255,0.07)'
                      el.style.color = '#475569'
                      el.style.background = 'rgba(255,255,255,0.03)'
                    }}
                  >
                    {m.label}
                    <ExternalLink size={9} className="opacity-0 group-hover/pill:opacity-60 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>

          </div>
        </motion.div>

        {/* ── Core Team + Co-Founder — two equal cards ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 lg:items-stretch">

          {/* Core Team */}
          <motion.div
            className="rounded-2xl p-8"
            style={CARD}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.08 }}
          >
            <p className="uppercase tracking-[0.2em] mb-8" style={{ fontSize: '0.75rem', color: '#334155' }}>
              Core Team
            </p>
            <div className="space-y-5">
              {team.map((m) => (
                <div key={m.name} className="flex items-center gap-4">
                  <InitialsAvatar initials={m.initials} />
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="font-semibold" style={{ fontSize: '1rem', color: '#f8fafc' }}>
                      {m.name}
                    </span>
                    <RolePill label={m.role} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Co-Founder — Ionuț Vîlceanu */}
          <motion.div
            className="rounded-2xl p-8"
            style={CARD}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.16 }}
          >
            <p className="uppercase tracking-[0.2em] mb-8" style={{ fontSize: '0.75rem', color: '#334155' }}>
              Co-Founder
            </p>
            <div className="flex items-center gap-4 mb-6">
              <InitialsAvatar initials="IV" accent="#8b5cf6" />
              <div className="flex items-center gap-3 flex-wrap">
                <span className="font-semibold" style={{ fontSize: '1rem', color: '#f8fafc' }}>
                  Ionuț Vîlceanu
                </span>
                <RolePill label="Marketing · Bybit EU" accent="#8b5cf6" />
              </div>
            </div>
            <p className="leading-[1.8] mb-7" style={{ fontSize: '0.9375rem', color: '#64748b' }}>
              Led operations and international initiatives at COINsiglieri. Currently Lead
              Marketing Manager at Bybit EU — bringing Web3-native expertise to one of the
              world's largest crypto exchanges.
            </p>
            <a
              href="https://www.ionutvilceanu.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all duration-200"
              style={{
                fontSize: '0.875rem',
                background: 'rgba(139,92,246,0.08)',
                border: '1px solid rgba(139,92,246,0.2)',
                color: '#a78bfa',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'rgba(139,92,246,0.14)'
                el.style.borderColor = 'rgba(139,92,246,0.4)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'rgba(139,92,246,0.08)'
                el.style.borderColor = 'rgba(139,92,246,0.2)'
              }}
            >
              <Globe size={13} />
              ionutvilceanu.com
            </a>
          </motion.div>

        </div>

        {/* ── Global Footprint — full-width ── */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="uppercase tracking-[0.2em] mb-6" style={{ fontSize: '0.75rem', color: '#334155' }}>
            Global Footprint
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {cities.map((city) => (
              <span
                key={city}
                className="px-4 py-2 rounded-full font-medium"
                style={{
                  fontSize: '0.9375rem',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  color: '#64748b',
                }}
              >
                {city}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
