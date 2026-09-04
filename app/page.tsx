import FadeIn from '@/components/FadeIn';
import DivisionTabs from '@/components/DivisionTabs';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import ProductCatalogue from '@/components/ProductCatalogue';
import DivisionsOverview from '@/components/DivisionsOverview';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import Testimonials from '@/components/Testimonials';
export default function Home() {
return (
<main className="min-h-screen bg-gray-50 overflow-x-hidden">

{/* 1. Hero Section - Introduction */}
<div className="w-full">
  <Hero />
</div>

{/* 2. Key Group Achievements / Stats */}
<FadeIn delay={0.1}>
<Stats />
</FadeIn>

{/* 3. Finished Products & Buying Options */}
<FadeIn delay={0.2}>
<ProductCatalogue />
 </FadeIn>

{/* 4. Industrial Capacities & Operational Divisions */}
<FadeIn delay={0.3}>
 <section className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50/60 to-emerald-100/50 border-t border-b border-emerald-100/80 relative overflow-hidden">
 {/* Decorative Soft Background Glows */}
 <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none" />
 <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal-200/40 rounded-full blur-3xl pointer-events-none" />

 <div className="text-center mb-8 max-w-3xl mx-auto px-4 relative z-10">
 <span className="text-xs font-extrabold text-emerald-900 uppercase tracking-widest bg-white/60 border border-white/80 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-sm">
 Manufacturing & Infrastructure
 </span>
 <h2 className="text-3xl font-extrabold text-gray-900 mt-3 sm:text-4xl">
 Industrial Capacities & Capabilities
 </h2>
 <p className="text-gray-700 mt-2 text-sm sm:text-base font-medium">
 Detailed breakdown of our operational divisions, production scale, and infrastructure.
 </p>
</div>

 <div className="relative z-10">
 <DivisionTabs />
 </div>
</section>
</FadeIn>

// ... inside Home component
<FadeIn delay={0.5}>
  <Testimonials />
</FadeIn>

 {/* 5. Group Standards & Quality Assurance */}
 <FadeIn delay={0.4}>
 <DivisionsOverview />
 </FadeIn>



 {/* Persistent Floating Widget */}
 <WhatsAppWidget />
</main>
 );
}