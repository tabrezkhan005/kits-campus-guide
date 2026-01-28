'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Menu, X, ChevronRight } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Search', href: '/search' },
  { name: 'Help', href: '#help' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-neutral-200/50'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
            {/* Logo with background for visibility - Mobile Responsive */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className={`relative flex items-center rounded-xl transition-all duration-300 ${
                isScrolled
                  ? 'p-0'
                  : 'p-1.5 sm:p-2 bg-white/95 backdrop-blur-sm shadow-lg'
              }`}
            >
              <Image
                src="/assets/images/logo/kitslogo-bg.png"
                alt="KITS Logo"
                width={140}
                height={44}
                className="object-contain h-8 sm:h-10 md:h-11 w-auto"
                priority
              />
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ scale: 1.02 }}
                  className={`px-3 md:px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    isScrolled
                      ? 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 sm:p-2.5 rounded-xl transition-all duration-300 ${
                isScrolled
                  ? 'text-neutral-700 hover:bg-neutral-100'
                  : 'text-white bg-white/10 hover:bg-white/20'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu - Mobile Responsive */}
      <motion.div
        initial={false}
        animate={isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className={`fixed inset-x-0 top-14 sm:top-16 z-40 lg:hidden ${isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        <div className="bg-white shadow-xl border border-neutral-200 mx-3 sm:mx-4 rounded-xl overflow-hidden">
          <nav className="p-1.5 sm:p-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50 rounded-lg transition-colors text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
                <ChevronRight className="w-4 h-4 text-neutral-400" />
              </a>
            ))}
          </nav>
        </div>
      </motion.div>

      {/* Backdrop */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  )
}
