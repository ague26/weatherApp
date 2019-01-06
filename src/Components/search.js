import React, {Component} from 'react';
import axios from 'axios';


class Search extends Component{
	constructor(props){
		super(props);
	      this.state = {
	        city : " ",
	    }
	}

	cityChange = e =>{
	    this.setState({
	      city: e.target.value,
	    })
	}

	setCity = e =>{
		e.preventDefault()
	    this.setState({
	      city: this.state.city,
	    })
	}

	getResults = async() => {
		const key = "b01c9406898061c7293d799555d165bf";
	  	const call = await axios(`http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${key}&q=${this.state.city}&units=imperial`);
	  	this.setState({
	  		list: call.data.list,
	  	}, ()=>{
	  		 this.props.callbackFromParent(this.state.list);
	  		}
	  	);
	}
  
	render(){
		return(
			<form onSubmit={this.setCity} className="search">
	          <input value = {this.state.city} onChange={this.cityChange}/>
	          <button onClick={this.getResults}> Submit </button>
	        </form>
		)
}
}
export default Search;