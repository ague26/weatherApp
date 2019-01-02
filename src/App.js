import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
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
  // const proxy = "https://cors-anywhere.herokuapp.com/";
  const key = "b01c9406898061c7293d799555d165bf";
  const call = await axios(`http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${key}&q=${this.state.city}`);
  console.log(call)
 }
  render() {
    return (
      <div className="App">
        <form onSubmit={this.setCity}>
          <input value = {this.state.city} onChange={this.cityChange}/>
          <button onClick={this.getResults}> Submit </button>
        </form>
      </div>
    );
  }
}

export default App;
