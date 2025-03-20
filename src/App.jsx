import { useState } from 'react'

import './App.css'
import Carousl from './Components/Carousl'
import Info from './Components/Info'
import NavBar from './Components/NavBar'
import Services from './Components/Services'
import PartFour
 from './Components/PartFour'
import Jobs from './Components/Jobs'
import ImageSlider from './Components/ImageSlider'
import Footer from './Components/Footer'
import ContactForm from './Pages/ContactForm'
// import ServicesPage from './Pages/ServicesPage'
import HomePage from './Pages/HomePage'
import ProjectDetails from './Pages/ProjectDetails'
import ContactUs from './Pages/ContactUs'
import OurProjects from './Pages/OurProjects'
import ServiceDetails from './Pages/ServiceDetails'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
  
      <Router>
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServiceDetails />} />
        <Route path="/Project" element={<ProjectDetails />} />
        <Route path="/work" element={<OurProjects />} />
        <Route path="/info" element={<OurProjects />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path ='/contact-us' element={<ContactForm />}/>



        

        
      </Routes>
    </Router>
{/*    
      <HomePage />
      <ServiceDetails />
      <ContactForm /> 
      <ProjectDetails />
       <ContactUs />
      
      <OurProjects /> */}
     
    </>
  )
}

export default App
