import React from 'react';
import Header from '../Header';
import '../../assets/styles/App.scss';
import {Credentials} from "../Credentials"
import {SendProfile} from "./SendProfile"


const SendEvents = () => {
    return (
            <div>
                <Header/>
                <Credentials/>
                <div>Context/User info</div>
                <h2>Profiles</h2>
                <SendProfile profileName="readingProfile"/>
            </div>
    );
};

export default SendEvents;
