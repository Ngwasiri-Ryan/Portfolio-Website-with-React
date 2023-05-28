import React from 'react';
import './about.css';
import Picture from '../About/picture';
import Content from '../About/content';
function about() {
  return (
    <div>
        <div className='about' id='about'>
          <div className='about-container'>
          <Picture />
          <Content />
          </div>
        </div>
      
    </div>
  )
}

export default about;
