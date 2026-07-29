'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Fish, Wheat, Package, Sun, ArrowRight, CheckCircle2 } from 'lucide-react';

const divisions = [
  {
    id: 'farming',
    title: 'Commercial Farming',
    icon: Fish,
    desc: 'Operates 18 modern environment-controlled poultry houses with 500,000 broiler capacity, 200,000 layers, and 1,000 acres of sustainable fish farming.',
    stats: '1,000 Acres & 500k Broilers',
    link: '/divisions#farming',
  },
  {
    id: 'feed',
    title: 'Feed Production',
    icon: Wheat,
    desc: 'Two advanced feed plants producing high-nutrition floating fish feed, shrimp feed, broiler, layer, and livestock feeds.',
    stats: '120,000 Bags / Month',
    link: '/divisions#feed',
  },
  {
    id: 'packaging',
    title: 'PP Bags Packaging',
    icon: Package,
    desc: 'Durable, UV-protected, eco-friendly industrial-grade woven PP bags designed for agricultural and industrial packaging.',
    stats: '3,600 Tons Annual Capacity',
    link: '/divisions#packaging',
  },
  {
    id: 'energy',
    title: 'Clean Solar Energy',
    icon: Sun,
    desc: 'Mega-scale clean solar power project providing cost-efficient green power and reducing overall carbon emissions for industrial operations.',
    stats: '50 MW Solar Power',
    link: '/divisions#energy',
  },
];

export default function DivisionTabs() {
  const [activeTab, setActiveTab] = useState(divisions[0].id);
  const currentTab = divisions.find((tab) => tab.id === activeTab) || divisions[0];

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      {/* Tab Buttons */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 bg-gray-100/80 p-2 rounded-2xl border border-gray-200/80 backdrop-blur-sm">
        {divisions.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-5 py-3 rounded-xl font-bold text-sm transition-colors flex items-center gap-2.5 z-10 ${
                isActive ? 'text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTabPill"
                  className="absolute inset-0 bg-emerald-800 rounded-xl -z-10 shadow-md"
                  transition={{ type: 'spring', duration: 0.5, bounce: 0.15 }}
                />
              )}
              <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-emerald-700'}`} />
              <span>{tab.title}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content Box */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200/80 shadow-md min-h-[220px] relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6"
          >
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="p-2 bg-emerald-50 border border-emerald-100 rounded-lg text-emerald-800">
                  <currentTab.icon className="w-5 h-5" />
                </span>
                <h3 className="text-2xl font-extrabold text-gray-900">{currentTab.title}</h3>
              </div>

              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {currentTab.desc}
              </p>

              <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold px-3.5 py-1.5 rounded-lg text-xs sm:text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Key Capacity: {currentTab.stats}</span>
              </div>
            </div>

            <div className="shrink-0 w-full sm:w-auto">
              <Link
                href={currentTab.link}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white font-bold px-5 py-3 rounded-xl transition text-sm shadow-sm"
              >
                <span>Explore Division</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}