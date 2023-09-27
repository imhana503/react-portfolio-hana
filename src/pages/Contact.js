import './contact.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { AiOutlineMail } from 'react-icons/ai';

const Contact = () => {
   const form = useRef();
   const sendEmail = (e) => {
      e.preventDefault();
   
      emailjs.sendForm('service_fygc5r4', 'template_6pkdzvn', form.current, '0DM3xA3nCzFqnoYRH')
         .then((result) => {
            console.log(result.text);
            e.target.reset();
         }, (error) => {

            console.log(error.text);
            form.current.focus();
         });
      };
   

   return(
      <section className="section contact">
         <h1 className="page-tit"><span>Contact </span>Me</h1>
         <div className="card-wrap">
            <div className="card">
               <AiOutlineMail className="icon"/>
               <h2>Email</h2>
               <p>imhana503@gmail.com</p>
               <small>Seand a message</small>
            </div>
            <div className="form">
               <form ref={form} onSubmit={sendEmail}>
                  <div className="form-item"> 
                     <div className="form-name"><label for="name">이름</label></div>
                     <div className="form-value"><input type="text" name="name" id="name" placeholder='입력해 주세요' required/></div>
                  </div>
                  <div className="form-item"> 
                     <div className="form-name"><label for="email">이메일</label></div>
                     <div className="form-value"><input type="email" name="email" id="email" placeholder='입력해 주세요' required/></div>
                  </div>
                  <div className="form-item"> 
                     <div className="form-name"><label for="message">내용</label></div>
                     <div className="form-value"><textarea name="message" id="message" rows="7" placeholder='입력해 주세요' required></textarea></div>
                  </div>
                  <div className="btn-group"><button type="submit" className="btn">이메일 보내기</button></div>
               </form>
            </div>
         </div>
        
      </section>
   )
}

export default Contact;