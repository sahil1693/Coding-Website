import React,{Component} from 'react';
import Axios from 'axios';
import Footer from "../nav/footer";
import Nav from "../User/navbar";
import "../test/createtest.css"
import { Redirect} from 'react-router-dom';
export default class Test extends Component{
    constructor(){
    super();
    const token = sessionStorage.getItem("token");
    let l = true
    if (token == null) {
      l = false
    }
    this.state={
    ContestName:"",
    StartTime:"",
    StartDay:"",
    EndTime:"",
    EndDay:"",
    Objective:[],
    Objinput:[],
    Objoutput:[],
    Coding:[],
    Codinput:[],
    Codoutput:[],
    Nex:"false",
    Nex1:"false",
    l
    }
    this.add1=this.add1.bind(this);
    this.add2=this.add2.bind(this);
    this.name1=this.name1.bind(this);
    this.start1=this.start1.bind(this);
    this.end1=this.end1.bind(this);
    this.submit=this.submit.bind(this);
    this.ti=this.ti.bind(this);
    this.tj=this.tj.bind(this);
    this.onNext=this.onNext.bind(this);
    this.onNext2=this.onNext2.bind(this);
    }
    ti(e){
    this.setState({StartDay:e.target.value});
    }
    tj(e){
    this.setState({EndDay:e.target.value});
    }
    name1(e){
    this.setState({ContestName:e.target.value});
    }
    start1(e){
    this.setState({StartTime:e.target.value});
    }
    end1(e){
    this.setState({EndTime:e.target.value});
    }
    add1(e){
    e.preventDefault();
    let a=[];
    let d=e.target.objective.value;
     a.push(e.target.option1.value);
     a.push(e.target.option2.value);
     a.push(e.target.option3.value);
     a.push(e.target.option4.value);
     let dd=[...this.state.Objective];
    dd.push(d);
     let c=[...this.state.Objinput];
     let b=e.target.answer.value;
     c.push(a);
     let g=this.state.Objoutput;
     g.push(b);
     this.setState({Objective:dd,Objinput:c,Objoutput:g});
    }
    add2(e){
    e.preventDefault();
    let a=[];
     a.push(e.target.input1.value);
     a.push(e.target.input2.value);
     a.push(e.target.input3.value);
     a.push(e.target.input4.value);
      let b=[];
     b.push(e.target.output1.value);
     b.push(e.target.output2.value);
     b.push(e.target.output3.value);
     b.push(e.target.output4.value);
     let c=this.state.Coding;
     let d=this.state.Codinput;
     let f=this.state.Codoutput;
     let g=e.target.code.value;
     c.push(g);
     d.push(a);
     f.push(b);
    this.setState({Coding:c,Codinput:d,Codoutput:f});
    }
    submit(e){
    e.preventDefault();
    let vb=this.state;
    console.log(vb);
    const auth={authorization:'bearer '+sessionStorage.getItem("token1")}
    Axios.post("http://localhost:5000/createTest",{headers:auth,vb})
        .then(response=>{
                console.log("Data Added");
        })
        .catch(error=>{
        console.log('Error');
        })
    }
    onNext()
    {
        this.setState({Nex:"true"})
    }
    onNext2()
    {
        this.setState({Nex1:"true"})
    }
    render(){
        if (this.state.l === false) {
            return <Redirect to="/"></Redirect>
          }
        return <>
        <Nav></Nav>
        <center><h1><b><u>CreateTest</u></b></h1></center>
        <div style={{marginLeft:"40px"}}>
        <p>
        Host your own coding contest on SackerRank. You can 
        practice and compete with friends from your <br></br>organization or school. 
        Select from our library of over 1,500 coding challenges or create your own.<br></br><br></br>
        Get started by providing the initial details for your contest.
        </p><br></br>
         <span><b>Contest Name:</b></span><input type="text" name="name1" value={this.state.ContestName} onChange={this.name1}/><br/><br></br>
         <span> <b>Start Time :</b></span><input type="date" value={this.state.StartDay} onChange={this.ti}/>
         
         &nbsp;&nbsp;&nbsp;<span><b>At</b>&nbsp;&nbsp;&nbsp;
         </span><input type="time" name="start" value={this.state.StartTime} onChange={this.start1}/>&nbsp;&nbsp;&nbsp;<span><b>IST?</b></span><br/><br></br>
         <span><b>End Time :</b></span><input type="date" value={this.state.EndDay} onChange={this.tj}/>
         &nbsp;&nbsp;&nbsp;<span><b>At</b>&nbsp;&nbsp;&nbsp;</span>
         <input type="time" name="end" value={this.state.EndTime} onChange={this.end1}/> 
         &nbsp;&nbsp;&nbsp;<span><b>IST?</b></span><br/><br></br>
         <button onClick={this.onNext}>Next</button><br></br><br></br>
         </div>
        { this.state.Nex==="true"?<div style={{marginLeft:"40px"}}>
        <form onSubmit={this.add1} id="sub3">
         <b><u>Objective Questions</u></b><br/><br></br>
         <span><b>Question Name:</b></span><input type="text" name="objective" id="objective" ref={(input) => this.input = input}/><br/><br></br>
         <span><b>Option1</b></span><input type="text" name="option1"  id="option1" ref={(input) => this.input = input}/><br/><br></br>
         <span><b>Option2</b></span><input type="text" name="option2"  id= "option2" ref={(input) => this.input = input}/><br/><br></br>
         <span><b>Option3</b></span><input type="text" name="option3" id="option3" ref={(input) => this.input = input}/><br/><br></br>
         <span><b>Option4</b></span><input type="text" name="option4" id="option4" ref={(input) => this.input = input}/><br/><br></br>
         <h4><u>Enter only option here (e.g. for option A write A).</u></h4><br></br>
         <span><b>Answer</b></span><input type="text" name="answer" id="answer" ref={(input) => this.input = input}/><br></br><br></br>
         <h4><u>For More Question Press Submit OtherWise Press Next</u></h4><br></br>
         <button type="submit" value="submit">Submit</button>&nbsp;&nbsp;&nbsp;<button onClick={this.onNext2}>Next</button>
         </form>
         <br></br>
         </div>:<span></span>
        }
        {
        this.state.Nex1==="true"?<div style={{marginLeft:"40px"}}>
        <form onSubmit={this.add2}>
        <b><u>Coding Questions</u></b><br/><br></br>
        <span><b>Question Name</b></span><input type="text" name="code" ref={(input) => this.input = input}/><br/><br></br>
         <span><b>TestCases 1</b></span><br/><br></br>
         <span><b>input</b></span><input type="text" name="input1" ref={(input) => this.input = input}/>&nbsp;&nbsp;&nbsp;
         <span><b>output</b></span><input type="text" name= "output1" ref={(input) => this.input = input}/><br/><br></br>
        <span><b>TestCases 2</b></span><br/><br></br>
        <span><b>input</b></span><input type="text" name="input2" ref={(input) => this.input = input}/>&nbsp;&nbsp;&nbsp;
        <span><b>output</b></span><input type="text" name="output2"  ref={(input) => this.input = input}/><br/><br></br>
          <span><b>TestCases 3</b></span><br/><br></br>
          <span><b>input</b></span><input type="text" name="input3" ref={(input) => this.input = input}/>&nbsp;&nbsp;&nbsp;
          <span><b>output</b></span><input type="text" name="output3" ref={(input) => this.input = input}/><br/><br></br>
          <span><b>TestCases 4</b></span><br/><br></br>
          <span><b>input</b></span><input type="text" name="input4" ref={(input) => this.input = input}/>&nbsp;&nbsp;&nbsp;
         <spna><b>output</b></spna><input type="text" name="output4" ref={(input) => this.input = input}/><br/><br></br>
         <h4><u>For More Question Press Submit OtherWise Press Create</u></h4><br></br>
        <button type="submit" value="submit">Submit</button> &nbsp;&nbsp;&nbsp;
        <input type="submit" value="Create Test " onClick={this.submit}/>
        </form>
        <br></br>
      </div>:<span></span>
        }
        <Footer></Footer>
        </>
    
    }

}
