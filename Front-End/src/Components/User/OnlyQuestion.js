import React,{Component} from 'react';
import Compiler from "./TestCompiler";


export default class OnlyQuestion extends Component{

	constructor(props){
		super(props);
	}
	render(){
		return <>
		<h2> Solve the following Question</h2>
		
		<p>{this.props.question}</p>
		<Compiler contestName={this.props.contestName} questionmark={this.props.questionmark} no={this.props.no} questionname={this.props.question}></Compiler>
		</>
	
	}
}
