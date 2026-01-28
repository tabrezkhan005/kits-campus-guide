'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Circle } from 'lucide-react'
import { BlurFade } from '@/components/ui/blur-fade'

const announcements = [
  {
    id: 1,
    category: 'Placement',
    title: 'Infosys Campus Drive 2024 - Registrations Open',
    date: 'Today',
    isNew: true,
  },
  {
    id: 2,
    category: 'Academic',
    title: 'End Semester Examinations Schedule Released',
    date: 'Tomorrow',
    isNew: true,
  },
  {
    id: 3,
    category: 'Event',
    title: 'Annual Tech Fest - Innovation 2024 Coming Soon',
    date: 'Feb 15',
    isNew: false,
  },
]

export function AnnouncementBar() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white border-t border-neutral-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header - Mobile Responsive */}
        <BlurFade delay={0} duration={0.6} inView={true}>
          <div className="mb-8 sm:mb-10 lg:mb-12">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="w-6 sm:w-8 h-px bg-neutral-300" />
              <span className="text-[10px] sm:text-xs font-medium tracking-widest uppercase text-neutral-500">
                Updates
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 sm:gap-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-900">
                Latest Announcements
              </h2>
              <motion.a
                href="#"
                whileHover={{ x: 4 }}
                className="flex items-center gap-2 text-xs sm:text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                View all
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </motion.a>
            </div>
          </div>
        </BlurFade>

        {/* Announcements List - Mobile Responsive */}
        <div className="space-y-2.5 sm:space-y-3">
          {announcements.map((item, index) => (
            <BlurFade key={item.id} delay={0.1 + index * 0.08} duration={0.5} inView={true}>
              <motion.a
                href="#"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-3.5 sm:p-4 md:p-5 lg:p-6 rounded-xl bg-neutral-50 border border-neutral-100 hover:border-neutral-200 active:border-neutral-300 hover:bg-white transition-all duration-300 cursor-pointer"
              >
                {/* Left: Category & Title */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                    <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium text-neutral-600 bg-neutral-200/60 rounded-md uppercase tracking-wide">
                      {item.category}
                    </span>
                    {item.isNew && (
                      <span className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-medium text-emerald-600">
                        <Circle className="w-1.5 h-1.5 fill-current" />
                        New
                      </span>
                    )}
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg font-medium text-neutral-900 group-hover:text-neutral-700 transition-colors line-clamp-2 sm:truncate">
                    {item.title}
                  </h3>
                </div>

                {/* Right: Date & Arrow */}
                <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-4 md:gap-6 lg:gap-8 flex-shrink-0">
                  <span className="text-[10px] sm:text-xs md:text-sm text-neutral-400 font-medium whitespace-nowrap">
                    {item.date}
                  </span>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 group-hover:border-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-all duration-300">
                    <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                  </div>
                </div>
              </motion.a>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}
