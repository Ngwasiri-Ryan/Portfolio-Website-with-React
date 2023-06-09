import React from 'react'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
function form() {
 {/*const form = useRef(); */} 
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('k32_gk679', 'ghtydd239_rz', form.current, '123rtfbl0_32')
      .then((result) =>{ 
          console.log(result.text);
          console.log('success');
      }, (error) => {
          console.log(error.text);
      });
  };
  
     
  return (
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
      
  

  )
}

export default form
