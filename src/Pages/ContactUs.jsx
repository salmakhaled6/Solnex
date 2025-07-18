import React from 'react';
import NavBar from '../Components/NavBar';
import { useEffect } from "react";
import Footer from '../Components/Footer';
import './contactForm.css';

import pic from "../assets/images/contact.gif"



function ContactUs() {
  useEffect(() => {
    console.log("contact page loaded");
  }, []);
  return (
    <div className="contact-page-box">
      <NavBar />
       <div className='contact-page'>
   
    <div className='contact-form'>
  
      <form>
        <label htmlFor='name'>الأسم</label>
        <input type='text' id='name' placeholder='أدخل أسمك' />

        <label htmlFor='name'>رقم الهاتف</label>
        <input type='text' id='name' placeholder='رقم الهاتف' />

        <label htmlFor='email'>البريد الألكترونى</label>
        <input type='email' id='email' placeholder='أدخل بريدك الإلكتروني' />

        <p>نوع الأستفسار</p>
        <div className='button-group'>
          <button type='button'>أستفسار عام</button>
          <button type='button'>مساعدة تقنية</button>
          <button type='button'>تقييم</button>
        </div>

        <label htmlFor='message'>الرساله</label>
        <textarea id='message' rows='1' placeholder='أدخل رسالتك'></textarea>

        <div className='form-buttons'>
          <button type='submit' className='send'>إرسال</button>
          <button type='reset'>حذف</button>
        </div>
      </form>
    </div>

    <div className='contact-page-details'>
      <img src={pic} alt="" />
<p className='contact-details-heading'>قم بأرسال استفسارك لنا</p>
      <p className='contact-details-para'>لا تتردد في التواصل معنا إذا كان لديك أي أسئلة أو تعليقات</p>
    </div>
  </div>
  <Footer />
  </div>
   
  );
}

export default ContactUs;