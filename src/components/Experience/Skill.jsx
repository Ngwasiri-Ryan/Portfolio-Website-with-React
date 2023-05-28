import React from 'react'
import html from './images/html.png'
import css from './images/css.png'
import react from './images/react.png'
import javascript from './images/js.png'
function Skill() {
  return (
    <div>
         <div className="programming-skill">
            <p>Skills</p>
         <div className="container">
            <div className="skill">
               <img src={html} />
               <div className="progress-line" data-percent="90%">
                        <span style={{width: "80%"}}></span>
                    </div>
                    <span>80%</span>
            </div>

            <div className="skill">
               <img src={css} />
               <div className="progress-line" data-percent="90%">
                        <span style={{width: "65%"}}></span>
                    </div>
                    <span>65%</span>
            </div>

            <div className="skill">
               <img src={javascript} />
               <div className="progress-line" data-percent="90%">
                        <span style={{width: "50%"}}></span>
                    </div>
                    <span>53%</span>
            </div>

            <div className="skill">
               <img src={react} />
               <div className="progress-line" data-percent="90%">
                        <span style={{width: "67%"}}></span>
                    </div>
                    <span>67%</span>
            </div>








         </div>

         </div>
      
    </div>
  )
}

export default Skill
