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
    <div className="max-w-7xl mx-auto py-4 px-4">
      {/* Glassmorphic Tab Container */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 bg-white/40 backdrop-blur-md p-2 rounded-2xl border border-white/60 shadow-lg">
        {divisions.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-4 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 z-10 ${
                isActive ? 'text-white' : 'text-emerald-950 hover:text-emerald-700'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTabPill"
                  className="absolute inset-0 bg-emerald-900 rounded-xl -z-10 shadow-lg"
                  transition={{ type: 'spring', duration: 0.5, bounce: 0.15 }}
                />
              )}
              <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-emerald-900'}`} />
              <span className="hidden sm:inline">{tab.title}</span>
              <span className="sm:hidden">{tab.title.split(' ')[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Glassmorphic Card */}
      <div className="bg-white/30 backdrop-blur-xl p-4 sm:p-6 rounded-3xl border border-white/70 shadow-2xl min-h-[240px] relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-white/20 rounded-full blur-2xl pointer-events-none" />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 relative z-10"
          >
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="p-2.5 bg-white/60 border border-white/80 shadow-sm rounded-2xl text-emerald-900 backdrop-blur-sm">
                  <currentTab.icon className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900">{currentTab.title}</h3>
                  <span className="text-[10px] sm:text-xs font-bold text-emerald-800 uppercase tracking-wider">
                    Infrastructure & Capacity Overview
                  </span>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed text-sm sm:text-base font-medium">
                {currentTab.desc}
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {currentTab.highlights.map((item, idx) => (
                  <span 
                    key={idx} 
                    className="inline-flex items-center gap-1.5 bg-white/50 backdrop-blur-md border border-white/80 text-emerald-950 font-bold px-3 py-1 rounded-xl text-[10px] sm:text-xs shadow-sm"
                  >
                    <ShieldCheck className="w-3 h-3 text-emerald-700" />
                    {item}
                  </span>
                ))}
              </div>

              <div className="pt-1">
                <div className="inline-flex items-center gap-2 bg-emerald-900/10 backdrop-blur-md border border-emerald-900/20 text-emerald-950 font-extrabold px-3 py-1.5 rounded-xl text-[10px] sm:text-sm">
                  <Zap className="w-3.5 h-3.5 text-emerald-800" />
                  <span>Plant Operational Capacity: {currentTab.stats}</span>
                </div>
              </div>
            </div>

            <div className="shrink-0 w-full lg:w-auto">
              <Link
                href={currentTab.link}
                className="inline-flex w-full lg:w-auto items-center justify-center gap-2 bg-emerald-900 hover:bg-emerald-950 text-white font-bold px-5 py-3 rounded-2xl transition text-sm shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
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