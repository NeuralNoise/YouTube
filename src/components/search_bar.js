/**
 * Created by Chris-Campbell on 12/20/2016.
 */
import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term:'' };
    }

    render() {
        return (
        <div>
            <input onChange={event => this.setState({ term: event.target.value})}/>
        </div>
        );
    }
}

export default SearchBar;