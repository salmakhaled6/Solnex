import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";


function Carousl() {
  const elementsRef = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, options);

    elementsRef.current.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elementsRef.current.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);
  return (
    <div className="carousl">
      <img src="assets/pic.png" alt="" />
      <h2 className="slide-in carousl-heading" ref={(el) => el && elementsRef.current.push(el)}>
      <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5 30C10.84 30 9.34 30.68 8.26 31.76C5.9 34.12 4.5 44 4.5 44C4.5 44 14.38 42.6 16.74 40.24C17.582 39.4024 18.156 38.3335 18.3893 37.169C18.6226 36.0045 18.5046 34.7969 18.0503 33.6996C17.5959 32.6024 16.8257 31.6648 15.8375 31.0061C14.8493 30.3474 13.6876 29.9972 12.5 30ZM13.92 37.42C13.36 37.98 9.58 38.94 9.58 38.94C9.58 38.94 10.52 35.18 11.1 34.6C11.44 34.22 11.94 34 12.5 34C12.896 34.0006 13.2829 34.1183 13.6121 34.3384C13.9412 34.5585 14.1979 34.8711 14.3498 35.2368C14.5016 35.6025 14.5418 36.0049 14.4653 36.3934C14.3889 36.7819 14.1991 37.1391 13.92 37.42ZM35.34 27.3C48.06 14.58 43.82 4.67999 43.82 4.67999C43.82 4.67999 33.92 0.439987 21.2 13.16L16.22 12.16C15.5726 12.0357 14.9047 12.0709 14.274 12.2625C13.6433 12.4542 13.0688 12.7965 12.6 13.26L4.5 21.38L14.5 25.66L22.84 34L27.12 44L35.22 35.9C36.16 34.96 36.58 33.6 36.32 32.28L35.34 27.3ZM15.32 21.66L11.5 20.02L15.44 16.08L18.32 16.66C17.18 18.32 16.16 20.06 15.32 21.66ZM28.48 37L26.84 33.18C28.44 32.34 30.18 31.32 31.82 30.18L32.4 33.06L28.48 37ZM32.5 24.48C29.86 27.12 25.74 29.28 24.42 29.94L18.56 24.08C19.2 22.78 21.36 18.66 24.02 16C33.38 6.63999 40.48 8.01999 40.48 8.01999C40.48 8.01999 41.86 15.12 32.5 24.48ZM30.5 22C32.7 22 34.5 20.2 34.5 18C34.5 15.8 32.7 14 30.5 14C28.3 14 26.5 15.8 26.5 18C26.5 20.2 28.3 22 30.5 22Z" fill="#BBE536"/>
</svg>
 نقود أعمالك نحو المستقبل الرقمي
      </h2>
      <p className="slide-in" ref={(el) => el && elementsRef.current.push(el)}>
      عبر حلول تقنية مبتكرة لمضاعفة مبيعاتك، تعزيز تواجدك، وتحقيق نمو مستدام. سواء كنت بحاجة إلى متجر إلكتروني احترافي، موقع ويب يعكس هويتك، تطبيق يسهل وصول عملائك إليك، أو تسويق رقمي يرفع مبيعاتك نحن هنا لنساعدك!
      </p>
      <p
        className="conatact-p slide-in"
        ref={(el) => el && elementsRef.current.push(el)}
      >
        
        جاهز للارتقاء بأعمالك؟
      </p>
      <button 
      className="contact-btn"
      >

<Link to='/contact'>        تواصل معنا الآن
</Link>
        </button>
      <div className="carousl-part-two">
        <div className="expert-box">
          <svg
            width="1280"
            height="279"
            viewBox="0 0 1280 279"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M641 81.5C461.023 81.5 296.568 125.187 163.53 197.5H1118.47C985.432 125.187 820.977 81.5 641 81.5Z"
              stroke="url(#paint0_linear_77_20701)"
              stroke-width="120"
            />
            <defs>
              <linearGradient
                id="paint0_linear_77_20701"
                x1="590.5"
                y1="767"
                x2="638.458"
                y2="-785.079"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.36" stop-color="#12151F" stop-opacity="0" />
                <stop offset="1" stop-color="#BBE536" />
              </linearGradient>
            </defs>
          </svg>
          <div className="experts-big-box">
          <p className="experts">خبراء فى</p>
          </div>
         
          <div className="expert-container">
           
            <div className="logo-slider">
              <img
                src="https://s.w.org/style/images/about/WordPress-logotype-wmark-white.png"
                alt="WordPress"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1200px-Figma-logo.svg.png"
                alt=""
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Angular_gradient.png"
                alt=""
              />
              <img
                src="https://brandlogos.net/wp-content/uploads/2020/09/react-logo.png"
                alt=""
              />
              <img
                src="https://s.w.org/style/images/about/WordPress-logotype-wmark-white.png"
                alt="WordPress"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1200px-Figma-logo.svg.png"
                alt=""
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Angular_gradient.png"
                alt=""
              />
              <img
                src="https://brandlogos.net/wp-content/uploads/2020/09/react-logo.png"
                alt=""
              />
              <img
                src="https://s.w.org/style/images/about/WordPress-logotype-wmark-white.png"
                alt="WordPress"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1200px-Figma-logo.svg.png"
                alt=""
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Angular_gradient.png"
                alt=""
              />
              <img
                src="https://brandlogos.net/wp-content/uploads/2020/09/react-logo.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousl;
