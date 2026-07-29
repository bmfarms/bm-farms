'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Fish, Bird, Package, Sun, MessageSquare, CheckCircle2, ArrowRight } from 'lucide-react';

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
    specs: ['Crude Protein: 28% - 34%', 'Pellet Size: 1.5mm - 6mm', 'Packaging: 20kg / 40kg Bags'],
    badge: 'Best Seller',
    borderColor: 'border-blue-200 hover:border-blue-500',
  },
  {
    id: 2,
    category: 'feed',
    title: 'Unique Super Broiler Feed',
    entity: 'Unique Super Feed Pvt Ltd',
    icon: Bird,
    description: 'Scientifically formulated starter, grower, and finisher rations for controlled environment broiler farming.',
    specs: ['Optimized FCR Ratio', 'Enriched with Vitamins & Minerals', 'Aflatoxin Tested Clean Feed'],
    badge: 'High Yield',
    borderColor: 'border-amber-200 hover:border-amber-500',
  },
  {
    id: 3,
    category: 'packaging',
    title: 'Star Polypropylene (PP) Woven Bags',
    entity: 'Star Polypropylene Pvt Ltd',
    icon: Package,
    description: 'Heavy-duty PP woven sacks engineered for feed, grain, fertilizer, and chemical storage with high tensile strength.',
    specs: ['GSM Range: 55 - 120 GSM', 'UV Stabilized & Moisture Proof', 'Custom Flexo & BOPP Printing'],
    badge: '3600 Tons/Yr',
    borderColor: 'border-purple-200 hover:border-purple-500',
  },
  {
    id: 4,
    category: 'energy',
    title: 'Commercial Solar PV Systems',
    entity: 'Star Enterprises',
    icon: Sun,
    description: 'Turnkey industrial and agricultural solar energy solutions, net-metering setup, and high-efficiency inverter integrations.',
    specs: ['Tier-1 Solar Panels', 'Net-Metering Support Included', '50 MW Industrial Capacity'],
    badge: 'Eco Friendly',
    borderColor: 'border-emerald-200 hover:border-emerald-500',
  },
];

export default function ProductCatalogue() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  // HYBRID MOBILE & DESKTOP WHATSAPP LINK HANDLER
  const handleWhatsAppInquiry = (productName: string) => {
    const phoneNumber = '923006333064';
    const textMessage = encodeURIComponent(`Hello BM Farms Team, I am interested in getting details and a price quote for "${productName}". Please guide me.`);
    
    // Check if user is on Mobile Device (Android / iOS)
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
      // Mobile Native App Protocol Scheme
      window.location.href = `whatsapp://send?phone=${phoneNumber}&text=${textMessage}`;
    } else {
      // Desktop Browser Universal API
      window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${textMessage}`, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="py-20 bg-gray-50 border-b border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold text-emerald-800 uppercase tracking-widest bg-emerald-100/80 px-3.5 py-1.5 rounded-full border border-emerald-200">
            Commercial Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 tracking-tight">
            Commercial Product Catalogue
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-3 leading-relaxed">
            High-grade feed formulations, industrial packaging solutions, and clean energy setups manufactured for maximum efficiency.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-emerald-900 text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                  className={`bg-white rounded-2xl p-6 sm:p-8 border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${item.borderColor}`}
                >
                  <div>
                    {/* Top Row: Icon + Badge */}
                    <div className="flex justify-between items-start gap-4 mb-5">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-emerald-50 text-emerald-800 rounded-xl border border-emerald-100">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-[11px] font-bold text-emerald-700 tracking-wider uppercase block">
                            {item.entity}
                          </span>
                          <h3 className="text-xl font-bold text-gray-900 leading-snug">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-wider bg-gray-900 text-white px-2.5 py-1 rounded-md shrink-0">
                        {item.badge}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Specifications List */}
                    <div className="bg-gray-50/80 p-4 rounded-xl border border-gray-100 mb-6 space-y-2">
                      <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                        Key Specifications:
                      </span>
                      {item.specs.map((spec, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-gray-700 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* WhatsApp Action Button */}
                  <button
                    onClick={() => handleWhatsAppInquiry(item.title)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white text-xs sm:text-sm font-bold py-3 px-4 rounded-xl transition-colors shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Inquire via WhatsApp</span>
                    <ArrowRight className="w-4 h-4 opacity-70" />
                  </button>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}