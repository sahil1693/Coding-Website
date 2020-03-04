import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ss1 from './nav.gif';
import { Link } from "react-router-dom"
import "./navbar.css"
export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      a: sessionStorage.getItem("isUser"),
      b: sessionStorage.getItem("isAdmin"),
      c: sessionStorage.getItem("isSuperAdmin")
    }
  }
  render() {
    return <div><nav className="navbar navbar-expand-lg navbar-dark bg-custom-2">
      <img id="img" src={ss1} alt=" Logo" className='gg' />&nbsp;&nbsp;<Link to="/user" style={{color:"black"}}><h5><u>RoyalCoding</u></h5></Link>&nbsp;&nbsp;&nbsp;&nbsp;
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        {/* <span className="navbar-brand"><img id="img" src={ss1} className='gg' />&nbsp;&nbsp;<u>SackerRank</u></span> */}
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link className="nav-link" to="/user">Home<span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/Profile'>Profile</Link>
          </li>
          <li className="nav-item">
          {/* // eslint-disable-next-line */}
          {this.state.c==="true"?<span></span>:this.state.b==="true"?
            <Link className="nav-link" to="/createTest">CreateTest</Link>:
             <Link className="nav-link" to="/test">Tests</Link>
            }
          </li>
          <li className="nav-item">
          {/* // eslint-disable-next-line */}
          {this.state.c==="true"? <Link className="nav-link" to="/UserDetail">UserDetails</Link>:this.state.b==="true"?
            <Link className="nav-link" to="/StudentDetail">StudentDetail</Link>:
             <span></span>
            }
          </li>
        </ul>
       <h5>{sessionStorage.getItem("username")}</h5> &nbsp;&nbsp;&nbsp;
        <Link className="btn btn-outline-danger my-2 my-sm-2" to="/logout" >Logout</Link>
        &nbsp;&nbsp;&nbsp;
        </div>
    </nav>
    </div>
  }
}
