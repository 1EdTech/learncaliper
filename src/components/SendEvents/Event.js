import React, {Component} from "react"
import * as PropTypes from "prop-types"
import CodeSampleActions from "../../actions/CodeSampleActions"
import {Highlighter} from "../util/Highlighter"
import Grid from "@material-ui/core/Grid"
import {Action} from "./Action"
import Link from "@material-ui/core/Link"
import LaunchIcon from "@material-ui/icons/Launch"

export class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {code: null, json: null};

        this.fetchCode = this.fetchCode.bind(this);
        this.updateCode = this.updateCode.bind(this);
        this.updateJson = this.updateJson.bind(this);
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

    render() {
        return <div>
            <h4>{this.props.event.name} (<Link href={this.props.event.docUrl} target="_blank">Documentation<LaunchIcon style={{fontSize: 'small'}}/></Link>)</h4>

                   <ul>
                       {this.props.event.actions.map((action, index) => {
                           return <Action action={action} fetchCode={this.fetchCode} key={index}/>
                       })}
                   </ul>
                   <Grid container spacing={2}>
                       <Highlighter code={this.state.json} format="json"/>
                       <Highlighter code={this.state.code} format="ruby"/>
                   </Grid>
               </div>
    }
}

Event.propTypes = {
    event: PropTypes.object,
    profileName: PropTypes.string
}
