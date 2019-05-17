import React, {Component} from "react"
import * as PropTypes from "prop-types"


class Action extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let action = this.props.action;
        let output = action;

        return <span style={{fontStyle: 'italic'}}>{output}</span>
    }
}

Event.propTypes = {
    action: PropTypes.object
}

export default Action;

