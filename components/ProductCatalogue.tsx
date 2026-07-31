'use client';

import { useState } from 'react';
import Image from 'next/image';
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
    badgeColor: 'bg-blue-100 text-blue-900 border-blue-200',
    borderColor: 'border-blue-200 hover:border-blue-500',
    image: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?q=80&w=800&auto=format&fit=crop',
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
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-200',
    borderColor: 'border-amber-200 hover:border-amber-500',
    image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=800&auto=format&fit=crop',
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
    badgeColor: 'bg-purple-100 text-purple-900 border-purple-200',
    borderColor: 'border-purple-200 hover:border-purple-500',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop',
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
    badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-200',
    borderColor: 'border-emerald-200 hover:border-emerald-500',
    image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=800&auto=format&fit=crop',
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

  // UNIVERSAL RELIABLE WHATSAPP HANDLER
  const handleWhatsAppInquiry = (productName: string) => {
    // International format without '+' or spaces
    const phoneNumber = '923006333064'; 
    const textMessage = encodeURIComponent(`Hello BM Farms Team, I am interested in getting details and a price quote for "${productName}". Please guide me.`);
    
    // Standard wa.me universal URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${textMessage}`;

    // Direct location assignment avoids browser popup blockers on mobile
    window.location.href = whatsappUrl;
  };

  return (
    <section className="py-20 bg-gray-50 border-b border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-emerald-800 uppercase tracking-widest bg-emerald-100/80 px-3.5 py-1.5 rounded-full border border-emerald-200">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" /> Commercial Offerings
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
                  className={`bg-white rounded-3xl border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group ${item.borderColor}`}
                >
                  <div>
                    {/* Top Product Image Banner */}
<div className="relative h-48 w-full overflow-hidden bg-gray-100">
  <img
    src={item.image}
    alt={item.title}
    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

  {/* Top Badge */}
  <span className={`absolute top-4 right-4 text-[10px] font-extrabold px-3 py-1 rounded-full border shadow-sm ${item.badgeColor}`}>
    {item.badge}
  </span>

  {/* Floating Entity Icon Badge */}
  <div className="absolute bottom-4 left-4 p-2 bg-white/95 backdrop-blur-md rounded-2xl shadow-md border border-white/60 text-emerald-800 flex items-center gap-2">
    <Icon className="w-4 h-4" />
    <span className="text-[11px] font-bold text-gray-800 tracking-wide uppercase">
      {item.entity}
    </span>
  </div>
</div>

                    {/* Card Body */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 leading-snug group-hover:text-emerald-900 transition-colors">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Specifications Badges Grid */}
                      <div className="mt-6 pt-5 border-t border-gray-100">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-3">
                          Key Specifications
                        </span>

                        <div className="grid grid-cols-3 gap-2">
                          {item.specs.map((spec, idx) => (
                            <div 
                              key={idx}
                              className="bg-emerald-50/60 border border-emerald-100/80 p-2.5 rounded-xl text-center"
                            >
                              <span className="text-[10px] text-emerald-700 font-semibold block truncate">
                                {spec.label}
                              </span>
                              <span className="text-xs font-extrabold text-emerald-950 mt-0.5 block truncate">
                                {spec.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons Container */}
                  <div className="p-6 pt-0 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      onClick={() => alert(`Technical specs worksheet for ${item.title} requested.`)}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-gray-300 text-gray-700 text-xs font-bold hover:bg-gray-50 transition-colors"
                    >
                      <FileText className="w-4 h-4 text-gray-500" /> Specs Sheet
                    </button>

                    <button
                      onClick={() => handleWhatsAppInquiry(item.title)}
                      className="w-full inline-flex items-center justify-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-colors shadow-sm"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Inquire via WhatsApp</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-70" />
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