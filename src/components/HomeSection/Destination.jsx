import React from "react";
import { Link } from "react-router-dom";

export default function CardsSection() {
  const cards = [
    {
      title: "Bali",
      desc: "Tropical Bliss Awaits",
      img: "/bali_1.jpg"
    },
    {
      title: "Cappadocia",
      desc: "Elegance Above the Clouds.",
      img: "/cappadocia_1.jpg"
    },
    {
      title: "Paris",
      desc: "The Art of Love and Luxury",
      img: "/paris_1.jpg"
    },
     {
      title: "Dubai",
      desc: "Desert Gold and City Lights",
      img: "/dubai_1.jpg"
    },
    {
      title: "Maldives",
      desc: "Paradise in Every Wave",
      img: "/maldives_1.jpg"
    },
    {
      title: "Kyoto",
      desc: "Traditional Draped in Tranquility",
      img: "/kyoto_1.jpg"
    }
  ];

  return (
    <section className="py-16 bg-gray-100 ">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="md:text-4xl text-3xl font-bold text-center mb-2">Popular Destinations</h2>
         <h4 className="text-xl   text-center mb-10"> Explore the most loved travel spots this season.</h4>
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
  key={index}
  className="relative h-100 rounded-xl overflow-hidden shadow-lg bg-cover bg-center"
  style={{ backgroundImage: `url(${card.img})` }}
>
  {/* Gradient bottom overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

  {/* Bottom Content */}
  <div className="absolute bottom-4 left-4 right-4 text-white">
    <h3 className="text-3xl font-bold">{card.title}</h3>
    <p className="text-md mt-1 mb-3">{card.desc}</p>

    {/* Center Button */}
    <div className="flex justify-center">
      <Link to={'/packages'}>
      <button className="px-10  py-2 bg-[rgba(244,156,11,1)] hover:bg-orange-400 rounded-md text-sm font-semibold transition">
        View Packages
      </button>
      </Link>
    </div>
  </div>
</div>
    ))}
        </div>
      </div>
    </section>
  );
}
