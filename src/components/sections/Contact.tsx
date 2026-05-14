import { useState } from 'react'
import { motion } from 'motion/react'
import { Send, Upload, Mail } from 'lucide-react'

const stages = ['Idea', 'Concept', 'MVP', 'Launched', 'Scaling']
const budgets = ['Under €5k', '€5k – €15k', '€15k – €50k', '€50k+']
const serviceOptions = [
  'Blockchain & Web3', 'Products / MVP', 'Strategic Advisory',
  'Business & Legal', 'Marketing & PR', 'Fundraising',
  'Brand Awareness', 'Digitalization', 'Crypto POS', 'Competition',
]

const baseInput: React.CSSProperties = {
  width: '100%',
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: 10,
  padding: '12px 14px',
  color: '#f8fafc',
  fontSize: '0.875rem',
  outline: 'none',
  fontFamily: 'Inter, sans-serif',
  transition: 'border-color 0.2s, box-shadow 0.2s',
}

const focusedInput: React.CSSProperties = {
  ...baseInput,
  borderColor: 'rgba(6,182,212,0.45)',
  boxShadow: '0 0 0 3px rgba(6,182,212,0.08)',
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.75rem',
  fontWeight: 500,
  color: '#475569',
  marginBottom: 7,
  letterSpacing: '0.02em',
}

