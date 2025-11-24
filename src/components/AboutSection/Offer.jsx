import React from "react";
import Aeroplane from "../../assets/about_us/aeroplane.svg";
import hotel from "../../assets/about_us/hotel.svg";
import bus from "../../assets/about_us/bus.svg";
import sunrise from "../../assets/about_us/sunrise.svg";
import compass from "../../assets/about_us/compass.svg";
import orange_globe from "../../assets/about_us/orange_globe.svg";

const servicesData = [
  {
    icon: Aeroplane,
    title: "Custom Travel Packages",
    description:
      "Personalized itineraries designed around your preferences, budget, and dream destinations.",
  },
  {
    icon: hotel,
    title: "Hotel & Flight Booking",
    description:
      "Seamless booking experiences with trusted global partners for comfort and convenience.",
  },
  {
    icon: bus,
    title: "Guided Tours",
    description:
      "Expert-led tours that let you explore destinations deeply, safely, and stress-free.",
  },
  {
    icon: sunrise,
    title: "Honeymoon Getaways ",
    description:
      "Romantic escapes crafted to create unforgettable moments with your special someone. ",
  },
  {
    icon: compass,
    title: "Adventure Trips ",
    description:
      "Thrilling outdoor journeys for explorers who crave excitement and new challenges. ",
  },
  {
    icon: orange_globe,
    title: "International Destinations ",
    description:
      "Discover handpicked locations across the globe, curated for every kind of traveler. ",
  },
];

function Services() {
  return (
    <div className="w-full py-16 bg-[rgba(255,246,236,1)]">
      <div className="max-w-6xl mx-auto px-10">
        <h2 className="text-3xl font-bold text-center mb-10">What We Offer</h2>

        {/* FLEX VERSION */}
        <div className="flex flex-wrap justify-center gap-12">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl w-[281px] shadow-md flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <img
                src={service.icon}
                alt={service.title}
                className="w-12 h-12 mb-4"
              />

              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
