var alt = require('../alt');
var Fetchy = require("../util/Fetchy");
let CustomizeStore = require("../stores/CustomizeStore");

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
                event: action,
                user: CustomizeStore.getState().user,
                quiz: CustomizeStore.getState().quiz,
                page: CustomizeStore.getState().page,
                item: CustomizeStore.getState().item
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
