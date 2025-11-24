import React from "react";

function PlanningSection() {
  return (
    <section className="bg-orange-300 py-20 flex justify-center items-center">
      <div className="text-center max-w-xl px-4">
        
        <h2 className="md:text-4xl text-3xl font-bold text-white mb-4">
          Need help choosing your next destination?
        </h2>

        <p className="text-white text-lg mb-6">
          Get expert recommendations tailored just for you.
        </p>

        <button className="bg-white text-black font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition duration-300 shadow-md">
          Talk to Expert 
        </button>

      </div>
    </section>
  );
}

export default PlanningSection;
