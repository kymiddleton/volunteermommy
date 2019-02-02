import React, { Component } from 'react';
import AdultContainer from '../containers/AdultContainer'
import ChildContainer from '../containers/ChildContainer'
// import './home.css';

class Volunteers extends Component {
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
                 <h1>Adult Volunteer</h1>
                <AdultContainer toggleChild={this.toggleChild}></AdultContainer>

                <h1>Child of Volunteer</h1>
                {this.state.showChild &&
                    <ChildContainer adultId={this.state.adultId}></ChildContainer>
                }
            </div>
        )
    }
}

export default Volunteers;