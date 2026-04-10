"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Brain,
  Heart,
  Shield,
  Stethoscope,
  Activity,
  Pill,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Cognitive Therapy",
    description:
      "Evidence-based cognitive behavioral therapy to reshape thought patterns and build lasting resilience for a healthier mindset.",
    color: "bg-violet-50 text-violet-600",
    borderColor: "hover:border-violet-200",
  },
  {
    icon: Heart,
    title: "Emotional Wellness",
    description:
      "Comprehensive emotional health programs designed to help you manage stress, anxiety, and emotional balance in your daily life.",
    color: "bg-rose-50 text-rose-600",
    borderColor: "hover:border-rose-200",
  },
  {
    icon: Shield,
    title: "Trauma Recovery",
    description:
      "Specialized EMDR and trauma-focused approaches that gently guide you through healing from past experiences and PTSD.",
    color: "bg-emerald-50 text-emerald-600",
    borderColor: "hover:border-emerald-200",
  },
  {
    icon: Stethoscope,
    title: "Clinical Assessment",
    description:
      "Thorough diagnostic evaluations using standardized tools to create a clear picture of your mental health needs.",
    color: "bg-blue-50 text-blue-600",
    borderColor: "hover:border-blue-200",
  },
  {
    icon: Activity,
    title: "Behavioral Health",
    description:
      "Targeted interventions addressing behavioral patterns, substance use concerns, and habit-forming behaviors effectively.",
    color: "bg-amber-50 text-amber-600",
    borderColor: "hover:border-amber-200",
  },
  {
    icon: Pill,
    title: "Medication Management",
    description:
      "Expert psychiatric medication evaluation, prescription, and ongoing monitoring with regular follow-ups for optimal results.",
    color: "bg-indigo-50 text-indigo-600",
    borderColor: "hover:border-indigo-200",
  },
];

export default function ServicesGrid() {
  const { ref, isVisible } = useScrollReveal(0.1);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollLeft = container.scrollLeft;
    const cardWidth = container.firstElementChild?.clientWidth ?? 280;
    const gap = 16;
    const index = Math.round(scrollLeft / (cardWidth + gap));
    setActiveIndex(Math.min(index, services.length - 1));
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <section
      ref={ref}
      id="services"
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
            Our Services
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-dark">
            Comprehensive Mental Health Care
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
            We offer a wide range of professional services designed to support
            every aspect of your mental and emotional wellbeing.
          </p>
        </motion.div>

        {/* Mobile: Horizontal scroll carousel */}
        <div className="sm:hidden">
          <div
            ref={scrollRef}
            className="mobile-scroll-container px-5 -mx-5"
          >
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
                className="mobile-scroll-card w-[280px] flex-shrink-0 first:ml-5 last:mr-5"
              >
                <div
                  className={`bg-white rounded-2xl p-5 border border-gray-100 ${service.borderColor} transition-all duration-300 shadow-sm h-full`}
                >
                  <div
                    className={`w-11 h-11 rounded-xl ${service.color} flex items-center justify-center`}
                  >
                    <service.icon className="w-5 h-5" />
                  </div>
                  <h3 className="mt-3 text-base font-bold text-dark">
                    {service.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-gray-500 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold text-primary hover:gap-3 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll dots */}
          <div className="flex justify-center gap-1.5 mt-4">
            {services.map((_, i) => (
              <span
                key={i}
                className={`scroll-dot ${activeIndex === i ? "active" : ""}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop/Tablet: Grid */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className={`group bg-white rounded-2xl p-6 border border-gray-100 ${service.borderColor} transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1`}
            >
              <div
                className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
              >
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-dark">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                {service.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-primary hover:gap-3 transition-all duration-300"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
