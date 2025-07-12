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
import Lov from '../Components/Lov'
import { useEffect } from "react";
import InfoTwo from '../Components/InfoTwo'
import FloatingIcons from '../Components/FloatingIcons'
import CardService from '../Components/CardService'
import ProjectFive from './ProjectFive'

// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { animateScroll as scroll } from 'react-scroll';



function HomePage() {
  useEffect(() => {
    console.log("Home page loaded");
  }, []);
  return (
    <div>
      <NavBar />
      {/* <CardService /> */}
      {/* <Lov /> */}

      <Carousl />
      <FloatingIcons />
      <Info/>
      <InfoTwo />
   <Services />
      <PartFour />
      <Jobs />
      <ImageSlider />
      <Footer />
     
    </div>
  )
}

export default HomePage
