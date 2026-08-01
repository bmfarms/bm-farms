'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Mail, Menu, X, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Divisions', href: '/divisions' },
  { name: 'Facilities', href: '/facilities' },
  { name: 'Contact Us', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full sticky top-0 z-50 bg-white/40 backdrop-blur-xl border-b border-white/60 shadow-lg transition-all duration-300">
      
      {/* Mobile-Only Marquee Styling */}
      <style jsx>{`
        @media (max-width: 639px) {
          @keyframes topBarMarquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-topbar-mobile {
            display: flex;
            width: max-content;
            animation: topBarMarquee 15s linear infinite;
          }
          .animate-topbar-mobile:hover {
            animation-play-state: paused;
          }
        }
      `}</style>

      {/* Top Bar for Contact Info - Glass Translucent */}
      <div className="bg-emerald-950/90 backdrop-blur-md text-white text-[11px] sm:text-xs py-2 px-3 sm:px-8 border-b border-white/10 overflow-hidden relative">
        <div className="max-w-7xl mx-auto flex sm:justify-between items-center">
          
          {/* Container: Mobile Marquee & Desktop Balanced Flex Layout */}
          <div className="animate-topbar-mobile sm:animate-none flex items-center justify-between w-full gap-6 sm:gap-0">
            
            {/* Left Side (Desktop): Phone & Email */}
            <div className="flex items-center gap-4 sm:gap-6 shrink-0">
              <a 
                href="tel:+923006333064" 
                className="flex items-center gap-1.5 hover:text-emerald-300 transition-colors whitespace-nowrap"
              >
                <Phone size={13} className="text-emerald-400 shrink-0" />
                <span>+92 300 6333064</span>
              </a>

              <a 
                href="mailto:starfloatingfeedofficial@gmail.com" 
                className="flex items-center gap-1.5 hover:text-emerald-300 transition-colors whitespace-nowrap"
              >
                <Mail size={13} className="text-emerald-400 shrink-0" />
                <span>starfloatingfeedofficial@gmail.com</span>
              </a>
            </div>

            {/* Right Side (Desktop): Location */}
            <div className="hidden sm:flex items-center gap-1 text-[11px] text-emerald-200 shrink-0 font-medium">
              <MapPin size={12} className="text-emerald-400 shrink-0" />
              <span>Multan, Pakistan</span>
            </div>

            {/* Set 2 (Mobile Only Duplicate for Seamless Infinite Loop) */}
            <div className="flex sm:hidden items-center gap-6 shrink-0">
              <div className="flex items-center gap-1 text-[11px] text-emerald-200 whitespace-nowrap">
                <MapPin size={12} className="text-emerald-400 shrink-0" />
                <span>Multan, Pakistan</span>
              </div>

              <a 
                href="tel:+923006333064" 
                className="flex items-center gap-1.5 hover:text-emerald-300 transition-colors whitespace-nowrap"
              >
                <Phone size={13} className="text-emerald-400 shrink-0" />
                <span>+92 300 6333064</span>
              </a>

              <a 
                href="mailto:starfloatingfeedofficial@gmail.com" 
                className="flex items-center gap-1.5 hover:text-emerald-300 transition-colors whitespace-nowrap"
              >
                <Mail size={13} className="text-emerald-400 shrink-0" />
                <span>starfloatingfeedofficial@gmail.com</span>
              </a>
            </div>

          </div>

        </div>
      </div>

      {/* Main Navigation - Floating Glass Header Bar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex justify-between items-center">
        
        {/* Brand Logo */}
        <Link href="/" className="flex flex-col group">
          <span className="text-xl sm:text-2xl font-black text-emerald-950 tracking-wide group-hover:text-emerald-800 transition-colors">
            BM FARMS
          </span>
          <span className="text-[10px] text-emerald-700 font-bold tracking-widest uppercase -mt-1">
            & SERVICES PVT LTD
          </span>
        </Link>

        {/* Desktop Navigation Links (Frosted Glass Chips) */}
        <div className="hidden md:flex items-center gap-2 bg-white/50 backdrop-blur-md p-1.5 rounded-2xl border border-white/80 shadow-sm font-semibold text-gray-800 text-xs sm:text-sm">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-4 py-1.5 rounded-xl transition-all ${
                  isActive ? 'text-white font-bold' : 'hover:text-emerald-900 hover:bg-white/40'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="navbarIndicator"
                    className="absolute inset-0 bg-emerald-900 rounded-xl -z-10 shadow-md"
                    transition={{ type: 'spring', duration: 0.4, bounce: 0.15 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link 
            href="/contact" 
            className="hidden sm:inline-flex bg-emerald-900 hover:bg-emerald-950 text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl shadow-md border border-white/20 transition-all transform hover:scale-105 active:scale-95"
          >
            Get In Touch
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl text-emerald-950 bg-white/60 backdrop-blur-md border border-white/80 shadow-sm hover:bg-white transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Navigation (Frosted Glass Panel) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white/80 backdrop-blur-2xl border-t border-white/80 overflow-hidden shadow-2xl"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                      isActive
                        ? 'bg-emerald-900 text-white font-bold shadow-md'
                        : 'text-emerald-950 hover:bg-white/60'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              
              <div className="pt-2">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block text-center w-full bg-emerald-900 hover:bg-emerald-950 text-white text-sm font-bold py-3 rounded-xl transition shadow-md"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}