import React, { Component} from 'react';

import Form from '../Components/Form/Form'
import Clients from './Clients/Clients';
import '../Components/Home.css';
import { Container, Row, Col } from 'react-bootstrap';

import AI from '../Assets/video1.mp4';
import play from '../Assets/playA.png';



export default class Home extends Component {
  
    render() {
  
        return (
            
            <div className="home" onMouseOver={this.props.navClose}>
            <video
            autoPlay
            muted
            loop
            style={{
              position:"absolute",
              width:"100%",
              height:"100%",
              left:"50%",
              top:"50%",
              objectFit:"cover",
              transform:"translate(-50%, -50%)",
              zIndex:"-1"
            }}  
            >
             <source src={AI} type="video/mp4" />
            </video>
            <Container fluid> 
            <Row> 
            
            <Col sm={12} lg={12} md={12}  >
             
               <div className="intro" onMouseOver={this.props.navclose}>
             
                 <p>Your Technology partner for<br/>
                    Software Innovation and<br/>
                    Market-leading Solutions  
                 </p>
              
               </div>
            </Col>
            <Col sm={12} lg={12} md={12} style={{padding:"0"}} >
               <div className="cards">
                  <div className="card1">
                     <span>
                     What business result do <br/>
                     you want to achive?
                     </span>
                    <div className="card1dt">
                      <p>
                      Explore All Services
                      </p>   
                      <img style={{height:"25px",marginTop:"8px",marginLeft:"10px"}} src={play} alt=""/>
                         
                      </div> 
                  </div>

                  <div className="card2">
                  <span>
                  Reduce cost of business <br/>
                  operations
                  </span>
                 <div className="card2dt">
                   <p>
                   Application Development
                   </p>   
                   <img style={{height:"25px"}} src={play} alt=""/>
                    <span>
                       Incorporate your vision and requirements into a <br/>
                       tailored software solution, on and within budget  
                       </span> 
                   </div> 
               </div>

               <div className="card3">
                  <span>
                  Address IT resoursing <br/>
                   challenges
                  </span>
                 <div className="card3dt">
                   <p>
                   Smart Team
                   </p>   
                   <img style={{height:"25px"}} src={play} alt=""/>
                    <span>
                       Hire a delicate team of experts to efficiently <br/>
                       fulfill your software development requirements
                       </span> 
                   </div> 
               </div>
                  
               <div className="card4">
               <span>
               Design the concept of your <br/>
               business idea
               </span>
              <div className="card4dt">
                <p>
                Product design 
                </p>   
                <img style={{height:"25px"}} src={play} alt=""/>
                 <span>
                    Validate business concepts and deliver competitave
                    products with your customers in mind 
                    </span> 
                </div> 
            </div>

               </div>
             </Col>
            </Row> 
            </Container> 
           
               <Clients />
               <Form/>
               
            </div>
            
        )
    }
}

