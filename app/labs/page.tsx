'use client'

import { motion, AnimatePresence } from 'framer-motion'
import {
  Zap, Radio, Search, ChevronRight, MapPin, Building2,
  Atom, FlaskConical, Languages, Rocket, Brain, CircuitBoard, Activity, Terminal, Code, Laptop
} from 'lucide-react'
import Link from 'next/link'
import { useState, useMemo } from 'react'

const labsData = {
  ksr: [
    { room: '207', name: 'Chemistry Lab', floor: 'Second Floor', icon: FlaskConical, category: 'Science' },
    { room: '307', name: 'Physics Lab', floor: 'Third Floor', icon: Atom, category: 'Science' },
    { room: '310', name: 'English Lab', floor: 'Third Floor', icon: Languages, category: 'Language' },
  ],
  kkr: [
    { room: '007', name: 'Electrical Machines Lab 2', floor: 'Ground Floor', icon: Zap, category: 'Electrical' },
    { room: '009', name: 'Electrical Machines Lab 1', floor: 'Ground Floor', icon: Zap, category: 'Electrical' },
    { room: '020', name: 'R&D Project Lab', floor: 'Ground Floor', icon: Rocket, category: 'Research' },
    { room: '022', name: 'Computer Lab 4', floor: 'Ground Floor', icon: Laptop, category: 'Computing' },
    { room: '122', name: 'Computer Lab 1', floor: 'First Floor', icon: Laptop, category: 'Computing' },
    { room: '126', name: 'CSM Lab 3', floor: 'First Floor', icon: Brain, category: 'AI & ML' },
    { room: '202', name: 'ECAD & Project Lab', floor: 'Second Floor', icon: CircuitBoard, category: 'Electronics' },
    { room: '204', name: 'Microprocessors Lab', floor: 'Second Floor', icon: CircuitBoard, category: 'Electronics' },
    { room: '205', name: 'Signal Processing Lab', floor: 'Second Floor', icon: Activity, category: 'Electronics' },
    { room: '216', name: 'Analog & Digital Comm Lab', floor: 'Second Floor', icon: Radio, category: 'Electronics' },
    { room: '222', name: 'Computer Lab', floor: 'Second Floor', icon: Laptop, category: 'Computing' },
    { room: '235', name: 'Computer & Project Lab', floor: 'Second Floor', icon: Laptop, category: 'Computing' },
    { room: '238', name: 'CSM Lab 1 (AutoCAD)', floor: 'Second Floor', icon: Brain, category: 'Computing' },
    { room: '309', name: 'Power Systems Lab', floor: 'Third Floor', icon: Zap, category: 'Electrical' },
    { room: '311', name: 'Power Electronics Lab', floor: 'Third Floor', icon: Zap, category: 'Electrical' },
    { room: '312', name: 'Electrical Simulation Lab', floor: 'Third Floor', icon: Terminal, category: 'Electrical' },
    { room: '315', name: 'LICA Lab', floor: 'Third Floor', icon: CircuitBoard, category: 'Electronics' },
    { room: '316', name: 'EDC Lab', floor: 'Third Floor', icon: CircuitBoard, category: 'Electronics' },
    { room: '317', name: 'DSD Lab', floor: 'Third Floor', icon: CircuitBoard, category: 'Electronics' },
    { room: '330-331', name: 'IRM Lab 1', floor: 'Third Floor', icon: Laptop, category: 'Computing' },
    { room: '332', name: 'IRM Lab 2', floor: 'Third Floor', icon: Laptop, category: 'Computing' },
    { room: '333', name: 'IT Lab 1', floor: 'Third Floor', icon: Code, category: 'Computing' },
  ]
}

const floorOrder = ['Ground Floor', 'First Floor', 'Second Floor', 'Third Floor']

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
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

