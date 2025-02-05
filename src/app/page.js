"use client";
import Footer from "@/components/Footer";
import Gallery from "@/components/landing/Gallery";
import Hero from "@/components/landing/Hero";
import Trips from "@/components/landing/Trips";
import Navbar from "@/components/Navbar";
import { ParallaxProvider } from "react-scroll-parallax";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="max-w-screen-xl mx-auto px-4">
        <Trips />
      </div>
      <Gallery />
      <Footer />
    </div>
  );
}
