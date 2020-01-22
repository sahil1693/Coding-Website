import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Question.css";
import { Button } from 'react-bootstrap'
import Navbar from "./navbar";
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Footer from '../nav/footer';
import { Redirect} from 'react-router-dom';
export default class question extends Component {
    constructor() {
        super();
        const token = sessionStorage.getItem("token");
    let l = true
    if (token == null) {
      l = false
    }
        this.state = {
            que: [],l
        }
        Axios.get('http://localhost:5000/question')
            .then(res => {
                this.setState({ que: res.data })
            })
            .catch(error => { alert('please try again later')})
       this.change=this.change.bind(this);
    }
    componentDidMount() {

    }
    change(a){
    // Axios.delete('http://localhost:5000/sample/deletequestion',{data:{sss:a}})
    // .then(res=>{
    //    alert('Question deleted');
    //    window.location="/Question";
    // })
    // .catch(res=>{
    // alert('user not deleted');
    // })
    }
    render() {
        if (this.state.l === false) {
            return <Redirect to="/"></Redirect>
          }
        return <>
            <Navbar></Navbar>
            <br></br>
            {this.state.que.map((a) =>
                <div className="card" style={{ marginLeft: "35px" }}>
                    <div className="container">
                        <a href={`/QestionSolve/${a.questionname}`} params={{ question: a.questionname }}>
                            <h4>{a.questionname}</h4>
                        </a>
                        <div className="card-details pmT" style={{ float: "left" }}>
                            <span style={{ color: "blue" }}>{a.type},Solved Percentage-{a.per}</span>
                        </div>
                        <div style={{ float: "left", marginLeft: "700px", marginTop: "-40px", innerWidth: "100px" }}>
                            <Link to={`/QuestionSolve/${a.questionname}`} params={{ question: a.questionname }}> <Button style={{ padding: "5px 60px" }} variant="outline-primary" size="lg">Solve</Button>
                            </Link><br/>
                            {/* eslint-disable-next-line */}
                            {sessionStorage.getItem('isSuperAdmin')=='true'?<button onClick={()=>this.change(a.questionname)}style={{ padding: "5px 60px" }} variant="outline-primary" size="lg">Delete</button>:<span/>}
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
