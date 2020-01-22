import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';
import ss from "./login.gif"
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
class Login extends Component {
    constructor(props) {
        super(props);
        const token = sessionStorage.getItem("token");
        const user = sessionStorage.getItem("user");
        let l = true
        if (token == null) {
            l = false
        }
        this.state = {
            email: '',
            password: '',
            l,
            username: user
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }
    onChangePassword(password) {
        this.setState({
            password: password.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();
        const users = {
            email: (this.state.email).toLowerCase(),
            password: this.state.password
        }
        axios.post('http://localhost:5000/login', users)
            .then((res) => {
                    console.log(res.data);
                    sessionStorage.setItem("token1", res.data.token);
                    sessionStorage.setItem("username", res.data.found.name);
                    this.setState({ username: res.data.found.name });
                    const a = res.data.found.isUser;
                    const b = res.data.found.isAdmin;
                    const c = res.data.found.isSuperAdmin;
                    sessionStorage.setItem("isUser", a);
                    sessionStorage.setItem("isAdmin", b);
                    sessionStorage.setItem("isSuperAdmin", c);
                    sessionStorage.setItem("token", "ehflhdf");
                    //    sessionStorage.setItem("username",)
                    this.setState({
                        l: true
                    })            
                })
            .catch((error) => {
                alert(error.response.data);
            })
    }
    render() {
        if (this.state.l) {
            return <Redirect to="/user"/>
        }
        return <div className="container-fluid background">
            <div className="row">
                <div className="col-md-4 col-sm-4 col-xs-12">
                    <br></br>
                    <Link className="btn btn-danger" to="/" >Home</Link>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12">
                    <form className="log" onSubmit={this.onSubmit}>
                        <h1 className="h1">Login Here</h1>
                        <img id="img" src={ss} alt="logo" className='img-fluid custom' />
                        <div className="form-group">
                            <label className="label">Email</label>
                            <input type="email" className="form-control" placeholder="Enter Your Email" value={this.state.email} onChange={this.onChangeEmail} required></input>
                        </div>
                        <div className="form-group">
                            <label className="label">Password</label>
                            <input type="password" className="form-control" placeholder="Enter Your Password" value={this.state.password} onChange={this.onChangePassword} required></input>
                        </div>
                        <div className="checkbox">
                            <label className="label"> <input type="checkbox" required />Remember me</label>
                            <Link to="forgot"><p className="p">Forgot your password?</p></Link>
                        </div>
                        <button type="submit" className="btn btn-success btn-block button" required>Login</button>
                        <Link to="Signup" ><p className="p">Create New Account ? Click Here!</p></Link>
                    </form>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12"></div>
            </div>
        </div>
    }
}
export default Login;
