import FadeIn from '@/components/FadeIn';
import DivisionTabs from '@/components/DivisionTabs';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import ProductCatalogue from '@/components/ProductCatalogue';
// import SolarCalculator from '@/components/SolarCalculator'; // Commented out for now
import DivisionsOverview from '@/components/DivisionsOverview';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <FadeIn delay={0.1}>
        <Stats />
      </FadeIn>

      {/* Product & Commercial Catalogue */}
      <FadeIn delay={0.2}>
        <ProductCatalogue />
      </FadeIn>

      {/* Solar Feasibility Calculator (Temporarily Disabled) */}
      {/* 
      <FadeIn delay={0.25}>
        <SolarCalculator />
      </FadeIn> 
      */}

      {/* Dynamic Division Tabs Section */}
      <FadeIn delay={0.3}>
        <section className="py-12 bg-gray-100/60">
          <div className="text-center mb-4">
            <h2 className="text-3xl font-extrabold text-gray-900">Explore Our Business Divisions</h2>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">Click through tabs to see key operational details</p>
          </div>
          <DivisionTabs />
        </section>
      </FadeIn>

      {/* Divisions Overview Section */}
      <FadeIn delay={0.4}>
        <DivisionsOverview />
      </FadeIn>

      <Footer />

      {/* Persistent Floating Widget */}
      <WhatsAppWidget />
    </main>
  );
}