import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';
import ss from "./login.gif"
import axios from 'axios';
import { Link } from 'react-router-dom';
class Feedback extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            text: ''
        }
        this.click = this.click.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }
    onChangeText(text) {
        this.setState({
            text: text.target.value
        })
    }
    click(e) {
        e.preventDefault();
        const users = {
            email: (this.state.email).toLowerCase(),
            text: this.state.text
        }
        axios.post('http://localhost:5000/Feedback', users)
            .then((res) => {
                // window.location="/home";
                alert("Your Feedback Submit Succesfully")
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
                    <form className="log" onSubmit={this.click}>
                        <h1 className="h1">Feedback</h1>
                        <img id="img" src={ss} alt="Fedback Ing" className='img-fluid custom' />
                        <div className="form-group">
                            <b> <label >Email</label></b>
                            <input type="email" className="form-control" placeholder="Enter Your Email" value={this.state.email} onChange={this.onChangeEmail} required></input>
                        </div>
                        <div className="form-group">
                            <b> <label >Leave Feedback Here</label></b>
                            <textarea style={{resize:"none"}} rows="4" cols="45" value={this.state.text} onChange={this.onChangeText}></textarea>
                        </div>
                        <button type="submit" className="btn btn-success btn-block button" required>Submit</button>
                    </form>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12"></div>
            </div>
        </div>
    }
}
export default Feedback;
