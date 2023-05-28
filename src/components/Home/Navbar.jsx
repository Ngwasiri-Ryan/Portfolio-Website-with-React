import React from "react";
import { ReactDOM } from "react";
import './home.css';
import home from './images/home.png';
import about from './images/about.png';
import experience from './images/experience.png';
import projects from './images/projects.png'
import testimonial from "./images/testimonial.png";
import contact from './images/contact.png'


function NavBar(){
    return(
    <div className='navbar-holder'>
        <div className='navbar'>
            <div className='holder'>
                <a href="#home"><img src={home} /></a>
            </div>
            <div className='holder'>
                <a href="#about"><img src={about} /></a>
            </div>
            <div className='holder'>
                <a href="#experience"><img src={experience} /></a>
            </div>
            <div className='holder'>
                <a href="#services"><img src={projects} /></a>
            </div>
            <div className='holder'>
                <a href="#testimonial"><img src={testimonial} /></a>
            </div>
            <div className='holder'>
                <a href="#contact"><img src={contact} /></a>
            </div>
            
        </div>
    </div>
    )
 
 }

 export default NavBar;