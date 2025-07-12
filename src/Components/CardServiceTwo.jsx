import React from 'react'
import carouslVideo from "../assets/video5.mp4";

import {
  FaRocket,

  FaTasks,         // تحليل المتطلبات
  FaPalette,       // تصميم الواجهات
  FaCode,          // برمجة التطبيقات
  FaDatabase,      // ربط بقاعدة بيانات
  FaMoneyCheckAlt, // الدفع الإلكتروني
  FaBell,          // الإشعارات
  FaChartBar,      // لوحة تحكم وتحليل بيانات
  FaLanguage,      // دعم لغات متعددة
  FaCloudUploadAlt,// رفع التطبيق للمتاجر
  FaLifeRing       // دعم فني وصيانة
} from "react-icons/fa";
import "./CardService.css";
import NavBar from "./NavBar";
import Footer from './Footer';

const services = [
  { icon: <FaTasks />, text: "تحليل متطلبات المشروع وتحديد أهداف التطبيق" },
  { icon: <FaPalette />, text: "تصميم واجهات جذابة (UI) وتجربة استخدام مرنة (UX)" },
  { icon: <FaCode />, text: "برمجة التطبيقات باستخدام أحدث التقنيات (Flutter, React Native, Swift, Kotlin)" },
  { icon: <FaDatabase />, text: "ربط التطبيق بقاعدة بيانات قوية وآمنة" },
  { icon: <FaMoneyCheckAlt />, text: "دعم عمليات الدفع داخل التطبيق" },
  { icon: <FaBell />, text: "إرسال إشعارات Push Notifications للمستخدمين" },
  { icon: <FaChartBar />, text: "إنشاء لوحة تحكم لمراقبة وتحليل بيانات التطبيق" },
  { icon: <FaLanguage />, text: "دعم التطبيقات بأكثر من لغة" },
  { icon: <FaCloudUploadAlt />, text: "App Store و Google Play رفع التطبيق على متاجر " },
  { icon: <FaLifeRing />, text: "تقديم دعم فني وصيانة بعد الإطلاق" },
];

function CardServiceTwo() {
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
      تطوير التطبيقات  <FaRocket className="icon-spin-pause" />
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

export default CardServiceTwo
