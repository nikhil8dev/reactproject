import React, { Component } from 'react';
import './Doing.css';
export default class Doing extends Component {
    state = { open: true,
        open1: false,
        open2: false,
        open3: false,  };
open = () => this.setState({ open: true,open1: false,open2: false,open3: false})
close = () => this.setState({ open: false })

open1 = () => this.setState({ open1: true,open: false,open2: false,open3: false})
close1 = () => this.setState({ open1: false })

open2 = () => this.setState({ open2: true,open: false,open1: false,open3: false })
close2 = () => this.setState({ open2: false })

open3 = () => this.setState({ open3: true,open: false,open2: false,open1: false })
close3 = () => this.setState({  open3: false })
    render() {
        return (
            <div className="doing">
                 <div className="framework">
                    <h4>What We Do</h4>
                    <p>Consistancy and transparency are key to our delivery process, so we follow the same framework
                        regardless of the project.</p>
                 </div>

                 <div className="carousel">
                 <div className="Number"  >
          
                  <span className="Num1" onClick={this.open}><label>1</label></span>
                  <span className="Num2" onClick={this.open1}><label>2</label></span>
                  <span className="Num3" onClick={this.open2}><label>3</label></span>
                  <span className="Num4" onClick={this.open3}><label>4</label></span>
           </div>
      
           <hr className="hRule" />
               
                  <div style={{width:"100%"}}>
          { this.state.open ?(
                <div className="itm1" >
               <p>We visit our client to understand the challenges and goals of delivery. It gives 
               us a holistic view of project so we can brainstorm and co-create a solution. Working this way 
               encourages a collaborative approch, so we know we're working towards the same vision </p>
               
                </div>
              )
              : (
                null
              )  }
          </div>

          <div style={{width:"100%"}}>
          { this.state.open1 ?(
                <div className="content" >
                  <button> content item 1 </button>
                  
                </div>
              )
              : (
                null
              )  }
          </div>

          <div style={{width:"100%"}}>
          { this.state.open2 ?(
                <div className="content" >
                  
                  <button> content item 2 </button>
                 
                </div>
              )
              : (
                null
              )  }
          </div>

          <div style={{width:"100%"}}>
          { this.state.open3 ?(
                <div className="content" >
                 
                  <button> content item 3 </button>
                </div>
              )
              : (
                null
              )  } 
           </div>
       
          </div>

          <div className="deliver">
            <div className="deliverysection">
                <h3>Our Unique Delivery Framework</h3>
                  <p>We look beyond software engineering to help you create
                  business-transforming solutions. BinRoot Lab end-to-end 
                  cooperation models have been developed through close and 
                  continued client partnership, creating a seamless and transparent 
                  software delivery process.</p>
                  
                  <p>Our delivery framework encapsulates a set of standards and 
                  practices,with actionable output at each stage of the process -for true collaoration.</p>
            </div>
            <div className="deliveryimg">
            <img src="https://image.freepik.com/free-photo/handsome-employee-smiling-medium-shot_23-2148508900.jpg" alt="" />
             </div>
          </div>
         </div>
            
        )
    }
}
