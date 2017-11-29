import React, { Component } from 'react';

// give search bar the extended functionality of react components
class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    render() {
        return (
            <div>
                <input onChange={event => this.setState({ term: event.target.value })} />
                {/* <p>Value of the input: {this.state.term}</p> */}
            </div>
        )
    }
};

export default SearchBar;