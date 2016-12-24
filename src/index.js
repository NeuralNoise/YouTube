/**
 * Created by Chris-Campbell on 12/19/2016.
 */
//Create a new component. This component should produce some html
import React, {Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyBj7axV5Ep719GBzJKrTNgmPSBKzhlRBu4';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'surfboard'}, (videos) => {
            this.setState({ videos });
            //note: this.setState({ videos: videos });
        });
    }

    render() {
        return (
            <div>
              <SearchBar/>
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}


ReactDOM.render(<App/>, document.querySelector('.container'));


