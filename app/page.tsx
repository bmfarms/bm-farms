import FadeIn from '@/components/FadeIn';
import DivisionTabs from '@/components/DivisionTabs';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import ProductCatalogue from '@/components/ProductCatalogue';
import DivisionsOverview from '@/components/DivisionsOverview';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-950 via-slate-900 to-emerald-900 text-slate-100 overflow-x-hidden relative selection:bg-emerald-500 selection:text-white">
      
      {/* Dynamic Ambient Background Glows for Glassmorphism Effect */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-teal-500/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-5%] left-[20%] w-[500px] h-[500px] bg-emerald-600/20 rounded-full blur-[130px]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        
        {/* 1. Hero Section - Introduction */}
        <Hero />

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
          <section className="py-20 bg-white/5 backdrop-blur-md border-t border-b border-white/10 relative overflow-hidden my-8">
            <div className="text-center mb-8 max-w-3xl mx-auto px-4 relative z-10">
              <span className="text-xs font-extrabold text-emerald-300 uppercase tracking-widest bg-emerald-950/60 border border-emerald-500/30 backdrop-blur-md px-4 py-1.5 rounded-full shadow-lg">
                Manufacturing & Infrastructure
              </span>
              <h2 className="text-3xl font-extrabold text-white mt-4 sm:text-4xl tracking-tight">
                Industrial Capacities & Capabilities
              </h2>
              <p className="text-emerald-100/80 mt-2 text-sm sm:text-base font-medium">
                Detailed breakdown of our operational divisions, production scale, and infrastructure.
              </p>
            </div>

            <div className="relative z-10">
              <DivisionTabs />
            </div>
          </section>
        </FadeIn>

        {/* 5. Group Standards & Quality Assurance */}
        <FadeIn delay={0.4}>
          <DivisionsOverview />
        </FadeIn>

        <Footer />

        {/* Persistent Floating Widget */}
        <WhatsAppWidget />
      </div>
    </main>
  );
}