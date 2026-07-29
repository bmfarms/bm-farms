'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ParallaxHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <div ref={ref} className="relative h-[80vh] overflow-hidden flex items-center justify-center">
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{
          backgroundImage: `url('/hero-bg.jpg')`, // Agar aap ke pass hero image hai to uska path ya standard path yahan rahega
        }}
      />
      <div className="absolute inset-0 bg-black/40 -z-10" />
      
      <div className="text-center text-white p-6 max-w-3xl">
        <h1 className="text-5xl font-extrabold tracking-tight">BM Farms & Services</h1>
        <p className="mt-4 text-xl">Pioneering Sustainable Agriculture & Modern Farming</p>
      </div>
    </div>
  );
}