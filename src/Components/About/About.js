import React, { Component } from 'react'
import '../About/About.css';
import dot from '../../Assets/dot.png';
import red from '../../Assets/red.png';
import orange from '../../Assets/dot-orange.png';
import purple from '../../Assets/purple.png';
import play from '../../Assets/playA.png'

import Work from './Work';


export default class About extends Component {
    render() {
        return (
            <div className="about"  >
             
             
            <div className="banner" >        
            <div className="info"  onMouseOver={this.props.navClose}>
            <h3>About BinRoot Lab </h3>
            <p>BinRoot Lab is the partner of choice for many 
               word's leading enterprises, SMEs and technology challengers.
               We help businesses elevate their value through custom
               software development, product design QA and consultancy services. </p>
             </div>   

            
            <div className="boxes"  onMouseOver={this.props.navClose}>
              <div className="box1">
                <span>100+</span>
                <p>Active Client Acconts</p>
              </div>

              <div className="box2">
              <span>47.95</span>
              <p>Net Promoter Score </p>
              </div>

              <div className="box3">
            <span>600+</span>
            <p>End-to-end projects</p>
              </div>
            </div>

            </div> 
            
            <div className="solhed">
        <label>Problems We'll help you to solve</label>
        </div>

            <div className="solution" >
           
            <div className="solution1">
            <img src={dot} alt="" />
             <div className="soldt1">
            <span>Close IT resourcing gaps</span>
            
            <p>Our team of software experts are able to 
              to tailor our core services to fit your business requirements.
              And for those most complex of challenges, we'll engage experts
              with a grouding in physics and mathematics to guarantee success 
              where software expertise alone might not be enough.
              </p>             
              </div>
            </div>

            <div className="solution2">
            <img src={dot} alt="" />
             <div className="soldt2">
              <span>Save Business operations costs</span>
              <p>
              We'll help you test bold new ideas while sharing your 
              development risk. So you can save up to 30% on development risk.
              So you can up to 30% on development costs, get products and services to
              market twice as fast, improve efficiency and flex your business model to boost revenue. 
              </p>             
              </div>  
            </div>

            <div className="solution3">
            <img src={dot} alt="" />
             <div className="soldt3">
              <span>Adopt digit transformations</span>
              <p>
                  We can help you adapt to changing demads with
                  agile, innovative, technologies-like blockchain, Data 
                  Science and Cloud. You can leave your in-house 
                  resource in place to focus on your core business, for 
                  perfectly seamless service delivery.  
              </p>             
              </div>  

            </div>

            </div>
 
            <div className="banner2">
                <div className="cbar">
                </div>
                <span>Ready to realise your product vision?</span>
                <p>Partner with us</p>

                <img src={play} alt=""></img>
            </div>
           
            <div className="vision">
               <div className="visionp">
                  <span>Our Vision</span>
                  <p>BinRoot lab has championed technological innovation since 2015.. 
                    Now, with our experts across, we help clients overcome business challenges with custom software
                   engineering and consultancy services that add tangible value.</p>
               </div>
                <img src="https://blog.ipleaders.in/wp-content/uploads/2016/03/Konference_phone_meeting.jpg" alt="" />
            </div>

            <div className="diffp">
               <p>Whats Different About Binroot Lab?</p> 
            </div>

            <div className="differences">
            <div className="diff1">
            <div className="diffdt1">
              <img src={purple} alt=""/>
               <span>Engineering with passion</span>
               </div>
               <p>We’re a network of innovators. We devise bold solutions to the most 
               intricate client challenges. It’s our ability to explore new technologies to design best-fit solutions 
               that has 96% of our clients ready to recommend us.</p>
               <div className="diffclr1"></div>
            </div>

            <div className="diff2">
            <div className="diffdt2">
              <img src={orange} alt=""/>
               <span>Perfomance Focus</span>
               </div>
               <p>We become your dedicated partner. Which means we won’t finish a project until both we, and you, are 100% happy. With a client satisfaction rate of over 97%, we’re considered a key strategic technology partner.</p>
               <div className="diffclr2"></div>
               
            </div>

            <div className="diff3">
            <div className="diffdt3">
              <img src={red} alt=""/>
               <span>Dedication to success</span>
               </div>
               <p>We drive innovations that help our clients stay ahead of the curve. We care about your immediate needs and your long-term goals. We believe that success is three-fold: for our clients, their customers and the communities they influence.</p>
               <div className="diffclr3"></div>
            </div>
            </div>

           
            <Work />
            
           
            </div>
        )
    }
}
