import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
// import videoFile from "../assets/video8.mp4";
import carouslVideo from "../assets/video5.mp4";

import "./Carousl.css";
import ExpertContainer from "./ExpertContainer";

function Carousl() {
  const elementsRef = useRef([]);
  const words = [
    "عبر حلول تقنية مبتكرة لمضاعفة مبيعاتك، تعزيز تواجدك، وتحقيق نمو مستدام. سواء كنت بحاجة إلى متجر إلكتروني احترافي، موقع ويب يعكس هويتك، تطبيق يسهل وصول عملائك إليك، أو تسويق رقمي يرفع مبيعاتك نحن هنا لنساعدك!",
  ];
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const typingSpeed = isDeleting ? 100 : 200;

  useEffect(() => {
    const currentWord = words[loopIndex % words.length];

    const handleTyping = () => {
      setText((prev) =>
        isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopIndex((prev) => prev + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopIndex]);
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
      <video
        autoPlay
        loop
        muted
        playsInline
        className="carousl-video"
        onLoadedMetadata={(e) => (e.target.playbackRate = 0.5)}
      >
        <source src={carouslVideo} type="video/mp4" />
      </video>

      <div className="carousl-part-one">
      <h2 
  className="slide-in carousl-heading" 
  ref={(el) => el && elementsRef.current.push(el)} 
  dir="rtl"
>
  <span className="heading-wrapper">
    نقود أعمالك نحو المستقبل <span className="spans">الرقمي</span>
  </span>
</h2>


        <p
          className="slide-in"
          ref={(el) => el && elementsRef.current.push(el)}
        >
          {text}{" "}
        </p>
        <p
          className="conatact-p slide-in"
          ref={(el) => el && elementsRef.current.push(el)}
        >
          جاهز للارتقاء بأعمالك؟
        </p>
        <div className="btns-container-2">
          <span className="btn-mask-2">تواصل معنا الآن</span>
          <button type="button" name="Hover">
            <Link to="/contact" className="unstyled-link">
              تواصل معنا الآن
            </Link>{" "}
          </button>
        </div>
      </div>

      <div className="carousl-part-two">
        <div className="expert-box">
          <div className="experts-big-box">
            <p className="experts">خبراء فى</p>
          </div>
<ExpertContainer />
       
        </div>
      </div>
    </div>
  );
}

export default Carousl;
