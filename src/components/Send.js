import React from 'react';
import Header from './Header';
import '../assets/styles/App.scss';
import {Credentials} from "./Credentials"


const Send = () => {
    return (
            <div>
                <Header/>
                <Credentials />
                <div>Context/User info</div>
                <h2>Profiles</h2>
                <h3>Reading Profile</h3>
                <ul>
                    <li>Navigation Event
                        <ul>
                            <li>NavigatedTo</li>
                        </ul>
                    </li>
                    <li>View Event
                        <ul>
                            <li>Viewed</li>
                        </ul>
                    </li>
                </ul>
            </div>
    );
};

export default Send;
