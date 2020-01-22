import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ss1 from './nav.png';
import { Link } from "react-router-dom"
import "./navbar.css"
export default class Navbar extends Component {
  render() {
    return <div><nav className="navbar navbar-expand-lg navbar-dark bg-custom-2">
    <img id="img" src={ss1} alt="logo" className='gg' />&nbsp;&nbsp;<Link to="/" style={{color:"black"}}><h5><u>SackerRank</u></h5></Link>&nbsp;&nbsp;&nbsp;&nbsp;
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        {/* <span className="navbar-brand"><img id="img" src={ss1} className='img-fluid gg' />&nbsp;&nbsp;<u>SackerRank</u></span> */}
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Feedback">Feedback</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/sample">Sample Questions</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/mcq">Sample Mcqs</Link>
          </li>
        </ul>
        <Link className="btn btn-outline-danger my-2 my-sm-2" to="Login" >Login</Link>
        &nbsp;&nbsp;&nbsp;
            <Link className="btn btn-outline-danger my-2 my-sm-2" to="Signup">Signup</Link>
        &nbsp;&nbsp;&nbsp;
        </div>
    </nav>
    </div>
  }
}