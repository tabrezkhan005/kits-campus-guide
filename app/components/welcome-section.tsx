'use client'

import Image from 'next/image'
import { BlurFade } from '@/components/ui/blur-fade'
import { motion } from 'framer-motion'
import { Monitor, Users2, Building, ArrowRight } from 'lucide-react'

interface WelcomeCard {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  image: string
  features: string[]
}

const welcomeCards: WelcomeCard[] = [
  {
    id: 'rooms',
    title: 'Room Locations',
    description: 'Find any classroom, lab, or seminar hall with detailed directions.',
    icon: <Monitor className="w-5 h-5" />,
    image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&h=600&fit=crop',
    features: ['Classrooms', 'Labs', 'Halls'],
  },
  {
    id: 'staff',
    title: 'Faculty Directory',
    description: 'Locate faculty offices and get contact information instantly.',
    icon: <Users2 className="w-5 h-5" />,
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop',
    features: ['HOD Offices', 'Faculty', 'Admin'],
  },
  {
    id: 'facilities',
    title: 'Campus Facilities',
    description: 'Explore all campus amenities from library to sports complex.',
    icon: <Building className="w-5 h-5" />,
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop',
    features: ['Library', 'Sports', 'Cafeteria'],
  },
]

export function WelcomeSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="relative z-10">
        {/* Section Header - Mobile Responsive */}
        <BlurFade delay={0.1} duration={0.6} inView={true}>
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="w-6 sm:w-8 h-px bg-neutral-300" />
              <span className="text-[10px] sm:text-xs font-medium tracking-widest uppercase text-neutral-500">
                Discover
              </span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 sm:gap-6">
              <div className="max-w-xl">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-tight text-neutral-900 mb-2 sm:mb-3 lg:mb-4">
                  Welcome to KITS
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-neutral-500 leading-relaxed">
                  Your comprehensive guide to navigating our campus. Find everything you need.
                </p>
              </div>

              <motion.button
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                className="self-start lg:self-auto flex items-center gap-2 text-xs sm:text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors"
              >
                View all locations
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </motion.button>
            </div>
          </div>
        </BlurFade>

        {/* Cards - Mobile Responsive Horizontal Layout */}
        <div className="space-y-3 sm:space-y-4">
          {welcomeCards.map((card, index) => (
            <BlurFade key={card.id} delay={0.15 + index * 0.08} duration={0.5} inView={true}>
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="group cursor-pointer"
                role="button"
                tabIndex={0}
                aria-label={`Navigate to ${card.title}`}
              >
                <div className="flex flex-col sm:flex-row gap-0 bg-white rounded-xl overflow-hidden border border-neutral-200 hover:border-neutral-300 active:border-neutral-400 transition-all duration-300 hover:shadow-lg hover:shadow-neutral-200/60">
                  {/* Image Section - Mobile Responsive */}
                  <div className="relative w-full sm:w-48 md:w-56 lg:w-64 xl:w-72 h-40 sm:h-44 md:h-auto flex-shrink-0 overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 288px"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>

                  {/* Content Section - Mobile Responsive */}
                  <div className="flex-1 p-4 sm:p-5 md:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-600 group-hover:bg-neutral-900 group-hover:text-white transition-all duration-300 flex-shrink-0">
                          {card.icon}
                        </div>
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-neutral-900 truncate">
                          {card.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm md:text-base text-neutral-500 leading-relaxed mb-3 sm:mb-0 max-w-lg line-clamp-2 sm:line-clamp-none">
                        {card.description}
                      </p>
                    </div>

                    {/* Features Tags - Mobile Responsive */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 sm:flex-nowrap">
                      {card.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium text-neutral-600 bg-neutral-100 rounded-full whitespace-nowrap"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Arrow - Mobile Responsive */}
                    <div className="hidden sm:flex w-9 h-9 md:w-10 md:h-10 rounded-full border border-neutral-200 items-center justify-center text-neutral-400 group-hover:border-neutral-900 group-hover:text-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-all duration-300 flex-shrink-0 ml-2 sm:ml-4">
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}
