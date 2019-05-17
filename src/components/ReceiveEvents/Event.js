import React, {Component} from "react"
import {Highlighter} from "../util/Highlighter"
import * as PropTypes from "prop-types"
import Actor from "./Actor"
import Action from "./Action"
import ObjectView from "./ObjectView"

class Event extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return <p>{<Actor actor={this.props.event.actor} />} {<Action action={this.props.event.action} />} {<ObjectView object={this.props.event.object} />}</p>
    }

}

Event.propTypes = {
    event: PropTypes.object
}

export default Event;

