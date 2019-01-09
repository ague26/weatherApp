import React, {Component} from 'react';
import '../index.css';
import ClearSky from '../gif/clearsky.gif';
import MistDay from '../gif/mistday.gif';
import MistNight from '../gif/mistnight.gif';


 


class WeatherDisplay extends Component {
	constructor(props){
		super(props);
		this.state={
			clearsky:{ClearSky},
			color:"red",
		}
	}


	static getDerivedStateFromProps(props, state) {
	    if (props.currentTemps !== state.currentTemps) {
	      return {
	        currentTemps: props.currentTemps,       
	      };
	    }
	    return null;
	  }

	fn = () =>{
		var img;
		var x = this.props.currentTemps.currentWeather.data.weather[0].icon
		switch(x){
			case "50n":
		    img = "MistNight";
		    break;
		  case "50d":
		    img = "MistDay";
		    break;
		}
		return img
		
	}



	render(){

		return(
			<div>
				{(this.state.currentTemps == null) ? 
					<h1>Please Enter a City </h1> 
					: 
					<div className="currentWeatherContainer" style={{backgroundImage:`url(${this.fn()})`}}>
						<div className="current">
						<img src={this.fn()}/>
							<h1>{this.state.currentTemps.currentWeather.data.name} </h1>
							<p>{this.state.currentTemps.currentWeather.data.main.temp} &deg;F</p>
						</div>
						<div className="iconPic">							
							<img alt="weatherIcon"src={"http://openweathermap.org/img/w/"+this.state.currentTemps.currentWeather.data.weather[0].icon+".png"}/>
 						</div>
					</div>
				}
			</div>
		);
	}
}

export default WeatherDisplay;

