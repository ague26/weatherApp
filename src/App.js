import React, { Component } from 'react';
import './App.css';
import WeatherDisplay from './Components/weatherdisplay';
import Search from './Components/search';
import './index.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
    }
  }
  dataWeather = (forecast,currentWeather) => {
      this.setState({ 
        list: forecast ,
        currentTemp: currentWeather,
      });
  };

  render() {
        console.log(this.state.list);
        console.log(this.state.currentTemp);

    return (
      <div className="App">
        <Search callbackFromParent={this.dataWeather} />
        <WeatherDisplay />

      </div>
    );
  }
}

export default App;
