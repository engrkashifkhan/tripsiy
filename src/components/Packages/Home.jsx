import React from "react";
export default function HeroSection() {
  return (
    <section
      className="relative h-[450px] bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('/packages_hero_bg.jpg')",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/45"></div>

      {/* Text Content */}
      <div className="relative text-center px-4 pt-26">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Find Your Perfect Travel Package
        </h1>
        <p className="text-lg mb-6 drop-shadow-md">
          Curated trips for every traveler — choose your style and start exploring.
        </p>
      </div>
    </section>
  );
}




