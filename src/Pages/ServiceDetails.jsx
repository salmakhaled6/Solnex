import React from 'react'
import NavBar from '../Components/NavBar';
import "./ServicesPage.css";
import { useEffect } from "react";
import Footer from '../Components/Footer';
function ServiceDetails() {
  useEffect(() => {
    console.log("service page loaded");
  }, []);
  return (
    <div className='service-page'>
        <NavBar />
      <div className="servicePage-carousl">
      <h2>الخدمات المتاحة لدينا</h2>

      </div>
      <div className="servicePage-cards">

      <div className="servicepage-card">
        <img src="https://johannrobinson.com/wp-content/uploads/2020/07/calidad.png" alt="" />
      
      <h3 className="service-card-heading">تصميم المتاجر الإلكترونية</h3>
                <p>
           نقدم حلولًا متكاملة لإنشاء متجرك الإلكتروني، مع بوابات دفع آمنة،
          وسهولة إدارة المنتجات، وتجربة تسوّق مريحة، مما يساعدك على زيادة
        مبيعاتك وتحقيق نجاح تجاري أكبر.
       </p>
       <button>عرض المزيد</button>
      </div>
      <div className="servicepage-card">
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/boy-is-pointing-social-marketing-illustration-download-in-svg-png-gif-file-formats--demographics-content-shares-interactions-impressions-company-teamwork-pack-business-illustrations-10482610.png" alt="" />
      <h3 className="service-card-heading">تطوير التطبيقات</h3>
                <p>
                سواء كنت بحاجة إلى تطبيق iOS أو Android، نحن نطور تطبيقات ذكية ومبتكرة تسهّل تفاعل العملاء معك، مع تجربة مستخدم متميزة تلبي احتياجات أعمالك.
       </p>
       <button>عرض المزيد</button>
      </div>
      <div className="servicepage-card">
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/content-rating-illustration-download-in-svg-png-gif-file-formats--customer-reviews-feedback-star-ratings-client-survey-social-media-pack-people-illustrations-6061578.png?f=webp" alt="" />
      <h3 className="service-card-heading">تطوير مواقع الويب</h3>
                <p>
                نصمم ونطور مواقع ويب احترافية تعكس هوية علامتك التجارية، مع تجربة مستخدم سلسة وسرعة تحميل عالية، لضمان حضور رقمي قوي يعزز مصداقيتك ويجذب العملاء.
       </p>
       <button>عرض المزيد</button>
      </div>
      <div className="servicepage-card">
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/time-management-by-employees-illustration-download-in-svg-png-gif-file-formats--effective-planning-scheduling-web-pack-business-illustrations-3738449.png?f=webp" alt="" />
      <h3 className="service-card-heading"> تحسين محركات البحث (SEO) </h3>
                <p>
                نرفع ترتيب موقعك في نتائج البحث من خلال تحسينات تقنية، وإنشاء محتوى مستهدف، وبناء روابط قوية، مما يزيد من عدد الزيارات العضوية ويجلب المزيد من العملاء المحتملين إلى نشاطك التجاري.
       </p>
       <button>عرض المزيد</button>
      </div>
      <div className="servicepage-card">
        <img src="https://media.licdn.com/dms/image/v2/D4D12AQH5wgGF7qLNTg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1661770600532?e=2147483647&v=beta&t=KnUS3_6zPvnPfiDL4NVZGQD6bL8jdvVDwV8EHOzv0Lw" alt="" />
      <h3 className="service-card-heading"> التسويق بالمحتوى</h3>
                <p>
                نقدم محتوى تسويقي جذاب يشمل المقالات، المنشورات، والتصاميم الإبداعية، لمساعدتك في جذب العملاء وتعزيز مكانتك في السوق.
       </p>
       <button>عرض المزيد</button>
      </div>
      <div className="servicepage-card">
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/people-are-chatting-online-illustration-download-in-svg-png-gif-file-formats--conversation-communication-chat-remote-job-pack-illustrations-8548275.png?f=webp" alt="" />
      <h3 className="service-card-heading">برمجة الأنظمة الألكترونية</h3>
                <p>
                برمجة أنظمة إلكترونية مخصصة تعزز من تجربة المستخدم وتحقق أهدافك التجارية بكفاءة نستخدم أحدث التقنيات لبناء أنظمة إلكترونية مرنة وقابلة للتطوير، تواكب تطورات السوق
       </p>
       <button>عرض المزيد</button>
      </div>
      <div className="servicepage-card">
<img src="https://cdni.iconscout.com/illustration/premium/thumb/mail-app-illustration-download-in-svg-png-gif-file-formats--mobile-application-email-marketing-pack-people-illustrations-4609413.png?f=webp" alt="" />      <h3 className="service-card-heading">تصميم الهوية البصرية </h3>
                <p>
                نبتكر هوية بصرية متكاملة تشمل الشعار، الألوان، والخطوط، مما يجعل علامتك التجارية فريدة ومتميزة في السوق.       </p>
       <button>عرض المزيد</button>
      </div>
      <div className="servicepage-card">
<img src="https://cdni.iconscout.com/illustration/premium/thumb/team-working-on-mobile-ui-development-illustration-download-in-svg-png-gif-file-formats--user-interface-management-start-up-pack-business-illustrations-5382401.png" alt="" />      <h3 className="service-card-heading">الإعلانات المدفوعة (PPC)</h3>
                <p>
                نساعدك على الوصول إلى جمهورك المستهدف من خلال حملات إعلانية فعالة على Google Ads ووسائل التواصل الاجتماعي، مع استراتيجيات دقيقة لحساب التكلفة بالنقرة (Pay-Per-Click) لضمان أفضل عائد على الاستثمار وتحقيق أعلى نسبة تحويل.     </p>
       <button>عرض المزيد</button>
      </div>
      <div className="servicepage-card">
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/girl-looking-at-profiles-on-mobile-illustration-download-in-svg-png-gif-file-formats--resume-assessment-startup-find-employees-cv-analysis-web-pack-business-illustrations-5515996.png" alt="" />
      <h3 className="service-card-heading">إدارة وسائل التواصل الاجتماع
      ي</h3>
                <p>
                نبني هوية رقمية قوية لعلامتك التجارية من خلال إدارة احترافية لمنصات التواصل الاجتماعي، وإنشاء محتوى إبداعي، وتحليل البيانات لضمان التفاعل الأمثل مع جمهورك المستهدف.       </p>
       <button>عرض المزيد</button>
      </div>

      </div>
      <Footer />
    </div>
  )
}

export default ServiceDetails
