import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Question.css";
import Navbar from "./navbar";
import { Redirect} from 'react-router-dom';
import Compiler from "./compiler";
import Axios from 'axios';
import Footer from '../nav/footer';
export default class QuestionSolve extends Component {
    constructor() {
        super();
        const token = sessionStorage.getItem("token");
    let l = true
    if (token == null) {
      l = false
    }
        this.state = {
            key: "",
            question: "",
            l
        }

    }
    componentDidMount() {
        var key = this.props.match.params.varable1;
        this.setState({ question: key });
        Axios.post("http://localhost:5000/question/search", { key: key })
            .then(response => {
                this.setState({ key: response.data.image });
            })
            .catch(error => {
            })
    }
    render() {
        if (this.state.l === false) {
            return <Redirect to="/"></Redirect>
          }
        return <>
            <Navbar></Navbar>
            <img src={this.state.key} alt="Question Name"></img>
            <Compiler questionname={this.state.question}></Compiler>
            <br></br><br></br>
            <Footer></Footer>
        </>
    }
}