export default function LabsPage() {
  const [activeBlock, setActiveBlock] = useState<'kkr' | 'ksr'>('kkr')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredAndGroupedLabs = useMemo(() => {
    const filtered = labsData[activeBlock].filter(lab =>
      lab.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lab.room.toLowerCase().includes(searchTerm.toLowerCase())
    )

    // Group by floor
    const grouped = filtered.reduce((acc, lab) => {
      if (!acc[lab.floor]) {
        acc[lab.floor] = []
      }
      acc[lab.floor].push(lab)
      return acc
    }, {} as Record<string, typeof labsData.kkr>)

    // Sort by room number within each floor
    Object.keys(grouped).forEach(floor => {
      grouped[floor].sort((a, b) => {
        const roomA = parseInt(a.room.split('-')[0])
        const roomB = parseInt(b.room.split('-')[0])
        return roomA - roomB
      })
    })

    return grouped
  }, [activeBlock, searchTerm])

  const totalLabs = labsData[activeBlock].length
  const filteredCount = Object.values(filteredAndGroupedLabs).reduce((sum, labs) => sum + labs.length, 0)

  const getIconColor = (icon: any) => {
    return {
      bg: 'bg-neutral-50',
      text: 'text-neutral-600',
      border: 'border-neutral-200'
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/" className="hover:text-slate-900 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/search" className="hover:text-slate-900 transition-colors">
              Search
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-900">Labs & Workshops</span>
          </nav>

          {/* Title & Search */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
            <div>
              <h1 className="text-4xl font-light text-slate-900 mb-2">
                Labs & <span className="font-semibold">Workshops</span>
              </h1>
              <p className="text-slate-600">
                Navigate to {totalLabs} specialized facilities across campus
              </p>
            </div>

            {/* Search Bar */}
            <div className="relative lg:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search by name or room number..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-slate-900 transition-colors placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Block Tabs */}
          <div className="flex gap-1 border-b border-slate-200">
            <button
              onClick={() => setActiveBlock('kkr')}
              className={`relative px-6 py-3 text-sm font-medium transition-colors ${
                activeBlock === 'kkr' ? 'text-slate-900' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                KKR Block
                <span className={`px-2 py-0.5 rounded-full text-xs ${
                  activeBlock === 'kkr' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600'
                }`}>
                  {labsData.kkr.length}
                </span>
              </div>
              {activeBlock === 'kkr' && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-900"
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
            </button>
            <button
              onClick={() => setActiveBlock('ksr')}
              className={`relative px-6 py-3 text-sm font-medium transition-colors ${
                activeBlock === 'ksr' ? 'text-slate-900' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                KSR Block
                <span className={`px-2 py-0.5 rounded-full text-xs ${
                  activeBlock === 'ksr' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600'
                }`}>
                  {labsData.ksr.length}
                </span>
              </div>
              {activeBlock === 'ksr' && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-900"
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
        <AnimatePresence mode="wait">
          {filteredCount === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="text-center py-20"
            >
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-1">No labs found</h3>
              <p className="text-slate-500">Try adjusting your search terms</p>
              <button
                onClick={() => setSearchTerm('')}
                className="mt-6 text-sm text-slate-600 hover:text-slate-900 transition-colors border-b border-slate-300 hover:border-slate-900"
              >
                Clear search
              </button>
            </motion.div>
          ) : (
            <motion.div
              key={activeBlock}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-10"
            >
              {floorOrder.map((floor) => {
                const labs = filteredAndGroupedLabs[floor]
                if (!labs || labs.length === 0) return null

                return (
                  <div key={floor}>
                    {/* Floor Header */}
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-1 h-8 bg-slate-900 rounded-full" />
                      <div className="flex-1 flex items-center justify-between">
                        <h2 className="text-xl font-medium text-slate-900">
                          {floor}
                        </h2>
                        <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-600">
                          {labs.length} {labs.length === 1 ? 'Lab' : 'Labs'}
                        </span>
                      </div>
                    </div>

                    {/* Labs Grid */}
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="grid gap-3 md:grid-cols-2 lg:grid-cols-3"
                    >
                      {labs.map((lab) => {
                        const colors = getIconColor(lab.icon)
                        return (
                          <motion.div
                            key={lab.room}
                            variants={itemVariants}
                            className="group bg-white p-5 rounded-xl border border-slate-200 hover:border-slate-300 transition-all hover:shadow-sm"
                          >
                            <div className="flex items-start gap-4">
                              {/* Icon */}
                              <div className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.border} border shadow-sm flex items-center justify-center flex-shrink-0`}>
                                <lab.icon className={`w-6 h-6 ${colors.text}`} />
                              </div>

                              {/* Content */}
                              <div className="flex-1 min-w-0">
                                <h3 className="font-medium text-slate-900 mb-2 leading-tight">
                                  {lab.name}
                                </h3>
                                <div className="flex flex-col gap-1.5">
                                  <div className="flex items-center gap-2">
                                    <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                                    <span className="text-xs text-slate-600">
                                      Room {lab.room}
                                    </span>
                                  </div>
                                  <div className="inline-flex items-center gap-1.5 text-xs text-slate-500">
                                    <span className="w-1 h-1 rounded-full bg-slate-300" />
                                    {lab.category}
                                  </div>
                                </div>
                              </div>

                              {/* Arrow */}
                              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                <ChevronRight className="w-5 h-5 text-slate-400" />
                              </div>
                            </div>
                          </motion.div>
                        )
                      })}
                    </motion.div>
                  </div>
                )
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Summary Stats */}
        {filteredCount > 0 && searchTerm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12 p-5 bg-slate-50 rounded-xl border border-slate-200"
          >
            <p className="text-sm text-slate-600">
              Showing <span className="font-medium text-slate-900">{filteredCount}</span> of{' '}
              <span className="font-medium text-slate-900">{totalLabs}</span> labs in{' '}
              <span className="font-medium text-slate-900">{activeBlock.toUpperCase()} Block</span>
            </p>
          </motion.div>
        )}
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
