import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import DoctorsSection from "@/components/DoctorsSection";
import Testimonials from "@/components/Testimonials";
import AppointmentForm from "@/components/AppointmentForm";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServicesGrid />
      <DoctorsSection />
      <Testimonials />
      <AppointmentForm />
      <Footer />
      <MobileBottomBar />
    </main>
  );
}
