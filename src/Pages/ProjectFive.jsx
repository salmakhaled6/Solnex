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
import Barody from '../assets/images/Barody.png'
import ExpertContainer from '../Components/ExpertContainer'
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'
import ImageSlider from '../Components/ImageSlider'

function ProjectFive() {
  return (
    <div >
       <div className="ProjectDetails-page">
    <NavBar />
  <div className="ProjectDetails-box1">
   <img src={shazlyweb1} alt="" />

    <div className="ProjectDetails-box1-details">
      <div>
        <p>معلومات المشروع</p>
        <a href="https://dr-baroody.com" target="_blank" rel="noopener noreferrer">
<button>البارودي </button>
</a>

        <p className="ProjectDetails-box1-paragraph">
 
        البارودي هو مركز متكامل لطب الأسنان يُعد من أبرز الوجهات الطبية المتخصصة في تقديم خدمات علاجية وتجميلية باحترافية وأحدث التقنيات. ويضم المركز فريقاً من الأطباء المتخصصين

    </p>
      </div>

    <img src={Barody} alt="" />
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
          <li>الحاجة إلى إبراز هوية المركز الطبية وتميّزه في مجال طب الأسنان</li>
          <li>   عرض الخدمات الطبية بطريقة منظمة وواضحة لسهولة تصفحها من قِبل الزوار</li>
          <li> ضمان استجابة الموقع لجميع أنواع الأجهزة مع تحسين الأداء وسرعة التحميل</li>
          <li>تسهيل عملية التواصل بين المرضى والعيادة وتقليل الاعتماد على الاتصالات الهاتفية أو الحضور الشخصي</li>
          <li>تنظيم مواعيد المرضى بكفاءة عالية، مع تقليل فترات الانتظار</li>
          <li>تزويد الفريق الطبي برؤية واضحة لإدارة جدول العمل اليومي والمرونة في التعامل مع التغييرات</li>


        </ul>
      </div>
   <img src={gifs} alt="" />
    </div>
    <div className="ProjectDetails-box3-second">
    <img src={gifs2} alt="" />
      <div className="box3-second-details">
        <p>حلول تم تنفيذها</p>

        <ul>
          <li>تصميم واجهة مستخدم أنيقة وتجربة تصفح مرنة وسلسة تعكس الاحترافية والخبرة الطبية</li>
          <li>	تنظيم عرض جميع خدمات العيادة بشكل واضح، مع تغطية جميع التخصصات مثل زراعة الأسنان، تقويم الأسنان، طب الأسنان الرقمي، وغيرها</li>
          <li>تنفيذ تصميم متجاوب (Responsive Design) مع تحسينات في سرعة الأداء وتجربة المستخدم</li>
          <li>	تطوير نظام حجز مواعيد إلكتروني متكامل يسمح للزوار باختيار الخدمة والموعد المناسب بسهولة عبر الموقع</li>
          <li>	تصميم واجهة حجز مبسطة تناسب جميع الفئات العمرية لضمان سهولة الاستخدام</li>
          <li>	إضافة ميزات ذكية للنظام مثل إرسال تذكيرات بالمواعيد عبر البريد الإلكتروني والرسائل النصية، مع إمكانية إعادة جدولة أو إلغاء الموعد إلكترونيًا</li>
          <li>	ربط نظام الحجز بلوحة تحكم العيادة لعرض جدول العمل اليومي ومتابعة الحجوزات بشكل فوري ومنظم </li>

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
  <a href="https://dr-baroody.com" target="_blank" rel="noopener noreferrer">
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

export default ProjectFive
