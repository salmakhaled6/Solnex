import React from 'react'
import './projectDetails.css'
import nile1 from '../assets/images/nile1.png'
import nile2 from '../assets/images/nile2.png'

import websiteimg2 from '../assets/images/website-img-2.png'
import websiteimg3 from '../assets/images/website-img-3.png'
import gifs from '../assets/images/website-img-Q.gif'
import gifs2 from '../assets/images/website-img-Q2.gif'
import w1 from '../assets/images/w1.png'
import w2 from '../assets/images/w2.png'
import w3 from '../assets/images/w3.png'
import WS4 from '../assets/images/SW4.jpg'
import WS5 from '../assets/images/SW5.jpg'
import WS6 from '../assets/images/SW6.jpg'
import nile from'../assets/images/nile.png'
import ExpertContainer from '../Components/ExpertContainer'
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'
import ImageSlider from '../Components/ImageSlider'


function ProjectDetailsThree() {
  return (
    <div>
 <div className="ProjectDetails-page">
      <NavBar />
    <div className="ProjectDetails-box1">
     <img src={nile1} alt="" />

      <div className="ProjectDetails-box1-details">
        <div>
          <p>معلومات المشروع</p>
          <a href="https://nileuniversity.edu.sd/" target="_blank" rel="noopener noreferrer">
  <button>جامعة النيل – السودان</button>
</a>

          <p className="ProjectDetails-box1-paragraph">
          جامعة خاصة تُعد الامتداد الأكاديمي لمجموعة التعليم العالي، وتُعنى بتقديم تعليم عالي الجودة مبني على أسس الكفاءة والثقة والانفتاح الثقافي
 </p>
        </div>

      <img src={nile} alt="" />
      </div>
    </div>
    <div className="ProjectDetails-box2">
   <img src={nile2} alt="" />
    </div>
    <div className="ProjectDetails-box3">
      <div className="ProjectDetails-box3-first">
        <div className="box3-details">
          <p>بعض المشاكل السابقة</p>
          <ul>
            <li>صعوبة وصول الزوار إلى المعلومات الأساسية مثل البرامج الدراسية والرؤية والرسالة بسبب تنظيم المحتوى غير الفعّال.</li>
            <li>ضعف في تجربة المستخدم على الأجهزة المختلفة، مما أثّر على تفاعل الزوار مع الموقع.</li>
            <li> غياب إبراز القيم الأكاديمية بشكل واضح في التصميم العام للموقع.</li>
            <li>	استخدام نصوص وعناصر مرئية لا تعكس الهوية البصرية الخاصة بالجامعة بالشكل الكافي.</li>
          </ul>
        </div>
     <img src={gifs} alt="" />
      </div>
      <div className="ProjectDetails-box3-second">
      <img src={gifs2} alt="" />
        <div className="box3-second-details">
          <p>حلول تم تنفيذها</p>

          <ul>
            <li>إعادة تنظيم المحتوى وتبويبه بطريقة تُسهّل الوصول السريع لأهم المعلومات الأكاديمية.</li>
            <li>	تصميم واجهات تركز على البساطة والوضوح، مع تحسين تجربة المستخدم على جميع أنواع الأجهزة.</li>
            <li>إبراز القيم المؤسسية مثل الجودة والثقة والكفاءة من خلال التصميم والمحتوى.</li>
            <li>	تحسين أسلوب عرض النصوص لتكون أكثر وضوحًا وسلاسة، مع الحفاظ على هوية الجامعة البصرية</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="ProjectDetails-box4">
    <div class="image-container">
  <img class="small-image left" src={WS4} alt="Image 1" />
  <img class="large-image" src={WS5} alt="Image 2" />
  <img class="small-image right" src={WS6} alt="Image 3" />
</div>
    
    <div className="ProjectDetails-box4-btns">
    <a href="https://nileuniversity.edu.sd/" target="_blank" rel="noopener noreferrer">
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

export default ProjectDetailsThree
