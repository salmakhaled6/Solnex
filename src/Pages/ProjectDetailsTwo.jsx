import React from 'react'
import './projectDetails.css'
import barcode1 from '../assets/images/barcode1.png'
import barcode2 from '../assets/images/barcode2.png'
import websiteimg3 from '../assets/images/website-img-3.png'
import gifs from '../assets/images/website-img-Q.gif'
import gifs2 from '../assets/images/website-img-Q2.gif'
import w1 from '../assets/images/w1.png'
import w2 from '../assets/images/w2.png'
import w3 from '../assets/images/w3.png'
import WS1 from '../assets/images/SW1.jpg'
import WS2 from '../assets/images/WS2.jpg'
import WS3 from '../assets/images/WS3.jpg'
import logop1 from '../assets/images/barcode.png'
import ExpertContainer from '../Components/ExpertContainer'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import ImageSlider from '../Components/ImageSlider'


function ProjectDetailsTwo() {
  return (
    <div > <div className="ProjectDetails-page">
    <NavBar />
<div className="ProjectDetails-box1">
 <img src={barcode1} alt="" />

  <div className="ProjectDetails-box1-details">
    <div>
      <p>معلومات المشروع</p>
      <a href="https://www.barcode-eg.com/" target="_blank" rel="noopener noreferrer">
<button>Barcode</button>
</a>

      <p className="ProjectDetails-box1-paragraph">
      Barcode هي شركة رائدة في تنظيم الفعاليات والمعارض، انطلقت من القاهرة منذ عام 2010
    </p>
    </div>

  <img src={logop1} alt="" />
  </div>
</div>
<div className="ProjectDetails-box2">
<img src={barcode2} alt="" />
</div>
<div className="ProjectDetails-box3">
  <div className="ProjectDetails-box3-first">
    <div className="box3-details">
      <p>بعض المشاكل السابقة</p>
      <ul>
        <li>ضعف إبراز الهوية المهنية والخبرة الطويلة للشركة في مجال تنظيم المؤتمرات والفعاليات.</li>
        <li>تجربة تصفح غير مرنة قد تؤثر على الانطباع العام للمستخدمين عن الشركة.</li>
        <li> 	صعوبة في الوصول إلى المعلومات الأساسية والخدمات المتعلقة بالفعاليات.</li>
        <li>	عدم وجود نظام متكامل لحجز التذاكر والدفع الإلكتروني يواكب احتياجات العملاء.</li>
      </ul>
    </div>
 <img src={gifs} alt="" />
  </div>
  <div className="ProjectDetails-box3-second">
  <img src={gifs2} alt="" />
    <div className="box3-second-details">
      <p>حلول تم تنفيذها</p>

      <ul>
        <li>تصميم واجهة مستخدم حديثة تبرز الطابع الاحترافي وهوية الشركة المميزة في المجال الطبي والتجاري.</li>
        <li>	تطوير تجربة تصفح سلسة ومتجاوبة (Responsive) مع تحسين أداء الموقع وسرعة تحميله.</li>
        <li>تنظيم المعلومات بطريقة واضحة تسهّل على الزوار الوصول للخدمات والمحتوى بسرعة.</li>
        <li>		دمج نظام إلكتروني متكامل للدفع وحجز التذاكر، مما ساعد على تحسين تجربة المستخدم وكفاءة إدارة الفعاليات</li>
      </ul>
    </div>
  </div>
</div>

<div className="ProjectDetails-box4">
<div class="image-container">
<img class="small-image left" src={WS1} alt="Image 1" />
<img class="large-image" src={WS2} alt="Image 2" />
<img class="small-image right" src={WS3} alt="Image 3" />
</div>


<div className="ProjectDetails-box4-btns">
<a href="https://www.barcode-eg.com/" target="_blank" rel="noopener noreferrer">
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

export default ProjectDetailsTwo
