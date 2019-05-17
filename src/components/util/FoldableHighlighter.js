import React, {Component} from "react"
import * as PropTypes from "prop-types"
import {Highlighter} from "./Highlighter"
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary"
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails"
import ExpansionPanel from "@material-ui/core/ExpansionPanel"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ListIcon from "@material-ui/icons/Subject"

class FoldableHighlighter extends Component {
    constructor(props) {
        super(props);
    }

    styles() {
        return {
            expander: {
                borderRadius: "20px",
                width: "max-content",
                borderStyle: "dotted",
                borderWidth: "thin"
            },
            p:{
                margin: "initial"
            }
        }
    }

    render() {
        const styles = this.styles();

        return <div>
            <ExpansionPanel style={styles.expander}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                    <p style={styles.p}>{this.props.title}</p>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Highlighter {...this.props} title=""/>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    }
}

Highlighter.propTypes = {
    code: PropTypes.string,
    format: PropTypes.oneOf(['json', 'ruby']),
    title: PropTypes.string,
    closed: PropTypes.bool
}

export default FoldableHighlighter
