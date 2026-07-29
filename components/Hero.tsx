'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <section ref={ref} className="relative h-[85vh] overflow-hidden flex items-center justify-center bg-gray-900">
      {/* Background Image with Parallax & Loading State */}
      <motion.div
        style={{
          y: backgroundY,
          backgroundImage: `url('/hero-bg.jpg')`,
        }}
        onLoad={() => setImageLoaded(true)}
        className={`absolute inset-0 bg-cover bg-center -z-10 scale-105 transition-opacity duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
      />
      
      {/* Fallback Gradient if image is loading or missing */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-b from-green-900 via-emerald-900 to-green-950 -z-20" />
      )}
      
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/45 -z-10" />

      {/* Floating Hero Content */}
      <motion.div style={{ y: textY, opacity }} className="text-center text-white px-4 max-w-4xl z-10">
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