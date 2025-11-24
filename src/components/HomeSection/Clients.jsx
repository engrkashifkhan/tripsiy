import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const people = [
  {
    name: "Markus Stripf",
    profession: "From Pakistan",
    description:
      "Tripsiy made our Dubai trip unforgettable. Everything from hotels to tours was perfectly arranged",
  },
  {
    name: "Sarah Ahmed",
    profession: "From Dubai",
    description:
     "Tripsiy made our Dubai trip unforgettable. Everything from hotels to tours was perfectly arranged do you have ......",
  },
  {
    name: "Michael Smith",
    profession: "From UK",
    description:
      "Tripsiy made our Dubai trip unforgettable. Everything from hotels to tours was perfectly arranged lorem i have .....",
  },
];

export default function TestimonialsCarousel() {
  return (
    <section className="w-full py-12 px-4 md:px-16 bg-gray-50">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
        what our travelers say
      </h2>

      <div className="max-w-4xl mx-auto ">
        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          effect="fade"
          style={{ paddingBottom: 20 }}
        >
          {people.map((p, i) => (
            <SwiperSlide key={i}>
              <div className="bg-gray-50 rounded-2xl p-8 flex flex-col items-center text-center">
                <p class="font-playfair font-medium text-[26px] leading-[100%] tracking-[0.5%] text-center pb-6"
>"{p.description}"</p>

                <h3 className="text-lg text-[rgba(244,156,11,1)] font-semibold">{p.name}</h3>

                <span className="text-sm">{p.profession}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
