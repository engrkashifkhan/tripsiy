import React from "react";
import { Link } from "react-router-dom";
export default function OfferSection() {
  const offers = [
    {
      id: 1,
      title: "Summer in Santorini — 20% Off!",
      description:
        "Limited-time offer valid till July 31.",
      image: "/greece_2.jpg",
    },
    {
      id: 2,
      title: "Maldives Honeymoon Escape — 15% Off",
      description:
        "Enjoy beachfront villas with romantic private dinners.",
      image: "/maldives_2.jpg",
    },
    // Add more offers here
  ];

  return (
    <section className="w-full py-10 px-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="relative h-[200px] md:h-[270px] w-full bg-cover bg-center rounded-xl shadow-lg"
            style={{ backgroundImage: `url('${offer.image}')` }}
          >
            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/40 rounded-xl"></div>

            {/* CENTER TEXT */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
              <h2 className="font-poppins font-semibold text-[28px] leading-[100%] tracking-[0.5%] mb-3">{offer.title}</h2>
              <p className="text-sm text-orange-100 md:text-base mb-4 max-w-md">{offer.description}</p>
             <Link to="/contact">
              <button className="bg-white hover:bg-orange-100 text-black transition px-6 py-2 rounded-lg font-semibold">
                Book Now
              </button>
             </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
