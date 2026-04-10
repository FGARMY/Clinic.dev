import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans, Lora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#5B5FEF",
};

export const metadata: Metadata = {
  title: "MindCare Clinic | Professional Mental Health Support",
  description:
    "World-class mental health care with 150+ experienced doctors. 24/7 support, personalized treatment plans, and compassionate care. Book your appointment today.",
  keywords: [
    "Mental Health Clinic",
    "Therapy",
    "Psychiatry",
    "Counseling",
    "Mental Health Support",
    "Best Medical Center",
    "Experienced Doctors",
  ],
  openGraph: {
    title: "MindCare Clinic | Professional Mental Health Support",
    description:
      "World-class mental health care with 150+ experienced doctors. 24/7 support and compassionate care.",
    type: "website",
    locale: "en_US",
    siteName: "MindCare Clinic",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "MindCare Clinic",
  description:
    "World-class mental health care with 150+ experienced doctors providing 24/7 support and compassionate care.",
  url: "https://mindcareclinic.com",
  telephone: "+1-302-555-0107",
  address: {
    "@type": "PostalAddress",
    streetAddress: "456 Wellness Boulevard",
    addressLocality: "Wilmington",
    addressRegion: "DE",
    postalCode: "19801",
    addressCountry: "US",
  },
  medicalSpecialty: [
    "Psychiatry",
    "Psychology",
    "Counseling",
    "Behavioral Health",
  ],
  openingHours: "Mo-Su 00:00-23:59",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "2847",
    bestRating: "5",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable} ${lora.variable} font-sans scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-white text-dark">{children}</body>
    </html>
  );
}
