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
           
            <div className="testimonial-card">
               <img src={pic1} alt="a picture"/>
                <div className="content">
               <span className='name'>John Doe</span>
               <span>I really liked your logo design.</span>
               <button>View Comments</button>
                </div>
                </div>
                
                <div className="testimonial-card">
               <img src={pic1} alt="a picture"/>
                <div className="content">
               <span className='name'>John Doe</span>
               <span>I really liked your logo design.</span>
               <button>View Comments</button>
                </div>
                </div>

                <div className="testimonial-card">
               <img src={pic1} alt="a picture"/>
                <div className="content">
               <span className='name'>John Doe</span>
               <span>I really liked your logo design.</span>
               <button>View Comments</button>
                </div>
                </div>

                <div className="testimonial-card">
               <img src={pic1} alt="a picture"/>
                <div className="content">
               <span className='name'>John Doe</span>
               <span>I really liked your logo design.</span>
               <button>View Comments</button>
                </div>
                </div>

                <div className="testimonial-card">
               <img src={pic1} alt="a picture"/>
                <div className="content">
               <span className='name'>John Doe</span>
               <span>I really liked your logo design.</span>
               <button>View Comments</button>
                </div>
                </div>

                <div className="testimonial-card">
               <img src={pic1} alt="a picture"/>
                <div className="content">
               <span className='name'>John Doe</span>
               <span>I really liked your logo design.</span>
               <button>View Comments</button>
                </div>
              
               </div>

                <div className="testimonial-card">
               <img src={pic3} alt="a picture"/>
                <div className="content">
               <span className='name'>Cliford Brown</span>
               <span>You make good front-end websites.</span>
               <button>View Comments</button>
                </div>
              
               </div>
               <div className="testimonial-card">
               <img src={pic2} alt="a picture"/>
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
