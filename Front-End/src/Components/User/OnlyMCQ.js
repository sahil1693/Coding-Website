import React,{Component} from 'react';
export default class OnlyQuestion extends Component{

	constructor(props){
		super(props);
	}
	render(){
		return <>
		<h2> Solve the following MCQ</h2>
		<h3>{this.props.question}</h3>
		{this.props.input.map((a)=><h1>{a}</h1>)}
		<input type="text" ref={(input)=>this.input=input} id="input"/>
		<button onClick={()=>this.props.submitMCQ(this.props.no)} className="item1" >submit</button>
		</>
	
	}
}
