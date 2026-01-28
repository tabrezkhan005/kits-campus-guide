'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowUpRight,
  Heart
} from 'lucide-react'

const footerLinks = {
  quickLinks: [
    { name: 'Campus Map', href: '#' },
    { name: 'Academic Blocks', href: '#' },
    { name: 'Faculty Directory', href: '#' },
    { name: 'Facilities', href: '#' },
    { name: 'Help & Support', href: '#' },
  ],
  departments: [
    { name: 'Computer Science', href: '#' },
    { name: 'Electronics', href: '#' },
    { name: 'Mechanical', href: '#' },
    { name: 'Civil Engineering', href: '#' },
    { name: 'MBA', href: '#' },
  ],
  resources: [
    { name: 'Student Portal', href: '#' },
    { name: 'Library', href: '/library' },
    { name: 'Examinations', href: '#' },
    { name: 'Placements', href: '/placement' },
    { name: 'Downloads', href: '#' },
  ],
}

const socialLinks = [
  { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
  { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
  { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
  { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
  { icon: <Youtube className="w-5 h-5" />, href: '#', label: 'YouTube' },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#005BAB]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#0077D4]/10 rounded-full blur-[120px]" />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/assets/images/logo/kitslogo-bg.png"
                alt="KITS Logo"
                width={60}
                height={60}
                className="object-contain brightness-0 invert opacity-90"
              />
              <div>
                <h3
                  className="text-xl font-bold text-white"
                  style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
                >
                  KITS Campus Guide
                </h3>
                <p className="text-sm text-white/60">Navigate with ease</p>
              </div>
            </div>

            <p
              className="text-white/70 leading-relaxed mb-6"
              style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
            >
              Your comprehensive digital guide to KKR & KSR Institute of Technology and Sciences.
              Find classrooms, offices, and facilities instantly.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="#"
                className="flex items-center gap-3 text-white/70 hover:text-[#00A3FF] transition-colors group"
              >
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-[#005BAB]/20 transition-colors">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm">Guntur, Andhra Pradesh, India</span>
              </a>
              <a
                href="tel:+918631234567"
                className="flex items-center gap-3 text-white/70 hover:text-[#00A3FF] transition-colors group"
              >
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-[#005BAB]/20 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm">+91 863 123 4567</span>
              </a>
              <a
                href="mailto:info@kitsguntur.ac.in"
                className="flex items-center gap-3 text-white/70 hover:text-[#00A3FF] transition-colors group"
              >
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-[#005BAB]/20 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm">info@kitsguntur.ac.in</span>
              </a>
              <a
                href="https://kitsguntur.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-[#00A3FF] transition-colors group"
              >
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-[#005BAB]/20 transition-colors">
                  <Globe className="w-4 h-4" />
                </div>
                <span className="text-sm">www.kitsguntur.ac.in</span>
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              {/* Quick Links */}
              <div>
                <h4
                  className="text-sm font-semibold text-white uppercase tracking-wider mb-5"
                  style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
                >
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  {footerLinks.quickLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-white/60 hover:text-[#00A3FF] transition-colors flex items-center gap-1 group"
                        style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
                      >
                        <span>{link.name}</span>
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Departments */}
              <div>
                <h4
                  className="text-sm font-semibold text-white uppercase tracking-wider mb-5"
                  style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
                >
                  Departments
                </h4>
                <ul className="space-y-3">
                  {footerLinks.departments.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-white/60 hover:text-[#00A3FF] transition-colors flex items-center gap-1 group"
                        style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
                      >
                        <span>{link.name}</span>
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4
                  className="text-sm font-semibold text-white uppercase tracking-wider mb-5"
                  style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
                >
                  Resources
                </h4>
                <ul className="space-y-3">
                  {footerLinks.resources.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-white/60 hover:text-[#00A3FF] transition-colors flex items-center gap-1 group"
                        style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
                      >
                        <span>{link.name}</span>
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-10 p-6 rounded-2xl bg-white/5 border border-white/10">
              <h4
                className="text-lg font-semibold text-white mb-2"
                style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
              >
                Stay Updated
              </h4>
              <p className="text-sm text-white/60 mb-4">
                Get the latest campus updates and announcements.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-[#005BAB] transition-colors"
                  style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#005BAB] to-[#0077D4] text-white text-sm font-semibold shadow-lg shadow-[#005BAB]/25 hover:shadow-xl hover:shadow-[#005BAB]/30 transition-all"
                  style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <p
              className="text-sm text-white/50 flex items-center gap-1"
              style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
            >
              © {new Date().getFullYear()} KITS Campus Guide. Made with
              <Heart className="w-4 h-4 text-red-500 fill-red-500 mx-1" />
              for students.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-2.5 rounded-xl bg-white/5 text-white/60 hover:text-white hover:bg-[#005BAB]/30 transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
