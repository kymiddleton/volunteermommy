import React, { Component } from 'react';
import Tabs from '../components/Tabs';


class Search extends Component {

    state = {
        tabList: [
            // {tabName: 'My Details', 
            // Component: MyDetails},
            // {tabName: 'My Events', 
            // Component: MyEvents},
            // {tabName: 'My Groups'},
            // {tabName: 'Organizer View'},
            // {tabName: 'Archived Events'}
        ]
    }


    render() {
        return (
            <div>
                <Tabs tabList={this.state.tabList}/>
                <h1>Search Page Under Construction</h1>
                
            </div>
        )
    }
}


export default Search;