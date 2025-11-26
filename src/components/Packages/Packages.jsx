// FilterPage.jsx
import React from "react";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useFiltersStore } from "../../store/packagesFiltrationsData";

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

export default function FilterPage() {
  const navigate = useNavigate();

  const {
    activeFilter,
    regionFilter,
    priceFilter,
    filteredPackages,
    setActiveFilter,
    setRegionFilter,
    setPriceFilter,
    resetFilters,
  } = useFiltersStore();

  const filters = ["Adventure", "Relaxation", "Cultural", "Family"];
  const regions = ["Asia", "Europe", "America", "Africa", "Middle East"];
  const priceRanges = ["$0 - $500", "$500 - $1000", "$1000 - $2000", "$2000+"];

  return (
    <div className="bg-gray-50  max-w-7xl mx-auto py-10">
      
      {/* Filters Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mb-10 bg-[linear-gradient(183.62deg,#2B2B2B_2.97%,#242424_97.03%)] p-6">
        
        {/* Type Buttons */}
        <div className="flex flex-wrap gap-4">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`font-medium text-lg px-4 py-2 rounded-lg transition ${
                activeFilter === filter
                  ? "bg-[rgba(244,156,11,1)] text-black"
                  : "bg-gray-700 text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Region + Price Filters */}
        <div className="flex flex-wrap gap-4">
          <select
            value={regionFilter}
            onChange={(e) => setRegionFilter(e.target.value)}
            className="px-4 py-2 bg-gray-700 text-white rounded-lg"
          >
            <option value="">Select Region</option>
            {regions.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>

          <select
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
            className="px-4 py-2 bg-gray-700 text-white rounded-lg"
          >
            <option value="">Select Price Range</option>
            {priceRanges.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>

          <button
            onClick={resetFilters}
            className="px-2 py-2 text-white rounded-full bg-gray-700"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {filteredPackages.length > 0 ? (
          filteredPackages.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={item.image}
                alt={item.country}
                className="w-full h-44 object-cover cursor-pointer"
                onClick={() => navigate(`/package/${item.id}`)}
              />

              <div className="p-4">
                <h3 className="text-xl font-semibold">{item.country}</h3>
                <p className="text-gray-600 text-sm mb-2">{item.desc}</p>

                <div className="flex items-center justify-between mt-3">
                  <p className="text-sm text-gray-700">{item.days}</p>
                  <p className="text-lg font-bold text-orange-300">
                    from ${item.price}
                  </p>
                </div>

                <StarRating rating={item.rating} />

                <div className="flex justify-center mt-4">
                  <button
                    onClick={() => navigate(`/package/${item.id}`)}
                    className="mt-3 px-6 bg-[rgba(244,156,11,1)] hover:bg-orange-300 text-white py-2 rounded-lg font-medium transition"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-600 text-lg">
            No packages found for selected filters.
          </p>
        )}
      </div>
    </div>
  );
}








