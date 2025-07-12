import React, { useState , useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ContactForm from "../Pages/ContactForm";
import './Navbar.css'

function NavBar() {
  const [showContactForm, setShowContactForm] = useState(false);
  const location = useLocation(); 
  const [isHidden, setIsHidden] = useState(false);

  const [isExpanded, setIsExpanded] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsHidden(true);
        setTimeout(() => setIsExpanded(true), 300); 
      } else {
        setIsHidden(false);
        setIsExpanded(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);





  const handleOpenContactForm = () => {
    setShowContactForm(true);
  };

  const handleCloseContactForm = () => {
    setShowContactForm(false);
  };

  return (
    <div className={`navbar ${isHidden ? "hidden" : ""} ${isExpanded ? "expanded" : ""}`}>

      {showContactForm && (
        <div className="contact-form-overlay">
          <ContactForm />
          <button onClick={handleCloseContactForm}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="16" fill="white"/>
              <path d="M16 5.5C10.15 5.5 5.5 10.15 5.5 16C5.5 21.85 10.15 26.5 16 26.5C21.85 26.5 26.5 21.85 26.5 16C26.5 10.15 21.85 5.5 16 5.5ZM16 25C11.05 25 7 20.95 7 16C7 11.05 11.05 7 16 7C20.95 7 25 11.05 25 16C25 20.95 20.95 25 16 25Z" fill="black"/>
              <path d="M20.05 21.25L16 17.2L11.95 21.25L10.75 20.05L14.8 16L10.75 11.95L11.95 10.75L16 14.8L20.05 10.75L21.25 11.95L17.2 16L21.25 20.05L20.05 21.25Z" fill="black"/>
            </svg>
          </button>
        </div>
      )}
      <button className="help-button" onClick={handleOpenContactForm}>
        دعنا نساعدك
      </button>
      <button className="menu-toggle" onClick={toggleMobileMenu}>
  ☰
</button>

      <ul  className={`nav-links ${isMobileMenuOpen ? 'show' : ''}`}>
        <li className={location.pathname === "/contact" ? "active" : ""}>
          <Link to="/contact">تواصل معنا</Link>
        </li>
        <li className={location.pathname === "/price" ? "active" : ""}>
          <Link to="/price">أسعارنا</Link>
        </li>
        <li className={location.pathname === "/work" ? "active" : ""}>
          <Link to="/work">أعمالنا</Link>
        </li>
        <li className={location.pathname === "/services" ? "active" : ""}>
          <Link to="/services">خدماتنا</Link>
        </li>
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">الرئيسية</Link>
        </li>
      </ul>
      <p className="logo">

      </p>
    </div>
  );
}

export default NavBar;
