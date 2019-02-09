import React from 'react';
import Auth from '../Utils/Auth';
import API from '../Utils/APIs'
import { Segment, Header } from 'semantic-ui-react';
import '../css/mychildren.css';


class MyChildren extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: [],
        }
    }

    /*=== Get User Data from API ===*/
    componentDidMount() {
        const userData = Auth.getUserId();
        const token = Auth.getToken();

        API.userById(token, userData)
            .then(json => {
                this.setState({
                    user: json.data,
                })
            });
    }

    render() {
       console.log(this.state.user);
        
        return (
            <div>
                <Header as='h1'>My Volunteers</Header>
                <div>
                     <div className="volunteers">
                        <Segment.Group>
                            {this.state.user.map(user =>
                                <Segment color='blue' key={user.id}>
                                      <div className="label">  Name: <span className="name"> {user.name} </span></div>
                                </Segment>
                                )}
                        </Segment.Group>

                        <Segment.Group>
                            {this.state.user.map(user =>
                                <Segment color='blue' key={user.id}>
                                        <div className="label"> Email: <span className="email"> {user.email} </span></div>
                                </Segment>
                                )}
                        </Segment.Group>
                    </div>
                </div>
            </div>
        );
    }
}

export default MyChildren; 