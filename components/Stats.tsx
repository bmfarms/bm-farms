'use client';

import { Fish, Bird, Factory, Package, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
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
    bgImage: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop',
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
    bgImage: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=800&auto=format&fit=crop',
  },
];

export default function Stats() {
  return (
    <section className="py-16 bg-white border-b border-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
            Our Key Milestones
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-2">
            Impact in Numbers
          </h2>
        </div>

        {/* Stats Grid with Background Image Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl h-72 flex flex-col justify-between p-6 shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-200 transform hover:-translate-y-1.5"
              >
                {/* Background Image with Zoom effect */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.bgImage})` }}
                />

                {/* Dark Gradient Overlay for optimal text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40 group-hover:via-black/70 transition-all duration-300" />

                {/* Top Icon Badge */}
                <div className="relative z-10 self-start p-3 bg-emerald-500/20 backdrop-blur-md rounded-2xl border border-emerald-400/30 text-emerald-300 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Text Content + Counter */}
                <div className="relative z-10 text-white space-y-1">
                  <div className="text-2xl sm:text-3xl font-black text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                    <Counter end={item.numericValue} suffix={item.suffix} />
                  </div>

                  <span className="text-sm font-bold text-gray-100 block">
                    {item.label}
                  </span>

                  <span className="text-xs text-emerald-300/90 font-medium block">
                    {item.subtext}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}