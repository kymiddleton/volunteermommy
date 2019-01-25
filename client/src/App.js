import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './assets/whitelogo.png';
import MyDetails from './Pages/MyDetails/MyDetails'

// import Header from './components/Header/Header';

import './App.css';

const Header = (props) => (
  <div className="header">
      <img src={logo} alt="whitelogo" className="logo"></img>
  </div>
);


const Dashboard = () => <h2>Dashboard</h2>
// const MyDetails = () => <h2>My Details</h2>
const Events = () => <h2>Events</h2>
const Home = () => <h2>Home</h2>




class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Header />
          <nav>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/mydetails/">My Details</Link>
            </li>
            <li>
              <Link to="/events/">Events</Link>
            </li>
            <li>
              <Link to="/home/">Home</Link>
            </li>
          </nav>

          <Route path="/" exact component={Dashboard} />
          <Route path="/mydetails/" exact component={MyDetails} />
          <Route path="/events/" exact component={Events} />
          <Route path="/home/" exact component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;


//browser router
//switch function
//create component for home route