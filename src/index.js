import React from 'react';
import { render } from 'react-dom';
import { Router, Link } from "@reach/router"

import App from './components/App';
import Send from './components/Send';

render(

        <Router>
            <App path="/" name='Caliper' />
            <Send path="/send" />
        </Router>, document.getElementById('root')
);

