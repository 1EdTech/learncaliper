import React from 'react';
import Header from '../Header';
import '../../assets/styles/App.scss';
import Credentials from "../Credentials"


const Events = () => {
    return (
            <div>
                <Header/>
                <Credentials onlyLocal={true}/>
            </div>
    );
};

export default Events;
