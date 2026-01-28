'use client'

import { motion } from 'framer-motion'
import { Clock, Calendar, BookOpen, Users, Wifi, MapPin, ChevronRight, Mail, Phone } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const libraryStats = [
  { label: 'Book Volumes', value: '37,000+', icon: BookOpen },
  { label: 'E-Journals', value: '20,000+', icon: Wifi },
  { label: 'Print Journals', value: '85+', icon: Calendar },
  { label: 'Reading Capacity', value: '150', icon: Users },
]

const facilities = [
  { title: 'Book Circulation', description: 'Lending and return services', floor: 'Ground Floor' },
  { title: 'Reference Section', description: 'Non-lending reference materials', floor: 'First Floor' },
  { title: 'Digital Library', description: 'E-resources and online databases', floor: 'First Floor' },
  { title: 'Reprography', description: 'Photocopying and printing', floor: 'Ground Floor' },
  { title: 'Periodicals Section', description: 'Journals, magazines, newspapers', floor: 'First Floor' },
  { title: 'Reading Rooms', description: 'Quiet study spaces', floor: 'Both Floors' },
]

export default function LibraryPage() {
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
            <span className="text-slate-900">Central Library</span>
          </nav>

          {/* Title */}
          <div className="flex items-start justify-between gap-8">
            <div className="flex-1">
              <h1 className="text-4xl font-light text-slate-900 mb-2">
                Central <span className="font-semibold">Library</span>
              </h1>
              <p className="text-slate-600 mb-4">
                Comprehensive academic resource center for students and faculty
              </p>

              {/* Location */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-lg border border-slate-200">
                <MapPin className="w-4 h-4 text-slate-600" />
                <span className="text-sm font-medium text-slate-900">Ground Floor, KSR Block</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {libraryStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white border border-slate-200 rounded-xl p-5 hover:border-slate-300 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-white" />
                </div>
              </div>
              <p className="text-2xl font-semibold text-slate-900 mb-1">{stat.value}</p>
              <p className="text-sm text-slate-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Library Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="aspect-video relative rounded-2xl overflow-hidden border border-slate-200"
            >
              <Image
                src="/library.webp"
                alt="Central Library"
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            {/* About Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-slate-900 rounded-full" />
                <h2 className="text-2xl font-light text-slate-900">
                  About the <span className="font-semibold">Library</span>
                </h2>
              </div>

              <div className="space-y-6 text-slate-700 leading-relaxed">
                <p>
                  Located in an independent building with an area of 10,000 square feet spread across two floors
                  (Ground and First), the Central Library is equipped with modern infrastructure and provides
                  reading capacity for 150 users simultaneously.
                </p>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                  <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-4">
                    Resources & Services
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-900 mt-2 flex-shrink-0" />
                      <span>Collection of more than <strong className="text-slate-900">37,000 volumes</strong> covering all engineering disciplines</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-900 mt-2 flex-shrink-0" />
                      <span>Access to over <strong className="text-slate-900">20,000 online e-journals</strong> through DELNET, J-GATE, N-LIST, and NDLI</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-900 mt-2 flex-shrink-0" />
                      <span>Subscription to more than <strong className="text-slate-900">85 print journals and magazines</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-900 mt-2 flex-shrink-0" />
                      <span>Fully automated operations using <strong className="text-slate-900">E-Z Library Software</strong></span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Facilities Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-slate-900 rounded-full" />
                <h2 className="text-2xl font-light text-slate-900">
                  Facilities & <span className="font-semibold">Services</span>
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {facilities.map((facility, index) => (
                  <div
                    key={facility.title}
                    className="bg-white border border-slate-200 rounded-xl p-5 hover:border-slate-300 transition-colors"
                  >
                    <h3 className="font-medium text-slate-900 mb-1">{facility.title}</h3>
                    <p className="text-sm text-slate-600 mb-3">{facility.description}</p>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span className="text-xs text-slate-500">{facility.floor}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Opening Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white border border-slate-200 rounded-xl p-6 sticky top-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-medium text-slate-900">Opening Hours</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-slate-100">
                  <span className="text-sm text-slate-600">Monday - Friday</span>
                  <span className="text-sm font-medium text-slate-900">8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-slate-100">
                  <span className="text-sm text-slate-600">Saturday</span>
                  <span className="text-sm font-medium text-slate-900">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-sm text-slate-600">Sunday</span>
                  <span className="text-sm font-medium text-red-600">Closed</span>
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-slate-50 border border-slate-200 rounded-xl p-6"
            >
              <h3 className="font-medium text-slate-900 mb-4">Library Contact</h3>
              <div className="space-y-3">
                <a
                  href="mailto:library@kits.edu.in"
                  className="flex items-center gap-3 text-sm text-slate-600 hover:text-slate-900 transition-colors group"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span className="group-hover:underline">library@kits.edu.in</span>
                </a>
                <a
                  href="tel:+911234567890"
                  className="flex items-center gap-3 text-sm text-slate-600 hover:text-slate-900 transition-colors group"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span className="group-hover:underline">+91 123 456 7890</span>
                </a>
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white border border-slate-200 rounded-xl p-6"
            >
              <h3 className="font-medium text-slate-900 mb-4">Quick Access</h3>
              <div className="space-y-3">
                <button className="w-full py-3 px-4 text-sm font-medium text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors text-left flex items-center justify-between group">
                  <span>Online Catalog</span>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="w-full py-3 px-4 text-sm font-medium text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors text-left flex items-center justify-between group">
                  <span>Digital Resources</span>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="w-full py-3 px-4 text-sm font-medium text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors text-left flex items-center justify-between group">
                  <span>New Arrivals</span>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
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
