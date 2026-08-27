'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, MessageCircle } from 'lucide-react';

const categories = [
  { id: 'all', label: 'All Products' },
  { id: 'feed', label: 'Aqua & Broiler Feed' },
  { id: 'packaging', label: 'Industrial Packaging' },
  { id: 'energy', label: 'Solar Energy' },
];

const products = [
  {
    id: 1,
    title: 'Star Floating Fish Feed',
    category: 'feed',
    image: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?q=80&w=800&auto=format&fit=crop',
    description: 'High-protein, highly digestible floating feed engineered for maximum growth rate (FCR) in Tilapia, Pangasius, and Carp farming.',
    badge: 'Best Seller',
    specs: [
      { label: 'Crude Protein', value: '28% - 32%' },
      { label: 'Pellet Size', value: '2mm - 6mm' },
      { label: 'Packaging', value: '40kg PP Bags' },
    ],
  },
  {
    id: 2,
    title: 'Unique Super Broiler Feed',
    category: 'feed',
    image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=800&auto=format&fit=crop',
    description: 'Scientifically balanced starter, grower, and finisher rations for controlled environment poultry broiler farming.',
    badge: 'High FCR',
    specs: [
      { label: 'Crude Protein', value: '20% - 23%' },
      { label: 'Form', value: 'Crumble / Pellet' },
      { label: 'Packaging', value: '50kg Bags' },
    ],
  },
  {
    id: 3,
    title: 'Star Polypropylene (PP) Woven Bags',
    category: 'packaging',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop',
    description: 'Heavy-duty PP woven bags engineered for feed, grain, fertilizer, and chemical storage with high tensile strength.',
    badge: 'Heavy Duty',
    specs: [
      { label: 'Capacity', value: '10kg - 100kg' },
      { label: 'UV Protection', value: 'Custom Treated' },
      { label: 'Printing', value: 'BOPP / Flexo' },
    ],
  },
  {
    id: 4,
    title: 'Commercial Solar PV Systems',
    category: 'energy',
    image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=800&auto=format&fit=crop',
    description: 'Turnkey industrial and agricultural solar energy solutions, grid-tied net-metering, and high-efficiency inverter installations.',
    badge: 'Clean Energy',
    specs: [
      { label: 'Panel Grade', value: 'Tier-1 High Efficiency' },
      { label: 'Warranty', value: '25 Years Performance' },
      { label: 'Integration', value: 'Net-Metering' },
    ],
  },
];

export default function ProductCatalogue() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <section className="py-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-extrabold text-emerald-900 uppercase tracking-widest bg-emerald-100/90 border border-emerald-300/80 px-4 py-1.5 rounded-full shadow-sm">
            Commercial Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Commercial Product Catalogue
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 font-medium">
            High-grade feed formulations, industrial packaging solutions, and clean energy setups engineered for maximum efficiency.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-sm border ${
                activeCategory === cat.id
                  ? 'bg-emerald-800 text-white border-emerald-800 shadow-md'
                  : 'bg-white/80 text-slate-700 border-slate-300 hover:bg-white hover:text-slate-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={product.id}
                className="bg-white/60 backdrop-blur-2xl border border-white/80 rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] hover:border-emerald-400 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Image Header */}
                  <div className="relative h-56 w-full overflow-hidden bg-slate-200">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-emerald-800 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
                      {product.badge}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 font-medium leading-relaxed">
                      {product.description}
                    </p>

                    {/* Specifications */}
                    <div className="grid grid-cols-3 gap-2 mt-6 pt-4 border-t border-slate-200/60">
                      {product.specs.map((spec, i) => (
                        <div key={i} className="bg-white/80 border border-slate-200/80 p-2.5 rounded-xl text-center shadow-xs">
                          <span className="text-[10px] text-slate-500 font-bold uppercase block">
                            {spec.label}
                          </span>
                          <span className="text-xs font-bold text-slate-900 mt-0.5 block">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="p-6 pt-0 flex items-center gap-3">
                  <Link
                    href="/products"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 bg-slate-200/80 hover:bg-slate-300/80 text-slate-800 text-xs font-bold py-3 rounded-xl transition-all border border-slate-300/60"
                  >
                    <span>Specs Sheet</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>

                  <a
                    href="https://wa.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold py-3 rounded-xl transition-all shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Inquire via WhatsApp</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}