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
    <main className="min-h-screen bg-gray-50 overflow-x-hidden">
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

      {/* 4. Industrial Capacities & Operational Divisions (Manufacturing Strength) */}
      <FadeIn delay={0.3}>
        <section className="py-16 bg-gray-100/70 border-t border-b border-gray-200/80">
          <div className="text-center mb-8 max-w-3xl mx-auto px-4">
            <span className="text-xs font-extrabold text-emerald-800 uppercase tracking-widest bg-emerald-100 px-3 py-1 rounded-full">
              Manufacturing & Infrastructure
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-3">
              Industrial Capacities & Capabilities
            </h2>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              Detailed breakdown of our operational divisions, production scale, and infrastructure.
            </p>
          </div>
          <DivisionTabs />
        </section>
      </FadeIn>

      {/* 5. Group Standards & Quality Assurance */}
      <FadeIn delay={0.4}>
        <DivisionsOverview />
      </FadeIn>

      <Footer />

      {/* Persistent Floating Widget */}
      <WhatsAppWidget />
    </main>
  );
}