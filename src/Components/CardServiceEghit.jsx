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
  { icon: <FaChartLine />, text: "تحليل السوق والمنافسين لاختيار كلمات مستهدفة" },
  { icon: <FaRocket />, text: "إنشاء حملات احترافية على Google وMeta وTikTok" },
  { icon: <FaGlobe />, text: "كتابة إعلانات جذابة بصريًا ونصيًا" },
  { icon: <FaWpforms />, text: "تصميم صفحات هبوط (Landing Pages) فعّالة" },
  { icon: <FaDatabase />, text: "تتبع التحويلات (Conversions) بدقة" },
  { icon: <FaShieldAlt />, text: "ادارة الميزانية للحصول على أعلى عائد استثمار" },
  { icon: <FaMobileAlt />, text: "اختبار A/B للحملات وتحسين الأداء" },
  { icon: <FaPaintBrush />, text: "تحسين نقاط الجودة في Google Ads لتقليل التكلفة" },
  { icon: <FaLanguage />, text: "تقارير دورية توضح أداء الحملة وتوصيات التطوير" },
  { icon: <FaUserGraduate />, text: "إعادة استهداف الزوار الذين لم يكملوا العملية الشرائية" },
];

function CardServiceEghit() {
  return (
    <div>
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
    الإعلانات المدفوعة (PPC)  <FaRocket className="icon-spin-pause" />
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

export default CardServiceEghit
