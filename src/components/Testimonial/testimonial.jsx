import React from 'react'
import './testimonial.css';
import pic1 from './images/pic1.jpg'
import pic2 from './images/pic2.jpeg'
import pic3 from './images/pic3.jpeg'
function testimonial() {
  return (
    <div id='testimonial'>
        <div classNameName="testimonial">
          <div className="heading">
           <center><span>T</span>estimonials</center> 
          </div>
          <p>Here are some of the testimonials from my clients who had intrest in my work. </p>
          <div className="container">
            <div className="testimonial">
               <img src={pic1} />
               <p className='name'>Katty Martins</p>
               <p>You really made my dream website come to life.
                I will spread the word on your work.
               </p>
            </div>

            <div className="testimonial">
               <img src={pic2} />
               <p className='name'>Eyong Rens</p>
               <p>I really love your graphic designs and logos. They are bringing in more
                clients for interrations than before. Keep it up bro.
               </p>
            </div>

            <div className="testimonial">
               <img src={pic3} />
               <p className='name'>Ashu Raymond</p>
               <p>I really love your web designs. They are bringing in more
                clients for interrations than before.
               </p>
            </div>



            </div>  
          


</div>
          </div>
  )
}

export default testimonial
