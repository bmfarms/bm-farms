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
  },
  {
    icon: Fish,
    numericValue: 2000,
    suffix: ' Acres',
    label: 'Fish Farming',
    subtext: '2,500+ Tons Annual Supply',
  },
  {
    icon: Factory,
    numericValue: 120000,
    suffix: '',
    label: 'Bags / Month',
    subtext: 'High-Capacity Feed Output',
  },
  {
    icon: Package,
    numericValue: 3600,
    suffix: ' Tons',
    label: 'PP Bags / Year',
    subtext: 'Industrial Packaging',
  },
  {
    icon: Sun,
    numericValue: 50,
    suffix: ' MW',
    label: 'Solar Energy Project',
    subtext: 'Clean Energy Output',
  },
];

export default function Stats() {
  return (
    <section className="py-16 bg-white border-b border-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Heading (Optional / Subtle) */}
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
            Our Key Milestones
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-2">
            Impact in Numbers
          </h2>
        </div>

        {/* Stats Grid */}
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
                className="group flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-b from-gray-50/80 to-white border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 transform hover:-translate-y-1.5"
              >
                <div className="mb-4 p-3.5 bg-emerald-50 border border-emerald-100 text-emerald-800 rounded-2xl group-hover:bg-emerald-800 group-hover:text-white transition-colors duration-300 shadow-sm">
                  <Icon className="w-7 h-7" />
                </div>

                <div className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
                  <Counter end={item.numericValue} suffix={item.suffix} />
                </div>

                <span className="text-sm font-bold text-emerald-900 mt-1.5">
                  {item.label}
                </span>

                <span className="text-xs text-gray-500 font-medium mt-1">
                  {item.subtext}
                </span>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}