import React, {Component} from "react"
import * as PropTypes from "prop-types"

export class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {};

        this.sendEvent = this.sendEvent.bind(this);
    }

    sendEvent(event) {
        // this.setState({[event.target.id]: event.target.value})
        console.log("Sending!", event.target.name);
        event.preventDefault();
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
        </div>
    }
}

Profile.propTypes = {profileName: PropTypes.any}
