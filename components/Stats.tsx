'use client';

import { Fish, Bird, Factory, Package, Sun } from 'lucide-react';
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

export default function Stats() {
  return (
    <section className="w-full py-12 bg-gray-50 border-b border-gray-100 overflow-hidden relative">
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
      </div>

      {/* Infinite Scroll Belt Container */}
      <div className="relative overflow-x-auto">
        <div className="flex flex-nowrap gap-6 w-max px-4 sm:px-8 animate-scroll">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="w-[280px] sm:w-[220px] flex-shrink-0 group flex flex-col justify-between rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:border-emerald-400 transition-all duration-300 overflow-hidden cursor-pointer"
              >
                {/* Top Image Banner */}
                <div className="relative h-44 w-full overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 sm:group-hover:scale-110"
                    style={{ backgroundImage: `url(${item.bgImage})` }}
                  />
                  <div className="absolute inset-0 bg-black/20 sm:group-hover:bg-black/10 transition-colors" />
                  
                  {/* Floating Icon Badge */}
                  <div className="absolute top-3 left-3 p-2 bg-white/95 backdrop-blur-md text-emerald-800 rounded-xl border border-white/60 shadow-md">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-3.5 text-center flex-1 flex flex-col justify-center bg-white">
                  <div className="text-2xl font-black text-emerald-900 tracking-tight leading-none">
                    <Counter end={item.numericValue} suffix={item.suffix} />
                  </div>

                  <span className="text-xs font-bold text-gray-900 mt-1 leading-tight">
                    {item.label}
                  </span>

                  <span className="text-[10px] text-gray-500 font-medium mt-0.5">
                    {item.subtext}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}