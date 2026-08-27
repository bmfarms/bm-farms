'use client';

import { ShieldCheck, Leaf, Award, Globe, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const pillars = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
    title: "Uncompromised Quality Control",
    subtitle: "In-House Lab Testing & NIR Precision",
    description: "Har production lot ko strict lab testing aur aflatoxin verification se guzara jata hai taake international safety standards meet ho sakein.",
    tag: "ISO & Lab Certified"
  },
  {
    icon: <Leaf className="w-6 h-6 text-emerald-400" />,
    title: "Sustainable Agricultural Ecosystem",
    subtitle: "Eco-Friendly Operations",
    description: "Zero-waste initiatives, solar power integration, aur eco-friendly packaging se carbon footprint ko significantly reduce kiya gaya hai.",
    tag: "Green Technology"
  },
  {
    icon: <Award className="w-6 h-6 text-emerald-400" />,
    title: "High Digestibility & Optimal FCR",
    subtitle: "Proven Formulations",
    description: "Scientific formulation ki madad se Maximum Feed Conversion Ratio (FCR) achieve hota hai jo farmers ki profitability barhata hai.",
    tag: "Farmer First"
  },
  {
    icon: <Globe className="w-6 h-6 text-emerald-400" />,
    title: "Nationwide Supply Network",
    subtitle: "Seamless Logistics & Support",
    description: "Pakistan bher mein energetic dealer distribution channel aur direct technical consulting, guaranteed delivery timelines ensure karti hai.",
    tag: "National Reach"
  }
];

export default function DivisionsOverview() {
  return (
    <section className="py-20 bg-slate-950/80 relative overflow-hidden">
      {/* Decorative Glass Background Glowing Orbs */}
      <div className="absolute top-1/3 -left-24 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -right-24 w-96 h-96 bg-teal-500/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 backdrop-blur-xl text-emerald-300 text-xs font-extrabold rounded-full uppercase tracking-wider mb-3 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
            Why Choose BM Farms & Services
          </span>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl tracking-tight drop-shadow-md">
            Built on Quality, Innovation & Trust
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 font-medium leading-relaxed">
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
              className="bg-white/10 backdrop-blur-2xl border border-white/20 p-8 rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:border-white/40 hover:bg-white/15 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Glass Reflection Lens */}
              <div className="absolute -top-16 -left-16 w-36 h-36 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-emerald-500/20 border border-emerald-400/30 rounded-2xl shadow-sm backdrop-blur-md">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-extrabold text-emerald-300 uppercase tracking-wider bg-emerald-950/60 border border-emerald-500/30 backdrop-blur-md px-3 py-1 rounded-full shadow-sm">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-white leading-snug group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-bold text-emerald-400 mt-1">
                  {item.subtitle}
                </p>
                <p className="mt-4 text-slate-300 font-normal leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-white/10 flex items-center gap-2 text-xs font-bold text-emerald-300">
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