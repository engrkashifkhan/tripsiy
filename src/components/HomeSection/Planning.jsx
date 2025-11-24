import React from "react";

function PlanningSection() {
  return (
    <section className="bg-orange-300 py-20 flex justify-center items-center">
      <div className="text-center max-w-xl px-4">
        
        <h2 className="text-4xl font-bold text-white mb-4">
          Ready for your next adventure?
        </h2>

        <p className="text-white text-xl mb-6">
          Plan your dream trip with expert guidance and unbeatable deals.
        </p>

        <button className="bg-white text-black font-semibold px-6 py-4 shadow rounded-lg hover:bg-gray-100 transition duration-300 shadow-md">
          Start Planning Now
        </button>

      </div>
    </section>
  );
}

export default PlanningSection;
