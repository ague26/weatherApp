import React, {Component} from 'react';
import '../index.css';
import App from '../App.js';

class WeatherDisplay extends Component {
	render(){
		return(
			<div className="boxContainer"> 
				<div className="days">
				</div>
			</div>
		);
	}
}

export default WeatherDisplay;