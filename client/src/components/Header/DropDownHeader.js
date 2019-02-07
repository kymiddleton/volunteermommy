import React from 'react'
import { Link } from 'react-router-dom';
import { Dropdown, Menu } from 'semantic-ui-react';
import Auth from '../../Utils/Auth';

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

    // {this.state.authenticated ? ('') : ('') }

    render() {
        return (
            <div>
                <Menu inverted>
                    <Dropdown text='Dashboard' pointing className='link item'>
                        <Dropdown.Menu>
                            <Dropdown.Header>Dashboard Details</Dropdown.Header>
                            <Dropdown.Item as={ Link } to='/myaccount'>My Account</Dropdown.Item>
                            <Dropdown.Item as={ Link } to='/volunteers'>Volunteers</Dropdown.Item>
                            <Dropdown.Item as={ Link } to='/events'>Events</Dropdown.Item>
                            <Dropdown.Item as={ Link } to='/search'>Search</Dropdown.Item>
                            {/* <Dropdown.Item as={ Link } to='/logout'>Logout</Dropdown.Item> */}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Menu.Item as={ Link } to='/logout'>Logout</Menu.Item>
                    <Menu.Item position="right" as={ Link } to='/login'>Login</Menu.Item>
                    <Menu.Item as={ Link } to='/signup'>SignUp</Menu.Item>
                </Menu>
            </div>
        );
    }
}

export default DropDownHeader;