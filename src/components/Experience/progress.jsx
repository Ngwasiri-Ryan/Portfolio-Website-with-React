import React from 'react'

function progress() {
  return (
    <div>
    <div className='progress-skills'> 
        
            <div className='experience-items'>
                <div className="experience-item">
                    <div className="experience-info">
                        <p>Web Designing</p>
                        <p className='percentage'>70%</p>
                    </div>
                    <div className="progress-line" data-percent="90%">
                        <span style={{width: "70%"}}></span>
                    </div>
                </div>

                <div className="experience-item">
                    <div className="experience-info">
                        <p>Affillate Marketting</p>
                        <p className='percentage'>40%</p>
                    </div>
                    <div className="progress-line" data-percent="90%">
                        <span style={{width: "40%"}}></span>
                    </div>
                </div>

                <div className="experience-item">
                    <div className="experience-info">
                        <p>Graphics Designing</p>
                        <p className='percentage'>20%</p>
                    </div>
                    <div className="progress-line" data-percent="90%">
                        <span style={{width: "20%"}}></span>
                    </div>
                </div>

                <div className="experience-item">
                    <div className="experience-info">
                        <p>Web UI Design</p>
                        <p className='percentage'>60%</p>
                    </div>
                    <div className="progress-line" data-percent="90%">
                        <span style={{width: "60%"}}></span>
                    </div>
                </div>

                <div className="experience-item">
                    <div className="experience-info">
                        <p>Github</p>
                        <p className='percentage'>50%</p>
                    </div>
                    <div className="progress-line" data-percent="90%">
                        <span style={{width: "50%"}}></span>
                    </div>
                </div>
            </div>
        
      
    </div>
   

    </div>
  )
}

export default progress
