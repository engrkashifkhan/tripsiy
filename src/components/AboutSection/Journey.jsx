import React from "react";
import { CheckCircle, Star, MapPin } from "lucide-react"; // example icons

function Journey() {
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE IMAGE */}
        <div>
          <img
            src="/journey_img.jpg" 
            alt="Section visual"
            className="w-[550px] h-[500px] top-[756px] left-[97px] opacity-100 rounded-[16px]"
          />
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div>
            <h1 className=" text-center py-10 font-poppins font-semibold text-[36px] leading-[100%] tracking-[0.3%]">Our Journey</h1>
            <h1 className="text-3xl font-poppins font-medium text-[24px] leading-[100%] tracking-[0.3%]">Founded in Dubai, Tripsiy was born from a simple idea — to make travel planning effortless, exciting, and reliable. From local adventures to international escapes, our team ensures that every trip is crafted with care and authenticity.</h1>
            <h1 className="text-3xl pt-4 font-poppins font-semibold italic text-[24px] leading-[100%] tracking-[0.3%] text-orange-300">We believe travel isn’t just about places — it’s about people, memories, and stories.</h1>

        </div>
      </div>
    </section>
  );
}

export default Journey;
