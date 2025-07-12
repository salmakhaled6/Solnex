import React from "react";
import {
  FaRocket,
  FaCalendarAlt,
  FaPenFancy,
  FaVideo,
  FaImages,
  FaComments,
  FaRecycle,
  FaChartPie, // تحليل الأداء
  FaUserPlus, // جذب العملاء المحتملين
  FaHandshake, // بناء الثقة
  FaRoute, // تغطية رحلة العميل
} from "react-icons/fa";
import "./CardService.css";
import Footer from "./Footer";
import NavBar from "./NavBar";

const services = [
  { icon: <FaCalendarAlt />, text: "إنشاء خطة محتوى شهرية مناسبة لهدفك" },
  {
    icon: <FaPenFancy />,
    text: "كتابة مقالات احترافية ومدروسة للكلمات المفتاحية",
  },
  { icon: <FaVideo />, text: "إنشاء فيديوهات قصيرة ومؤثرة لجذب الانتباه" },
  {
    icon: <FaImages />,
    text: "تصميم منشورات وإنفوجرافيك جذابة لوسائل التواصل",
  },
  {
    icon: <FaComments />,
    text: "نشر محتوى تفاعلي (استطلاعات – أسئلة – مسابقات)",
  },
  {
    icon: <FaRecycle />,
    text: "إعادة استخدام المحتوى بطرق مختلفة (Repurposing)",
  },
  { icon: <FaChartPie />, text: "تحليل أداء كل نوع من المحتوى" },
  { icon: <FaUserPlus />, text: "جذب زوار جدد وتحويلهم إلى عملاء محتملين" },
  { icon: <FaHandshake />, text: "بناء ثقة العلامة التجارية على المدى الطويل" },
  {
    icon: <FaRoute />,
    text: "تغطية جميع مراحل رحلة العميل (Awareness – Consideration – Conversion)",
  },
];

function CardServiceFive() {
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
            التسويق بالمحتوى <FaRocket className="icon-spin-pause" />
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
      <Footer/>
    </div>
  );
}

export default CardServiceFive;
