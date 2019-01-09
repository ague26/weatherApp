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
		try{
			const key = "b01c9406898061c7293d799555d165bf";
		  	const forecast = await axios(`http://api.openweathermap.org/data/2.5/forecast?APPID=${key}&q=${this.state.city}&units=imperial`);
		  	const currentWeather = await axios(`http://api.openweathermap.org/data/2.5/weather?APPID=${key}&q=${this.state.city}&units=imperial`);
		  	this.props.callbackFromParent({forecast}, {currentWeather});
		  } catch(error){
		  		alert(error);
		  }
	}
  
	render(){
		return(
			<form onSubmit={this.setCity} className="search">
	          <input  onChange={this.cityChange} placeholder="Enter City Here"/>
	          <button onClick={this.getResults}> Submit </button>
	        </form>
		)
}
}
export default Search;