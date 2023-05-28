import React from 'react'
import './footer.css'
import facebook from './images/facebook.png'
import twitter from './images/twitter.png'
import linkedin from './images/linkedin.png'
import github from './images/github.png'
import search from'./images/search-icon.png';
function footer() {
  return (
    <div>
       <div className="footer">
   
    <div><center><p>USEFUL LINKS</p></center>

    <div className="menu-links">
        <div className='menu'>
        <ul>
           <li><a href='#home'>Home</a></li>
           <li><a href='#about'>About Me</a></li>
           <li><a href='#experience'>Experience</a></li>
           <li><a href='#services'>Services</a></li>
           <li><a href='#testimonial'>Testimonials</a></li>
           <li><a href='#contact'>Contact</a></li>
        </ul>
        </div>
        
        
        <ul>
           <li><a href=''>Facebook</a></li>
           <li><a href=''>Twitter</a></li>
           <li><a href=''>Github</a></li>
           <li><a href=''>Linkedin</a></li>
        </ul>

        <ul>
           <li><a href=''>Collaegues</a></li>
           <li><a href=''>Partners</a></li>
           <li><a href=''>My Work</a></li>
           <li><a href=''>Current Projects</a></li>
           <li><a href=''>Future Projects</a></li>
           <li><a href=''>Inspiration</a></li>
        </ul>

    </div>

    <div className='icons'>

       <img src={github}/>
       <img src={facebook}/>
        <img src={linkedin}/>
        <img src={twitter}/>

    </div>

        <div className="search">
         <img src={search}/>
         <input type='text' ></input>
        </div>



        </div>
      
    </div>
     </div>
  )
}

export default footer
