import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Pages/Home/Home'
import Dashboard from './Pages/Dashboard/Dashboard'
import MyDetails from './Pages/MyDetails/MyDetails'
import Events from './Pages/Events/Events'
// import Header from './components/Header/Header';
import './App.css';


class App extends Component {

  render() {
    return (
      <Router>
        <div>
          {/* <Header /> */}
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