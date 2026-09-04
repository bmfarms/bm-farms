'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Muhammad Ali',
    location: 'Fish Farmer, Punjab',
    text: 'BM Farms ki floating feed ne mere tilapia farm ki productivity 40% tak boost kar di. FCR bohot behtareen hai aur fish growth pehle se double hai.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sana Khan',
    location: 'Poultry Farm Owner, Sindh',
    text: 'Unique Super Broiler Feed se mere birds ka weight gain 20% zyada hua aur mortality rate kam hui. Quality control lajawab hai.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Rashid Mehmood',
    location: 'Agribusiness Consultant',
    text: 'Solar energy solutions aur PP packaging dono mein BM Farms ne industry standards set kar diye hain. Professional approach aur timely delivery.',
    rating: 4,
  },
  {
    id: 4,
    name: 'Farah Naz',
    location: 'Feed Mill Manager',
    text: 'Star Floating Feed ki nutritional formulation aquaculture mein game-changer hai. 2,500+ tons annual supply ka wada poora kiya.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, [isPaused, current]);

  return (
    <section className="py-16 bg-gradient-to-br from-emerald-50/60 via-teal-50/40 to-emerald-100/40 border-t border-emerald-100/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3.5 py-1 bg-white/60 border border-white/80 backdrop-blur-md text-emerald-900 text-xs font-extrabold rounded-full uppercase tracking-wider mb-3 shadow-sm">
            Customer Testimonials
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl tracking-tight">
            What Our Clients Say
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-700 font-medium">
            Real feedback from our valued partners across Pakistan
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
              transition={{ duration: 0.5 }}
              className="bg-white/60 backdrop-blur-xl border border-white/80 p-8 sm:p-10 rounded-3xl shadow-xl"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonials[current].rating
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-800 text-base sm:text-lg italic leading-relaxed mb-6">
                "{testimonials[current].text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 font-bold text-lg">
                  {testimonials[current].name[0]}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{testimonials[current].name}</p>
                  <p className="text-sm text-gray-500">{testimonials[current].location}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 bg-white/80 backdrop-blur-md border border-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
            aria-label="Previous Review"
          >
            <ChevronLeft className="w-5 h-5 text-emerald-900" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 bg-white/80 backdrop-blur-md border border-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
            aria-label="Next Review"
          >
            <ChevronRight className="w-5 h-5 text-emerald-900" />
          </button>

          {/* Dots Indicator + Pause/Play Button */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  current === index ? 'bg-emerald-900 w-8' : 'bg-emerald-300'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
            
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="ml-4 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold hover:bg-emerald-200 transition-colors"
            >
              {isPaused ? '▶ Play' : '⏸ Pause'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}