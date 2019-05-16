import React from 'react';
import {Link} from "@reach/router"
var Fetchy = require("../util/Fetchy");
import '../assets/styles/App.scss';


const Header = () => {
    return (
            <div>
                <h1>Caliper Example App</h1>
                <nav>
                    <Link to="/">Home</Link> |{" "}
                    <Link to={"/sendevents/" + Fetchy.sessionId()}>Send Events</Link> |{" "}
                    <Link to={"/receiveevents/" + Fetchy.sessionId()}>Receive Events</Link>
                </nav>
            </div>
    );
};

export default Header;
