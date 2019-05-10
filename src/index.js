import React from 'react';
import { render } from 'react-dom';
import { Router, Link } from "@reach/router"

import App from './components/App';
import SendEvents from './components/SendEvents';

render(

        <Router>
            <App path="/" name='Caliper' />
            <SendEvents path="/sendevents" />
        </Router>, document.getElementById('root')
);

