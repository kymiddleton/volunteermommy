import React, { Component } from 'react';
import AdultContainer from '../../containers/AdultContainer'
import ChildContainer from '../../containers/ChildContainer'
import './home.css';

class Home extends Component {
    state = {
        showChild: false
    }

    toggleChild = (adultId) => {
        this.setState(
            { showChild: true, adultId: adultId }
        )
    }

    render() {
        return (
            <div>
                <h1>Home ~ Coming Soon</h1>
                 <h1>Adult Volunteer</h1>
                <AdultContainer toggleChild={this.toggleChild}></AdultContainer>

                <h1>Child of Volunteer</h1>
                {this.state.showChild &&
                    <ChildContainer adultId={this.state.adultId}></ChildContainer>
                }
                {/* <nav>
                    <ul>
                        <li><a href="/auth/logout">Logout</a></li>
                        <li><a href="/auth/login">Login</a></li>
                        <li><a href="/">Homepage</a></li>
                    </ul>
                </nav>
                <main>
                    <a className="google-btn" href="/auth/google">Google+</a>
                </main> */}
            </div>
        )
    }
}


export default Home;