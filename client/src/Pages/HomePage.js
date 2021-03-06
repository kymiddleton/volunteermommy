import React from 'react';
import Auth from '../Utils/Auth';
import { Card } from 'semantic-ui-react';
import '../css/homepage.css';

class HomePage extends React.Component {

    componentDidMount() {
        // update authenticated state on logout
        this.toggleAuthenticateStatus()
    }

    toggleAuthenticateStatus = () => {
        // check authenticated status and toggle state based on that
        this.setState({ authenticated: Auth.isUserAuthenticated() })
    }

    render() {
        return (
            <Card color='blue' className="ui centered card" >
                <Card.Content>
                    <Card.Header>Volunteer Mommy</Card.Header>
                    {Auth.isUserAuthenticated() ? (
                        <Card.Meta style={{ fontSize: '16px', color: 'green' }}>
                            <h1>
                                Welcome! You are logged in.
                            </h1>
                            <p>
                                Add text here about Volunteer Mommy. 
                            </p>
                        
                        </Card.Meta>
                    ) : (
                            <Card.Meta style={{ fontSize: '16px', color: 'red' }}>
                                <h1>
                                    You are not logged in.
                                </h1>
                            </Card.Meta>
                        )}
                </Card.Content>
            </Card >
        )
    }
};

export default HomePage;