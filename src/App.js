import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from  './Components/Home.js';
import About from './Components/About/About.js';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Fotter from '../src/Components/Fotter/Fotter.js' 
import  Logo  from './Assets/logo.png';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

export default class App extends Component {

  state = { hovering: false,
    hovering1: false,
    hovering2: false,
    hovering3: false,  };
mouseOver = () => this.setState({ hovering: true,hovering1: false,hovering2: false,hovering3: false })

mouseOut = () => this.setState({ hovering: false,hovering1: false,hovering2: false,hovering3: false })

mouseOver1 = () => this.setState({ hovering1: true,hovering: false,hovering2: false,hovering3: false })

mouseOver2 = () => this.setState({ hovering2: true,hovering1: false,hovering: false,hovering3: false })

mouseOver3 = () => this.setState({ hovering3: true,hovering1: false,hovering2: false,hovering: false })

  render() {
    return (
      <div className="App">
  
      <Router>
    
      <div className="header">
             
            <div className="navBar">
            <div className="logo">
              <img src={ Logo } alt=''/>
            </div>

            <div className="nav">
            <div onMouseEnter={this.mouseOut} style={{width:"30px"}}></div>
            <span  onMouseOver={this.mouseOver} >  About Us </span>
            <div onMouseEnter={this.mouseOut} style={{width:"30px"}}></div>
            
            <div onMouseEnter={this.mouseOut1} style={{width:"30px"}}></div>
            <span onMouseOver={this.mouseOver1}> Services </span>
            <div onMouseEnter={this.mouseOut1} style={{width:"30px"}}></div>
            
            <div onMouseEnter={this.mouseOut2} style={{width:"30px"}}></div>
            <span onMouseOver={this.mouseOver2} >Industries & Expertise</span>
            <div onMouseEnter={this.mouseOut2} style={{width:"30px"}}></div>
            
            <div onMouseEnter={this.mouseOut3} style={{width:"30px"}}></div>
            <span onMouseOver={this.mouseOver3} >Clients</span>
            <div onMouseEnter={this.mouseOut3} style={{width:"30px"}}></div>
          
            </div>
          
          <div className="contact"  >
          <Button variant="light">contact us</Button>
          </div>
          
           <div className="search">
              <img className='png' src="https://svg-clipart.com/clipart/white/ktmN7fh-search-icon-white-one-clipart.png" alt='' />
           </div>

          </div>   
          <div style={{width:"100%"}}>
          { this.state.hovering ?(
                <div className="menu" >
               <Link to="/about">  
                <span>About</span>
               </Link> 
                </div>
              )
              : (
                null
              )  }
          </div>
          <div style={{width:"100%"}}  >
          { this.state.hovering1 ?(
                <div className="menu">
                  <button> Menu item 1 </button>
                  
                </div>
              )
              : (
                null
              )  }
          </div>

          <div style={{width:"100%"}}>
          { this.state.hovering2 ?(
                <div className="menu" >
                  
                  <button> Menu item 2 </button>
                 
                </div>
              )
              : (
                null
              )  }
          </div>

          <div style={{width:"100%"}}>
          { this.state.hovering3 ?(
                <div className="menu" >
                 
                  <button> Menu item 3 </button>
                </div>
              )
              : (
                null
              )  }
          </div>
         
         
            </div>
      <Route path="/" exact>
       <Home navClose={this.mouseOut} />
      </Route>
      <Route path="/about" exact >
      <About navClose={this.mouseOut}   />
      </Route>
       </Router>
       <Fotter/>
      </div>
    )
  }
}
