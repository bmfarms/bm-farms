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
    <section className="py-20 bg-gray-50/70 border-t border-gray-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-3.5 py-1 bg-emerald-100 text-emerald-900 text-xs font-bold rounded-full uppercase tracking-wider mb-3">
            Why Choose Star & Unique Group
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl tracking-tight">
            Built on Quality, Innovation & Trust
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
            Leading Pakistan's agricultural transformation with sustainable industrial practices, high-grade formulations, and uncompromised standard operating procedures.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white border border-gray-200/80 p-8 rounded-3xl shadow-sm hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-emerald-50 border border-emerald-100 rounded-2xl">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-extrabold text-emerald-800 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 leading-snug group-hover:text-emerald-900 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-gray-500 mt-1">
                  {item.subtitle}
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-emerald-800">
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