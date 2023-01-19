import React, { Component } from 'react'

export default class Contact extends Component {
	state={
		data:[
			{id:1, name:"vasu"},
			{id:2, name:"abhi"},
			{id:3, name:"ravi"},
			{id:4, name:"teja"}
		],
		text:""
	}
	handleSave=(e)=>{
		this.setstate({
			[e.target.name]:e.target.value
		})
	}
	render(){
		//converting the data into lowercase
		let pair=this.state.text.toString().trim().toLowerCase();
		//variable for string matched data(Comparing)
		let duplicateData=[];
		//logic
		if(pair && pair.length>0){
			duplicateData=this.state.data.filter((i)=>{
				//gies the data which matches with pair information by converting into lower case letters
				return i.name.toLowerCase().match(pair)
			})
		}
	return (
		<div>

		  <input
			name="text"
			placeholder='Enter to search'
			onchange={this.handleSave}/>
			{
				duplicateData.map((i)=>(
					<p key={i.id}>{i.name}</p>
				))
			}
		</div>
	)
}
}