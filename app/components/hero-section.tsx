'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Search, ArrowDown, MapPin } from 'lucide-react'
import Link from 'next/link'

export function HeroSection() {
  return (
    <div className="relative w-full min-h-[100vh] overflow-hidden bg-[#0f0f0f]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/bg.jpg"
          alt="Campus Background"
          fill
          className="object-cover"
          priority
          quality={95}
        />
        {/* Reduced Dark Overlay - More visible background */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
      </div>

      {/* Subtle Grain Texture */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 min-h-[100vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Minimal Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 sm:mb-10"
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/20 text-white/70 text-xs sm:text-sm font-medium tracking-wide">
              <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>KITS Campus Guide</span>
            </div>
          </motion.div>

          {/* Main Headline - White Text */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-4 sm:mb-6"
          >
            <span className="block text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tight text-white leading-[1.1]">
              Find Your Way
            </span>
            <span className="block text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tight text-white/80 leading-[1.1] mt-1 sm:mt-2">
              Around Campus
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-12 md:mb-14 max-w-xl sm:max-w-2xl mx-auto text-white/70 font-normal leading-relaxed px-2"
          >
            Discover classrooms, offices, and facilities instantly.
            Your complete navigation companion for KITS.
          </motion.p>

          {/* Clickable Search Bar - Links to Search Page */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="max-w-xl sm:max-w-2xl mx-auto w-full"
          >
            <Link href="/search">
              <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="relative flex items-center bg-white/[0.08] backdrop-blur-sm rounded-full border border-white/10 hover:border-white/20 active:border-white/30 hover:bg-white/[0.12] transition-all duration-300 cursor-pointer"
              >
                <div className="pl-4 sm:pl-6">
                  <Search className="w-4 h-4 sm:w-5 sm:h-5 text-white/40" />
                </div>
                <div className="w-full px-3 sm:px-4 py-3 sm:py-4 text-sm sm:text-base text-white/30">
                  Search rooms, faculty...
                </div>
                <div className="m-1 sm:m-1.5 px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-black bg-white rounded-full">
                  Search
                </div>
              </motion.div>
            </Link>

            {/* Quick Search Tags */}
            <div className="mt-4 sm:mt-6 flex flex-wrap justify-center gap-1.5 sm:gap-2">
              {[
                { name: 'Placement', href: '/management' },
                { name: 'Washrooms', href: '/washrooms' },
                { name: 'Blocks', href: '/blocks' },
                { name: 'Canteen', href: '/food-court' },
                { name: 'Management', href: '/management' },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-white/50 hover:text-white/80 active:text-white hover:bg-white/[0.05] active:bg-white/[0.08] rounded-full border border-transparent hover:border-white/10 transition-all duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-3 text-white/30"
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
