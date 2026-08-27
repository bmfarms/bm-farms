import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import DivisionTabs from "@/components/DivisionTabs";
import ProductCatalogue from "@/components/ProductCatalogue";
import DivisionsOverview from "@/components/DivisionsOverview";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900 selection:bg-emerald-600 selection:text-white relative overflow-hidden">
      {/* Global Ambient Background Orbs for Light Glass Effect */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-emerald-300/30 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="fixed bottom-1/3 right-1/4 w-[600px] h-[600px] bg-teal-200/40 rounded-full blur-[140px] pointer-events-none -z-10" />
      
      <Hero />
      <Stats />

      {/* Main Content Wrapper */}
      <div className="relative z-10 space-y-20 py-12">
        <ProductCatalogue />
        <DivisionTabs />
        <DivisionsOverview />
      </div>
    </main>
  );
}