import React, { Component } from 'react';


import Header from './components/Header/Header';
import AdultContainer from './containers/AdultContainer.js';
import ChildContainer from './containers/ChildContainer.js';

// import * as $ from 'axios';

import './App.css';



class App extends Component {

  state = {
    showChild: false
  }


  toggleChild () {
    
    this.setState(
      {showChild: true}
    )
  }


  render() {
    return (
    <div>
      <Header />
      <h1>Adult Volunteer</h1>
      <AdultContainer toggleChild={()=>this.toggleChild()}>

      </AdultContainer>
      <h1>Child of Volunteer</h1>
      {this.state.showChild &&
        <ChildContainer></ChildContainer>
    }
      
    </div>
    )
  }
}


export default App;
