import React, { Component } from 'react';
import './login.css';


class Login extends Component {

    render() {
        return (
            <div>
                <h1>Login</h1>
                <nav>
                    <ul>
                        <li><a href="/auth/logout">Logout</a></li>
                        <li><a href="/auth/login">Login</a></li>
                        <li><a href="/">Homepage</a></li>
                    </ul>
                </nav>
                <main>
                    <a className="google-btn-btn" href="/auth/google">Google+</a>
                </main>
            </div>
        )
    }
}


export default Login;