import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './Pages/Home/Home';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAccount from './Pages/MyAccount/MyAccount';
import Events from './Pages/Events/Events';
import Header from './components/Header/Header';
import './App.css';


class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route path="/" exact component={Dashboard} />
          <Route path="/myaccount/" exact component={MyAccount} />
          <Route path="/events/" exact component={Events} />
          <Route path="/home/" exact component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;