import React from 'react';
import { render } from 'react-dom';
import { Router, Link } from "@reach/router"

import App from './components/App';
import SendEvents from './components/SendEvents';
import ReceiveEvents from './components/ReceiveEvents';

render(

        <Router>
            <App path="/" name='Caliper' />
            <SendEvents path="/sendevents/:sessionId" />
            <ReceiveEvents path="/receiveevents/:sessionId" />
        </Router>, document.getElementById('root')
);

