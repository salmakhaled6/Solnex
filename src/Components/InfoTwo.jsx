import React, { useEffect, useRef, useState } from 'react';
import './Infotwo.css';

function InfoTwo() {
  const sectionRef = useRef(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const items = Array.from(sectionRef.current.querySelectorAll('.timeline-item'));
          
          const sortedItems = items.sort((a, b) => {
            return parseInt(a.getAttribute('data-index')) - parseInt(b.getAttribute('data-index'));
          });

          sortedItems.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('revealed');
            }, index * 800);
          });

          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, []);

  const timelineItems = [
    {
      id: 1,
      title: 'بروفايل إلكتروني احترافي',
      desc: 'يعرض شركتك بشكل جذّاب ويعزز مصداقيتك أمام العملاء والشركاء.'
    },
    {
      id: 2,
      title: 'مواقع إلكترونية مخصصة',
      desc: 'نختار المنصة الأنسب حسب نشاطك لنقدّم أفضل تجربة ممكنة.'
    },
    {
      id: 3,
      title: 'متاجر إلكترونية متكاملة',
      desc: 'تساعدك على بيع منتجاتك بسهولة، مع ربط أنظمة الدفع، الشحن، وإدارة المخزون.'
    },
    {
      id: 4,
      title: 'تطبيقات موبايل مخصصة',
      desc: '(iOS / Android) توسّع حضورك وتتيح لعملائك الوصول إليك بسهولة على الجوال.'
    },
    {
      id: 5,
      title: 'حلول عرض المنتجات',
      desc: 'بدون موقع تقليدي مثل صفحات مخصصة، كتالوجات إلكترونية، أو روابط تفاعلية.'
    },
    {
      id: 6,
      title: 'تصميم واجهات استخدام (UI/UX)',
      desc: 'احترافية وسهلة الاستخدام تعزّز تجربة العميل وتزيد من فرص التحويل.'
    },
    {
      id: 7,
      title: 'إدارة احترافية لحسابات التواصل الاجتماعي',
      desc: 'من تصميم المحتوى إلى الردود والإعلانات المدفوعة.'
    },
    {
      id: 8,
      title: 'خطط تسويق رقمي متكاملة',
      desc: 'تشمل: تحسين محركات البحث (SEO)، الإعلانات الرقمية، إدارة الحملات، وتحليل الأداء.'
    },
    {
      id: 9,
      title: 'دعم فني مستمر وتحديثات دورية',
      desc: 'لضمان استقرار المواقع والتطبيقات ومواكبتها لأحدث التقنيات.'
    },
    {
      id: 10,
      title: 'خدمة مخصصة وتجربة شخصية',
      desc: 'من لحظة الفكرة إلى التنفيذ الكامل، بخطوات واضحة ونتائج ملموسة'
    }
  ];

  return (
    <section className={`services-section ${showAll ? 'show-all' : ''}`} ref={sectionRef}>
      <h2 className="services-title">ماذا نقدّم لك في SolNex ؟</h2>

      <div className="timeline">
        <div className="timeline-column right">
          {timelineItems
            .filter((_, index) => index % 2 === 0) 
            .map((item, index) => (
              <div
                className="timeline-item"
                key={item.id}
                data-index={index * 2}
              >
                <div className="timeline-icon">{item.id}</div>
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
        </div>

        <div className="timeline-column left">
          {timelineItems
            .filter((_, index) => index % 2 === 1)
            .map((item, index) => (
              <div
                className="timeline-item"
                key={item.id}
                data-index={index * 2 + 1}
              >
                <div className="timeline-icon">{item.id}</div>
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
        </div>
      </div>

      {!showAll && (
        <button className="show-more-btn" onClick={() => setShowAll(true)}>
          عرض المزيد
        </button>
      )}
    </section>
  );
}

export default InfoTwo;