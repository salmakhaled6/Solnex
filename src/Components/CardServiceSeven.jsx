import React from 'react'
import {
  FaPaintBrush,
  FaMobileAlt,
  FaGlobe,
  FaRocket,
  FaChartLine,
  FaWpforms,
  FaShieldAlt,
  FaDatabase,
  FaLanguage,
  FaUserGraduate,
} from "react-icons/fa";
import "./CardService.css";
import Footer from './Footer';
import NavBar from "./NavBar";

const services = [
  { icon: <FaChartLine />, text: "دراسة نشاط العميل وتحليل السوق المستهدف" },
  { icon: <FaPaintBrush />, text: "تصميم شعار احترافي قابل للاستخدام في جميع الوسائط" },
  { icon: <FaGlobe />, text: "اختيار الألوان والخطوط المناسبة للعلامة التجارية" },
  { icon: <FaWpforms />, text: "تصميم الكروت الشخصية، الأوراق الرسمية، والأظرف" },
  { icon: <FaMobileAlt />, text: "تصميم واجهات السوشيال ميديا بما يعكس البصمة البصرية" },
  { icon: <FaRocket />, text: "إعداد دليل استخدام شامل للهوية البصرية" },
  { icon: <FaShieldAlt />, text: "توفير نسخ للطباعة ونسخ رقمية بدقة عالية" },
  { icon: <FaDatabase />, text: "الحفاظ على تناسق الهوية عبر جميع المواد التسويقية" },
  { icon: <FaLanguage />, text: "تطوير الهوية الحالية لتواكب الاتجاهات الحديثة" },
  { icon: <FaUserGraduate />, text: "تقديم أكثر من نموذج وتصميم بناءً على ملاحظاتك" },
];


function CardServiceSeven() {
  return (
    <div >
       <div className="card-service-glow">
    <NavBar />
    {/* <video
      autoPlay
      loop
      muted
      playsInline
      className="background-video"
      onLoadedMetadata={(e) => (e.target.playbackRate = 0.5)}
    >
      <source src={carouslVideo} type="video/mp4" />
    </video> */}

    <div className="service-card-p">
    <h6 className="section-title with-icon">
    تصميم الهوية البصرية   <FaRocket className="icon-spin-pause" />
</h6>

      <div className="service-cards-container">
        <div className="asymmetric-cards-layout">
          <div className="left-column">
            {services
              .filter((_, index) => index % 2 === 0)
              .map((service, index) => (
                <div
                  key={index}
                  className="numbered-service-card fade-in-left"
                  style={{ animationDelay: `${index * 0.4}s` }}
                >
                  <div className="icon-large">{service.icon}</div>
                  <p className="numbered-service-text">{service.text}</p>
                </div>
              ))}
          </div>

          <div className="right-column">
            {services
              .filter((_, index) => index % 2 !== 0)
              .map((service, index) => (
                <div
                  key={index}
                  className="numbered-service-card fade-in-right"
                  style={{ animationDelay: `${index * 0.4 + 0.2}s` }}
                >
                  <div className="icon-large">{service.icon}</div>
                  <p className="numbered-service-text">{service.text}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
    </div>
   
  )
}

export default CardServiceSeven
