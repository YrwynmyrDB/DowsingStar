import React, { Component } from 'react';
import logo from './logo.svg';
import Pi from './24pi.png';
import './App.css';



    var myConfig = {
      "type":"ring",
      "title":{
        "text":""
      },
      "plot":{
        //Use the "slice" attribute to adjust the size of the donut ring.
      },
      "series":[
        {"values":[59]},
        {"values":[55]},
        {"values":[30]},
        {"values":[28]},
        {"values":[15]}
      ]
    };
     
  

class App extends Component {
  render() {
    return (
      <div className="App"><head>
      
<script src= "https://cdn.zingchart.com/zingchart.min.js"></script>
		<script> zingchart.MODULESDIR = "https://cdn.zingchart.com/modules/";
		ZC.LICENSE = ["569d52cefae586f634c54f86dc99e6a9","ee6b7db5b51705a13dc2339db3edaf6d"];</script>
       </head> <header className="App-header"><h1>DowsingStar</h1>
       <div id='myChart'></div>
       
        
	
        </header>
        
      
      </div>
     
    );
    
  }
  
}

export default App;

