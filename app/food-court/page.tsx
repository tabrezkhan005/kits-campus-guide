'use client'

import { motion } from 'framer-motion'
import { Clock, Utensils, Coffee } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

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
            <p className="text-slate-500 mt-2">Refreshments and dining facilities</p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
                 <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="aspect-video relative rounded-2xl overflow-hidden bg-slate-200 shadow-sm"
                 >
                    <Image
                        src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&h=600&fit=crop"
                        alt="Campus Food Court"
                        fill
                        className="object-cover"
                    />
                 </motion.div>

                 <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                     <h2 className="text-xl font-semibold text-slate-900 mb-4">About the Facilities</h2>
                     <p className="text-slate-600 leading-relaxed mb-4">
                        Our modern food court provides hygienic and nutritious food options for students and staff. With a seating capacity of over 500, it offers a vibrant space for relaxation and social interaction.
                     </p>

                     <div className="grid sm:grid-cols-2 gap-4 mt-6">
                        <div className="p-4 bg-slate-50 rounded-xl">
                            <Utensils className="w-6 h-6 text-orange-500 mb-2" />
                            <h3 className="font-medium text-slate-900">Main Canteen</h3>
                            <p className="text-sm text-slate-500">Full meals, breakfast & lunch</p>
                        </div>
                        <div className="p-4 bg-slate-50 rounded-xl">
                            <Coffee className="w-6 h-6 text-brown-500 mb-2" />
                            <h3 className="font-medium text-slate-900">Coffee Shop</h3>
                            <p className="text-sm text-slate-500">Snacks, beverages & quick bites</p>
                        </div>
                     </div>
                 </div>
            </div>

            <div className="space-y-6">
                 <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm sticky top-6">
                     <h3 className="font-semibold text-slate-900 flex items-center gap-2 mb-4">
                        <Clock className="w-5 h-5 text-orange-600" /> Opening Hours
                     </h3>
                     <ul className="space-y-3 text-sm text-slate-600">
                        <li className="flex justify-between border-b border-slate-50 pb-2">
                            <span>Main Canteen</span>
                            <span className="font-medium text-slate-900">7:30 AM - 6:00 PM</span>
                        </li>
                         <li className="flex justify-between border-b border-slate-50 pb-2">
                            <span>Coffee Shop</span>
                            <span className="font-medium text-slate-900">8:00 AM - 8:00 PM</span>
                        </li>
                        <li className="flex justify-between pt-2">
                            <span className="text-slate-400 italic">Open on all working days</span>
                        </li>
                     </ul>
                 </div>
            </div>
        </div>
      </main>
    </div>
  )
}