export default function Contact() {
  const [selected, setSelected] = useState<string[]>([])
  const [fileName, setFileName] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState('')

  const toggle = (s: string) =>
    setSelected((p) => p.includes(s) ? p.filter((x) => x !== s) : [...p, s])

  const inp = (name: string): React.CSSProperties =>
    focused === name ? focusedInput : baseInput

  return (
    <section
      id="contact"
      className="py-32 relative overflow-hidden"
      style={{ background: '#030712' }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: 900, height: 400,
          background: 'radial-gradient(ellipse, rgba(6,182,212,0.05) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: '#22d3ee' }}>
            Let's Build
          </p>
          <h2
            className="font-bold mb-5"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', color: '#f8fafc', letterSpacing: '-0.02em' }}
          >
            Start Your Project
          </h2>
          <p className="text-base leading-relaxed" style={{ color: '#64748b' }}>
            We'll review your project, needs, and direction, then come back with an initial
            assessment and estimated budget.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            className="text-center py-24"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.3)' }}
            >
              <Send size={22} style={{ color: '#22d3ee' }} />
            </div>
            <h3 className="font-bold text-2xl mb-3" style={{ color: '#f8fafc' }}>Message Sent</h3>
            <p style={{ color: '#64748b' }}>We'll be in touch shortly. Confidential handling guaranteed.</p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}
            className="space-y-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label style={labelStyle}>Full Name *</label>
                <input type="text" required placeholder="Your name" style={inp('name')}
                  onFocus={() => setFocused('name')} onBlur={() => setFocused('')} />
              </div>
              <div>
                <label style={labelStyle}>Email *</label>
                <input type="email" required placeholder="your@email.com" style={inp('email')}
                  onFocus={() => setFocused('email')} onBlur={() => setFocused('')} />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label style={labelStyle}>Phone</label>
                <input type="tel" placeholder="+1 (234) 567-8900" style={inp('phone')}
                  onFocus={() => setFocused('phone')} onBlur={() => setFocused('')} />
              </div>
              <div>
                <label style={labelStyle}>Company</label>
                <input type="text" placeholder="Your company / project" style={inp('company')}
                  onFocus={() => setFocused('company')} onBlur={() => setFocused('')} />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label style={labelStyle}>Website</label>
                <input type="url" placeholder="https://yourproject.io" style={inp('website')}
                  onFocus={() => setFocused('website')} onBlur={() => setFocused('')} />
              </div>
              <div>
                <label style={labelStyle}>Project Stage</label>
                <select style={inp('stage')} onFocus={() => setFocused('stage')} onBlur={() => setFocused('')}>
                  <option value="" style={{ background: '#0a0f1e' }}>Select stage...</option>
                  {stages.map((s) => <option key={s} value={s} style={{ background: '#0a0f1e' }}>{s}</option>)}
                </select>
              </div>
            </div>

            <div>
              <label style={labelStyle}>Budget Range</label>
              <select style={inp('budget')} onFocus={() => setFocused('budget')} onBlur={() => setFocused('')}>
                <option value="" style={{ background: '#0a0f1e' }}>Select budget...</option>
                {budgets.map((b) => <option key={b} value={b} style={{ background: '#0a0f1e' }}>{b}</option>)}
              </select>
            </div>

            <div>
              <label style={labelStyle}>Services Needed</label>
              <div className="flex flex-wrap gap-2">
                {serviceOptions.map((s) => {
                  const on = selected.includes(s)
                  return (
                    <button
                      key={s} type="button" onClick={() => toggle(s)}
                      className="px-3 py-2 rounded-lg text-xs font-medium cursor-pointer transition-all duration-200"
                      style={{
                        background: on ? 'rgba(6,182,212,0.1)' : 'rgba(255,255,255,0.03)',
                        border: `1px solid ${on ? 'rgba(6,182,212,0.38)' : 'rgba(255,255,255,0.08)'}`,
                        color: on ? '#22d3ee' : '#64748b',
                      }}
                    >
                      {s}
                    </button>
                  )
                })}
              </div>
            </div>

            <div>
              <label style={labelStyle}>Project Description *</label>
              <textarea required rows={4} placeholder="Describe your project, goals, and what you're looking to achieve..."
                style={{ ...inp('desc'), resize: 'vertical', minHeight: 110 } as any}
                onFocus={() => setFocused('desc')} onBlur={() => setFocused('')} />
            </div>

            <div>
              <label style={labelStyle}>Current Challenges</label>
              <textarea rows={3} placeholder="What problems are you trying to solve?"
                style={{ ...inp('chal'), resize: 'vertical', minHeight: 90 } as any}
                onFocus={() => setFocused('chal')} onBlur={() => setFocused('')} />
            </div>

            <div>
              <label style={labelStyle}>Attachments (optional)</label>
              <label
                className="flex items-center gap-3 cursor-pointer rounded-xl p-4 transition-all duration-200"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px dashed rgba(255,255,255,0.09)',
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(6,182,212,0.28)')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.09)')}
              >
                <Upload size={15} style={{ color: '#64748b' }} />
                <span className="text-sm" style={{ color: '#64748b' }}>
                  {fileName || 'Pitch deck, whitepaper, or any relevant doc'}
                </span>
                <input type="file" className="hidden" accept=".pdf,.doc,.docx,.ppt,.pptx"
                  onChange={(e) => setFileName(e.target.files?.[0]?.name || '')} />
              </label>
            </div>

            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" required className="mt-0.5" style={{ accentColor: '#06b6d4' }} />
              <span className="text-xs leading-relaxed" style={{ color: '#475569' }}>
                I agree to C<span style={{ color: '#06b6d4' }}>0</span>insiglieri handling my information with full confidentiality.
                No spam. No sharing. Fast response guaranteed.
              </span>
            </label>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 py-4 rounded-xl font-bold text-sm cursor-pointer transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #06b6d4, #0ea5e9)',
                color: '#030712',
                border: 'none',
                boxShadow: '0 0 28px rgba(6,182,212,0.38)',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = '0 0 50px rgba(6,182,212,0.65)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = '0 0 28px rgba(6,182,212,0.38)')}
            >
              <Send size={15} />
              Submit Project
            </button>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href="mailto:madalin@coinsiglieri.com"
                className="flex items-center gap-2 text-xs transition-colors duration-200"
                style={{ color: '#334155', textDecoration: 'none' }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#94a3b8')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#334155')}
              >
                <Mail size={12} />
                madalin@coinsiglieri.com
              </a>
              <span style={{ color: '#1e293b', fontSize: '0.6rem' }}>·</span>
              <span className="text-xs" style={{ color: '#334155' }}>
                Confidential handling · Fast response · Serious projects only
              </span>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  )
}
