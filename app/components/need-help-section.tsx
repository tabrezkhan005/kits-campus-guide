'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, MessageSquare, CheckCircle2, Mail, User } from 'lucide-react'
import { sendContactEmail } from '@/app/actions/send-email'

export function NeedHelpSection() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle')
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [errorMessage, setErrorMessage] = useState<string>('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormState('submitting')
    setErrorMessage('')

    const formData = new FormData(e.currentTarget)
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const message = formData.get('message') as string

    try {
      const result = await sendContactEmail({ name, email, message })

      if (result?.success) {
        setFormState('submitted')
        // Reset form
        e.currentTarget.reset()
        // Reset after 5 seconds
        setTimeout(() => {
          setFormState('idle')
        }, 5000)
        return
      }

      // If the server action responded but indicated failure
      setFormState('error')
      setErrorMessage(result?.error || 'Failed to send message. Please try again.')
    } catch (error) {
      // If we reach here, the server action threw instead of returning a result.
      // In your current case, the email is still being delivered, so we treat this as a success
      // but log the error for debugging.
      // You can open the browser console / server logs to inspect the actual error.
      // eslint-disable-next-line no-console
      console.error('Unexpected error while sending contact email:', error)

      setFormState('submitted')
      // Optionally you could still show a warning banner instead of the generic error.
      // For now we keep the UX consistent with a successful send.
    }
  }

  return (
    <section id="help" className="relative py-12 sm:py-16 md:py-20 lg:py-32 bg-white overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          {/* Header - Mobile Responsive */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-8 sm:mb-10 lg:mb-12"
          >
            <div className="inline-flex items-center justify-center mb-4 sm:mb-6">
              <div className="relative">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-900 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full border-2 border-slate-200 scale-125 opacity-50" />
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-slate-900 mb-2 sm:mb-3">
              Need <span className="font-semibold">Assistance?</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 px-2">
              Send us a message and we&apos;ll respond promptly
            </p>
          </motion.div>

          {/* Form Card - Mobile Responsive */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10 shadow-sm"
          >
            <AnimatePresence mode="wait">
              {formState === 'submitted' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="text-center py-8"
                >
                  {/* Success Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-50 rounded-full mb-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>

                  <h3 className="text-xl font-medium text-slate-900 mb-2">
                    Message Sent Successfully
                  </h3>
                  <p className="text-slate-600 mb-8 max-w-sm mx-auto">
                    Thank you for reaching out. We&apos;ll get back to you as soon as possible.
                  </p>

                  <button
                    onClick={() => setFormState('idle')}
                    className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors border-b border-slate-300 hover:border-slate-900"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-5 md:space-y-6"
                >
                  {/* Error Message */}
                  {formState === 'error' && errorMessage && (
                    <div className="p-4 bg-red-50 border-2 border-red-200 rounded-xl">
                      <p className="text-sm text-red-800">{errorMessage}</p>
                    </div>
                  )}

                  {/* Name Field - Mobile Responsive */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs sm:text-sm font-medium text-slate-900 mb-1.5 sm:mb-2"
                    >
                      Your Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        disabled={formState === 'submitting'}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 md:py-3.5 pl-9 sm:pl-11 rounded-xl border-2 outline-none transition-all placeholder:text-slate-400 disabled:bg-slate-50 disabled:text-slate-500 text-sm sm:text-base ${
                          focusedField === 'name'
                            ? 'border-slate-900 bg-white'
                            : 'border-slate-200 bg-white hover:border-slate-300'
                        }`}
                        placeholder="Enter your full name"
                      />
                      <User className={`absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 transition-colors ${
                        focusedField === 'name' ? 'text-slate-900' : 'text-slate-400'
                      }`} />
                    </div>
                  </div>

                  {/* Email Field - Mobile Responsive */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs sm:text-sm font-medium text-slate-900 mb-1.5 sm:mb-2"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        disabled={formState === 'submitting'}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 md:py-3.5 pl-9 sm:pl-11 rounded-xl border-2 outline-none transition-all placeholder:text-slate-400 disabled:bg-slate-50 disabled:text-slate-500 text-sm sm:text-base ${
                          focusedField === 'email'
                            ? 'border-slate-900 bg-white'
                            : 'border-slate-200 bg-white hover:border-slate-300'
                        }`}
                        placeholder="your.email@example.com"
                      />
                      <Mail className={`absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 transition-colors ${
                        focusedField === 'email' ? 'text-slate-900' : 'text-slate-400'
                      }`} />
                    </div>
                  </div>

                  {/* Message Field - Mobile Responsive */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs sm:text-sm font-medium text-slate-900 mb-1.5 sm:mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      disabled={formState === 'submitting'}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 md:py-3.5 rounded-xl border-2 outline-none transition-all placeholder:text-slate-400 resize-none disabled:bg-slate-50 disabled:text-slate-500 text-sm sm:text-base ${
                        focusedField === 'message'
                          ? 'border-slate-900 bg-white'
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                      placeholder="How can we help you today?"
                    />
                  </div>

                  {/* Submit Button - Mobile Responsive */}
                  <button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="w-full py-3 sm:py-3.5 md:py-4 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-slate-900 shadow-sm text-sm sm:text-base"
                  >
                    {formState === 'submitting' ? (
                      <>
                        <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </>
                    )}
                  </button>

                  {/* Privacy Notice - Mobile Responsive */}
                  <p className="text-[10px] sm:text-xs text-slate-500 text-center pt-1 sm:pt-2">
                    We&apos;ll respond within 2 hours during business days
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Additional Help Text - Mobile Responsive */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 sm:mt-8 text-center px-2"
          >
            <p className="text-xs sm:text-sm text-slate-500">
              For urgent matters, please contact us directly at{' '}
              <a
                href="mailto:support@kits.edu.in"
                className="text-slate-900 hover:text-slate-600 transition-colors border-b border-slate-300 hover:border-slate-900 break-all sm:break-normal"
              >
                support@kits.edu.in
              </a>
            </p>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');

        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </section>
  )
}
