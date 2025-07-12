import React from "react";
import NavBar from "../Components/NavBar";
import "./ServicesPage.css";
import { useEffect } from "react";
import Footer from "../Components/Footer";
import TypingEffect from "../Components/TypingEffect";
import Image from "../assets/images/1.png";
import gif from '../assets/images/op1.gif'
import giftwo from '../assets/images/op2.gif'
import gifthree from '../assets/images/op3.gif'
import carouslVideo from '../assets/video5.mp4'
import giffour from '../assets/images/op7.gif'
import giffive from '../assets/images/op6.gif'
import gifsix from '../assets/images/op8.gif'
import gifseven from '../assets/images/op4.gif' 
import gifeight from '../assets/images/op5.gif'
import gifnine from '../assets/images/op9.gif'  
import videoG from "../assets/video.mp4";
import BtnThree from "../Components/BtnThree";
import { Link } from 'react-router-dom';


function ServiceDetails() {
  useEffect(() => {
    console.log("service page loaded");

    const cards = document.querySelectorAll(".servicepage-card");
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); 
          }
        });
      },
      { threshold: 0.1 }
    ); 

    cards.forEach((card) => observer.observe(card));
  }, []);

  return (
    <div className="service-page">
      <NavBar />
      <div className="servicePage-carousl">
      <video autoPlay loop muted playsInline className="carousl-video"   onLoadedMetadata={(e) => e.target.playbackRate = 0.5} 
>
       <source src={carouslVideo} type="video/mp4" />

</video>
        <div className="heading-scroll">
          <TypingEffect />
          <p>
            كل شيء يدور حول وضع العملاء في قلب كل ما نقوم به نحن نركز على تقديم
            نتائج فعالة ومستدامة
            <br /> مع تجهيز عملائنا للنمو والتميز نحن نؤمن بأهمية التسويق
            المرن، لذا ندمج بين التكنولوجيا
            <br /> والتصميم والتسويق بالمحتوى والاستراتيجيات الرقمية
          </p>
        </div>
      </div>
      <div className="servicePage-cards">
        <div className="servicepage-card">
<img src={gif} alt="" />


          <h3 className="service-card-heading">تصميم المتاجر الإلكترونية</h3>
          <p>
            نقدم حلولًا متكاملة لإنشاء متجرك الإلكتروني، مع بوابات دفع آمنة،
            وسهولة إدارة المنتجات، وتجربة تسوّق مريحة، مما يساعدك على زيادة
            مبيعاتك وتحقيق نجاح تجاري أكبر
          </p>
          <div className="btns-container">
  <Link to="/card-service-three" className="btn-mask">
    عرض المزيد
  </Link>
  
  <Link to="/card-service-three">
    <button type="button" name="Hover">
      عرض المزيد
    </button>
  </Link>
</div>   
        </div>
        <div className="servicepage-card">
    <img src={giftwo} alt="" />

          <h3 className="service-card-heading">تطوير التطبيقات</h3>
          <p>
            سواء كنت بحاجة إلى تطبيق iOS أو Android، نحن نطور تطبيقات ذكية
            ومبتكرة تسهّل تفاعل العملاء معك، مع تجربة مستخدم متميزة تلبي
            احتياجات أعمالك
          </p>
          <div className="btns-container">
  <Link to="/card-service-two" className="btn-mask">
    عرض المزيد
  </Link>
  
  <Link to="/card-service-two">
    <button type="button" name="Hover">
      عرض المزيد
    </button>
  </Link>
</div>   
        </div>
        <div className="servicepage-card">
        <img src={gifthree} alt="Local Image" />

          <h3 className="service-card-heading">تطوير مواقع الويب</h3>
          <p>
            نصمم ونطور مواقع ويب احترافية تعكس هوية علامتك التجارية، مع تجربة
            مستخدم سلسة وسرعة تحميل عالية، لضمان حضور رقمي قوي يعزز مصداقيتك
            ويجذب العملاء
          </p>

<div className="btns-container">
  <Link to="/card-service" className="btn-mask">
    عرض المزيد
  </Link>
  
  <Link to="/card-service">
    <button type="button" name="Hover">
      عرض المزيد
    </button>
  </Link>
</div>
  
             </div>
        <div className="servicepage-card">
        <img src={giffour} alt="Local Image" />

          <h3 className="service-card-heading"> تحسين محركات البحث (SEO) </h3>
          <p>
            نرفع ترتيب موقعك في نتائج البحث من خلال تحسينات تقنية، وإنشاء محتوى
            مستهدف، وبناء روابط قوية، مما يزيد من عدد الزيارات العضوية ويجلب
            المزيد من العملاء المحتملين إلى نشاطك التجاري
          </p>
          <div className="btns-container">
  <Link to="/card-service-four" className="btn-mask">
    عرض المزيد
  </Link>
  
  <Link to="/card-service-four">
    <button type="button" name="Hover">
      عرض المزيد
    </button>
  </Link>
</div>   
               </div>
        <div className="servicepage-card">
        <img src={giffive} alt="Local Image" />

          <h3 className="service-card-heading"> التسويق بالمحتوى</h3>
          <p>
            نقدم محتوى تسويقي جذاب يشمل المقالات، المنشورات، والتصاميم
            الإبداعية، لمساعدتك في جذب العملاء وتعزيز مكانتك في السوق
          </p>
          <div className="btns-container">
  <Link to="/card-service-five" className="btn-mask">
    عرض المزيد
  </Link>
  
  <Link to="/card-service-five">
    <button type="button" name="Hover">
      عرض المزيد
    </button>
  </Link>
</div>  
           </div>
        <div className="servicepage-card">
        <img src={gifsix} alt="Local Image" />

          <h3 className="service-card-heading">برمجة الأنظمة الألكترونية</h3>
          <p>
            برمجة أنظمة إلكترونية مخصصة تعزز من تجربة المستخدم وتحقق أهدافك
            التجارية بكفاءة نستخدم أحدث التقنيات لبناء أنظمة إلكترونية مرنة
            وقابلة للتطوير، تواكب تطورات السوق
          </p>
          <div className="btns-container">
  <Link to="/card-service-six" className="btn-mask">
    عرض المزيد
  </Link>
  
  <Link to="/card-service-six">
    <button type="button" name="Hover">
      عرض المزيد
    </button>
  </Link>
</div>   
                </div>
        <div className="servicepage-card">
        <img src={gifseven} alt="Local Image" />

          <h3 className="service-card-heading">تصميم الهوية البصرية </h3>
          <p>
            نبتكر هوية بصرية متكاملة تشمل الشعار، الألوان، والخطوط، مما يجعل
            علامتك التجارية فريدة ومتميزة في السوق
          </p>
          <div className="btns-container">
  <Link to="/card-service-seven" className="btn-mask">
    عرض المزيد
  </Link>
  
  <Link to="/card-service-seven">
    <button type="button" name="Hover">
      عرض المزيد
    </button>
  </Link>
</div>    
              </div>
        <div className="servicepage-card">
        <img src={gifeight} alt="Local Image" />

          <h3 className="service-card-heading">الإعلانات المدفوعة (PPC)</h3>
          <p>
            نساعدك على الوصول إلى جمهورك المستهدف من خلال حملات إعلانية فعالة
            على Google Ads ووسائل التواصل الاجتماعي، مع استراتيجيات دقيقة لحساب
            التكلفة بالنقرة (Pay-Per-Click) لضمان أفضل عائد على الاستثمار وتحقيق
            أعلى نسبة تحويل
          </p>
          <div className="btns-container">
  <Link to="/card-service-eight" className="btn-mask">
    عرض المزيد
  </Link>
  
  <Link to="/card-service-eight">
    <button type="button" name="Hover">
      عرض المزيد
    </button>
  </Link>
</div>   
           </div>
        <div className="servicepage-card">
        <img src={gifnine} alt="Local Image" />

          <h3 className="service-card-heading">
            إدارة وسائل التواصل الاجتماعي
          </h3>
          <p>
            نبني هوية رقمية قوية لعلامتك التجارية من خلال إدارة احترافية لمنصات
            التواصل الاجتماعي، وإنشاء محتوى إبداعي، وتحليل البيانات لضمان
            التفاعل الأمثل مع جمهورك المستهدف
          </p>
          <div className="btns-container">
  <Link to="/card-service-nine" className="btn-mask">
    عرض المزيد
  </Link>
  
  <Link to="/card-service-nine">
    <button type="button" name="Hover">
      عرض المزيد
    </button>
  </Link>
</div>   
             </div>
      </div>
             
      <Footer />
    </div>
  );
}

export default ServiceDetails;


