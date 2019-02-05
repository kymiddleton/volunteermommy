import React, { Component } from 'react';
// import injectTapEventPlugin from 'react-tap-event-plugin';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Auth from './Utils/Auth';
import { PrivateRoute, PropsRoute, LoggedOutRoute } from './components/Routes';

import HomePage from './components/HomePage';
import LoginPage from './Pages/LoginPage.js';
import LogoutFunction from './Pages/LogoutFunction.js';
import SignUpPage from './Pages/SignUpPage.js';
import DashboardPage from './Pages/DashboardPage.js';
import MyAccount from './Pages/MyAccount/MyAccount';
import Events from './Pages/Events/Events';
import Volunteers from './Pages/Volunteers.js';
import Header from './components/Header/Header';
// import LoggedInHeader from './components/Header/LoggedInHeader';
import DropDownHeader from './components/Header/DropDownHeader';
// import LandingHeader from './components/Header/LandingHeader.js';
import './App.css';

// remove tap delay, essential for MaterialUI to work properly
// injectTapEventPlugin();

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
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Router>
          <div>
            {/* <HeaderHome /> */}
            <DropDownHeader />
            <Header />
            {/* <LoggedInHeader /> */}
            
            {/* <LandingHeader /> */}
            {/* <div> */}
              {/* {this.state.authenticated ? (
                <div className="top-bar-right">
                  <Link to="/dashboard">Dashboard</Link>
                  <Link to="/logout">Log out</Link>
                  {/* <Link to="/login">Log in</Link> */}
                {/* </div>
              ) : (
                  <div className="top-bar-right">
                    <Link to="/login">Log in</Link>
                    <Link to="/signup">Sign up</Link>
                  </div>
                )}
            </div> */}

            <PropsRoute exact path="/" component={HomePage} toggleAuthenticateStatus={this.toggleAuthenticateStatus} />
            <PrivateRoute path="/dashboard" component={DashboardPage} />
            <LoggedOutRoute path="/login" component={LoginPage} toggleAuthenticateStatus={this.toggleAuthenticateStatus} />
            <LoggedOutRoute path="/signup" component={SignUpPage} />
            <Route path="/logout" component={LogoutFunction} />
            <Route path="/myaccount" component={MyAccount} />
            <Route path="/events" component={Events} />
            <Route path="/volunteers" component={Volunteers} />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;