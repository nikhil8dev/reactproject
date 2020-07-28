import React, { Component } from 'react'
import "./Fotter.css"
import home from '../../Assets/home.png'
import logo from '../../Assets/logo.png'
import fb from '../../Assets/fb.png'
import twit from '../../Assets/twit.png'
import linkedin from '../../Assets/linkedin.png'

import Map from "./Map";
import { LoadScript} from "@react-google-maps/api";

export default class Fotter extends Component {

    
    
    render() {
        return (
            <div className="fotter">
                 <div className="fotlogo">
                     <div className="fotpng">
                        <img src={logo} alt="" />
                     </div>   
                     <span className="address"><img src={home} alt="" />Address</span>
                     <p>93 yelahnaka 4th phase, Bangalore(india)560064</p>
                     <div className="fotlinks">
                        <img id="fb" src={fb} alt=""/>
                        <img id="twit" src={twit} alt=""/>
                        <img id="linkedin" src={linkedin} alt=""/>
                     </div>
                 </div>

                 <div className="fotmap">
                 <div className="fotnavlinks">
                    <label>Company</label>
                    <span>About us</span>
                    <span>Services</span>
                    <span>How We Work</span>
                    <span>Careers</span>
                    <span>Contact Us</span>
                 </div>
                 <LoadScript googleMapsApiKey="AIzaSyBiBGd1wMllwtgMRY2crh7_t_WK7EhqZ54">
                 <Map zoom={15} center={{ lat: 18.520760, lng: 73.855408 }}></Map>
               </LoadScript>
                 </div>

            </div>
        )
    }
}
