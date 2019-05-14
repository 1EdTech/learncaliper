import React, {Component} from "react"
import * as PropTypes from "prop-types"
import CodeSampleActions from "../../actions/CodeSampleActions"
import {Highlighter} from "../util/Highlighter"

export class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {code: null};

        this.sendEvent = this.sendEvent.bind(this);
        this.updateCode = this.updateCode.bind(this);
    }

    sendEvent(event) {
        CodeSampleActions.fetchCode("code", this.updateCode);
        event.preventDefault();
    }

    updateCode(text) {
        this.setState({code: text})
    }

    render() {
        return <div>
            <h3>{this.props.profileName}</h3>
            <ul>
                <li>Navigation Event
                    <ul>
                        <li>NavigatedTo</li>
                    </ul>
                </li>
                <li>View Event
                    <ul>
                        <li>
                            <button name="ViewEvent" className="btn btn-secondary" onClick={this.sendEvent}>Viewed</button>
                        </li>
                    </ul>
                </li>
            </ul>
            <Highlighter code={this.state.code}/>
        </div>
    }
}

Profile.propTypes = {profileName: PropTypes.any}
