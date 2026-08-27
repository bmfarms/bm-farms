'use client';

import { ShieldCheck, Leaf, Award, Globe, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const pillars = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-emerald-800" />,
    title: "Uncompromised Quality Control",
    subtitle: "In-House Lab Testing & NIR Precision",
    description: "Har production lot ko strict lab testing aur aflatoxin verification se guzara jata hai taake international safety standards meet ho sakein.",
    tag: "ISO & Lab Certified"
  },
  {
    icon: <Leaf className="w-6 h-6 text-emerald-800" />,
    title: "Sustainable Agricultural Ecosystem",
    subtitle: "Eco-Friendly Operations",
    description: "Zero-waste initiatives, solar power integration, aur eco-friendly packaging se carbon footprint ko significantly reduce kiya gaya hai.",
    tag: "Green Technology"
  },
  {
    icon: <Award className="w-6 h-6 text-emerald-800" />,
    title: "High Digestibility & Optimal FCR",
    subtitle: "Proven Formulations",
    description: "Scientific formulation ki madad se Maximum Feed Conversion Ratio (FCR) achieve hota hai jo farmers ki profitability barhata hai.",
    tag: "Farmer First"
  },
  {
    icon: <Globe className="w-6 h-6 text-emerald-800" />,
    title: "Nationwide Supply Network",
    subtitle: "Seamless Logistics & Support",
    description: "Pakistan bher mein energetic dealer distribution channel aur direct technical consulting, guaranteed delivery timelines ensure karti hai.",
    tag: "National Reach"
  }
];

export default function DivisionsOverview() {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50/60 via-teal-50/40 to-emerald-100/40 border-t border-emerald-100/80 relative overflow-hidden">
      {/* Decorative Glass Background Glowing Orbs */}
      <div className="absolute top-1/3 -left-24 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-24 w-96 h-96 bg-teal-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-3.5 py-1 bg-white/60 border border-white/80 backdrop-blur-md text-emerald-900 text-xs font-extrabold rounded-full uppercase tracking-wider mb-3 shadow-sm">
            Why Choose Star & Unique Group
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl tracking-tight">
            Built on Quality, Innovation & Trust
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-700 font-medium leading-relaxed">
            Leading Pakistan's agricultural transformation with sustainable industrial practices, high-grade formulations, and uncompromised standard operating procedures.
          </p>
        </motion.div>

        {/* Pillars Grid - Glassmorphism Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white/40 backdrop-blur-xl border border-white/80 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Glass Reflection Lens */}
              <div className="absolute -top-16 -left-16 w-36 h-36 bg-white/30 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-white/70 border border-white/90 rounded-2xl shadow-sm backdrop-blur-md">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-extrabold text-emerald-900 uppercase tracking-wider bg-white/60 border border-white/80 backdrop-blur-md px-3 py-1 rounded-full shadow-sm">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-gray-900 leading-snug group-hover:text-emerald-950 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-bold text-emerald-800 mt-1">
                  {item.subtitle}
                </p>
                <p className="mt-4 text-gray-700 font-medium leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-white/60 flex items-center gap-2 text-xs font-bold text-emerald-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>Strict Quality Standard Guaranteed</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
