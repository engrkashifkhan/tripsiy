import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star } from 'lucide-react';

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
              ? 'w-4 h-4 text-yellow-400 fill-yellow-400'
              : 'w-4 h-4 text-gray-300'
          }
        />
      ))}
      <span className="text-sm text-gray-600 ml-1">({rating}/5)</span>
    </div>
  );
}

const AttractionCard = ({ attraction }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/attraction/${attraction.id}`);
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer"
      onClick={handleClick}
    >
      {/* Image */}
      <img
        src={attraction.image}
        alt={attraction.name}
        className="w-full h-44 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{attraction.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{attraction.description}</p>

        {/* Price / Duration */}
        <div className="flex items-center justify-between mt-3">
          <p className="text-sm text-gray-700">
            {attraction.duration ? `${attraction.duration} hrs` : ''}
          </p>
          <p className="text-lg font-bold text-orange-600">
            {attraction.price === 0 ? 'FREE' : `$${attraction.price}`}
          </p>
        </div>

        {/* Rating */}
        <StarRating rating={attraction.rating} />

        {/* Button */}
        <div className="flex justify-center mt-4">
          <button
            onClick={handleClick}
            className="mt-3 px-6 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-medium transition"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default AttractionCard;