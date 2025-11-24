import React from "react";

function Planning() {
  return (
    <section className="bg-orange-300 py-20 flex justify-center items-center">
      <div className="text-center max-w-xl px-4">
        
        <h2 className="md:text-4xl text-3xl font-bold text-white mb-4">
          Found your dream destination?
        </h2>

        <p className="text-white text-lg mb-6">
          Let’s make it happen — plan your trip now.
        </p>

        <button className="bg-white text-black text-xl font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300 shadow-md">
          Start Planning
        </button>

      </div>
    </section>
  );
}

export default Planning;
