// import { Link } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
export default function HeroSection() {
  return (
    <section
      className="h-[500px] bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage:
           "url('/hero_bg.png')",
      }}
    >
      <div className="text-center px-4 pt-18">
        <h1 className="font-poppins font-bold md:text-[56px] text-3xl leading-[100%] tracking-[0.5%]  mb-4 drop-shadow-lg">
          Discover the World with Tripsiy
        </h1>

        <p className="font-poppins font-medium text-[20px] leading-[100%] tracking-[0.3%]lg mb-6 drop-shadow-md">
          Your trusted travel partner for unforgettable experiences.
        </p>

        <div className="flex items-center justify-center md:space-x-4 space-x-1">
          <Link to="/packages">
          <button className="h-[44px] md:w-[168px] w-[140px] bg-[rgba(244,156,11,1)] hover:bg-[rgba(220, 189, 139, 1)] rounded-md font-semibold transition">
            explore packages
          </button>
          </Link>

          <button className="h-[44px] md:w-[168px] w-[140px] border border-white bg-transparent hover:bg-white hover:text-black rounded-md font-semibold transition">
            Plan Your Trip
          </button>
        </div>
      </div>
    </section>
  );
}
