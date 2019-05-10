import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';

import '../assets/styles/App.scss';


const App = ({name}) => {
    return (
            <div>
                <Header/>
                <p>Hello, {name}!</p>
            </div>
    );
};

App.propTypes = {
    name: PropTypes.string,
};

export default App;
