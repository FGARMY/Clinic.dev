"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Send, Calendar, Clock, User, Phone, Stethoscope } from "lucide-react";

const services = [
  "Cognitive Therapy",
  "Emotional Wellness",
  "Trauma Recovery",
  "Clinical Assessment",
  "Behavioral Health",
  "Medication Management",
];

const timeSlots = ["Morning (9AM - 12PM)", "Afternoon (12PM - 4PM)", "Evening (4PM - 8PM)"];

export default function AppointmentForm() {
  const { ref, isVisible } = useScrollReveal(0.1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    slot: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello! I'd like to book an appointment.%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AService: ${formData.service}%0ADate: ${formData.date}%0ATime: ${formData.slot}`;
    window.open(`https://wa.me/13025550107?text=${message}`, "_blank");
  };

  return (
    <section
      ref={ref}
      id="appointment"
      className="relative bg-white py-14 sm:py-24 overflow-hidden"
    >
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: "#5B5FEF" }}
      />

      <div className="max-w-4xl mx-auto px-5 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-3">
            Book Now
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-dark">
            Schedule Your Appointment
          </h2>
          <p className="mt-3 text-gray-500 max-w-lg mx-auto text-sm sm:text-base">
            Take the first step towards better mental health. Fill in the
            details below and we&apos;ll reach out to confirm your appointment.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-gray-50/80 rounded-3xl p-5 sm:p-10 border border-gray-100 shadow-sm"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {/* Name */}
            <div>
              <label
                htmlFor="appt-name"
                className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block"
              >
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  id="appt-name"
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full pl-10 pr-4 py-3.5 sm:py-3 rounded-xl bg-white border border-gray-200 text-sm text-dark placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="appt-phone"
                className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block"
              >
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  id="appt-phone"
                  type="tel"
                  required
                  placeholder="(302) 555-0107"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full pl-10 pr-4 py-3.5 sm:py-3 rounded-xl bg-white border border-gray-200 text-sm text-dark placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200"
                />
              </div>
            </div>

            {/* Service */}
            <div>
              <label
                htmlFor="appt-service"
                className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block"
              >
                Service
              </label>
              <div className="relative">
                <Stethoscope className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <select
                  id="appt-service"
                  required
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  className="w-full pl-10 pr-4 py-3.5 sm:py-3 rounded-xl bg-white border border-gray-200 text-sm text-dark focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200 appearance-none cursor-pointer"
                >
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Date */}
            <div>
              <label
                htmlFor="appt-date"
                className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block"
              >
                Preferred Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  id="appt-date"
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                  className="w-full pl-10 pr-4 py-3.5 sm:py-3 rounded-xl bg-white border border-gray-200 text-sm text-dark focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200"
                />
              </div>
            </div>

            {/* Time Slot - full width */}
            <div className="sm:col-span-2">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 block">
                <Clock className="inline w-3.5 h-3.5 mr-1 -mt-0.5" />
                Preferred Time Slot
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {timeSlots.map((slot) => (
                  <button
                    type="button"
                    key={slot}
                    onClick={() => setFormData({ ...formData, slot })}
                    className={`rounded-xl py-3.5 sm:py-3 text-sm font-medium border transition-all duration-200 cursor-pointer ${
                      formData.slot === slot
                        ? "bg-primary text-white border-primary shadow-md shadow-primary/20"
                        : "bg-white text-gray-600 border-gray-200 hover:border-primary/30 hover:text-primary"
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-6 sm:mt-8 w-full sm:w-auto rounded-full bg-emerald-500 text-white px-8 py-4 sm:py-3.5 text-sm font-semibold hover:bg-emerald-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 hover:shadow-xl hover:shadow-emerald-500/30 hover:scale-[1.02] cursor-pointer"
          >
            <Send className="w-4 h-4" />
            Submit via WhatsApp
          </button>
        </motion.form>
      </div>
    </section>
  );
}
