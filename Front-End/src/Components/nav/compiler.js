import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import a from './a.jpg'
import b from "./b.jpg";
import Axios from "axios";
import "./compiler.css";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";

var key=true;
var arr=[];
function change()
{
    key=false;
}
function change1()
{
    key=true;
}
export default class Compiler extends Component
{
  constructor()
  {
    super();
    this.instance = null;
    this.state={
    backgroundColor:'white',
    color:'black',
    fontSize:'18px',
    orientation:'beside',
    value:"#include<stdio.h>\nint main(){\nprintf(\"hello world\");\nreturn 0;\n}",
    border: "solid",
    height:"500px",
    width:"800px",
    theme:'black',
    paddingLeft:"50px",
    wrapEnabled:false,
    enableBasicAutocompletio:false,
    enableLiveAutocompletion:false,
    highlightActiveLine: "false",
    highlightSelectedWord: false
    }
    this.handleSubmit=this.handleSubmit.bind(this);
    this.color=this.color.bind(this);
    this.change=this.change.bind(this);
    this.sample=this.sample.bind(this);
  }
  change(e){
  this.setState({value:e});
  }
  sample(){
  let c=document.getElementById('sampleee').value==='C'?"#include<stdio.h>\nint main(){\nprintf(\"hello world\");\nreturn 0;\n}":document.getElementById('sampleee').value==='C++'?"#include<iostream>\nusing namespace std;\nint main(){\ncout<<\"hello world\";\nreturn 0;\n}":document.getElementById('sampleee').value==='Java'?"import java.util.*;\nclass Main{\npublic static void main(System.in){\nSystem.out.println('hello world');\n}":"print('hello')";
    this.setState({value:c});
  }
  color(){
     this.setState({backgroundColor:document.getElementById('color').value});
     let c=document.getElementById('color').value==="black"?"white" :"black";
    this.setState({color:c});
    console.log(this.state);
  }
  handleSubmit(e){
    e.preventDefault();
    Axios.post('http://localhost:5000/Compiler',{type:key,questionname:this.props.questionname,code:this.state.value,input:e.target.input.value,lang:e.target.lang.value,inputRadio:e.target.inputRadio.value})
    .then((res) => {
    if(key){
        document.getElementById('output').innerHTML=res.data;
    }
    else{
      var fals=0;
      arr=[...res.data];
      console.log(arr[0]);
      if(arr[0])
      {
         fals++;
      document.getElementById('output1').setAttribute("src",a);
      }
      else
      {
        document.getElementById('output1').setAttribute("src",b);
      }
      if(arr[1])
      {
        fals++;
      document.getElementById('output2').setAttribute("src",a);
      }
      else
      {
        document.getElementById('output2').setAttribute("src",b);
      }
      if(arr[2])
      {
        fals++;
      document.getElementById('output3').setAttribute("src",a);
      }
      else
      {
        document.getElementById('output3').setAttribute("src",b);
      }
      if(arr[3])
      {
        fals++;
      document.getElementById('output4').setAttribute("src",a);
      }
      else
      {
        document.getElementById('output4').setAttribute("src",b);
      }
      document.getElementById("out").innerHTML="TestCase Pass- "+fals+"/4 ";
    }

  })
  .catch(error=>{
    document.getElementById('output').innerHTML=error.data;
  })
  }
    render()
    {
        return <div className="container-fluid">
        <div className="row">
        <div className="col-md-4 col-sm-4 col-xs-12">
          <form id="myform" name="myform" onSubmit={this.handleSubmit}>
      <center><u><h3 style={{color:"blue"}}>Type Your Code Here</h3></u><br></br>
        <h5 style={{color:"blue"}}>Language : <select name="lang" id="sampleee" onClick={this.sample}>
          <option value="C">C</option>
          <option value="C++">C++</option>
          <option value="Java">Java</option>  
          <option value="Python">Python</option>
        </select>&nbsp;
        <select id="color" onClick={this.color}>
          <option value="white">white</option>
          <option value="whitesmoke">whitesmoke</option>
          <option value="black">black</option>  
          <option value="grey">grey</option>
        </select>&nbsp;
        <select id="font" onClick={()=>this.setState({fontSize:document.getElementById('font').value})} >
        <option value="14px">14</option>
        <option value="16px">16</option>
        <option value="18px">18</option>
        <option value="20px">20</option>
        <option value="22px">22</option>
        <option value="24px">24</option>
        <option value="26px">26</option>
        <option value="28px">28</option>
        <option value="30px">30</option>
        <option value="32px">32</option>
        </select>
        </h5>
        </center>
        
        
  <AceEditor id="code1776"  style={this.state} value={this.state.value} onChange={this.change}
     mode="java"
    theme="github"
    name="UNIQUE_ID_OF_DIV"
    editorProps={{ $blockScrolling: true }} enableBasicAutocompletion="true" enableLiveAutocompletion= "true" enableSnippets= "false" tabSize="4"
  />
 
      
       <u><h3 style={{color:"blue"}}>Input</h3></u>
        <textarea cols="20" rows="7" id="input1776" name="input"></textarea>&nbsp;&nbsp;&nbsp;&nbsp;
         <br/>
         <br></br>
        <h5 style={{color:"blue"}}>Compile With Input:&nbsp;&nbsp;
        <input type="radio" name="inputRadio" id="inputRadio" value="true"/>Yes&nbsp;&nbsp;
        <input type="radio" name="inputRadio" id="inputRadio" value="false"/>No
        <br /><br></br></h5>
       <center> <input type="submit" value="Run" id="submit" onClick={change1}/>&nbsp;&nbsp;
        <input type="submit" value="Submit" id="submit" onClick={change}/></center>
        <br/>
        <span id="out"></span><br></br>
        <img id="output1"style={{width:'10%',height:'10%'}} alt="testcases"></img>&nbsp;&nbsp;&nbsp;&nbsp;
        <img id="output2"style={{width:'10%',height:'10%'}} alt="testcases"></img>&nbsp;&nbsp;&nbsp;&nbsp;
        <img id="output3"style={{width:'10%',height:'10%'}} alt="testcases"></img>&nbsp;&nbsp;&nbsp;&nbsp;
        <img id="output4" style={{width:'10%',height:'10%'}} alt="testcases"></img>&nbsp;&nbsp;&nbsp;&nbsp;
        <br></br>
         <u><h3 style={{color:"blue"}}>Output</h3></u>
        <textarea cols="50" rows="7" id="output" name="output"></textarea>
        </form>
        </div>
        </div>
        </div> 
    }
}
