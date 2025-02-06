"use client";
import Footer from "@/components/Footer";
import ContactUs from "@/components/landing/Contactus";
import Gallery from "@/components/landing/Gallery";
import Hero from "@/components/landing/Hero";
import Trips from "@/components/landing/Trips";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="max-w-screen-xl mx-auto px-4">
        <Trips />
      </div>
      <Gallery />

      <ContactUs />

      <Footer />
    </div>
  );
}
