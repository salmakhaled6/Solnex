import React from "react";
import carouslVideo from "../assets/video5.mp4";

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
import NavBar from "./NavBar";
import Footer from "./Footer";

const services = [
  { icon: <FaPaintBrush />, text: "تصميم مواقع ديناميكية أو ثابتة حسب النشاط" },
  { icon: <FaMobileAlt />, text: "تجربة مستخدم سلسة وسريعة الاستجابة" },
  { icon: <FaGlobe />, text: "مواقع متوافقة مع جميع المتصفحات الحديثة" },
  { icon: <FaRocket />, text: "(Page Speed Optimization) تحسين سرعة تحميل الصفحات " },
  { icon: <FaChartLine />, text: "Google Analytics دمج الموقع مع  لتتبع الأداء"  },
  { icon: <FaWpforms />, text: "إنشاء صفحات تفاعلية (نموذج تواصل، استبيانات، إلخ)" },
  { icon: <FaShieldAlt />, text: "(SSL، جدران حماية) حماية الموقع باستخدام بروتوكولات أمان " },
  { icon: <FaDatabase />, text: "توفير باك أب دوري للموقع" },
  { icon: <FaLanguage />, text: "دعم تعدد اللغات إذا لزم الأمر" },
  { icon: <FaUserGraduate />, text: "تدريب العميل على استخدام لوحة التحكم الخاصة بالموقع" },
];

function CardService() {
  return (
    <div> <div className="card-service-glow">
    <NavBar />


    <div className="service-card-p">
    <h6 className="section-title with-icon">
تطوير مواقع الويب
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
   
  );
}

export default CardService;
