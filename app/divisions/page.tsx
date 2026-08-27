'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Fish, Bird, Layers, Factory, Package, Sun, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DivisionsPage() {
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
              Operational Spectrum
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Core Business Divisions</h1>
            <p className="mt-4 text-green-100 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Comprehensive agribusiness and industrial operations powering Pakistan's growth.
            </p>
          </motion.div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 space-y-16">
          
          {/* 1. Commercial Farming Division */}
          <motion.div 
            id="farming" 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-md hover:shadow-lg transition-shadow scroll-mt-24"
          >
            <div className="flex items-center gap-4 border-b border-gray-100 pb-5 mb-8">
              <div className="p-3.5 bg-emerald-50 rounded-2xl text-emerald-700 border border-emerald-100">
                <Fish size={32} />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">1. Commercial Farming Division</h2>
                <p className="text-xs text-emerald-700 font-bold uppercase tracking-wider mt-0.5">BM Farms & Services Pvt Ltd</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Fish Farming */}
              <motion.div whileHover={{ y: -4 }} className="bg-gray-50/80 p-6 rounded-2xl border border-gray-200/60 shadow-sm">
                <div className="flex items-center gap-2 text-emerald-800 font-bold mb-4">
                  <Fish size={22} className="text-emerald-600" />
                  <h3 className="text-lg">Fish Farming</h3>
                </div>
                <ul className="text-xs sm:text-sm text-gray-600 space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>12 Acres / 1,000 Acres Overall:</strong> High-efficiency pond systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Species:</strong> Rohu, Tilapia, Thaila and freshwater species</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Protocols:</strong> Sustainable water & feeding protocols</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Capacity:</strong> 2,500+ tons annual supply</span>
                  </li>
                </ul>
              </motion.div>

              {/* Broiler Farming */}
              <motion.div whileHover={{ y: -4 }} className="bg-gray-50/80 p-6 rounded-2xl border border-gray-200/60 shadow-sm">
                <div className="flex items-center gap-2 text-emerald-800 font-bold mb-4">
                  <Bird size={22} className="text-emerald-600" />
                  <h3 className="text-lg">Broiler Farming</h3>
                </div>
                <ul className="text-xs sm:text-sm text-gray-600 space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Houses:</strong> 18 modern environment-controlled poultry houses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Capacity:</strong> Total capacity of 500,000 birds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Automation:</strong> Automated temperature, ventilation & feeding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Performance:</strong> Efficient FCR & high production turnover</span>
                  </li>
                </ul>
              </motion.div>

              {/* Layer Farming */}
              <motion.div whileHover={{ y: -4 }} className="bg-gray-50/80 p-6 rounded-2xl border border-gray-200/60 shadow-sm">
                <div className="flex items-center gap-2 text-emerald-800 font-bold mb-4">
                  <Layers size={22} className="text-emerald-600" />
                  <h3 className="text-lg">Layer Farming</h3>
                </div>
                <ul className="text-xs sm:text-sm text-gray-600 space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Capacity:</strong> 200,000 birds for commercial egg production</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Systems:</strong> Automated egg collection systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Supply Chain:</strong> Strong supply chain capabilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Output:</strong> Consistent and reliable production</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>

          {/* 2. Feed Production Division */}
          <motion.div 
            id="feed" 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-md hover:shadow-lg transition-shadow scroll-mt-24"
          >
            <div className="flex items-center gap-4 border-b border-gray-100 pb-5 mb-8">
              <div className="p-3.5 bg-emerald-50 rounded-2xl text-emerald-700 border border-emerald-100">
                <Factory size={32} />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">2. Feed Production Division</h2>
                <p className="text-xs text-emerald-700 font-bold uppercase tracking-wider mt-0.5">Star Floating Feed Pvt Ltd + Unique Super Feed Pvt Ltd</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
              {/* Star Floating Feed */}
              <motion.div whileHover={{ y: -4 }} className="bg-gray-50/80 p-6 rounded-2xl border border-gray-200/60 shadow-sm">
                <h3 className="text-xl font-bold text-emerald-950 mb-1">A. Star Floating Feed Pvt Ltd</h3>
                <p className="text-xs font-semibold text-emerald-700 mb-4 uppercase tracking-wide">Multan Plant - Specialized Aquaculture Feed</p>
                <div className="space-y-3 text-xs sm:text-sm text-gray-600">
                  <p className="leading-relaxed"><strong>Specializations:</strong> Floating Fish Feed, Sinking Fish Feed, Shrimp Feed, Special aquaculture formulas.</p>
                  <p className="leading-relaxed"><strong>Key Features:</strong> Modern extrusion & pulverizer technology, nutritionally optimized formulas, nationwide distribution, 12+ years experience.</p>
                </div>
              </motion.div>

              {/* Unique Super Feed */}
              <motion.div whileHover={{ y: -4 }} className="bg-gray-50/80 p-6 rounded-2xl border border-gray-200/60 shadow-sm">
                <h3 className="text-xl font-bold text-emerald-950 mb-1">B. Unique Super Feed Pvt Ltd (US Feeds)</h3>
                <p className="text-xs font-semibold text-emerald-700 mb-4 uppercase tracking-wide">Multan Plant - Poultry & Animal Feed</p>
                <div className="space-y-3 text-xs sm:text-sm text-gray-600">
                  <p className="leading-relaxed"><strong>Specializations:</strong> Broiler feed, Layer feed, Breeder feed, Livestock feed.</p>
                  <p className="leading-relaxed"><strong>Production Capacity:</strong> 15 MT per hour / 120,000 bags per month.</p>
                  <p className="leading-relaxed"><strong>Strengths:</strong> Automated blending & mixing systems, strong presence in Punjab.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* 3. Polypropylene Bags Division */}
          <motion.div 
            id="packaging" 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-md hover:shadow-lg transition-shadow scroll-mt-24"
          >
            <div className="flex items-center gap-4 border-b border-gray-100 pb-5 mb-8">
              <div className="p-3.5 bg-emerald-50 rounded-2xl text-emerald-700 border border-emerald-100">
                <Package size={32} />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">3. Polypropylene Bags Division</h2>
                <p className="text-xs text-emerald-700 font-bold uppercase tracking-wider mt-0.5">Star Polypropylene Pvt Ltd - Multan, Pakistan</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-gray-600 bg-gray-50/80 p-6 rounded-2xl border border-gray-200/60">
              <div className="space-y-3">
                <p className="flex items-center gap-2">• <span><strong>Annual Capacity:</strong> 3,600 tons</span></p>
                <p className="flex items-center gap-2">• <span><strong>Lines:</strong> Automated extrusion, weaving & stitching lines</span></p>
                <p className="flex items-center gap-2">• <span><strong>Quality:</strong> Durable, tear-resistant PP bags</span></p>
              </div>
              <div className="space-y-3">
                <p className="flex items-center gap-2">• <span><strong>Protection:</strong> UV-protected & moisture-resistant</span></p>
                <p className="flex items-center gap-2">• <span><strong>Options:</strong> Custom print and sizing options</span></p>
                <p className="flex items-center gap-2">• <span><strong>Sustainability:</strong> Recyclable & eco-friendly</span></p>
              </div>
            </div>
          </motion.div>

          {/* 4. Energy Division */}
          <motion.div 
            id="energy" 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-md hover:shadow-lg transition-shadow scroll-mt-24"
          >
            <div className="flex items-center gap-4 border-b border-gray-100 pb-5 mb-8">
              <div className="p-3.5 bg-emerald-50 rounded-2xl text-emerald-700 border border-emerald-100">
                <Sun size={32} />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">4. Energy Division</h2>
                <p className="text-xs text-emerald-700 font-bold uppercase tracking-wider mt-0.5">Star Enterprises - 50 MW Solar Power Project</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-gray-600 bg-gray-50/80 p-6 rounded-2xl border border-gray-200/60">
              <div className="space-y-3">
                <p className="flex items-center gap-2">• <span><strong>Plant Capacity:</strong> 50 MW Solar Power Plant</span></p>
                <p className="flex items-center gap-2">• <span><strong>Technology:</strong> Photovoltaic (PV) panel technology</span></p>
              </div>
              <div className="space-y-3">
                <p className="flex items-center gap-2">• <span><strong>Impact:</strong> 25% carbon emission reduction</span></p>
                <p className="flex items-center gap-2">• <span><strong>Goal:</strong> Renewable, cost-efficient, stable electricity for operations and communities</span></p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
      <Footer />
    </main>
  );
}
