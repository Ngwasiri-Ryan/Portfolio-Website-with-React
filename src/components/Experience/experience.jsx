import React from 'react'
import './experience.css';
import Progess from './progress'
import Skill from './Skill';
function experience() {
  return (
    <div className='experience' id='experience'>
      <div className='heading'><span>E</span>xperiences</div>
      <p>Why get to me? Here is my experience in my skills and works.</p>

      <div className='container'>
          <Progess />
          <Skill />
      </div>
      
      
    </div>
  )
}

export default experience
