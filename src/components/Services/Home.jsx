import React from "react";
export default function HeroSection() {
  return (
    <section
      className="h-[463px] bg-cover bg-center relative flex items-center justify-center"
      style={{
        backgroundImage: "url('/service_hero_bg.jpg')",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* TEXT CONTENT */}
      <div className="relative text-center px-4 pt-20 text-white">
        <h1 className="md:text-5xl text-4xl font-bold mb-4 drop-shadow-lg">
          Our Services
        </h1>

        <p className="text-2xl font-semibold mb-6 drop-shadow-md">
          Everything you need for a seamless travel experience — all in one place.
        </p>
      </div>
    </section>
  );
}
