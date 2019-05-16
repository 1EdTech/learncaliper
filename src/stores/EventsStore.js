var alt = require('../alt');
var EventActions = require('../actions/EventActions')

class EventsStore {
    constructor() {
        this.events = []
        this.bindActions(EventActions);
    }

    onFetchEvents(events) {
        this.events = events.events;
    }

}

module.exports = alt.createStore(EventsStore, 'EventsStore');
