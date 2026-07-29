'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const divisions = [
  {
    id: 'farming',
    title: 'Commercial Farming',
    desc: '2,000+ Acres dedicated to high-yield fish farming, crops, and modern poultry management.',
    stats: '2,000 Acres',
  },
  {
    id: 'feed',
    title: 'Feed Production',
    desc: 'State-of-the-art poultry and aqua feed manufacturing with optimal nutrient blend.',
    stats: '50,000 MT / Year',
  },
  {
    id: 'packaging',
    title: 'Packaging & Solar',
    desc: 'Eco-friendly industrial packaging alongside green solar energy solutions.',
    stats: '5 MW Solar Grid',
  },
];

export default function DivisionTabs() {
  const [activeTab, setActiveTab] = useState(divisions[0].id);

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      {/* Tab Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {divisions.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-xl font-semibold transition ${
              activeTab === tab.id
                ? 'bg-green-800 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm min-h-[200px]">
        <AnimatePresence mode="wait">
          {divisions.map(
            (tab) =>
              tab.id === activeTab && (
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <h3 className="text-2xl font-bold text-gray-900">{tab.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{tab.desc}</p>
                  <div className="inline-block bg-green-100 text-green-800 font-bold px-4 py-2 rounded-lg">
                    Key Capacity: {tab.stats}
                  </div>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}