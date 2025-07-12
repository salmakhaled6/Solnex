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
  { icon: <FaPaintBrush />, text: "	إعداد استراتيجية تسويقية لكل منصة (فيسبوك، إنستجرام، لينكدإن…)  " },
  { icon: <FaMobileAlt />, text: "تصميم وجدولة منشورات أسبوعية بجودة عالية" },
  { icon: <FaGlobe />, text: "التفاعل مع الجمهور والرد على الرسائل والتعليقات" },
  { icon: <FaRocket />, text: "إعداد الحملات الإعلانية المدفوعة" },
  { icon: <FaChartLine />, text: "إدارة حملات الترويج وزيادة المتابعين" },
  { icon: <FaWpforms />, text: "مراقبة التحليلات وتحسين الأداء بناءً على البيانات" },
  { icon: <FaShieldAlt />, text: "إنشاء قصص (Stories) ومحتوى تفاعلي باستمرار" },
  { icon: <FaDatabase />, text: "التعاون مع مؤثرين حسب المجال" },
  { icon: <FaLanguage />, text: "تنظيم مسابقات لزيادة التفاعل" },
  { icon: <FaUserGraduate />, text: "تقارير شهرية شاملة توضح الأداء والتحسينات المطلوبة" },
];

function CardServiceNine() {
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
    إدارة وسائل التواصل الاجتماعي
  <FaRocket className="icon-spin-pause" />
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

export default CardServiceNine
