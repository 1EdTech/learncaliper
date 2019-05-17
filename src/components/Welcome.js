import React from 'react';
import Header from './Header';
import '../assets/styles/App.scss';

const Welcome = (props) => {
    return (
            <div>
                <Header page={props.page}/>
                <p>Hello, eh!</p>
            </div>
    );
};

export default Welcome;
