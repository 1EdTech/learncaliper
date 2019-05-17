import React, {Component} from "react"
import * as PropTypes from "prop-types"
import Typography from "@material-ui/core/Typography"
import Tooltip from "./Tooltip"


class Actor extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let actor = this.props.actor;
        let output = actor;

        if (typeof actor === 'object') {
            output = actor.type;
            if (actor.name) {
                output = actor.name;
            }
        }


        return <Tooltip text={output} jsonContent={actor}/>
    }

}

Event.propTypes = {
    actor: PropTypes.object
}

export default Actor;

