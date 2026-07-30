'use client';

import { Fish, Bird, Factory, Package, Sun } from 'lucide-react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import Counter from '@/components/Counter';

const stats = [
  {
    icon: Bird,
    numericValue: 500000,
    suffix: '+',
    label: 'Broiler Capacity',
    subtext: '18 Environment Houses',
    bgImage: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=800&auto=format&fit=crop',
  },
  {
    icon: Fish,
    numericValue: 2000,
    suffix: ' Acres',
    label: 'Fish Farming',
    subtext: '2,500+ Tons Annual Supply',
    bgImage: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?q=80&w=800&auto=format&fit=crop',
  },
  {
    icon: Factory,
    numericValue: 120000,
    suffix: '',
    label: 'Bags / Month',
    subtext: 'High-Capacity Feed Output',
    bgImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
  },
  {
    icon: Package,
    numericValue: 3600,
    suffix: ' Tons',
    label: 'PP Bags / Year',
    subtext: 'Industrial Packaging',
    bgImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop',
  },
  {
    icon: Sun,
    numericValue: 50,
    suffix: ' MW',
    label: 'Solar Energy Project',
    subtext: 'Clean Energy Output',
    bgImage: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=800&auto=format&fit=crop',
  },
];

// Interactive 3D Tilt Card Component
function TiltCard({ item, index }: { item: typeof stats[0]; index: number }) {
  const Icon = item.icon;

  // Motion values for tilt coordinates
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for fluid motion
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['12deg', '-12deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-12deg', '12deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="group relative flex flex-col justify-between rounded-2xl bg-white border border-gray-200/80 shadow-md hover:shadow-2xl hover:border-emerald-400 transition-shadow duration-300 overflow-hidden cursor-pointer"
      >
        {/* Top Image Banner */}
        <div className="relative h-44 w-full overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-115"
            style={{ backgroundImage: `url(${item.bgImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent group-hover:bg-black/10 transition-colors duration-300" />
          
          {/* Floating Glassmorphism Icon Badge */}
          <div 
            style={{ transform: 'translateZ(20px)' }} 
            className="absolute top-3 left-3 p-2 bg-white/90 backdrop-blur-md text-emerald-800 rounded-xl border border-white/60 shadow-lg group-hover:bg-emerald-800 group-hover:text-white transition-colors duration-300"
          >
            <Icon className="w-4 h-4" />
          </div>
        </div>

        {/* Compact White Content Area */}
        <div 
          style={{ transform: 'translateZ(15px)' }} 
          className="p-3.5 text-center flex-1 flex flex-col justify-center bg-white"
        >
          <div className="text-2xl font-black text-emerald-900 tracking-tight leading-none group-hover:scale-105 transition-transform duration-300">
            <Counter end={item.numericValue} suffix={item.suffix} />
          </div>

          <span className="text-xs font-bold text-gray-900 mt-1 leading-tight">
            {item.label}
          </span>

          <span className="text-[10px] text-gray-500 font-medium mt-0.5">
            {item.subtext}
          </span>
        </div>

        {/* Subtle Shine/Glow overlay on hover */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-emerald-400/40 transition-all duration-300" />
      </motion.div>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="py-12 bg-gray-50 border-b border-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-8">
          <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest bg-emerald-100/80 px-3 py-1 rounded-full border border-emerald-200">
            Our Key Milestones
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-2">
            Impact in Numbers
          </h2>
        </div>

        {/* Stats Grid with 3D Tilt Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {stats.map((item, index) => (
            <TiltCard key={index} item={item} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}