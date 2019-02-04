import React, { Component } from 'react';

/* IMPORT COMPONENTS */
import NewEvent from './NewEvent';
import Tabs from '../../components/Tabs';

class Events extends Component {

    state = {
        tabList: [
            {tabName: 'Event 1', Component: NewEvent},
            // {tabName: 'Event 2'},
            // {tabName: 'Event 3'},
            // {tabName: 'Event 4'},
            // {tabName: 'Event 5'}
        ]
    }
    render() {
        return (
            <div>
                <h1>Events Section Under Construction</h1>
                <Tabs tabList={this.state.tabList}/>
            </div>
        )
    }
}

export default Events;