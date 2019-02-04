import React from 'react'
// import logo from '../../assets/whitelogo.png';
import { Link } from 'react-router-dom';
import { Dropdown, Menu } from 'semantic-ui-react';
import Auth from '../../Utils/Auth';
// import { EditorFormatLineSpacing } from 'material-ui/svg-icons';
// import { Header, Image } from 'semantic-ui-react'

class DropDownHeader extends React.Component {

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
            <div>
                <Menu>
                    <Dropdown text='Dashboard' pointing className='link item'>
                    <Dropdown.Menu>
                        <Dropdown.Header>Dashboard Details</Dropdown.Header>
                        <Dropdown.Item as={ Link } to='/myaccount'>My Account</Dropdown.Item>
                        <Dropdown.Item>Volunteers</Dropdown.Item>
                        <Dropdown.Item>Events</Dropdown.Item>
                        <Dropdown.Item>Search</Dropdown.Item>
                        <Dropdown.Item>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                    <Menu.Item as={ Link } to='/login'>Login</Menu.Item>
                    <Menu.Item as={ Link } to='/signup'>SignUp</Menu.Item>
                </Menu>
            </div>
        );
    }
}

export default DropDownHeader;

// }= (props) => (
//   <div>
//       <Menu>
//         <Dropdown text='Dashboard' pointing className='link item'>
//           <Dropdown.Menu>
//             <Dropdown.Header>Dashboard Details</Dropdown.Header>
//             <Dropdown.Item as={ Link } to='/myaccount'>My Account</Dropdown.Item>
//             <Dropdown.Item>Volunteers</Dropdown.Item>
//             <Dropdown.Item>Events</Dropdown.Item>
//             <Dropdown.Item>Search</Dropdown.Item>
//             <Dropdown.Item>Logout</Dropdown.Item>
//           </Dropdown.Menu>
//         </Dropdown>
//         <Menu.Item as={ Link } to='/login'>Login</Menu.Item>
//         <Menu.Item as={ Link } to='/signup'>SignUp</Menu.Item>
//       </Menu>
//   </div>
// )

// export default DropDownHeader;