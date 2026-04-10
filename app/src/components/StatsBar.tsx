"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { value: "15K+", label: "Patients Served" },
  { value: "12+", label: "Years Experience" },
  { value: "150+", label: "Expert Doctors" },
  { value: "4.9", label: "Average Rating" },
];

export default function StatsBar() {
  const { ref, isVisible } = useScrollReveal(0.3);

  return (
    <section
      ref={ref}
      id="stats"
      className="relative bg-white py-12 sm:py-16"
    >
      {/* Subtle top shadow from hero */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-gray-100/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-gray-500 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
