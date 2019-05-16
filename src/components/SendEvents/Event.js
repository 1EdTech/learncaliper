import React, {Component} from "react"
import * as PropTypes from "prop-types"
import CodeSampleActions from "../../actions/CodeSampleActions"
import EventActions from "../../actions/EventActions"
import {Highlighter} from "../util/Highlighter"
import Grid from "@material-ui/core/Grid"
import {Action} from "./Action"
import Link from "@material-ui/core/Link"
import LaunchIcon from "@material-ui/icons/Launch"
import CredentialStore from "../../stores/CredentialStore"

export class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {code: null, json: null, envelope: null};

        this.fetchCode = this.fetchCode.bind(this);
        this.sendEvent = this.sendEvent.bind(this);
        this.updateCode = this.updateCode.bind(this);
        this.updateJson = this.updateJson.bind(this);
        this.updateResults = this.updateResults.bind(this);
    }

    fetchCode(event) {
        event["event"] = this.props.event.name
        event["profile"] = this.props.profileName
        CodeSampleActions.fetchCode(event, this.updateCode);
        CodeSampleActions.fetchJson(event, this.updateJson);
    }
    updateCode(text) {
        this.setState({code: text})
    }

    updateJson(text) {
        this.setState({json: text})
    }

    sendEvent(event) {
        event["event"] = this.props.event.name
        event["profile"] = this.props.profileName
        EventActions.sendEvent(CredentialStore.getCurrentCredentials(), event, this.updateResults)
    }

    updateResults(json){
        this.setState({envelope: json})
    }

    render() {
        return <div>
            <h4>{this.props.event.name} (<Link href={this.props.event.docUrl} target="_blank">Documentation<LaunchIcon style={{fontSize: 'small'}}/></Link>)</h4>
            <h5>Actions</h5>
                   <ul>
                       {this.props.event.actions.map((action, index) => {
                           return <Action action={action} sendEvent={this.sendEvent} fetchCode={this.fetchCode} key={index}/>
                       })}
                   </ul>
                   <Grid container spacing={2}>
                       <Highlighter title="Event Sent with Envelope" code={this.state.envelope} format="json"/>
                       <Highlighter title="Example Event JSON" code={this.state.json} format="json"/>
                       <Highlighter title="Ruby code used to generate this event." code={this.state.code} format="ruby"/>
                   </Grid>
               </div>
    }
}

Event.propTypes = {
    event: PropTypes.object,
    profileName: PropTypes.string
}
