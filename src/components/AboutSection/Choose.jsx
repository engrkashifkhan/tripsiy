import React from "react";
import trustfrom from '../../assets/about_us/trust.svg'
import hand_bag from '../../assets/about_us/hand_bag.svg'
import diamond from '../../assets/about_us/diamond.svg'

function Services() {
  const servicesData = [
    {
      id: 1,
      icon: trustfrom,
      title: "Trusted Expertise",
      desc: "Backed by years of travel expertise, we take pride in curating flawless itineraries that bring your dream destinations to life.",
    },
    {
      id: 2,
      icon: diamond,
      title: "Affordable Luxury",
      desc: "Experience premium travel without breaking the bank — we bring you the best stays, flights, and experiences at amazing prices.",
    },
    {
      id: 3,
      icon: hand_bag,
      title: "Seamless Experience",
      desc: "From planning to booking and beyond — we handle every detail so you can enjoy your journey stress-free.",
    },
  ];

  return (
    <div className="w-full py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        
        <h2 className="font-poppins font-semibold text-[36px] leading-[100%] tracking-[0.3%] text-center">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {servicesData.map((item) => (
            <div
              key={item.id}
              className="p-6 flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <img 
                src={item.icon} 
                alt={item.title} 
                className="w-16 h-16 mb-4" 
              />
              
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Services;
