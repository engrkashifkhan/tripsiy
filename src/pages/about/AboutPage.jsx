import React from 'react'
import MainSection from '../../components/AboutSection/AboutMainSection'
import Journey from '../../components/AboutSection/Journey'
import Planning from '../../components/AboutSection/Planning'
import Choose from '../../components/AboutSection/Choose'
import Offer from '../../components/AboutSection/Offer'

function AboutPage() {
  return (
    <div>
      <MainSection/>
      <Journey/>
      <Offer/>
      <Choose/>
      <Planning/>
    </div>
  )
}

export default AboutPage
