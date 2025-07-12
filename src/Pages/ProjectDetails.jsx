import React from "react";
import './projectDetails.css'
import websiteimg from '../assets/images/website-img.png'
import websiteimg2 from '../assets/images/website-img-2.png'
import websiteimg3 from '../assets/images/mk.png'
import gifs from '../assets/images/website-img-Q.gif'
import gifs2 from '../assets/images/website-img-Q2.gif'
import w1 from '../assets/images/w1.png'
import w2 from '../assets/images/w2.png'
import w3 from '../assets/images/w3.png'
import ExpertContainer from "../Components/ExpertContainer";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import ImageSlider from "../Components/ImageSlider";


function ProjectDetails() {
  return (
    <div> <div className="ProjectDetails-page">
    <NavBar />
    <div className="ProjectDetails-box1">
     <img src={websiteimg} alt="" />

      <div className="ProjectDetails-box1-details">
        <div>
          <p>معلومات المشروع</p>
          <a href="https://www.makhzny.com/ar" target="_blank" rel="noopener noreferrer">
<button>مخزنى</button>
</a>

          <p className="ProjectDetails-box1-paragraph">
            أول شركة تخزين ذاتي في المملكة العربية السعودية منذ 2018
          </p>
        </div>

      <img src={websiteimg3} alt="" />
      </div>
    </div>
    <div className="ProjectDetails-box2">
   <img src={websiteimg2} alt="" />
    </div>
    <div className="ProjectDetails-box3">
      <div className="ProjectDetails-box3-first">
        <div className="box3-details">
          <p>بعض المشاكل السابقة</p>
          <ul>
            <li>مشاكل في محركات البحث (SEO).</li>
            <li>بطء تحميل الصفحات.</li>
            <li> عدم توافق الموقع مع الأجهزة المحمولة.</li>
            <li>تجربة مستخدم غير جيدة.</li>
          </ul>
        </div>
     <img src={gifs} alt="" />
      </div>
      <div className="ProjectDetails-box3-second">
      <img src={gifs2} alt="" />
        <div className="box3-second-details">
          <p>حلول تم تنفيذها</p>

          <ul>
            <li>تحسين الصور وتقليل حجمها.</li>
            <li>تطبيق تصميم يستجيب لجميع الأجهزة (Responsive Design).</li>
            <li>تحسين واجهة المستخدم (UI) وتجربة المستخدم (UX).</li>
            <li>استخدام الروابط الداخلية والخارجية بشكل فعال.</li>
            <li>تحسين محتوى الموقع باستخدام الكلمات الرئيسية المناسبة.</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="ProjectDetails-box4">
    <div class="image-container">
  <img class="small-image left" src={w1} alt="Image 1" />
  <img class="large-image" src={w2} alt="Image 2" />
  <img class="small-image right" src={w3} alt="Image 3" />
</div>
    
    <div className="ProjectDetails-box4-btns">
    <a href="https://www.makhzny.com/ar/" target="_blank" rel="noopener noreferrer">
<button>مشاهدة المشروع عن قرب</button>
</a>
     {/* <button className="ProjectDetails-box4-btns2">عرض المزيد من الأعمال</button> */}
     </div> 
    </div>
<ImageSlider />    
  </div>
  
  <Footer />
  </div>
   
  );
}

export default ProjectDetails;
