import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Auth from './Utils/Auth';
import { PrivateRoute, PropsRoute, LoggedOutRoute } from './components/Routes';

import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage.js';
import SignUpPage from './Pages/SignUpPage.js';
import MyAccount from './Pages/MyAccount/MyAccount';
import Events from './Pages/Events/Events';
import DashboardPage from './Pages/DashboardPage.js';
import Header from './components/Header/Header';
import './App.css';

class App extends Component {

  state = {
    authenticated: false
  }

  componentDidMount() {
    // check if user is logged in on refresh
    this.toggleAuthenticateStatus()
  }

  toggleAuthenticateStatus = () => {
    // check authenticated status and toggle state based on that
    this.setState({ authenticated: Auth.isUserAuthenticated() })
  }

  render() {
    return (
      <Router>
        <div>
          {/* <HeaderHome /> */}
          <Header />
          <Route path="/signin/" exact component={LoginPage} toggleAuthenticateStatus={this.toggleAuthenticateStatus} />
          <LoggedOutRoute path="/signup/" exact component={SignUpPage} />
          <Route path="/myaccount/" exact component={MyAccount} />
          <Route path="/events/" exact component={Events} />
          <PropsRoute exact path="/" component={HomePage} toggleAuthenticateStatus={this.toggleAuthenticateStatus} />
          <PrivateRoute path="/dashboard" component={DashboardPage} />

          {/* <PropsRoute exact path="/" component={HomePage} toggleAuthenticateStatus={this.toggleAuthenticateStatus} /> */}
          {/* <PrivateRoute path="/dashboard" component={DashboardPage} /> */}
          {/* <LoggedOutRoute path="/login" component={LoginPage} toggleAuthenticateStatus={this.toggleAuthenticateStatus} /> */}
          {/* <LoggedOutRoute path="/signup" component={SignUpPage} /> */}
          {/* <Route path="/logout" component={LogoutFunction} /> */}
        </div>
      </Router>
    );
  }
}

export default App;