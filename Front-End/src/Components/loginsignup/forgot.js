import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';
import ss from "./login.gif"
import axios from 'axios';
import { Link } from 'react-router-dom';
class Forgot extends Component {
    constructor() {
        super();
        this.state = {
            email: ''
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();
        const users = {
            email: (this.state.email).toLowerCase()
        }
        axios.post('http://localhost:5000/forgot', users)
            .then((res) => {
                alert('Password send successfully');
                window.location = "/login";
            })
            .catch((error) => {
                alert(error.response.data);
            })
    }
    render() {
        return <div className="container-fluid background">
            <div className="row">
                <div className="col-md-4 col-sm-4 col-xs-12">
                    <br></br>
                    <Link className="btn btn-danger" to="/" >Home</Link>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12">
                    <form className="log" onSubmit={this.onSubmit}>
                        <h1 className="h1">Forgot Password</h1>
                        {/* eslint-disable-next-line */}
                        <img id="img" src={ss} alt="Signup Image" className='img-fluid custom' />
                        <div className="form-group">
                            <label className="label">Email</label>
                            <input type="email" className="form-control" placeholder="Enter Your Email" value={this.state.email} onChange={this.onChangeEmail} required></input>
                        </div>
                        <button type="submit" className="btn btn-success btn-block button" required>Submit</button>
                    </form>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12"></div>
            </div>
        </div>
    }
}
export default Forgot;
