/**
 * Created by Chris-Campbell on 12/20/2016.
 */
import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return <input onChange={this.onInputChange}/>;
    }

    onInputChange(event) {
        console.log(event.target.value);
    }
}



export default SearchBar;