import React from "react";
import { ReactDOM } from "react";
import './home.css';
import html from './images/html.png';
import css from './images/css.png';
import js from './images/js.png';
import react from './images/react.png';
{/*intro*/}
function Intro(){
    return(
        <div className='intro'>
            <div className='holder'>
           
                <div className='heading'>
                    <span>I'm</span> Ngwasiri Ryan
                </div>
                <div className='info'>A Frontend Developer</div>
               
               <div className='skills'>
                    <img src={html}  className='skill-img'/> 
                    <img src={css} className='skill-img' /> 
                    <img src={js}  className='skill-img'/> 
                    <img src={react} className='skill-img'/> 
               </div>
               <div className='button-holder'>
                
               <button>Let's Talk</button>
               
               <button>Download CV</button>
               </div>
              
               
               
            </div>
            
        </div>
    )  
}
export default Intro;
{/*end of intro*/} 