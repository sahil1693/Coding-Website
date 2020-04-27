import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ss1 from './nav.gif';
import { Link } from "react-router-dom"
import "./navbar.css"
var t=0;
var x;
export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      a: sessionStorage.getItem("isUser"),
      b: sessionStorage.getItem("isAdmin"),
      c: sessionStorage.getItem("isSuperAdmin"),
      t:0,
      h:0,
      m:0,
      s:0
      }
      this.change=this.change.bind(this);
      this.change();
    }
    change(){
    	 this.timer = setInterval(() =>{
    	 if(this.state.t===0)
    	 {
    	 	clearInterval(this.timer);
    	 }
    	 this.setState((prevState)=>({ t:prevState.t-1 }))
    this.setState({h:Math.floor(this.state.t/3600),m:Math.floor((this.state.t%3600)/60),s:this.state.t%60});
    }, 1000)
    
    }
  
  render() {
    return <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-custom-2">
      <img id="img" src={ss1} alt=" Logo" className='gg' />&nbsp;&nbsp;<h5><u>RoyalCoding</u></h5>&nbsp;&nbsp;&nbsp;&nbsp;
     
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        
       <h5>{sessionStorage.getItem("username")}</h5> &nbsp;&nbsp;&nbsp;
        </div>
      <h2 >{this.state.h}&nbsp;&nbsp;{this.state.m}&nbsp;&nbsp;{this.state.s} &nbsp;&nbsp;&nbsp;&nbsp;</h2>
      <button onClick={()=>this.props.finishTest()} type="button" class="btn btn-danger">Finish Test</button>
    </nav>
    </div>
  }
}
