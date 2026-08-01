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
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/30 to-teal-50/40 flex flex-col justify-between overflow-hidden relative">
      
      {/* Background Ambient Glowing Orbs */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-20 w-96 h-96 bg-teal-200/40 rounded-full blur-3xl pointer-events-none" />

      <div>
        <Navbar />

        {/* Dynamic Page Header - Frosted Translucent Header */}
        <section className="relative bg-emerald-950/90 backdrop-blur-xl text-white py-20 px-4 sm:px-8 border-b border-white/10 shadow-lg">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/20 via-transparent to-transparent pointer-events-none" />
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto text-center relative z-10"
          >
            <span className="inline-block px-3.5 py-1 bg-white/10 border border-white/20 backdrop-blur-md text-emerald-300 text-xs font-bold rounded-full uppercase tracking-wider mb-3 shadow-sm">
              Legacy of Excellence
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">About BM Farms</h1>
            <p className="mt-4 text-emerald-100 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed font-medium">
              12+ years of leadership, innovation, and sustainability in Pakistan's agribusiness and industrial sectors.
            </p>
          </motion.div>
        </section>

        {/* Overview & Vision Section */}
        <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto relative z-10">
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
              <p className="text-gray-700 leading-relaxed text-base font-medium mb-4">
                BM Farms & Services Pvt Ltd is a diversified agribusiness and industrial enterprise with over 12 years of excellence in Pakistan's feed manufacturing, aquaculture, poultry farming, industrial packaging, and renewable energy sectors.
              </p>
              <p className="text-gray-700 leading-relaxed text-base font-medium mb-6">
                The company operates through a fully integrated business model designed to maximize efficiency, ensure consistent quality, and deliver sustainable agricultural solutions.
              </p>
              
              <div className="space-y-3">
                {[
                  "Feed Production Divisions supply optimized feed to poultry and fish farms.",
                  "Commercial Farming provides fresh meat through high-quality broiler production.",
                  "Polypropylene Bag Division supplies industrial-grade packaging.",
                  "Energy Division provides cost-efficient clean power for operations."
                ].map((text, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-3 p-3 rounded-2xl bg-white/40 border border-white/80 backdrop-blur-md shadow-sm hover:shadow-md hover:bg-white/60 transition-all"
                  >
                    <CheckCircle2 className="text-emerald-700 w-5 h-5 shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-gray-800">{text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Vision Box - Glass Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-white/40 backdrop-blur-xl p-8 sm:p-10 rounded-3xl border border-white/80 shadow-xl space-y-6 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-300/30 rounded-full blur-2xl pointer-events-none" />
                
                <div className="flex items-center gap-3 text-emerald-950 font-bold text-2xl">
                  <div className="p-2.5 bg-white/70 border border-white/90 rounded-2xl shadow-sm backdrop-blur-md text-emerald-800">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3>Our Vision</h3>
                </div>
                
                <blockquote className="text-gray-800 leading-relaxed text-base sm:text-lg italic font-medium border-l-4 border-emerald-600 pl-4 py-1">
                  "To lead Pakistan's agricultural, feed, poultry, aquaculture, packaging, and energy sectors through innovation, sustainability, high-quality products, and a commitment to national development."
                </blockquote>

                <div className="pt-4 grid grid-cols-2 gap-4 border-t border-white/60">
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-700">
                    <Award className="w-4 h-4 text-emerald-700" /> 100% Quality Assurance
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-700">
                    <Zap className="w-4 h-4 text-emerald-700" /> Eco-Sustainable Power
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* Leadership Section - Frosted Card Style */}
        <section className="py-20 bg-white/30 backdrop-blur-md border-t border-white/60 px-4 sm:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-block px-3 py-1 bg-white/60 border border-white/80 backdrop-blur-md text-emerald-800 text-xs font-extrabold rounded-full uppercase tracking-wider mb-2 shadow-sm">
                Executive Leadership
              </span>
              <h2 className="text-3xl font-extrabold text-gray-900 mt-1">Guiding Our Success</h2>
            </motion.div>
            
            {/* Interactive Card (Glassmorphic Outer Glow) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              onClick={() => setIsTouched(!isTouched)}
              className={`max-w-sm mx-auto h-[420px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 relative cursor-pointer border border-white/80 group select-none ${
                isTouched ? 'ring-4 ring-emerald-500/30' : ''
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
                  isTouched ? 'from-black/95' : 'group-hover:from-black/95'
                }`} />
              </div>

              {/* Hover & Tap Pop-Up Content Container - Glass Drop Panel */}
              <div className={`absolute bottom-0 inset-x-0 p-6 text-white flex flex-col justify-end transition-all duration-500 transform bg-emerald-950/85 backdrop-blur-xl border-t border-white/20 ${
                isTouched 
                  ? 'translate-y-0' 
                  : 'translate-y-[85px] group-hover:translate-y-0'
              }`}>
                
                {/* Always Visible Text (Name & Title) */}
                <div>
                  <h3 className="text-2xl font-extrabold tracking-tight text-white">
                    Mr. Malik Azhar Mushtaq
                  </h3>
                  <p className="text-xs font-bold text-emerald-300 uppercase tracking-wider mt-1">
                    CEO & Director - BM Farms & Services Pvt Ltd
                  </p>
                </div>

                {/* Pop-Up Description */}
                <p className={`text-xs text-emerald-50 font-medium mt-4 leading-relaxed transition-opacity duration-300 delay-100 ${
                  isTouched 
                    ? 'opacity-100' 
                    : 'opacity-0 group-hover:opacity-100'
                }`}>
                  A leading figure in Pakistan&apos;s aquaculture, feed manufacturing, and modern integrated farming sectors with over 12 years of specialized industry experience.
                </p>

                {/* Subtle Accent Line */}
                <div className={`h-1 bg-emerald-400 rounded-full mt-4 transition-all duration-500 shadow-sm ${
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