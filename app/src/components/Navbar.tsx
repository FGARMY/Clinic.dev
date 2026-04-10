"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Menu,
  X,
  Stethoscope,
  Users,
  MessageSquare,
  CalendarCheck,
  ChevronRight,
} from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services", icon: Stethoscope },
  { label: "Doctors", href: "#doctors", icon: Users },
  { label: "Testimonials", href: "#testimonials", icon: MessageSquare },
  { label: "Appointment", href: "#appointment", icon: CalendarCheck },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Track scroll position for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section for nav indicator
  useEffect(() => {
    const sections = navLinks.map((link) =>
      document.querySelector(link.href)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -40% 0px" }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 h-14 sm:h-16 w-[min(94%,1200px)] flex items-center transition-all duration-500 ease-in-out px-4 sm:px-8 rounded-full border ${
          isScrolled
            ? "bg-white/80 backdrop-blur-xl border-white/20 shadow-2xl"
            : "bg-white/10 backdrop-blur-md border-white/10 shadow-lg shadow-black/5"
        }`}
      >
        <div className="mx-auto w-full flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-primary flex items-center justify-center transition-transform group-hover:rotate-12">
              <Heart className="w-4 h-4 sm:w-6 sm:h-6 text-white fill-white" />
            </div>
            <span
              className={`text-lg sm:text-xl font-bold tracking-tight transition-colors duration-300 ${
                isScrolled ? "text-dark" : "text-white"
              }`}
            >
              MindCare
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`relative text-sm font-semibold transition-all hover:-translate-y-0.5 ${
                  isScrolled
                    ? "text-gray-600 hover:text-primary"
                    : "text-white/80 hover:text-white"
                } ${
                  activeSection === link.href
                    ? isScrolled
                      ? "!text-primary"
                      : "!text-white"
                    : ""
                }`}
              >
                {link.label}
                {activeSection === link.href && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-current rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Desktop CTA + Mobile Toggle */}
          <div className="flex items-center gap-3 sm:gap-6">
            <a
              href="#appointment"
              className={`hidden md:block rounded-full px-6 py-2.5 text-sm font-bold transition-all active:scale-95 shadow-lg ${
                isScrolled
                  ? "bg-dark text-white hover:bg-dark-light shadow-black/5"
                  : "bg-white text-dark hover:bg-white/90 shadow-white/10"
              }`}
            >
              Book Appointment
            </a>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              className={`md:hidden flex items-center justify-center w-10 h-10 rounded-full transition-all ${
                isScrolled
                  ? "text-dark hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Full-screen Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-dark/60 backdrop-blur-sm"
              onClick={closeMobileMenu}
            />

            {/* Menu panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="absolute top-20 left-3 right-3 bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="p-5 pb-6">
                {/* Nav links */}
                <div className="space-y-1">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      onClick={closeMobileMenu}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                      className={`flex items-center gap-3 py-3.5 px-4 rounded-2xl transition-colors group ${
                        activeSection === link.href
                          ? "bg-primary/5 text-primary"
                          : "text-dark hover:bg-gray-50"
                      }`}
                    >
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                          activeSection === link.href
                            ? "bg-primary/10 text-primary"
                            : "bg-gray-100 text-gray-400 group-hover:bg-primary/10 group-hover:text-primary"
                        }`}
                      >
                        <link.icon className="w-5 h-5" />
                      </div>
                      <span className="text-base font-semibold flex-1">
                        {link.label}
                      </span>
                      <ChevronRight className="w-4 h-4 text-gray-300" />
                    </motion.a>
                  ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-gray-100 my-4" />

                {/* CTA Button */}
                <motion.a
                  href="#appointment"
                  onClick={closeMobileMenu}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="block text-center rounded-2xl bg-primary text-white py-4 text-base font-bold shadow-xl shadow-primary/20 hover:bg-primary-dark transition-all active:scale-[0.98]"
                >
                  Book Free Consultation
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
