import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './showquestion.css';
import './user.css';
import Nav from "./testnavbar"
import Axios from "axios"
import Compiler from "./TestCompiler";
import Question from "./OnlyQuestion";
import MCQ from "./OnlyMCQ";
var qsequence=1,msequence=1;
export default class User extends Component {

  constructor(props) {
    super(props);
    const token = sessionStorage.getItem("token");
    const auth={authorization:'bearer '+sessionStorage.getItem("token1")}
    Axios.post("http://localhost:5000/show/question",{headers:auth,passcode:this.props.match.params.passcode, contestName:this.props.match.params.contestName})
    .then((res)=>{
    this.setState({test:res.data});
    })
    .catch((err)=>{})
    let l = true
    if (token == null) {
      l = false
    }
    this.state = {
      l,
      test:{objective:[],code:[]},
      passcode:'12345',
      question1:[],
      MCQ:[],
      question:"",
      mq:'true',
      no:'',
      input:[]
    }
    
    this.selectQuestion=this.selectQuestion.bind(this);
    this.submitMCQ=this.submitMCQ.bind(this);
    this.finishTest=this.finishTest.bind(this);
    this.questionmark=this.questionmark.bind(this);
  }
  questionmark(fals,no){
  	var a=[...this.state.question1];
  	a[no-1]=fals;
  	this.setState({question1:a});
  }
  
  componentDidUpdate(){
  	qsequence=1;
  	msequence=1;
  }
  
  submitMCQ(i){
 const c = document.getElementById("input").value;
 var d=[...this.state.MCQ];
 d.push(c);
    this.setState({MCQ:d});
  }
  
  selectQuestion( i,q){
  this.setState({question:i,mq:'false',no:q});
}
selectMCQ( i,s){

	this.setState({mq:'true'});
	var j=1;
	var option=<p/>;
	this.state.test.objectiveOption.map((a)=>{
		if(j===s)
		{
			const c=j;
			this.setState({question:i,no:c,input:[...a]});
		}
		j++;
	})
}
	finishTest(){
	const token = sessionStorage.getItem("token");
    const auth={authorization:'bearer '+sessionStorage.getItem("token1")}
	Axios.post("http://localhost:5000/show/question/submit",{headers:auth,passcode:this.props.match.params.passcode, contestName:this.props.match.params.contestName,question:[...this.state.question1],MCQ:[...this.state.MCQ]})
    .then((res)=>{
    	alert('test finish successfully');
    })
    .catch((err)=>{
    	alert('An error occured while submitting your code');
    })
	
	}
  render() {
    if (this.state.l === false) {
      return <Redirect to="/"></Redirect>
    }
    if(this.state.passcode!==this.props.match.params.passcode){
        return <Redirect to='/test'></Redirect>
    }
    return <><div className="page" >
      <Nav finishTest={this.finishTest}/>
      <div className="flexprop">
      <div className=""> 
        <ul style={{listStyleType:"none", padding:"0px 0px 0px 10px"}}>
        {this.state.test.objective.map((a)=>{ const m=msequence; return <li className="item2"><button onClick={()=>{ this.selectMCQ(a,m)}}>Mcq{msequence++}.</button></li>})}
        {this.state.test.code.map((a)=>{ const q=qsequence; return <li className="item2"><button onClick={()=>{this.selectQuestion(a,q)}}>Que{qsequence++}.</button></li>})} 
          
        </ul>
        </div>
    
 	<div className="Questionshow">
 	{this.state.mq==='true'?<MCQ question={this.state.question} submitMCQ={this.submitMCQ} input={this.state.input} no={this.state.no}/>:
 	<Question contestName={this.props.match.params.contestName} question={this.state.question} no={this.state.no} questionmark={this.questionmark}/>}
    </div>    
    </div>
    </div>
    </>

  }
}
