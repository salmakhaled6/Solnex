import React from 'react'
import sr1 from  '../assets/images/op1.gif'
import sr2 from  '../assets/images/op2.gif'
import sr3 from  '../assets/images/op3.gif'
import sr4 from  '../assets/images/op4.gif'
import sr5 from  '../assets/images/op5.gif'
import sr6 from  '../assets/images/op6.gif'


import './Services.css'

import {useState ,useEffect} from 'react';

function ServicesCard({ showAll }) {
  const [visibleCards, setVisibleCards] = useState([]);

  const handleScroll = () => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setVisibleCards((prev) => [...new Set([...prev, index])]);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cardsData = [
    { img: sr1, text: "تطوير المتاجر الألكترونية" },
    { img: sr2, text: "تطوير التطبيقات" },
    { img: sr3, text: "تطوير مواقع الويب" },
    { img: sr4, text: "تصميم الهوية البصرية" },
    { img: sr5, text: "الأعلانات المدفوعة" },
    { img: sr6, text: "التسويق بالمحتوى" },
  ];

  const maxCards = window.innerWidth <= 480 && !showAll ? 4 : cardsData.length;

  return (
    <div className="cards">
      {cardsData.slice(0, maxCards).map((card, index) => (
        <div key={index} className={`card ${visibleCards.includes(index) ? "animate-in" : ""}`}>
          <div className="card-img">
            <img src={card.img} alt="" />
          </div>
          <p>{card.text}</p>
        </div>
      ))}
    </div>
  );
}


export default ServicesCard
