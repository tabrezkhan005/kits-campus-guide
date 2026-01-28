"use client";

import Image from 'next/image';

function LargeNameFooter() {
  return (
    <footer className="py-12 sm:py-16 md:py-20 lg:py-28 px-4 md:px-6 bg-neutral-50 border-t border-neutral-200">
      <div className="container mx-auto max-w-6xl">
        {/* Greeting */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <p className="text-neutral-600 text-sm sm:text-base md:text-lg font-normal tracking-wide">
            Thank you for exploring our campus
          </p>
          <p className="text-neutral-500 text-xs sm:text-sm mt-2 sm:mt-3 tracking-wider uppercase">
            Wishing you all the best
          </p>
        </div>

        {/* Logo */}
        <div className="w-full flex items-center justify-center">
          <Image
            src="/assets/images/logo/kitslogo-bg.png"
            alt="KITS Logo"
            width={280}
            height={280}
            className="object-contain opacity-90 w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-72 lg:h-72"
            priority
          />
        </div>

        {/* Tagline */}
        <div className="text-center mt-6 sm:mt-8 md:mt-10">
          <p className="text-neutral-600 text-[10px] sm:text-xs md:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase font-medium px-4">
            KKR & KSR Institute of Technology and Sciences
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <p className="text-[10px] sm:text-xs text-neutral-500 tracking-wide">
            © {new Date().getFullYear()} KITS Campus Guide. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export { LargeNameFooter };
