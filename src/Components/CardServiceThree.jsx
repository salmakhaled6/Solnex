import React from 'react'
import carouslVideo from "../assets/video5.mp4";

import {
  FaRocket,
  FaCogs,            // اختيار النظام المناسب
  FaPalette,         // تصميم الواجهات
  FaSitemap,         // تنظيم الفئات وتسهيل البحث
  FaCreditCard,      // أنظمة الدفع
  FaTruck,           // الشحن والتوصيل
  FaTags,            // الكوبونات والخصومات
  FaStar,            // تقييمات العملاء
  FaBoxes,           // إدارة المخزون
  FaFileInvoice,     // الفواتير الأوتوماتيكية
  FaShareAlt         // الربط بوسائل التواصل
} from "react-icons/fa";
import "./CardService.css";
import NavBar from "./NavBar";
import Footer from './Footer';

const services = [
  { icon: <FaCogs />, text: "(WooCommerce، Shopify، Magento…) اختيار النظام المناسب " },
  { icon: <FaPalette />, text: "تصميم واجهات مخصصة متوافقة مع الهوية التجارية" },
  { icon: <FaSitemap />, text: "تنظيم فئات المنتجات وتسهيل البحث" },
  { icon: <FaCreditCard />, text: "(بطاقات، فوري، PayPal…) دعم أنظمة دفع متعددة " },
  { icon: <FaTruck />, text: "ربط المتجر بشركات شحن وتوصيل" },
  { icon: <FaTags />, text: "إعداد كوبونات وخصومات ومتابعة حملات العروض" },
  { icon: <FaStar />, text: "إمكانية إضافة تقييمات العملاء" },
  { icon: <FaBoxes />, text: "إدارة كاملة للمخزون وتنبيهات الكميات المنخفضة" },
  { icon: <FaFileInvoice />, text: "إصدار فواتير أوتوماتيكية للعملاء" },
  { icon: <FaShareAlt />, text: "ربط المتجر بوسائل التواصل لتسهيل التسويق" },
];

function CardServiceThree() {
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
      تصميم المتاجر الإلكترونية  <FaRocket className="icon-spin-pause" />
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

export default CardServiceThree
