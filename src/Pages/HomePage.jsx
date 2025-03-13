import React from 'react'
import Carousl from '../Components/Carousl'
import Footer from '../Components/Footer'
import ImageSlider from '../Components/ImageSlider'
import Info from '../Components/Info'
import Jobs from '../Components/Jobs'
import NavBar from '../Components/NavBar'
import PartFour from '../Components/PartFour'
import Services from '../Components/Services'
import './Home.css'

function HomePage() {
  return (
    <div>
        <NavBar />
      <Carousl />
      <Info/>
      <Services />
      <PartFour />
      <Jobs />
      <ImageSlider />
      <Footer />
    </div>
  )
}

export default HomePage
