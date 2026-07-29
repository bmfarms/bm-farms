'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  return (
    <section ref={ref} className="relative h-[85vh] overflow-hidden flex items-center justify-center bg-gradient-to-b from-green-900 via-emerald-900 to-green-950">
      {/* Dynamic Overlay Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-800/20 via-transparent to-black/60 -z-10" />

      {/* Parallax Motion Content */}
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