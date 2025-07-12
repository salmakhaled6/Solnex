import React from 'react'
import './projectDetails.css'
import shazlyweb1 from '../assets/images/elsha1.png'
import shazlyweb2 from '../assets/images/elsha2.png'
import websiteimg3 from '../assets/images/website-img-3.png'
import gifs from '../assets/images/website-img-Q.gif'
import gifs2 from '../assets/images/website-img-Q2.gif'

import w1 from '../assets/images/w1.png'
import w2 from '../assets/images/w2.png'
import w3 from '../assets/images/w3.png'
import SW7 from '../assets/images/SW7.jpg'
import SW8 from '../assets/images/SW8.jpg'
import SW9 from '../assets/images/SW9.jpg'
import shazly from '../assets/images/shazly.png'
import ExpertContainer from '../Components/ExpertContainer'
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'
import ImageSlider from '../Components/ImageSlider'

function ProjectDetailsFour() {
  return (
    <div >
       <div className="ProjectDetails-page">
      <NavBar />
    <div className="ProjectDetails-box1">
     <img src={shazlyweb1} alt="" />

      <div className="ProjectDetails-box1-details">
        <div>
          <p>معلومات المشروع</p>
          <a href="https://www.elshazly-watches.com/en" target="_blank" rel="noopener noreferrer">
  <button>الشاذلي</button>
</a>

          <p className="ProjectDetails-box1-paragraph">
          مند 2014، تقدم ساعات الشاذلي تصاميم فاخرة تجمع بين الدقة والأناقة، من وحي إرث الزمن المصري
مع 12 فرعًا وخدمة راقية، نمنح عملاءنا تجربة استثنائية حيث كل ساعة تحكي قصة
      </p>
        </div>

      <img src={shazly} alt="" />
      </div>
    </div>
    <div className="ProjectDetails-box2">
   <img src={shazlyweb2} alt="" />
    </div>
    <div className="ProjectDetails-box3">
      <div className="ProjectDetails-box3-first">
        <div className="box3-details">
          <p>بعض المشاكل السابقة</p>
          <ul>
            <li>	عدم وضوح تركيز المتجر على فئة الساعات، مما قلل من قوة العلامة التجارية في السوق.</li>
            <li>تجربة المستخدم كانت تقليدية وتفتقر للتميز البصري الذي يجذب العملاء المهتمين بالمنتجات الفاخرة.</li>
            <li> صعوبة تصفح المنتجات وفلترتها، مما أثر على سرعة اتخاذ قرار الشراء.</li>
            <li>.	ضعف في توافق الموقع مع الأجهزة المختلفة، وتأثير ذلك على تجربة الشراء عبر الجوال.</li>
          </ul>
        </div>
     <img src={gifs} alt="" />
      </div>
      <div className="ProjectDetails-box3-second">
      <img src={gifs2} alt="" />
        <div className="box3-second-details">
          <p>حلول تم تنفيذها</p>

          <ul>
            <li>تصميم واجهة عصرية تبرز فئة الساعات كمنتج أساسي مع الحفاظ على مساحة مخصصة للمنتجات الأخرى.</li>
            <li>	تطوير تجربة مستخدم فاخرة تجمع بين البساطة والأناقة لتعكس قيمة المنتجات وجودتها.</li>
            <li>تحسين طريقة عرض المنتجات وتوفير فلاتر بحث متقدمة لتسهيل عملية التصفح والاختيار.</li>
            <li>ضمان التوافق الكامل مع جميع الأجهزة وتحسين سرعة الأداء لضمان تجربة تسوق مريحة وسريعة</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="ProjectDetails-box4">
    <div class="image-container">
  <img class="small-image left" src={SW8} alt="Image 1" />
  <img class="large-image" src={SW7} alt="Image 2" />
  <img class="small-image right" src={SW9} alt="Image 3" />
</div>
    
    <div className="ProjectDetails-box4-btns">
    <a href="https://www.elshazly-watches.com/en" target="_blank" rel="noopener noreferrer">
  <button>مشاهدة المشروع عن قرب</button>
</a>    
 {/* <button className="ProjectDetails-box4-btns2">عرض المزيد من الأعمال</button> */}
</div> 
    </div>
    <ImageSlider />

  </div>
  <Footer />
    </div>
   
  )
}

export default ProjectDetailsFour
