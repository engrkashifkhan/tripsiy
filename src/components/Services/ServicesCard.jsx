import React from "react";
import { Link } from "react-router-dom";
import flightImg from "../../assets/services/aeroplane.svg";
import hotelImg from "../../assets/services/hotel.svg";
import tourImg from "../../assets/services/visa.svg";
import photographyImg from "../../assets/services/orange_globe.svg";
import cruiseImg from "../../assets/services/airport.svg";

const services = [
  {
    id: 1,
    icon: flightImg,
    title: "Flight Booking",
    desc: "Book affordable flights with top airlines worldwide.",
  },
  {
    id: 2,
    icon: hotelImg,
    title: "Hotel Reservations",
    desc: "Find the best hotels with exclusive travel discounts.",
  },
  {
    id: 3,
    icon: tourImg,
    title: "Tour Guide",
    desc: "Experience the best tours with expert travel guides.",
  },
  {
    id: 4,
    icon: photographyImg,
    title: "Travel Photography",
    desc: "Capture your travel moments with professional photographers.",
  },
  {
    id: 5,
    icon: cruiseImg,
    title: "Cruise Trips",
    desc: "Enjoy luxury cruise experiences with top-rated packages.",
  },
];

function ServicesSection() {
  return (
    <div className="py-14 px-4 md:px-10 lg:px-20 bg-[rgba(255,248,243,1)]">
      <div className="flex flex-wrap justify-center gap-8   max-w-7xl mx-auto py-10">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition w-full sm:w-[35%] lg:w-[25%] "
          >
            <div className="flex justify-center mb-4">
              <img
                src={service.icon}
                alt={service.title}
                className="w-[65px] h-[65px] object-contain"
              />
            </div>

            <h3 className="text-xl font-semibold text-center">{service.title}</h3>
            <p className="text-gray-600 text-center mt-2">{service.desc}</p>

            <div className="flex justify-center mt-5">
              <Link to="/contact">
              <button className="bg-[rgba(244,156,11,1)] text-white py-2 px-5 rounded-lg">
                Contact Us for Service
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesSection;
