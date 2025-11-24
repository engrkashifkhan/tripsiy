import React from 'react'
import DestinationsHeroSection from '../../components/Destinations/DestinationsHeroSection'
import Destinations from '../../components/Destinations/Destinations'
import Planning from '../../components/Destinations/PLanning'
import FeaturedDestination from '../../components/Destinations/FeaturedDestination'
import Category from '../../components/Destinations/Category'

function DestinationsPage() {
  return (
    <div>
      <DestinationsHeroSection/>
      <Destinations/>
      {/* <DestinationPackages/> */}
      <FeaturedDestination/>
      <Category/>
      <Planning/>
    </div>
  )
}

export default DestinationsPage
