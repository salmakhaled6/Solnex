import React, { useEffect, useState } from "react";
import "./Services.css";
import ServicesCard from "./ServicesCard";
import { Link } from "react-router-dom";

function Services() {
  const [showAll, setShowAll] = useState(false);

  const handleShowMore = () => {
    setShowAll(true);
    setTimeout(() => {
      const extraCard = document.querySelector('.card:nth-child(5)');
      extraCard?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".fade-up");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight) {
          el.classList.add("animate-in");
        } else {
          el.classList.remove("animate-in");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="service-box">
      <h2 className="fade-up">الخدمات المتاحة لدينا</h2>
      <p className="fade-up">نقدم لك العديد من الخدمات لتحقيق اهدافك وتعزيز تواجدك</p>

      <ServicesCard showAll={showAll} />

      {!showAll && (
        <div className="btns-container-4">
          <span className="btn-mask-4">عرض المزيد</span>
          <button type="button" name="Hover" onClick={handleShowMore}>
            عرض المزيد
          </button>
        </div>
      )}
    </div>
  );
}

export default Services;
