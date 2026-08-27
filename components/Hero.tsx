'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';

export default function Hero() {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  return (
    <section ref={ref} className="relative h-[85vh] sm:h-[90vh] overflow-hidden flex items-center justify-center bg-slate-950">
      
      {/* Parallax Background Image */}
      <motion.div
        style={{
          y: backgroundY,
          backgroundImage: `url('/hero-bg.jpg')`,
        }}
        className="absolute inset-0 bg-cover bg-center scale-105 filter brightness-75"
      />
      
      {/* Glassmorphism Dynamic Ambient Gradient & Blur Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-emerald-950/40 to-slate-950" />
      
      {/* Floating Light Bubbles for Glass Effect */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/20 rounded-full blur-[140px] pointer-events-none" />

      {/* Hero Text Content */}
      <motion.div style={{ y: textY, opacity }} className="relative text-center text-white px-4 max-w-4xl z-10 flex flex-col items-center">
        
        {/* Frosted Glass Badge */}
        <motion.span 
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 backdrop-blur-xl text-emerald-300 text-xs sm:text-sm font-semibold rounded-full uppercase tracking-widest mb-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
        >
          <Sparkles className="w-4 h-4 text-emerald-400" />
          Leading Agribusiness & Clean Energy Group
        </motion.span>

        {/* Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-emerald-200 drop-shadow-2xl"
        >
          BM Farms & Services
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-5 text-lg sm:text-2xl text-emerald-100/90 max-w-2xl font-light leading-relaxed"
        >
          Sustainable Farming, Modern Agro Solutions & Clean Energy
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto"
        >
          <Link
            href="/divisions"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold px-7 py-3.5 rounded-2xl shadow-lg hover:shadow-emerald-900/50 transition-all transform hover:-translate-y-0.5 text-sm sm:text-base border border-emerald-400/30"
          >
            <span>Explore Divisions</span>
            <ArrowRight size={18} />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center border border-white/20 hover:border-white/40 bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white font-semibold px-7 py-3.5 rounded-2xl transition-all text-sm sm:text-base shadow-lg"
          >
            Get In Touch
          </Link>
        </motion.div>

      </motion.div>

      {/* Animated Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-emerald-300/70 flex flex-col items-center gap-1 z-10"
      >
        <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
        <ChevronDown size={18} />
      </motion.div>
    </section>
  );
}