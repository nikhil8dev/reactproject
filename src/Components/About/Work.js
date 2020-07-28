import React, { Component } from 'react'
import './Work.css'

import software from '../../Assets/software.png';
import cooperate from '../../Assets/cooperate.png';
import consulting from '../../Assets/consulting.png';
import design from '../../Assets/design.png';
import investment from '../../Assets/investment.png';
import Rocket from '../../Assets/Rocket.png';
import up from '../../Assets/arrow-up.png';
import down from '../../Assets/down-arr.png';

import Doing from './Doing'
export default class Work extends Component {
    render() {
        return (
            <div className="work">
                 <div className="howworks">
                     <div className="workhead">
                       <span>How We Work</span>
                       <p>We help you address complex business 
                        problems with technology solutions.</p>
                     </div>

                     <div className="links">
                        <span>Read also</span>
                        <p>About us</p>
                        <p>Partners</p>
                        <p>CSR</p>
                        <p>Leadership team</p>
                     </div>
                 </div>

                  <div className="partnership">
                      <div className="techno">
                      <span>The problem-solving technology partnership</span>
                      <p>We’re passionate about our cross-functional approach. We help you design, test, build and deliver products – faster and more cost-effectively. BinRoot Lab’ cooperation models offer flexibility, so we can match our services to your goals, resources and timeline. We’re proud to contribute to the success of the world’s leading brands.</p>
                      </div>
     
                       <img src="https://www.theladders.com/wp-content/uploads/handshake_190617-800x450.jpg" alt=""/>
                  </div>
 
                   <div className="get">
                      <h3>What You Get With Binroot Lab</h3>
                       <div className="sticker">
                         <div className="sticker1">
                           <img src={software} alt="" />
                         <p>Almost a decades of software development experience</p>
                         </div>
                         <div className="sticker2">
                           <img src={cooperate} alt="" />
                         <p>Flexible, cost-efficient cooperation models</p>
                         </div>
                         <div className="sticker3">
                           <img src={consulting} alt="" />
                         <p>Extensive technology consulting expertise</p>
                         </div>
                         <div className="sticker4">
                           <img src={design} alt="" />
                         <p>Design Thinking approach to transformational solution</p>
                         </div>
                         <div className="sticker5">
                           <img src={investment} alt="" />
                         <p>Reduced investment risk with MVP development</p>
                         </div>
                         <div className="sticker6">
                           <img src={Rocket} alt="" />
                         <p>Technological innovation via Companyinhouse R&D lab</p>
                         </div>
                       </div>
  
                   </div>

                   <div className="cooperate">
                     <div className="team">
                       <span>How We cooperate</span>
                        <div className="Eteam">
                        <div className="colrbar">
                        </div>
                        <div className="teamDet">
                           <label>Engineering Team  <img src={up} alt=""/></label> 
                          
                             <p>BinRoot Lab agile engineering experts are with poised to integrate with your core
                              team - with mult-faceted technological expertise that helps you up-skill, reduce 
                              costs and mitigate risk. </p>
                               
                              <p>Our responsibility:  providing best-fit skills and experience for your requirements</p>
                               
                              <p>Client responsibility:  Workload allocation, in-house process and management intergration for our team.</p>
                        </div>
                        </div>

                        <div className="smartteam">
                        <span>Smart Team</span> <img src={down}  alt=""/>
                        </div>
                          
                        <div className="dev">
                        <span>Custom software development</span> <img src={down}  alt=""/>
                        </div>
                         <div>
                         </div>
                         
                        <div>
                        </div>

                     </div>

                     <div className="cooperateimg">
                     <img src="https://www.ctbizcenters.com/wp-content/uploads/2015/08/4-Reasons-Effective-Meetings-are-Important-in-a-Workplace.jpg" alt="" />
                     </div>  

                   </div>
                   <Doing />  
            </div>
        )
    }
}
