import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star } from 'lucide-react';
import { useActivityStore } from '../../../../store/singapore';

// ⭐ Rating component
function StarRating({ rating }) {
  const total = 5;
  const filled = Math.round(rating);

  return (
    <div className="flex items-center gap-1 mt-2">
      {[...Array(total)].map((_, i) => (
        <Star
          key={i}
          className={
            i < filled
              ? "w-4 h-4 text-yellow-400 fill-yellow-400"
              : "w-4 h-4 text-gray-300"
          }
        />
      ))}
      <span className="text-sm text-gray-600 ml-1">({rating}/5)</span>
    </div>
  );
}

const ActivityCard = ({ activity }) => {
  const navigate = useNavigate();
  const { selectActivity } = useActivityStore();

  const handleCardClick = () => {
    selectActivity(activity.id);
    navigate(`/activity/${activity.id}`);
  };

  const handleButtonClick = (e) => {
    e.stopPropagation();
    selectActivity(activity.id);
    navigate(`/activity/${activity.id}`);
  };

  return (
    <div
      className="bg-white shadow-md rounded-xl max-w-7xl overflow-hidden hover:shadow-xl transition cursor-pointer"
      onClick={handleCardClick}
    >
      {/* IMAGE */}
      <img
        src={activity.image}
        alt={activity.name}
        className="w-full h-48 object-cover"
      />

      {/* CONTENT */}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{activity.name}</h3>

        <p className="text-gray-600 text-sm mb-2">
          {activity.category} • {activity.duration}
        </p>

        <div className="flex items-center justify-between mt-3">
          <p className="text-lg font-bold text-orange-400">
            {activity.price > 0 ? `AED ${activity.price}` : "FREE"}
          </p>

          <p className="text-sm text-gray-700">
            {activity.reviews.toLocaleString()} reviews
          </p>
        </div>

        <StarRating rating={activity.rating} />

        <button
          className="mt-4 w-full bg-orange-400 hover:bg-orange-500 text-white py-2 rounded-lg transition"
          onClick={handleButtonClick}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ActivityCard;

