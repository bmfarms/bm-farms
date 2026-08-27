import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import DivisionTabs from "@/components/DivisionTabs";
import ProductCatalogue from "@/components/ProductCatalogue";
import DivisionsOverview from "@/components/DivisionsOverview";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-emerald-500 selection:text-white">
      <Hero />
      <Stats />
      
      {/* Light Clean Sections Wrapper */}
      <div className="relative z-10 space-y-24 py-16 bg-gradient-to-b from-slate-50 via-emerald-50/40 to-slate-100">
        <ProductCatalogue />
        <DivisionTabs />
        <DivisionsOverview />
      </div>
    </main>
  );
}