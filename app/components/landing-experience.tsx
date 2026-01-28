'use client'

import { useEffect, useState } from 'react'
import { BlurFade } from '@/components/ui/blur-fade'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'

interface LandingExperienceProps {
  onComplete: () => void
}

export function LandingExperience({ onComplete }: LandingExperienceProps) {
  const [showGreeting, setShowGreeting] = useState(true)
  const [showWelcome, setShowWelcome] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      setTimeout(() => {
        onComplete()
      }, 500)
      return
    }

    // Show greeting first for 1.5 seconds (reduced from 2.5s)
    const greetingTimer = setTimeout(() => {
      setShowGreeting(false)
      // Show welcome after greeting fades out
      setTimeout(() => {
        setShowWelcome(true)
      }, 500) // Reduced from 800ms
    }, 1500) // Reduced from 2500ms

    // Transition to dashboard after welcome is shown for 1.5 seconds
    const completeTimer = setTimeout(() => {
      onComplete()
    }, 4000) // Reduced from 6000ms (1.5s greeting + 0.5s transition + 1.5s welcome + buffer)

    return () => {
      clearTimeout(greetingTimer)
      clearTimeout(completeTimer)
    }
  }, [onComplete])

  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return 'Good Morning'
    if (hour < 18) return 'Good Afternoon'
    return 'Good Evening'
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
      {/* Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50" />

      {/* Animated Background Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#005BAB]/10 rounded-full blur-[150px]"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#0077D4]/10 rounded-full blur-[120px]"
      />

      {/* Decorative Grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,91,171,.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,91,171,.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          {/* Professional Greeting - appears first, then disappears */}
          {showGreeting && (
            <motion.div
              key="greeting"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="flex flex-col items-center"
            >
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-6 sm:mb-8"
              >
                <Image
                  src="/assets/images/logo/kitslogo-bg.png"
                  alt="KITS Logo"
                  width={100}
                  height={100}
                  className="object-contain opacity-80 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
                  priority
                />
              </motion.div>

              <BlurFade
                delay={0}
                duration={0.9}
                yOffset={25}
                blur="10px"
                inView={true}
                className="mb-0"
              >
                <div
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight tracking-[0.06em] sm:tracking-[0.08em]"
                  style={{
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    background: 'linear-gradient(135deg, #0f172a 0%, #334155 50%, #0f172a 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontWeight: 200,
                  }}
                >
                  {getGreeting()}
                </div>
              </BlurFade>

              {/* Animated Line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                className="mt-6 sm:mt-8 h-0.5 w-24 sm:w-32 bg-gradient-to-r from-transparent via-[#005BAB]/30 to-transparent"
              />
            </motion.div>
          )}

          {/* Welcome text - appears after greeting disappears */}
          {showWelcome && (
            <motion.div
              key="welcome"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="flex flex-col items-center"
            >
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-5 sm:mb-6 md:mb-8"
              >
                <Image
                  src="/assets/images/logo/kitslogo-bg.png"
                  alt="KITS Logo"
                  width={80}
                  height={80}
                  className="object-contain opacity-80 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20"
                  priority
                />
              </motion.div>

              <BlurFade
                delay={0}
                duration={1.2}
                yOffset={35}
                blur="12px"
                inView={true}
                className="mt-0"
              >
                <div
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light tracking-wide max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto leading-[1.5] sm:leading-[1.6] px-2"
                  style={{
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    background: 'linear-gradient(135deg, #005BAB 0%, #0077D4 50%, #005BAB 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    letterSpacing: '0.02em',
                    fontWeight: 300,
                  }}
                >
                  Welcome to KKR & KSR Institute of Technology and Sciences
                </div>
              </BlurFade>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-6 sm:mt-8 flex items-center gap-1.5 sm:gap-2">

                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                    className="w-2 h-2 rounded-full bg-[#005BAB]/50"
                  />
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
