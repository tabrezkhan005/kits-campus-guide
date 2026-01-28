'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { MapPin } from 'lucide-react'

export default function FoodCourtPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
            <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-900">Food Court</span>
          </nav>
          <h1 className="text-3xl font-light text-slate-900">
            Campus <span className="font-semibold">Food Court</span>
          </h1>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full mb-6">
            <MapPin className="w-8 h-8 text-slate-600" />
          </div>
          <h2 className="text-2xl font-semibold text-slate-900 mb-2">Location</h2>
          <p className="text-xl text-slate-600 font-medium">
            IN KSR Block Ground Floor
          </p>
        </motion.div>
      </main>
    </div>
  )
}
