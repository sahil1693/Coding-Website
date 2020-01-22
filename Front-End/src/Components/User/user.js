import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './user.css';
import Nav from "./navbar"
import Footer from "../nav/footer";
export default class User extends Component {
  constructor(props) {
    super(props);
    const token = sessionStorage.getItem("token");
    let l = true
    if (token == null) {
      l = false
    }
    this.state = {
      l
    }
  }
  render() {
    if (this.state.l === false) {
      return <Redirect to="/"></Redirect>
    }
    return <div >
      <Nav/>
      <div className="Dashboard1"><h2><b>Dashboard</b></h2></div>
      <div className="use1">
        <div className="card11" >
          <div className="card12"><p>&nbsp;&nbsp;Interview Preparation</p><img className="new-banner-svg" alt="New" src="https://hrcdn.net/fcore/assets/svgs/new-banner-341e41b06d.svg" /></div>
          <div className="container123">
            <h4><b>Interview Preparation Kit</b></h4>
            <Link to="/Question"><button className="button123 button3">Continue Practice</button></Link>
          </div>
        </div>
        <div className="card11">
          <div className="card12"><p>&nbsp;&nbsp;Problem Solving</p><img className="new-banner-svg" alt="New" src="https://hrcdn.net/fcore/assets/svgs/new-banner-341e41b06d.svg" /></div>
          <div className="container123">
            <h4><b>Problem Solving</b></h4>
            <Link to="/Question"><button className="button123 button3">Continue Practice</button></Link>
          </div>
        </div>
        <div className="card11">
          <div className="card12"><p>&nbsp;&nbsp;Language Profieciency</p><img className="new-banner-svg" alt="New" src="https://hrcdn.net/fcore/assets/svgs/new-banner-341e41b06d.svg" /></div>
          <div className="container123">
            <h4><b>C</b></h4>
            <Link to="/Question"><button className="button123 button3">Continue Practice</button></Link>
          </div>
        </div>
      </div>
      <div className="Dashboard1"><h2><b>Mcq</b></h2></div>
      <div className="use1">
        <div className="card11" >
          <div className="card12"><p>&nbsp;&nbsp;C,C++</p><img className="new-banner-svg" alt="New" src="https://hrcdn.net/fcore/assets/svgs/new-banner-341e41b06d.svg" /></div>
          <div className="container123">
            <h4><b>Easy Mcq</b></h4>
            <Link to="/Question"><button className="button123 button3">Continue Practice</button></Link>
          </div>
        </div>
        <div className="card11">
          <div className="card12"><p>&nbsp;&nbsp;File Handling</p><img className="new-banner-svg" alt="New" src="https://hrcdn.net/fcore/assets/svgs/new-banner-341e41b06d.svg" /></div>
          <div className="container123">
            <h4><b>Diffcult Mcq</b></h4>
            <Link to="/Question"> <button className="button123 button3">Continue Practice</button></Link>
          </div>
        </div>
      </div>
      <br></br><br></br>
      <Footer></Footer>
    </div>

  }
}