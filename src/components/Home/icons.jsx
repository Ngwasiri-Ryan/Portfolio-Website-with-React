import React from "react";
import facebook from './images/facebook.png';
import github from './images/github.png';
import twitter from './images/twitter.png';
import linkedin from './images/linkedin.png';

function Icons(){
    return(
        <div className='icons'>
            <img src={facebook}/> 
            <img src={twitter}/> 
            <img src={github}/> 
            <img src={linkedin}/> 
        </div>
    )  
}
export default Icons;