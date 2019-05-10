import React from 'react';
import Header from '../Header';
import '../../assets/styles/App.scss';
import {Credentials} from "../Credentials"
import {Profile} from "./Profile"


const Events = () => {
    return (
            <div>
                <Header/>
                <Credentials/>
                <div>Context/User info</div>
                <h2>Profiles</h2>
                <Profile profileName="readingProfile"/>
            </div>
    );
};

export default Events;
