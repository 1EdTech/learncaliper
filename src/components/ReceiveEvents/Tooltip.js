import React, {Component} from "react"
import * as PropTypes from "prop-types"
import Typography from "@material-ui/core/Typography"
import MaterialTooltip from "@material-ui/core/Tooltip"


class Tooltip extends Component {
    constructor(props) {
        super(props);

        this.toolTip = this.toolTip.bind(this);
    }

    styles() {
        return {
            tooltip: {
                backgroundColor: '#f5f5f9',
                border: '1px solid #dadde9',
            }
        }
    }

    render() {
        const styles = this.styles();

        return <MaterialTooltip title={this.toolTip()} interactive style={styles.tooltip}>
            <span>{this.props.text}</span>
        </MaterialTooltip>
    }

    toolTip() {
        return <React.Fragment>
            <pre><code>{JSON.stringify(this.props.jsonContent, null, 2)}</code></pre>
        </React.Fragment>
    }
}

Event.propTypes = {
    text: PropTypes.string,
    jsonContent: PropTypes.object
}

export default Tooltip;

