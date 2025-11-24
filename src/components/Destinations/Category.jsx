import React from "react";

// Import your images
import planeImg from "../../assets/destinations/adventure.svg";
import beachImg from "../../assets/destinations/luxury.svg";
import hikingImg from "../../assets/destinations/family.svg";
import shipImg from "../../assets/destinations/outlined_heart.svg";
import passportImg from "../../assets/destinations/nature.svg";
import mountainImg from "../../assets/destinations/cultural.svg";

export default function CategoriesSection() {
  const categories = [
    { img: planeImg, title: "Adventure Trips" },
    { img: beachImg, title: "Luxury Escapes" },
    { img: hikingImg, title: "Family Vacations" },
    { img: shipImg, title: "Honeymoon Specials" },
    { img: passportImg, title: "Nature Retreats" },
    { img: mountainImg, title: "Cultural Tours" },
  ];

  return (
    <section className="py-16 bg-[rgba(255,248,243,1)]
">
      <div className="text-center mb-10">
        <h2 className="font-poppins font-semibold md:text-[36px] text-[26px] leading-[100%] tracking-[0.5%]">
          Explore by Category
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto md:px-22 px-4">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="p-8 flex flex-col justify-center items-center rounded-xl
                       hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer"
          >
            <img src={cat.img} alt={cat.title} className="w-36 h-36 mb-4 bg-[linear-gradient(314.35deg,#FFE4B5_14.33%,#FFD166_85.69%)] rounded-full p-5"  />

            <h3 className="text-xl font-semibold">{cat.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
