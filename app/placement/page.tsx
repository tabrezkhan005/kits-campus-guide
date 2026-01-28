'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Search, Briefcase, MapPin, X } from 'lucide-react'
import { useState, useMemo } from 'react'
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
      staggerChildren: 0.03,
      delayChildren: 0.1,
    },
  },
}

const itemVariants: any = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function PlacementPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null)

  // Get unique room numbers for filter
  const uniqueRooms = useMemo(() => {
    const rooms = new Set(placementData.map((entry) => entry.roomNumber))
    return Array.from(rooms).sort()
  }, [])

  // Filter placement data based on search query and room filter
  const filteredData = useMemo(() => {
    return placementData.filter((entry) => {
      const matchesSearch =
        searchQuery === '' ||
        entry.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        entry.roomNumber.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesRoom = selectedRoom === null || entry.roomNumber === selectedRoom

      return matchesSearch && matchesRoom
    })
  }, [searchQuery, selectedRoom])

  const clearSearch = () => {
    setSearchQuery('')
    setSelectedRoom(null)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
      <header className="relative bg-slate-900 text-white overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '32px 32px',
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-24">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-12">
            <Link href="/" className="hover:text-white transition-colors duration-200">
              Home
            </Link>
            <span className="text-slate-600">/</span>
            <Link href="/search" className="hover:text-white transition-colors duration-200">
              Search
            </Link>
            <span className="text-slate-600">/</span>
            <span className="text-white">Placements</span>
          </nav>

          {/* Title Section */}
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Briefcase className="w-7 h-7" />
                </div>
                <div>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight">
                    Placement <span className="font-semibold">Companies</span>
                  </h1>
                </div>
              </div>
              <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
                Find placement companies and their interview locations across the campus
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bottom edge decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
      </header>

      <main className="mx-auto max-w-7xl px-6 lg:px-8 py-12 sm:py-16">
        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 sm:mb-12"
        >
          <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-sm">
            {/* Search Bar */}
            <div className="relative mb-4">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search by company name or room number..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-10 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-slate-900 transition-colors text-sm sm:text-base"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-900 transition-colors"
                  aria-label="Clear search"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Room Filter */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium text-slate-700">Filter by Room:</span>
              <button
                onClick={() => setSelectedRoom(null)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedRoom === null
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                All Rooms
              </button>
              {uniqueRooms.map((room) => (
                <button
                  key={room}
                  onClick={() => setSelectedRoom(room)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedRoom === room
                      ? 'bg-slate-900 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {room}
                </button>
              ))}
            </div>

            {/* Results Count */}
            <div className="mt-4 pt-4 border-t border-slate-200">
              <p className="text-sm text-slate-600">
                Showing <span className="font-semibold text-slate-900">{filteredData.length}</span> of{' '}
                <span className="font-semibold text-slate-900">{placementData.length}</span> companies
                {(searchQuery || selectedRoom) && (
                  <button
                    onClick={clearSearch}
                    className="ml-2 text-slate-900 font-medium hover:underline"
                  >
                    Clear filters
                  </button>
                )}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Placement Companies List */}
        {filteredData.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredData.map((entry) => (
                <motion.div
                  key={entry.sNo}
                  variants={itemVariants}
                  layout
                  className="group relative bg-white border border-slate-200 rounded-xl p-5 sm:p-6 transition-all duration-300 hover:border-slate-900 hover:shadow-lg hover:shadow-slate-900/5"
                >
                  {/* Company Number Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center">
                      <span className="text-xs font-semibold text-slate-600">{entry.sNo}</span>
                    </div>
                  </div>

                  {/* Company Icon */}
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Company Name */}
                  <h3 className="text-lg font-semibold text-slate-900 mb-3 pr-8 line-clamp-2">
                    {entry.companyName}
                  </h3>

                  {/* Room Number */}
                  <div className="flex items-center gap-2 text-slate-600">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm font-medium">
                      Room: <span className="text-slate-900">{entry.roomNumber}</span>
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16 sm:py-24"
          >
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">No companies found</h3>
            <p className="text-slate-600 mb-6">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={clearSearch}
              className="px-6 py-3 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-colors"
            >
              Clear all filters
            </button>
          </motion.div>
        )}

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 sm:mt-16"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            <span className="font-medium">Back to Home</span>
          </Link>
        </motion.div>
      </main>

      {/* Footer Spacing */}
      <div className="h-16" />
    </div>
  )
}
