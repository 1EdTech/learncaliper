import React, {Component} from "react"
import * as PropTypes from "prop-types"
import Event from "./Event"
import Divider from "@material-ui/core/Divider"
import FoldableHighlighter from "../util/FoldableHighlighter"


class Envelope extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.envelope.data) {
            return <p>TODO: Not proper envelope.</p>
        }


        return <div>
            <h3>Envelope Timestamp: {this.props.envelope.sendTime}</h3>
            <h4>Events</h4>
            {this.iterateDataObjects()}
            <FoldableHighlighter title="Full Envelope JSON" json={this.props.envelope} format="json"/>
        </div>
    }

    iterateDataObjects() {
        return this.props.envelope.data.map((object, index) => {
            if (object.type && object.type.endsWith("Event")) {
                return <Event event={object} key={index}/>
            } else {
                //todo: misc object
            }
        })
    }
}

Event.propTypes = {
    event: PropTypes.object
}

export default Envelope;

