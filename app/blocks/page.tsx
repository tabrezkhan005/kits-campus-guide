'use client'

import { motion } from 'framer-motion'
import { Building2, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const blocks = [
  {
    id: 'block-a',
    name: 'KKR Block',
    description: 'Main Academic Block',
    image: '/assets/images/bg.jpg',
    href: '/blocks/block-a',
  },
  {
    id: 'block-b',
    name: 'KSR Block',
    description: 'Science & Research Block',
    image: '/ksr.webp',
    href: '/blocks/block-b',
  },
]

export default function BlocksPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-neutral-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-400 mb-4">
            <Link href="/" className="hover:text-neutral-900 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/search" className="hover:text-neutral-900 transition-colors">Search</Link>
            <span>/</span>
            <span className="text-neutral-900">Blocks</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-neutral-900 tracking-tight">
            Academic Blocks
          </h1>
          <p className="text-sm sm:text-base text-neutral-500 mt-2">
            Select a block to view detailed information
          </p>
        </div>
      </header>

      {/* Blocks Grid */}
      <main className="mx-auto max-w-4xl px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {blocks.map((block, index) => (
            <motion.div
              key={block.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={block.href} className="group block">
                <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white hover:border-neutral-300 transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <Image
                      src={block.image}
                      alt={block.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900">
                          {block.name}
                        </h2>
                        <p className="text-sm sm:text-base text-neutral-500 mt-1">
                          {block.description}
                        </p>
                      </div>
                      <div className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 group-hover:border-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-all duration-300">
                        <ChevronRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  )
}
