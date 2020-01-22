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
      passcode:''
    }
    this.change=this.change.bind(this);
  }
  change(e){
    this.setState({passcode:e.target.value});
  }
  render() {
    if (this.state.l === false) {
      return <Redirect to="/"></Redirect>
    }
    return <div >
      <Nav/>
      {this.state.test.map((a) =>
                <div class="card" style={{ marginLeft: "35px" }}>
                    <div class="container">
                            <h4>{a.contestName}</h4>
                            <div class="card-details pmT" style={{ float: "left" }}>
                            <span style={{ color: "blue" }}>Start time&nbsp;&nbsp;{a.startday}&nbsp;&nbsp;{a.starttime}&nbsp;&nbsp;&nbsp;&nbsp;End time&nbsp;&nbsp;{a.endday}&nbsp;{a.endtime} </span>
                        </div>
                        <div style={{ float: "left", marginLeft: "700px", marginTop: "-40px", innerWidth: "100px" }}>
                          Passcode:<input type="text" id="passcode" value={this.state.value} onChange={this.change}></input>
                            <Link to={`/testSolve/${a.contestName}/${this.state.passcode}`} params={{ contestName: a.contestName,passcode:this.state.passcode }}> <Button style={{ padding: "5px 60px" }} variant="outline-primary" size="lg">Start</Button>
                            </Link><br/>
                        </div>
                    </div>
                </div>
            )}
            <Footer/>
    </div>

  }
}
