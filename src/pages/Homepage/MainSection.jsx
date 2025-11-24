import React from 'react'
import MainPage from "../../components/HomeSection/MainPage";
import Destination from "../../components/HomeSection/Destination";
import Planning from '../../components/HomeSection/Planning';
import Clients from '../../components/HomeSection/Clients';
import Choose from '../../components/HomeSection/Choose'
import Packages from '../../components/HomeSection/Packages';


function Main() {
  return (
    <div>
      <MainPage/>
      <Destination/>
      <Packages/>
      <Choose/>
      <Clients/>
      <Planning/>
    </div>
  )
}

export default Main
