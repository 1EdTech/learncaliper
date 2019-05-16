import React, {Component} from "react"
import EventsStore from "../../stores/EventsStore"
import EventActions from "../../actions/EventActions"
import {Action} from "../SendEvents/Action"
import {Highlighter} from "../util/Highlighter"

class EventsList extends Component {
    constructor(props) {
        super(props);
        this.state = EventsStore.getState();

        this.onStoreUpdate = this.onStoreUpdate.bind(this);
    }

    componentDidMount() {
        EventsStore.listen(this.onStoreUpdate);
        EventActions.fetchEvents();
    }

    componentWillUnmount() {
        EventsStore.unlisten(this.onStoreUpdate);
    }

    onStoreUpdate(state) {
        this.setState(state);
    }

    render() {
        return <div>
            <h2>Events</h2>
            {this.state.events.map((event, index) => {
                let title = this.shortEventDescription(event);

                return <Highlighter title={title} code={JSON.stringify(event, null, 2)} format="json" key={index}/>
            })}
        </div>
    }

    shortEventDescription(event){
        let actor = event.data[0].actor.type;
        if(event.data[0].actor.name){
            actor = `${event.data[0].actor.name} (${actor})`;
            actor = event.data[0].actor.name
        }
        let object = event.data[0].object.type;
        if(event.data[0].object.name){
            object = `${event.data[0].object.name} (${object})`;
            object = event.data[0].object.name
        }

        return `${actor} ${event.data[0].action} ${object}`
    }

}

export default EventsList;
