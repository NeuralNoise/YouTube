/**
 * Created by Chris-Campbell on 12/19/2016.
 */
//Create a new component. This component should produce some html
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import NewApp from './components/newapp';

const API_KEY = 'AIzaSyBj7axV5Ep719GBzJKrTNgmPSBKzhlRBu4';

const App = () => {
    return (
        <div>
        <SearchBar/>
    </div>
    );
}

const App2 = () => {
    return (
        <div>
            <NewApp/>
        </div>
    );
}
ReactDOM.render(<App2/>, document.querySelector('.newapp-container'));
ReactDOM.render(<App/>, document.querySelector('.container'));


