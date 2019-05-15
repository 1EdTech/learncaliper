var alt = require('../alt');
var Fetchy = require("../util/Fetchy");

class EventActions {

    event_url(action){
        return Fetchy.apiUrl("producer/send_event")
    }


    sendEvent(credentials, action, callback) {
        return (dispatch) => {
            Fetchy.post( this.event_url(action), {credentials: credentials, event: action}, 'text' )
                    .then((text) => {
                        callback(text)
                    });
        }

    }

}

module.exports = alt.createActions(EventActions);
