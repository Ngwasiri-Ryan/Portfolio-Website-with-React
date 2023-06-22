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
            <div className="aspiring">
               <div className="box">
                  <div className="content">
                     <span></span>
                     <p className='name'>
                        nodejs</p>
                  </div>
                  <div className="content">
                     <span></span>
                     <p className='name'>
                        expressjs</p>
                  </div>
                  <div className="content">
                     <span></span>
                     <p className='name'>
                        mongodb</p>
                  </div>
                  <div className="content">
                     <span></span>
                     <p className='name'>
                        React Native</p>
                  </div>
                  
               </div>

               <div className="box">
               <div className="content">
                     <span></span>
                     <p className='name'>
                        MySQL</p>
                  </div>
                  <div className="content">
                     <span></span>
                     <p className='name'>
                        Php</p>
                  </div>
                  <div className="content">
                     <span></span>
                     <p className='name'>
                        TypeScript</p>
                  </div>
                  <div className="content">
                     <span></span>
                     <p className='name'>
                        Tailwind CSS</p>
                  </div>
               </div>
            </div>
         </div>
      
    </div>
  )
}

export default Skill
