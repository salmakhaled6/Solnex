import React from "react";
import {
  FaRocket,
  FaSearch,
  FaProjectDiagram,
  FaTags,
  FaTachometerAlt,
  FaChartBar,
  FaLink,
  FaBug,
  FaUserCheck,
  FaRegChartBar,
  FaPenNib,
} from "react-icons/fa";
import "./CardService.css";
import Footer from "./Footer";
import NavBar from "./NavBar";

const services = [
  { icon: <FaSearch />, text: "تحليل الكلمات المفتاحية المناسبة لنشاطك" },
  {
    icon: <FaProjectDiagram />,
    text: "(Internal Linking) تحسين بنية الموقع الداخلية ",
  },
  {
    icon: <FaTags />,
    text: "تحسين العناوين والوصف والكلمات المفتاحية لكل صفحة",
  },
  { icon: <FaTachometerAlt />, text: "تحسين سرعة الموقع وتوافقه مع الجوال" },
  {
    icon: <FaChartBar />,
    text: "ربط الموقع بـ Google Search Console وGoogle Analytics",
  },
  { icon: <FaLink />, text: "(Internal Linking) بناء روابط خارجية " },
  { icon: <FaBug />, text: "إصلاح الأخطاء التقنية مثل الروابط المكسورة" },
  { icon: <FaUserCheck />, text: "تحسين تجربة المستخدم داخل الموقع" },
  { icon: <FaRegChartBar />, text: "تقارير SEO شهرية توضح النتائج والتحسينات" },
  { icon: <FaPenNib />, text: "كتابة محتوى SEO Friendly" },
];

function CardServiceFour() {
  return (
    <div>
      {" "}
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
            تحسين محركات البحث (SEO) <FaRocket className="icon-spin-pause" />
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

export default CardServiceFour;
