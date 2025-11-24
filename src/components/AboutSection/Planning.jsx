import React from "react";
import { Link } from "react-router-dom";

function Planning() {
  return (
    <section className="bg-orange-300 py-20 flex justify-center items-center">
      <div className="text-center max-w-xl px-4">
        
        <h2 className="md:text-4xl text-3xl font-bold text-white mb-4">
          Let’s Plan Your Next Adventure Together!
        </h2>

        <p className="text-white text-lg mb-6 ">
          Trusted by travelers to plan seamless, unforgettable trips.
        </p>

        <Link to="/contact">
        <button className="bg-white text-black font-bold px-14 py-4 rounded-lg hover:bg-gray-100 transition duration-300 shadow-md">
          Contact Us
        </button>
        </Link>

      </div>
    </section>
  );
}

export default Planning;
