"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, ShieldCheck, Clock, UserCheck, CheckCircle } from "lucide-react";

/* Inline SVG social icons */
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.88 0 1.441 1.441 0 012.88 0z" />
    </svg>
  );
}

function XTwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const socialLinks = [
  { icon: LinkedInIcon, href: "#", label: "LinkedIn" },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: XTwitterIcon, href: "#", label: "X / Twitter" },
];

const trustSignals = [
  { icon: Clock, text: "24/7 Available" },
  { icon: UserCheck, text: "Licensed Therapists" },
  { icon: ShieldCheck, text: "100% Confidential" },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] lg:min-h-screen overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #4A4ED4 0%, #5B5FEF 45%, #9EA1FD 75%, #FFFFFF 100%)",
      }}
    >
      {/* Designer background elements: Light mesh/glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[70%] rounded-full bg-violet-400/30 blur-[120px]" />
        <div className="absolute bottom-[20%] left-[-5%] w-[40%] h-[50%] rounded-full bg-indigo-300/20 blur-[100px]" />
      </div>

      {/* Grid overlay texture with fade */}
      <div 
        className="absolute inset-0 hero-grid-overlay pointer-events-none" 
        style={{ maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)" }}
      />

      {/* Subtle radial glow for focus */}
      <div
        className="absolute top-[30%] left-[20%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 60%)",
        }}
      />

      {/* Social icons - top right (desktop only) */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute top-5 right-5 z-20 hidden md:flex gap-2"
      >
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            aria-label={social.label}
            className="w-10 h-10 rounded-full bg-white/15 border border-white/25 flex items-center justify-center text-white hover:bg-white/25 transition-all duration-300 hover:scale-110"
          >
            <social.icon className="w-4 h-4" />
          </a>
        ))}
      </motion.div>

      <div className="relative z-10 h-full max-w-[1440px] mx-auto px-5 sm:px-12 grid grid-cols-1 lg:grid-cols-2 items-stretch gap-0 lg:gap-8">
        {/* Left column - Content */}
        <div className="flex flex-col justify-center pt-24 sm:pt-32 lg:pt-36 pb-8 lg:pb-24">
          {/* Credibility pill badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/25 px-4 py-1.5 text-white text-xs sm:text-sm frosted-chip">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Trusted by 5,000+ patients
            </span>
          </motion.div>

          {/* H1 — The "3-second" headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-5 sm:mt-8 text-[2rem] sm:text-5xl lg:text-6xl xl:text-[4rem] font-bold text-white leading-[1.1] font-serif"
          >
            Professional
            <br />
            <span className="relative italic font-medium">
              Mental Health
              <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1 sm:h-1.5 bg-white/20 rounded-full" />
            </span>{" "}
            Care
            <br className="hidden sm:block" />{" "}
            You Can Trust.
          </motion.h1>

          {/* Subheading — fused value prop + social proof */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="mt-4 sm:mt-6 text-white/80 text-sm sm:text-lg max-w-md leading-relaxed"
          >
            Evidence-based therapy &amp; psychiatry from certified experts. Compassionate care tailored to your unique journey.
          </motion.p>

          {/* CTA — Single dominant button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-5 sm:mt-6 flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#appointment"
              id="hero-cta-primary"
              className="rounded-full bg-white text-dark px-8 py-3.5 sm:py-3 text-base sm:text-sm font-bold hover:bg-white/90 transition-all duration-300 shadow-lg shadow-white/10 hover:shadow-xl hover:scale-[1.02] text-center"
            >
              Book Free Consultation
            </a>
            <a
              href="https://wa.me/13025550107"
              target="_blank"
              rel="noopener noreferrer"
              id="hero-cta-whatsapp"
              className="rounded-full border border-white/40 text-white px-8 py-3.5 sm:py-3 text-base sm:text-sm font-medium hover:bg-white/10 transition-all duration-300 hover:border-white flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Professional Trust Card — Grouped Rating + Signals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-8 sm:mt-10 inline-flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-0 p-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2rem] overflow-hidden w-full sm:w-auto"
          >
            {/* Google Rating Section */}
            <div className="flex items-center gap-3 px-5 py-3 sm:py-2.5 bg-white/10 rounded-[1.8rem] sm:rounded-none sm:bg-transparent">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-0 sm:gap-2">
                <span className="text-white text-sm font-bold leading-none">4.9/5</span>
                <span className="text-white/50 text-[10px] sm:text-xs uppercase tracking-wider font-semibold">Google Rating</span>
              </div>
            </div>

            {/* Vertical Divider (Desktop only) */}
            <div className="hidden sm:block w-px h-8 bg-white/10 mx-2" />

            {/* Trust Signals Section */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 px-5 py-3 sm:py-2.5">
              {trustSignals.map((signal) => (
                <div
                  key={signal.text}
                  className="flex items-center gap-1.5 text-white/80 text-[11px] sm:text-xs font-medium"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  {signal.text}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right column — Doctor portrait (desktop) */}
        <div className="relative hidden lg:flex items-end justify-center h-full">
          <motion.div
            initial={{ opacity: 0, scale: 1, y: 300 }}
            animate={{ opacity: 1, scale: 1.30, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-4xl xl:max-w-6xl origin-bottom"
            style={{ 
              height: "120%",
              maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)"
            }}
          >
            <Image
              src="/images/hero-doctor.png"
              alt="Professional doctor ready to help"
              fill
              priority
              className="object-contain object-bottom"
              sizes="(max-width: 900px) 0vw, (max-width: 1200px) 40vw, 1000px"
            />
          </motion.div>
        </div>
      </div>

      {/* Mobile doctor portrait — small circular avatar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        className="lg:hidden absolute bottom-28 right-4 z-20"
      >
        <div className="relative w-20 h-20 rounded-full overflow-hidden border-3 border-white/30 shadow-xl">
          <Image
            src="/images/hero-doctor.png"
            alt="Professional doctor"
            fill
            className="object-cover object-top"
            sizes="80px"
          />
        </div>
      </motion.div>
    </section>
  );
}
