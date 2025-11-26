import React from "react";
import { useNavigate } from "react-router-dom";
import { Star } from "lucide-react";

// Star rating component
function StarRating({ rating }) {
  const totalStars = 5;
  const filledStars = Math.round(rating);

  return (
    <div className="flex items-center gap-1 mt-2">
      {[...Array(totalStars)].map((_, i) => (
        <Star
          key={i}
          className={
            i < filledStars
              ? "w-4 h-4 text-yellow-400 fill-yellow-400"
              : "w-4 h-4 text-gray-300"
          }
        />
      ))}
      <span className="text-sm text-gray-600 ml-1">({rating}/5)</span>
    </div>
  );
}

function PackagesSection() {
  const navigate = useNavigate();

  const packages = [
    {
      id: 101, // CHANGED to match PackageDetails.jsx homepagePackagesData
      img: "/dubai_2.jpg",
      name: "Dubai City Tour",
      days: "3 Days / 2 Nights",
      price: "499",
      rating: 4.8,
      desc: "Experience the luxury and modern marvels of Dubai",
      country: "Dubai"
    },
    {
      id: 102, // CHANGED to match PackageDetails.jsx homepagePackagesData
      img: "/bali_2.jpg",
      name: "Luxury Island Escape",
      days: "5 Days / 4 Nights",
      price: "1999",
      rating: 4.7,
      desc: "Relax in the tropical paradise of Bali",
      country: "Bali"
    },
    {
      id: 103, // CHANGED to match PackageDetails.jsx homepagePackagesData
      img: "/cappadocia_2.jpg",
      name: "Hot Air Balloon Experience",
      days: "4 Days / 3 Nights",
      price: "1299",
      rating: 4.9,
      desc: "Magical hot air balloon experience in Turkey",
      country: "Cappadocia"
    },
    {
      id: 104, // CHANGED to match PackageDetails.jsx homepagePackagesData
      img: "/greece_1.jpg",
      name: "Romantic Greek Getaway",
      days: "5 Days / 4 Nights",
      price: "1799",
      rating: 4.6,
      desc: "Experience the beauty of Greek islands",
      country: "Greece"
    },
  ];

  const handleCardClick = (packageId) => {
    console.log('Navigating to package ID:', packageId);
    navigate(`/package/${packageId}`);
  };

  const handleViewDetails = (e, packageId) => {
    e.stopPropagation();
    console.log('View details for package ID:', packageId);
    navigate(`/package/${packageId}`);
  };

  return (
    <section className="w-full bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-3xl font-bold mb-10">
          Featured Packages
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition cursor-pointer"
              onClick={() => handleCardClick(item.id)}
            >
              {/* Image */}
              <img 
                src={item.img} 
                alt={item.name} 
                className="w-full h-58 object-cover" 
              />

              {/* Content */}
              <div className="px-5 py-3 pb-5">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-600">{item.days}</p>
                <p className="text-gray-500 text-sm mt-1">{item.desc}</p>

                {/* Star Rating */}
                <StarRating rating={item.rating} />

                {/* Starting from + Price */}
                <p className="pt-3 text-lg font-semibold">
                  <span className="text-gray-500">Starting from </span>
                  <span className="text-[rgba(244,156,11,1)]">${item.price}</span>
                </p>

                {/* Center Button */}
                <div className="flex justify-center">
                  <button 
                    onClick={(e) => handleViewDetails(e, item.id)}
                    className="mt-3 px-6 bg-[rgba(244,156,11,1)] hover:bg-orange-300 text-white py-2 rounded-lg font-medium transition"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PackagesSection;