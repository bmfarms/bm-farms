'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Fish, Wheat, Package, Sun, ArrowRight, ShieldCheck, Factory, Cpu, Zap } from 'lucide-react';

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
    <div className="max-w-5xl mx-auto py-8 px-4">
      {/* Tab Buttons */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 bg-gray-200/60 p-2 rounded-2xl border border-gray-300/70 backdrop-blur-sm">
        {divisions.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-5 py-3 rounded-xl font-bold text-xs sm:text-sm transition-colors flex items-center gap-2.5 z-10 ${
                isActive ? 'text-white' : 'text-gray-700 hover:text-gray-950'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTabPill"
                  className="absolute inset-0 bg-emerald-900 rounded-xl -z-10 shadow-md"
                  transition={{ type: 'spring', duration: 0.5, bounce: 0.15 }}
                />
              )}
              <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-emerald-800'}`} />
              <span>{tab.title}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content Box */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-md min-h-[260px] relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6"
          >
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="p-2.5 bg-emerald-100/70 border border-emerald-200 rounded-xl text-emerald-900">
                  <currentTab.icon className="w-6 h-6" />
                </span>
                <div>
                  <h3 className="text-2xl font-extrabold text-gray-900">{currentTab.title}</h3>
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                    Infrastructure & Capacity Overview
                  </span>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {currentTab.desc}
              </p>

              {/* Technical Highlights Badges */}
              <div className="flex flex-wrap gap-2 pt-1">
                {currentTab.highlights.map((item, idx) => (
                  <span key={idx} className="inline-flex items-center gap-1.5 bg-gray-100 border border-gray-200 text-gray-700 font-semibold px-3 py-1 rounded-lg text-xs">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                    {item}
                  </span>
                ))}
              </div>

              <div className="pt-2">
                <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-950 font-extrabold px-4 py-2 rounded-xl text-xs sm:text-sm">
                  <Zap className="w-4 h-4 text-emerald-600" />
                  <span>Plant Operational Capacity: {currentTab.stats}</span>
                </div>
              </div>
            </div>

            <div className="shrink-0 w-full lg:w-auto">
              <Link
                href={currentTab.link}
                className="inline-flex w-full lg:w-auto items-center justify-center gap-2 bg-emerald-900 hover:bg-emerald-950 text-white font-bold px-6 py-3.5 rounded-2xl transition text-sm shadow-sm"
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