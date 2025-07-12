import React, { useState, useEffect } from "react";
import pic from "../assets/images/gif1.gif"
import { Link } from "react-router-dom";
import './Info.css'

function Info() {
  const [showContent, setShowContent] = useState(false);
  const [showImage, setShowImage] = useState(false);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const content = document.querySelector('.info-content');
      const image = document.querySelector('img');

      const rect = content.getBoundingClientRect();
      const imageRect = image.getBoundingClientRect();

      if (imageRect.top <= window.innerHeight) {
        setShowImage(true);
      }

      if (rect.top <= window.innerHeight) {
        setShowContent(true);
      }

     
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="info-box">
      <div className={`info-img ${showImage ? "animate-in" : ""}`}>
        <img src={pic} alt="" />
      
         
      </div>
      <div className={`info-content ${showContent ? "animate-in" : ""}`}>
        <h2>من نحن</h2>
        <p>نحن Solnex، بيت التقنية الذي يصنع الحلول الذكية للمستقبل!</p>
        <p className="p2">أيًّا كانت فكرتك الرقمية، نحن نملك الأدوات والخبرة لتحويلها إلى واقع موقع، تطبيق، متجر أو حتى طريقة مبتكرة لعرض منتجاتك</p>
        <Link to="/work" onClick={handleClick}>
          <div className="btns-container-3">
            <span className="btn-mask-3">عرض المزيد</span>
            <button type="button" name="Hover">عرض المزيد</button>
          </div>
        </Link>
      </div>

    </div>
  );
}

export default Info;
