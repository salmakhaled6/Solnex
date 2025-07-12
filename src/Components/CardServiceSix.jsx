import React from 'react'
import {
  FaRocket,
  FaProjectDiagram,   // تحليل العمليات
  FaServer,           // قواعد البيانات
  FaUserShield,       // نظام صلاحيات
  FaLaptopCode,       // واجهة إدارة
  FaExpandArrowsAlt,  // قابلية التوسع
  FaEdit,             // عمليات الإضافة والتعديل والحذف
  FaChartBar,         // تقارير وتحليلات
  FaPuzzlePiece,      // التكامل مع الأنظمة الأخرى
  FaCloud,            // التخزين السحابي
  FaSave              // النسخ الاحتياطي
} from "react-icons/fa";
import "./CardService.css";
import Footer from './Footer';
import NavBar from "./NavBar";

const services = [
  { icon: <FaProjectDiagram />, text: "تحليل عمليات العمل وتحديد الاحتياجات بدقة" },
  { icon: <FaServer />, text: "تصميم قواعد بيانات مرنة وآمنة" },
  { icon: <FaUserShield />, text: "تصميم نظام متعدد الصلاحيات للمستخدمين" },
  { icon: <FaLaptopCode />, text: "بناء واجهة إدارة سهلة الاستخدام" },
  { icon: <FaExpandArrowsAlt />, text: "تطوير النظام بشكل يسمح بالتوسّع مستقبلًا" },
  { icon: <FaEdit />, text: "دعم عمليات الإضافة والتعديل والحذف بسهولة" },
  { icon: <FaChartBar />, text: "توفير تقارير دورية وتحليلات متقدمة" },
  { icon: <FaPuzzlePiece />, text: "إمكانية التكامل مع تطبيقات أخرى (API)" },
  { icon: <FaCloud />, text: "دعم التخزين السحابي للبيانات" },
  { icon: <FaSave />, text: "إعداد نسخ احتياطية تلقائية" },
];

function CardServiceSix() {
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
    برمجة الأنظمة الألكترونية  <FaRocket className="icon-spin-pause" />
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

export default CardServiceSix
