import React, { Component } from 'react';


import Header from './components/Header/Header';
import AdultContainer from './containers/AdultContainer.js';

// import * as $ from 'axios';

import './App.css';



class App extends Component {


  render() {
    return (
    <div>
      <Header />
      <h1>Adult Volunteer</h1>
      <AdultContainer></AdultContainer>
      
      
      
    </div>
    )
  }
}


export default App;
