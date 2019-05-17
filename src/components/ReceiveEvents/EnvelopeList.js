import React, {Component} from "react"
import EventsStore from "../../stores/EventsStore"
import EventActions from "../../actions/EventActions"
import Envelope from "./Envelope"
import Divider from "@material-ui/core/Divider"

class EnvelopeList extends Component {
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
            <h2>Caliper Envelopes Received</h2>
            {this.state.events.map((event, index) => {
                return<div key={index}>
                    <Envelope envelope={event}/>
                    <Divider style={{height: '2px', backgroundColor: "rgba(0, 12, 255, 0.44)", margin: "20px"}}/>
                </div>
            })}
        </div>
    }

}

export default EnvelopeList;
