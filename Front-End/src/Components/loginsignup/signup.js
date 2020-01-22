import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './signup.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
class Signup extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            email: '',
            password: ''
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }
    onChangeUsername(name) {
        this.setState({
            username: name.target.value
        })
    }
    onChangePassword(password) {
        this.setState({
            password: password.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();
        const user = {
            name: this.state.username,
            email: (this.state.email).toLowerCase(),
            password: this.state.password
        }
        axios.post('http://localhost:5000/signup', user)
            .then((res) => {
                alert("Sign Up Successfully");
                window.location = "/Login";
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
                        <h1 className="h11">Sign up</h1>
                        <div className="form-group">
                            <label className="label1">Enter UserName</label>
                            <input type="name" className="form-control" placeholder="Enter Your UserName" value={this.state.username} onChange={this.onChangeUsername} required></input>
                        </div>
                        <div className="form-group">
                            <label className="label1">Enter Email</label>
                            <input type="email" className="form-control" placeholder="Enter Your Email" value={this.state.email} onChange={this.onChangeEmail} required></input>
                        </div>
                        <div className="form-group">
                            <label className="label1">Enter Password</label>
                            <input type="password" className="form-control" placeholder="Enter Your Password" value={this.state.password} onChange={this.onChangePassword} required></input>
                        </div>
                        <div className="checkbox">
                            <label className="label1"> <input type="checkbox" required /> Remember me</label>
                        </div>
                          {/* eslint-disable-next-line */}
                        <button className="button1" type="submit" className="btn btn-success btn-block">Signup</button>
                        <Link to='Login'> <p className="p1">Already have an account Login ?</p></Link>
                    </form>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12"></div>
            </div>
        </div>
    }
}
export default Signup;
