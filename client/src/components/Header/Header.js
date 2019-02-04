// import React from 'react';
import React, { Component } from 'react';
import Auth from '../../Utils/Auth';
import logo from '../../assets/whitelogo.png';
import { Link } from 'react-router-dom';
import './header.css';


class Header extends Component {

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
      <div className="logoheader">
        <img src={logo} alt="whitelogo" className="logo"></img>

        <nav>
          {this.state.authenticated ? (
            <li>
              <Link to="/logout">Log out</Link>
            </li>
          ) : (
              <li>
                <Link to="/login">Log in</Link>
              </li>
            )}

          {this.state.authenticated ? (
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          ) : (
              <li>
                <Link to="/signup">Sign up</Link>
              </li>
            )}
          <li>
            <Link to="/myaccount/">My Account</Link>
          </li>
          <li>
            <Link to="/events/">Events</Link>
          </li>
          <li>
            <Link to="/volunteers/">Volunteers</Link>
          </li>
          <li>
            <Link to="/home/">Home</Link>
          </li>
        </nav>
      </div>
     );
  }
}

export default Header;


// const Header = (props) => (
//    <div className="header">
//      <img src={logo} alt="whitelogo" className="logo"></img>
//      <nav>
//        <li>
//          <Link to="/login">Log In</Link>
//        </li>
//        <li>
//          <Link to="/signup">Sign Up</Link>
//        </li>
//        <li>
//          <Link to="/myaccount/">My Account</Link>
//        </li>
//        <li>
//          <Link to="/events/">Events</Link>
//        </li>
//        <li>
//          <Link to="/home/">Home</Link>
//        </li>
//      </nav>
//    </div>
// );

// export default Header;


//   render() {
//     return (
//       <div className="logoheader">
//         <img src={logo} alt="whitelogo" className="logo"></img>
//         <nav>
//           <li>
//             <Link to="/login">Log in</Link>
//           </li>
//           <li>
//             <Link to="/signup">Sign up</Link>
//           </li>
//         </nav>
//       </div>
//     );
//   }
// }
// export default Header;