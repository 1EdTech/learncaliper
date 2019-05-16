import React from 'react';
import Header from '../Header';
import '../../assets/styles/App.scss';
import Credentials from "../Credentials"
import EventsList from "./EventsList"

const Events = () => {
    return (
            <div>
                <Header/>
                <Credentials onlyLocal={true}/>
                <EventsList />
            </div>
    );
};

export default Events;
