import React, { useEffect, useState, useRef } from "react";
import "./Footer.css";
import video from "../assets/p.mp4";
import FooterButton from "./FooterButton";

function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState(null);
  const links1 = [
    { label: "الرئيسية", url: "/" },
    { label: "خدماتنا", url: "/services" },
    { label: "تواصل معنا", url: "/contact" },
    { label: "أعمالنا", url: "/work" },
  ];
  
  const links2 = [
    { label: "تابعونا على" },
    { label: "linkedin", url: "https://linkedin.com", className: "linkedin" },
    { label: "facebook", url: "https://facebook.com", className: "facebook" },
    { label: "instagram", url: "https://instagram.com", className: "instagram" },
  ];
  

  const playClickSound = () => {
    console.log("Clicked");
    const audio = new Audio("/sounds/button3.mp3");
    audio.play().catch((err) => console.log("Audio error:", err));
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? "down" : "up";
      setScrollDirection(direction);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="footer-box">
      <div className="footer-box-part1">
        <div className="about-box">
        <ul>
  {links1.map((link, idx) => (
    <li key={idx} onMouseEnter={playClickSound}>
      <a href={link.url}>{link.label}</a>
    </li>
  ))}
</ul>

<ul>
  {links2.map((link, idx) => (
    <li key={idx} onMouseEnter={playClickSound}>
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className={link.className}  
      >
        {link.label}
      </a>
    </li>
  ))}
</ul>


        </div>
        <div className="about-logo">
<FooterButton />


          <p>
            من أول الفكرة لحد ظهور النتائج نترجم{" "}
            <span className="glitch"
            > احتياجاتك</span> إلى حلول رقمية متكاملة تخدم
            أهداف شركتك{" "}
          </p>
        </div>

        <div className="about-description">
        <h5>كن أول من يعرف بعروضنا وأخبارنا</h5>

  <form className="subscribe-form" onSubmit={(e) => e.preventDefault()}>
  <button type="submit" className="subscribe-button">
اشترك الان    </button>
    <input
      type="email"
      placeholder="البريد الاكتروني"
      className="subscribe-input"
      required
    />
  
  </form>
</div>

      </div>
      <div
        className={`footer-box-part2 ${isVisible ? "drop-in" : ""}`}
        ref={footerRef}
      >
        <h2 className="footer-title">
          Solnex
          <span className="top-half">Solnex</span>
          <span className="bottom-half">Solnex</span>
          <span className="subtitle">TECH HOUSE</span>
        </h2>
      </div>


    </div>
  );
}

export default Footer;
