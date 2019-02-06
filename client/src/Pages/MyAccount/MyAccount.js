import React, { Component } from 'react';
import MyDetails from './MyDetails';
import MyEvents from './MyEvents';
// import MyGroups from './MyGroups';
// import Archived from './Archived';
import Tabs from '../../components/Tabs';


class MyAccount extends Component {

    state = {
        // showChild: false,
        tabList: [
            {tabName: 'My Details', 
            Component: MyDetails},
            {tabName: 'My Events', 
            Component: MyEvents},
            // {tabName: 'My Groups'},
            // {tabName: 'Organizer View'},
            // {tabName: 'Archived Events'}
        ]
    }


    render() {
        return (
            <div>
                <Tabs tabList={this.state.tabList}/>
            </div>
        )
    }
}


export default MyAccount;