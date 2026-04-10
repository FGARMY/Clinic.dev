"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Amanda Richardson",
    role: "Anxiety Recovery",
    avatar: "/images/patient-1.png",
    rating: 5,
    quote:
      "MindCare completely changed my life. The therapists here truly listen and create personalized plans. After 6 months, I feel like a completely new person. I cannot recommend them enough!",
  },
  {
    name: "David Okonkwo",
    role: "Trauma Survivor",
    avatar: "/images/patient-2.png",
    rating: 5,
    quote:
      "Finding the MindCare team was the best decision I ever made. Dr. Mitchell's approach to trauma recovery was gentle, effective, and genuinely transformative. Forever grateful.",
  },
  {
    name: "Patricia Nguyen",
    role: "Depression Recovery",
    avatar: "/images/patient-3.png",
    rating: 5,
    quote:
      "After struggling silently for years, MindCare gave me the tools and support to rebuild my life. The 24/7 helpline was invaluable during difficult moments. Truly world-class care.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating
              ? "fill-amber-400 text-amber-400"
              : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { ref, isVisible } = useScrollReveal(0.1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance on mobile every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
    setIsPaused(true);
    // Resume auto-advance after 10 seconds of inactivity
    setTimeout(() => setIsPaused(false), 10000);
  }, []);

  const goPrev = useCallback(() => {
    goToSlide(
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    );
  }, [currentIndex, goToSlide]);

  const goNext = useCallback(() => {
    goToSlide((currentIndex + 1) % testimonials.length);
  }, [currentIndex, goToSlide]);

  return (
    <section
      ref={ref}
      id="testimonials"
      className="bg-gray-50/50 py-14 sm:py-24"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-3">
            Testimonials
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-dark">
            What Our Patients Say
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
            Real stories from real people whose lives were transformed by our
            compassionate mental health support.
          </p>
        </motion.div>

        {/* Mobile: Single-card carousel */}
        <div className="md:hidden">
          <div className="relative">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm relative"
            >
              {/* Quote icon */}
              <div className="absolute top-5 right-5 opacity-10">
                <Quote className="w-8 h-8 text-primary" />
              </div>

              {/* Stars */}
              <StarRating rating={testimonials[currentIndex].rating} />

              {/* Quote — larger text on mobile */}
              <p className="mt-4 text-base text-gray-600 leading-relaxed">
                &ldquo;{testimonials[currentIndex].quote}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-5 flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="relative w-11 h-11 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                    sizes="44px"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-dark">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-xs text-gray-400">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Navigation arrows */}
            <div className="flex items-center justify-between mt-4">
              <button
                onClick={goPrev}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-primary hover:text-primary transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goToSlide(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === currentIndex
                        ? "w-6 bg-primary"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={goNext}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-primary hover:text-primary transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop: 3-column grid */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 relative"
            >
              {/* Quote icon */}
              <div className="absolute top-5 right-5 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-10 h-10 text-primary" />
              </div>

              {/* Stars */}
              <StarRating rating={t.rating} />

              {/* Quote */}
              <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-dark">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
