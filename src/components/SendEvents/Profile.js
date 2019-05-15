import React, {Component} from "react"
import * as PropTypes from "prop-types"
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary"
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails"
import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Event} from "./Event"

export class Profile extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <ExpansionPanel TransitionProps={{unmountOnExit: true}}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography>{this.props.profile.name}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <div>
                        <a target="new" href={this.props.profile.docUrl}>Documentation for this profile.</a>
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
