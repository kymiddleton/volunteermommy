import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Auth from '../Utils/Auth';
// import { Card, Message } from 'semantic-ui-react';
// import './home.css';

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
            <Card className="container">
                <CardTitle title="Volunteer Mommy" subtitle="This is the home page." />
                {Auth.isUserAuthenticated() ? (
                    <CardText style={{ fontSize: '16px', color: 'green' }}>Welcome! You are logged in.</CardText>
                ) : (
                        <CardText style={{ fontSize: '16px', color: 'green' }}>You are not logged in.</CardText>
                    )}
            </Card>
        )
    }
};

export default HomePage;