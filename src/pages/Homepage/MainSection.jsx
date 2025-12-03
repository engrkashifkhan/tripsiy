import React from 'react'
import MainPage from "../../components/HomeSection/MainPage";
// import Destination from "../../components/HomeSection/Destination";
import Planning from '../../components/HomeSection/Planning';
import Clients from '../../components/HomeSection/Clients';
import Choose from '../../components/HomeSection/Choose'
import Packages from '../../components/HomeSection/Packages';
import Home from '../../components/HomeSection/pages/Home';
import ActivityCarousel from '../../components/HomeSection/activityindubai/components/ActivityCarusel';
// import ActivityCarousels from '../../components/HomeSection/activityindubai/components/ActivityCarusel';
// import ActivityCarousels from '../../components/HomeSection/activityinabudhabi/components/ActivityCarusel';
import ActivityCarousels from '../../components/HomeSection/activityinabudhabi/components/ActivityCarusel'
import ActivityCarouseler from '../../components/HomeSection/activityinsingapore/components/ActivityCarusel';
import ActivityCarouseling from '../../components/HomeSection/activityinRasalKhaimaih/components/ActivityCarusel';




function Main() {
  return (
    <div>
      <MainPage/>
      {/* <Destination/> */}
      <Home/>
      <ActivityCarousel/>
      <ActivityCarousels/>
      <ActivityCarouseler/>
      <ActivityCarouseling/>
      <Packages/>
      <Choose/>
      <Clients/>
      <Planning/>
    </div>
  )
}

export default Main



