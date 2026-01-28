'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, GraduationCap, Beaker, Monitor, DoorOpen } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const blockData = {
  name: 'KSR Block',
  description: 'Science & Research Block featuring specialized laboratories, workshop facilities, and research centers for core engineering branches.',
  image: '/ksr.webp',
  departments: [
    { name: 'Mechanical Engineering', rooms: 'B-101 to B-110' },
    { name: 'Civil Engineering', rooms: 'B-201 to B-208' },
    { name: 'Basic Sciences & Humanities', rooms: 'B-301 to B-310' },
  ],
  labs: [
    { name: 'Mechanical Workshop', room: 'B-G01' },
    { name: 'Thermal Lab', room: 'B-105' },
    { name: 'Fluid Mechanics Lab', room: 'B-106' },
    { name: 'Surveying Lab', room: 'B-205' },
    { name: 'Physics Lab', room: 'B-305' },
    { name: 'Chemistry Lab', room: 'B-306' },
  ],
  classrooms: [
    { room: 'B-101', type: 'Lecture Hall' },
    { room: 'B-102', type: 'Lecture Hall' },
    { room: 'B-201', type: 'Lecture Hall' },
    { room: 'B-202', type: 'Tutorial Room' },
    { room: 'B-301', type: 'Auditorium' },
    { room: 'B-302', type: 'Seminar Hall' },
  ],
  washrooms: [
    { floor: 'Ground Floor', male: 'Beside Room B-002', female: 'Beside Room B-015' },
    { floor: 'First Floor', male: 'Beside Room B-102', female: 'Beside Room B-115' },
    { floor: 'Second Floor', male: 'Beside Room B-202', female: 'Beside Room B-215' },
    { floor: 'Third Floor', male: 'Beside Room B-302', female: 'Beside Room B-315' },
  ],
}

export default function BlockBPage() {
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
