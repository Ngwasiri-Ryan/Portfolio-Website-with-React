import React from 'react'
import './testimonial.css';
import pic1 from './images/pic1.PNG'
import pic2 from './images/pic2.PNG'
import pic3 from './images/pic3.PNG'
import pic4 from './images/pic4.PNG'
import pic5 from './images/pic5.PNG'
import pic6 from './images/pic6.PNG'
import pic7 from './images/pic7.PNG'
function testimonial() {
  return (
    <div id='testimonial'>
        <div classNameName="testimonial">
          <div className="heading">
           <center><span>T</span>estimonials</center> 
          </div>
          <p>Here are some of the testimonials from my clients who had intrest in my work. </p>
          <div className="container">
           
            <div className="testimonial-card">
               <img src={pic1} alt="a picture"/>
                <div className="content">
               <span className='name'>Brandon Wang</span>
               <span>I really liked your logo design.</span>
               <button>View Comments</button>
                </div>
                </div>
                
                <div className="testimonial-card">
               <img src={pic2} alt="a picture"/>
                <div className="content">
               <span className='name'>Queency Jones</span>
               <span>I loved your work on my website.</span>
               <button>View Comments</button>
                </div>
                </div>

                <div className="testimonial-card">
               <img src={pic3} alt="a picture"/>
                <div className="content">
               <span className='name'>Edison Romone</span>
               <span>Your web app is amazing</span>
               <button>View Comments</button>
                </div>
                </div>

                <div className="testimonial-card">
               <img src={pic4} alt="a picture"/>
                <div className="content">
               <span className='name'>Patric Ayuk</span>
               <span>Cool bro, I like your work keep up.</span>
               <button>View Comments</button>
                </div>
                </div>

                <div className="testimonial-card">
               <img src={pic5} alt="a picture"/>
                <div className="content">
               <span className='name'>Silvia Martins</span>
               <span>Your UI/UX designs are spectacular.</span>
               <button>View Comments</button>
                </div>
                </div>

                <div className="testimonial-card">
               <img src={pic6} alt="a picture"/>
                <div className="content">
               <span className='name'>Jason Blunt</span>
               <span>Keep up the work dude.</span>
               <button>View Comments</button>
                </div>
              
               </div>

                <div className="testimonial-card">
               <img src={pic7} alt="a picture"/>
                <div className="content">
               <span className='name'>Cliford Brown</span>
               <span>You make good front-end websites.</span>
               <button>View Comments</button>
                </div>
              
               </div>
               <div className="testimonial-card">
               <img src={pic4} alt="a picture"/>
                <div className="content">
               <span className='name'>Kajo Sandy</span>
               <span>Loved your gaphics design.</span>
               <button>View Comments</button>
                </div>
              
               </div>

         
               </div>
               </div>
          </div>
  )
}

export default testimonial
