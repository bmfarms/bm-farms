'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Fish, 
  Bird, 
  Package, 
  Sun, 
  MessageSquare, 
  ArrowRight, 
  FileText, 
  Sparkles 
} from 'lucide-react';

const categories = [
  { id: 'all', label: 'All Products' },
  { id: 'feed', label: 'Feed Solutions' },
  { id: 'packaging', label: 'Industrial Packaging' },
  { id: 'energy', label: 'Clean Energy' },
];

const products = [
  {
    id: 1,
    category: 'feed',
    title: 'Star Floating Fish Feed',
    entity: 'Star Floating Feed Pvt Ltd',
    icon: Fish,
    description: 'High-protein, highly digestible floating extruded feed designed for maximum Growth & FCR in Tilapia, Pangasius, and Carp farming.',
    badge: 'Best Seller',
    image: '/Fish Feed.png',
    specs: [
      { label: 'Crude Protein', value: '28% - 34%' },
      { label: 'Pellet Size', value: '1.5mm - 6mm' },
      { label: 'Packaging', value: '20kg / 40kg Bags' },
    ],
  },
  {
    id: 2,
    category: 'feed',
    title: 'Unique Super Broiler Feed',
    entity: 'Unique Super Feed Pvt Ltd',
    icon: Bird,
    description: 'Scientifically formulated starter, grower, and finisher rations for controlled environment broiler farming.',
    badge: 'High Yield',
    image: '/Broiler Feed.png',
    specs: [
      { label: 'FCR Ratio', value: 'Optimized' },
      { label: 'Nutrition', value: 'Vitamins & Minerals' },
      { label: 'Quality', value: 'Aflatoxin Tested' },
    ],
  },
  {
    id: 3,
    category: 'packaging',
    title: 'Star Polypropylene (PP) Woven Bags',
    entity: 'Star Polypropylene Pvt Ltd',
    icon: Package,
    description: 'Heavy-duty PP woven sacks engineered for feed, grain, fertilizer, and chemical storage with high tensile strength.',
    badge: '3600 Tons/Yr',
    image: '/Polypropylene Bags.png',
    specs: [
      { label: 'GSM Range', value: '55 - 120 GSM' },
      { label: 'Protection', value: 'UV & Moisture Proof' },
      { label: 'Printing', value: 'Flexo & BOPP' },
    ],
  },
  {
    id: 4,
    category: 'energy',
    title: 'Commercial Solar PV Systems',
    entity: 'Star Enterprises',
    icon: Sun,
    description: 'Turnkey industrial and agricultural solar energy solutions, net-metering setup, and high-efficiency inverter integrations.',
    badge: 'Eco Friendly',
    image: '/Solar.png',
    specs: [
      { label: 'Panels', value: 'Tier-1 Solar' },
      { label: 'Net-Metering', value: 'Support Included' },
      { label: 'Capacity', value: '50 MW Industrial' },
    ],
  },
];

export default function ProductCatalogue() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const handleWhatsAppInquiry = (productName: string) => {
    const phoneNumber = '923006333064'; 
    const textMessage = encodeURIComponent(`Hello BM Farms Team, I am interested in getting details and a price quote for "${productName}". Please guide me.`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${textMessage}`;
    window.location.href = whatsappUrl;
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-emerald-300 uppercase tracking-widest bg-emerald-950/60 border border-emerald-500/30 backdrop-blur-md px-4 py-1.5 rounded-full shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> Commercial Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
            Commercial Product Catalogue
          </h2>
          <p className="text-emerald-100/80 text-sm sm:text-base mt-3 leading-relaxed font-medium">
            High-grade feed formulations, industrial packaging solutions, and clean energy setups manufactured for maximum efficiency.
          </p>

          {/* Glassmorphic Category Filter Tabs */}
          <div className="inline-flex flex-wrap justify-center gap-2 mt-8 bg-white/10 backdrop-blur-xl p-2 rounded-2xl border border-white/20 shadow-2xl">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all z-10 ${
                  activeCategory === cat.id
                    ? 'text-white'
                    : 'text-emerald-100/70 hover:text-white'
                }`}
              >
                {activeCategory === cat.id && (
                  <motion.div
                    layoutId="activeCategoryPill"
                    className="absolute inset-0 bg-emerald-500/30 border border-emerald-400/50 backdrop-blur-md rounded-xl -z-10 shadow-lg"
                    transition={{ type: 'spring', duration: 0.5, bounce: 0.15 }}
                  />
                )}
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid - Pure Frosted Glassmorphism Style */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:shadow-[0_8px_32px_0_rgba(16,185,129,0.2)] hover:border-white/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group relative"
                >
                  {/* Frosted Glass Water Bubble Glow Effects */}
                  <div className="absolute -top-24 -left-24 w-48 h-48 bg-emerald-400/20 rounded-full blur-2xl pointer-events-none group-hover:bg-emerald-400/30 transition-all duration-500" />
                  <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-teal-400/15 rounded-full blur-2xl pointer-events-none" />

                  <div>
                    {/* Top Product Image Banner */}
                    <div className="relative h-56 w-full overflow-hidden border-b border-white/10">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                      {/* Top Badge (Glass Pill) */}
                      <span className="absolute top-4 right-4 text-[10px] font-extrabold px-3.5 py-1.5 rounded-full bg-emerald-950/80 backdrop-blur-md text-emerald-300 border border-emerald-500/40 shadow-lg uppercase tracking-wider">
                        {item.badge}
                      </span>

                      {/* Floating Entity Icon Badge */}
                      <div className="absolute bottom-4 left-4 p-2 px-3 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 text-white flex items-center gap-2">
                        <Icon className="w-4 h-4 text-emerald-400" />
                        <span className="text-[11px] font-bold tracking-wide uppercase text-slate-100">
                          {item.entity}
                        </span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6">
                      <h3 className="text-xl font-extrabold text-white leading-snug group-hover:text-emerald-300 transition-colors">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                        {item.description}
                      </p>

                      {/* Specifications Badges Grid (Frosted Glass Chips) */}
                      <div className="mt-6 pt-5 border-t border-white/10">
                        <span className="text-[10px] font-extrabold text-emerald-400 uppercase tracking-wider block mb-3">
                          Key Specifications
                        </span>

                        <div className="grid grid-cols-3 gap-2">
                          {item.specs.map((spec, idx) => (
                            <div 
                              key={idx}
                              className="bg-white/5 backdrop-blur-md border border-white/10 p-2.5 rounded-2xl text-center shadow-inner hover:bg-white/10 transition-colors"
                            >
                              <span className="text-[10px] text-slate-400 font-medium block truncate">
                                {spec.label}
                              </span>
                              <span className="text-xs font-bold text-white mt-0.5 block truncate">
                                {spec.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons Container */}
                  <div className="p-6 pt-0 grid grid-cols-1 sm:grid-cols-2 gap-3 z-10">
                    <button
                      onClick={() => alert(`Technical specs worksheet for ${item.title} requested.`)}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white text-xs font-bold transition-all shadow-md"
                    >
                      <FileText className="w-4 h-4 text-emerald-400" /> Specs Sheet
                    </button>

                    <button
                      onClick={() => handleWhatsAppInquiry(item.title)}
                      className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-all shadow-lg hover:shadow-emerald-900/50 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Inquire via WhatsApp</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-80" />
                    </button>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}