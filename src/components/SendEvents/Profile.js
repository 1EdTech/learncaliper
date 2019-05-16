import React, {Component} from "react"
import * as PropTypes from "prop-types"
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary"
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Event} from "./Event"
import Link from "@material-ui/core/Link"
import LaunchIcon from "@material-ui/icons/Launch"
import ListIcon from "@material-ui/icons/Subject"

export class Profile extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <ExpansionPanel TransitionProps={{unmountOnExit: true}}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <h3><ListIcon style={{fontSize: 'xx-large', position: "relative", top: "10px", left: "-1px"}} />
                    {this.props.profile.name}
                    (<Link href={this.props.profile.docUrl} target="_blank">Documentation<LaunchIcon style={{fontSize: 'small'}} /></Link>)
                    </h3>
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
