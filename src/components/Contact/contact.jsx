import React from 'react'
import Info from './info'
import Form from './form'
import './contact.css'
function Contact() {
  return (
    <div id="contact">
      <div className='contact-heading'>
        <center>
          Contact <span>Me</span>
        </center>
      </div>
      <center>
          <p className='content'>Contact me for more information on your needs right now!</p>
      </center>
      <div className='contact-container'>
        <Info />    
        <Form />  
       </div>

      
       </div>
  

      
  )
}

export default Contact
