import React from 'react';
import { render } from 'react-dom';
import { Router, Link } from "@reach/router"

import Welcome from './components/Welcome';
import SendEvents from './components/SendEvents';
import ReceiveEvents from './components/ReceiveEvents';

render(
            <Router>
                <Welcome path="/" page={0}/>
                <SendEvents path="/sendevents/:sessionId" page={1} />
                <ReceiveEvents path="/receiveevents/:sessionId" page={2} />
            </Router>, document.getElementById('root')
);

