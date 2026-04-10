"use client";

import { useState, useEffect } from "react";
import { Phone, CalendarCheck } from "lucide-react";

export default function MobileBottomBar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const appointmentSection = document.querySelector("#appointment");
    if (!appointmentSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Hide when appointment form is in view (to avoid redundancy)
        setIsVisible(!entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    observer.observe(appointmentSection);
    return () => observer.disconnect();
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden mobile-bottom-bar">
      <div className="bg-white/90 backdrop-blur-xl border-t border-gray-200/50 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-4 py-2.5">
        <div className="flex gap-2.5 max-w-lg mx-auto">
          {/* Call Now */}
          <a
            href="tel:+13025550107"
            id="mobile-cta-call"
            className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-gray-100 text-dark py-3 text-sm font-semibold hover:bg-gray-200 transition-all active:scale-[0.97]"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>

          {/* Book Appointment */}
          <a
            href="#appointment"
            id="mobile-cta-book"
            className="flex-[1.4] flex items-center justify-center gap-2 rounded-xl bg-primary text-white py-3 text-sm font-bold hover:bg-primary-dark transition-all active:scale-[0.97] shadow-md shadow-primary/20"
          >
            <CalendarCheck className="w-4 h-4" />
            Book Appointment
          </a>
        </div>
      </div>
    </div>
  );
}
