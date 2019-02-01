import React, { Component } from 'react';
import NewEvent from './NewEvent';
import Tabs from '../../components/Tabs';

class Events extends Component {

    state = {
        tabList: [
            {tabName: 'Event 1', Component: NewEvent},
            {tabName: 'Event 2'},
            {tabName: 'Event 3'},
            {tabName: 'Event 4'},
            {tabName: 'Event 5'}
        ]
    }
    render() {
        return (
            <div>
                <h1>Create New Events</h1>
                <h2>Coming Soon</h2>
                <Tabs tabList={this.state.tabList}/>
            </div>
        )
    }
}


export default Events;