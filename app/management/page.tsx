'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, ChevronRight, Building2, Users, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

// Top Management Data
const topManagement = [
  {
    role: 'Chairman',
    name: 'Sri K. Subba Rao',
    slug: 'chairman',
    description: 'Visionary leadership guiding the institution towards excellence.',
    image: '/assets/images/management/chairman.jpg',
  },
  {
    role: 'Secretary',
    name: 'Sri Koyi Sekhar',
    slug: 'secretary',
    description: 'Ensuring administrative efficiency and strategic growth.',
    image: '/assets/images/management/secretary.jpg',
  },
  {
    role: 'Director',
    name: 'Dr. K. Haribabu',
    slug: 'director',
    description: 'Leading academic innovation and institutional development.',
    image: '/assets/images/management/director.jpg',
  },
  {
    role: 'Principal',
    name: 'Dr. P. Babu',
    slug: 'principal',
    description: 'Fostering academic discipline and student success.',
    image: '/assets/images/management/principalnew.jpg',
  },
]

// HODs Data
const hods = [
  { dept: 'CSE', name: 'Prof. R. Ramesh', room: 'Room KKR-223', role: 'Head of Department' },
  { dept: 'CSM', name: 'Dr. G. Murali', room: 'Room KKR-319', role: 'Head of Department' },
  { dept: 'CSD', name: 'Dr. B. Bhanu Prakash', room: 'Room KKR-131', role: 'Head of Department' },
  { dept: 'IT', name: 'Dr. M. Srinivasa Sesha Sai', room: 'Room KKR-023', role: 'Head of Department' },
  { dept: 'ECE', name: 'Dr. N. Adi Narayana', room: 'Room KKR-220', role: 'Head of Department' },
  { dept: 'EEE', name: 'Dr. Y. Rajesh Babu', room: 'Room KKR-307', role: 'Head of Department' },
  { dept: 'S&H', name: 'Mr. M. Basaveswara Rao', room: 'Room KSR-201', role: 'Head of Department' },
  { dept: 'TPO', name: 'Ch. Chandra Sekhar Reddy', room: 'Room KKR-127', role: 'Head of Department' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const itemVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function ManagementPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
      <header className="relative bg-slate-900 text-white overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-24">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-12">
            <Link href="/" className="hover:text-white transition-colors duration-200">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/search" className="hover:text-white transition-colors duration-200">
              Search
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Management</span>
          </nav>

          {/* Title Section */}
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight mb-6">
                Management &<br />
                <span className="font-semibold">Administration</span>
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
                Meet the visionary leaders and department heads driving academic excellence and institutional growth at KITS
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bottom edge decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
      </header>

      <main className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-24">
        {/* Leadership Section */}
        <section className="mb-24 sm:mb-32">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-1 h-8 bg-slate-900 rounded-full" />
              <h2 className="text-3xl sm:text-4xl font-light text-slate-900">
                Executive <span className="font-semibold">Leadership</span>
              </h2>
            </div>
            <p className="text-slate-600 ml-7">Key figures shaping our institution&apos;s vision and direction</p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8"
          >
            {topManagement.map((person, index) => (
              <motion.div
                key={person.role}
                variants={itemVariants}
                className="group relative"
              >
                <Link href={`/management/${person.slug}`} className="block h-full">
                  {/* Card */}
                  <div className="relative bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-slate-900 hover:shadow-xl hover:shadow-slate-900/5 h-full flex flex-col">
                    {/* Image Container */}
                    <div className="relative h-72 bg-slate-100 overflow-hidden">
                      <Image
                        src={person.image}
                        alt={person.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

                      {/* Role Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-3 py-1.5 bg-white/95 backdrop-blur-sm text-slate-900 text-xs font-medium rounded-full">
                          {person.role}
                        </span>
                      </div>

                      {/* Name on Image */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white text-lg font-medium leading-tight">
                          {person.name}
                        </h3>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <p className="text-sm text-slate-600 leading-relaxed mb-5 line-clamp-3">
                        {person.description}
                      </p>

                      {/* View Profile Link - purely visual as the whole card is a link */}
                      <div
                        className="inline-flex items-center gap-2 text-sm text-slate-900 font-medium group/link"
                      >
                        <span className="border-b border-transparent group-hover/link:border-slate-900 transition-colors">
                          View Profile
                        </span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Department Heads Section */}
        <section>
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-1 h-8 bg-slate-900 rounded-full" />
              <h2 className="text-3xl sm:text-4xl font-light text-slate-900">
                Department <span className="font-semibold">Heads</span>
              </h2>
            </div>
            <p className="text-slate-600 ml-7">Academic leaders across all departments</p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            {hods.map((hod, index) => (
              <motion.div
                key={hod.dept}
                variants={itemVariants}
                className="group relative bg-white border border-slate-200 rounded-xl p-6 transition-all duration-300 hover:border-slate-900 hover:shadow-lg hover:shadow-slate-900/5"
              >
                {/* Department Badge */}
                <div className="flex items-start justify-between mb-5">
                  <div className="relative">
                    <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                      <span className="text-white font-semibold text-sm tracking-wide">
                        {hod.dept}
                      </span>
                    </div>
                    {/* Decorative element */}
                    <div className="absolute -right-1 -top-1 w-3 h-3 bg-slate-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2 mb-4">
                  <h3 className="text-lg font-medium text-slate-900">
                    {hod.name}
                  </h3>
                  <p className="text-sm text-slate-500">
                    {hod.role}
                  </p>
                  <p className="text-xs text-slate-400">
                    {hod.room}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>

      {/* Footer Spacing */}
      <div className="h-16" />
    </div>
  )
}