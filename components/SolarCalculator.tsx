'use client';

import { useState } from 'react';
import { Sun, Zap, TrendingUp, Calculator, ArrowRight } from 'lucide-react';

export default function SolarCalculator() {
  const [monthlyBill, setMonthlyBill] = useState<number>(150000); // Default PKR 150,000

  // Approximate Calculations based on PKR 65/unit average commercial tariff
  const estimatedUnits = Math.round(monthlyBill / 65);
  const recommendedKW = Math.max(5, Math.round((estimatedUnits / 120) * 10) / 10);
  const estimatedMonthlySavings = Math.round(monthlyBill * 0.85); // Approx 85% savings
  const estimatedAnnualSavings = estimatedMonthlySavings * 12;

  const handleSolarInquiry = () => {
    const phoneNumber = '923006333064';
    const message = encodeURIComponent(
      `Hello Star Enterprises Team, I calculated my Solar System requirement on your website:\n\n` +
      `- Monthly Electricity Bill: PKR ${monthlyBill.toLocaleString()}\n` +
      `- Recommended System Capacity: ${recommendedKW} kW\n` +
      `- Estimated Monthly Savings: PKR ${estimatedMonthlySavings.toLocaleString()}\n\n` +
      `Please provide me a customized quote.`
    );
    
    window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-emerald-50/50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold text-emerald-800 uppercase tracking-widest bg-emerald-100 px-3.5 py-1.5 rounded-full border border-emerald-200">
            Star Enterprises - Solar Division
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 tracking-tight">
            Solar ROI & Feasibility Calculator
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-2">
            Estimate your required solar system capacity and potential energy bill savings instantly.
          </p>
        </div>

        {/* Calculator Box */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Input Controls */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-emerald-800">
              <Calculator className="w-6 h-6" />
              <h3 className="font-bold text-lg text-gray-900">Calculate Your Savings</h3>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                Average Monthly Electricity Bill (PKR)
              </label>
              <div className="text-2xl sm:text-3xl font-black text-emerald-900 mb-4">
                PKR {monthlyBill.toLocaleString()}
              </div>

              {/* Slider Input */}
              <input
                type="range"
                min={30000}
                max={1000000}
                step={10000}
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(Number(e.target.value))}
                className="w-full h-2.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-700"
              />
              <div className="flex justify-between text-[11px] font-semibold text-gray-400 mt-1">
                <span>PKR 30k</span>
                <span>PKR 500k</span>
                <span>PKR 1M+</span>
              </div>
            </div>

            <div className="p-4 bg-emerald-50/70 rounded-2xl border border-emerald-100/80 space-y-1.5 text-xs text-gray-700">
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Estimated Monthly Units:</span>
                <span className="font-bold text-emerald-900">{estimatedUnits.toLocaleString()} kWh</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Grid Dependency Reduction:</span>
                <span className="font-bold text-emerald-900">Up to 85%</span>
              </div>
            </div>
          </div>

          {/* Results Display */}
          <div className="bg-gradient-to-br from-emerald-900 to-emerald-950 rounded-2xl p-6 text-white space-y-6 shadow-lg relative overflow-hidden">
            <div className="absolute -right-6 -bottom-6 opacity-10 text-white">
              <Sun className="w-48 h-48" />
            </div>

            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300 block mb-1">
                Recommended Solar Capacity
              </span>
              <div className="text-4xl sm:text-5xl font-black flex items-baseline gap-2 text-white">
                <span>{recommendedKW}</span>
                <span className="text-xl font-bold text-emerald-300">kW System</span>
              </div>
            </div>

            <div className="border-t border-emerald-800/80 pt-4 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-800/80 rounded-xl">
                  <Zap className="w-5 h-5 text-emerald-300" />
                </div>
                <div>
                  <span className="text-[11px] text-emerald-200 block">Est. Monthly Savings</span>
                  <span className="text-lg font-bold text-white">PKR {estimatedMonthlySavings.toLocaleString()}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-800/80 rounded-xl">
                  <TrendingUp className="w-5 h-5 text-emerald-300" />
                </div>
                <div>
                  <span className="text-[11px] text-emerald-200 block">Est. Annual Savings</span>
                  <span className="text-lg font-bold text-white">PKR {estimatedAnnualSavings.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleSolarInquiry}
              className="w-full inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 text-xs sm:text-sm font-bold py-3.5 px-4 rounded-xl transition-colors shadow-md"
            >
              <span>Get Customized Quotation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}