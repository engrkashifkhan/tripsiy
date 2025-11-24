// import React from "react";
// import { FaPlane, FaUmbrellaBeach, FaHiking, FaShip, FaPassport, FaMountain } from "react-icons/fa";

// export default function CategoriesSection() {
//   const categories = [
//     { icon: <FaPlane size={40} />, title: "Adventure Trips" },
//     { icon: <FaUmbrellaBeach size={40} />, title: "Luxury Escapes" },
//     { icon: <FaHiking size={40} />, title: "Family Vacations" },
//     { icon: <FaShip size={40} />, title: "Honeymoon Specials" },
//     { icon: <FaPassport size={40} />, title: "Nature Retreats" },
//     { icon: <FaMountain size={40} />, title: "Cultural Tours" },
//   ];

//   return (
//     <section className="py-16 bg-gray-100">
//       <div className="text-center mb-10">
//         <h2 class="font-poppins font-semibold md:text-[36px] text-[26px]  leading-[100%] tracking-[0.5%]"
// >Explore by Category</h2>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
//         {categories.map((cat, index) => (
//           <div
//             key={index}
//             className="p-8 flex flex-col items-center 
//                        hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer"
//           >
//             <div className="text-orange-500 mb-4">{cat.icon}</div>
//             <h3 className="text-xl font-semibold">{cat.title}</h3>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }






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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-22">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="p-8 flex flex-col items-center rounded-xl
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
