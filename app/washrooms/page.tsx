'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, MapPin, Info, X, ChevronDown, Check } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Washroom data with gender-specific locations and consistent block names
const washroomData = {
  block1: {
    name: 'KKR Block',
    image: '/assets/images/bg.jpg',
    male: [
      { floor: 'Ground Floor', direction: 'Beside Room 018', roomNumber: '018' },
      { floor: 'Ground Floor', direction: 'Beside Room 107', roomNumber: '107' },
      { floor: 'Ground Floor', direction: 'Beside Room 119', roomNumber: '119' },

    ],
    female: [
      { floor: 'Ground Floor', direction: 'Beside Room 128', roomNumber: '128' },

    ],
  },
  block2: {
    name: 'KSR Block',
    image: '/ksr.webp',
    male: [
      { floor: 'Second Floor', direction: 'Beside Room 212', roomNumber: '212' },
      { floor: 'Third Floor', direction: 'Beside Room 312', roomNumber: '312' },
    ],
    female: [
      { floor: 'Second Floor', direction: 'Beside Room 204', roomNumber: '204' },
      { floor: 'Third Floor', direction: 'Beside Room 304', roomNumber: '304' },
    ],
  },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
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

export default function WashroomsPage() {
  const [selectedGender, setSelectedGender] = useState<'male' | 'female' | null>(null)
  const [selectedBlockKey, setSelectedBlockKey] = useState<'block1' | 'block2' | null>(null)
  const [showGenderModal, setShowGenderModal] = useState(true)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])


  const handleBlockSelect = (blockKey: 'block1' | 'block2') => {
    setSelectedBlockKey(blockKey)
    setIsDropdownOpen(false)
  }

  const getFloorData = () => {
    if (!selectedBlockKey || !selectedGender) return []
    return washroomData[selectedBlockKey][selectedGender]
  }

  const getBlockName = (blockKey: 'block1' | 'block2') => {
    return washroomData[blockKey].name
  }

  const genderColors = {
    male: {
      primary: 'text-blue-900',
      bg: 'bg-blue-50',
      border: 'border-blue-900',
      borderHover: 'hover:border-blue-900',
      bgHover: 'hover:bg-blue-50',
      icon: 'text-blue-900',
      iconBg: 'bg-blue-900',
      accent: 'bg-blue-900',
    },
    female: {
      primary: 'text-pink-700',
      bg: 'bg-pink-50',
      border: 'border-pink-700',
      borderHover: 'hover:border-pink-700',
      bgHover: 'hover:bg-pink-50',
      icon: 'text-pink-700',
      iconBg: 'bg-pink-700',
      accent: 'bg-pink-700',
      text: 'text-pink-700'
    },
  }

  const activeColors = selectedGender ? genderColors[selectedGender] : genderColors.male

  return (
    <div className="min-h-screen bg-white">
      {/* Gender Selection Modal */}
      <AnimatePresence>
        {showGenderModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm px-4"
            onClick={() => { }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <Link
                href="/search"
                className="absolute top-6 right-6 p-2 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-slate-400" />
              </Link>

              <div className="text-center mb-8">
                <h2 className="text-2xl font-light text-slate-900 mb-2">
                  Select Washroom Type
                </h2>
                <p className="text-sm text-slate-500">
                  Choose to view locations across campus
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Male Option */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setSelectedGender('male')
                    setShowGenderModal(false)
                    // Auto-select first block if none selected
                    if (!selectedBlockKey) setSelectedBlockKey('block1')
                  }}
                  className="flex flex-col items-center gap-4 p-6 rounded-xl border-2 border-slate-200 hover:border-blue-900 hover:bg-blue-50/50 transition-all duration-200 group"
                >
                  <div className="w-16 h-20 flex items-center justify-center relative">
                    <div
                      className="w-full h-full bg-blue-900 transition-transform group-hover:scale-110"
                      style={{
                        maskImage: 'url(/assets/images/icons/man.png)',
                        maskSize: 'contain',
                        maskRepeat: 'no-repeat',
                        maskPosition: 'center',
                        WebkitMaskImage: 'url(/assets/images/icons/man.png)',
                        WebkitMaskSize: 'contain',
                        WebkitMaskRepeat: 'no-repeat',
                        WebkitMaskPosition: 'center'
                      }}
                    />
                  </div>
                  <div className="space-y-1">
                    <span className="block text-lg font-medium text-slate-900">Male</span>
                    <span className="block text-xs text-slate-500">Men&apos;s Facilities</span>
                  </div>
                </motion.button>

                {/* Female Option */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setSelectedGender('female')
                    setShowGenderModal(false)
                    // Auto-select first block if none selected
                    if (!selectedBlockKey) setSelectedBlockKey('block1')
                  }}
                  className="flex flex-col items-center gap-4 p-6 rounded-xl border-2 border-slate-200 hover:border-pink-700 hover:bg-pink-50/50 transition-all duration-200 group"
                >
                  <div className="w-16 h-20 flex items-center justify-center relative">
                    <div
                      className="w-full h-full bg-pink-700 transition-transform group-hover:scale-110"
                      style={{
                        maskImage: 'url(/assets/images/icons/woman.png)',
                        maskSize: 'contain',
                        maskRepeat: 'no-repeat',
                        maskPosition: 'center',
                        WebkitMaskImage: 'url(/assets/images/icons/woman.png)',
                        WebkitMaskSize: 'contain',
                        WebkitMaskRepeat: 'no-repeat',
                        WebkitMaskPosition: 'center'
                      }}
                    />
                  </div>
                  <div className="space-y-1">
                    <span className="block text-lg font-medium text-slate-900">Female</span>
                    <span className="block text-xs text-slate-500">Women&apos;s Facilities</span>
                  </div>
                </motion.button>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100">
                <Link
                  href="/search"
                  className="flex items-center justify-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Search
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header className="border-b border-slate-200 sticky top-0 bg-white z-40">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 py-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-between gap-6"
          >
            <div className="flex items-center gap-6">
              <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl overflow-hidden relative ${activeColors.bg}`}>
                {selectedGender === 'female' ? (
                  <div className={`w-8 h-8 ${activeColors.iconBg}`} style={{ maskImage: 'url(/assets/images/icons/woman.png)', maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center', WebkitMaskImage: 'url(/assets/images/icons/woman.png)', WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center', margin: 'auto' }} />
                ) : (
                  <div className={`w-8 h-8 ${activeColors.iconBg}`} style={{ maskImage: 'url(/assets/images/icons/man.png)', maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center', WebkitMaskImage: 'url(/assets/images/icons/man.png)', WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center', margin: 'auto' }} />
                )}
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h1 className="text-xl sm:text-2xl font-light text-slate-900">
                    {selectedGender === 'female' ? "Women's" : "Men's"} <span className="font-semibold">Washrooms</span>
                  </h1>
                </div>
                <button
                  onClick={() => setShowGenderModal(true)}
                  className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-1"
                >
                  Change Gender
                </button>
              </div>
            </div>

            <Link href="/search" className="p-2 rounded-full hover:bg-slate-100 transition-colors">
              <X className="w-5 h-5 text-slate-600" />
            </Link>
          </motion.div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 lg:px-8 py-8">

        {/* Block Selection Dropdown - Image Card Style */}
        <section className="mb-8 relative z-30" ref={dropdownRef}>
          <div className="mb-4 text-center">
            <label className="text-xl font-light text-slate-900">
              Select <span className="font-semibold">Building</span>
            </label>
            <p className="text-sm text-slate-500 mt-1">Tap the card to switch buildings</p>
          </div>

          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Selected Block Trigger Card */}
              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`w-full group text-left rounded-xl border-2 overflow-hidden transition-all duration-300 relative ${isDropdownOpen ? activeColors.border : 'border-slate-200 hover:border-slate-300'} bg-white shadow-sm hover:shadow-md`}
              >
                {/* Image Section */}
                <div className="relative h-40 w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                  {selectedBlockKey ? (
                    <Image
                      src={washroomData[selectedBlockKey].image}
                      alt={getBlockName(selectedBlockKey)}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-50">
                      <span className="text-slate-400">Select a Block</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />

                  {/* Dropdown Indicator */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-sm">
                    <ChevronDown className={`w-5 h-5 text-slate-700 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </div>
                </div>

                {/* Content Section */}
                <div className={`p-4 transition-colors duration-300 relative overflow-hidden ${isDropdownOpen ? activeColors.bg : 'bg-white'}`}>
                  <div className="flex items-center gap-4 relative z-10">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${isDropdownOpen ? activeColors.accent : 'bg-slate-100'}`}>
                      <div className={`w-6 h-6 ${isDropdownOpen ? 'bg-white' : (selectedGender === 'female' ? 'bg-pink-700' : 'bg-blue-900')}`} style={{ maskImage: `url(/assets/images/icons/${selectedGender === 'female' ? 'woman' : 'man'}.png)`, maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center', WebkitMaskImage: `url(/assets/images/icons/${selectedGender === 'female' ? 'woman' : 'man'}.png)`, WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center' }} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-slate-900">
                        {selectedBlockKey ? getBlockName(selectedBlockKey) : 'Select Block'}
                      </h3>
                      <p className="text-sm text-slate-500">
                        {selectedBlockKey ? 'Current Selection' : 'Tap to choose'}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.button>

              {/* Dropdown Options */}
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 right-0 mt-3 bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden py-2"
                  >
                    {(['block1', 'block2'] as const).filter(key => key !== selectedBlockKey).map((blockKey) => (
                      <button
                        key={blockKey}
                        onClick={() => handleBlockSelect(blockKey)}
                        className="w-full px-4 py-3 text-left flex items-center gap-3 hover:bg-slate-50 transition-colors group"
                      >
                        <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-slate-100 flex-shrink-0">
                          <Image
                            src={washroomData[blockKey].image}
                            alt={getBlockName(blockKey)}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <span className="block font-medium text-slate-700 group-hover:text-slate-900">
                            {getBlockName(blockKey)}
                          </span>
                          <span className="text-xs text-slate-500">Tap to switch</span>
                        </div>
                        <ChevronDown className="w-4 h-4 text-slate-400 rotate-[-90deg]" />
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>


        {/* Floor Information */}
        <AnimatePresence mode="wait">
          {selectedBlockKey && selectedGender && (
            <motion.section
              key={selectedBlockKey}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mb-12"
            >
              <div className="space-y-4">
                {getFloorData().map((floor, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className="flex items-center justify-between p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-4 rounded-xl flex-shrink-0 ${activeColors.bg}`}>
                        <MapPin className={`w-8 h-8 ${activeColors.icon}`} />
                      </div>
                      <div>
                        <p className="text-xl font-medium text-slate-900">
                          {floor.floor}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col items-end text-right">
                      <span className={`text-4xl font-bold ${selectedGender === 'female' ? 'text-pink-700' : 'text-blue-900'}`}>
                        {floor.roomNumber}
                      </span>
                      <div className="mt-1">
                        <span className="text-sm font-medium text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                          {floor.direction}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </div>
  )
}
