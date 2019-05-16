var alt = require('../alt');
var Fetchy = require("../util/Fetchy");

class EventActions {

    sendEventUrl(action) {
        return Fetchy.apiUrl("producer/send_event")
    }

    getEventsUrl() {
        return Fetchy.apiUrl("consumer/events/" + Fetchy.sessionId())
    }


    sendEvent(credentials, action, callback) {
        return (dispatch) => {
            Fetchy.post(this.sendEventUrl(action), {
                credentials: credentials,
                event: action
            }, 'text')
                    .then((text) => {
                        callback(text)
                    });
        }

    }

    fetchEvents() {
        return (dispatch) => {
            Fetchy.get(this.getEventsUrl(), 'json')
                    .then((json) => {
                        dispatch(json)
                    });
        }
    }

}

module.exports = alt.createActions(EventActions);
