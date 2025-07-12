import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import carouslVideo from '../assets/video5.mp4';
import { Link } from 'react-router-dom';


import './Projects.css';
import TypingEffectTwo from '../Components/TypingEffectTwo';

function OurProjects() {
  useEffect(() => {
    console.log("ourprojects page loaded");
  }, []);

  return (
    <div className='ProjectsPage'>
      <NavBar />
      <div className="OurProjects-carousl">
        <video autoPlay loop muted playsInline className="carousl-video" onLoadedMetadata={(e) => e.target.playbackRate = 0.5}>
          <source src={carouslVideo} type="video/mp4" />
        </video>
        <div className="heading-scroll">
        <TypingEffectTwo />
        <p>هنا تجد مجموعة من أعمالنا السابقة التي نفتخر بها ، كل مشروع هنا هو نتاج شغف، إبداع، واهتمام بأدق التفاصيل ، نحن نؤمن بأن الجودة تتحدث عن نفسها، وهذه الأعمال هي أكبر دليل على ذلك ، استكشف مشاريعنا، وخذ فكرة عمّا يمكننا تقديمه لك ولعلامتك التجارية </p>
        </div>


     
      </div>

      <div className="OurProjects-box">
        <div className="button-container">
          <p>المواقع الألكترونية</p>
        </div>

        <div className="OurProjects-imgbox">

          <Link to="/website3"><motion.div
            className="img-card"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <img src="https://s3-alpha-sig.figma.com/img/c8f4/1923/99e2126c84325175d3cf4915e9838273?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=taRKj5-VnybeVlcbyIRc0giRkSJK9cxRPn0eH6sfBzCQbL67MY7fPKWTd9g0iTEybFw1dftD~NCB19-k1PHMlNoucTUdUu6Vs8IsANeEtXfSfL7NdMbXRLihgiNL93tY8je2mqyJAKu612HGlWhZ98wDCi~NiAKmx1XLy3P4MR72M7APCbmGOtF0K6ofuikI6jfhEvzQHFlZFOGXNS2YSkjtA-4XqdwIOOCbjwlrF~cXEd~QJAQD79rEPgoTOjHuXv5WmLGVC4KtBQv1A~nOdDxt3JnvBCMASXOV2TImep6np7hDj4QK07VfXnw0UhrxSDQ~Eol4Yqar96GYslm6bw__" alt="Project 1" />
            <div>
              <h3 className="project-title">جامعه النيل</h3>
              <div className="project-description-brief">
                <p>    
                              جامعة خاصة تُعد الامتداد الأكاديمي لمجموعة التعليم العالي، وتُعنى بتقديم تعليم عالي الجودة مبني على أسس الكفاءة والثقة والانفتاح الثقافي
</p>
              </div>
            </div>
          </motion.div></Link>
          

          <Link to="/website4">

          <motion.div
            className="img-card"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.1, delay: 0.4, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <img src="https://s3-alpha-sig.figma.com/img/42ca/e038/ccf98b6bfd6a0ce40c41bdf08a684841?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qBeDtjiJMrQf6laG7X4olRYTTKNGjuzsM2GKnJNJRmByKcBvwwwQvSCN4kyQwnPC~zNyUcZezF49OJPPK2UyD-uh70KZhp5XDC1a20uK16QMTtG7ePwYOJaaLRsMKbkRE0Z3-cbnQtWdGnX2Rw-1SqcQMP4bw~gBeGBCoNncYdSKspQkT90VMpLOCyhMV4faUTHsqwcMWf08I5P74ltJhejJs1ClhbVh5Gxpm2urxkgGpHKyFCV6HH7PpRrTt~V7Niperzvf4SC9nrk6a9ARfDK8K3Vx0QrSeLH~4bTZ4wK0SVNZjofv3jrB9dgoD9-7DBgiqkdwJvUwPQ4qbCKTMA__" alt="Project 2" />
            <div>
              <h3 className="project-title">الشاذلي</h3>
              <div className="project-description-brief">
                <p>منذ 2014، تقدم ساعات الشاذلي تصاميم فاخرة تجمع بين الدقة والأناقة، من وحي إرث الزمن المصري.
مع 12 فرعًا وخدمة راقية، نمنح عملاءنا تجربة استثنائية حيث كل ساعة تحكي قصة</p>
              </div>
            </div>
          </motion.div>
</Link>
          <Link to="/website1">
          <motion.div
            className="img-card"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.1, delay: 0.6, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <img src="https://s3-alpha-sig.figma.com/img/1daa/cbce/e144762b9ddfef87760ea1f5d8d4f56a?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HAwvqULgRxGtU6-1JoF4Nk6HUZnDyXIy-6C1L1cLhGYe3PJScFfI9yPPCIhwQxd-EZdHh-9jXMClWOQ65-hYJfEKtAl2NTn86KxOrKWhIM5~kAftCpmfQL1FKz7KqirH-XmrX88KfmYtMhIFgMgzrRcBuqXIWd~x0PEkpVgbCujLTufbVFxTmb0BZ5ZVg0xL-5de6ReZyumJqhouoQy2NlDKHbqVo2YUjo5Y0yPAwcxgmy1Y8Ccf1oSu3ywnRS8Gt0Lp0SF2g2sc-ALpcjpZj35ALPbG-lVW87wFzPocWEdQmcz3tzqXibaofrMuymuKGRDX7RJ9UXKgEywcSWCaHA__" alt="Project 3" />
            <div>
              <h3 className="project-title">شركة مخزنى</h3>
              <div className="project-description-brief">
                <p>                أول شركة تخزين ذاتي في المملكة العربية السعودية منذ 2018
</p>
              </div>
            </div>
          </motion.div>
</Link>

          <Link to="/website2">

          <motion.div
            className="img-card"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.1, delay: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <img src="https://s3-alpha-sig.figma.com/img/0f13/1084/c3a622230abab624da3708b73cacbcc7?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=oP4OihnWpyBYSH7t9UOqgDQ0lfCb2ozPoNZ8ECAp~WikmIKfl1I~9cu77x1xOhbYzwK4yZNXGcWhHKbJKU1-4LYYDKDi~AH2IYlOIYrOmQrWvBX1nlwgk1eFEVggwsQA12V2MXDAjAN~8IGHjm8rDqrhL1KtMsl5lkKZCnmrD~0AnitJo~A1FEcOI9jMpm3IS5VvhM5je10EKoy4EZ~tp-PCcUTUXEB3LRVVSqnRBlK5B6OtDCB0YZlHWdT3iOA~a9gxJ7d1mUeY8tZIEekRwQeLrE69~ddNx9KgVNyC91VsPFS2ae9q04aMHCBklKuif8N9bKp2CEfvgllDsc8TLw__" alt="Project 4" />
            <div>
              <h3 className="project-title">باركود</h3>
              <div className="project-description-brief">
             <p>              Barcode هي شركة رائدة في تنظيم الفعاليات والمعارض، انطلقت من القاهرة منذ عام 2010
</p>  
              </div>
            </div>
          </motion.div>
          </Link>
          <Link to="/website5">

          <motion.div
            className="img-card"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.1, delay: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <img src="https://s3-alpha-sig.figma.com/img/0f13/1084/c3a622230abab624da3708b73cacbcc7?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=oP4OihnWpyBYSH7t9UOqgDQ0lfCb2ozPoNZ8ECAp~WikmIKfl1I~9cu77x1xOhbYzwK4yZNXGcWhHKbJKU1-4LYYDKDi~AH2IYlOIYrOmQrWvBX1nlwgk1eFEVggwsQA12V2MXDAjAN~8IGHjm8rDqrhL1KtMsl5lkKZCnmrD~0AnitJo~A1FEcOI9jMpm3IS5VvhM5je10EKoy4EZ~tp-PCcUTUXEB3LRVVSqnRBlK5B6OtDCB0YZlHWdT3iOA~a9gxJ7d1mUeY8tZIEekRwQeLrE69~ddNx9KgVNyC91VsPFS2ae9q04aMHCBklKuif8N9bKp2CEfvgllDsc8TLw__" alt="Project 4" />
            <div>
              <h3 className="project-title">البارودي</h3>
              <div className="project-description-brief">
             <p>               هو مركز متكامل لطب الأسنان يُعد من أبرز الوجهات الطبية المتخصصة في تقديم خدمات علاجية وتجميلية باحترافية وأحدث التقنيات. ويضم المركز فريقاً من الأطباء المتخصصين  
</p>  
              </div>
            </div>
          </motion.div>
          </Link>

        </div>
      </div>

      <Footer />
    </div>
  );
}

export default OurProjects;
