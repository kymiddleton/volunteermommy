import React from 'react';
import Auth from '../../Utils/Auth';
import API from '../../Utils/APIs'
// import * as $ from 'axios';
import AdultContainer from '../../containers/AdultContainer.js';
import ChildContainer from '../../containers/ChildContainer.js';

// import UserProfile from './UserProfile';
// import UserDetails from './UserDetails';
// import RaisedButton from 'material-ui/RaisedButton';
// import AccountHolder from './AccountHolder';

/*=== Component: UserContainer / Get route, show loading/errors, pass data down===*/
/*=== Component: UserList: Search for active user and render data to User===*/
/*=== Component: User: render user data with Add/Delete options. ===*/

/*=== Create Get route for User Data ===*/

/*=== Get User Data from API ===*/

/*=== Code to List User Data in a method or inside render ===*/

/*=== Logic to set active user in state ===*/


// const loggedinUser = (id) => (
//     this.setState({ loggedinUser: this.state.user.find( user => user.is === id)})
// );

class MyDetails extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: [],
            // isLoggedIn: false
        }
    }

    // accountHolder = (e) => {
    //     e.preventDefault();
    //     console.log(localStorage.getItem('userId'), "this should be user id");
    //     const token = Auth.getToken();
    //     let userData = this.state.loggedinUser;
    //     userData.user = localStorage.getItem('userId');

    //     const loggedIn = this;
    //     API.user(token, userData)
    //         .then(res => {
    //             loggedIn.props.toggleChild(res.data._id);
    //             console.log(res.data);
    //         })
    // }

    /*=== Get User Data from API ===*/
    ComponentDidMount() {
        const userData = Auth.getUser();
        const token = Auth.getToken();

        // let userData = this.state.isLoggedInUser;
        // userData.user = localStorage.getItem('userId');
        
        // $.get('/api/user', user, { headers: { Authorization: `bearer ${token}` } })
        API.user(token, userData)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoggedIn: true,
                    user: json,
                })
                // console.log(res);
                // console.log(res.data);
            });
    }

    render() {
        const { isLoggedIn, user } = this.state;

        if (!isLoggedIn) {
            // return <div>{user.name} {user.email}</div>
        }
        // const accountHolder = this.state.userData.map (userData =>  <div>{userData.name}, {userData.email}</div>)
        return (
            
            <div>
                <div>
                    <ul>
                        {user.map(user =>
                            <li key={user.id}>
                            Name: {user.name} | Email: {user.email}
                            </li>
                        )}
                    </ul>
                </div>
                <div>
                    {/* {userData.map((userData, userId) => {
                        return 
                        <div>
                            <h1>{userData.name}</h1>
                            <h1>{userData.email}</h1>
                        </div>
                    })} */}
                       
                </div>
                <div>
                    <h1>Volunteers</h1>
                    <AdultContainer />
                    <button>Add New Volunteer</button>
                    <button>Delete Volunteer</button>
                </div>

                <div>
                    <h1>Child(ren)</h1>
                    <ChildContainer />
                    <button>Add New Volunteer</button>
                    <button>Delete Volunteer</button>
                </div>
            </div >    
        );
    }
}

export default MyDetails;