import React, { useEffect } from "react";
import { usePackagesStore } from "../../store/usePackagesStore";
import { Link } from "react-router-dom";

function PackagesSection() {
  const packages = [
    {
      id: 1,
      img: "/srilanka.jpg",
      name: "Sri Lanka",
      days: "Golden coasts, lush tea hills, and cultural wonders — an island full of surprises.",
      region: "asia",
      type: "family",
    },
    {
      id: 2,
      img: "/newyork.jpg",
      name: "New York",
      days: "The city that never sleeps — iconic landmarks and endless energy.",
      region: "america",
      type: "adventure",
    },
    {
      id: 3,
      img: "/istanbul.jpg",
      name: "Istanbul",
      days: "Where East meets West — vibrant bazaars & timeless charm.",
      region: "middle-east",
      type: "romantic",
    },
    {
      id: 4,
      img: "/switzerland.jpg",
      name: "Switzerland",
      days: "Snowy peaks, serene lakes — Europe’s ultimate fairytale.",
      region: "europe",
      type: "luxury",
    },
    {
      id: 5,
      img: "/bali_3.jpg",
      name: "Bali",
      days: "Tropical paradise filled with beauty and tranquility.",
      region: "asia",
      type: "romantic",
    },
    {
      id: 6,
      img: "/dubai_3.jpg",
      name: "Dubai",
      days: "Luxury, skylines, and desert adventures.",
      region: "middle-east",
      type: "luxury",
    },
    {
      id: 7,
      img: "/kenya.jpg",
      name: "Kenya",
      days: "Wild safari adventures — Africa’s heart.",
      region: "africa",
      type: "adventure",
    },
    {
      id: 8,
      img: "/paris_2.jpg",
      name: "Paris",
      days: "Romance, art, and café culture.",
      region: "europe",
      type: "romantic",
    },
    {
      id: 9,
      img: "/egypt.jpg",
      name: "Egypt",
      days: "Ancient wonders and golden deserts.",
      region: "africa",
      type: "family",
    },
    {
      id: 10,
      img: "/australia.jpg",
      name: "Australia",
      days: "Cities, beaches, wildlife — endless adventure.",
      region: "america",
      type: "solo",
    },
    {
      id: 11,
      img: "/thailand_1.jpg",
      name: "Thailand",
      days: "Beaches, temples, culture — all in one.",
      region: "asia",
      type: "family",
    },
    {
      id: 12,
      img: "/kyoto_2.jpg",
      name: "Kyoto",
      days: "Temples, gardens — the beauty of Japan.",
      region: "asia",
      type: "luxury",
    },
  ];

  const { region, travelType, setRegion, setTravelType, filteredPackages, filterPackages } =
    usePackagesStore();

  // Load all packages by default
  useEffect(() => {
    filterPackages(packages);
  }, []);

  return (
    <section className="w-full bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-4xl font-bold mb-10">
          Destinations
        </h2>

        {/* Filters */}
        <div className="bg-transparent text-black rounded-xl p-4 my-8  
                        flex flex-wrap gap-4 justify-center 
                        w-full max-w-4xl mx-auto">

          {/* Region Filter */}
          <select
            className="px-4 py-4 rounded-lg bg-gray-300 
                       w-full sm:w-[35%] md:w-[20%]"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
          >
            <option value="">Select Region</option>
            <option value="">All Region</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="america">America</option>
            <option value="middle-east">Middle East</option>
            <option value="africa">Africa</option>
          </select>

          {/* Travel Type */}
          <select
            className="px-4 py-4 bg-gray-300 rounded-lg  
                       w-full sm:w-[45%] md:w-[30%]"
            value={travelType}
            onChange={(e) => setTravelType(e.target.value)}
          >
            <option value="">Travel Type</option>
             <option value="">All Type</option>
            <option value="adventure">Adventure</option>
            <option value="family">Family</option>
            <option value="romantic">Romantic</option>
            <option value="luxury">Luxury</option>
            <option value="solo">Solo</option>
          </select>

          {/* Search Button */}
          <button
            onClick={() => filterPackages(packages)}
            className="bg-[rgba(244,156,11,1)] text-white px-6 py-4 rounded-lg font-semibold 
                       hover:bg-orange-300 transition-all 
                       w-full sm:w-[35%] md:w-[20%]"
          >
            Search
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredPackages.length > 0 ? (
            filteredPackages.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
              >
                <img src={item.img} alt={item.name} className="w-full h-48 object-cover" />

                <div className="p-5">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-gray-600">{item.days}</p>

                  <Link className="flex justify-center items-center" to={`/packages`}>
                  <button className=" mt-3 px-6 bg-[rgba(244,156,11,1)] hover:bg-orange-300 text-white py-2 rounded-lg font-medium transition">
                    View Packages
                  </button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-600 text-lg">
              No packages found for selected filters.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default PackagesSection;
