import React from "react";

export default function CardsSection() {
  const cards = [
    {
      title: "Dubai",
      img: "dubai_4.jpg"
    },
    {
      title: "Bali",
      img: "bali_2.jpg"
    },
    {
      title: "Paris",
      img: "paris_3.jpg"
    },
  
  ];

  return (
    <section className="py-16 bg-gray-100 ">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center mb-10">Featured Destinations</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative h-[460px] rounded-xl overflow-hidden shadow-lg bg-cover bg-center"
              style={{ backgroundImage: `url(${card.img})` }}
            >
              {/* Gradient bottom overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

              {/* Bottom Content */}
              <div className="absolute bottom-4 left-4 text-center right-4 text-white">
                <h3 className="text-2xl font-bold">{card.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
