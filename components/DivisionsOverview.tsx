'use client';

import { ShieldCheck, Leaf, Award, Globe } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    badge: 'ISO & LAB CERTIFIED',
    title: 'Uncompromised Quality Control',
    subtitle: 'In-House Lab Testing & NIR Precision',
    desc: 'Har production lot ko strict lab testing aur aflatoxin verification se guzara jata hai taake international safety standards meet ho sakein.',
  },
  {
    icon: Leaf,
    badge: 'GREEN TECHNOLOGY',
    title: 'Sustainable Agricultural Ecosystem',
    subtitle: 'Eco-Friendly Operations',
    desc: 'Zero-waste initiatives, solar power integration, aur eco-friendly packaging se carbon footprint ko significantly reduce kiya gaya hai.',
  },
  {
    icon: Award,
    badge: 'FARMER FIRST',
    title: 'High Digestibility & Optimal FCR',
    subtitle: 'Proven Formulations',
    desc: 'Scientific formulation ki madad se Maximum Feed Conversion Ratio (FCR) achieve hota hai jo farmers ki profitability barhata hai.',
  },
  {
    icon: Globe,
    badge: 'NATIONAL REACH',
    title: 'Nationwide Supply Network',
    subtitle: 'Seamless Logistics & Support',
    desc: 'Pakistan bhar main energetic dealer distribution channel aur direct technical consulting, guaranteed delivery timelines ensure karti hai.',
  },
];

export default function DivisionsOverview() {
  return (
    <section className="py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold text-emerald-900 uppercase tracking-widest bg-emerald-100/90 border border-emerald-300/80 px-4 py-1.5 rounded-full shadow-sm">
            Why Choose BM Farms & Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Built on Quality, Innovation & Trust
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 font-medium">
            Leading Pakistan’s agricultural transformation with sustainable industrial practices, high-grade formulations, and uncompromised standard operating procedures.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-2xl border border-white/80 rounded-3xl p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:border-emerald-400 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-emerald-100 text-emerald-900 rounded-2xl border border-emerald-200 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-extrabold text-emerald-900 bg-emerald-100/80 border border-emerald-300/80 px-3 py-1 rounded-full uppercase tracking-wider">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                  <span className="text-xs font-bold text-emerald-800 block mt-0.5 mb-3">
                    {item.subtitle}
                  </span>
                  
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-bold text-slate-500">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Strict Quality Standard Guaranteed</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}