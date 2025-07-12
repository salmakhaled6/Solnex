import { useState ,useEffect } from 'react'

import './App.css'
import Carousl from './Components/Carousl'
import Info from './Components/Info'
import NavBar from './Components/NavBar'
import PartFour
 from './Components/PartFour'
import Jobs from './Components/Jobs'
import ImageSlider from './Components/ImageSlider'
import Footer from './Components/Footer'
import ContactForm from './Pages/ContactForm'
// import ServicesPage from './Pages/ServicesPage'
import HomePage from './Pages/HomePage'
import ScrollToTop from './Components/ScrollToTop'
import ProjectDetails from './Pages/ProjectDetails'
import ContactUs from './Pages/ContactUs'
import OurProjects from './Pages/OurProjects'
import ServiceDetails from './Pages/ServiceDetails'
import ProjectDetailsTwo from './Pages/ProjectDetailsTwo'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lov from './Components/Lov'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProjectDetailsThree from './Pages/ProjectDetailsThree'
import ProjectDetailsFour from './Pages/ProjectDetailsFour'
import ServicesCard from './Components/ServicesCard'
import CardService from './Components/CardService'
import Price from './Pages/Price'
import CardServiceTwo from './Components/CardServiceTwo'
import CardServiceThree from './Components/CardServiceThree'
import CardServiceFour from './Components/CardServiceFour'
import CardServiceFive from './Components/CardServiceFive'
import CardServiceSix from './Components/CardServiceSix'
import CardServiceSeven from './Components/CardServiceSeven'
import CardServiceEghit from './Components/CardServiceEghit'
import CardServiceNine from './Components/CardServiceNine'
import ProjectFive from './Pages/ProjectFive'




function App() {

  return (
    <>
      <Router>
   <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServiceDetails />} />
        <Route path="/Project" element={<ProjectDetails />} />
        <Route path="/work" element={<OurProjects />} />
        <Route path="/info" element={<OurProjects />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path ='/contact-us' element={<ContactForm />}/>
        <Route path='/website3' element={<ProjectDetailsThree />} />
        <Route path='/website1' element={<ProjectDetails />} />
        <Route path='/website2' element={<ProjectDetailsTwo />} />
        <Route path='/website4' element={<ProjectDetailsFour />} />
        <Route path='/website5' element={<ProjectFive />} />

        <Route path ='/form' element={<ContactForm/>} />
        <Route path='/card-service' element={<CardService />} />
        <Route path='/card-service-two' element={<CardServiceTwo />} />
        <Route path='/card-service-three' element={<CardServiceThree />} />
        <Route path='/card-service-Four' element={<CardServiceFour />} />
        <Route path='/card-service-five' element={<CardServiceFive />} />
        <Route path='/card-service-six' element={<CardServiceSix />} />
        <Route path='/card-service-seven' element={<CardServiceSeven />} />
        <Route path='/card-service-eight' element={<CardServiceEghit />} />
        <Route path='/card-service-nine' element={<CardServiceNine />} />






        <Route path='/price' element ={<Price />} />






        

        
      </Routes>
    </Router>

     
    </>
  )
}

export default App
