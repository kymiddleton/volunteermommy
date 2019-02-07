import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

/*== UI THEMES ==*/
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import injectTapEventPlugin from 'react-tap-event-plugin';

/*== AUTHENTICATION / ROUTES ==*/
import Auth from './Utils/Auth';
import { PrivateRoute, PropsRoute, LoggedOutRoute } from './components/Routes';

/*== HEADERS ==*/
import Header from './components/Header/Header';
import DropDownHeader from './components/Header/DropDownHeader';

/*== PAGES ==*/
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage.js';
import LogoutFunction from './Pages/LogoutFunction.js';
import SignUpPage from './Pages/SignUpPage.js';
import DashboardPage from './Pages/DashboardPage.js';
import MyAccount from './Pages/MyAccount/MyAccount';
import Events from './Pages/Events/Events';
import Volunteers from './Pages/Volunteers.js';
import Search from './Pages/Search.js';

/*== STYLING ==*/
import '../src/css/App.css';

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
            <Header />
            <DropDownHeader />
            
            <PropsRoute exact path="/" component={HomePage} toggleAuthenticateStatus={this.toggleAuthenticateStatus} />
            <PrivateRoute path="/dashboard" component={DashboardPage} />
            <LoggedOutRoute path="/login" component={LoginPage} toggleAuthenticateStatus={this.toggleAuthenticateStatus} />
            <LoggedOutRoute path="/signup" component={SignUpPage} />
            
            <PrivateRoute path="/myaccount" component={MyAccount} />
            <PrivateRoute path="/volunteers" component={Volunteers} />
            <PrivateRoute path="/events" component={Events} />
            <PrivateRoute path="/search" component={Search} />
            <PrivateRoute path="/logout" component={LogoutFunction} />

            {/* <Route path="/myaccount" component={MyAccount} />
            <Route path="/volunteers" component={Volunteers} />
            <Route path="/events" component={Events} />
            <Route path="/search" component={Search} />
            <Route path="/logout" component={LogoutFunction} /> */}
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;