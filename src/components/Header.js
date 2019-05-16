import React from 'react';
import {navigate} from "@reach/router"
var Fetchy = require("../util/Fetchy");
import '../assets/styles/App.scss';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import SendIcon from '@material-ui/icons/Send';
import ReceivedIcon from '@material-ui/icons/CallReceived';

const Header = () => {
    const [value, setValue] = React.useState(0);

    const urls ={
        0: "/",
        1: "/sendevents/" + Fetchy.sessionId(),
        2: "/receiveevents/" + Fetchy.sessionId(),
    }

    return (
            <div>
                <BottomNavigation
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                    navigate(urls[newValue]);
                  }}
                  showLabels
                  style={{justifyContent: 'left'}}
                >
                  <BottomNavigationAction label="Welcome" icon={<HomeIcon />} />
                  <BottomNavigationAction label="Send Events" icon={<SendIcon />} />
                  <BottomNavigationAction label="Receive Events" icon={<ReceivedIcon />} />
                </BottomNavigation>
            </div>
    );
};

export default Header;
