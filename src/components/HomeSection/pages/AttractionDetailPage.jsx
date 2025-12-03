import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useTravelStore from '../../../store/travelstore';

const AttractionDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { selectedAttraction, setSelectedAttraction } = useTravelStore();

  useEffect(() => {
    setSelectedAttraction(parseInt(id));
  }, [id, setSelectedAttraction]);

  if (!selectedAttraction) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h2 className="text-xl text-gray-700">Loading attraction...</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Image */}
      <div className="relative w-full h-[420px]">
        <img
          src={selectedAttraction.image}
          alt={selectedAttraction.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 bg-white/80 hover:bg-white text-gray-800 px-4 py-2 rounded-full shadow"
        >
          ← Back
        </button>

        {/* Price */}
        <div className="absolute bottom-6 right-6 bg-white/90 px-5 py-2 rounded-xl shadow">
          <span className="text-2xl font-bold text-blue-600">
            {selectedAttraction.price === 0 ? "FREE" : `$${selectedAttraction.price}`}
          </span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* Title & Rating */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-gray-800">{selectedAttraction.name}</h1>

          <div className="flex items-center mt-3">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${i < Math.floor(selectedAttraction.rating) ? "fill-current" : "text-gray-300"}`}
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
                </svg>
              ))}
            </div>
            <span className="ml-3 text-gray-700 font-semibold text-lg">
              {selectedAttraction.rating}
            </span>
            <span className="ml-2 text-gray-500">
              ({selectedAttraction.reviews.toLocaleString()} reviews)
            </span>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-10">
          <p className="text-gray-600 leading-relaxed text-lg">
            {selectedAttraction.description}
          </p>
        </div>

        {/* Quick Facts & Booking */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Quick Facts */}
          <div className="col-span-2 bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Location</h2>

            <div className="flex items-center text-gray-700">
              <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {selectedAttraction.city}
            </div>
          </div>

          {/* Book Now Box */}
          <div className="bg-blue-600 text-white rounded-2xl p-6 flex flex-col justify-between shadow-md">
            <div>
              <h3 className="text-2xl font-bold mb-2">Ready to Visit?</h3>
              <p className="text-blue-100">Book your visit now and enjoy an unforgettable experience.</p>
            </div>

            <button className="mt-6 w-full bg-white text-blue-600 font-semibold py-3 rounded-xl hover:bg-gray-100 transition">
              Book Now
            </button>
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-14">
          <h2 className="text-2xl font-bold mb-4">What to Expect</h2>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Breathtaking views and photo opportunities
              </li>

              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Guided tours available in multiple languages
              </li>

              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Family-friendly environment
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AttractionDetailPage;
