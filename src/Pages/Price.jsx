import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import carouslVideo from "../assets/video5.mp4";
import './price.css';
import '../Components/Footer'
import NavBar from "../Components/NavBar";
import TypingEffectThree from '../Components/TyppingEffectThree';
import Footer from '../Components/Footer';



const services = [
  {
    title: "تطوير المواقع الإلكترونية",
    cards: [
      {
        description: " Enterprise - الباقة الاحترافية ",
        descriptions:"تصميم مخصص بالكامل",
        descriptionsOne:"(CRM, API) ربط بأنظمة خارجية ",
        descriptionsTwo:"SEO احترافي + دعم تقني 3 أشهر",
        descriptionsOneThree:"Google Analytics, Meta Pixel تكامل كامل مع  ",


        price: "السعر: 2,500 - 4,000 دولار"
      },
     
      {
        description: " Pro - الباقة المتقدمة ",
        descriptions:"موقع ديناميكي + لوحة تحكم",
        descriptionsOne:"حتى 10 صفحات",
        descriptionsTwo:"نماذج تواصل مخصصة",
        descriptionsOneThree:"SEO اساسي",

        price: "السعر: 1,500 - 2,000 دولار"
      },
      {
        description: "  Starter - الباقة الأساسية ",
        descriptions:"موقع ثابت من 5 صفحات",
        descriptionsOne:"  تصميم متجاوب  استضافة مجانية لأول سنة  ",
        descriptionsTwo:"   بريد إلكتروني واحد احترافي ",
        price: "السعر: 800 - 1,200 دولار        "
      },
  
    ]
  },
  {
    title: "تطوير المتاجر الإلكترونية",
    cards: [
      {
        description: "  Enterprise - الباقة الاحترافية ",
        descriptions:" (Laravel / Shopify Advanced / Magento)  متجر       ",
        descriptionsOne:"عدد غير محدود من المنتجات        ",
        descriptionsTwo:"نظام ولاء وعروض تلقائية        ",
        descriptionsOneThree:"دعم تقني 6 أشهر        ",

        price: "السعر: 3,500 - 6,000 دولار"
      },
      
      {
        description: " Pro - الباقة المتقدمة  ",
        descriptions:"متجر متعدد الفئات  ",
        descriptionsOne:"حتى 100 منتج",
        descriptionsTwo:"ربط بخدمات الشحن",
        descriptionsOneThree:"SEO دعم و تدريب للعميل" ,

        price: "السعر: 2,000 - 2,800 دولار        "
      },
      {
        description: " Starter - الباقة الأساسية ",
        descriptions:"(WooCommerce / Shopify Basic) متجر بسيط ",
        descriptionsOne:"حتى 20 منتج",
        descriptionsTwo:"بوابة دفع واحدة",
       

        price: "السعر: 1,000 - 1,500 دولار        "
      },
     
    ]
  },
  {
    title: "(Android / iOS) تطوير تطبيقات الهاتف ",
    cards: [
      {
        description: "Enterprise - الباقة الاحترافية  ",
        descriptions:"تطبيق كامل الوظائف ",
        descriptionsOne:"قاعدة بيانات كبيرة        ",
        descriptionsTwo:"دعم فني، مراقبة أداء، نشر على المتاجر",
        price: "السعر: 6,000 - 10,000 دولار"
      },
      
      {
        description: "Pro - الباقة المتقدمة  ",
        descriptions:"UI/UX تصميم" ,
        descriptionsOne:" API تكامل مع ",
        descriptionsTwo:"(Web) لوحة تحكم للمشرف ",
        price: "السعر: 3,000 - 5,000 دولار"
      },
      {
        description: "Starter - الباقة الأساسية  " ,
        descriptions :" MVP  تطبيق   ",
        descriptionsTwo: "(تسجيل، عرض بيانات، واجهات رئيسية فقط)    " ,
        descriptionsOne:"تصميم جاهز        ",
        price: "السعر: 1,500 - 2,500 دولار        "
      },
     
    ]
  },
  {
    title: " ERP باستخدام  Odoo  أنظمة ",
    cards: [
      {
        description: " Enterprise - الباقة الاحترافية ",
        descriptions:"تطوير وحدات مخصصة",
        descriptionsOne:"ربط مع نفاذ الوطني / أي أنظمة حكومية",
        descriptionsTwo:"دعم شامل وتدريب الموظفين",
        price: "السعر: 8,000 - 15,000 دولا        "
      },
    
      {
        description: "Pro - الباقة المتقدمة  ",
descriptions:"تخصيص الوحدات",
descriptionsOne:"ربط مع النظام المحاسبي",
descriptionsTwo:"دعم تقني 3 أشهر",
        price: "السعر: 4,000 - 6,000 دولار"
      },
      {
        description: "Starter - الباقة الأساسية  ",
        descriptions:"تفعيل وحدتين (مثلاً: المبيعات والمخزون)        ",
        descriptionsOne:"VPS         استضافة على ",
        descriptionsTwo:"تدريب بسيط        ",
        price: "السعر: 2,000 - 3,000 دولار"
      },
   
    ]
  },
  
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    position: "absolute",
  }),
  center: {
    x: 0,
    opacity: 1,
    position: "relative",
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    position: "absolute",
  }),
};


function Price() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); 

  const paginate = (newIndex) => {
    if (newIndex >= 0 && newIndex < services.length) {
      setDirection(newIndex > index ? 1 : -1); 
      setIndex(newIndex);
    }
  };

  const selectedService = services[index];

  return (
    <div className='price-page'>
      <NavBar />

      <div className="price-carousl">
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
        <div className="heading-scroll">
        <TypingEffectThree />
<p className='p'>هنا تجد باقاتنا المتكاملة وأسعارنا لتطوير المواقع، المتاجر، التطبيقات، وأنظمةERP   
صممنا كل باقة بعناية لتمنحك أداء تقنياً موثوقاً يدعم نمو أعمالك بثبات
ابدأ من هنا، بخطوة محسوبة نحو التحوّل الرقمي الذكي</p>        </div>      </div>

      <div className="price-part-1">
        {services.map((service, i) => (
          <div
            key={i}
            className={` ${i === index ? 'active' : ''}`}
            onClick={() => paginate(i)}
          >
            <button className='button-container-price'> <p>{service.title}</p></button>
           
          </div>
        ))}
      </div>

      <div className="slider-wrapper">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div 
            key={index}
            className="cards-group"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.7 }}
          >
            {selectedService.cards.map((card, idx) => (
              <div key={idx} className="service-card slider-card">
                <h3 className='priceTitle'>{selectedService.title}</h3>
                <p className="desc-1">{card.description}</p>
                <p className='desc'>{card.descriptions}</p>
                <p className='desc'>{card.descriptionsOne}</p>
                <p className='desc'>{card.descriptionsTwo}</p> 
                <p className='desc'>{card.descriptionsOneThree}</p> 

                
                <p className="price">{card.price}</p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
     <Footer />
    </div>
  );
}




export default Price;
