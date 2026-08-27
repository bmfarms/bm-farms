('use client');



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

    <section className="py-20 bg-gradient-to-br from-emerald-50/60 via-teal-50/40 to-emerald-100/40 border-b border-emerald-100/80 relative overflow-hidden">

      {/* Decorative Glass Background Orbs */}

      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl pointer-events-none" />



      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">

       

        {/* Section Header */}

        <div className="text-center max-w-3xl mx-auto mb-12">

          <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-emerald-900 uppercase tracking-widest bg-white/60 border border-white/80 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-sm">

            <Sparkles className="w-3.5 h-3.5 text-emerald-700" /> Commercial Offerings

          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 tracking-tight">

            Commercial Product Catalogue

          </h2>

          <p className="text-gray-700 text-sm sm:text-base mt-3 leading-relaxed font-medium">

            High-grade feed formulations, industrial packaging solutions, and clean energy setups manufactured for maximum efficiency.

          </p>



          {/* Glassmorphic Category Filter Tabs */}

          <div className="inline-flex flex-wrap justify-center gap-2 mt-8 bg-white/40 backdrop-blur-md p-2 rounded-2xl border border-white/70 shadow-lg">

            {categories.map((cat) => (

              <button

                key={cat.id}

                onClick={() => setActiveCategory(cat.id)}

                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all z-10 ${

                  activeCategory === cat.id

                    ? 'text-white'

                    : 'text-emerald-950 hover:text-emerald-700'

                }`}

              >

                {activeCategory === cat.id && (

                  <motion.div

                    layoutId="activeCategoryPill"

                    className="absolute inset-0 bg-emerald-900 rounded-xl -z-10 shadow-md"

                    transition={{ type: 'spring', duration: 0.5, bounce: 0.15 }}

                  />

                )}

                {cat.label}

              </button>

            ))}

          </div>

        </div>



        {/* Product Cards Grid - Glassmorphism Style */}

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

                  className="bg-white/40 backdrop-blur-xl border border-white/80 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden group relative"

                >

                  {/* Glass Reflection Highlight */}

                  <div className="absolute -top-20 -left-20 w-40 h-40 bg-white/30 rounded-full blur-2xl pointer-events-none" />



                  <div>

                    {/* Top Product Image Banner */}

                    <div className="relative h-52 w-full overflow-hidden bg-white/50 border-b border-white/60">

                      <img

                        src={item.image}

                        alt={item.title}

                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"

                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />



                      {/* Top Badge (Glass Pill) */}

                      <span className="absolute top-4 right-4 text-[10px] font-extrabold px-3 py-1 rounded-full bg-emerald-900/90 backdrop-blur-md text-white border border-white/30 shadow-md uppercase tracking-wider">

                        {item.badge}

                      </span>



                      {/* Floating Entity Icon Badge */}

                      <div className="absolute bottom-4 left-4 p-2 px-3 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-white/80 text-emerald-950 flex items-center gap-2">

                        <Icon className="w-4 h-4 text-emerald-800" />

                        <span className="text-[11px] font-bold tracking-wide uppercase">

                          {item.entity}

                        </span>

                      </div>

                    </div>



                    {/* Card Body */}

                    <div className="p-6">

                      <h3 className="text-xl font-extrabold text-gray-900 leading-snug group-hover:text-emerald-950 transition-colors">

                        {item.title}

                      </h3>



                      <p className="mt-2 text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">

                        {item.description}

                      </p>



                      {/* Specifications Badges Grid (Frosted Glass Chips) */}

                      <div className="mt-6 pt-5 border-t border-white/60">

                        <span className="text-[10px] font-extrabold text-emerald-900 uppercase tracking-wider block mb-3">

                          Key Specifications

                        </span>



                        <div className="grid grid-cols-3 gap-2">

                          {item.specs.map((spec, idx) => (

                            <div

                              key={idx}

                              className="bg-white/50 backdrop-blur-md border border-white/80 p-2.5 rounded-2xl text-center shadow-sm"

                            >

                              <span className="text-[10px] text-emerald-800 font-bold block truncate">

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

                  <div className="p-6 pt-0 grid grid-cols-1 sm:grid-cols-2 gap-3 z-10">

                    <button

                      onClick={() => alert(`Technical specs worksheet for ${item.title} requested.`)}

                      className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-white/80 bg-white/50 hover:bg-white backdrop-blur-md text-gray-800 text-xs font-bold transition-all shadow-sm hover:shadow"

                    >

                      <FileText className="w-4 h-4 text-emerald-800" /> Specs Sheet

                    </button>



                    <button

                      onClick={() => handleWhatsAppInquiry(item.title)}

                      className="w-full inline-flex items-center justify-center gap-2 bg-emerald-900 hover:bg-emerald-950 text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-all shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"

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