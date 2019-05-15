import React, {Component} from "react"
import * as PropTypes from "prop-types"
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary"
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails"
import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Event} from "./Event"
import Link from "@material-ui/core/Link"
import LaunchIcon from "@material-ui/icons/Launch"

export class Profile extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <ExpansionPanel TransitionProps={{unmountOnExit: true}}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <h3>{this.props.profile.name} (<Link href={this.props.profile.docUrl} target="_blank">Documentation<LaunchIcon style={{fontSize: 'small'}} /></Link>)</h3>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <div>
                            {this.props.profile.events.map((calEvent, index) => {
                                return <Event event={calEvent} profileName={this.props.profile.id} key={index}/>
                            })}
                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    }
}

Profile.propTypes = {profile: PropTypes.object}
