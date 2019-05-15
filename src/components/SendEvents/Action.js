import React, {Component} from "react"
import Button from "@material-ui/core/Button"
import * as PropTypes from "prop-types"

export class Action extends Component {
    render() {
        const fetchCode = (event) => {
            this.props.fetchCode({action: this.props.action.name});
            event.preventDefault();
        };

        return <li>
            <Button color="primary" onClick={fetchCode}>{this.props.action.name}</Button>
        </li>
    }
}

Action.propTypes = {fetchCode: PropTypes.func}
