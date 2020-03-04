import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./sample.css";
import Navbar from "./navbar";
import Axios from 'axios';
import Footer from './footer';
export default class Mcq extends Component {
    constructor() {
        super();
        this.state = {
            que: []
        }
        Axios.get('http://localhost:5000/mcq')
            .then(res => {
                this.setState({ que: res.data })
                // console.log(mcqans);
            })
            .catch(error => console.log(error))
        this.change1 = this.change1.bind(this);
    }
    componentDidMount() {

    }
    change1() {
        var arr1 = [], arr = [], count = 0;
        // eslint-disable-next-line
        this.state.que.map((a) => {
            var c = document.getElementById(a.questionname).value;
            arr1.push(a.output);
            arr.push(c);
            if (c === a.output)
                count++;
        })
        // eslint-disable-next-line
        alert('Your answers is saved Scessfully\n Your result is : ' + count + ' /' + arr.length + '\n' + "Your Output : " + arr + '\n' + "correct output : " + arr1);
    }
    render() {
        return <>
            <Navbar></Navbar>
            <br></br>
            <center style={{ color: "blue" }}><u><h4>Solve The Following Mcqs</h4></u></center>
            <h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Constraints <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;For option a type a without any extra spaces befor and after any option you write in input box.</h6>
            {this.state.que.map((a) =>
                <div className="card" style={{ marginLeft: "35px" }}>
                    <div className="container">
                        <img src={a.image} alt="mcq"></img><br></br>
                        <div className="card-details pmT" style={{ float: "left" }}>
                            <br></br>
                            &nbsp;&nbsp;<b>Write Your Answer Here-></b><input id={a.questionname}></input>
                        </div>
                    </div>
                </div>
            )}
            <br></br>
            <div className="card" style={{ marginLeft: "35px", background: "#007bff" }} onClick={this.change1} >
                <div className="container" >
                    <span> <b> <center ><h5>Submit</h5></center></b></span>
                </div>
            </div>
            {/* <span style={{marginLeft:"40px"}}><input type="submit" value="submit" onClick={this.change1}></input></span>  */}

            <br></br>
            <br></br>
            <br></br>
            <Footer></Footer>
        </>
    }
}