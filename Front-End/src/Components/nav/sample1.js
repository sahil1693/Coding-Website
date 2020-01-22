import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./sample.css";
import Navbar from "./navbar";
import Compiler from "./compiler";
import Axios from 'axios';
import Footer from './footer';
export default class Sample1 extends Component {
    constructor() {
        super();
        this.state = {
            key: "",
            question: ""
        }

    }
    componentDidMount() {
        var key = this.props.match.params.varable1;
        console.log(key);
        this.setState({ question: key });
        Axios.post("http://localhost:5000/sample/search", { key: key })
            .then(response => {
                console.log(response.data.image);
                this.setState({ key: response.data.image });
            })
            .catch(error => {
            })
    }
    render() {
        return <>
            <Navbar></Navbar>
            <img src={this.state.key} alt="Question"></img>
            <Compiler questionname={this.state.question}></Compiler>
            <br></br><br></br>
            <Footer></Footer>
        </>
    }
}
