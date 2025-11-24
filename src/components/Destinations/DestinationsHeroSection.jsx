import React from "react";

export default function HeroSection() {
  return (
    <section
      className="min-h-[610px] bg-cover bg-center flex items-center justify-center text-white relative"
      style={{
        backgroundImage:
          "url('/destinations_hero_bg.jpg')",
      }}
    >
      <div className="text-center px-4 w-full pt-30 md-pt-0">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 drop-shadow-lg">
          Explore the World with Tripsiy
        </h1>

        <p className="text-base  sm:text-lg font-bold mb-6 drop-shadow-md px-2">
          Uncover places you’ve only dreamed of visiting.
        </p>

        {/* FILTER SECTION */}
        <div
          className="
            bg-gray-800 text-white rounded-xl p-4 mt-6 shadow-lg 
            flex flex-wrap gap-4 justify-center 
            w-full max-w-4xl mx-auto
          "
        >
          {/* REGION DROPDOWN */}
          <select
            className="
              px-4 py-4 rounded-lg border 
              w-full sm:w-[45%] md:w-[30%] text-black bg-gray-400
            "
          >
            <option value="" className="text-black">Select Region</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="america">America</option>
            <option value="middle-east">Middle East</option>
            <option value="africa">Africa</option>
          </select>

          {/* TRAVEL TYPE DROPDOWN */}
          <select
            className="
              px-4 py-4 rounded-lg border 
              w-full sm:w-[45%] md:w-[30%] text-black bg-gray-400
            "
          >
            <option value="" className="text-black">Travel Type</option>
            <option value="adventure">Adventure</option>
            <option value="family">Family</option>
            <option value="romantic">Romantic</option>
            <option value="luxury">Luxury</option>
            <option value="solo">Solo</option>
          </select>

          {/* SEARCH BUTTON */}
          <button
            className="
              bg-[rgba(244,156,11,1)] text-white px-6 py-2 rounded-lg text-2xl font-semibold 
              hover:bg-orange-600 transition-all 
              w-full sm:w-[35%] md:w-[20%]
            "
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
