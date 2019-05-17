import React, {Component} from "react"
import * as PropTypes from "prop-types"
import Tooltip from "./Tooltip"


class ObjectView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let object = this.props.object;
        let output = object;

        if (typeof object === 'object') {
            output = object.type;
            if (object.name) {
                output = object.name;
            }
        }

        return <Tooltip text={output} jsonContent={object}/>
    }
}

Event.propTypes = {
    object: PropTypes.object
}

export default ObjectView;

