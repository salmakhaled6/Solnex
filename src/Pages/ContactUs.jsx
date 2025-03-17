import React from 'react';

function ContactUs() {
  return (
    <div className='contact-page'>
      <div className='contact-form'>
    
        <form>
          <label htmlFor='name'>الأسم</label>
          <input type='text' id='name' placeholder='أدخل أسمك' />

          <label htmlFor='email'>البريد الألكترونى</label>
          <input type='email' id='email' placeholder='أدخل بريدك الإلكتروني' />

          <p>نوع الأستفسار</p>
          <div className='button-group'>
            <button type='button'>أستفسار عام</button>
            <button type='button'>مساعدة تقنية</button>
            <button type='button'>تقييم</button>
          </div>

          <label htmlFor='message'>رسالة</label>
          <textarea id='message' rows='1' placeholder='أدخل رسالتك'></textarea>

          <div className='form-buttons'>
            <button type='submit' className='send'>إرسال</button>
            <button type='reset'>حذف</button>
          </div>
        </form>
      </div>

      <div className='contact-page-details'>
        <p className='contact-details-heading'>قم بأرسال استفسارك لنا</p>
        <p>لا تتردد في التواصل معنا إذا كان لديك أي أسئلة أو تعليقات.</p>
      </div>
    </div>
  );
}

export default ContactUs;