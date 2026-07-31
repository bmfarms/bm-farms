'use client';

import { ShieldCheck, Leaf, Award, Globe, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const pillars = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-emerald-700" />,
    title: "Uncompromised Quality Control",
    subtitle: "In-House Lab Testing & NIR Precision",
    description: "Har production lot ko strict lab testing aur aflatoxin verification se guzara jata hai taake international safety standards meet ho sakein.",
    tag: "ISO & Lab Certified"
  },
  {
    icon: <Leaf className="w-6 h-6 text-emerald-700" />,
    title: "Sustainable Agricultural Ecosystem",
    subtitle: "Eco-Friendly Operations",
    description: "Zero-waste initiatives, solar power integration, aur eco-friendly packaging se carbon footprint ko significantly reduce kiya gaya hai.",
    tag: "Green Technology"
  },
  {
    icon: <Award className="w-6 h-6 text-emerald-700" />,
    title: "High Digestibility & Optimal FCR",
    subtitle: "Proven Formulations",
    description: "Scientific formulation ki madad se Maximum Feed Conversion Ratio (FCR) achieve hota hai jo farmers ki profitability barhata hai.",
    tag: "Farmer First"
  },
  {
    icon: <Globe className="w-6 h-6 text-emerald-700" />,
    title: "Nationwide Supply Network",
    subtitle: "Seamless Logistics & Support",
    description: "Pakistan bher mein energetic dealer distribution channel aur direct technical consulting, guaranteed delivery timelines ensure karti hai.",
    tag: "National Reach"
  }
];

export default function DivisionsOverview() {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle Gradient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-950/40 via-slate-900 to-slate-900 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-3.5 py-1.5 bg-emerald-500/10 text-emerald-400 text-xs font-bold rounded-full uppercase tracking-widest border border-emerald-500/20 mb-3">
            Why Choose Star & Unique Group
          </span>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
            Built on Quality, Innovation & Trust
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed">
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
              className="bg-slate-800/60 border border-slate-700/60 p-8 rounded-3xl backdrop-blur-md hover:border-emerald-500/40 transition-all flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-emerald-950/80 border border-emerald-800/60 rounded-2xl">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-extrabold text-emerald-400 uppercase tracking-widest bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800/80">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white leading-snug group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-slate-400 mt-1">
                  {item.subtitle}
                </p>
                <p className="mt-4 text-slate-300 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-700/60 flex items-center gap-2 text-xs font-semibold text-emerald-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Strict Quality Standard Guaranteed</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}