import React from 'react'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
function form() {


     const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ij0vsp1', 'template_t5815vn', form.current, 'ip41CGhs3MowyAGey')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();
        
    };

  return (
    <div>
       <form className='form' ref={form} onSubmit={sendEmail}>
          <div className='heading'>
            Send Message
          </div>
          <div className='input'>
          <input type='text' placeholder='Full Name' name='user_name' required></input>
          </div>
          <div className='input'>
          <input type='text' placeholder='Your Mail Address'  name="user_email"></input>
          </div>
          <div className='input'>
          <input type='text' placeholder='Your Subject'  name="subject"></input>
          </div>
          <div className='input'>
          <input type='textarea' placeholder='Write your Message' name='message'></input>
          </div>

          <button type='submit' className='btn' >Submit</button>
          
        </form>
        </div>

  )
}

export default form
