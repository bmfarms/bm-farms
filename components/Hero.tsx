'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  
  // Track scroll position inside Hero
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Background slow movement (Parallax) & Text relative movement
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <section ref={ref} className="relative h-[85vh] overflow-hidden flex items-center justify-center bg-gray-900">
      {/* Background Image with Parallax Movement */}
      <motion.div
        style={{
          y: backgroundY,
          backgroundImage: `url('/hero-bg.jpg')`, // Agar aap ke pass specific background image ka path ho toh yahan change kar sakte hain
        }}
        className="absolute inset-0 bg-cover bg-center -z-10 scale-105"
      />
      
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/45 -z-10" />

      {/* Floating Hero Content */}
      <motion.div style={{ y: textY, opacity }} className="text-center text-white px-4 max-w-4xl z-10">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
          BM Farms & Services
        </h1>
        <p className="mt-4 text-lg sm:text-2xl text-gray-200">
          Sustainable Farming, Modern Agro Solutions & Clean Energy
        </p>
      </motion.div>
    </section>
  );
}