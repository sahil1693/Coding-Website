import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
export default class Footer extends Component {
  render() {
    return <footer className="page-footer font-small  bg-primary pt-4 ">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <h5 className="text-uppercase font-weight-bold">Contact Us</h5>
            <b> <p>9138131654,7508347501<br></br>sg25943@gmail.com,sahilgarg99912@gmail.com<br></br>Shubham Goyal, Sahil Garg</p></b>
          </div>
          <hr className="clearfix w-100 d-md-none pb-3" />
          <div className="col-md-6 mb-md-0 mb-3">
            <h5 className="text-uppercase font-weight-bold">Follow US</h5>
            {/* // eslint-disable-next-line */}
            <p>
            {/* // eslint-disable-next-line */}
            <a href="https://www.facebook.com/subham.goyal.37"  style={{ color: "black" }}>Facebook</a>
              <br></br>
              {/* // eslint-disable-next-line */}
              <a href="https://twitter.com/login"  style={{ color: "black" }}>Twitter</a><br></br>
              {/* // eslint-disable-next-line */}
              <a href="https://www.instagram.com/shubhamgoyal790/"  style={{ color: "black" }}>Instagram</a></p>
          </div>
        </div>
      </div>
      <div className="footer-copyright text-center py-3"><b>© 2018 Copyright:Shubham Sahil</b>
      </div>
    </footer>
  }
}