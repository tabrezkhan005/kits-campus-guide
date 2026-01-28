'use client'

import Image from 'next/image'
import Link from 'next/link'
import { BlurFade } from '@/components/ui/blur-fade'
import { motion } from 'framer-motion'
import { ArrowUpRight, Building2, Users, BookOpen, Utensils, MapPin, Briefcase } from 'lucide-react'

interface QuickAccessCard {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  image: string
  href: string
}

const quickAccessCards: QuickAccessCard[] = [
  {
    id: 'academic',
    title: 'Academic Blocks',
    description: 'All academic buildings and departments',
    icon: <Building2 className="w-5 h-5" />,
    image: '/explorecampus/academicblocks.png',
    href: '/blocks',
  },
  {
    id: 'placement',
    title: 'Placements',
    description: 'Placement companies and interview locations',
    icon: <Briefcase className="w-5 h-5" />,
    image: '/explorecampus/management.png',
    href: '/placement',
  },
  {
    id: 'management',
    title: 'Management',
    description: 'Executive leadership and department heads',
    icon: <Users className="w-5 h-5" />,
    image: '/explorecampus/management.png',
    href: '/management',
  },
  {
    id: 'library',
    title: 'Central Library',
    description: 'Books, journals, and study resources',
    icon: <BookOpen className="w-5 h-5" />,
    image: '/explorecampus/centrallibrary.png',
    href: '/library',
  },
  {
    id: 'washrooms',
    title: 'Washrooms',
    description: 'Restroom locations and facilities',
    icon: <MapPin className="w-5 h-5" />,
    image: '/explorecampus/washrooms.png',
    href: '/washrooms',
  },
  {
    id: 'food-court',
    title: 'Food Court',
    description: 'Canteen, cafeteria, and refreshments',
    icon: <Utensils className="w-5 h-5" />,
    image: '/explorecampus/foodcourt.png',
    href: '/food-court',
  },
]

export function QuickAccessCards() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      {/* Section Header - Mobile Responsive */}
      <BlurFade delay={0} duration={0.6} inView={true}>
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <div className="w-6 sm:w-8 h-px bg-neutral-300" />
            <span className="text-[10px] sm:text-xs font-medium tracking-widest uppercase text-neutral-500">
              Navigate
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-tight text-neutral-900 mb-2 sm:mb-3 lg:mb-4">
            Explore Campus
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-500 max-w-xl leading-relaxed">
            Quick access to the most visited locations across the campus.
          </p>
        </div>
      </BlurFade>

      {/* Cards Grid - Mobile Responsive */}
      <div className="grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {quickAccessCards.map((card, index) => (
          <BlurFade key={card.id} delay={index * 0.06} duration={0.5} inView={true}>
            <Link href={card.href} className="block h-full">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="group cursor-pointer relative bg-white rounded-xl overflow-hidden border border-neutral-200 hover:border-neutral-300 transition-all duration-300 hover:shadow-lg hover:shadow-neutral-200/60 h-full flex flex-col"
              >
                {/* Image Section - Mobile Responsive */}
                <div className="relative w-full aspect-[16/10] sm:aspect-[16/10] overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={index < 3}
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

                  {/* Arrow indicator - Mobile Responsive */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                    <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-900" />
                  </div>
                </div>

                {/* Content Section - Mobile Responsive */}
                <div className="p-4 sm:p-5 flex-1">
                  <div className="flex items-start justify-between gap-3 h-full">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-neutral-900 mb-1 group-hover:text-neutral-700 transition-colors truncate">
                        {card.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed line-clamp-2">
                        {card.description}
                      </p>
                    </div>
                    <div className="w-8 h-8 sm:w-9 sm:h-10 lg:w-10 lg:h-10 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-600 group-hover:bg-neutral-900 group-hover:text-white transition-all duration-300 flex-shrink-0">
                      {card.icon}
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          </BlurFade>
        ))}
      </div>
    </section>
  )
}
