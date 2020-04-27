import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './user.css';
import Nav from "./navbar"
import Footer from "../nav/footer";
import Axios from "axios"
import { Button } from 'react-bootstrap'
export default class User extends Component {
  constructor(props) {
    super(props);
    const token = sessionStorage.getItem("token");
    let l = true
    if (token == null) {
      l = false
    }
    const auth={authorization:'bearer '+sessionStorage.getItem("token1")}
    Axios.post("http://localhost:5000/show",{headers:auth})
    .then((res)=>{console.log(res)
    this.setState({test:res.data});
    
    })
    .catch((err)=>{console.log(err)})
    this.state = {
      l,
      test:[],
      passcode:'',
      to:'test',
      r:false,
      contestName:''
    }
    this.change=this.change.bind(this);
    this.handleclick=this.handleclick.bind(this);
  }
  change(e){
    this.setState({passcode:e.target.value});
  }
  handleclick(a){
  
  this.setState({contestName:a.contestName});
  	const token = sessionStorage.getItem("token");
    const auth={authorization:'bearer '+sessionStorage.getItem("token1")}
    Axios.post("http://localhost:5000/show/checkPasscode",{headers:auth,passcode:this.state.passcode,contestName:this.state.contestName})
    .then((res)=>{
  			this.setState({r:true}); 
    })
    .catch((err)=>{
    	this.setState({r:false});
  	})
  }
  render() {
    if (this.state.l === false) {
      return <Redirect to="/"></Redirect>
    }
    else if(this.state.r === true){
    	return <Redirect to = {`/testSolve/${this.state.contestName}/${this.state.passcode}`}/>
    }
    return <div className ="showtestpage">
      <Nav/>
      <div className="showcontest">
      {this.state.test.map((a) =>
                <div className="card" style={{ marginLeft: "35px" , display:"flex",flexDirection:"row",padding:"1% 1% 2% 1%",margin:"2%"}}>
                    <div className="container">
                            <h4>Contest : {a.contestName}</h4>
                            <div className="insidecontainer11" style={{ float: "left" }}>
                           		 <span style={{ color: "blue" }}>Start : &nbsp;&nbsp;{a.startday}&nbsp;&nbsp;{a.starttime}&nbsp;&nbsp;&nbsp;&nbsp;End : &nbsp;&nbsp;{a.endday}&nbsp;{a.endtime} </span>
                    		</div>
               		 </div>
               		 <div className="container1">
                            <input type="text" placeholder="Enter the passcode" id="passcode" style={{width:"60%", height:"40%", margin : "8% 1% 1% 1%"}} value={this.state.value} onChange={this.change}></input>
                             <Button style={{ padding: "5px 60px" }} onClick={()=>this.handleclick(a)} variant="outline-primary" size="lg">Start</Button>
                            <br/>
                    </div>
                </div>
            )}
        </div>
            <Footer/>
    </div>

  }
}
