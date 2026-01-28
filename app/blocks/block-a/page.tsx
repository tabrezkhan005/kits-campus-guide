'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, GraduationCap, Beaker, Monitor, DoorOpen, MapPin } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const blockData = {
  name: 'KKR Block',
  description: 'Main Academic Block housing the core engineering departments with modern infrastructure and state-of-the-art facilities.',
  image: '/assets/images/bg.jpg',
  departments: [
    { name: 'Computer Science & Engineering', rooms: 'A-101 to A-112' },
    { name: 'Information Technology', rooms: 'A-201 to A-210' },
    { name: 'Electronics & Communication', rooms: 'A-301 to A-312' },
  ],
  labs: [
    { name: 'Computer Lab 1', room: 'A-105' },
    { name: 'Computer Lab 2', room: 'A-106' },
    { name: 'Programming Lab', room: 'A-205' },
    { name: 'Network Lab', room: 'A-206' },
    { name: 'ECE Lab', room: 'A-305' },
    { name: 'Digital Electronics Lab', room: 'A-306' },
  ],
  classrooms: [
    { room: 'A-101', type: 'Lecture Hall' },
    { room: 'A-102', type: 'Lecture Hall' },
    { room: 'A-103', type: 'Tutorial Room' },
    { room: 'A-201', type: 'Lecture Hall' },
    { room: 'A-202', type: 'Lecture Hall' },
    { room: 'A-301', type: 'Seminar Hall' },
  ],
  washrooms: [
    { floor: 'Ground Floor', male: 'Beside Room A-001', female: 'Beside Room A-010' },
    { floor: 'First Floor', male: 'Beside Room A-101', female: 'Beside Room 128' },
    { floor: 'Second Floor', male: 'Beside Room A-201', female: 'Beside Room 215 & 206' },
    { floor: 'Third Floor', male: 'Beside Room A-301', female: 'Beside Room 325' },
  ],
}

export default function BlockAPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-neutral-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-4 sm:py-6">
          <Link
            href="/blocks"
            className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blocks
          </Link>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-neutral-900 tracking-tight">
            {blockData.name}
          </h1>
          <p className="text-sm sm:text-base text-neutral-500 mt-2 max-w-2xl">
            {blockData.description}
          </p>
        </div>
      </header>

      {/* Image */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative h-48 sm:h-64 md:h-80 rounded-xl overflow-hidden"
        >
          <Image
            src={blockData.image}
            alt={blockData.name}
            fill
            className="object-cover"
          />
        </motion.div>
      </div>

      {/* Content */}
      <main className="mx-auto max-w-4xl px-4 sm:px-6 pb-12">
        {/* Departments */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-10"
        >
          <h2 className="text-lg sm:text-xl font-semibold text-neutral-900 mb-4 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-neutral-400" />
            Departments
          </h2>
          <div className="space-y-3">
            {blockData.departments.map((dept) => (
              <div
                key={dept.name}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 bg-neutral-50 rounded-lg border border-neutral-100"
              >
                <span className="font-medium text-neutral-800">{dept.name}</span>
                <span className="text-sm text-neutral-500 mt-1 sm:mt-0">{dept.rooms}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Labs */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-10"
        >
          <h2 className="text-lg sm:text-xl font-semibold text-neutral-900 mb-4 flex items-center gap-2">
            <Beaker className="w-5 h-5 text-neutral-400" />
            Laboratories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {blockData.labs.map((lab) => (
              <div
                key={lab.name}
                className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg border border-neutral-100"
              >
                <span className="font-medium text-neutral-800">{lab.name}</span>
                <span className="text-sm text-neutral-500">{lab.room}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Classrooms */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-10"
        >
          <h2 className="text-lg sm:text-xl font-semibold text-neutral-900 mb-4 flex items-center gap-2">
            <Monitor className="w-5 h-5 text-neutral-400" />
            Classrooms
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {blockData.classrooms.map((room) => (
              <div
                key={room.room}
                className="p-4 bg-neutral-50 rounded-lg border border-neutral-100 text-center"
              >
                <div className="font-semibold text-neutral-900">{room.room}</div>
                <div className="text-xs text-neutral-500 mt-1">{room.type}</div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Washrooms */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-lg sm:text-xl font-semibold text-neutral-900 mb-4 flex items-center gap-2">
            <DoorOpen className="w-5 h-5 text-neutral-400" />
            Washroom Locations
          </h2>
          <div className="space-y-3">
            {blockData.washrooms.map((wc) => (
              <div
                key={wc.floor}
                className="p-4 bg-neutral-50 rounded-lg border border-neutral-100"
              >
                <div className="font-medium text-neutral-900 mb-2">{wc.floor}</div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="text-neutral-600">Male — {wc.male}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="w-2 h-2 rounded-full bg-orange-500" />
                    <span className="text-neutral-600">Female — {wc.female}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  )
}
