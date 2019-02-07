import React, { Component } from 'react';
import * as $ from 'axios';

// const Suggestions = (props) => {
//     const options = props.results.map(r => (
//         <li key={r.id}>
//             {r.name}
//         </li>
//     ))
//     return <ul>{options}</ul>
// }
    

class Search extends Component {

    state = {
        query: '', 
    }

    handleInputchange = () => {
        this.setState({
            query: this.search.value
        }, () => {
            // if (this.state.query && this.state.query.length > 1) {
            //     if (this.state.query.length % 2 === 0) {
            //         this.getInfo()
            //     }
            // }
        })
    } 

    getInfo = () => {
        $.get('/api/teacher' )
        // {this.state.query}
        .then(({ data }) => {
            this.setState({
                results: data.data
            })
        })
    }


    render() {
        return (
            <form>
                <input
                    placeholder="Search for volunteers..."
                    ref={input => this.search = input}
                    onChange={this.handleInputChange}
                />
                {/* <Suggestions results={this.state.results} /> */}
                
                
                <h1>Search Page Under Construction</h1>
                
            </form>
        )
    }
}


export default Search;