import React from 'react'
import './services.css'
import responsive from './images/responsive.png'
import coding from './images/coding.png'
import graphics from './images/graphics.png'
import web from './images/web-design.png'
function services() {
  return (
    <div>
     <div className="services" id='services'>
        <p className='heading'><span>S</span>ervices</p>
        
            <div className="container">

                <div className="service">
                 <div className="diamond">
                    <img src={coding}/>
                 </div>
                 <div className='service-info'>
                 <div className="title"><center>Coding</center></div>
                    <div className="content">
                      Coding basic functionalities in your website can be done. Basic programming
                      algorithms can be implemented according to your description.
                      Your programs with my help can solve basic real life scenerios.
                    </div>
                 </div>
                    
                </div>

                <div className="service">
                 <div className="diamond">
                    <img src={web}/>
                 </div>
                 <div className='service-info'>
                 <div className="title"><center>Web design</center></div>
                    <div className="content">
                      Web designs are carried out according to user specifications.
                      Web designs can be  customized according to your needs. To view
                      more web design and features on my github account.
                    </div>
                 </div>
                    
                </div>

                <div className="service">
                 <div className="diamond">
                    <img src={responsive}/>
                 </div>
                 <div className='service-info'>
                 <div className="title"><center>responsive web design</center></div>
                    <div className="content">
                     Responsive web design can be done on your website to make it 
                     good on your laptops, tablets and smart phone.
                     For more refer to my github account.
                    </div>
                 </div>
                    
                </div>

                <div className="service">
                 <div className="diamond">
                    <img src={graphics}/>
                 </div>
                 <div className='service-info'>
                 <div className="title"><center>graphic design</center></div>
                    <div className="content">
                      Flyer designs for your events, businesses according to your standards.Get to 
                      me for your designs.
                    </div>
                 </div>
                    
                </div>

                

                
               
               

            </div>

     </div>
    </div>
  )
}

export default services
