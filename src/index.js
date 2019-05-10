import React from 'react';
import { render } from 'react-dom';
import { Router, Link } from "@reach/router"

import App from './components/App';
import SendEvents from './components/send/SendEvents';

render(

        <Router>
            <App path="/" name='Caliper' />
            <SendEvents path="/send" />
        </Router>, document.getElementById('root')
);

