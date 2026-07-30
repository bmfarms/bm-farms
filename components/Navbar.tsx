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
    <header className="w-full sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      
      {/* Top Bar for Contact Info */}
      <div className="bg-emerald-900 text-white text-[11px] sm:text-xs py-2 px-3 sm:px-8 border-b border-emerald-800/50">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-y-1">
          
          {/* Phone & Email Container (Mobile + Desktop Visible) */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
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

          {/* Location Tag */}
          <div className="text-emerald-200 hidden sm:flex items-center gap-1 text-[11px] font-medium">
            <MapPin size={12} className="text-emerald-400 shrink-0" />
            <span>Multan, Pakistan</span>
          </div>

        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex justify-between items-center">
        
        {/* Brand Logo */}
        <Link href="/" className="flex flex-col group">
          <span className="text-xl sm:text-2xl font-black text-emerald-950 tracking-wide group-hover:text-emerald-800 transition-colors">
            BM FARMS
          </span>
          <span className="text-[10px] text-emerald-700 font-bold tracking-widest uppercase -mt-1">
            & SERVICES PVT LTD
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-7 font-semibold text-gray-700 text-sm">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative py-1 transition-colors ${
                  isActive ? 'text-emerald-800 font-bold' : 'hover:text-emerald-700'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="navbarIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-700 rounded-full"
                    transition={{ type: 'spring', duration: 0.4 }}
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
            className="hidden sm:inline-flex bg-emerald-800 hover:bg-emerald-900 text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl shadow-sm transition-all transform hover:-translate-y-0.5"
          >
            Get In Touch
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-lg"
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
                        ? 'bg-emerald-50 text-emerald-800'
                        : 'text-gray-700 hover:bg-gray-50'
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
                  className="block text-center w-full bg-emerald-800 hover:bg-emerald-900 text-white text-sm font-bold py-3 rounded-xl transition"
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