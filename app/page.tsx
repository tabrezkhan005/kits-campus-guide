'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { LandingExperience } from './components/landing-experience'
import { Dashboard } from './components/dashboard'

export default function Home() {
  const [showDashboard, setShowDashboard] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Check if user has already seen landing experience in this session
  useEffect(() => {
    const hasSeenLanding = sessionStorage.getItem('hasSeenLanding')
    if (hasSeenLanding === 'true') {
      setShowDashboard(true)
    }
    setIsLoading(false)
  }, [])

  const handleLandingComplete = () => {
    // Mark that user has seen the landing experience
    sessionStorage.setItem('hasSeenLanding', 'true')

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      setShowDashboard(true)
      return
    }

    // Small delay for smooth transition
    setTimeout(() => {
      setShowDashboard(true)
    }, 300)
  }

  // Show nothing while checking sessionStorage to avoid flash
  if (isLoading) {
    return null
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {!showDashboard && (
          <motion.div
            key="landing"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <LandingExperience onComplete={handleLandingComplete} />
          </motion.div>
        )}
        {showDashboard && (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Dashboard />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
