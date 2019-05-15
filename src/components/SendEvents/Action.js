import React, {Component} from "react"
import Button from "@material-ui/core/Button"
import * as PropTypes from "prop-types"

export class Action extends Component {
    render() {
        const fetchCode = (event) => {
            this.props.fetchCode({action: this.props.action.name});
            event.preventDefault();
        };
        const sendEvent = (event) => {
            this.props.sendEvent({action: this.props.action.name});
            event.preventDefault();
        };

        return <li>
            {this.props.action.name}:
            <Button color="primary" onClick={fetchCode}>Show Examples</Button>
            <Button color="secondary" onClick={sendEvent}>Send Event</Button>
        </li>
    }
}

Action.propTypes = {
    fetchCode: PropTypes.func,
    sendEvent: PropTypes.func,
    action: PropTypes.object
}
