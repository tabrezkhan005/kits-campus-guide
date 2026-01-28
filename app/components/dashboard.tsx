'use client'

import { Header } from './header'
import { HeroSection } from './hero-section'
import { QuickAccessCards } from './quick-access-cards'
import { NeedHelpSection } from './need-help-section'
import { LargeNameFooter } from '@/components/ui/large-name-footer'

export function Dashboard() {
  return (
    <div className="min-h-screen bg-white antialiased">
      {/* Header */}
      <Header />

      {/* Hero Section - Full viewport height */}
      <HeroSection />

      {/* Main Content Area - Mobile Responsive */}
      <main className="relative bg-white">
        {/* Content Container */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:py-16 md:py-20 lg:py-20 sm:px-6 lg:px-8">
          {/* Quick Access Section */}
          <QuickAccessCards />

          {/* Section Divider */}
          <div className="my-8 sm:my-10 md:my-12 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />

          {/* Need Help Section */}
          <NeedHelpSection />
        </div>
      </main>

      {/* Footer */}
      <LargeNameFooter />
    </div>
  )
}
