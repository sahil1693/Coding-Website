import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./sample.css";
import { Button } from 'react-bootstrap'
import Navbar from "./navbar";
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Footer from './footer';
export default class Sample extends Component {
    constructor() {
        super();
        this.state = {
            que: []
        }
        Axios.get('http://localhost:5000/sample')
            .then(res => {
                this.setState({ que: res.data })
            })
            .catch(error => console.log(error))
    }
    componentDidMount() {

    }
    render() {
        return <>
            <Navbar></Navbar>
            <br></br>
            {this.state.que.map((a) =>
                <div className="card col-md col-xs col-sm" style={{ marginLeft: "35px" }}>
                    <div className="container">
                        <a href={`/sample1/${a.questionname}`} params={{ question: a.questionname }}>
                            <h4>{a.questionname}</h4>
                        </a>
                        <div className="card-details pmT" style={{ float: "left" }}>
                            <span style={{ color: "blue" }}>{a.type},Solved Percentage-{a.per}</span>
                        </div>
                        <div className="col-md col-xs col-sm" style={{ float: "left", marginLeft: "450px", marginTop: "-40px", innerWidth: "100px" }}>
                            <Link to={`/sample1/${a.questionname}`} params={{ question: a.questionname }}> <Button style={{ padding: "5px 60px" }} variant="outline-primary" size="lg">Solve</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
            <br></br>
            <br></br>
            <br></br>
            <Footer></Footer>
        </>
    }
}
