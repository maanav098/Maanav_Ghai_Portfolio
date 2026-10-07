'use client'

import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, CheckCircle2, Download, Github, Linkedin, Mail, MapPin, XCircle } from 'lucide-react'
import { profile } from '@/lib/data'
import { SectionHeader, fadeUp, stagger } from '@/components/sections/SectionHeader'
import { MagneticButton } from '@/components/ui/MagneticButton'

type SubmitState = 'idle' | 'loading' | 'success' | 'error'

const quickLinks = [
  { label: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: 'GitHub', href: profile.social.github, icon: Github },
  { label: 'LinkedIn', href: profile.social.linkedin, icon: Linkedin },
]

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [message, setMessage] = useState('')
  const [state, setState] = useState<SubmitState>('idle')
  const [errorText, setErrorText] = useState('')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setState('loading')
    setErrorText('')

    try {
      const response = await fetch('/api/query', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, whatsapp, message }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error ?? 'Something went wrong. Please try again.')
      }

      setState('success')
      setName('')
      setEmail('')
      setWhatsapp('')
      setMessage('')
    } catch (error) {
      setState('error')
      setErrorText(error instanceof Error ? error.message : 'Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="section-shell pb-24">
      <div className="section-inner">
        <SectionHeader
          kicker="Contact"
          title="Open to building meaningful products with strong teams."
          copy={profile.availability}
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-10% 0px' }}
          className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start"
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }} className="panel spotlight-border rounded-[24px] p-6 sm:p-7">
            <p className="text-xs uppercase tracking-[0.18em] text-cyan-200/90">Get in touch</p>
            <p className="mt-3 text-sm leading-7 text-slate-200">
              Reach out directly, or send a message through the form and I&apos;ll get back to you as soon as I can.
            </p>

            <div className="mt-5 flex items-center gap-2 text-sm text-slate-300">
              <MapPin className="h-4 w-4 text-cyan-300/80" />
              {profile.location}
            </div>

            <div className="mt-5 grid gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="glass-chip inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm text-slate-100 hover:text-white"
                >
                  <link.icon className="h-4 w-4" />
                  {link.label}
                </a>
              ))}
            </div>

            <MagneticButton className="mt-6 block w-full">
              <a href={profile.resumeUrl} download="Maanav_Ghai_Resume.pdf" className="secondary-button w-full">
                <Download className="h-5 w-5" />
                Download Resume
              </a>
            </MagneticButton>
          </motion.div>

          <motion.div variants={fadeUp} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }} className="panel spotlight-border rounded-[24px] p-6 sm:p-7">
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-slate-400">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    required
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Your name"
                    className="form-field"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-slate-400">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="yourname@gmail.com"
                    className="form-field"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-whatsapp" className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-slate-400">
                  WhatsApp (optional)
                </label>
                <input
                  id="contact-whatsapp"
                  value={whatsapp}
                  onChange={(event) => setWhatsapp(event.target.value)}
                  placeholder="+91 00000 00000"
                  className="form-field"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-slate-400">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Tell me about the role or project..."
                  rows={5}
                  className="form-field resize-none"
                />
              </div>

              <MagneticButton strength={0.15}>
                <button type="submit" disabled={state === 'loading'} className="primary-button w-full disabled:cursor-not-allowed disabled:opacity-60">
                  {state === 'loading' ? 'Sending...' : 'Send Message'}
                  <ArrowUpRight className="h-5 w-5" />
                </button>
              </MagneticButton>

              {state === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  Message sent. Thanks for reaching out, I&apos;ll reply soon.
                </motion.p>
              )}

              {state === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 rounded-xl border border-rose-400/30 bg-rose-400/10 px-4 py-3 text-sm text-rose-200"
                >
                  <XCircle className="h-4 w-4" />
                  {errorText}
                </motion.p>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
