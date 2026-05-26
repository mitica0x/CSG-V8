import { motion, AnimatePresence } from 'motion/react'

interface Props {
  isVisible: boolean
  onComplete: () => void
}

export default function LoadingScreen({ isVisible, onComplete }: Props) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ background: '#09090b' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          onAnimationComplete={onComplete}
        >
          {/* Radial glow background */}
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(24,180,212,0.08) 0%, transparent 70%)',
            }}
          />

          <motion.div
            className="flex flex-col items-center gap-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Logo */}
            <motion.div
              className="logo-glow"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span
                className="text-5xl font-semibold select-none"
                style={{
                  fontFamily: 'Geist, sans-serif',
                  letterSpacing: '-0.02em',
                }}
              >
                <span style={{ color: '#e4e4e7' }}>Coin</span>
                <span style={{ color: '#18b4d4' }}>Siglieri</span>
              </span>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              className="h-px rounded-full"
              style={{ background: 'rgba(255,255,255,0.08)', width: 220 }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{ background: '#18b4d4' }}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.9, ease: 'easeInOut', delay: 0.2 }}
                onAnimationComplete={() => {
                  setTimeout(onComplete, 150)
                }}
              />
            </motion.div>

            <motion.p
              className="text-xs uppercase"
              style={{ color: '#71717a', letterSpacing: '0.22em', fontFamily: 'Geist Mono, monospace' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              In the market since 2017
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
