/**
 * Created by Chris-Campbell on 12/19/2016.
 */
//Create a new component. This component should produce some html
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBj7axV5Ep719GBzJKrTNgmPSBKzhlRBu4';

const App = () => {
    return (
        <div>
        <SearchBar/>
    </div>
    );
}

ReactDOM.render(<App/>, document.querySelector('.container'));

