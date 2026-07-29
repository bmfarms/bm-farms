'use client';

import Link from 'next/link';
import { Wheat, Fish, Package, Sun, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const divisions = [
  {
    icon: <Fish className="w-8 h-8 text-emerald-700" />,
    title: "Commercial Farming Division",
    subtitle: "Fish, Broiler & Layer Production",
    description: "Operates 18 modern environment-controlled poultry houses with 500,000 broiler capacity, 200,000 layers, and 1,000 acres of sustainable fish farming.",
    link: "/divisions#farming"
  },
  {
    icon: <Wheat className="w-8 h-8 text-emerald-700" />,
    title: "Feed Production Division",
    subtitle: "Star Floating Feed & US Feeds",
    description: "Two advanced feed plants producing 120,000 bags/month of high-nutrition floating fish feed, shrimp feed, broiler, layer, and livestock feeds.",
    link: "/divisions#feed"
  },
  {
    icon: <Package className="w-8 h-8 text-emerald-700" />,
    title: "Polypropylene Bags Division",
    subtitle: "Star Polypropylene Pvt Ltd",
    description: "3,600 tons annual capacity producing durable, UV-protected, eco-friendly industrial-grade woven PP bags for agricultural and industrial packaging.",
    link: "/divisions#packaging"
  },
  {
    icon: <Sun className="w-8 h-8 text-emerald-700" />,
    title: "Energy Division",
    subtitle: "Star Enterprises - Clean Energy",
    description: "50 MW solar power project providing cost-efficient clean power, reducing carbon emissions by 25% for sustainable industrial operations.",
    link: "/divisions#energy"
  }
];

export default function DivisionsOverview() {
  return (
    <section className="py-20 bg-gray-50/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-3 me-2 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full uppercase tracking-wider mb-3">
            Core Expertise
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl tracking-tight">
            Core Business Divisions
          </h2>
          <p className="mt-4 text-base text-gray-600 leading-relaxed">
            A fully integrated agribusiness model driving efficiency, consistent quality, and national development across Pakistan.
          </p>
        </motion.div>

        {/* Divisions Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {divisions.map((division, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-md hover:shadow-xl hover:border-emerald-200 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="p-3.5 bg-emerald-50 border border-emerald-100 w-fit rounded-2xl mb-6">
                  {division.icon}
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 leading-snug">
                  {division.title}
                </h3>
                <span className="inline-block mt-1.5 text-xs font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                  {division.subtitle}
                </span>
                <p className="mt-4 text-gray-600 leading-relaxed text-sm">
                  {division.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <Link 
                  href={division.link}
                  className="inline-flex items-center gap-2 text-emerald-800 font-extrabold hover:text-emerald-600 transition-colors text-sm group-hover:translate-x-1 duration-200"
                >
                  <span>Learn More</span>
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}