import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './Pages/Home/Home';
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';
import MyAccount from './Pages/MyAccount/MyAccount';
import Events from './Pages/Events/Events';
// import HeaderHome from './components/Header/HeaderHome';
import Header from './components/Header/Header';
import './App.css';


class App extends Component {

  render() {
    return (
      <Router>
        <div>
          {/* <HeaderHome /> */}
          <Header />
          <Route path="/signin/" exact component={SignIn} />
          <Route path="/signup/" exact component={SignUp} />
          <Route path="/myaccount/" exact component={MyAccount} />
          <Route path="/events/" exact component={Events} />
          <Route path="/home/" exact component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;