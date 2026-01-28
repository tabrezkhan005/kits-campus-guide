'use client'

import { motion } from 'framer-motion'
import { Search, ArrowLeft, MapPin, Users, Building2, UtensilsCrossed, Briefcase, DoorOpen, BookOpen, Beaker } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

const searchCategories = [
  {
    id: 'placement',
    icon: Briefcase,
    title: 'Placement Cell',
    description: 'Training & placement offices',
    href: '#placement',
  },
  {
    id: 'washrooms',
    icon: DoorOpen,
    title: 'Washrooms',
    description: 'Restroom locations',
    href: '/washrooms',
  },
  {
    id: 'blocks',
    icon: Building2,
    title: 'Blocks',
    description: 'Academic buildings',
    href: '/blocks',
  },
  {
    id: 'labs',
    icon: Beaker,
    title: 'Labs & Workshops',
    description: 'Practical & research labs',
    href: '/labs',
  },
  {
    id: 'food-court',
    icon: UtensilsCrossed,
    title: 'Food Court',
    description: 'Canteen & cafeteria',
    href: '/food-court',
  },
  {
    id: 'management',
    icon: Users,
    title: 'Management',
    description: 'Administrative offices',
    href: '/management',
  },
  {
    id: 'library',
    icon: BookOpen,
    title: 'Central Library',
    description: 'Books & journals',
    href: '/library',
  },
]

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  const filteredCategories = searchCategories.filter(
    (cat) =>
      cat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href="/"
              className="p-2 -ml-2 text-neutral-500 hover:text-neutral-900 active:bg-neutral-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>

            {/* Search Bar */}
            <div className="flex-1">
              <div
                className={`relative flex items-center bg-neutral-100 rounded-xl border-2 transition-all duration-200 ${
                  isFocused ? 'border-neutral-900 bg-white' : 'border-transparent'
                }`}
              >
                <div className="pl-3 sm:pl-4">
                  <Search className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-400" />
                </div>
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder="Search locations..."
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none bg-transparent"
                  autoFocus
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-4xl px-4 sm:px-6 py-6 sm:py-8 md:py-12">
        {/* Section Header */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
            <div className="w-5 sm:w-6 h-px bg-neutral-300" />
            <span className="text-[10px] sm:text-xs font-medium tracking-widest uppercase text-neutral-400">
              Browse
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 tracking-tight">
            {searchQuery ? 'Search Results' : 'Quick Categories'}
          </h1>
        </div>

        {/* Categories Grid */}
        <div className="grid gap-2.5 sm:gap-3">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category, index) => (
              <motion.a
                key={category.id}
                href={category.href}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ x: 4 }}
                className="group flex items-center gap-3 sm:gap-4 md:gap-5 p-4 sm:p-5 md:p-6 bg-white rounded-xl border border-neutral-200 hover:border-neutral-300 active:border-neutral-400 hover:shadow-sm transition-all duration-200"
              >
                {/* Icon */}
                <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center rounded-lg sm:rounded-xl bg-neutral-100 text-neutral-600 group-hover:bg-neutral-900 group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <category.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-medium text-neutral-900 group-hover:text-neutral-700">
                    {category.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-500 truncate">
                    {category.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full border border-neutral-200 text-neutral-400 group-hover:border-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
              </motion.a>
            ))
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-neutral-100 text-neutral-400">
                <Search className="w-6 h-6" />
              </div>
              <p className="text-neutral-500">No results found for &quot;{searchQuery}&quot;</p>
              <p className="text-sm text-neutral-400 mt-1">Try a different search term</p>
            </div>
          )}
        </div>

        {/* Popular Searches */}
        {!searchQuery && (
          <div className="mt-12">
            <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-4">
              Popular Searches
            </h2>
            <div className="flex flex-wrap gap-2">
              {['CSE Block', 'Library', 'HOD Office', 'Auditorium', 'Lab', 'Principal Office'].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSearchQuery(tag)}
                  className="px-4 py-2 text-sm text-neutral-600 bg-white border border-neutral-200 rounded-full hover:border-neutral-300 hover:text-neutral-900 transition-all duration-200"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
