import React from 'react';
import Header from '../Header';
import '../../assets/styles/App.scss';
import Credentials from "../Credentials"
import {Profiles} from "./Profiles"
import Customize from "../Customize"


const Events = (props) => {
    return (
            <div>
                <Header page={props.page}/>
                <Credentials onlyLocal={false}/>
                <Customize />
                <Profiles/>
            </div>
    );
};

export default Events;
