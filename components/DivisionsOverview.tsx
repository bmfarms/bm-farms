'use client';

import Link from 'next/link';
import { ShieldCheck, Leaf, Award, Globe, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const pillars = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-emerald-700" />,
    title: "Uncompromised Quality Control",
    subtitle: "In-House Lab Testing & NIR Precision",
    description: "Har production lot ko strict lab testing aur aflatoxin verification se guzara jata hai taake international safety standards meet ho sakein.",
    tag: "ISO & Lab Certified"
  },
  {
    icon: <Leaf className="w-8 h-8 text-emerald-700" />,
    title: "Sustainable Agricultural Ecosystem",
    subtitle: "Eco-Friendly Operations",
    description: "Zero-waste initiatives, solar power integration, aur eco-friendly packaging se carbon footprint ko significantly reduce kiya gaya hai.",
    tag: "Green Technology"
  },
  {
    icon: <Award className="w-8 h-8 text-emerald-700" />,
    title: "High Digestibility & Optimal FCR",
    subtitle: "Proven Formulations",
    description: "Scientific formulation ki madad se Maximum Feed Conversion Ratio (FCR) achieve hota hai jo farmers ki profitability barhata hai.",
    tag: "Farmer First"
  },
  {
    icon: <Globe className="w-8 h-8 text-emerald-700" />,
    title: "Nationwide Supply Network",
    subtitle: "Seamless Logistics & Support",
    description: "Pakistan bher mein energetic dealer distribution channel aur direct technical consulting, guaranteed delivery timelines ensure karti hai.",
    tag: "National Reach"
  }
];

export default function DivisionsOverview() {
  return (
    <section className="py-20 bg-emerald-950 text-white overflow-hidden relative">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-3 py-1 bg-emerald-800/80 text-emerald-200 text-xs font-bold rounded-full uppercase tracking-wider mb-3 border border-emerald-700">
            Why Choose Star & Unique Group
          </span>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
            Built on Quality, Innovation & Trust
          </h2>
          <p className="mt-4 text-base text-emerald-100/80 leading-relaxed">
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
              whileHover={{ y: -6 }}
              className="bg-emerald-900/40 border border-emerald-800/60 p-8 rounded-3xl backdrop-blur-md hover:border-emerald-500/50 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="p-3.5 bg-emerald-800/50 border border-emerald-700/60 w-fit rounded-2xl mb-6">
                  {item.icon}
                </div>
                <span className="inline-block text-[11px] font-extrabold text-emerald-300 uppercase tracking-wider bg-emerald-800/80 px-2.5 py-1 rounded-md border border-emerald-700/80 mb-3">
                  {item.tag}
                </span>
                <h3 className="text-2xl font-extrabold text-white leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-emerald-200/70 mt-1">
                  {item.subtitle}
                </p>
                <p className="mt-4 text-emerald-100/70 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-emerald-800/60 flex items-center gap-2 text-xs font-bold text-emerald-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Strict Quality Standard Guaranteed</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}