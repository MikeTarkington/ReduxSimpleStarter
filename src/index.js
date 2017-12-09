import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail  from './components/video_detail';

const API_KEY = 'AIzaSyCpWB0ODoF16g9QDPEm3g_PMcv00WydUDY'

// create a new component. This component should produce some HTML

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVid: null
    };

    this.videoSearch('cuphead');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVid: videos[0]
      });
    });
  };

  render() {
    const delayedVidSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={delayedVidSearch} />
        <VideoDetail video={this.state.selectedVid}/>
        <VideoList
          onVideoSelect={(selectedVid) => this.setState({selectedVid}) }
          videos={this.state.videos} />
      </div>
    );
  }
};

// take this componont's generated HTML and put it on the page (dom)
ReactDOM.render(<App />, document.querySelector('.container'));
