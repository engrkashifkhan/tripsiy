import React from "react";
import WhiteGlobe from "../../assets/home/white_globe.svg";
import LocationIcon from "../../assets/home/white_clock.svg";
import StarIcon from "../../assets/home/wallet.svg";
import QualityIcon from "../../assets/home/hands_heart.svg";

const features = [
  {
    icon: WhiteGlobe,
    title: "Wide Destinations",
    desc: "Explore beautiful places across the world with Tripsiy.",
  },
  {
     icon: QualityIcon,
    title: "Trusted Service",
    desc: "Enjoy safe, smooth, and reliable travel experiences.",
  },
  {
    icon: StarIcon,
    title: "Best Price Guarantee",
    desc: "Get the best deals and value for every trip.",
  },
  {
    icon: WhiteGlobe,
    title: "24/7 Assistance",
    desc: "We’re here to help you anytime, anywhere.",
  },
];

function SectionWithIcons() {
  return (
    <section className="w-full bg-white py-16 px-6">
      <h1 class="font-poppins font-semibold text-center pb-10 md:pb-18 md:text-[36px] text-[26px] leading-[100%] tracking-[0.5%]"
>Why Choose Tripsiy</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
         <div>
          <img
            src="/features_image.jpg"
            alt="Section visual"
            className="rounded-2xl h-[500px] shadow-lg w-full"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-8">
          {features.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <img src={item.icon} className="w-18 h-18 bg-[rgba(244,156,11,1)] rounded-full p-2" alt="icon" />
              <div>
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="text-gray-600 text-md">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default SectionWithIcons;
