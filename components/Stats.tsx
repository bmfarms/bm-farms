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

// Continuous loop ke liye items duplicate kar rahe hain
const marqueeStats = [...stats, ...stats, ...stats];

export default function Stats() {
  return (
    <section className="py-12 bg-slate-950 border-b border-white/10 overflow-hidden relative">
      
      {/* Decorative Ambient Glass Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-8">
          <span className="text-xs font-bold text-emerald-300 uppercase tracking-widest bg-white/10 px-4 py-1.5 rounded-full border border-white/20 backdrop-blur-xl shadow-lg">
            Our Key Milestones
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-4 drop-shadow-md">
            Impact in Numbers
          </h2>
        </div>

      </div>

      {/* GPU Accelerated Marquee Styling */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-33.333%, 0, 0); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .animate-marquee:hover,
        .animate-marquee:active {
          animation-play-state: paused;
        }
      `}</style>

      {/* Infinite Continuous Slider Container */}
      <div className="relative w-full overflow-hidden flex py-4 select-none touch-pan-y z-10">
        
        {/* Edge Gradients for Dark Theme */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-950 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-950 to-transparent z-20 pointer-events-none" />

        <div className="animate-marquee gap-6">
          {marqueeStats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="w-64 sm:w-72 shrink-0 group flex flex-col justify-between rounded-2xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:border-emerald-400/50 hover:bg-white/15 transition-all duration-300 overflow-hidden cursor-pointer transform-gpu"
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                {/* Top Image Banner */}
                <div className="relative h-44 w-full overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 sm:group-hover:scale-110"
                    style={{ backgroundImage: `url(${item.bgImage})` }}
                  />
                  {/* Darker overlay for better contrast in dark theme */}
                  <div className="absolute inset-0 bg-black/40 sm:group-hover:bg-black/20 transition-colors" />
                  
                  {/* Floating Icon Badge */}
                  <div className="absolute top-3 left-3 p-2 bg-slate-950/60 backdrop-blur-md text-emerald-400 rounded-xl border border-white/20 shadow-lg">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Compact Content Area */}
                <div className="p-4 text-center flex-1 flex flex-col justify-center bg-transparent border-t border-white/10">
                  <div className="text-2xl font-black text-white tracking-tight leading-none drop-shadow-sm">
                    <Counter end={item.numericValue} suffix={item.suffix} />
                  </div>

                  <span className="text-xs font-bold text-emerald-300 mt-2 leading-tight">
                    {item.label}
                  </span>

                  <span className="text-[10px] text-slate-400 font-medium mt-1">
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