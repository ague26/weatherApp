import React, { Component } from 'react';
import './App.css';
import WeatherDisplay from './Components/weatherdisplay';
import Search from './Components/search';
import './index.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      list: [],
    }
  }
  myCallback = (e) => {
      this.setState({ 
        list: e 
      });
  };

  render() {
        console.log(this.state.list)

    return (
      <div className="App">
        <Search callbackFromParent={this.myCallback} />
        <WeatherDisplay />

      </div>
    );
  }
}

export default App;
