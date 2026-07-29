'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Factory, MapPin, CheckCircle2, Fish, Bird, Package, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

const facilities = [
  {
    title: "Star Floating Feed Mill",
    location: "Multan, Punjab, Pakistan",
    category: "Aquaculture Feed Manufacturing",
    icon: Fish,
    features: [
      "Modern Extruder & Pulverizer Technology",
      "Dedicated Floating & Sinking Feed Lines",
      "Advanced Nutrition Testing Lab",
      "High-Capacity Packaging & Storage Units"
    ]
  },
  {
    title: "Unique Super Feed Mill (US Feeds)",
    location: "Multan, Punjab, Pakistan",
    category: "Poultry & Livestock Feed Plant",
    icon: Factory,
    features: [
      "15 Metric Tons / Hour Production Capacity",
      "Automated Dosing & Micro-Ingredient Blending",
      "Computerized Pellet Mills",
      "120,000 Bags Monthly Output"
    ]
  },
  {
    title: "Polypropylene Packaging Factory",
    location: "Multan, Punjab, Pakistan",
    category: "Star Polypropylene Pvt Ltd",
    icon: Package,
    features: [
      "High-Speed Circular Looms for Weaving",
      "Automated Extrusion Tape Lines",
      "3,600 Tons Annual Processing Capacity",
      "UV Stabilized & Moisture Control Testing"
    ]
  },
  {
    title: "Environment-Controlled Poultry Farms",
    location: "Multan Region, Pakistan",
    category: "BM Commercial Farming",
    icon: Bird,
    features: [
      "18 Climate-Controlled Broiler Sheds",
      "Automated Feeders & Nipple Drinking Systems",
      "500,000 Broiler Batch Capacity",
      "Integrated Biosecurity & Disease Protocols"
    ]
  },
  {
    title: "50 MW Solar Power Generation Plant",
    location: "Multan Industrial Zone, Pakistan",
    category: "Star Enterprises - Clean Energy",
    icon: Sun,
    features: [
      "High-Efficiency PV Solar Panels",
      "Central Inverters & Smart Grid Integration",
      "Powering Industrial & Agricultural Units",
      "25% Carbon Footprint Reduction"
    ]
  }
];

export default function FacilitiesPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col justify-between overflow-hidden">
      <div>
        <Navbar />

        {/* Dynamic Page Header */}
        <section className="relative bg-gradient-to-r from-green-950 via-emerald-900 to-green-900 text-white py-20 px-4 sm:px-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent pointer-events-none" />
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto text-center relative z-10"
          >
            <span className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs font-semibold rounded-full uppercase tracking-wider mb-3 border border-emerald-500/30">
              Industrial Backbone
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Factories & Infrastructure</h1>
            <p className="mt-4 text-green-100 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              State-of-the-art production facilities powering high-quality agricultural & industrial manufacturing.
            </p>
          </motion.div>
        </section>

        {/* Facilities Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => {
              const IconComponent = facility.icon;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-md hover:shadow-xl hover:border-emerald-200 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="p-3.5 bg-emerald-50 rounded-2xl text-emerald-700 border border-emerald-100">
                        <IconComponent size={26} />
                      </div>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 bg-emerald-100/70 text-emerald-800 rounded-full border border-emerald-200/50">
                        Active Unit
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold text-gray-900 leading-snug">{facility.title}</h3>
                    
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-2 mb-4">
                      <MapPin size={14} className="text-emerald-600 shrink-0" />
                      <span>{facility.location}</span>
                    </div>

                    <p className="text-xs font-semibold text-emerald-700 mb-6 pb-4 border-b border-gray-100 uppercase tracking-wide">
                      {facility.category}
                    </p>

                    <ul className="space-y-3">
                      {facility.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
                          <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}