import React from 'react';
import { render } from 'react-dom';
import { Router, Link } from "@reach/router"

import Welcome from './components/Welcome';
import SendEvents from './components/SendEvents';
import ReceiveEvents from './components/ReceiveEvents';
import Header from "./components/Header"

render(
        <div>
            <Header/>
            <Router>
                <Welcome path="/"/>
                <SendEvents path="/sendevents/:sessionId" />
                <ReceiveEvents path="/receiveevents/:sessionId" />
            </Router>
        </div>, document.getElementById('root')
);

