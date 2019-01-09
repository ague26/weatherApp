import React, { Component } from 'react';
import './App.css';
import WeatherDisplay from './Components/weatherdisplay';
import Search from './Components/search';
import './index.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      forecastData: null,
      currentTempData: null,
    }
  }

  weatherData = (forecast,currentWeather) => {
      this.setState({ 
        forecastData: forecast ,
        currentTempData: currentWeather,
      });
  };

  render() {
    console.log(this.state.currentTempData)
    return (
      <div className="App">
        <Search callbackFromParent={this.weatherData} />
        <WeatherDisplay currentTemps={this.state.currentTempData} />

      </div>
    );
  }
}

export default App;
