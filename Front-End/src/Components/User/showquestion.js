import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './user.css';
import Nav from "./navbar"
import Axios from "axios"
import { Button } from 'react-bootstrap'
export default class User extends Component {
  constructor(props) {
    super(props);
    const token = sessionStorage.getItem("token");
    const auth={authorization:'bearer '+sessionStorage.getItem("token1")}
    Axios.post("http://localhost:5000/show/question",{headers:auth,contestName:this.props.match.params.contestName})
    .then((res)=>{console.log(res)
    this.setState({test:res.data});
    })
    .catch((err)=>{console.log(err)})
    let l = true
    if (token == null) {
      l = false
    }
    this.state = {
      l,
      test:[],
      passcode:'12345'
    }
  }
  render() {
    if (this.state.l === false) {
      return <Redirect to="/"></Redirect>
    }
    if(this.state.passcode!=this.props.match.params.passcode){
        return <Redirect to='/test'></Redirect>
    }
    return <div >
      <Nav/>
      
    </div>

  }
}
