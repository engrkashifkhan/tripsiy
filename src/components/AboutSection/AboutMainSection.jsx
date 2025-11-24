import React from "react";

export default function HeroSection() {
  return (
    <section
      className="h-[600px] bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('/about_hero_bg.jpg')",
      }}
    >
      <div className="text-center px-4 pt-20">
        <h1 className="md:text-5xl text-4xl font-bold mb-4 drop-shadow-lg">
          Discover the Story Behind Tripsiy
        </h1>

        <p className="text-2xl text-[rgba(249,231,192,1)] font-semibold mb-6 drop-shadow-md">
          A UAE-based travel company turning dream vacations into real adventures.
        </p>
      </div>
    </section>
  );
}
