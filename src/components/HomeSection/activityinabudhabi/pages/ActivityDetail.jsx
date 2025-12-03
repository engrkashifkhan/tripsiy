// ActivityDetail.jsx
import React from 'react'; 
import { useParams, useNavigate } from 'react-router-dom';
import { 
  StarIcon, 
  MapPinIcon, 
  ClockIcon, 
  CheckCircleIcon,
  ArrowLeftIcon 
} from '@heroicons/react/24/solid';
// import { useActivityStore } from '../../../../store/bestactivitiesinabudhabi';
import { useActivityStore } from '../../../../store/AbuDhabi';


const ActivityDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getActivityById } = useActivityStore();
  
  // CRITICAL FIX: Removed parseInt() here, relying on the store's getActivityById logic
  const activity = getActivityById(id);

  // Removed useEffect for clearSelectedActivity

  if (!activity) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Activity not found</h2>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Back to Activities
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200"
        >
          <ArrowLeftIcon className="w-5 h-5 mr-2" />
          Back to Activities
        </button>
      </div>

      {/* Hero Section */}
      <div className="relative h-96">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${activity.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-end pb-8">
          <div className="text-white">
            <div className="flex items-center space-x-4 mb-4">
              <span className="bg-blue-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
                {activity.category}
              </span>
              {activity.recommended && (
                <span className="bg-red-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
                  Recommended
                </span>
              )}
            </div>
            
            <h1 className="text-5xl font-bold mb-4">{activity.name}</h1>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <StarIcon className="w-6 h-6 text-yellow-400 mr-2" />
                <span className="text-xl font-semibold">{activity.rating}</span>
                <span className="ml-2 text-gray-200">({activity.reviews.toLocaleString()} reviews)</span>
              </div>
              
              <div className="flex items-center">
                <MapPinIcon className="w-5 h-5 mr-2" />
                <span>{activity.location}</span>
              </div>
              
              <div className="flex items-center">
                <ClockIcon className="w-5 h-5 mr-2" />
                <span>{activity.duration}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">About this activity</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {activity.description}
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activity.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">What's Included</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activity.included.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-2xl shadow-xl p-6">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600">Price per person</span>
                  <span className="text-3xl font-bold text-blue-600">
                    {activity.price > 0 ? `AED ${activity.price}` : 'FREE'}
                  </span>
                </div>
                {activity.price > 0 && (
                  <p className="text-sm text-gray-500">+ AED 20 service fee</p>
                )}
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b">
                  <span className="text-gray-700">Duration</span>
                  <span className="font-semibold">{activity.duration}</span>
                </div>
                
                <div className="flex items-center justify-between py-3 border-b">
                  <span className="text-gray-700">Category</span>
                  <span className="font-semibold">{activity.category}</span>
                </div>
                
                <div className="flex items-center justify-between py-3 border-b">
                  <span className="text-gray-700">Rating</span>
                  <div className="flex items-center">
                    <StarIcon className="w-5 h-5 text-yellow-400 mr-1" />
                    <span className="font-semibold">{activity.rating}</span>
                  </div>
                </div>
              </div>

              <button className="w-full mt-8 bg-blue-600 text-white font-semibold py-4 rounded-xl hover:bg-blue-700 transition-colors duration-200 text-lg">
                Book Now
              </button>

              <p className="text-center text-sm text-gray-500 mt-4">
                Free cancellation up to 24 hours before
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetail;