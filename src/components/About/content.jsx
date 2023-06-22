import React from 'react';
import './about.css'
import jobs from './images/job.png'
import clients from './images/clients.png'
import projects from './images/project.png'
function content() {
  return (
    <div>
        <div className='content'>
           <div className='heading'>
               <span>About</span> Me
           </div>
           <div className="boxes">
            <div className="box">
                  
                  <img src={jobs}/>
                  <p>Work</p>
                  <span>
                    3
                  </span>
            </div>
            <div className="box">
                 <img src={clients}/>
                 <p>Clients</p>
                 <span>
                  6
                 </span>
            </div>
            <div className="box">
              <img src={projects}/>
                <p>Projects</p>
                <span>
                  10
                </span>
            </div>
           </div>

            <p>
                Hello there!  I am an aspiring software engineer and
                Fullstack Developer.
                <br/>
                 I am currently a software engineering student at the University of Buea.
                 
                 I can built frontend web applications for my clients  and meet up to 
                 their needs for their businesses and their presentations.
                 My aimm is to produce applications suitable for your needs and  services.
                 
                 <br/>
                 <br/>
                
                 
                 I can build applications for my clients  and meet up to 
                 their daily life routine for their businesses and their presentations.
                
                 <br/>
                

            </p>
               <center><button>Let's Talk</button></center>
        </div>
      
    </div>
  )
}

export default content
