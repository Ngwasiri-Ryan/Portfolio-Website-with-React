import React from 'react';
import { ReactDOM } from 'react';
import './home.css';
import Intro from './Intro';
import NavBar from './Navbar';
import Picture from './picture';
import Icons from './icons';


function header() {
  return (
    <div>
      <div className='home' id='home'>
       <div className='container'>
        <Icons />   
        <Intro />  
        <Picture />
        <div className="scroll"><a href='#contact'>ScrollDown</a></div>
        </div>
        <NavBar />
      </div>
    </div>
  )
  }
  export default header






