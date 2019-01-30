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

    // toggleChild = (adultId) => {
    //     this.setState(
    //         { showChild: true, adultId: adultId }
    //     )
    // }

    render() {
        return (
            <div>
                <Tabs tabList={this.state.tabList}/>

                {/* <h1>Adult Volunteer</h1>
                <AdultContainer toggleChild={this.toggleChild}></AdultContainer>

                <h1>Child of Volunteer</h1>
                {this.state.showChild &&
                    <ChildContainer adultId={this.state.adultId}></ChildContainer>
                } */}
            </div>
        )
    }
}


export default MyAccount;