'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Target, CheckCircle2, Award, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  // Mobile tap state management
  const [isTouched, setIsTouched] = useState(false);

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col justify-between overflow-hidden">
      <div>
        <Navbar />

        {/* Dynamic Page Header */}
        <section className="relative bg-gradient-to-r from-green-950 via-emerald-900 to-green-900 text-white py-20 px-4 sm:px-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent pointer-events-none" />
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto text-center relative z-10"
          >
            <span className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs font-semibold rounded-full uppercase tracking-wider mb-3 border border-emerald-500/30">
              Legacy of Excellence
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">About BM Farms</h1>
            <p className="mt-4 text-green-100 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              12+ years of leadership, innovation, and sustainability in Pakistan's agribusiness and industrial sectors.
            </p>
          </motion.div>
        </section>

        {/* Overview & Vision Section */}
        <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6 leading-tight">
                Company Overview
              </h2>
              <p className="text-gray-600 leading-relaxed text-base mb-4">
                BM Farms & Services Pvt Ltd is a diversified agribusiness and industrial enterprise with over 12 years of excellence in Pakistan's feed manufacturing, aquaculture, poultry farming, industrial packaging, and renewable energy sectors.
              </p>
              <p className="text-gray-600 leading-relaxed text-base mb-6">
                The company operates through a fully integrated business model designed to maximize efficiency, ensure consistent quality, and deliver sustainable agricultural solutions.
              </p>
              
              <div className="space-y-4">
                {[
                  "Feed Production Divisions supply optimized feed to poultry and fish farms.",
                  "Commercial Farming provides fresh meat through high-quality broiler production.",
                  "Polypropylene Bag Division supplies industrial-grade packaging.",
                  "Energy Division provides cost-efficient clean power for operations."
                ].map((text, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-gray-100"
                  >
                    <CheckCircle2 className="text-emerald-600 w-5 h-5 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-gray-700">{text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Vision Box */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-white to-emerald-50/40 p-8 sm:p-10 rounded-3xl border border-emerald-100 shadow-xl shadow-emerald-950/5 space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
                
                <div className="flex items-center gap-3 text-emerald-800 font-bold text-2xl">
                  <div className="p-2.5 bg-emerald-100 rounded-xl text-emerald-700">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3>Our Vision</h3>
                </div>
                
                <blockquote className="text-gray-700 leading-relaxed text-base sm:text-lg italic border-l-4 border-emerald-500 pl-4 py-1">
                  "To lead Pakistan's agricultural, feed, poultry, aquaculture, packaging, and energy sectors through innovation, sustainability, high-quality products, and a commitment to national development."
                </blockquote>

                <div className="pt-4 grid grid-cols-2 gap-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-xs font-semibold text-gray-500">
                    <Award className="w-4 h-4 text-emerald-600" /> 100% Quality Assurance
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-gray-500">
                    <Zap className="w-4 h-4 text-emerald-600" /> Eco-Sustainable Power
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* Leadership Section - Option A (Touch & Hover Responsive) */}
        <section className="py-20 bg-white border-t border-gray-100 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-emerald-600 font-semibold text-xs uppercase tracking-widest">Executive Leadership</span>
              <h2 className="text-3xl font-extrabold text-gray-900 mt-1">Guiding Our Success</h2>
            </motion.div>
            
            {/* Interactive Card (Hover & Mobile Tap Support) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              onClick={() => setIsTouched(!isTouched)}
              className={`max-w-sm mx-auto h-[420px] rounded-3xl overflow-hidden shadow-xl transition-all duration-500 relative cursor-pointer border border-emerald-100 group select-none ${
                isTouched ? 'shadow-2xl' : ''
              }`}
            >
              {/* Image Background */}
              <div className="relative w-full h-full">
                <Image 
                  src="/ceo.png" 
                  alt="Mr. Malik Azhar Mushtaq" 
                  fill 
                  className={`object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 ${
                    isTouched ? 'scale-105' : ''
                  }`} 
                />
                {/* Dark Overlay Tint */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-colors ${
                  isTouched ? 'from-black/90' : 'group-hover:from-black/90'
                }`} />
              </div>

              {/* Hover & Tap Pop-Up Content Container */}
              <div className={`absolute bottom-0 inset-x-0 p-6 text-white flex flex-col justify-end transition-all duration-500 transform bg-gradient-to-t from-emerald-950 via-emerald-950/95 to-transparent ${
                isTouched 
                  ? 'translate-y-0' 
                  : 'translate-y-[85px] group-hover:translate-y-0'
              }`}>
                
                {/* Always Visible Text (Name & Title) */}
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-white">
                    Mr. Malik Azhar Mushtaq
                  </h3>
                  <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mt-1">
                    CEO & Director - BM Farms & Services Pvt Ltd
                  </p>
                </div>

                {/* Pop-Up Description (Reveals on Hover / Touch Tap) */}
                <p className={`text-xs text-gray-200 mt-4 leading-relaxed transition-opacity duration-300 delay-100 ${
                  isTouched 
                    ? 'opacity-100' 
                    : 'opacity-0 group-hover:opacity-100'
                }`}>
                  A leading figure in Pakistan&apos;s aquaculture, feed manufacturing, and modern integrated farming sectors with over 12 years of specialized industry experience.
                </p>

                {/* Subtle Accent Line */}
                <div className={`h-1 bg-emerald-500 rounded-full mt-4 transition-all duration-500 ${
                  isTouched 
                    ? 'w-full' 
                    : 'w-10 group-hover:w-full'
                }`} />
              </div>

            </motion.div>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}