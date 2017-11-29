import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCpWB0ODoF16g9QDPEm3g_PMcv00WydUDY'

// create a new component. This component should produce some HTML

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
};

// take this componont's generated HTML and put it on the page (dom)
ReactDOM.render(<App />, document.querySelector('.container'));