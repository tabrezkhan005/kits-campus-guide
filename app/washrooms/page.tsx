'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, MapPin, Info, X } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Washroom data with gender-specific locations and consistent block names
const washroomData = {
  block1: {
    name: 'KKR Block',
    image: '/assets/images/bg.jpg',
    male: [
      { floor: 'Ground Floor', direction: 'Beside Room 018' },
      { floor: 'Ground Floor', direction: 'Beside TPO Cell (107)' },
      { floor: 'Ground Floor', direction: 'Beside Room 119' },
      { floor: 'Second Floor', direction: 'Beside ECE HOD (219)' },
      { floor: 'Third Floor', direction: 'Beside CSM HOD (318)' },
    ],
    female: [
      { floor: 'Ground Floor', direction: 'Beside Room 128' },
      { floor: 'Second Floor', direction: 'Beside Room 206' },
      { floor: 'Second Floor', direction: 'Beside Room 215' },
      { floor: 'Third Floor', direction: 'Beside Girls Waiting Hall (325)' },
    ],
  },
  block2: {
    name: 'KSR Block',
    image: '/ksr.webp',
    male: [
      { floor: 'Second Floor', direction: 'Steps Side (Beside 212)' },
      { floor: 'Third Floor', direction: 'Steps Side (Beside 312)' },
    ],
    female: [
      { floor: 'Second Floor', direction: 'Beside Waiting Hall (204)' },
      { floor: 'Third Floor', direction: 'Beside Room 304' },
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

  const handleBlockSelect = (blockKey: 'block1' | 'block2') => {
    setSelectedBlockKey(selectedBlockKey === blockKey ? null : blockKey)
  }

  const getFloorData = () => {
    if (!selectedBlockKey || !selectedGender) return []
    return washroomData[selectedBlockKey][selectedGender]
  }

  const getBlockName = (blockKey: 'block1' | 'block2') => {
    return washroomData[blockKey].name
  }

  const getBlockImage = (blockKey: 'block1' | 'block2') => {
    return washroomData[blockKey].image
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
            onClick={() => {}}
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
      <header className="border-b border-slate-200">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 py-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/" className="hover:text-slate-900 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/search" className="hover:text-slate-900 transition-colors">
              Search
            </Link>
            <span>/</span>
            <span className="text-slate-900">Washrooms</span>
          </nav>

          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-start gap-6"
          >
            <div className={`flex-shrink-0 w-16 h-20 flex items-center justify-center rounded-xl overflow-hidden relative ${activeColors.bg}`}>
              {selectedGender === 'female' ? (
                 <div className={`w-12 h-16 ${activeColors.iconBg}`} style={{ maskImage: 'url(/assets/images/icons/woman.png)', maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center', WebkitMaskImage: 'url(/assets/images/icons/woman.png)', WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center', margin: 'auto' }} />
              ) : (
                 <div className={`w-12 h-16 ${activeColors.iconBg}`} style={{ maskImage: 'url(/assets/images/icons/man.png)', maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center', WebkitMaskImage: 'url(/assets/images/icons/man.png)', WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center', margin: 'auto' }} />
              )}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl sm:text-4xl font-light text-slate-900">
                  {selectedGender === 'female' ? "Women's" : "Men's"} <span className="font-semibold">Washrooms</span>
                </h1>
                <button
                  onClick={() => setShowGenderModal(true)}
                  className="px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 border border-slate-300 rounded-lg hover:border-slate-400 transition-colors"
                >
                  Change
                </button>
              </div>
              <p className="text-slate-600">
                Locate facilities across all campus buildings
              </p>
            </div>
          </motion.div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 lg:px-8 py-12 sm:py-16">
        {/* Building Selection */}
        <section className="mb-12">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <div className={`w-1 h-8 rounded-full ${activeColors.accent}`} />
              <h2 className="text-2xl font-light text-slate-900">
                Select <span className="font-semibold">Building</span>
              </h2>
            </div>
            <p className="text-slate-600 ml-7">Choose a building to view washroom locations</p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {(['block1', 'block2'] as const).map((blockKey) => (
              <motion.button
                key={blockKey}
                variants={itemVariants}
                onClick={() => handleBlockSelect(blockKey)}
                className={`relative group text-left rounded-xl border-2 overflow-hidden transition-all duration-300 ${
                  selectedBlockKey === blockKey
                    ? `${activeColors.border} bg-white shadow-md`
                    : `border-slate-200 hover:border-slate-300 bg-white`
                }`}
              >
                {/* Building Image - Top Section */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                  <Image
                    src={getBlockImage(blockKey)}
                    alt={getBlockName(blockKey)}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Selection Overlay Tint */}
                  {selectedBlockKey === blockKey && (
                    <div className={`absolute inset-0 opacity-10 ${activeColors.accent}`} />
                  )}
                </div>

                {/* Content - Bottom Section */}
                <div className={`p-4 sm:p-5 transition-colors duration-300 ${
                  selectedBlockKey === blockKey ? activeColors.bg : 'bg-white'
                }`}>
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors relative ${
                      selectedBlockKey === blockKey
                        ? activeColors.accent
                        : 'bg-slate-100 group-hover:bg-slate-200 top-0'
                    }`}>
                      {selectedGender === 'female' ? (
                        <div className="relative w-8 h-8">
                             <div
                               className={`w-full h-full ${selectedBlockKey === blockKey ? 'bg-white' : 'bg-pink-700'}`}
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
                      ) : (
                        <div className="relative w-8 h-8">
                             <div
                               className={`w-full h-full ${selectedBlockKey === blockKey ? 'bg-white' : 'bg-blue-900'}`}
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
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-slate-900 mb-0.5">
                        {getBlockName(blockKey)}
                      </h3>
                      <p className="text-sm text-slate-500">4 Floors Available</p>
                    </div>

                    {/* Active Checkmark/Indicator */}
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                      selectedBlockKey === blockKey
                        ? `${activeColors.border} ${activeColors.bg}`
                        : 'border-slate-200 bg-transparent'
                    }`}>
                      <div className={`w-2.5 h-2.5 rounded-full transition-all ${
                        selectedBlockKey === blockKey ? activeColors.accent : 'bg-transparent'
                      }`} />
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>
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
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-1 h-8 rounded-full ${activeColors.accent}`} />
                  <h2 className="text-2xl font-light text-slate-900">
                    {getBlockName(selectedBlockKey)} <span className="font-semibold">Locations</span>
                  </h2>
                </div>
                <p className="text-slate-600 ml-7">Washroom locations on each floor</p>
              </div>

              <div className="space-y-3">
                {getFloorData().map((floor, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className="flex items-start gap-4 p-5 bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-colors"
                  >
                    <div className={`p-2.5 rounded-lg flex-shrink-0 ${activeColors.bg}`}>
                      <MapPin className={`w-5 h-5 ${activeColors.icon}`} />
                    </div>
                    <div className="flex-1 pt-1">
                      <p className="font-medium text-slate-900 mb-1">
                        {floor.floor}
                      </p>
                      <p className="text-sm text-slate-600">
                        {floor.direction}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* Accessibility Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-start gap-4 p-5 bg-slate-50 rounded-xl border border-slate-200"
        >
          <div className="p-2.5 bg-white rounded-lg border border-slate-200 flex-shrink-0">
            <Info className="w-5 h-5 text-slate-600" />
          </div>
          <div className="flex-1 pt-1">
            <p className="text-sm text-slate-900 font-medium mb-1">
              Accessibility Information
            </p>
            <p className="text-sm text-slate-600">
              Wheelchair accessible washrooms are available on the ground floor of each building with appropriate facilities.
            </p>
          </div>
        </motion.div>
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');

        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </div>
  )
}
