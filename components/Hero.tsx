'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

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
    <section ref={ref} className="relative h-[85vh] overflow-hidden flex items-center justify-center bg-gray-900">
      {/* Parallax Background Image */}
      <motion.div
        style={{
          y: backgroundY,
          backgroundImage: `url('/hero-bg.jpg')`,
        }}
        className="absolute inset-0 bg-cover bg-center scale-105"
      />
      
      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Hero Text Content */}
      <motion.div style={{ y: textY, opacity }} className="relative text-center text-white px-4 max-w-4xl z-10">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
          BM Farms & Services
        </h1>
        <p className="mt-4 text-lg sm:text-2xl text-emerald-100">
          Sustainable Farming, Modern Agro Solutions & Clean Energy
        </p>
      </motion.div>
    </section>
  );
}