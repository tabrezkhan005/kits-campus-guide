'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Search, Briefcase, MapPin, X, Filter, Building2, ChevronDown, Download } from 'lucide-react'
import { useState, useMemo, useCallback } from 'react'
import Link from 'next/link'

interface PlacementEntry {
  sNo: number
  companyName: string
  roomNumber: string
}

const placementData: PlacementEntry[] = [
  { sNo: 1, companyName: 'Efftronics Systems Pvt Ltd', roomNumber: '212' },
  { sNo: 2, companyName: 'BOOK XPERT Pvt Ltd', roomNumber: 'Panel-11' },
  { sNo: 3, companyName: 'Drogo Drones Pvt Ltd', roomNumber: '205' },
  { sNo: 4, companyName: 'Techin IT Process Pvt Ltd-Technotask', roomNumber: '302' },
  { sNo: 5, companyName: 'Primaria Health Care', roomNumber: '302' },
  { sNo: 6, companyName: 'Apex software solutions', roomNumber: '305' },
  { sNo: 7, companyName: 'Future IT Solutions Ltd', roomNumber: '209' },
  { sNo: 8, companyName: 'Koya Consulting Inc', roomNumber: 'Panel-7' },
  { sNo: 9, companyName: 'Andhra Prime Hospitals', roomNumber: '303' },
  { sNo: 10, companyName: '7 Hills Pharmacy', roomNumber: '303' },
  { sNo: 11, companyName: 'BSR Infratech India Ltd', roomNumber: '303' },
  { sNo: 12, companyName: 'Lucas TVS', roomNumber: 'Panel-8' },
  { sNo: 13, companyName: 'Staff Cloud Solutions (Royal Enfield)', roomNumber: '305' },
  { sNo: 14, companyName: 'Hetero Drugs', roomNumber: '305' },
  { sNo: 15, companyName: 'Quess Corp Ltd (Leading Electric vehicles & Life science unit', roomNumber: '206' },
  { sNo: 16, companyName: 'Quess Corp Ltd (Leading Pharma & Electronics unit)', roomNumber: '206' },
  { sNo: 17, companyName: 'Quess corp Ltd- Smart Meter Installer', roomNumber: 'Panel-3' },
  { sNo: 18, companyName: 'Jayabheri Automotives Pvt Ltd', roomNumber: '211' },
  { sNo: 19, companyName: 'Varun Motors Pvt Ltd', roomNumber: 'Panel-4' },
  { sNo: 20, companyName: 'Forte Management Services', roomNumber: 'Panel-5' },
  { sNo: 21, companyName: 'Big Basket', roomNumber: 'Panel-6' },
  { sNo: 22, companyName: 'Joyalukkas', roomNumber: '306' },
  { sNo: 23, companyName: 'KapStone Services Ltd (ITC/Flipkart/Rane/D.Mart/Zepto/Nicomac)', roomNumber: '209' },
  { sNo: 24, companyName: 'SBI Cards-InnovSource', roomNumber: '306' },
  { sNo: 25, companyName: 'Muthoot Finance LTD', roomNumber: '211' },
  { sNo: 26, companyName: 'Mukku financial consulting', roomNumber: '309' },
  { sNo: 27, companyName: 'Nija Resource Management Pvt Ltd', roomNumber: '206' },
  { sNo: 28, companyName: 'PayTM Services', roomNumber: 'Panel-2' },
  { sNo: 29, companyName: 'Global Elite Tech Academy(Powered by Ganesh Computer Education)', roomNumber: '308' },
  { sNo: 30, companyName: 'CII-MCC (TATA Electronics)', roomNumber: '309' },
  { sNo: 31, companyName: 'Quess corp Ltd (D-Mart)', roomNumber: 'Panel-12' },
  { sNo: 32, companyName: 'Medplus Health Services Ltd', roomNumber: '312' },
  { sNo: 33, companyName: 'Apollo Pharmacy', roomNumber: '208' },
  { sNo: 34, companyName: 'Flipkart', roomNumber: 'Panel-1' },
  { sNo: 35, companyName: 'Aries Agro Ltd', roomNumber: '208' },
  { sNo: 36, companyName: 'Master Minds', roomNumber: '312' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.02,
      delayChildren: 0.05,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

type SortOption = 'default' | 'name-asc' | 'name-desc' | 'room-asc' | 'room-desc'

export default function PlacementPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState<SortOption>('default')
  const [showSortMenu, setShowSortMenu] = useState(false)


  // Enhanced search with fuzzy matching
  const filteredAndSortedData = useMemo(() => {
    const query = searchQuery.toLowerCase().trim()

    // Filter
    let filtered = placementData
    if (query) {
      filtered = placementData.filter((entry) => {
        const companyMatch = entry.companyName.toLowerCase().includes(query)
        const roomMatch = entry.roomNumber.toLowerCase().includes(query)
        // Also match if query is in the middle of words
        const words = entry.companyName.toLowerCase().split(/\s+/)
        const wordMatch = words.some(word => word.startsWith(query))
        return companyMatch || roomMatch || wordMatch
      })
    }

    // Sort
    let sorted = [...filtered]
    switch (sortBy) {
      case 'name-asc':
        sorted.sort((a, b) => a.companyName.localeCompare(b.companyName))
        break
      case 'name-desc':
        sorted.sort((a, b) => b.companyName.localeCompare(a.companyName))
        break
      case 'room-asc':
        sorted.sort((a, b) => {
          const roomA = a.roomNumber.replace(/\D/g, '')
          const roomB = b.roomNumber.replace(/\D/g, '')
          return parseInt(roomA || '999') - parseInt(roomB || '999')
        })
        break
      case 'room-desc':
        sorted.sort((a, b) => {
          const roomA = a.roomNumber.replace(/\D/g, '')
          const roomB = b.roomNumber.replace(/\D/g, '')
          return parseInt(roomB || '0') - parseInt(roomA || '0')
        })
        break
      default:
        // Keep original order
        break
    }

    return sorted
  }, [searchQuery, sortBy])

  const clearSearch = useCallback(() => {
    setSearchQuery('')
  }, [])

  const handleSortChange = useCallback((option: SortOption) => {
    setSortBy(option)
    setShowSortMenu(false)
  }, [])

  // Get unique room types
  const roomTypes = useMemo(() => {
    const types = new Set<string>()
    placementData.forEach(entry => {
      if (entry.roomNumber.toLowerCase().includes('panel')) {
        types.add('Panel')
      } else {
        types.add('Room')
      }
    })
    return Array.from(types)
  }, [])

  const sortOptions = [
    { value: 'default' as SortOption, label: 'Default Order' },
    { value: 'name-asc' as SortOption, label: 'Company Name (A-Z)' },
    { value: 'name-desc' as SortOption, label: 'Company Name (Z-A)' },
    { value: 'room-asc' as SortOption, label: 'Room Number (Low-High)' },
    { value: 'room-desc' as SortOption, label: 'Room Number (High-Low)' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Hero Header */}
      <header className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-12 sm:py-20">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-10">
            <Link href="/" className="hover:text-white transition-colors duration-200 flex items-center gap-1">
              Home
            </Link>
            <span className="text-slate-600">/</span>
            <Link href="/search" className="hover:text-white transition-colors duration-200">
              Search
            </Link>
            <span className="text-slate-600">/</span>
            <span className="text-white font-medium">Placements</span>
          </nav>

          {/* Title Section */}
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-start gap-5 mb-6">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/20 shadow-2xl">
                  <Briefcase className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight mb-3">
                    Campus <span className="font-semibold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Placements</span>
                  </h1>
                  <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
                    Discover placement companies and their interview locations. Use the search below to quickly find what you're looking for.
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 mt-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-xl rounded-lg flex items-center justify-center">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{placementData.length}</p>
                    <p className="text-sm text-slate-400">Companies</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">


                </div>

                {/* Job Mela Flyer */}
                <div className="w-full mt-2 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">
                      Andhra Pradesh State Skill Development Corporation Job Mela
                    </h3>
                    <p className="text-sm text-slate-300">
                      Download the official flyer for more details
                    </p>
                  </div>
                  <a
                    href="/apssdc-job-mela.xlsx"
                    download
                    className="flex justify-center items-center gap-2 px-5 py-2.5 bg-white text-slate-900 rounded-lg font-medium hover:bg-slate-100 transition-colors whitespace-nowrap w-full sm:w-auto"
                  >
                    <Download className="w-4 h-4" />
                    Click here to view
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom edge decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent" />
      </header>

      <main className="mx-auto max-w-7xl px-6 lg:px-8 py-10 sm:py-14">
        {/* Search and Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10"
        >
          <div className="bg-white border border-slate-200 rounded-2xl shadow-lg shadow-slate-900/5">
            {/* Search Bar */}
            <div className="p-5 sm:p-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search by company name or room number..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-12 py-3 sm:py-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5 transition-all text-slate-900 placeholder:text-slate-400 text-sm sm:text-base"
                  suppressHydrationWarning
                />
                <AnimatePresence>
                  {searchQuery && (
                    <motion.button
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      onClick={clearSearch}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-all"
                      aria-label="Clear search"
                    >
                      <X className="w-5 h-5" />
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Controls Bar */}
            <div className="border-t border-slate-200 px-4 sm:px-6 py-3 sm:py-4 bg-slate-50/50">
              <div className="flex flex-wrap items-center justify-between gap-4">
                {/* Results Count */}
                <div className="flex items-center gap-3">
                  <p className="text-sm text-slate-600">
                    <span className="font-semibold text-slate-900">{filteredAndSortedData.length}</span> {filteredAndSortedData.length === 1 ? 'company' : 'companies'}
                    {searchQuery && (
                      <span className="text-slate-500"> matching "{searchQuery}"</span>
                    )}
                  </p>
                  {searchQuery && (
                    <button
                      onClick={clearSearch}
                      className="text-sm text-slate-900 font-medium hover:underline underline-offset-2"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  {/* Sort Dropdown */}
                  <div className="relative">
                    <button
                      onClick={() => setShowSortMenu(!showSortMenu)}
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 bg-white border-2 border-slate-200 hover:border-slate-300 rounded-lg transition-all"
                    >
                      <Filter className="w-4 h-4" />
                      Sort
                      <ChevronDown className={`w-4 h-4 transition-transform ${showSortMenu ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {showSortMenu && (
                        <>
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-10"
                            onClick={() => setShowSortMenu(false)}
                          />
                          <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.15 }}
                            className="absolute right-0 top-full mt-2 w-56 bg-white border border-slate-200 rounded-xl shadow-xl shadow-slate-900/10 overflow-hidden z-20"
                          >
                            {sortOptions.map((option) => (
                              <button
                                key={option.value}
                                onClick={() => handleSortChange(option.value)}
                                className={`w-full px-4 py-3 text-left text-sm transition-colors ${sortBy === option.value
                                  ? 'bg-slate-900 text-white font-medium'
                                  : 'text-slate-700 hover:bg-slate-50'
                                  }`}
                              >
                                {option.label}
                              </button>
                            ))}
                          </motion.div>
                        </>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Placement Companies Grid */}
        <AnimatePresence mode="wait">
          {filteredAndSortedData.length > 0 ? (
            <motion.div
              key={`results-${filteredAndSortedData.length}`}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filteredAndSortedData.map((entry) => (
                <motion.div
                  key={entry.sNo}
                  variants={itemVariants}

                  className="group relative bg-white border-2 border-slate-200 rounded-2xl p-6 transition-all duration-300 hover:border-slate-900 hover:shadow-xl hover:shadow-slate-900/10 cursor-pointer overflow-hidden"
                >
                  {/* Hover gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="relative">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-slate-100 group-hover:bg-slate-900 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-slate-900/25">
                        <Briefcase className="w-6 h-6 text-slate-600 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg">
                          #{entry.sNo}
                        </span>
                      </div>
                    </div>

                    {/* Company Name */}
                    <h3 className="text-lg font-semibold text-slate-900 mb-4 leading-snug min-h-[3.5rem] line-clamp-2">
                      {entry.companyName}
                    </h3>

                    {/* Static Room Number */}
                    <div className="mt-auto pt-4 border-t border-slate-200">
                      <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">
                        Interview Location
                      </p>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-slate-900" strokeWidth={2} />
                        <span className="text-3xl font-bold text-slate-900 tracking-tight">
                          {entry.roomNumber}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="no-results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-slate-900/5">
                <Search className="w-10 h-10 text-slate-400" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-2">No companies found</h3>
              <p className="text-slate-600 mb-6 max-w-md mx-auto">
                We couldn't find any companies matching "<span className="font-semibold">{searchQuery}</span>". Try adjusting your search.
              </p>
              <button
                onClick={clearSearch}
                className="px-6 py-3 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20 hover:shadow-xl hover:shadow-slate-900/30"
              >
                Clear search
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-14"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-3 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-all group border-2 border-transparent hover:border-slate-200"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" strokeWidth={2} />
            <span className="font-medium">Back to Home</span>
          </Link>
        </motion.div>
      </main>

      {/* Footer Spacing */}
      <div className="h-20" />
    </div >
  )
}