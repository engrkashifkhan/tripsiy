import React from 'react';
// import CitySlider from '../components/CitySlider';
import CitySlider from '../components/CitySlider';
import { Compass, Globe, Award, Users } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* City Slider Section */}
      <section className="py-16">
        <div className="mx-auto px-4">
          <CitySlider />
        </div>
      </section>
    </div>
  );
};

export default Home;