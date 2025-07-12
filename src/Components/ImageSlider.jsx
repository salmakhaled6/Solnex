import React from "react";
import pic1 from '../assets/images/pic1.png'
import pic2 from '../assets/images/pic2.png'
import pic3 from '../assets/images/pic3.png'
import { Link } from "react-router-dom";


import "./ImageSlider.css";


function ImageSlider() {
  const [images, setImages] = React.useState([
    {
      src: pic1,
      link: "/website4"
    },
    {
      src: pic2,
      link: "/website1"
    },
    {
      src: pic3,
      link: "/website2"
    },
    {
      src: pic1,
      link: "/website4"
    },
    {
      src: pic2,
      link: "/website1"
    },
    {
      src: pic3,
      link: "/website2"
    },



  ]);
  

  return (
    <div className="slider-box">
      <h5>أعمالنا السابقة</h5>
      <div className="slider-container">
        {images.map((image, index) => (
          <div className="slider-image" key={index}>
            <div className="image-wrapper">
              <Link to={image.link}>
                <img src={image.src} alt={`pic-${index}`} />
                <div className="overlay">
                  <div className="btns-container-5">
          <span className="btn-mask-5">عرض المزيد</span>
          <button type="button" name="Hover">
            عرض المزيد
          </button>
        </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
