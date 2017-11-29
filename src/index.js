import React from 'react';
import ReactDOM from 'react-dom';

// create a new component. This component should produce some HTML

const thing = 'Hi'

const App = () => <div>{thing} there!</div>

// take this componont's generated HTML and put it on the page (dom)
ReactDOM.render(<App />, document.querySelector('.container'));