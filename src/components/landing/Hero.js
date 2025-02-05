"use client";
import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaSearch } from "react-icons/fa";
import background from "../../../public/images/background.jpg";
import background1 from "../../../public/images/background1.jpg";
import background2 from "../../../public/images/background2.jpg";

const backgroundImages = [background, background1, background2];
const phrases = ["Paradise", "Serenity", "Tranquility", "Nature", "Freedom"];

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section
      className="relative w-full h-[80vh] bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(${backgroundImages[currentImage].src})`,
        transition: "background 1s ease-in-out",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 space-y-6">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
          Escape to{" "}
          <Typewriter
            words={phrases}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </h1>

        <div className="relative flex items-center justify-center">
          <input
            type="text"
            placeholder="Search for destinations..."
            className="p-3 w-80 sm:w-96 text-white border-2 border-primary outline-none bg-transparent transition-transform duration-300 ease-in-out transform focus:scale-105 focus:ring-2 focus:ring-primary"
          />
          <button className="p-3 absolute right-0 text-white">
            <FaSearch />
          </button>
        </div>

        <div className="absolute bottom-10 animate-bounce text-3xl">
          <span className="text-primary">↓</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
