import React from 'react';
import Header from './Header';
import '../assets/styles/App.scss';

const Welcome = (props) => {
    return (
            <div>
                <Header page={props.page}/>
                <p className="description">This is an example application to help you learn a little bit
                    about the IMS Caliper Analytics standard.</p>

                <p className="description">On the "Send Events" page you can explore some Caliper
                    Profiles and events and even send them to this example
                    server or your own.</p>

                <p className="description">On the "Receive Events" page you can see all events sent from
                    this app or your own.</p>
            </div>
    );
};

export default Welcome;
