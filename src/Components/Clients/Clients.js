import React, { Component } from 'react'
import '../Clients/Clients.css'

export default class Clients extends Component {
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
       
           return(
               
           <div className="clients">
           <h4 className="heading">Our Clients</h4>
          <div className="Tabs"  >
          <span className="Tab" onClick={this.open}><img src="https://ticktalkto.com/_nuxt/img/640076a.svg" alt="" /></span>
          <span className="Tab" onClick={this.open1}><img src="https://ticktalkto.com/_nuxt/img/640076a.svg" alt="" /></span>
          <span className="Tab" onClick={this.open2}><img src="https://ticktalkto.com/_nuxt/img/640076a.svg" alt="" /></span>
          <span className="Tab" onClick={this.open3}><img src="https://ticktalkto.com/_nuxt/img/640076a.svg" alt="" /></span>
       
          </div>
          
          <div className="Content"></div>
          <div style={{width:"100%"}}>
          { this.state.open ?(
                <div className="ticktalk" >
                
                <span>Confidential Counselling on the go </span>
                <p>We are satisfied with the expertise and the quality of work that BinRoot Lab <br/> 
                provided for us. We received excellent feedback about the product, its<br/>
                design, functionalities and user-friedliness.</p> {
                 <label>ABHAY SINGHAL,FOUNDER, TICKTALKTO </label>
                    
                }
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
           )
  }
}
