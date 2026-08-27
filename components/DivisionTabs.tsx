'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Fish, Wheat, Package, Sun, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

const divisions = [
  {
    id: 'farming',
    title: 'Commercial Farming Operations',
    icon: Fish,
    desc: 'State-of-the-art agricultural ecosystem spanning 1,000 acres of sustainable fish farming ponds along with 18 modern climate-controlled poultry housing units.',
    stats: '1,000 Acres & 500k Capacity',
    highlights: ['Environmentally Controlled Sheds', 'Biosecure Aquaculture Ponds', 'Automated Feeding Infrastructure'],
    link: '/divisions#farming',
  },
  {
    id: 'feed',
    title: 'Feed Manufacturing Mills',
    icon: Wheat,
    desc: 'Two high-capacity automated processing plants equipped with advanced twin-screw extruders for producing premium floating aquaculture and livestock feeds.',
    stats: '120,000 Bags / Month',
    highlights: ['Twin-Screw Extrusion Technology', 'In-house NIR Quality Testing Lab', 'Custom Protein Formulations'],
    link: '/divisions#feed',
  },
  {
    id: 'packaging',
    title: 'Industrial PP Packaging Plant',
    icon: Package,
    desc: 'Heavy-duty Polypropylene woven sack production facility engineered with high-speed looms and automated printing for agricultural and chemical containment.',
    stats: '3,600 Tons Annual Output',
    highlights: ['High Tensile Weaving Looms', 'UV-Stabilized Protection Tech', 'Flexographic & BOPP Printing'],
    link: '/divisions#packaging',
  },
  {
    id: 'energy',
    title: 'Clean Solar Infrastructure',
    icon: Sun,
    desc: 'Mega-scale commercial solar photovoltaic installations powering industrial plants and contributing clean energy back to the grid via net-metering setup.',
    stats: '50 MW Clean Energy Grid',
    highlights: ['Tier-1 High Efficiency Panels', 'Industrial Net-Metering Setup', 'Zero-Emission Operations'],
    link: '/divisions#energy',
  },
];

export default function DivisionTabs() {
  const [activeTab, setActiveTab] = useState(divisions[0].id);
  const currentTab = divisions.find((tab) => tab.id === activeTab) || divisions[0];

  return (
    <div className="max-w-5xl mx-auto py-4 px-4">
      {/* Glassmorphic Tab Container */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 bg-white/5 backdrop-blur-xl p-2 rounded-2xl border border-white/10 shadow-2xl">
        {divisions.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-5 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2.5 z-10 ${
                isActive ? 'text-white' : 'text-slate-300 hover:text-white'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTabPill"
                  className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl -z-10 shadow-lg border border-emerald-400/30"
                  transition={{ type: 'spring', duration: 0.5, bounce: 0.15 }}
                />
              )}
              <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-emerald-400'}`} />
              <span>{tab.title}</span>
            </button>
          );
        })}
      </div>

      {/* Glassmorphic Card (Frosted Dark Glass Look) */}
      <div className="bg-white/10 backdrop-blur-2xl p-6 sm:p-10 rounded-3xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] min-h-[260px] relative overflow-hidden">
        {/* Subtle Ambient Glowing Orb */}
        <div className="absolute -top-24 -left-24 w-60 h-60 bg-emerald-500/20 rounded-full blur-[100px] pointer-events-none" />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 relative z-10"
          >
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="p-3 bg-emerald-500/20 border border-emerald-400/30 shadow-sm rounded-2xl text-emerald-300 backdrop-blur-md">
                  <currentTab.icon className="w-6 h-6" />
                </span>
                <div>
                  <h3 className="text-2xl font-extrabold text-white tracking-tight">{currentTab.title}</h3>
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    Infrastructure & Capacity Overview
                  </span>
                </div>
              </div>

              <p className="text-slate-200 leading-relaxed text-sm sm:text-base font-normal">
                {currentTab.desc}
              </p>

              {/* Technical Highlights Badges - Glass Chips */}
              <div className="flex flex-wrap gap-2 pt-1">
                {currentTab.highlights.map((item, idx) => (
                  <span 
                    key={idx} 
                    className="inline-flex items-center gap-1.5 bg-white/5 backdrop-blur-md border border-white/10 text-emerald-200 font-semibold px-3 py-1.5 rounded-xl text-xs shadow-sm"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    {item}
                  </span>
                ))}
              </div>

              <div className="pt-2">
                <div className="inline-flex items-center gap-2 bg-emerald-950/60 backdrop-blur-md border border-emerald-500/30 text-emerald-300 font-extrabold px-4 py-2 rounded-xl text-xs sm:text-sm shadow-inner">
                  <Zap className="w-4 h-4 text-emerald-400" />
                  <span>Plant Operational Capacity: {currentTab.stats}</span>
                </div>
              </div>
            </div>

            <div className="shrink-0 w-full lg:w-auto">
              <Link
                href={currentTab.link}
                className="inline-flex w-full lg:w-auto items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold px-6 py-3.5 rounded-2xl transition text-sm shadow-lg hover:shadow-emerald-900/50 hover:scale-[1.02] active:scale-[0.98] border border-emerald-400/30"
              >
                <span>Operational Specifications</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}