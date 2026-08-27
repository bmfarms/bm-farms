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

const marqueeStats = [...stats, ...stats, ...stats];

export default function Stats() {
  return (
    <section className="py-12 bg-slate-200/50 backdrop-blur-md border-y border-slate-300/60 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        <div className="text-center mb-8">
          <span className="text-xs font-extrabold text-emerald-900 uppercase tracking-widest bg-emerald-100/90 px-4 py-1.5 rounded-full border border-emerald-300/80 shadow-sm">
            Our Key Milestones
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Impact in Numbers
          </h2>
        </div>

      </div>

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
        }
        .animate-marquee:hover,
        .animate-marquee:active {
          animation-play-state: paused;
        }
      `}</style>

      <div className="relative w-full overflow-hidden flex py-2 select-none touch-pan-y z-10">
        
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-200/90 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-200/90 to-transparent z-20 pointer-events-none" />

        <div className="animate-marquee gap-6">
          {marqueeStats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="w-64 sm:w-72 shrink-0 group flex flex-col justify-between rounded-2xl bg-white/70 backdrop-blur-xl border border-white/80 shadow-lg hover:shadow-2xl hover:border-emerald-500 hover:bg-white/90 transition-all duration-300 overflow-hidden cursor-pointer"
              >
                <div className="relative h-44 w-full overflow-hidden bg-slate-200">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 sm:group-hover:scale-110"
                    style={{ backgroundImage: `url(${item.bgImage})` }}
                  />
                  <div className="absolute inset-0 bg-black/20 sm:group-hover:bg-black/10 transition-colors" />
                  
                  <div className="absolute top-3 left-3 p-2 bg-white/90 backdrop-blur-md text-emerald-800 rounded-xl border border-white shadow-md">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-4 text-center flex-1 flex flex-col justify-center bg-white/40">
                  <div className="text-2xl font-black text-emerald-950 tracking-tight leading-none">
                    <Counter end={item.numericValue} suffix={item.suffix} />
                  </div>

                  <span className="text-xs font-bold text-slate-900 mt-2 leading-tight">
                    {item.label}
                  </span>

                  <span className="text-[11px] text-slate-600 font-semibold mt-1">
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