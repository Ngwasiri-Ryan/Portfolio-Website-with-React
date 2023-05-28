import React from "react";
import photo from './images/photo.png';

function Picture(){
    return(
        <div className='picture'>
         <img src={photo} />
        </div>
    )  
}
export default Picture;