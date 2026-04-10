"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Star, MapPin } from "lucide-react";

const doctors = [
  {
    name: "Dr. Sarah Mitchell",
    specialty: "Clinical Psychologist",
    rating: 4.9,
    reviews: 324,
    image: "/images/doctor-1.png",
    location: "New York, NY",
    experience: "12+ years",
  },
  {
    name: "Dr. James Odero",
    specialty: "Psychiatrist",
    rating: 4.8,
    reviews: 289,
    image: "/images/doctor-2.png",
    location: "Chicago, IL",
    experience: "15+ years",
  },
  {
    name: "Dr. Emily Chen",
    specialty: "Behavioral Therapist",
    rating: 4.9,
    reviews: 412,
    image: "/images/doctor-3.png",
    location: "Los Angeles, CA",
    experience: "10+ years",
  },
  {
    name: "Dr. Michael Rivera",
    specialty: "Neuropsychiatrist",
    rating: 4.7,
    reviews: 198,
    image: "/images/doctor-4.png",
    location: "Houston, TX",
    experience: "8+ years",
  },
];

export default function DoctorsSection() {
  const { ref, isVisible } = useScrollReveal(0.1);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollLeft = container.scrollLeft;
    const cardWidth = container.firstElementChild?.clientWidth ?? 300;
    const gap = 16;
    const index = Math.round(scrollLeft / (cardWidth + gap));
    setActiveIndex(Math.min(index, doctors.length - 1));
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <section ref={ref} id="doctors" className="bg-white py-14 sm:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8 sm:mb-12"
        >
          <div>
            <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-3">
              Our Specialists
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-dark">
              Meet Our Expert Doctors
            </h2>
            <p className="mt-2 text-gray-500 max-w-lg text-sm sm:text-base">
              Our team of board-certified specialists is dedicated to providing
              the highest quality of mental health care.
            </p>
          </div>
          <a
            href="#"
            className="text-primary text-sm font-semibold hover:underline whitespace-nowrap"
          >
            View All Doctors →
          </a>
        </motion.div>

        {/* Mobile: Horizontal scroll with snap-to-center */}
        <div className="sm:hidden">
          <div
            ref={scrollRef}
            className="mobile-scroll-container px-5 -mx-5"
          >
            {doctors.map((doctor, i) => (
              <motion.div
                key={doctor.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                className="mobile-scroll-card w-[300px] flex-shrink-0 first:ml-5 last:mr-5"
              >
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                  {/* Image */}
                  <div className="relative h-48 bg-gradient-to-b from-primary-50 to-gray-50 overflow-hidden">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      className="object-cover object-top"
                      sizes="300px"
                    />
                    {/* Rating badge */}
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1 flex items-center gap-1 shadow-sm">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span className="text-xs font-bold text-dark">
                        {doctor.rating}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-4">
                    <h3 className="text-base font-bold text-dark">
                      {doctor.name}
                    </h3>
                    <p className="text-sm text-primary font-medium mt-0.5">
                      {doctor.specialty}
                    </p>
                    <div className="flex items-center gap-1 mt-2 text-gray-400">
                      <MapPin className="w-3.5 h-3.5" />
                      <span className="text-xs">{doctor.location}</span>
                      <span className="text-xs ml-auto">
                        {doctor.experience}
                      </span>
                    </div>
                    <a
                      href="#appointment"
                      className="block w-full mt-3 rounded-xl bg-primary text-white py-3 text-sm font-medium text-center hover:bg-primary-dark transition-colors duration-300 hover:shadow-lg hover:shadow-primary/25"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll dots */}
          <div className="flex justify-center gap-1.5 mt-4">
            {doctors.map((_, i) => (
              <span
                key={i}
                className={`scroll-dot ${activeIndex === i ? "active" : ""}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop/Tablet: Grid */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doctor, i) => (
            <motion.div
              key={doctor.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-56 bg-gradient-to-b from-primary-50 to-gray-50 overflow-hidden">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                {/* Rating badge */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1 flex items-center gap-1 shadow-sm">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span className="text-xs font-bold text-dark">
                    {doctor.rating}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="text-base font-bold text-dark">
                  {doctor.name}
                </h3>
                <p className="text-sm text-primary font-medium mt-0.5">
                  {doctor.specialty}
                </p>
                <div className="flex items-center gap-1 mt-2 text-gray-400">
                  <MapPin className="w-3.5 h-3.5" />
                  <span className="text-xs">{doctor.location}</span>
                  <span className="text-xs ml-auto">
                    {doctor.experience}
                  </span>
                </div>
                <button className="w-full mt-4 rounded-xl bg-primary text-white py-2.5 text-sm font-medium hover:bg-primary-dark transition-colors duration-300 hover:shadow-lg hover:shadow-primary/25">
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
