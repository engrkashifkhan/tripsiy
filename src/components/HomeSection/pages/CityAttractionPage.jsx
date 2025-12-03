import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
// import useTravelStore from '../store/travelStore';
// import useTravelStore from '../../../store/travelStore';
import useTravelStore from '../../../store/travelstore';
// import AttractionCard from '../components/AttractionCard';
import AttractionCard from '../components/AttractionCard';
// import Header from '../components/Header';

const CityAttractionsPage = () => {
  const { cityName } = useParams();
  const {
    setSelectedCity,
    setSearchQuery,
    setPriceRange,
    setSortBy,
    getFilteredAttractions,
    searchQuery,
    priceRange,
    sortBy,
    selectedCity
  } = useTravelStore();
  
  const attractions = getFilteredAttractions(cityName);
  
  useEffect(() => {
    setSelectedCity(cityName);
  }, [cityName, setSelectedCity]);
  
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  
  const handlePriceChange = (e) => {
    setPriceRange(e.target.value);
  };
  
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };
  
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* <Header /> */}
      
      {/* City Header */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={selectedCity?.image || 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200'}
          alt={cityName}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
        <div className="absolute bottom-8 left-8 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            {cityName?.charAt(0).toUpperCase() + cityName?.slice(1)}
          </h1>
          <p className="text-xl opacity-90">Top attractions and experiences</p>
        </div>
      </div>
      
      {/* Controls Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8 p-6 bg-white rounded-xl shadow-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Results Count */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                {attractions.length} Attractions Found
              </h2>
              <p className="text-gray-600">Explore the best of {cityName}</p>
            </div>
            
            {/* Search */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search attractions..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <svg className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            
            {/* Sort */}
            <div>
              <select
                value={sortBy}
                onChange={handleSortChange}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="rating">Sort by: Rating</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
          
          {/* Price Filters */}
          <div className="mt-6 flex flex-wrap gap-4">
            <button
              onClick={() => setPriceRange('all')}
              className={`px-4 py-2 rounded-full ${priceRange === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              All
            </button>
            <button
              onClick={() => setPriceRange('free')}
              className={`px-4 py-2 rounded-full ${priceRange === 'free' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              Free
            </button>
            <button
              onClick={() => setPriceRange('budget')}
              className={`px-4 py-2 rounded-full ${priceRange === 'budget' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              Budget ($1-50)
            </button>
            <button
              onClick={() => setPriceRange('moderate')}
              className={`px-4 py-2 rounded-full ${priceRange === 'moderate' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              Moderate ($51-150)
            </button>
            <button
              onClick={() => setPriceRange('luxury')}
              className={`px-4 py-2 rounded-full ${priceRange === 'luxury' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              Luxury ($150+)
            </button>
          </div>
        </div>
        
        {/* Attractions Grid */}
        {attractions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {attractions.map((attraction) => (
              <AttractionCard key={attraction.id} attraction={attraction} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">No attractions found</h3>
            <p className="text-gray-500 mb-8">Try adjusting your search or filters</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setPriceRange('all');
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}
        
        {/* Back Button */}
        <div className="mt-12 text-center">
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Cities
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CityAttractionsPage;