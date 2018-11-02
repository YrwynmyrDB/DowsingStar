import React, { Component } from 'react';
import logo from './logo.svg';
import Pi from './24pi.png';
import './App.css';

      function myFunction(x) {
    x.style.background = "yellow";
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
	
        <img src={Pi} className="Pi" alt="pichart"/>
        </header>
        
 <input type="text" onfocus="myFunction(this)"></input>
      </div>
     
    );
    
  }
  
}

export default App;
