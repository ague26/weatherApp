import React, {Component} from 'react';
import '../index.css';
import ClearSkyDay from '../gif/clearskyday.gif';
import ClearSkyNight from '../gif/clearskynight.gif';
import MistDay from '../gif/mistday.gif';
import MistNight from '../gif/mistnight.gif';
import FewCloudsDay from '../gif/fewcloudsday.gif';
import FewCloudsNight from '../gif/fewcloudsnight.gif';
import ScatteredCloudsDay from '../gif/scatteredcloudsday.gif';
import ScatteredCloudsNight from '../gif/scatteredcloudsnight.gif';
import BrokenCloudsDay from '../gif/brokencloudsday.gif';
import BrokenCloudsNight from '../gif/brokencloudsnight.gif';
import RainyDay from '../gif/rainyday.gif';
import RainyNight from '../gif/rainynight.gif';
import ThunderstormDay from '../gif/thunderstormday.gif';
import ThunderstormNight from '../gif/thunderstormnight.gif';
import SnowDay from '../gif/snowday.gif';
import SnowNight from '../gif/snownight.gif';

class WeatherDisplay extends Component {
	constructor(props){
		super(props);
		this.state={

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
			case "01d":
		    img = `${ClearSkyDay}`;
		    break;
		    case "01n":
		    img = `${ClearSkyNight}`;
		    break;
		    case "02d":
		    img = `${FewCloudsDay}`;
		    break;
		    case "02n":
		    img = `${FewCloudsNight}`;
		    break;
		    case "03d":
		    img = `${ScatteredCloudsDay}`;
		    break;
		    case "03n":
		    img = `${ScatteredCloudsNight}`;
		    break;
		    case "04d":
		    img = `${BrokenCloudsDay}`;
		    break;
		    case "04n":
		    img = `${BrokenCloudsNight}`;
		    break;
		    case "09d":
		    img = `${RainyDay}`;
		    break;
		    case "09n":
		    img = `${RainyNight}`;
		    break;
		    case "10d":
		    img = `${RainyDay}`;
		    break;
		    case "10n":
		    img = `${RainyNight}`;
		    break;
		    case "11d":
		    img = `${ThunderstormDay}`;
		    break;
		    case "11n":
		    img = `${ThunderstormNight}`;
		    break;
		    case "13d":
		    img = `${SnowDay}`;
		    break;
		    case "13n":
		    img = `${SnowNight}`;
		    break;
			case "50n":
		    img = `${MistNight}`;
		    break;
		  case "50d":
		    img = `${MistDay}`;
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
					<div className="currentWeatherContainer" style={{backgroundImage:`url(${this.fn()})`}} >
						<div className="current">
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

