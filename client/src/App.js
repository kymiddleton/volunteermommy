import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Auth from './Utils/Auth';

import Home from './Pages/Home/Home';
// import SignIn from './Pages/SignIn/SignIn';
// import SignUp from './Pages/SignUp/SignUp';
import MyAccount from './Pages/MyAccount/MyAccount';
import Events from './Pages/Events/Events';
// import HeaderHome from './components/Header/HeaderHome';
import Header from './components/Header/Header';

import SignUpPage from './Pages/SignUpPage.js';
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
          {/* <Route path="/signin/" exact component={SignIn} toggleAuthenticateStatus={this.toggleAuthenticateStatus} /> */}
          <Route path="/signup/" exact component={SignUpPage} />
          <Route path="/myaccount/" exact component={MyAccount} />
          <Route path="/events/" exact component={Events} />
          <Route path="/home/" exact component={Home} toggleAuthenticateStatus={this.toggleAuthenticateStatus} />
        </div>
      </Router>
    );
  }
}

export default App;