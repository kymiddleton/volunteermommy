import React from 'react';

// import isLoggedIn from './LoggedInHeader.js';
import HeaderHome from './HeaderHome.js';
import HeaderLoggedIn from './HeaderLoggedIn.js';
// import logo from '../../assets/whitelogo.png';
// import { Link } from 'react-router-dom';
import './header.css';


function Header ({ isLoggedIn }) {
  // const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <HeaderLoggedIn />;
  } else {
    return <HeaderHome />;
  }
}

class LandingHeader extends React.Component {

  render() {
    return Header();
      
  }
}

export default LandingHeader;