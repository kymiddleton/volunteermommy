import React, { Component } from 'react';
import 'whatwg-fetch';
import {setInStorage,getFromStorage} from '../../Utils/storage';
import axios from 'axios';
// import './home.css';


class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            token: '',
            signInError: '',
            signInEmail: '',
            signInPassword: '',
        };

        this.onTextboxChangeSignInEmail = this.onTextboxChangeSignInEmail.bind(this);
        this.onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(this);

        this.onSignIn = this.onSignIn.bind(this);
        this.logout = this.logout.bind(this);
    }

    onTextboxChangeSignInEmail(e) {
        e.preventDefault();
        this.setState({ signInEmail: e.target.value });
    }

    onTextboxChangeSignInPassword(e) {
        e.preventDefault();
        this.setState({ signInPassword: e.target.value });
    }

    // Grab state, POST request to db
    onSignIn(e) {
        e.preventDefault();
        console.log("in home login")
        const { signInEmail, signInPassword } = this.state;
        this.setState({ isLoading: true });
        axios.post('/api/signin', {
            email: signInEmail,
            password: signInPassword
        }).then(res => {
            console.log(res)
        })

        // fetch('api/account/signin', {
        //     method: 'POST',
        //     headers: { 'Content-Type' : 'application/json' },
        //     body: JSON.stringify({ 
        //         email: signInEmail, 
        //         password: signInPassword }),
        // }).then(res => {
        //     console.log(res, "this is response from login")

        //     }
        //     )
        // .then(json => {
        //     console.log('json, json');
        //     if (json.success) {
        //         setInStorage('the_main_app', { token: json.token });
        //         this.setState({
        //             signInError: json.message,
        //             isLoading: false,
        //             signInPassword: '',
        //             signInEmail: '',
        //             token: json.token,
        //         });
        //     } else {
        //         this.setState({ signInError: json.message, isLoading: false });
        //     }
        // });     
    }

    logout(e) {
        e.preventDefault();
        this.setState({ isloading: true });

        const obj = sessionStorage.getItem('the_main_app');
        if (obj && obj.token) {
            const { token } = obj;

            // axios.get('/api/account/logout', {

        }

        // Verify token
        fetch('api/account/logout?token=' + token)
            .then(res => res.json())
            .then(json => {
                if (json.success) {
                    this.setState({ token: '', isLoading: false });
                } else {
                    this.setState({ isLoading: false });
                }
            });
    }

    componentDidMount() {
        const obj = getFromStorage('the_main_app');
        if (obj && obj.token) {
            const { token } = obj;

            // Verify token
            fetch('/api/account/verify?token=' + token)
                .then(res => res.json())
                .then(json => {
                    if (json.success) {
                        this.setState({ token, isLoading: false });
                    }
                    else {
                        this.setState({ isLoading: false });
                    }
                });
        }
        else {
            this.setState({ isLoading: false });
        }
    }

    render() {
        const {
            isLoading,
            token,
            signInError,
            signInEmail,
            signInPassword,
        } = this.state;

        if (isLoading) {
            return (<div><p>Loading...</p></div>);
        }

        if (!token) {
            return (
                <div>
                    <div>
                        {(signInError) ? (<p>{signInError}</p>) : (null)}
                        <p>Sign In</p>
                        <input
                            type="email"
                            placeholder="Email"
                            value={signInEmail}
                            onChange={this.onTextboxChangeSignInEmail}
                        />
                        <br />
                        <input
                            type="password"
                            placeholder="Password"
                            value={signInPassword}
                            onChange={this.onTextboxChangeSignInPassword}
                        />
                        <br />
                        <button onClick={this.onSignIn}>Sign In</button>
                    </div>
                </div>
            );
        }

        return (
            <div>
                <p>Account</p>
                <button onClick={this.logout}>Logout</button>
            </div>
        );
    }
}
            
export default SignIn;