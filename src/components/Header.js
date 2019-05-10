import React from 'react';
import {Link} from "@reach/router"

import '../assets/styles/App.scss';


const Header = () => {
    return (
            <div>
                <h1>Caliper Example App</h1>
                <nav>
                    <Link to="/">Home</Link> |{" "}
                    <Link to="/send">Send Events</Link>
                </nav>
            </div>
    );
};

export default Header;
