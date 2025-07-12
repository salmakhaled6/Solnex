import React, { useEffect, useState } from "react";

function FooterButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
    
        <svg className="scroll-top" onClick={scrollToTop} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" id="Top">
          <path
            d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm0 26a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm0-15.91 6.41 6.41L21 19.91l-5-5-5 5-1.41-1.41Z"
            fill="#bbe536"
          ></path>
        </svg>
   
    )
  );
}

export default FooterButton;
