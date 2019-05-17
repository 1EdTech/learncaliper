import React from 'react';
import Header from '../Header';
import '../../assets/styles/App.scss';
import Credentials from "../Credentials"
import EnvelopeList from "./EnvelopeList"

const Events = (props) => {
    return (
            <div>
                <Header page={props.page}/>
                <Credentials onlyLocal={true}/>
                <EnvelopeList />
            </div>
    );
};

export default Events;
